import React, { useState } from 'react';
import { supabase } from '../lib/supabase';
import { useNavigate, Link } from 'react-router-dom';
import { Card } from '../components/ui/Card';
import { Button } from '../components/ui/Button';
import PageWrapper from '../components/PageWrapper';

export default function Signup() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [fullName, setFullName] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState(false);

  const handleSignup = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    const { error } = await supabase.auth.signUp({ 
      email, 
      password,
      options: {
        data: {
          full_name: fullName
        }
      }
    });
    if (error) {
      setError(error.message);
    } else {
      setSuccess(true);
    }
    setLoading(false);
  };

  return (
    <PageWrapper>
      <div className="pt-32 pb-24 max-w-md mx-auto px-4 sm:px-6 min-h-screen flex items-center">
        <Card className="p-8 w-full shadow-2xl border-white/50">
          <h2 className="font-serif text-3xl font-semibold mb-2 text-center text-ink-navy">Create Account</h2>
          <p className="text-center text-ink-navy/60 text-sm mb-8">Join the Honors Ledger to track your impact.</p>
          
          {error && <div className="bg-brick-clay/10 text-brick-clay p-3 rounded mb-4 text-sm">{error}</div>}
          
          {success ? (
            <div className="text-center">
              <div className="w-16 h-16 bg-palm-green/20 text-palm-green rounded-full flex items-center justify-center mx-auto mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
              </div>
              <h3 className="font-serif text-xl mb-2">Check your email</h3>
              <p className="text-ink-navy/70 text-sm mb-6">We've sent a verification link to {email}.</p>
              <Link to="/login">
                <Button variant="outline" className="w-full">Return to Login</Button>
              </Link>
            </div>
          ) : (
            <form onSubmit={handleSignup} className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-ink-navy/80 mb-1">Full Name</label>
                <input 
                  type="text" 
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                  className="w-full px-4 py-3 border border-ink-navy/20 rounded focus:outline-none focus:ring-2 focus:ring-harmattan-gold bg-transparent"
                  required
                />
              </div>
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
                  minLength={6}
                />
              </div>
              <Button type="submit" className="w-full mt-6" disabled={loading} size="lg">
                {loading ? 'Creating Account...' : 'Sign Up'}
              </Button>
              
              <div className="text-center mt-6 text-sm text-ink-navy/70">
                Already have an account? <Link to="/login" className="text-harmattan-gold font-medium hover:underline">Log in</Link>
              </div>
            </form>
          )}
        </Card>
      </div>
    </PageWrapper>
  );
}
