import React from 'react';
import { useOutletContext, Link } from 'react-router-dom';
import { Card } from '../../components/ui/Card';
import { Button } from '../../components/ui/Button';

export default function AccountDashboard() {
  const { profile } = useOutletContext<any>();

  return (
    <div className="space-y-8">
      <div>
        <h1 className="font-serif text-3xl text-ink-navy mb-2">Welcome back, {profile?.full_name?.split(' ')[0] || 'Member'}</h1>
        <p className="text-ink-navy/70">Manage your membership, view your giving history, and connect with the community.</p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        <Card className="p-6">
          <h3 className="font-serif text-xl mb-2 text-ink-navy">Membership Tier</h3>
          <div className="text-2xl font-semibold text-harmattan-gold mb-4">Basic Member</div>
          <Link to="/account/subscription">
            <Button variant="outline" className="w-full">Manage Subscription</Button>
          </Link>
        </Card>
        
        <Card className="p-6">
          <h3 className="font-serif text-xl mb-2 text-ink-navy">Recent Donations</h3>
          <div className="text-2xl font-semibold text-palm-green mb-4">₦0.00</div>
          <Link to="/account/donations">
            <Button variant="outline" className="w-full">View History</Button>
          </Link>
        </Card>

        <Card className="p-6">
          <h3 className="font-serif text-xl mb-2 text-ink-navy">Upcoming Events</h3>
          <div className="text-lg font-medium text-ink-navy/70 mb-4">No events RSVP'd</div>
          <Link to="/account/events">
            <Button variant="outline" className="w-full">Browse Events</Button>
          </Link>
        </Card>
      </div>
      
      <Card className="p-8 bg-adire-indigo/5 border-adire-indigo/10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="font-serif text-2xl mb-2 text-ink-navy">Support Our Causes</h3>
            <p className="text-ink-navy/70 max-w-xl">
              Your ongoing support enables us to continue funding our charitable initiatives.
            </p>
          </div>
          <Link to="/donate">
            <Button variant="donate">Make a Donation</Button>
          </Link>
        </div>
      </Card>
    </div>
  );
}
