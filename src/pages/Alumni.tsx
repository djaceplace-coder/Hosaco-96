import React from 'react';
import PageWrapper from '../components/PageWrapper';
import { motion } from 'motion/react';
import { Card } from '../components/ui/Card';

const execs = [
  { name: 'Dr. Femi Oladipo', role: 'President', img: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=800&auto=format&fit=crop' },
  { name: 'Mrs. Amina Yusuf', role: 'Vice President', img: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=800&auto=format&fit=crop' },
  { name: 'Engr. Chukwudi Eze', role: 'Secretary General', img: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=800&auto=format&fit=crop' },
  { name: 'Dr. Sarah Okafor', role: 'Financial Secretary', img: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=800&auto=format&fit=crop' }
];

export default function Alumni() {
  return (
    <PageWrapper>
      <div className="pt-32 pb-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-20"
        >
          <h1 className="font-serif italic text-4xl md:text-6xl text-ink-navy mb-6">Alumni Hub</h1>
          <p className="text-xl text-ink-navy/70 max-w-2xl mx-auto leading-relaxed">
            Connect with the Executive Committee, sub-committees, and read spotlight stories of members driving impact.
          </p>
          <div className="w-px h-16 bg-harmattan-gold/50 mx-auto mt-12" />
        </motion.div>

        {/* Executive Committee */}
        <div className="mb-24">
          <div className="text-center mb-12">
            <h2 className="font-serif text-3xl text-ink-navy">Executive Committee</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {execs.map((exec, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
              >
                <Card className="overflow-hidden border-0 bg-transparent shadow-none" hoverLift>
                  <div className="aspect-[4/5] rounded-xl overflow-hidden mb-4 relative group">
                    <img src={exec.img} alt={exec.name} className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                    <div className="absolute inset-0 bg-ink-navy/10 group-hover:bg-transparent transition-colors" />
                  </div>
                  <div className="text-center">
                    <h3 className="font-serif text-xl font-bold text-ink-navy">{exec.name}</h3>
                    <p className="text-sm font-sans tracking-wider text-harmattan-gold uppercase font-medium mt-1">{exec.role}</p>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Spotlights Placeholder */}
        <div className="mb-24 bg-ink-navy rounded-3xl overflow-hidden">
           <div className="grid md:grid-cols-2 items-center">
              <div className="p-12 md:p-16">
                 <h2 className="font-serif italic text-3xl md:text-4xl text-white mb-6">Alumni Spotlights</h2>
                 <p className="text-parchment/70 text-lg leading-relaxed mb-8">
                   Every month, we feature members who are breaking boundaries in their respective fields and carrying the torch of service.
                 </p>
                 <button className="text-harmattan-gold font-medium border-b border-harmattan-gold pb-1 hover:text-white hover:border-white transition-colors">
                   Read the latest interview
                 </button>
              </div>
              <div className="h-64 md:h-full min-h-[400px] relative">
                 <img src="https://images.unsplash.com/photo-1551836022-d5d88e9218df?q=80&w=1000&auto=format&fit=crop" className="absolute inset-0 w-full h-full object-cover opacity-80" alt="Alumni discussion" />
                 <div className="absolute inset-0 bg-gradient-to-r from-ink-navy via-ink-navy/50 to-transparent" />
              </div>
           </div>
        </div>

      </div>
    </PageWrapper>
  );
}
