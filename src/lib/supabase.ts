import { createClient } from '@supabase/supabase-js';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL || 'https://zuutgwcuyobgysbnvixv.supabase.co';
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY || 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inp1dXRnd2N1eW9iZ3lzYm52aXh2Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODM1NDM4NDUsImV4cCI6MjA5OTExOTg0NX0.WhoICbGvjYIHDoE3q0iftJ60fWYMDBJib8H6wW6TqmY';

export const supabase = createClient(supabaseUrl, supabaseAnonKey);
