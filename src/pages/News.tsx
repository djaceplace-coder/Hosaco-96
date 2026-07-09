import React from 'react';
import PageWrapper from '../components/PageWrapper';

export default function News() {
  return (
    <PageWrapper>
      <div className="pt-32 pb-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="font-serif italic text-4xl md:text-5xl text-ink-navy mb-6">News & Stories</h1>
          <p className="text-ink-navy/70 max-w-2xl mx-auto">Latest updates on our community impact.</p>
          <div className="w-px h-16 bg-harmattan-gold/50 mx-auto mt-8" />
        </div>
        <div className="text-center text-ink-navy/60 font-mono">No articles published yet.</div>
      </div>
    </PageWrapper>
  );
}
