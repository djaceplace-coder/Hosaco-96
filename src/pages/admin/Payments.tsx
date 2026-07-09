import React from 'react';
import { Card } from '../../components/ui/Card';
import { Button } from '../../components/ui/Button';
import { Download } from 'lucide-react';

export default function AdminPayments() {
  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center mb-4">
        <h2 className="font-serif text-3xl text-ink-navy">Payments & Finance</h2>
        <Button variant="outline"><Download size={16} className="mr-2" /> Export Reconciliation</Button>
      </div>
      
      <Card className="overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left">
            <thead className="bg-ink-navy/5 text-ink-navy/70 text-sm font-semibold border-b border-ink-navy/10">
              <tr>
                <th className="px-6 py-4">Date</th>
                <th className="px-6 py-4">User</th>
                <th className="px-6 py-4">Type</th>
                <th className="px-6 py-4">Amount</th>
                <th className="px-6 py-4">Status</th>
                <th className="px-6 py-4 text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-ink-navy/5">
               {/* Map transactions here */}
            </tbody>
          </table>
          <div className="p-8 text-center text-ink-navy/50">Loading transactions...</div>
        </div>
      </Card>
    </div>
  );
}
