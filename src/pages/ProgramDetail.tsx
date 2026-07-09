import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import PageWrapper from '../components/PageWrapper';
import { motion } from 'motion/react';
import { Button } from '../components/ui/Button';
import { ArrowLeft } from 'lucide-react';
import { supabase } from '../lib/supabase';

// Mock data as fallback
const mockPrograms: Record<string, any> = {
  'vision': {
    title: 'Vision for All',
    summary: 'Comprehensive eye screening and distribution of corrective lenses to underserved communities.',
    hero_image_url: 'https://images.unsplash.com/photo-1579684385127-1ef15d508118?q=80&w=2000&auto=format&fit=crop',
    stats: { primary: '5,000+ Screened', secondary: '1,200 Lenses Provided' },
    body: '<p>Vision for All is our flagship healthcare initiative. Millions of Nigerians in rural communities lack access to basic eye care, leading to preventable blindness and reduced quality of life. This program bridges that gap.</p><p>We partner with volunteer optometrists and ophthalmologists to conduct mobile clinics, providing free vision screenings, distributing prescription glasses, and funding cataract surgeries for those in critical need.</p>'
  },
  'hep-b': {
    title: 'Hepatitis B Awareness',
    summary: 'Awareness, testing, and treatment programs nationwide to combat silent spread.',
    hero_image_url: 'https://images.unsplash.com/photo-1584515933487-779824d29309?q=80&w=2000&auto=format&fit=crop',
    stats: { primary: '12,000 Tested', secondary: '3,000 Vaccinated' },
    body: '<p>Hepatitis B is a silent killer in many parts of the country. Our awareness campaign goes beyond education; it provides actionable medical intervention.</p><p>Through community outreach and partnerships with local health centers, we provide free testing, subsidized vaccination courses, and referral support for those requiring long-term care.</p>'
  },
  // Add more as needed or let DB handle it
};

export default function ProgramDetail() {
  const { slug } = useParams();
  const [program, setProgram] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchProgram() {
      if (!slug) return;
      try {
        const { data, error } = await supabase
          .from('programs')
          .select('*')
          .eq('slug', slug)
          .single();
        
        if (data) {
          setProgram(data);
        } else {
          setProgram(mockPrograms[slug]);
        }
      } catch (err) {
        console.error('Error fetching program:', err);
        setProgram(mockPrograms[slug]);
      } finally {
        setLoading(false);
      }
    }
    fetchProgram();
  }, [slug]);

  if (loading) {
    return (
      <PageWrapper>
        <div className="pt-32 pb-24 min-h-screen flex justify-center items-center font-serif text-2xl text-ink-navy">
          Loading...
        </div>
      </PageWrapper>
    );
  }

  if (!program) {
    return (
      <PageWrapper>
        <div className="pt-32 pb-24 min-h-screen flex flex-col justify-center items-center">
          <h1 className="font-serif text-3xl mb-4 text-ink-navy">Program Not Found</h1>
          <Link to="/programs"><Button variant="outline">Back to Programs</Button></Link>
        </div>
      </PageWrapper>
    );
  }

  return (
    <PageWrapper>
      <div className="bg-parchment pb-24">
        {/* Hero Section */}
        <div className="relative h-[60vh] min-h-[500px] bg-ink-navy">
          <img 
            src={program.hero_image_url || 'https://images.unsplash.com/photo-1542810634-71277d95dcbb?q=80&w=2500&auto=format&fit=crop'} 
            alt={program.title} 
            className="absolute inset-0 w-full h-full object-cover opacity-70 mix-blend-luminosity" 
          />
          <div className="absolute inset-0 bg-gradient-to-t from-ink-navy via-ink-navy/60 to-transparent" />
          
          <div className="absolute inset-0 flex items-center pt-20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
              <Link to="/programs" className="inline-flex items-center text-parchment/70 hover:text-harmattan-gold transition-colors mb-8 font-medium text-sm tracking-wider uppercase">
                <ArrowLeft size={16} className="mr-2" /> Back to Programs
              </Link>
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
              >
                {program.stats?.primary && (
                  <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-harmattan-gold/20 text-harmattan-gold text-sm font-bold tracking-wider uppercase mb-6 border border-harmattan-gold/30">
                    {program.stats.primary}
                  </div>
                )}
                <h1 className="font-serif text-5xl md:text-7xl text-white mb-6 tracking-tight drop-shadow-md">
                  {program.title}
                </h1>
                <p className="text-xl text-parchment/80 max-w-3xl leading-relaxed font-light">
                  {program.summary}
                </p>
              </motion.div>
            </div>
          </div>
        </div>

        {/* Content Section */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-16 relative z-20">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            
            {/* Main Body */}
            <div className="lg:col-span-8 bg-white rounded-2xl shadow-xl p-8 md:p-12 border border-ink-navy/5">
              <div 
                className="prose prose-lg prose-ink-navy max-w-none prose-headings:font-serif prose-headings:font-normal prose-a:text-harmattan-gold prose-p:leading-relaxed"
                dangerouslySetInnerHTML={{ __html: program.body || '<p>Detailed content for this program is coming soon.</p>' }}
              />
            </div>

            {/* Sidebar CTA */}
            <div className="lg:col-span-4">
              <div className="sticky top-24 space-y-8">
                <motion.div 
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.3 }}
                  className="bg-ink-navy text-parchment p-8 rounded-2xl shadow-xl border border-adire-indigo relative overflow-hidden"
                >
                  <div className="absolute -top-12 -right-12 w-32 h-32 bg-harmattan-gold/10 rounded-full blur-2xl" />
                  <h3 className="font-serif text-3xl mb-4 text-white">Support this initiative</h3>
                  <p className="text-parchment/70 mb-8 leading-relaxed">
                    Your contribution directly funds the operational costs and resources required to expand the reach of {program.title}.
                  </p>
                  <Link to={`/donate?program=${slug}`}>
                    <Button variant="primary" className="w-full h-14 text-lg shadow-lg shadow-harmattan-gold/20">
                      Donate to this program
                    </Button>
                  </Link>
                </motion.div>

                {program.stats?.secondary && (
                  <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 }}
                    className="bg-white p-8 rounded-2xl shadow-md border border-ink-navy/5 text-center"
                  >
                    <div className="font-mono text-4xl font-bold text-adire-indigo mb-2">{program.stats.secondary}</div>
                    <div className="font-sans text-xs tracking-widest uppercase text-ink-navy/60 font-semibold">Additional Impact</div>
                  </motion.div>
                )}
              </div>
            </div>

          </div>
        </div>
      </div>
    </PageWrapper>
  );
}
