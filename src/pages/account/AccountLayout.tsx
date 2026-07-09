import React, { useEffect, useState } from 'react';
import { Outlet, Link, useLocation, useNavigate } from 'react-router-dom';
import { supabase } from '../../lib/supabase';
import { User, CreditCard, Receipt, Heart, Calendar, Users, LogOut, Shield } from 'lucide-react';
import PageWrapper from '../../components/PageWrapper';

const navItems = [
  { path: '/account', icon: User, label: 'Dashboard', exact: true },
  { path: '/account/profile', icon: User, label: 'Profile' },
  { path: '/account/subscription', icon: CreditCard, label: 'Subscription' },
  { path: '/account/billing', icon: Receipt, label: 'Billing History' },
  { path: '/account/donations', icon: Heart, label: 'Donations' },
  { path: '/account/events', icon: Calendar, label: 'Events RSVP' },
  { path: '/account/directory', icon: Users, label: 'Member Directory' },
];

export default function AccountLayout() {
  const [session, setSession] = useState<any>(null);
  const [profile, setProfile] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      setSession(session);
      if (session) {
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
      }
    } catch (err) {
      console.error('Error fetching profile:', err);
    } finally {
      setLoading(false);
    }
  };

  const handleLogout = async () => {
    await supabase.auth.signOut();
    navigate('/login');
  };

  if (loading) {
    return (
      <PageWrapper>
        <div className="pt-32 pb-24 min-h-screen flex justify-center items-center font-serif text-2xl text-ink-navy">
          Loading...
        </div>
      </PageWrapper>
    );
  }

  const isAdmin = profile?.role === 'admin';

  return (
    <PageWrapper>
      <div className="pt-24 pb-24 bg-parchment min-h-screen">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-8">
          
          <div className="flex flex-col lg:flex-row gap-8">
            {/* Sidebar */}
            <aside className="w-full lg:w-64 shrink-0 space-y-6">
              <div className="bg-white rounded-2xl p-6 border border-ink-navy/10 shadow-sm text-center">
                <div className="w-20 h-20 mx-auto rounded-full bg-ink-navy/5 overflow-hidden border-2 border-harmattan-gold/50 mb-4">
                  {profile?.photo_url ? (
                    <img src={profile.photo_url} alt="Profile" className="w-full h-full object-cover" />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center text-ink-navy/50 font-serif text-2xl">
                      {profile?.full_name?.charAt(0) || session?.user?.email?.charAt(0)}
                    </div>
                  )}
                </div>
                <h3 className="font-serif text-lg text-ink-navy font-semibold truncate">{profile?.full_name || 'Member'}</h3>
                <p className="text-sm text-ink-navy/60 truncate mb-4">{session?.user?.email}</p>
                <div className="inline-block px-3 py-1 rounded-full bg-harmattan-gold/10 text-harmattan-gold text-xs font-bold uppercase tracking-wider">
                  {isAdmin ? 'Admin' : 'Active Member'}
                </div>
              </div>

              <nav className="bg-white rounded-2xl border border-ink-navy/10 shadow-sm overflow-hidden">
                <ul className="divide-y divide-ink-navy/5">
                  {isAdmin && (
                    <li>
                      <Link 
                        to="/admin" 
                        className="flex items-center gap-3 px-6 py-4 text-sm font-medium transition-colors text-brick-clay hover:bg-brick-clay/5"
                      >
                        <Shield size={18} />
                        Admin Console
                      </Link>
                    </li>
                  )}
                  {navItems.map((item) => {
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
                  <li>
                    <button 
                      onClick={handleLogout}
                      className="w-full flex items-center gap-3 px-6 py-4 text-sm font-medium transition-colors text-ink-navy/70 hover:bg-brick-clay/10 hover:text-brick-clay"
                    >
                      <LogOut size={18} />
                      Sign Out
                    </button>
                  </li>
                </ul>
              </nav>
            </aside>

            {/* Main Content */}
            <main className="flex-1">
              <Outlet context={{ session, profile }} />
            </main>
          </div>
        </div>
      </div>
    </PageWrapper>
  );
}
