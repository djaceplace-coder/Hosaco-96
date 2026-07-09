import React from 'react';
import { Card } from '../components/ui/Card';
import { Button } from '../components/ui/Button';
import PageWrapper from '../components/PageWrapper';
import { motion } from 'motion/react';
import { Eye, Heart, Users, Droplets, BookOpen, Trees, MapPin } from 'lucide-react';

const programs = [
  { 
    id: 'vision',
    icon: Eye, 
    title: 'Vision for All', 
    desc: 'Comprehensive eye screening and distribution of corrective lenses to underserved communities.', 
    stats: '5,000+ Screened',
    color: 'text-palm-green',
    bg: 'bg-palm-green/10',
    img: 'https://images.unsplash.com/photo-1579684385127-1ef15d508118?q=80&w=2000&auto=format&fit=crop'
  },
  { 
    id: 'hep-b',
    icon: Heart, 
    title: 'Hepatitis B Awareness', 
    desc: 'Awareness, testing, and treatment programs nationwide to combat silent spread.', 
    stats: '12,000 Tested',
    color: 'text-brick-clay',
    bg: 'bg-brick-clay/10',
    img: 'https://images.unsplash.com/photo-1584515933487-779824d29309?q=80&w=2000&auto=format&fit=crop'
  },
  { 
    id: 'disability',
    icon: Users, 
    title: 'Disability Empowerment', 
    desc: 'Providing mobility aids and vocational training for inclusive community integration.', 
    stats: '450 Aids Distributed',
    color: 'text-adire-indigo',
    bg: 'bg-adire-indigo/10',
    img: 'https://images.unsplash.com/photo-1573497620053-ea5300f94f21?q=80&w=2000&auto=format&fit=crop'
  },
  { 
    id: 'water',
    icon: Droplets, 
    title: 'Clean Water Initiative', 
    desc: 'Borehole projects and sanitation education in underserved local government areas.', 
    stats: '24 Boreholes',
    color: 'text-ink-navy',
    bg: 'bg-ink-navy/10',
    img: 'https://images.unsplash.com/photo-1517457373958-b7bdd4587205?q=80&w=2000&auto=format&fit=crop'
  },
  { 
    id: 'scholarships',
    icon: BookOpen, 
    title: 'Scholarships', 
    desc: 'Tuition support and mentorship for outstanding indigent students.', 
    stats: '150 Scholars',
    color: 'text-harmattan-gold',
    bg: 'bg-harmattan-gold/10',
    img: 'https://images.unsplash.com/photo-1427504494785-319ce247ae27?q=80&w=2000&auto=format&fit=crop'
  },
  { 
    id: 'green',
    icon: Trees, 
    title: 'Green Initiatives', 
    desc: 'Reforestation drives and sustainable farming education in rural communities.', 
    stats: '10,000 Trees Planted',
    color: 'text-palm-green',
    bg: 'bg-palm-green/10',
    img: 'https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?q=80&w=2000&auto=format&fit=crop'
  },
];

export default function Programs() {
  return (
    <PageWrapper>
      <div className="bg-parchment pt-32 pb-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-20"
          >
            <h1 className="font-serif italic text-4xl md:text-6xl text-ink-navy mb-6">Programs & Impact</h1>
            <p className="text-xl text-ink-navy/70 max-w-3xl mx-auto leading-relaxed">
              We focus our resources on six core pillars, creating sustainable, measurable change across Nigeria and beyond.
            </p>
            <div className="w-px h-24 bg-harmattan-gold/50 mx-auto mt-12" />
          </motion.div>
          
          <div className="space-y-24">
            {programs.map((program, idx) => (
              <motion.div 
                key={program.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6 }}
              >
                <Card className="overflow-hidden group border-0 shadow-lg" hoverLift>
                  <div className={`grid md:grid-cols-2 gap-0 ${idx % 2 === 0 ? '' : 'md:flex-row-reverse'}`}>
                    <div className={`order-2 ${idx % 2 === 0 ? 'md:order-1' : 'md:order-2'} p-10 md:p-16 flex flex-col justify-center`}>
                      <div className={`inline-flex items-center gap-2 px-4 py-2 rounded-full ${program.bg} ${program.color} text-sm font-bold tracking-wider uppercase mb-6 w-fit`}>
                        <program.icon size={18} />
                        {program.stats}
                      </div>
                      <h2 className="font-serif text-3xl md:text-4xl text-ink-navy mb-6">{program.title}</h2>
                      <p className="text-lg text-ink-navy/80 mb-8 leading-relaxed">
                        {program.desc}
                      </p>
                      <div className="mt-auto">
                        <Button variant="donate" className="shadow-md shadow-brick-clay/20">Donate to this program</Button>
                      </div>
                    </div>
                    <div className={`order-1 ${idx % 2 === 0 ? 'md:order-2' : 'md:order-1'} h-72 md:h-auto relative overflow-hidden`}>
                      <div className="absolute inset-0 bg-ink-navy/10 mix-blend-multiply z-10 transition-opacity group-hover:opacity-0 duration-500" />
                      <img 
                        src={program.img} 
                        alt={program.title} 
                        className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                      />
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>

          {/* Interactive Map Section */}
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="mt-32"
          >
            <div className="text-center mb-12">
              <h2 className="font-serif italic text-4xl text-ink-navy mb-4">Impact Map</h2>
              <p className="text-ink-navy/70">Our footprint across communities.</p>
            </div>
            <div className="w-full h-[500px] bg-adire-indigo/5 rounded-2xl border border-ink-navy/10 relative overflow-hidden flex flex-col items-center justify-center group">
              <div className="absolute inset-0 bg-[url('https://upload.wikimedia.org/wikipedia/commons/4/4b/Nigeria_location_map.svg')] bg-contain bg-center bg-no-repeat opacity-20" />
              
              {/* Fake pins */}
              <motion.div animate={{ y: [0, -5, 0] }} transition={{ repeat: Infinity, duration: 2 }} className="absolute top-[40%] left-[45%] text-brick-clay drop-shadow-md">
                <MapPin size={32} fill="currentColor" className="text-white" />
              </motion.div>
              <motion.div animate={{ y: [0, -5, 0] }} transition={{ repeat: Infinity, duration: 2.2, delay: 0.2 }} className="absolute top-[50%] left-[55%] text-palm-green drop-shadow-md">
                <MapPin size={32} fill="currentColor" className="text-white" />
              </motion.div>
              <motion.div animate={{ y: [0, -5, 0] }} transition={{ repeat: Infinity, duration: 1.8, delay: 0.5 }} className="absolute top-[60%] left-[40%] text-harmattan-gold drop-shadow-md">
                <MapPin size={32} fill="currentColor" className="text-white" />
              </motion.div>

              <div className="relative z-10 bg-white/90 backdrop-blur px-8 py-6 rounded-xl shadow-xl text-center max-w-sm mt-32 transform translate-y-8 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                <h3 className="font-serif font-semibold text-lg text-ink-navy mb-2">Interactive Map Loading</h3>
                <p className="text-sm text-ink-navy/70">Connects to our live project database to show precise locations of boreholes, medical camps, and schools.</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </PageWrapper>
  );
}
