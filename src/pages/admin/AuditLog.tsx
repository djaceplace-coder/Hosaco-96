import React from 'react';
import { Card } from '../../components/ui/Card';

export default function AdminAuditLog() {
  return (
    <div className="space-y-6">
      <div className="mb-4">
        <h2 className="font-serif text-3xl text-ink-navy mb-2">Audit Log</h2>
        <p className="text-ink-navy/70">Read-only feed of critical system actions (role changes, permission grants).</p>
      </div>
      
      <Card className="overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left text-sm">
            <thead className="bg-ink-navy/5 text-ink-navy/70 font-semibold border-b border-ink-navy/10">
              <tr>
                <th className="px-6 py-3">Timestamp</th>
                <th className="px-6 py-3">Actor</th>
                <th className="px-6 py-3">Action</th>
                <th className="px-6 py-3">Target</th>
                <th className="px-6 py-3">Details</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-ink-navy/5">
               {/* Map audit logs here */}
               <tr className="hover:bg-ink-navy/5">
                 <td className="px-6 py-3 text-ink-navy/60 font-mono">2026-07-09 10:23:45</td>
                 <td className="px-6 py-3 text-ink-navy font-medium">President User</td>
                 <td className="px-6 py-3"><span className="px-2 py-1 bg-brick-clay/10 text-brick-clay rounded text-xs">ROLE_CHANGE</span></td>
                 <td className="px-6 py-3 text-ink-navy">John Doe</td>
                 <td className="px-6 py-3 text-ink-navy/70">Promoted from member to admin</td>
               </tr>
            </tbody>
          </table>
        </div>
      </Card>
    </div>
  );
}
