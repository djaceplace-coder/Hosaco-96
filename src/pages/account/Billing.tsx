import React from 'react';
import { Card } from '../../components/ui/Card';
import { Button } from '../../components/ui/Button';
import { Download } from 'lucide-react';

export default function AccountBilling() {
  // Real implementation would fetch from `transactions` table.
  const transactions: any[] = []; 

  return (
    <div className="space-y-8">
      <div>
        <h1 className="font-serif text-3xl text-ink-navy mb-2">Billing History</h1>
        <p className="text-ink-navy/70">View and download receipts for your past transactions.</p>
      </div>

      <Card className="overflow-hidden">
        {transactions.length === 0 ? (
          <div className="p-12 text-center text-ink-navy/60">
            <p>No billing history found.</p>
          </div>
        ) : (
          <div className="overflow-x-auto">
            <table className="w-full text-left">
              <thead className="bg-ink-navy/5 text-ink-navy/70 text-sm font-semibold border-b border-ink-navy/10">
                <tr>
                  <th className="px-6 py-4">Date</th>
                  <th className="px-6 py-4">Description</th>
                  <th className="px-6 py-4">Amount</th>
                  <th className="px-6 py-4">Status</th>
                  <th className="px-6 py-4 text-right">Receipt</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-ink-navy/5">
                {transactions.map((t, i) => (
                  <tr key={i} className="hover:bg-ink-navy/5 transition-colors">
                    <td className="px-6 py-4 whitespace-nowrap text-ink-navy">{t.date}</td>
                    <td className="px-6 py-4 text-ink-navy">{t.description}</td>
                    <td className="px-6 py-4 font-mono text-ink-navy">{t.amount}</td>
                    <td className="px-6 py-4">
                      <span className="inline-block px-2 py-1 rounded text-xs font-medium bg-palm-green/10 text-palm-green">Paid</span>
                    </td>
                    <td className="px-6 py-4 text-right">
                      <Button variant="outline" size="sm" className="px-3">
                        <Download size={14} className="mr-2" /> Download
                      </Button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </Card>
    </div>
  );
}
