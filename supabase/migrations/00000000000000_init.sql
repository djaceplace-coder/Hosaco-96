-- Section 5 Database Migrations

-- 1. Profiles Table Extension (admin_level)
ALTER TABLE public.profiles
ADD COLUMN IF NOT EXISTS admin_level text CHECK (admin_level IN ('president','vp','admin'));

-- 2. Admin Scopes Table
CREATE TABLE IF NOT EXISTS public.admin_scopes (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  profile_id uuid NOT NULL REFERENCES public.profiles(id) ON DELETE CASCADE,
  scope text NOT NULL CHECK (scope IN (
    'user_management', 'content_management', 'events_management',
    'payments_finance', 'transparency_docs', 'careers',
    'committee_directory', 'audit_log_view'
  )),
  granted_by uuid REFERENCES public.profiles(id),
  created_at timestamptz NOT NULL DEFAULT now(),
  UNIQUE (profile_id, scope)
);

ALTER TABLE public.admin_scopes ENABLE ROW LEVEL SECURITY;

CREATE POLICY "admin_scopes_readable_by_admins"
  ON public.admin_scopes FOR SELECT
  USING (EXISTS (SELECT 1 FROM public.profiles p WHERE p.id = auth.uid() AND p.role = 'admin'));

CREATE POLICY "admin_scopes_president_vp_grant"
  ON public.admin_scopes FOR ALL
  USING (EXISTS (
    SELECT 1 FROM public.profiles p
    WHERE p.id = auth.uid() AND p.role = 'admin' AND p.admin_level IN ('president','vp')
  ))
  WITH CHECK (EXISTS (
    SELECT 1 FROM public.profiles p
    WHERE p.id = auth.uid() AND p.role = 'admin' AND p.admin_level IN ('president','vp')
  ));

-- 3. Contact Submissions Table
CREATE TABLE IF NOT EXISTS public.contact_submissions (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  email text NOT NULL,
  department text NOT NULL,
  message text NOT NULL,
  created_at timestamptz NOT NULL DEFAULT now(),
  resolved boolean DEFAULT false
);

ALTER TABLE public.contact_submissions ENABLE ROW LEVEL SECURITY;

-- Anyone can submit (anonymous insert)
CREATE POLICY "contact_insert_anon"
  ON public.contact_submissions FOR INSERT
  WITH CHECK (true);

-- Only admins can read
CREATE POLICY "contact_read_admins"
  ON public.contact_submissions FOR SELECT
  USING (EXISTS (SELECT 1 FROM public.profiles p WHERE p.id = auth.uid() AND p.role = 'admin'));

-- 4. Audit Log Table (If it doesn't already exist, and logic to log admin_level)
-- Assuming audit_log table exists from the previous specs, we update triggers if possible.
CREATE OR REPLACE FUNCTION log_profile_changes()
RETURNS trigger AS $$
BEGIN
  IF NEW.role IS DISTINCT FROM OLD.role OR NEW.admin_level IS DISTINCT FROM OLD.admin_level THEN
    INSERT INTO public.audit_log (actor_id, target_id, action, details)
    VALUES (
      auth.uid(), 
      NEW.id, 
      'ROLE_CHANGE', 
      'Changed role to ' || COALESCE(NEW.role, 'none') || ', admin_level to ' || COALESCE(NEW.admin_level, 'none')
    );
  END IF;
  RETURN NEW;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

DROP TRIGGER IF EXISTS tr_log_profile_changes ON public.profiles;
CREATE TRIGGER tr_log_profile_changes
  AFTER UPDATE ON public.profiles
  FOR EACH ROW
  EXECUTE FUNCTION log_profile_changes();

-- 5. Prevent Self Escalation
CREATE OR REPLACE FUNCTION prevent_self_role_escalation()
RETURNS trigger AS $$
DECLARE
  actor_admin_level text;
BEGIN
  -- Only trigger on role or admin_level changes
  IF NEW.role IS DISTINCT FROM OLD.role OR NEW.admin_level IS DISTINCT FROM OLD.admin_level THEN
    -- Check actor
    SELECT admin_level INTO actor_admin_level FROM public.profiles WHERE id = auth.uid();
    
    -- Needs to be president or vp to change roles
    IF actor_admin_level NOT IN ('president', 'vp') THEN
      RAISE EXCEPTION 'Only President or VP can change roles.';
    END IF;

    -- Only President can make another President or change President's role
    IF (NEW.admin_level = 'president' OR OLD.admin_level = 'president') AND actor_admin_level != 'president' THEN
      RAISE EXCEPTION 'Only the President can assign or alter a President role.';
    END IF;
  END IF;
  
  RETURN NEW;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

DROP TRIGGER IF EXISTS tr_prevent_self_role_escalation ON public.profiles;
CREATE TRIGGER tr_prevent_self_role_escalation
  BEFORE UPDATE ON public.profiles
  FOR EACH ROW
  EXECUTE FUNCTION prevent_self_role_escalation();

-- Note: Ensure 'transactions', 'subscriptions', 'programs', 'events', 'event_rsvps' exist.
