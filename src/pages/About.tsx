import React from 'react';
import PageWrapper from '../components/PageWrapper';
import { motion } from 'motion/react';

export default function About() {
  return (
    <PageWrapper>
      <div className="pt-32 pb-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h1 className="font-serif italic text-4xl md:text-6xl text-ink-navy mb-6">Our Story</h1>
          <div className="w-px h-16 bg-harmattan-gold/50 mx-auto" />
        </motion.div>
        
        <div className="mx-auto text-ink-navy/80 max-w-5xl">
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-xl md:text-2xl text-ink-navy font-serif italic mb-16 text-center leading-relaxed"
          >
            Founded in 1969, Holy Saviour's College has produced leaders across every sector. The Class of '96 reunited not just to remember the past, but to secure the future.
          </motion.p>
          
          <div className="grid md:grid-cols-2 gap-16 mt-16 mb-24 items-center">
            <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
              <div className="relative h-80 rounded-2xl overflow-hidden border border-ink-navy/10 shadow-lg">
                <img src="https://images.unsplash.com/photo-1511632765486-a01980e01a18?q=80&w=2000&auto=format&fit=crop" alt="Students in classroom" className="absolute inset-0 w-full h-full object-cover" />
                <div className="absolute inset-0 bg-ink-navy/20 mix-blend-overlay" />
              </div>
            </motion.div>
            <motion.div initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
              <h3 className="font-serif text-3xl text-ink-navy mb-4 border-l-4 border-harmattan-gold pl-4">Our Mission</h3>
              <p className="mb-6 text-lg leading-relaxed">To provide a robust support system for our members, drive wealth creation through collaborative ventures, and deliver high-impact community service across Nigeria and the diaspora.</p>
              <h3 className="font-serif text-3xl text-ink-navy mb-4 border-l-4 border-harmattan-gold pl-4 mt-12">The Honors Ledger</h3>
              <p className="text-lg leading-relaxed">Membership in Hosaco96 is an earned privilege. We believe in transparency, active contribution, and recording every milestone of impact our association achieves.</p>
            </motion.div>
          </div>

          {/* Timeline */}
          <div className="mt-32">
            <div className="text-center mb-16">
               <h2 className="font-serif text-4xl text-ink-navy">History of Impact</h2>
            </div>
            <div className="relative border-l-2 border-harmattan-gold/30 pl-8 ml-4 md:ml-0 md:pl-0 md:border-l-0 space-y-24 mt-12">
               {/* Desktop center line */}
               <div className="hidden md:block absolute top-0 bottom-0 left-1/2 w-[2px] bg-harmattan-gold/30 -translate-x-1/2" />
               
               {[
                 { year: '1969', title: 'The Foundation', desc: 'Holy Saviour\'s College opens its doors to the first generation of students.', img: 'https://images.unsplash.com/photo-1497604401993-f2e922e5cb0a?q=80&w=800&auto=format&fit=crop' },
                 { year: '1996', title: 'The Class of 96', desc: 'A remarkable cohort graduates, bound by shared values and ambition.', img: 'https://images.unsplash.com/photo-1523580494112-071d311736eb?q=80&w=800&auto=format&fit=crop' },
                 { year: '2015', title: 'The Reunion', desc: 'The first official gathering of the Alumni Association, sparking a movement of structured giving.', img: 'https://images.unsplash.com/photo-1511795409834-ef04bbd61622?q=80&w=800&auto=format&fit=crop' },
                 { year: '2023', title: 'The Honors Ledger', desc: 'Formal establishment of the subscription tiers and the modern digital foundation.', img: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=800&auto=format&fit=crop' }
               ].map((milestone, idx) => (
                 <motion.div 
                    key={idx} 
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-50px" }}
                    className={`relative flex flex-col md:flex-row items-center ${idx % 2 === 0 ? 'md:flex-row-reverse' : ''} gap-8 md:gap-0`}
                 >
                    {/* Center Node */}
                    <div className="absolute left-[-41px] md:left-1/2 w-5 h-5 rounded-full bg-harmattan-gold border-[5px] border-parchment md:-translate-x-1/2 z-10 shadow-sm" />
                    
                    <div className={`md:w-1/2 ${idx % 2 === 0 ? 'md:pl-16' : 'md:pr-16 md:text-right'}`}>
                      <div className="font-mono text-harmattan-gold font-bold text-2xl mb-2 tracking-wider">{milestone.year}</div>
                      <h4 className="font-serif text-3xl text-ink-navy mb-3">{milestone.title}</h4>
                      <p className="text-ink-navy/70 leading-relaxed text-lg mb-6">{milestone.desc}</p>
                    </div>
                    
                    <div className={`md:w-1/2 w-full ${idx % 2 === 0 ? 'md:pr-16 flex justify-end' : 'md:pl-16 flex justify-start'}`}>
                       <div className="relative w-full max-w-sm aspect-video rounded-xl overflow-hidden shadow-md border border-ink-navy/10 group">
                          <img src={milestone.img} alt={milestone.title} className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                          <div className="absolute inset-0 bg-ink-navy/20 group-hover:bg-transparent transition-colors duration-500" />
                       </div>
                    </div>
                 </motion.div>
               ))}
            </div>
          </div>
        </div>
      </div>
    </PageWrapper>
  );
}
