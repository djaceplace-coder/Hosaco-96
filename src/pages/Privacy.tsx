import React from 'react';
import PageWrapper from '../components/PageWrapper';
import { motion } from 'motion/react';

export default function Privacy() {
  return (
    <PageWrapper>
      <div className="pt-32 pb-24 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 prose prose-lg prose-ink-navy">
        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }}>
          <h1 className="font-serif italic text-4xl md:text-5xl text-ink-navy mb-8">Privacy Policy</h1>
          <p className="text-sm text-ink-navy/60 mb-8 font-mono">Last updated: October 2023</p>
          
          <h2 className="font-serif text-2xl text-ink-navy mb-4">1. Information We Collect</h2>
          <p>We collect information you provide directly to us, such as when you create or modify your account, request on-demand services, contact customer support, or otherwise communicate with us.</p>
          
          <h2 className="font-serif text-2xl text-ink-navy mb-4 mt-8">2. How We Use Information</h2>
          <p>We use the information we collect to maintain and improve our services, including to process transactions and send you related information such as confirmations and invoices.</p>
          
          <h2 className="font-serif text-2xl text-ink-navy mb-4 mt-8">3. Data Security</h2>
          <p>We take reasonable measures to help protect information about you from loss, theft, misuse and unauthorized access, disclosure, alteration and destruction.</p>
        </motion.div>
      </div>
    </PageWrapper>
  );
}
