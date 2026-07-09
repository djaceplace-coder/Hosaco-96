import React, { useEffect, useState } from 'react';
import { useOutletContext, Link } from 'react-router-dom';
import { Card } from '../../components/ui/Card';
import { Button } from '../../components/ui/Button';
import { supabase } from '../../lib/supabase';

export default function AccountDirectory() {
  const { profile } = useOutletContext<any>();
  const [members, setMembers] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  // Check if they are admin or have active sub
  const hasAccess = profile?.role === 'admin' || false; // TODO: Check subscription status

  useEffect(() => {
    async function fetchMembers() {
      if (!hasAccess) {
        setLoading(false);
        return;
      }
      try {
        const { data } = await supabase
          .from('profiles')
          .select('*')
          .order('full_name');
        if (data) setMembers(data);
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    }
    fetchMembers();
  }, [hasAccess]);

  if (!hasAccess) {
    return (
      <div className="space-y-8">
        <div>
          <h1 className="font-serif text-3xl text-ink-navy mb-2">Alumni Directory</h1>
          <p className="text-ink-navy/70">Connect with fellow Hosaco96 members.</p>
        </div>
        <Card className="p-12 text-center">
          <div className="max-w-md mx-auto">
            <div className="w-16 h-16 bg-harmattan-gold/10 rounded-full flex items-center justify-center mx-auto mb-6 text-harmattan-gold">
              <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" /></svg>
            </div>
            <h3 className="font-serif text-2xl mb-4 text-ink-navy">Directory Access Restricted</h3>
            <p className="text-ink-navy/70 mb-8">Subscribe to a membership tier to unlock the alumni directory and network with other members.</p>
            <Link to="/get-involved">
              <Button variant="primary">View Membership Tiers</Button>
            </Link>
          </div>
        </Card>
      </div>
    );
  }

  return (
    <div className="space-y-8">
      <div>
        <h1 className="font-serif text-3xl text-ink-navy mb-2">Alumni Directory</h1>
        <p className="text-ink-navy/70">Connect with fellow Hosaco96 members.</p>
      </div>

      <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6">
        {loading ? (
          <p className="text-ink-navy/60">Loading directory...</p>
        ) : (
          members.map(member => (
            <Card key={member.id} className="p-6">
               <div className="flex items-center gap-4 mb-4">
                 <div className="w-12 h-12 rounded-full bg-ink-navy/10 overflow-hidden">
                   {member.photo_url ? (
                     <img src={member.photo_url} alt="" className="w-full h-full object-cover" />
                   ) : (
                     <div className="w-full h-full flex items-center justify-center text-ink-navy/50 font-serif">{member.full_name?.charAt(0)}</div>
                   )}
                 </div>
                 <div>
                   <h4 className="font-semibold text-ink-navy">{member.full_name}</h4>
                   <p className="text-xs text-ink-navy/60 uppercase tracking-wider">{member.role === 'admin' ? 'Admin' : 'Member'}</p>
                 </div>
               </div>
               {member.bio && (
                 <p className="text-sm text-ink-navy/70 line-clamp-2">{member.bio}</p>
               )}
            </Card>
          ))
        )}
      </div>
    </div>
  );
}
