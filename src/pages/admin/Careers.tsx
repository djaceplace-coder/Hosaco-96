import React from 'react';
import { Card } from '../../components/ui/Card';
import { Button } from '../../components/ui/Button';

export default function AdminCareers() {
  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center mb-4">
        <h2 className="font-serif text-3xl text-ink-navy">Careers Management</h2>
        <Button variant="primary">Post Job Listing</Button>
      </div>
      
      <Card className="p-6">
         <div className="text-center py-8 text-ink-navy/50">No job listings posted yet.</div>
      </Card>
    </div>
  );
}
