import React from 'react';
import PageWrapper from '../components/PageWrapper';
import { motion } from 'motion/react';
import { Card } from '../components/ui/Card';

export default function Transparency() {
  return (
    <PageWrapper>
      <div className="pt-32 pb-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h1 className="font-serif italic text-4xl md:text-6xl text-ink-navy mb-6">Transparency & Trust</h1>
          <p className="text-xl text-ink-navy/70 max-w-2xl mx-auto leading-relaxed">
            We operate an open ledger. Our financial records, governance documents, and audit reports are available to all members.
          </p>
          <div className="w-px h-16 bg-harmattan-gold/50 mx-auto mt-12" />
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {[
            { year: '2023', title: 'Annual Impact Report', size: '2.4 MB PDF' },
            { year: '2023', title: 'Audited Financials', size: '1.1 MB PDF' },
            { year: '2022', title: 'Annual Impact Report', size: '3.0 MB PDF' },
            { year: '2022', title: 'Audited Financials', size: '1.2 MB PDF' },
            { year: '-', title: 'Association Constitution', size: '0.8 MB PDF' },
            { year: '-', title: 'Code of Conduct', size: '0.5 MB PDF' },
          ].map((doc, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
            >
              <Card className="p-8 h-full flex flex-col justify-between group cursor-pointer" hoverLift>
                <div>
                  <div className="text-harmattan-gold font-mono text-sm mb-4">{doc.year}</div>
                  <h3 className="font-serif text-xl font-semibold text-ink-navy mb-2">{doc.title}</h3>
                  <p className="text-ink-navy/50 text-sm font-mono">{doc.size}</p>
                </div>
                <div className="mt-8 text-adire-indigo text-sm font-medium flex items-center group-hover:text-harmattan-gold transition-colors">
                  Download <span className="ml-2">↓</span>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </PageWrapper>
  );
}
