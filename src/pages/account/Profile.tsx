import React, { useState } from 'react';
import { useOutletContext } from 'react-router-dom';
import { Card } from '../../components/ui/Card';
import { Button } from '../../components/ui/Button';
import { supabase } from '../../lib/supabase';

export default function AccountProfile() {
  const { session, profile } = useOutletContext<any>();
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState('');

  const handleUpdate = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setMessage('');
    
    const formData = new FormData(e.currentTarget);
    const updates = {
      full_name: formData.get('full_name'),
      phone: formData.get('phone'),
      bio: formData.get('bio'),
      updated_at: new Date(),
    };

    try {
      const { error } = await supabase
        .from('profiles')
        .update(updates)
        .eq('id', session?.user?.id);
      
      if (error) throw error;
      setMessage('Profile updated successfully.');
    } catch (err: any) {
      setMessage(err.message || 'Error updating profile.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="space-y-8">
      <div>
        <h1 className="font-serif text-3xl text-ink-navy mb-2">Profile</h1>
        <p className="text-ink-navy/70">Update your personal details and public directory presence.</p>
      </div>

      <Card className="p-8">
        {message && (
          <div className="mb-6 p-4 bg-harmattan-gold/10 text-ink-navy font-medium rounded-md text-sm border border-harmattan-gold/20">
            {message}
          </div>
        )}
        <form onSubmit={handleUpdate} className="space-y-6 max-w-2xl">
          <div>
            <label className="block text-sm font-medium text-ink-navy/80 mb-2">Full Name</label>
            <input name="full_name" type="text" defaultValue={profile?.full_name} required className="w-full px-4 py-3 border border-ink-navy/20 rounded focus:outline-none focus:ring-2 focus:ring-harmattan-gold bg-transparent" />
          </div>
          <div>
            <label className="block text-sm font-medium text-ink-navy/80 mb-2">Email (Read Only)</label>
            <input type="email" value={session?.user?.email} disabled className="w-full px-4 py-3 border border-ink-navy/10 rounded bg-ink-navy/5 text-ink-navy/50 cursor-not-allowed" />
          </div>
          <div>
            <label className="block text-sm font-medium text-ink-navy/80 mb-2">Phone Number</label>
            <input name="phone" type="tel" defaultValue={profile?.phone} className="w-full px-4 py-3 border border-ink-navy/20 rounded focus:outline-none focus:ring-2 focus:ring-harmattan-gold bg-transparent" />
          </div>
          <div>
            <label className="block text-sm font-medium text-ink-navy/80 mb-2">Bio</label>
            <textarea name="bio" rows={4} defaultValue={profile?.bio} placeholder="Tell other alumni about yourself..." className="w-full px-4 py-3 border border-ink-navy/20 rounded focus:outline-none focus:ring-2 focus:ring-harmattan-gold bg-transparent"></textarea>
          </div>
          <Button type="submit" disabled={loading}>
            {loading ? 'Saving...' : 'Save Changes'}
          </Button>
        </form>
      </Card>
    </div>
  );
}
