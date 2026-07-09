import React, { useState } from 'react';
import { supabase } from '../lib/supabase';
import { useNavigate } from 'react-router-dom';
import { Card } from '../components/ui/Card';
import { Button } from '../components/ui/Button';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const navigate = useNavigate();

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    const { error } = await supabase.auth.signInWithPassword({ email, password });
    if (error) {
      setError(error.message);
    } else {
      navigate('/profile');
    }
    setLoading(false);
  };

  return (
    <div className="pt-32 pb-24 max-w-md mx-auto px-4 sm:px-6">
      <Card className="p-8">
        <h2 className="font-serif text-3xl font-semibold mb-6 text-center">Member Access</h2>
        {error && <div className="bg-brick-clay/10 text-brick-clay p-3 rounded mb-4 text-sm">{error}</div>}
        <form onSubmit={handleLogin} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-ink-navy/80 mb-1">Email</label>
            <input 
              type="email" 
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 py-2 border border-ink-navy/20 rounded focus:outline-none focus:ring-2 focus:ring-harmattan-gold"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-ink-navy/80 mb-1">Password</label>
            <input 
              type="password" 
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-4 py-2 border border-ink-navy/20 rounded focus:outline-none focus:ring-2 focus:ring-harmattan-gold"
              required
            />
          </div>
          <Button type="submit" className="w-full mt-4" disabled={loading}>
            {loading ? 'Authenticating...' : 'Log In'}
          </Button>
        </form>
      </Card>
    </div>
  );
}
