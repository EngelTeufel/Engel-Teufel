import React, { useState, useEffect, useCallback } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSubmenu, setActiveSubmenu] = useState(null);
  const [closeTimeout, setCloseTimeout] = useState(null);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleMouseEnter = useCallback((label) => {
    if (closeTimeout) {
      clearTimeout(closeTimeout);
      setCloseTimeout(null);
    }
    setActiveSubmenu(label);
  }, [closeTimeout]);

  const handleMouseLeave = useCallback((e) => {
    // Check if we're not moving to the submenu
    const relatedTarget = e.relatedTarget;
    const isMovingToSubmenu = relatedTarget?.closest('.submenu-container');
    
    if (!isMovingToSubmenu) {
      const timeout = setTimeout(() => {
        setActiveSubmenu(null);
      }, 300); // 300ms delay before closing
      setCloseTimeout(timeout);
    }
  }, []);

  const navItems = [
    { path: '/', label: 'Home' },
    { path: '/about', label: 'Über Uns' },
    { 
      label: 'Dienstleistungen',
      path: '/services',
      submenu: [
        { path: '/webcam', label: 'Webcam' },
        { path: '/onlyfans', label: 'OnlyFans' },
        { path: '/tax-freedom', label: 'Steuerfrei Leben' }
      ]
    },
    { 
      label: 'Unternehmen',
      submenu: [
        { path: '/founder', label: 'Gründer' },
        { path: '/team', label: 'Team' }
      ]
    },
    { path: '/karriere', label: 'Karriere' },
    { path: '/blog', label: 'Blog' },
    { path: '/faq', label: 'FAQ' },
    { path: '/contact', label: 'Kontakt' }
  ];

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled ? 'bg-brand-dark/95 backdrop-blur-sm py-2 shadow-lg' : 'bg-transparent py-4'
      }`}
    >
      <div className="container mx-auto px-4">
        <nav className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="relative z-50 flex items-center">
            <img 
              src={isScrolled ? '/images/header/Logo-Gold.png' : '/images/header/Logo-White.png'} 
              alt="Engel & Teufel Logo" 
              className="h-12 w-auto transition-opacity duration-300"
            />
          </Link>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden relative z-50 p-2"
          >
            <div className="w-6 h-5 flex flex-col justify-between">
              <span className={`w-full h-0.5 bg-gold transform transition-all duration-300 ${isMenuOpen ? 'rotate-45 translate-y-2' : ''}`} />
              <span className={`w-full h-0.5 bg-gold transition-all duration-300 ${isMenuOpen ? 'opacity-0' : ''}`} />
              <span className={`w-full h-0.5 bg-gold transform transition-all duration-300 ${isMenuOpen ? '-rotate-45 -translate-y-2' : ''}`} />
            </div>
          </button>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {navItems.map((item) => (
              <div
                key={item.label}
                className="relative submenu-parent"
                onMouseEnter={() => handleMouseEnter(item.label)}
                onMouseLeave={handleMouseLeave}
              >
                {item.path ? (
                  <Link
                    to={item.path}
                    className={`relative overflow-hidden group ${
                      location.pathname === item.path ? 'text-gold' : 'text-cream/80'
                    }`}
                  >
                    {item.label}
                    <span className="absolute bottom-0 left-0 w-full h-0.5 bg-gold transform origin-left scale-x-0 transition-transform duration-300 group-hover:scale-x-100" />
                  </Link>
                ) : (
                  <button
                    className="text-cream/80 hover:text-gold transition-colors flex items-center gap-1"
                  >
                    {item.label}
                    <svg
                      className={`w-4 h-4 transform transition-transform ${
                        activeSubmenu === item.label ? 'rotate-180' : ''
                      }`}
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  </button>
                )}

                {/* Submenu */}
                <AnimatePresence>
                  {item.submenu && activeSubmenu === item.label && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 10 }}
                      transition={{ duration: 0.2 }}
                      className="submenu-container absolute top-full left-0 mt-2 py-2 min-w-[200px] glass-effect rounded-lg shadow-xl"
                      onMouseEnter={() => handleMouseEnter(item.label)}
                      onMouseLeave={handleMouseLeave}
                    >
                      {item.submenu.map((subItem) => (
                        <Link
                          key={subItem.path}
                          to={subItem.path}
                          className="block px-4 py-2 text-cream/80 hover:text-gold transition-colors hover:bg-cream/5"
                        >
                          {subItem.label}
                        </Link>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
            <Link
              to="/apply"
              className="button-primary"
            >
              Jetzt Bewerben
            </Link>
          </div>

          {/* Mobile Menu */}
          <motion.div
            initial={false}
            animate={isMenuOpen ? { opacity: 1, x: 0 } : { opacity: 0, x: "100%" }}
            className={`fixed inset-0 glass-effect lg:hidden ${
              isMenuOpen ? 'visible' : 'invisible'
            }`}
          >
            <div className="flex flex-col items-center justify-center h-full space-y-6">
              {navItems.map((item) => (
                <div key={item.label} className="text-center">
                  {item.path ? (
                    <Link
                      to={item.path}
                      onClick={() => setIsMenuOpen(false)}
                      className={`text-xl ${
                        location.pathname === item.path ? 'text-gold' : 'text-cream/80'
                      }`}
                    >
                      {item.label}
                    </Link>
                  ) : (
                    <>
                      <div className="text-xl text-gold mb-2">{item.label}</div>
                      <div className="flex flex-col space-y-2">
                        {item.submenu.map((subItem) => (
                          <Link
                            key={subItem.path}
                            to={subItem.path}
                            onClick={() => setIsMenuOpen(false)}
                            className="text-cream/80 hover:text-gold"
                          >
                            {subItem.label}
                          </Link>
                        ))}
                      </div>
                    </>
                  )}
                </div>
              ))}
              <Link
                to="/apply"
                onClick={() => setIsMenuOpen(false)}
                className="button-primary mt-4"
              >
                Jetzt Bewerben
              </Link>
            </div>
          </motion.div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
