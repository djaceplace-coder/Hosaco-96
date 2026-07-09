import React from 'react';
import PageWrapper from '../components/PageWrapper';
import { motion } from 'motion/react';
import { Card } from '../components/ui/Card';
import { Button } from '../components/ui/Button';

export default function Careers() {
  return (
    <PageWrapper>
      <div className="pt-32 pb-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h1 className="font-serif italic text-4xl md:text-6xl text-ink-navy mb-6">Careers</h1>
          <p className="text-xl text-ink-navy/70 max-w-2xl mx-auto leading-relaxed">
            Join the team behind the impact. We are looking for driven individuals to help manage our NGO operations.
          </p>
          <div className="w-px h-16 bg-harmattan-gold/50 mx-auto mt-12" />
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <Card className="p-12 text-center bg-white/50 backdrop-blur border-ink-navy/10">
            <div className="w-16 h-16 rounded-full bg-ink-navy/5 flex items-center justify-center mx-auto mb-6 text-ink-navy">
               <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><path d="M16 16s-1.5-2-4-2-4 2-4 2"/><path d="M9 9h.01"/><path d="M15 9h.01"/></svg>
            </div>
            <h3 className="font-serif text-2xl mb-4 text-ink-navy">No Open Roles Currently</h3>
            <p className="text-ink-navy/70 mb-8 max-w-lg mx-auto">
              We are currently fully staffed, but we are always looking for passionate people. Leave your details and we will reach out when a position opens.
            </p>
            <Button variant="outline">Submit General Application</Button>
          </Card>
        </div>
      </div>
    </PageWrapper>
  );
}
