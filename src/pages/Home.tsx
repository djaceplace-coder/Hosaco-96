import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'motion/react';
import { Button } from '../components/ui/Button';
import { Card } from '../components/ui/Card';
import { ArrowRight, Heart, Users, Droplets, BookOpen, Trees, Ribbon as RibbonIcon, Eye } from 'lucide-react';
import { Link } from 'react-router-dom';
import { cn } from '../lib/utils';
import PageWrapper from '../components/PageWrapper';

const programs = [
  { icon: Eye, title: 'Vision for All', desc: 'Eye screening and corrective lenses for rural communities.', color: 'text-palm-green' },
  { icon: Heart, title: 'Hepatitis B', desc: 'Awareness, testing, and treatment programs nationwide.', color: 'text-brick-clay' },
  { icon: Users, title: 'Disability Empowerment', desc: 'Mobility aids and vocational training.', color: 'text-adire-indigo' },
  { icon: Droplets, title: 'Clean Water', desc: 'Borehole projects in underserved local government areas.', color: 'text-ink-navy' },
  { icon: BookOpen, title: 'Scholarships', desc: 'Tuition support for outstanding indigent students.', color: 'text-harmattan-gold' },
  { icon: Trees, title: 'Green Initiatives', desc: 'Reforestation and sustainable farming education.', color: 'text-palm-green' },
];

