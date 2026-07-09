import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Twitter, Linkedin, Instagram } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-ink-navy text-parchment pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          <div className="col-span-1 md:col-span-1">
            <Link to="/" className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-full bg-harmattan-gold flex items-center justify-center text-ink-navy font-serif font-bold text-lg">
                H
              </div>
              <span className="font-serif font-bold text-2xl tracking-tight text-white">Hosaco96</span>
            </Link>
            <p className="text-parchment/80 text-sm leading-relaxed mb-6">
              Holy Saviour's College, Class of 1996. An honors ledger of membership, support, and community service.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-parchment/60 hover:text-harmattan-gold transition-colors"><Facebook size={20} /></a>
              <a href="#" className="text-parchment/60 hover:text-harmattan-gold transition-colors"><Twitter size={20} /></a>
              <a href="#" className="text-parchment/60 hover:text-harmattan-gold transition-colors"><Linkedin size={20} /></a>
              <a href="#" className="text-parchment/60 hover:text-harmattan-gold transition-colors"><Instagram size={20} /></a>
            </div>
          </div>
          
          <div>
            <h4 className="font-serif font-semibold text-lg mb-6 text-white">Sitemap</h4>
            <ul className="space-y-3">
              <li><Link to="/about" className="text-sm text-parchment/80 hover:text-harmattan-gold transition-colors">About Us</Link></li>
              <li><Link to="/programs" className="text-sm text-parchment/80 hover:text-harmattan-gold transition-colors">Programs & Impact</Link></li>
              <li><Link to="/alumni" className="text-sm text-parchment/80 hover:text-harmattan-gold transition-colors">Alumni Hub</Link></li>
              <li><Link to="/news" className="text-sm text-parchment/80 hover:text-harmattan-gold transition-colors">News & Stories</Link></li>
              <li><Link to="/contact" className="text-sm text-parchment/80 hover:text-harmattan-gold transition-colors">Contact</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-serif font-semibold text-lg mb-6 text-white">Involvement</h4>
            <ul className="space-y-3">
              <li><Link to="/get-involved" className="text-sm text-parchment/80 hover:text-harmattan-gold transition-colors">Donate</Link></li>
              <li><Link to="/volunteer" className="text-sm text-parchment/80 hover:text-harmattan-gold transition-colors">Volunteer</Link></li>
              <li><Link to="/careers" className="text-sm text-parchment/80 hover:text-harmattan-gold transition-colors">Careers</Link></li>
              <li><Link to="/transparency" className="text-sm text-parchment/80 hover:text-harmattan-gold transition-colors">Transparency</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-serif font-semibold text-lg mb-6 text-white">Newsletter</h4>
            <p className="text-sm text-parchment/80 mb-4">Subscribe to receive updates on our impact and upcoming events.</p>
            <form className="flex">
              <input 
                type="email" 
                placeholder="Email address" 
                className="bg-white/10 border border-white/20 rounded-l px-4 py-2 text-sm text-white focus:outline-none focus:border-harmattan-gold w-full"
              />
              <button 
                type="submit" 
                className="bg-harmattan-gold text-ink-navy px-4 py-2 rounded-r font-medium text-sm hover:bg-harmattan-gold/90 transition-colors"
              >
                Join
              </button>
            </form>
          </div>
        </div>
        
        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-parchment/60 font-mono">
            &copy; {currentYear} Hosaco96 Association. All rights reserved.
          </p>
          <div className="flex space-x-6">
            <Link to="/privacy" className="text-xs text-parchment/60 hover:text-white transition-colors">Privacy Policy</Link>
            <Link to="/terms" className="text-xs text-parchment/60 hover:text-white transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
