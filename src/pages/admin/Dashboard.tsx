import React, { useEffect } from 'react';
import { useOutletContext, Link } from 'react-router-dom';
import { Card } from '../../components/ui/Card';
import { supabase } from '../../lib/supabase';

export default function AdminDashboard() {
  const { profile } = useOutletContext<any>();

  useEffect(() => {
    // Listen for new transactions
    const channel = supabase.channel('admin_transactions')
      .on('postgres_changes', { event: '*', schema: 'public', table: 'transactions' }, payload => {
         console.log('Realtime transaction event', payload);
         // update local metrics (mock implementation for realtime)
      })
      .subscribe();
      
    return () => { supabase.removeChannel(channel); };
  }, []);

  return (
    <div className="space-y-6">
      <h2 className="font-serif text-3xl text-ink-navy mb-4">Dashboard</h2>
      
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
        <Card className="p-6 border-t-4 border-t-harmattan-gold">
          <div className="text-sm font-bold tracking-wider text-ink-navy/60 uppercase mb-2">Active Members</div>
          <div className="text-3xl font-semibold text-ink-navy">124</div>
        </Card>
        
        <Card className="p-6 border-t-4 border-t-palm-green">
          <div className="text-sm font-bold tracking-wider text-ink-navy/60 uppercase mb-2">Est. MRR</div>
          <div className="text-3xl font-semibold text-ink-navy">₦450k</div>
        </Card>
        
        <Card className="p-6 border-t-4 border-t-adire-indigo">
          <div className="text-sm font-bold tracking-wider text-ink-navy/60 uppercase mb-2">Upcoming Events</div>
          <div className="text-3xl font-semibold text-ink-navy">3</div>
        </Card>
        
        <Card className="p-6 border-t-4 border-t-brick-clay">
          <div className="text-sm font-bold tracking-wider text-ink-navy/60 uppercase mb-2">Pending Jobs</div>
          <div className="text-3xl font-semibold text-ink-navy">2</div>
        </Card>
      </div>

      <div className="grid lg:grid-cols-2 gap-8 mt-8">
        <Card className="p-6">
          <h3 className="font-serif text-xl mb-4 text-ink-navy">Recent Transactions</h3>
          <div className="text-center py-8 text-ink-navy/50">Loading transactions...</div>
        </Card>
        <Card className="p-6">
          <h3 className="font-serif text-xl mb-4 text-ink-navy">Quick Actions</h3>
          <div className="space-y-3">
             <Link to="/admin/content" className="block p-3 rounded-lg border border-ink-navy/10 hover:bg-ink-navy/5 transition-colors font-medium">Post a New Story</Link>
             <Link to="/admin/users" className="block p-3 rounded-lg border border-ink-navy/10 hover:bg-ink-navy/5 transition-colors font-medium">Manage Member Roles</Link>
             <Link to="/admin/events" className="block p-3 rounded-lg border border-ink-navy/10 hover:bg-ink-navy/5 transition-colors font-medium">Create Event</Link>
          </div>
        </Card>
      </div>
    </div>
  );
}