export default function Home() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  const heroY = useTransform(scrollYProgress, [0, 0.2], [0, 150]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.15], [1, 0]);

  return (
    <PageWrapper>
      <div ref={containerRef} className="w-full bg-parchment overflow-hidden">
        
        {/* Premium Immersive Hero */}
        <section className="relative h-screen min-h-[800px] flex items-center justify-center pt-20 overflow-hidden bg-ink-navy perspective-1000">
          {/* Background Video/Image Parallax */}
          <motion.div style={{ y: heroY }} className="absolute inset-0 z-0">
            <div className="absolute inset-0 bg-ink-navy/60 z-10 mix-blend-multiply" />
            <div className="absolute inset-0 bg-gradient-to-b from-ink-navy/80 via-transparent to-parchment z-20" />
            <img 
              src="https://images.unsplash.com/photo-1542810634-71277d95dcbb?q=80&w=2500&auto=format&fit=crop" 
              alt="Community Impact" 
              className="w-full h-full object-cover opacity-80"
            />
          </motion.div>

          <motion.div 
            style={{ opacity: heroOpacity }}
            className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-30 w-full text-center"
          >
            <motion.div 
              initial={{ opacity: 0, scale: 0.9, y: 30 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-harmattan-gold/30 bg-ink-navy/40 backdrop-blur-md mb-8">
                <span className="w-2 h-2 rounded-full bg-harmattan-gold animate-pulse" />
                <span className="text-sm font-sans tracking-widest text-harmattan-gold uppercase font-medium">Holy Saviour's College Class of '96</span>
              </div>
              
              <h1 className="font-serif text-5xl md:text-8xl leading-tight text-white mb-8 tracking-tight drop-shadow-2xl">
                An institution of <br/>
                <span className="italic text-harmattan-gold">impact and honor.</span>
              </h1>
              
              <p className="text-xl md:text-2xl text-parchment/90 max-w-3xl mx-auto mb-12 leading-relaxed font-light drop-shadow-md">
                We are a graduating class that turned itself into an institution, driving healthcare, education, and development across communities.
              </p>
              
              <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
                <Link to="/get-involved">
                  <Button variant="primary" size="lg" className="h-14 px-8 text-lg shadow-[0_0_40px_rgba(199,154,61,0.3)] hover:shadow-[0_0_60px_rgba(199,154,61,0.5)] transition-all">
                    Make a Donation
                  </Button>
                </Link>
                <Link to="/about">
                  <Button variant="outline" size="lg" className="h-14 px-8 text-lg border-parchment/30 text-parchment hover:bg-parchment/10 backdrop-blur-sm">
                    Read Our Story
                  </Button>
                </Link>
              </div>
            </motion.div>
          </motion.div>

          {/* Scroll Indicator */}
          <motion.div 
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 2, duration: 1 }}
            className="absolute bottom-10 left-1/2 -translate-x-1/2 z-30 flex flex-col items-center gap-2"
          >
            <span className="text-xs font-mono uppercase tracking-widest text-parchment/50">Scroll to Explore</span>
            <div className="w-px h-12 bg-gradient-to-b from-harmattan-gold to-transparent" />
          </motion.div>
        </section>

        {/* Impact Ticker - Elevated Design */}
        <section className="relative z-40 -mt-16 max-w-6xl mx-auto px-4 sm:px-6">
          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="bg-white rounded-2xl shadow-2xl p-8 md:p-12 border border-ink-navy/5 backdrop-blur-xl"
          >
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center divide-y md:divide-y-0 md:divide-x divide-ink-navy/10">
              <div className="p-4 flex flex-col justify-center">
                <div className="font-mono text-5xl font-bold text-harmattan-gold mb-3 tracking-tighter">12,450+</div>
                <div className="font-sans text-sm tracking-widest uppercase text-ink-navy/60 font-semibold">Lives Touched</div>
              </div>
              <div className="p-4 flex flex-col justify-center">
                <div className="font-mono text-5xl font-bold text-adire-indigo mb-3 tracking-tighter">₦45.2M</div>
                <div className="font-sans text-sm tracking-widest uppercase text-ink-navy/60 font-semibold">Funds Raised</div>
              </div>
              <div className="p-4 flex flex-col justify-center">
                <div className="font-mono text-5xl font-bold text-palm-green mb-3 tracking-tighter">24</div>
                <div className="font-sans text-sm tracking-widest uppercase text-ink-navy/60 font-semibold">Major Projects</div>
              </div>
            </div>
          </motion.div>
        </section>

        {/* Story Section */}
        <section className="py-32 relative bg-parchment overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 1, ease: "easeOut" }}
            >
              <h2 className="font-serif italic text-4xl md:text-5xl text-ink-navy mb-8 leading-tight">
                Not just alumni.<br/>
                <span className="not-italic font-bold">A force for good.</span>
              </h2>
              <p className="text-xl text-ink-navy/70 mb-8 leading-relaxed">
                The Class of '96 has always stood apart. What began as a reunion to celebrate our shared history quickly evolved into a structured NGO dedicated to systemic change.
              </p>
              <p className="text-lg text-ink-navy/60 mb-10 leading-relaxed">
                We focus on high-leverage interventions—bringing clean water to drought-prone regions, providing sight-restoring surgeries, and educating the next generation of leaders.
              </p>
              <Link to="/about" className="group inline-flex items-center text-adire-indigo font-semibold tracking-wide hover:text-harmattan-gold transition-colors">
                Discover Our History
                <span className="ml-4 w-12 h-px bg-adire-indigo group-hover:bg-harmattan-gold group-hover:w-16 transition-all duration-300 relative">
                  <span className="absolute right-0 top-1/2 -translate-y-1/2 w-2 h-2 border-r-2 border-t-2 border-adire-indigo group-hover:border-harmattan-gold transform translate-x-[1px] rotate-45" />
                </span>
              </Link>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, scale: 0.9, rotate: 2 }}
              whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 1, ease: "easeOut" }}
              className="relative"
            >
              <div className="absolute inset-0 bg-harmattan-gold/20 rounded-2xl transform translate-x-6 translate-y-6 -z-10" />
              <img 
                src="https://images.unsplash.com/photo-1526958097901-5e6d742d3371?q=80&w=1500&auto=format&fit=crop" 
                alt="Community work" 
                className="rounded-2xl shadow-2xl object-cover w-full h-[600px]"
              />
              {/* Floating Badge */}
              <motion.div 
                animate={{ y: [0, -15, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -bottom-8 -left-8 bg-white p-6 rounded-2xl shadow-xl flex items-center gap-4"
              >
                <div className="w-16 h-16 rounded-full border-4 border-harmattan-gold flex items-center justify-center font-serif text-2xl font-bold text-ink-navy">96</div>
                <div>
                  <div className="font-bold text-ink-navy">Est. 1969</div>
                  <div className="text-xs text-ink-navy/50 uppercase tracking-widest">Holy Saviour's College</div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* Programs Grid - Immersive */}
        <section className="py-32 bg-ink-navy text-parchment relative">
          <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-harmattan-gold/50 to-transparent" />
          
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-8">
              <motion.div 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="max-w-2xl"
              >
                <h2 className="font-serif italic text-4xl md:text-6xl text-white mb-6">Our Interventions</h2>
                <p className="text-xl text-parchment/60 leading-relaxed">Focused, data-driven programs creating measurable change across healthcare, education, and infrastructure.</p>
              </motion.div>
              <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}>
                <Link to="/programs">
                  <Button variant="outline" className="border-parchment/30 text-parchment hover:bg-white hover:text-ink-navy transition-colors h-12 px-6">
                    View All Programs
                  </Button>
                </Link>
              </motion.div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {programs.map((program, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ delay: index * 0.1, duration: 0.6 }}
                >
                  <div className="group h-full bg-white/5 border border-white/10 rounded-2xl p-8 hover:bg-white/10 transition-all duration-300 flex flex-col cursor-pointer relative overflow-hidden">
                    {/* Hover Glow */}
                    <div className="absolute inset-0 bg-gradient-to-br from-harmattan-gold/0 to-harmattan-gold/0 group-hover:from-harmattan-gold/10 group-hover:to-transparent transition-colors duration-500" />
                    
                    <div className={cn("p-4 rounded-xl bg-white/10 mb-8 w-fit transition-transform duration-500 group-hover:scale-110", program.color)}>
                      <program.icon size={28} />
                    </div>
                    <h3 className="font-serif font-medium text-2xl text-white mb-4">{program.title}</h3>
                    <p className="text-parchment/60 mb-8 flex-grow leading-relaxed text-lg">{program.desc}</p>
                    <div className="mt-auto flex items-center text-sm font-semibold tracking-wider text-harmattan-gold uppercase">
                      Explore <ArrowRight size={18} className="ml-2 transform group-hover:translate-x-2 transition-transform duration-300" />
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Voices of Impact (Testimonial) */}
        <section className="py-32 bg-parchment overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
              <motion.div 
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 1 }}
                className="lg:col-span-5 relative"
              >
                <div className="aspect-[3/4] rounded-2xl overflow-hidden shadow-2xl relative">
                   <img src="https://images.unsplash.com/photo-1579684385127-1ef15d508118?q=80&w=1500&auto=format&fit=crop" className="w-full h-full object-cover" alt="Medical Outreach" />
                   <div className="absolute inset-0 bg-ink-navy/20 mix-blend-multiply" />
                </div>
                {/* Decorative Elements */}
                <div className="absolute top-10 -left-10 w-32 h-32 bg-brick-clay/10 rounded-full blur-2xl" />
                <div className="absolute bottom-10 -right-10 w-40 h-40 bg-adire-indigo/10 rounded-full blur-2xl" />
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 1 }}
                className="lg:col-span-7"
              >
                <Eye className="text-harmattan-gold mb-8 opacity-50" size={48} />
                <h2 className="font-serif italic text-4xl mb-8 text-ink-navy">Voices of Impact</h2>
                <blockquote className="text-2xl md:text-4xl leading-relaxed font-serif text-ink-navy/90 mb-10 border-l-4 border-harmattan-gold pl-8">
                  "We didn't just come back to remember our school days. We came back to ensure the generation after us doesn't face the same barriers we did. What we do here outlives us."
                </blockquote>
                <div className="font-sans flex items-center gap-6">
                  <div className="w-16 h-16 rounded-full overflow-hidden border-2 border-harmattan-gold shadow-md">
                    <img src="https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=200&auto=format&fit=crop" alt="Dr. Femi Oladipo" className="w-full h-full object-cover" />
                  </div>
                  <div>
                    <div className="font-bold tracking-widest text-ink-navy text-sm uppercase mb-1">Dr. Femi Oladipo</div>
                    <div className="text-ink-navy/60 text-sm font-medium">President, Hosaco96</div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* CTA Section - Epic Banner */}
        <section className="py-32 relative overflow-hidden bg-ink-navy">
          <div className="absolute inset-0 z-0">
             <img src="https://images.unsplash.com/photo-1511632765486-a01980e01a18?q=80&w=2500&auto=format&fit=crop" className="w-full h-full object-cover opacity-20 mix-blend-luminosity" alt="Group of students" />
             <div className="absolute inset-0 bg-gradient-to-t from-ink-navy via-ink-navy/90 to-transparent" />
          </div>
          
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className="w-24 h-24 mx-auto bg-harmattan-gold/10 backdrop-blur-md rounded-full flex items-center justify-center mb-10 border border-harmattan-gold/30">
                <RibbonIcon className="text-harmattan-gold" size={40} />
              </div>
              <h2 className="font-serif text-5xl md:text-7xl text-white mb-8 tracking-tight">Earn your seal<br/><span className="italic text-harmattan-gold">of impact.</span></h2>
              <p className="text-xl text-parchment/80 mb-12 max-w-2xl mx-auto leading-relaxed font-light">
                Join the ranks of alumni and patrons committed to uplifting our communities. Every contribution is etched into our Honors Ledger.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
                <Link to="/get-involved">
                  <Button variant="primary" size="lg" className="h-14 px-10 text-lg shadow-xl shadow-harmattan-gold/20">
                    Become a Patron Today
                  </Button>
                </Link>
                <Link to="/signup">
                  <Button variant="outline" size="lg" className="h-14 px-10 text-lg text-white border-white/30 hover:bg-white/10">
                    Join the Ledger
                  </Button>
                </Link>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </PageWrapper>
  );
}
