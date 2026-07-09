import React from 'react';
import { motion } from 'motion/react';
import { Button } from '../components/ui/Button';
import { Card } from '../components/ui/Card';
import { ArrowRight, Heart, Users, Droplets, BookOpen, Trees, Ribbon as RibbonIcon, Eye } from 'lucide-react';
import { Link } from 'react-router-dom';
import { cn } from '../lib/utils';

const programs = [
  { icon: Eye, title: 'Vision for All', desc: 'Eye screening and corrective lenses for rural communities.', color: 'text-palm-green' },
  { icon: Heart, title: 'Hepatitis B', desc: 'Awareness, testing, and treatment programs nationwide.', color: 'text-brick-clay' },
  { icon: Users, title: 'Disability Empowerment', desc: 'Mobility aids and vocational training.', color: 'text-adire-indigo' },
  { icon: Droplets, title: 'Clean Water', desc: 'Borehole projects in underserved local government areas.', color: 'text-ink-navy' },
  { icon: BookOpen, title: 'Scholarships', desc: 'Tuition support for outstanding indigent students.', color: 'text-harmattan-gold' },
  { icon: Trees, title: 'Green Initiatives', desc: 'Reforestation and sustainable farming education.', color: 'text-palm-green' },
];

export default function Home() {
  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center pt-20 overflow-hidden bg-parchment">
        <div className="absolute inset-0 z-0">
           {/* Abstract hero background pattern instead of actual video for now */}
           <div className="absolute inset-0 bg-gradient-to-br from-parchment via-parchment to-parchment/50" />
           <div className="absolute -top-[20%] -right-[10%] w-[60%] h-[80%] rounded-full bg-harmattan-gold/5 blur-[120px]" />
           <div className="absolute bottom-[10%] -left-[10%] w-[50%] h-[60%] rounded-full bg-adire-indigo/5 blur-[100px]" />
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7">
            <motion.h1 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="font-serif italic text-5xl md:text-7xl leading-tight text-ink-navy mb-6"
            >
              An institution of <br/>
              <span className="not-italic font-medium text-harmattan-gold">impact and honor.</span>
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
              className="text-lg md:text-xl text-ink-navy/80 max-w-2xl mb-10 leading-relaxed"
            >
              Holy Saviour's College, Class of 1996. We are a graduating class that turned itself into an institution, driving healthcare, education, and development across communities.
            </motion.p>
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
              className="flex flex-wrap gap-4"
            >
              <Link to="/get-involved">
                <Button variant="donate" size="lg" className="shadow-lg shadow-brick-clay/20">
                  Make a Donation
                </Button>
              </Link>
              <Link to="/about">
                <Button variant="outline" size="lg">
                  Read Our Story
                </Button>
              </Link>
            </motion.div>
          </div>
          
          <div className="lg:col-span-5 hidden lg:flex justify-center relative">
            <motion.div 
              animate={{ rotate: 360, y: [0, -10, 0] }}
              transition={{ 
                rotate: { duration: 24, repeat: Infinity, ease: "linear" },
                y: { duration: 4, repeat: Infinity, ease: "easeInOut" }
              }}
              className="relative w-80 h-80 rounded-full border-[12px] border-[#C79A3D] flex items-center justify-center bg-[#b8860b] shadow-[0_20px_50px_rgba(20,33,61,0.5),inset_0_0_40px_rgba(0,0,0,0.3)] overflow-hidden"
              style={{
                background: 'radial-gradient(ellipse at center, #F8E5A1 0%, #D4AF37 40%, #AA7C11 100%)',
              }}
            >
              {/* Inner details for coin effect */}
              <div className="absolute inset-2 rounded-full border-2 border-[#8b6508] opacity-50 border-dashed" />
              <div className="w-64 h-64 rounded-full flex flex-col items-center justify-center p-8 text-center relative z-10 shadow-[0_4px_15px_rgba(0,0,0,0.2)]"
                   style={{ background: 'radial-gradient(circle, #F8E5A1 0%, #D4AF37 60%, #AA7C11 100%)' }}>
                <span className="font-serif text-6xl font-bold text-[#5c430a] mb-2" style={{ textShadow: '1px 1px 0px rgba(255,255,255,0.3), -1px -1px 0px rgba(0,0,0,0.2)' }}>96</span>
                <span className="font-sans text-xs tracking-widest uppercase text-[#5c430a] font-semibold" style={{ textShadow: '1px 1px 0px rgba(255,255,255,0.3)' }}>Holy Saviour's<br/>College</span>
              </div>
              
              {/* Fake lighting reflection sweeping across */}
              <motion.div 
                animate={{ rotate: -360 }}
                transition={{ duration: 24, repeat: Infinity, ease: "linear" }}
                className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/40 to-transparent w-[200%] h-[200%] -top-[50%] -left-[50%]"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Ribbon Divider */}
      <div className="w-full h-px bg-harmattan-gold/30 relative flex justify-center">
        <div className="absolute -top-3 w-px h-16 bg-harmattan-gold/50" />
      </div>

      {/* Impact Ticker */}
      <section className="bg-ink-navy text-parchment py-16 border-y border-adire-indigo">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center divide-y md:divide-y-0 md:divide-x divide-parchment/10">
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="p-4"
            >
              <div className="font-mono text-4xl md:text-5xl font-semibold text-harmattan-gold mb-2">12,450+</div>
              <div className="font-sans text-sm tracking-wider uppercase text-parchment/70">Lives Touched</div>
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="p-4"
            >
              <div className="font-mono text-4xl md:text-5xl font-semibold text-harmattan-gold mb-2">₦45.2M</div>
              <div className="font-sans text-sm tracking-wider uppercase text-parchment/70">Funds Raised</div>
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="p-4"
            >
              <div className="font-mono text-4xl md:text-5xl font-semibold text-harmattan-gold mb-2">24</div>
              <div className="font-sans text-sm tracking-wider uppercase text-parchment/70">Major Projects</div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Programs Section */}
      <section className="py-24 bg-parchment">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-serif italic text-4xl md:text-5xl text-ink-navy mb-4">Our Programs</h2>
            <p className="text-ink-navy/70 max-w-2xl mx-auto">Focused interventions creating measurable, lasting change across healthcare, education, and community infrastructure.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {programs.map((program, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card hoverLift className="h-full p-8 flex flex-col items-start group">
                  <div className={cn("p-3 rounded-full bg-parchment mb-6 transition-transform duration-300 group-hover:scale-110", program.color)}>
                    <program.icon size={24} />
                  </div>
                  <h3 className="font-serif font-medium text-xl text-ink-navy mb-3">{program.title}</h3>
                  <p className="text-ink-navy/70 mb-6 flex-grow leading-relaxed">{program.desc}</p>
                  <Link to="/programs" className="inline-flex items-center text-sm font-medium text-harmattan-gold group-hover:text-adire-indigo transition-colors mt-auto">
                    Learn more <ArrowRight size={16} className="ml-1" />
                  </Link>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Story */}
      <section className="py-24 bg-ink-navy text-parchment overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative h-96 bg-adire-indigo/30 rounded-xl overflow-hidden border border-white/10"
          >
             <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-16 h-16 rounded-full bg-harmattan-gold/90 text-ink-navy flex items-center justify-center cursor-pointer hover:scale-110 transition-transform">
                  <div className="w-0 h-0 border-t-[8px] border-t-transparent border-l-[12px] border-l-ink-navy border-b-[8px] border-b-transparent ml-1" />
                </div>
             </div>
             <div className="absolute bottom-4 left-4 right-4 text-center text-sm font-serif italic text-white/70">
                Dr. Adefemi's message from the rural health outreach.
             </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="font-serif italic text-4xl mb-6 text-white">Voices of Impact</h2>
            <blockquote className="text-xl md:text-2xl leading-relaxed font-serif text-parchment/90 mb-8 border-l-2 border-harmattan-gold pl-6">
              "We didn't just come back to remember our school days. We came back to ensure the generation after us doesn't face the same barriers we did. What we do here outlives us."
            </blockquote>
            <div className="font-sans">
              <div className="font-bold tracking-wider text-harmattan-gold text-sm uppercase">Dr. Femi Oladipo</div>
              <div className="text-parchment/60 text-sm">Vice President, Hosaco96</div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Trust & Partners */}
      <section className="py-12 bg-white border-y border-ink-navy/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 overflow-hidden">
           <div className="flex space-x-12 justify-center items-center opacity-40 grayscale">
              <span className="font-serif text-xl font-bold">Charity: Water</span>
              <span className="font-serif text-xl font-bold">Red Cross</span>
              <span className="font-serif text-xl font-bold">WWF</span>
              <span className="font-serif text-xl font-bold">UNICEF</span>
              <span className="font-serif text-xl font-bold">WHO</span>
           </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-white relative overflow-hidden">
        <div className="absolute right-0 top-0 w-1/3 h-full bg-harmattan-gold/5 skew-x-12 transform origin-top" />
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <RibbonIcon className="mx-auto text-harmattan-gold mb-6" size={32} />
          <h2 className="font-serif text-3xl md:text-4xl text-ink-navy mb-6">Earn your seal of impact.</h2>
          <p className="text-lg text-ink-navy/70 mb-10 max-w-2xl mx-auto">Join the ranks of alumni and patrons committed to uplifting our communities. Every contribution leaves a permanent mark.</p>
          <Link to="/get-involved">
            <Button variant="primary" size="lg">Become a Patron Today</Button>
          </Link>
        </div>
      </section>
    </div>
  );
}
