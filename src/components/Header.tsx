import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion } from 'motion/react';
import { Menu, X, User } from 'lucide-react';
import { supabase } from '../lib/supabase';
import { cn } from '../lib/utils';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [user, setUser] = useState<any>(null);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      setUser(session?.user ?? null);
    });

    const { data: { subscription } } = supabase.auth.onAuthStateChange((_event, session) => {
      setUser(session?.user ?? null);
    });

    return () => subscription.unsubscribe();
  }, []);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About Us', path: '/about' },
    { name: 'Programs & Impact', path: '/programs' },
    { name: 'Alumni Hub', path: '/alumni' },
    { name: 'News & Stories', path: '/news' },
  ];

  return (
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.4, ease: 'easeOut' }}
      className={cn(
        'fixed top-0 left-0 w-full z-50 transition-colors duration-300',
        isScrolled ? 'bg-parchment/95 backdrop-blur-md shadow-sm' : 'bg-transparent'
      )}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div className="flex-shrink-0 flex items-center">
            <Link to="/" className="flex items-center gap-3 group">
              {/* Simple Seal Placeholder */}
              <div className="w-10 h-10 rounded-full bg-harmattan-gold flex items-center justify-center text-ink-navy font-serif font-bold text-lg shadow-sm group-hover:scale-105 transition-transform duration-300">
                H
              </div>
              <span className="font-serif font-bold text-2xl tracking-tight text-ink-navy">Hosaco96</span>
            </Link>
          </div>

          {/* Desktop Nav */}
          <nav className="hidden md:flex space-x-8 items-center">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className="text-sm font-medium text-ink-navy hover:text-adire-indigo transition-colors relative group"
              >
                {link.name}
                <span className={cn(
                  "absolute -bottom-1 left-0 w-full h-[2px] bg-harmattan-gold transition-transform duration-300 origin-left",
                  location.pathname === link.path ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100"
                )} />
              </Link>
            ))}
          </nav>

          <div className="hidden md:flex items-center space-x-4">
            <Link
              to="/get-involved"
              className="inline-flex items-center justify-center px-6 py-2 border border-transparent text-sm font-medium rounded bg-brick-clay text-white hover:bg-brick-clay/90 transition-colors active:translate-y-[2px]"
            >
              Donate
            </Link>
            {user ? (
              <Link
                to="/profile"
                className="inline-flex items-center justify-center p-2 rounded-full bg-ink-navy/5 text-ink-navy hover:bg-ink-navy/10 transition-colors"
                title="Profile"
              >
                <User size={20} />
              </Link>
            ) : (
              <Link
                to="/login"
                className="text-sm font-medium text-ink-navy hover:text-adire-indigo"
              >
                Log In
              </Link>
            )}
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="text-ink-navy hover:text-adire-indigo focus:outline-none p-2"
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          exit={{ opacity: 0, height: 0 }}
          className="md:hidden bg-parchment border-t border-ink-navy/10"
        >
          <div className="px-4 pt-2 pb-6 space-y-1">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                onClick={() => setMobileMenuOpen(false)}
                className="block px-3 py-3 text-base font-medium text-ink-navy hover:bg-ink-navy/5 rounded-md"
              >
                {link.name}
              </Link>
            ))}
            <div className="mt-4 pt-4 border-t border-ink-navy/10 flex flex-col gap-3">
              <Link
                to="/get-involved"
                onClick={() => setMobileMenuOpen(false)}
                className="block w-full text-center px-4 py-3 bg-brick-clay text-white rounded font-medium"
              >
                Donate
              </Link>
              {user ? (
                <Link
                  to="/profile"
                  onClick={() => setMobileMenuOpen(false)}
                  className="block w-full text-center px-4 py-3 bg-ink-navy/5 text-ink-navy rounded font-medium"
                >
                  My Profile
                </Link>
              ) : (
                <Link
                  to="/login"
                  onClick={() => setMobileMenuOpen(false)}
                  className="block w-full text-center px-4 py-3 border border-ink-navy/20 text-ink-navy rounded font-medium"
                >
                  Log In
                </Link>
              )}
            </div>
          </div>
        </motion.div>
      )}
    </motion.header>
  );
}
