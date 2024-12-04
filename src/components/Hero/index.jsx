import React from 'react';
import { motion } from 'framer-motion';

const Hero = ({ 
  title, 
  subtitle, 
  imageSrc, 
  imageAlt = '', 
  overlay = true,
  height = 'h-[70vh]',
  children 
}) => {
  return (
    <div className={`relative w-full ${height} overflow-hidden`}>
      {/* Background Image */}
      <div className="absolute inset-0 w-full h-full">
        <img
          src={imageSrc}
          alt={imageAlt}
          className="w-full h-full object-cover"
        />
        {overlay && (
          <>
            {/* Dark overlay for better text readability */}
            <div className="absolute inset-0 bg-gradient-to-b from-dark/80 via-dark/60 to-transparent" />
            {/* Gold accent gradient */}
            <div className="absolute inset-0 bg-gradient-to-br from-gold-light/20 via-gold/10 to-dark/70" />
            {/* Bottom fade */}
            <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-dark to-transparent" />
          </>
        )}
        {/* Gold overlay gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-cream/30 via-dark/40 to-dark/90" />
      </div>

      {/* Content */}
      <div className="relative h-full container mx-auto px-4 flex flex-col justify-center items-center text-center z-10">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl lg:text-6xl font-serif text-gold-light mb-6"
        >
          {title}
        </motion.h1>
        
        {subtitle && (
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg md:text-xl text-cream-light max-w-2xl mb-8"
          >
            {subtitle}
          </motion.p>
        )}

        {children && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            {children}
          </motion.div>
        )}
      </div>

      {/* Decorative Elements */}
      <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-dark to-transparent" />
      <div className="absolute top-1/4 left-0 w-64 h-64 bg-gold/20 rounded-full filter blur-3xl" />
      <div className="absolute bottom-1/4 right-0 w-48 h-48 bg-gold/10 rounded-full filter blur-2xl" />
    </div>
  );
};

export default Hero;
