import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { motion } from 'framer-motion'; // Import motion from framer-motion

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top + window.scrollY;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
    setIsMobileMenuOpen(false);
  };

  const navLinks = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'projects', label: 'Projects' },
    { id: 'contact', label: 'Contact' }
  ];

  return (
    <motion.nav
      className={`fixed top-0 left-0 right-0 z-50 px-6 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-md' : 'bg-white/80 backdrop-blur-sm'
      }`}
      initial={{ opacity: 0 }} // Initial state for animation
      animate={{ opacity: 1 }} // Animate to this state
      transition={{ duration: 0.5, delay: 1 }} // Animation duration
    >
      <div className="container mx-auto py-4">
        <div className="flex items-center justify-between">
          <motion.button
            onClick={() => scrollToSection('home')}
            className="text-2xl font-bold text-slate-900 hover:text-blue-600 transition-colors"
            whileHover={{ scale: 1.1 }} // Scale effect on hover
            whileTap={{ scale: 0.95 }} // Scale effect on tap
          >
            Vishal's Portfolio
          </motion.button>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <motion.button
                key={link.id}
                onClick={() => scrollToSection(link.id)}
                className="text-slate-700 hover:text-blue-600 transition-colors"
                whileHover={{ scale: 1.1 }} // Scale effect on hover
                whileTap={{ scale: 0.95 }} // Scale effect on tap
              >
                {link.label}
              </motion.button>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <motion.button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2 text-slate-700 hover:text-blue-600 transition-colors"
            whileHover={{ rotate: 90 }} // Rotate effect on hover
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </motion.button>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <motion.div
            className="md:hidden mt-4 pb-4 space-y-3 border-t border-slate-200 pt-4"
            initial={{ opacity: 0, height: 0 }} // Initial state for animation
            animate={{ opacity: 1, height: 'auto' }} // Animate to this state
            transition={{ duration: 0.3 }} // Animation duration
          >
            {navLinks.map((link) => (
              <motion.button
                key={link.id}
                onClick={() => scrollToSection(link.id)}
                className="block w-full text-left text-slate-700 hover:text-blue-600 transition-colors py-2"
                whileHover={{ scale: 1.1 }} // Scale effect on hover
                whileTap={{ scale: 0.95 }} // Scale effect on tap
              >
                {link.label}
              </motion.button>
            ))}
          </motion.div>
        )}
      </div>
    </motion.nav>
  );
}
