import React, { useState } from 'react';
import { supabase } from '../lib/supabase';
import { useNavigate, Link } from 'react-router-dom';
import { Card } from '../components/ui/Card';
import { Button } from '../components/ui/Button';
import PageWrapper from '../components/PageWrapper';

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
    <PageWrapper>
      <div className="pt-32 pb-24 max-w-md mx-auto px-4 sm:px-6">
        <Card className="p-8">
          <h2 className="font-serif text-3xl font-semibold mb-2 text-center">Member Access</h2>
          <p className="text-center text-ink-navy/60 text-sm mb-8">Log in to view the honors ledger and your impact.</p>
          {error && <div className="bg-brick-clay/10 text-brick-clay p-3 rounded mb-4 text-sm">{error}</div>}
          <form onSubmit={handleLogin} className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-ink-navy/80 mb-1">Email</label>
              <input 
                type="email" 
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-4 py-3 border border-ink-navy/20 rounded focus:outline-none focus:ring-2 focus:ring-harmattan-gold bg-transparent"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-ink-navy/80 mb-1">Password</label>
              <input 
                type="password" 
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-4 py-3 border border-ink-navy/20 rounded focus:outline-none focus:ring-2 focus:ring-harmattan-gold bg-transparent"
                required
              />
              <div className="text-right mt-1">
                <Link to="/forgot-password" className="text-xs text-harmattan-gold hover:underline">Forgot password?</Link>
              </div>
            </div>
            <Button type="submit" className="w-full mt-6" disabled={loading} size="lg">
              {loading ? 'Authenticating...' : 'Log In'}
            </Button>
            
            <div className="text-center mt-6 text-sm text-ink-navy/70">
              Don't have an account? <Link to="/signup" className="text-harmattan-gold font-medium hover:underline">Sign up</Link>
            </div>
          </form>
        </Card>
      </div>
    </PageWrapper>
  );
}
