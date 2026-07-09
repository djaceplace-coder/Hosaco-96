import React, { useEffect, useState } from 'react';
import { supabase } from '../lib/supabase';
import { useNavigate } from 'react-router-dom';
import { Button } from '../components/ui/Button';

export default function Profile() {
  const [user, setUser] = useState<any>(null);
  const navigate = useNavigate();

  useEffect(() => {
    supabase.auth.getUser().then(({ data: { user } }) => {
      if (user) {
        setUser(user);
      } else {
        navigate('/login');
      }
    });
  }, [navigate]);

  const handleLogout = async () => {
    await supabase.auth.signOut();
    navigate('/');
  };

  if (!user) return <div className="pt-32 text-center">Loading...</div>;

  return (
    <div className="pt-32 pb-24 max-w-4xl mx-auto px-4 sm:px-6">
      <h1 className="font-serif text-3xl font-semibold mb-8">My Profile</h1>
      <div className="bg-white p-6 rounded-xl border border-adire-indigo/10 shadow-sm mb-8">
        <p className="text-ink-navy/80 mb-2"><strong>Email:</strong> {user.email}</p>
        <p className="text-ink-navy/80 mb-6"><strong>Status:</strong> Active Member</p>
        <Button variant="outline" onClick={handleLogout}>Log Out</Button>
      </div>
    </div>
  );
}
