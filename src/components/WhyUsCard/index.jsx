import React from 'react';
import { motion } from 'framer-motion';

const WhyUsCard = ({ title, description, icon, index }) => {
  return (
    <motion.div
      className="bg-[#2c3030] rounded-lg overflow-hidden border border-gold/10"
      whileHover={{ scale: 1.02, backgroundColor: 'rgba(153, 123, 77, 0.1)' }}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1 }}
    >
      <div className="p-6">
        <span className="text-3xl mb-4 block">{icon}</span>
        <h3 className="text-xl text-gold mb-3 font-serif">{title}</h3>
        <p className="text-cream/70">{description}</p>
      </div>
    </motion.div>
  );
};

export default WhyUsCard;
