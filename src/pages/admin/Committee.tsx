import React from 'react';
import { Card } from '../../components/ui/Card';
import { Button } from '../../components/ui/Button';

export default function AdminCommittee() {
  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center mb-4">
        <h2 className="font-serif text-3xl text-ink-navy">Committee Directory</h2>
        <Button variant="primary">Add Member</Button>
      </div>
      
      <Card className="p-6">
        <p className="text-ink-navy/70">Manage the Executive Committee and sub-committee listings shown on the Alumni Hub.</p>
        <div className="mt-8 text-center text-ink-navy/50">Committee listings will appear here.</div>
      </Card>
    </div>
  );
}
