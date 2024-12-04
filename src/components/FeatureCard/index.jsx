import React from 'react';
import { motion } from 'framer-motion';

const FeatureCard = ({ title, description, icon }) => {
  return (
    <motion.div
      className="bg-brand-dark/50 rounded-xl overflow-hidden border border-brand-gold/10 shadow-lg backdrop-blur-sm"
      whileHover={{ 
        scale: 1.02,
        backgroundColor: 'rgba(153, 123, 77, 0.1)',
        borderColor: 'rgba(153, 123, 77, 0.3)'
      }}
    >
      <div className="p-8">
        <span className="text-4xl mb-6 block">{icon}</span>
        <h3 className="text-xl text-brand-gold mb-4 font-serif">{title}</h3>
        <p className="text-brand-cream/80 leading-relaxed">{description}</p>
      </div>
    </motion.div>
  );
};

export default FeatureCard;
