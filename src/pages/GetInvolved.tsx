import React from 'react';
import { Card } from '../components/ui/Card';
import { Button } from '../components/ui/Button';
import PageWrapper from '../components/PageWrapper';
import { motion } from 'motion/react';
import { Handshake, HeartHandshake, ShieldCheck } from 'lucide-react';

export default function GetInvolved() {
  return (
    <PageWrapper>
      <div className="pt-32 pb-24 bg-parchment min-h-screen">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-20"
          >
            <h1 className="font-serif italic text-4xl md:text-6xl text-ink-navy mb-6">Get Involved</h1>
            <p className="text-xl text-ink-navy/70 max-w-2xl mx-auto leading-relaxed">
              Your contributions fund our programs. Earn your seal by subscribing to a membership tier or making a one-time donation.
            </p>
            <div className="w-px h-16 bg-harmattan-gold/50 mx-auto mt-12" />
          </motion.div>

          {/* Membership Tiers */}
          <div className="mb-32">
            <div className="text-center mb-12">
              <h2 className="font-serif text-3xl text-ink-navy">Membership Tiers</h2>
              <p className="text-ink-navy/70 mt-2">Choose your level of impact.</p>
            </div>
            <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto items-end">
              <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
                <Card className="p-8 text-center flex flex-col h-full border-white/50">
                  <div className="w-16 h-16 mx-auto rounded-full bg-harmattan-gold/20 flex items-center justify-center mb-6">
                    <span className="font-serif font-bold text-harmattan-gold text-2xl">B</span>
                  </div>
                  <h3 className="font-serif text-2xl font-semibold mb-2">Basic</h3>
                  <p className="text-ink-navy/60 text-sm mb-8 flex-grow">Standard alumni membership with directory access and newsletter.</p>
                  <div className="text-4xl font-mono font-bold mb-8">₦10k<span className="text-sm font-sans font-normal text-ink-navy/50">/yr</span></div>
                  <Button className="w-full" variant="outline">Select Basic</Button>
                </Card>
              </motion.div>
              
              <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }}>
                <Card className="p-10 text-center flex flex-col h-full border-harmattan-gold/50 shadow-xl relative z-10 transform md:-translate-y-4 bg-white">
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-harmattan-gold text-ink-navy text-xs font-bold px-4 py-1.5 rounded-full uppercase tracking-wider">Recommended</div>
                  <div className="w-20 h-20 mx-auto rounded-full bg-slate-200 flex items-center justify-center mb-6 shadow-inner relative overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-br from-white/40 to-transparent mix-blend-overlay" />
                    <span className="font-serif font-bold text-slate-700 text-3xl">P</span>
                  </div>
                  <h3 className="font-serif text-2xl font-semibold mb-2">Patron</h3>
                  <p className="text-ink-navy/60 text-sm mb-8 flex-grow">Enhanced support with early event access and governance voting rights.</p>
                  <div className="text-5xl font-mono font-bold mb-8 text-adire-indigo">₦50k<span className="text-sm font-sans font-normal text-ink-navy/50">/yr</span></div>
                  <Button className="w-full" variant="donate">Select Patron</Button>
                </Card>
              </motion.div>

              <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.2 }}>
                <Card className="p-8 text-center flex flex-col h-full border-white/50">
                  <div className="w-16 h-16 mx-auto rounded-full bg-harmattan-gold flex items-center justify-center mb-6 shadow-md relative overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-br from-white/40 to-transparent mix-blend-overlay" />
                    <span className="font-serif font-bold text-white text-2xl">L</span>
                  </div>
                  <h3 className="font-serif text-2xl font-semibold mb-2">Life Member</h3>
                  <p className="text-ink-navy/60 text-sm mb-8 flex-grow">Ultimate commitment. Lifetime recognition on the honors ledger.</p>
                  <div className="text-4xl font-mono font-bold mb-8">₦500k<span className="text-sm font-sans font-normal text-ink-navy/50 text-wrap"><br/>one-time</span></div>
                  <Button className="w-full" variant="primary">Select Life</Button>
                </Card>
              </motion.div>
            </div>
          </div>

          {/* Volunteer / Corporate */}
          <div className="grid md:grid-cols-2 gap-12 mt-24">
            <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
              <Card className="p-10 h-full">
                <HeartHandshake className="text-harmattan-gold mb-6" size={40} />
                <h3 className="font-serif text-3xl text-ink-navy mb-4">Volunteer Your Time</h3>
                <p className="text-ink-navy/70 mb-8 leading-relaxed">
                  We are always looking for medical professionals, educators, and logistical volunteers to support our field programs. Give the gift of your expertise.
                </p>
                <form className="space-y-4">
                  <input type="text" placeholder="Full Name" className="w-full px-4 py-3 border border-ink-navy/10 rounded focus:outline-none focus:ring-2 focus:ring-harmattan-gold" />
                  <input type="email" placeholder="Email Address" className="w-full px-4 py-3 border border-ink-navy/10 rounded focus:outline-none focus:ring-2 focus:ring-harmattan-gold" />
                  <select className="w-full px-4 py-3 border border-ink-navy/10 rounded focus:outline-none focus:ring-2 focus:ring-harmattan-gold text-ink-navy/70">
                    <option value="">Select Area of Expertise</option>
                    <option value="medical">Medical / Healthcare</option>
                    <option value="education">Education / Mentorship</option>
                    <option value="logistics">Logistics / Ops</option>
                  </select>
                  <Button variant="outline" className="w-full">Sign Up to Volunteer</Button>
                </form>
              </Card>
            </motion.div>

            <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
              <Card className="p-10 h-full bg-ink-navy text-parchment">
                <Handshake className="text-harmattan-gold mb-6" size={40} />
                <h3 className="font-serif text-3xl text-white mb-4">Corporate Partnerships</h3>
                <p className="text-parchment/70 mb-8 leading-relaxed">
                  Align your brand with impact. We offer tailored sponsorship packages for our major initiatives, providing your organization with transparent reporting and community visibility.
                </p>
                <div className="space-y-6 mb-8">
                  <div className="flex items-start gap-4">
                    <ShieldCheck className="text-harmattan-gold shrink-0 mt-1" size={20} />
                    <p className="text-sm text-parchment/80">Full transparent financial reporting on sponsored projects.</p>
                  </div>
                  <div className="flex items-start gap-4">
                    <ShieldCheck className="text-harmattan-gold shrink-0 mt-1" size={20} />
                    <p className="text-sm text-parchment/80">Co-branded physical infrastructure (e.g. plaques on boreholes).</p>
                  </div>
                  <div className="flex items-start gap-4">
                    <ShieldCheck className="text-harmattan-gold shrink-0 mt-1" size={20} />
                    <p className="text-sm text-parchment/80">Employee engagement and field volunteering opportunities.</p>
                  </div>
                </div>
                <Button variant="primary" className="w-full">Download Partnership Deck</Button>
              </Card>
            </motion.div>
          </div>
        </div>
      </div>
    </PageWrapper>
  );
}
