import React from 'react';
import { Card } from '../../components/ui/Card';
import { useOutletContext } from 'react-router-dom';

export default function AdminUsers() {
  const { profile } = useOutletContext<any>();
  const isSuperAdmin = ['president', 'vp'].includes(profile?.admin_level);

  return (
    <div className="space-y-6">
      <h2 className="font-serif text-3xl text-ink-navy mb-4">Users & Roles</h2>
      <Card className="p-6">
        <div className="mb-6 flex justify-between items-center">
          <input 
            type="text" 
            placeholder="Search members by name or email..." 
            className="w-full max-w-md px-4 py-2 border border-ink-navy/20 rounded focus:outline-none focus:ring-2 focus:ring-harmattan-gold" 
          />
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-left">
            <thead className="bg-ink-navy/5 text-ink-navy/70 text-sm font-semibold border-b border-ink-navy/10">
              <tr>
                <th className="px-6 py-4">Name</th>
                <th className="px-6 py-4">Email</th>
                <th className="px-6 py-4">Status</th>
                <th className="px-6 py-4">Role</th>
                {isSuperAdmin && <th className="px-6 py-4 text-right">Actions</th>}
              </tr>
            </thead>
            <tbody className="divide-y divide-ink-navy/5">
               {/* Map users here */}
               <tr className="hover:bg-ink-navy/5">
                 <td className="px-6 py-4 text-ink-navy font-medium">John Doe</td>
                 <td className="px-6 py-4 text-ink-navy/70">john@example.com</td>
                 <td className="px-6 py-4"><span className="px-2 py-1 bg-palm-green/10 text-palm-green rounded text-xs">Active</span></td>
                 <td className="px-6 py-4">Member</td>
                 {isSuperAdmin && (
                   <td className="px-6 py-4 text-right">
                     <button className="text-brick-clay text-sm font-medium hover:underline">Edit Role</button>
                   </td>
                 )}
               </tr>
            </tbody>
          </table>
        </div>
      </Card>
    </div>
  );
}
