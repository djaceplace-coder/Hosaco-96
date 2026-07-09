import React, { useEffect } from 'react';
import { useOutletContext, Link } from 'react-router-dom';
import { Card } from '../../components/ui/Card';
import { Button } from '../../components/ui/Button';
import { supabase } from '../../lib/supabase';

export default function AccountSubscription() {
  const { profile } = useOutletContext<any>();
  // Real implementation would fetch from `subscriptions` table.
  const hasActiveSubscription = false; 

  useEffect(() => {
    // Listen for subscription updates
    const channel = supabase.channel('user_subscriptions')
      .on('postgres_changes', { event: '*', schema: 'public', table: 'subscriptions', filter: `profile_id=eq.${profile?.id}` }, payload => {
         console.log('Realtime subscription event', payload);
         // setHasActiveSubscription(...)
      })
      .subscribe();
      
    return () => { supabase.removeChannel(channel); };
  }, [profile?.id]);

  return (
    <div className="space-y-8">
      <div>
        <h1 className="font-serif text-3xl text-ink-navy mb-2">Subscription</h1>
        <p className="text-ink-navy/70">Manage your membership tier and renewal settings.</p>
      </div>

      <Card className="p-8 border-t-4 border-t-harmattan-gold">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div>
            <div className="text-sm font-bold tracking-wider text-ink-navy/60 uppercase mb-1">Current Tier</div>
            <h2 className="font-serif text-3xl text-ink-navy mb-2">
              {hasActiveSubscription ? 'Basic Member' : 'None'}
            </h2>
            <p className="text-ink-navy/70">
              {hasActiveSubscription 
                ? 'Your subscription is active and will auto-renew.' 
                : 'You do not have an active membership subscription.'}
            </p>
          </div>
          <div>
            {hasActiveSubscription ? (
              <Button variant="outline" className="text-brick-clay border-brick-clay/20 hover:bg-brick-clay/5">Cancel Subscription</Button>
            ) : (
              <Link to="/get-involved">
                <Button variant="primary">View Tiers & Subscribe</Button>
              </Link>
            )}
          </div>
        </div>
      </Card>
      
      {hasActiveSubscription && (
        <Card className="p-6">
          <h3 className="font-serif text-xl mb-4 text-ink-navy">Payment Method</h3>
          <div className="flex items-center gap-4 text-ink-navy/80 bg-ink-navy/5 p-4 rounded">
             <div className="w-12 h-8 bg-ink-navy/10 rounded flex items-center justify-center font-bold text-xs">CARD</div>
             <div>
                <div className="font-medium">•••• •••• •••• 4242</div>
                <div className="text-sm text-ink-navy/60">Expires 12/28</div>
             </div>
          </div>
          <div className="mt-4">
            <Button variant="outline" size="sm">Update Payment Method</Button>
          </div>
        </Card>
      )}
    </div>
  );
}
