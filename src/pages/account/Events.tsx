import React from 'react';
import { Card } from '../../components/ui/Card';
import { Button } from '../../components/ui/Button';

export default function AccountEvents() {
  const rsvps: any[] = []; 

  return (
    <div className="space-y-8">
      <div>
        <h1 className="font-serif text-3xl text-ink-navy mb-2">Events RSVP</h1>
        <p className="text-ink-navy/70">Manage your event registrations.</p>
      </div>

      <Card className="overflow-hidden">
        {rsvps.length === 0 ? (
          <div className="p-12 text-center text-ink-navy/60">
            <p>You haven't RSVP'd to any upcoming events.</p>
          </div>
        ) : (
          <div className="divide-y divide-ink-navy/5">
            {/* List RSVPs */}
          </div>
        )}
      </Card>
    </div>
  );
}
