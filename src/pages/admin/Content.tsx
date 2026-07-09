import React from 'react';
import { Card } from '../../components/ui/Card';
import { Button } from '../../components/ui/Button';

export default function AdminContent() {
  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center mb-4">
        <h2 className="font-serif text-3xl text-ink-navy">Content Management</h2>
        <Button variant="primary">Create New Content</Button>
      </div>
      
      <div className="grid md:grid-cols-2 gap-6">
        <Card className="p-6">
          <h3 className="font-serif text-xl mb-4 text-ink-navy">Programs</h3>
          <p className="text-ink-navy/70 text-sm mb-4">Manage the charity programs and initiatives shown on the site.</p>
          <Button variant="outline" className="w-full">Manage Programs</Button>
        </Card>
        
        <Card className="p-6">
          <h3 className="font-serif text-xl mb-4 text-ink-navy">News & Stories</h3>
          <p className="text-ink-navy/70 text-sm mb-4">Post updates, announcements, and success stories.</p>
          <Button variant="outline" className="w-full">Manage News</Button>
        </Card>

        <Card className="p-6">
          <h3 className="font-serif text-xl mb-4 text-ink-navy">Gallery</h3>
          <p className="text-ink-navy/70 text-sm mb-4">Upload and organize images from past events and projects.</p>
          <Button variant="outline" className="w-full">Manage Gallery</Button>
        </Card>
      </div>
    </div>
  );
}
