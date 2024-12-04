import React from 'react';
import { motion } from 'framer-motion';

const StrategyStep = ({ title, description, icon, index }) => {
  return (
    <motion.div
      className="relative bg-[#2c3030] rounded-lg overflow-hidden border border-gold/10"
      whileHover={{ scale: 1.02, backgroundColor: 'rgba(153, 123, 77, 0.1)' }}
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay: index * 0.2 }}
    >
      <div className="p-8">
        <div className="flex items-start gap-6">
          <div className="w-12 h-12 bg-gold/20 rounded-full flex items-center justify-center flex-shrink-0">
            <span className="text-2xl">{icon}</span>
          </div>
          <div>
            <h3 className="text-xl text-gold mb-3 font-serif">{title}</h3>
            <p className="text-cream/70 leading-relaxed">{description}</p>
          </div>
        </div>
      </div>
      {index < 2 && (
        <div className="absolute left-10 -bottom-8 h-8 w-px bg-gold/20 hidden md:block" />
      )}
    </motion.div>
  );
};

export default StrategyStep;
