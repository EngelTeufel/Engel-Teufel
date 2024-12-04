import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';

const CookieBanner = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Check if user has already made a cookie choice
    const cookieConsent = localStorage.getItem('cookieConsent');
    if (!cookieConsent) {
      setIsVisible(true);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem('cookieConsent', 'accepted');
    setIsVisible(false);
    // Here you would initialize your tracking/analytics tools
  };

  const handleDecline = () => {
    localStorage.setItem('cookieConsent', 'declined');
    setIsVisible(false);
    // Here you would ensure no tracking cookies are set
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ y: 100 }}
          animate={{ y: 0 }}
          exit={{ y: 100 }}
          className="fixed bottom-0 left-0 right-0 bg-dark/95 backdrop-blur-sm z-50 p-4 shadow-lg"
        >
          <div className="container mx-auto">
            <div className="flex flex-col md:flex-row items-center justify-between gap-4">
              <div className="text-cream/90 text-sm md:text-base">
                Wir verwenden Cookies, um Ihnen das beste Nutzererlebnis auf unserer Website zu ermöglichen. 
                Durch die weitere Nutzung der Website stimmen Sie der Verwendung von Cookies zu. 
                Weitere Informationen finden Sie in unserer{' '}
                <Link to="/privacy" className="text-gold hover:underline">
                  Datenschutzerklärung
                </Link>
                .
              </div>
              <div className="flex gap-3">
                <button
                  onClick={handleDecline}
                  className="px-4 py-2 text-sm bg-transparent border border-cream/20 text-cream/80 rounded hover:bg-cream/10 transition-colors"
                >
                  Ablehnen
                </button>
                <button
                  onClick={handleAccept}
                  className="px-4 py-2 text-sm bg-gold text-dark rounded hover:bg-gold/90 transition-colors"
                >
                  Akzeptieren
                </button>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default CookieBanner;
