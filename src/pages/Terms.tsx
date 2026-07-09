import React from 'react';
import PageWrapper from '../components/PageWrapper';
import { motion } from 'motion/react';

export default function Terms() {
  return (
    <PageWrapper>
      <div className="pt-32 pb-24 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 prose prose-lg prose-ink-navy">
        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }}>
          <h1 className="font-serif italic text-4xl md:text-5xl text-ink-navy mb-8">Terms of Service</h1>
          <p className="text-sm text-ink-navy/60 mb-8 font-mono">Last updated: October 2023</p>
          
          <h2 className="font-serif text-2xl text-ink-navy mb-4">1. Acceptance of Terms</h2>
          <p>By accessing and using this website, you accept and agree to be bound by the terms and provision of this agreement.</p>
          
          <h2 className="font-serif text-2xl text-ink-navy mb-4 mt-8">2. Membership Rules</h2>
          <p>Members of the Hosaco96 Association are expected to conduct themselves in a manner that upholds the dignity and honor of the institution. Any breach of conduct may result in suspension or termination of membership.</p>
          
          <h2 className="font-serif text-2xl text-ink-navy mb-4 mt-8">3. Donations and Subscriptions</h2>
          <p>All donations and subscription payments are non-refundable unless otherwise specified in writing by the Executive Committee.</p>
        </motion.div>
      </div>
    </PageWrapper>
  );
}
