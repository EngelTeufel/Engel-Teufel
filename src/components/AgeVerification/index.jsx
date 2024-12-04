import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

const AgeVerification = () => {
  const [isVisible, setIsVisible] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const ageVerified = localStorage.getItem('ageVerified');
    if (!ageVerified) {
      setIsVisible(true);
    }
  }, []);

  const handleVerify = () => {
    localStorage.setItem('ageVerified', 'true');
    setIsVisible(false);
  };

  const handleDeny = () => {
    window.location.href = 'https://www.google.com';
  };

  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 bg-gradient-to-br from-dark/95 to-dark/90 backdrop-blur-md z-50 flex items-center justify-center">
      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        className="relative max-w-md w-full mx-4"
      >
        <div className="gradient-border rounded-3xl overflow-hidden p-[1px]">
          <div className="bg-dark rounded-3xl p-8 backdrop-blur-sm relative overflow-hidden">
            {/* Background Decorative Elements */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-gold/10 rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 left-0 w-24 h-24 bg-gold/5 rounded-full blur-2xl"></div>
            
            <div className="relative text-center">
              <motion.h2 
                className="text-3xl md:text-4xl font-serif heading-gradient mb-8"
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.2 }}
              >
                Altersverifikation
              </motion.h2>
              
              <motion.div 
                className="space-y-4 mb-8"
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.3 }}
              >
                <p className="text-cream/90">
                  Diese Website enthält Inhalte, die nur für Erwachsene bestimmt sind.
                </p>
                <p className="text-xl text-gold font-medium">
                  Bist du mindestens 18 Jahre alt?
                </p>
              </motion.div>
              
              <motion.div 
                className="flex flex-col sm:flex-row gap-4 justify-center"
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.4 }}
              >
                <button
                  onClick={handleDeny}
                  className="button-secondary"
                >
                  Nein, ich bin unter 18
                </button>
                <button
                  onClick={handleVerify}
                  className="button-primary"
                >
                  Ja, ich bin über 18
                </button>
              </motion.div>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default AgeVerification;
