import React from 'react';
import { Card } from '../../components/ui/Card';
import { Button } from '../../components/ui/Button';

export default function AdminTransparency() {
  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center mb-4">
        <h2 className="font-serif text-3xl text-ink-navy">Transparency Docs</h2>
        <Button variant="primary">Upload Document</Button>
      </div>
      
      <Card className="p-6">
        <p className="text-ink-navy/70 mb-4">Upload annual reports, financial audits, and governance documents for public viewing.</p>
        <div className="text-center py-8 text-ink-navy/50 border border-dashed border-ink-navy/20 rounded-lg">
          No documents uploaded yet.
        </div>
      </Card>
    </div>
  );
}
