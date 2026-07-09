import React, { useState } from 'react';
import PageWrapper from '../components/PageWrapper';
import { motion } from 'motion/react';
import { Card } from '../components/ui/Card';
import { Button } from '../components/ui/Button';
import { supabase } from '../lib/supabase';

export default function Contact() {
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    setSuccess(false);

    const formData = new FormData(e.currentTarget);
    const name = `${formData.get('firstName')} ${formData.get('lastName')}`;
    const email = formData.get('email') as string;
    const department = formData.get('department') as string;
    const message = formData.get('message') as string;

    try {
      const { error } = await supabase.from('contact_submissions').insert([
        { name, email, department, message }
      ]);
      if (error) throw error;
      setSuccess(true);
      (e.target as HTMLFormElement).reset();
    } catch (err: any) {
      setError(err.message || 'Something went wrong.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <PageWrapper>
      <div className="pt-32 pb-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h1 className="font-serif italic text-4xl md:text-6xl text-ink-navy mb-6">Contact Us</h1>
          <p className="text-xl text-ink-navy/70 max-w-2xl mx-auto leading-relaxed">
            Reach out to the Hosaco96 Association for inquiries, partnerships, or support.
          </p>
          <div className="w-px h-16 bg-harmattan-gold/50 mx-auto mt-12" />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-16 max-w-5xl mx-auto">
          <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.2 }}>
            <h2 className="font-serif text-3xl mb-8">Get in Touch</h2>
            <Card className="p-8">
              {success && (
                <div className="mb-6 p-4 bg-palm-green/10 text-palm-green rounded-md text-sm">
                  Message sent successfully. We will get back to you shortly.
                </div>
              )}
              {error && (
                <div className="mb-6 p-4 bg-brick-clay/10 text-brick-clay rounded-md text-sm">
                  {error}
                </div>
              )}
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-ink-navy/80 mb-2">First Name</label>
                    <input name="firstName" type="text" required className="w-full px-4 py-3 border border-ink-navy/20 rounded focus:outline-none focus:ring-2 focus:ring-harmattan-gold bg-transparent" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-ink-navy/80 mb-2">Last Name</label>
                    <input name="lastName" type="text" required className="w-full px-4 py-3 border border-ink-navy/20 rounded focus:outline-none focus:ring-2 focus:ring-harmattan-gold bg-transparent" />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-ink-navy/80 mb-2">Email</label>
                  <input name="email" type="email" required className="w-full px-4 py-3 border border-ink-navy/20 rounded focus:outline-none focus:ring-2 focus:ring-harmattan-gold bg-transparent" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-ink-navy/80 mb-2">Department</label>
                  <select name="department" required className="w-full px-4 py-3 border border-ink-navy/20 rounded focus:outline-none focus:ring-2 focus:ring-harmattan-gold bg-transparent">
                    <option value="General Inquiry">General Inquiry</option>
                    <option value="NGO / Programs">NGO / Programs</option>
                    <option value="Careers & Volunteering">Careers & Volunteering</option>
                    <option value="Alumni Support">Alumni Support</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-ink-navy/80 mb-2">Message</label>
                  <textarea name="message" required rows={4} className="w-full px-4 py-3 border border-ink-navy/20 rounded focus:outline-none focus:ring-2 focus:ring-harmattan-gold bg-transparent"></textarea>
                </div>
                <Button type="submit" disabled={loading} className="w-full" size="lg">
                  {loading ? 'Sending...' : 'Send Message'}
                </Button>
              </form>
            </Card>
          </motion.div>
          <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.4 }}>
            <div className="h-full flex flex-col">
              <div className="mb-12">
                <h3 className="font-serif text-2xl font-semibold mb-4 text-ink-navy">Headquarters</h3>
                <p className="text-ink-navy/70 leading-relaxed mb-4">
                  Microsystems 7A Niger Street,<br />
                  Parkview, Ikoyi, Lagos, Nigeria.
                </p>
                <div className="space-y-2 mb-4">
                  <a href="mailto:info@hosaco96.org" className="text-harmattan-gold font-medium hover:text-adire-indigo transition-colors block">info@hosaco96.org</a>
                  <a href="tel:+2347075034332" className="text-ink-navy/70 hover:text-harmattan-gold transition-colors block">Main: 0707 503 4332</a>
                  <a href="tel:+2349115957095" className="text-ink-navy/70 hover:text-harmattan-gold transition-colors block">NGO Line 1: 0911 595 7095</a>
                  <a href="tel:+2349138131954" className="text-ink-navy/70 hover:text-harmattan-gold transition-colors block">NGO Line 2: 0913 813 1954</a>
                </div>
              </div>
              
              <div className="flex-grow min-h-[300px] rounded-xl overflow-hidden bg-ink-navy/5 relative group border border-ink-navy/10">
                 {/* Map Placeholder */}
                 <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1524661135-423995f22d0b?q=80&w=800&auto=format&fit=crop')] bg-cover bg-center mix-blend-multiply opacity-50 transition-transform duration-700 group-hover:scale-105" />
                 <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                    <div className="bg-white px-6 py-3 rounded shadow-lg font-serif italic text-ink-navy">View on Map</div>
                 </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </PageWrapper>
  );
}
