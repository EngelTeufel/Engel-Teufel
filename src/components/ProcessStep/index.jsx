import React from 'react';
import { motion } from 'framer-motion';

const ProcessStep = ({ title, description, number }) => {
  return (
    <motion.div
      className="relative"
      whileHover={{ scale: 1.02 }}
    >
      <div className="flex items-start gap-6">
        <div className="w-12 h-12 bg-gold rounded-full flex items-center justify-center flex-shrink-0">
          <span className="text-dark font-bold">{number}</span>
        </div>
        <div>
          <h3 className="text-xl text-gold mb-2 font-serif">{title}</h3>
          <p className="text-cream/70">{description}</p>
        </div>
      </div>
      {number < 4 && (
        <div className="absolute left-6 top-16 h-16 w-px bg-gold/20 hidden md:block" />
      )}
    </motion.div>
  );
};

export default ProcessStep;
