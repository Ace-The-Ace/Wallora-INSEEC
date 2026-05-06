import { Link, Outlet, useLocation } from 'react-router-dom';
import { Search, ShoppingBag, User, Menu } from 'lucide-react';
import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';

export default function Layout() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex flex-col selection:bg-brand-accent selection:text-brand-base">
      <header 
        className={`sticky top-0 z-50 transition-all duration-300 w-full ${
          isScrolled 
            ? 'bg-brand-base/90 backdrop-blur-md border-b border-brand-muted/30 py-4' 
            : 'bg-brand-base border-b border-transparent py-6'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-16 flex items-center justify-between">
          <nav className="hidden md:flex space-x-8 items-center">
            <Link to="/collections" className={`text-[11px] font-bold tracking-[0.15em] uppercase hover:text-brand-accent transition-colors ${location.pathname === '/collections' ? 'text-brand-accent' : 'text-brand-ink/70'}`}>
              Collections
            </Link>
            <Link to="/about" className={`text-[11px] font-bold tracking-[0.15em] uppercase hover:text-brand-accent transition-colors ${location.pathname === '/about' ? 'text-brand-accent' : 'text-brand-ink/70'}`}>
              Artistes
            </Link>
            <Link to="/about" className={`text-[11px] font-bold tracking-[0.15em] uppercase hover:text-brand-accent transition-colors ${location.pathname === '/contact' ? 'text-brand-accent' : 'text-brand-ink/70'}`}>
              Contact
            </Link>
          </nav>
          
          <Link to="/" className="text-2xl md:text-3xl font-serif tracking-[0.2em] uppercase text-brand-ink flex-shrink-0 absolute left-1/2 -translate-x-1/2">
            Wallora
          </Link>
          
          <div className="flex space-x-6 items-center flex-1 justify-end">
            <button className="text-brand-ink hover:text-brand-accent transition-colors"><Search size={20} strokeWidth={1.5} /></button>
            <button className="text-brand-ink hover:text-brand-accent transition-colors"><ShoppingBag size={20} strokeWidth={1.5} /></button>
            <button className="hidden md:block text-brand-ink hover:text-brand-accent transition-colors"><User size={20} strokeWidth={1.5} /></button>
            <button className="md:hidden text-brand-ink hover:text-brand-accent transition-colors" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
              <Menu size={24} strokeWidth={1.5} />
            </button>
          </div>
        </div>
      </header>

      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }} className="fixed inset-0 z-40 bg-brand-base pt-24 px-6 md:hidden flex flex-col">
            <nav className="flex flex-col space-y-6 text-center">
              <Link to="/collections" className="text-sm font-bold tracking-[0.15em] uppercase text-brand-ink">Collections</Link>
              <Link to="/about" className="text-sm font-bold tracking-[0.15em] uppercase text-brand-ink">Artistes</Link>
              <Link to="/about" className="text-sm font-bold tracking-[0.15em] uppercase text-brand-ink">Contact</Link>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>

      <main className="flex-grow w-full">
        <Outlet />
      </main>

      <footer className="border-t border-brand-muted/30 bg-brand-base w-full mt-auto">
        <div className="max-w-7xl mx-auto px-6 lg:px-16 py-16 grid grid-cols-1 md:grid-cols-4 gap-12">
          <div className="md:col-span-1 flex flex-col h-full">
            <h4 className="text-lg font-serif tracking-[0.15em] uppercase text-brand-ink mb-6">Wallora</h4>
            <p className="text-[13px] text-brand-ink/70 mt-auto hidden md:block leading-relaxed">
              © 2024 Wallora.<br/>Curated for the discerning eye.
            </p>
          </div>
          <div className="flex flex-col space-y-4">
            <Link to="#" className="text-[11px] font-bold tracking-widest uppercase text-brand-ink/70 hover:text-brand-accent transition-colors">Newsletter</Link>
            <Link to="#" className="text-[11px] font-bold tracking-widest uppercase text-brand-ink/70 hover:text-brand-accent transition-colors">Shipping & Returns</Link>
            <Link to="#" className="text-[11px] font-bold tracking-widest uppercase text-brand-ink/70 hover:text-brand-accent transition-colors">Terms of Service</Link>
          </div>
          <div className="flex flex-col space-y-4">
            <Link to="#" className="text-[11px] font-bold tracking-widest uppercase text-brand-ink/70 hover:text-brand-accent transition-colors">Privacy</Link>
            <Link to="#" className="text-[11px] font-bold tracking-widest uppercase text-brand-ink/70 hover:text-brand-accent transition-colors">Instagram</Link>
            <Link to="#" className="text-[11px] font-bold tracking-widest uppercase text-brand-ink/70 hover:text-brand-accent transition-colors">Pinterest</Link>
          </div>
          <div className="flex flex-col">
            <h5 className="text-[11px] font-bold tracking-widest uppercase text-brand-ink/70 mb-4">Stay Informed</h5>
            <div className="relative border-b border-brand-muted focus-within:border-brand-ink transition-colors pb-2">
              <input type="email" placeholder="Email Address" className="w-full bg-transparent border-none p-0 focus:ring-0 outline-none text-sm text-brand-ink placeholder:text-brand-muted" />
            </div>
          </div>
          <div className="md:hidden mt-8 text-center border-t border-brand-muted/30 pt-8">
            <p className="text-[13px] text-brand-ink/70">© 2024 Wallora. Curated for the discerning eye.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
