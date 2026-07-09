import React from 'react';
import { Card } from '../../components/ui/Card';
import { Link } from 'react-router-dom';
import { Button } from '../../components/ui/Button';

export default function AccountDonations() {
  const donations: any[] = []; // Real implementation would fetch from transactions where type='donation'

  return (
    <div className="space-y-8">
      <div>
        <h1 className="font-serif text-3xl text-ink-navy mb-2">Donations</h1>
        <p className="text-ink-navy/70">Thank you for your generous support of our programs.</p>
      </div>

      <Card className="p-8 text-center border border-dashed border-ink-navy/20 bg-transparent shadow-none">
         <h3 className="font-serif text-xl mb-4 text-ink-navy">Make an Impact Today</h3>
         <Link to="/donate">
           <Button variant="donate">Make a Donation</Button>
         </Link>
      </Card>

      <Card className="overflow-hidden">
        {donations.length === 0 ? (
          <div className="p-12 text-center text-ink-navy/60">
            <p>You haven't made any one-off donations yet.</p>
          </div>
        ) : (
          <div className="overflow-x-auto">
             {/* List donations */}
          </div>
        )}
      </Card>
    </div>
  );
}
