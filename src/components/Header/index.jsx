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
      hasMainPage: true,
      submenu: [
        { path: '/onlyfans', label: 'OnlyFans' },
        { path: '/webcam', label: 'Webcam' },
        { path: '/tax-freedom', label: 'Steuerfreies Leben' }
      ]
    },
    {
      label: 'Unternehmen',
      path: '/company',
      submenu: [
        { path: '/founder', label: 'Gründer' },
        { path: '/team', label: 'Team' }
      ]
    },
    {
      label: 'Karriere',
      path: '/karriere',
      hasMainPage: true,
      submenu: [
        { path: '/freelancer', label: 'Freelancer' }
      ]
    },
    { path: '/contact', label: 'Kontakt' }
  ];

  const renderSubmenu = (submenu) => (
    <motion.div
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -10 }}
      className="submenu absolute left-0 mt-2 w-48 rounded-md shadow-lg bg-[#2c3030] ring-1 ring-black ring-opacity-5 z-50"
    >
      <div className="py-1">
        {submenu.map((item) => (
          <Link
            key={item.path}
            to={item.path}
            className="block px-4 py-2 text-sm text-cream/80 hover:bg-[#3c4040] hover:text-gold"
            onClick={() => setIsMenuOpen(false)}
          >
            {item.label}
          </Link>
        ))}
      </div>
    </motion.div>
  );

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
              src={isScrolled ? '/images/header/Logo-Gold.webp' : '/images/header/Logo-White.webp'} 
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
                onMouseEnter={() => item.submenu && handleMouseEnter(item.label)}
                onMouseLeave={handleMouseLeave}
              >
                {item.submenu ? (
                  <div className="submenu-container">
                    <Link
                      to={item.path}
                      className={`relative overflow-hidden group ${
                        location.pathname === item.path ? 'text-gold' : 'text-cream/80'
                      }`}
                    >
                      {item.label}
                      <span className="absolute bottom-0 left-0 w-full h-0.5 bg-gold transform origin-left scale-x-0 transition-transform duration-300 group-hover:scale-x-100" />
                    </Link>
                    <AnimatePresence>
                      {activeSubmenu === item.label && renderSubmenu(item.submenu)}
                    </AnimatePresence>
                  </div>
                ) : (
                  <Link
                    to={item.path}
                    className={`relative overflow-hidden group ${
                      location.pathname === item.path ? 'text-gold' : 'text-cream/80'
                    }`}
                  >
                    {item.label}
                    <span className="absolute bottom-0 left-0 w-full h-0.5 bg-gold transform origin-left scale-x-0 transition-transform duration-300 group-hover:scale-x-100" />
                  </Link>
                )}
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
          <AnimatePresence>
            {isMenuOpen && (
              <motion.div
                initial={{ opacity: 0, x: '100%' }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: '100%' }}
                transition={{ type: 'tween' }}
                className="fixed inset-0 lg:hidden bg-brand-dark/95 backdrop-blur-md"
              >
                <div className="h-full flex flex-col pt-24 px-6 overflow-y-auto">
                  {navItems.map((item) => (
                    <div key={item.label} className="py-2">
                      {item.submenu ? (
                        <>
                          <button
                            onClick={() => setActiveSubmenu(activeSubmenu === item.label ? null : item.label)}
                            className="w-full text-left text-xl font-medium text-white hover:text-gold py-2 flex justify-between items-center"
                          >
                            {item.label}
                            <span className={`transform transition-transform duration-200 ${activeSubmenu === item.label ? 'rotate-180' : ''}`}>
                              ▼
                            </span>
                          </button>
                          <AnimatePresence>
                            {activeSubmenu === item.label && (
                              <motion.div
                                initial={{ height: 0, opacity: 0 }}
                                animate={{ height: 'auto', opacity: 1 }}
                                exit={{ height: 0, opacity: 0 }}
                                className="pl-4 space-y-2 bg-brand-dark/50 rounded-lg mt-2"
                              >
                                {item.submenu.map((subItem) => (
                                  <Link
                                    key={subItem.label}
                                    to={subItem.path}
                                    onClick={() => setIsMenuOpen(false)}
                                    className="block py-2 text-white hover:text-gold"
                                  >
                                    {subItem.label}
                                  </Link>
                                ))}
                              </motion.div>
                            )}
                          </AnimatePresence>
                        </>
                      ) : (
                        <Link
                          to={item.path}
                          onClick={() => setIsMenuOpen(false)}
                          className="block text-xl font-medium text-white hover:text-gold py-2"
                        >
                          {item.label}
                        </Link>
                      )}
                    </div>
                  ))}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </nav>
      </div>
    </header>
  );
};

export default Header;
