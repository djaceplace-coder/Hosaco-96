import React from 'react';

export default function About() {
  return (
    <div className="pt-32 pb-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-16">
        <h1 className="font-serif italic text-4xl md:text-5xl text-ink-navy mb-6">Our Story</h1>
        <div className="w-px h-16 bg-harmattan-gold/50 mx-auto" />
      </div>
      <div className="prose prose-lg mx-auto text-ink-navy/80">
        <p className="lead text-xl text-ink-navy font-medium mb-8 text-center">
          Founded in 1969, Holy Saviour's College has produced leaders across every sector. The Class of '96 reunited not just to remember the past, but to secure the future.
        </p>
        <div className="grid md:grid-cols-2 gap-12 mt-16 mb-24">
          <div>
            <h3 className="font-serif text-2xl text-ink-navy mb-4">Our Mission</h3>
            <p className="mb-6">To provide a robust support system for our members, drive wealth creation through collaborative ventures, and deliver high-impact community service across Nigeria and the diaspora.</p>
          </div>
          <div>
            <h3 className="font-serif text-2xl text-ink-navy mb-4">The Honors Ledger</h3>
            <p>Membership in Hosaco96 is an earned privilege. We believe in transparency, active contribution, and recording every milestone of impact our association achieves.</p>
          </div>
        </div>

        {/* Timeline */}
        <div className="relative border-l-2 border-harmattan-gold/30 pl-8 ml-4 md:ml-0 md:pl-0 md:border-l-0 space-y-16 mt-24">
           {/* Desktop center line */}
           <div className="hidden md:block absolute top-0 bottom-0 left-1/2 w-[2px] bg-harmattan-gold/30 -translate-x-1/2" />
           
           {[
             { year: '1969', title: 'The Foundation', desc: 'Holy Saviour\'s College opens its doors to the first generation of students.' },
             { year: '1996', title: 'The Class of 96', desc: 'A remarkable cohort graduates, bound by shared values and ambition.' },
             { year: '2015', title: 'The Reunion', desc: 'The first official gathering of the Alumni Association, sparking a movement of structured giving.' },
             { year: '2023', title: 'The Honors Ledger', desc: 'Formal establishment of the subscription tiers and the modern digital foundation.' }
           ].map((milestone, idx) => (
             <div key={idx} className={`relative flex flex-col md:flex-row items-start ${idx % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>
                {/* Center Node */}
                <div className="absolute left-[-41px] md:left-1/2 w-4 h-4 rounded-full bg-harmattan-gold border-4 border-parchment md:-translate-x-1/2 mt-1.5" />
                
                <div className={`md:w-1/2 ${idx % 2 === 0 ? 'md:pl-12' : 'md:pr-12 md:text-right'}`}>
                  <div className="font-mono text-harmattan-gold font-bold text-xl mb-2">{milestone.year}</div>
                  <h4 className="font-serif text-2xl text-ink-navy mb-3">{milestone.title}</h4>
                  <p className="text-ink-navy/70 leading-relaxed">{milestone.desc}</p>
                </div>
             </div>
           ))}
        </div>
      </div>
    </div>
  );
}
