import React, { useEffect, useState } from 'react';
import { Outlet, Link, useLocation, useNavigate } from 'react-router-dom';
import { supabase } from '../../lib/supabase';
import { Shield, Users, FileText, Calendar, CreditCard, Briefcase, File, Lock, LayoutDashboard, ArrowLeft } from 'lucide-react';
import PageWrapper from '../../components/PageWrapper';

const adminNavItems = [
  { path: '/admin', icon: LayoutDashboard, label: 'Dashboard', exact: true },
  { path: '/admin/users', icon: Users, label: 'Users & Roles' },
  { path: '/admin/content', icon: FileText, label: 'Content Management' },
  { path: '/admin/events', icon: Calendar, label: 'Events Management' },
  { path: '/admin/payments', icon: CreditCard, label: 'Payments & Finance' },
  { path: '/admin/committee', icon: Users, label: 'Committee Directory' },
  { path: '/admin/careers', icon: Briefcase, label: 'Careers' },
  { path: '/admin/transparency', icon: File, label: 'Transparency Docs' },
  { path: '/admin/audit-log', icon: Lock, label: 'Audit Log' },
];

export default function AdminLayout() {
  const [session, setSession] = useState<any>(null);
  const [profile, setProfile] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      if (session) {
        setSession(session);
        fetchProfile(session.user.id);
      } else {
        setLoading(false);
        navigate('/login');
      }
    });

    const { data: { subscription } } = supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session);
      if (!session) navigate('/login');
    });

    return () => subscription.unsubscribe();
  }, [navigate]);

  const fetchProfile = async (userId: string) => {
    try {
      const { data, error } = await supabase
        .from('profiles')
        .select('*')
        .eq('id', userId)
        .single();
      
      if (!error && data) {
        setProfile(data);
        if (data.role !== 'admin') {
          navigate('/account');
        }
      } else {
        navigate('/');
      }
    } catch (err) {
      console.error('Error fetching profile:', err);
      navigate('/');
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <PageWrapper>
        <div className="pt-32 pb-24 min-h-screen flex justify-center items-center font-serif text-2xl text-ink-navy">
          Loading Admin Console...
        </div>
      </PageWrapper>
    );
  }

  if (profile?.role !== 'admin') return null;

  return (
    <PageWrapper>
      <div className="pt-24 pb-24 bg-ink-navy/5 min-h-screen">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 mt-8">
          
          <div className="flex flex-col lg:flex-row gap-8">
            {/* Sidebar */}
            <aside className="w-full lg:w-72 shrink-0 space-y-6">
              <div className="bg-ink-navy text-parchment rounded-2xl p-6 shadow-lg text-center relative overflow-hidden">
                <div className="absolute -top-12 -right-12 w-24 h-24 bg-harmattan-gold/20 rounded-full blur-xl" />
                <Shield size={32} className="mx-auto mb-4 text-harmattan-gold" />
                <h3 className="font-serif text-xl font-semibold mb-1">Admin Console</h3>
                <div className="inline-block px-3 py-1 rounded bg-harmattan-gold/20 text-harmattan-gold text-xs font-bold uppercase tracking-wider">
                  {profile.admin_level || 'Scoped Admin'}
                </div>
              </div>

              <nav className="bg-white rounded-2xl border border-ink-navy/10 shadow-sm overflow-hidden">
                <ul className="divide-y divide-ink-navy/5">
                  <li>
                    <Link 
                      to="/account" 
                      className="flex items-center gap-3 px-6 py-4 text-sm font-medium transition-colors text-brick-clay hover:bg-brick-clay/5 bg-brick-clay/5"
                    >
                      <ArrowLeft size={18} />
                      Exit Admin Mode
                    </Link>
                  </li>
                  {adminNavItems.map((item) => {
                    const isActive = item.exact 
                      ? location.pathname === item.path 
                      : location.pathname.startsWith(item.path);
                    return (
                      <li key={item.path}>
                        <Link 
                          to={item.path} 
                          className={`flex items-center gap-3 px-6 py-4 text-sm font-medium transition-colors ${
                            isActive 
                              ? 'bg-ink-navy text-white' 
                              : 'text-ink-navy hover:bg-ink-navy/5'
                          }`}
                        >
                          <item.icon size={18} className={isActive ? 'text-harmattan-gold' : 'text-ink-navy/60'} />
                          {item.label}
                        </Link>
                      </li>
                    );
                  })}
                </ul>
              </nav>
            </aside>

            {/* Main Content */}
            <main className="flex-1 min-w-0">
              <div className="bg-white rounded-2xl shadow-sm border border-ink-navy/10 p-8 min-h-[600px]">
                <Outlet context={{ session, profile }} />
              </div>
            </main>
          </div>
        </div>
      </div>
    </PageWrapper>
  );
}
