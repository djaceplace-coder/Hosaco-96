import React from 'react';
import { Card } from '../../components/ui/Card';
import { Button } from '../../components/ui/Button';

export default function AdminEvents() {
  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center mb-4">
        <h2 className="font-serif text-3xl text-ink-navy">Events Management</h2>
        <Button variant="primary">Create Event</Button>
      </div>
      
      <Card className="overflow-hidden">
        <div className="p-12 text-center text-ink-navy/60">
           No events found. Create one to get started.
        </div>
      </Card>
    </div>
  );
}
