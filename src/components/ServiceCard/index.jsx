import React from 'react';
import { motion } from 'framer-motion';

const ServiceCard = ({ title, description, icon, index }) => {
  return (
    <motion.div
      className="bg-[#2c3030] rounded-lg overflow-hidden"
      whileHover={{ scale: 1.02, backgroundColor: 'rgba(153, 123, 77, 0.1)' }}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ 
        type: "spring", 
        stiffness: 300,
        delay: index * 0.1 
      }}
    >
      <div className="p-8">
        <span className="text-4xl mb-6 block">{icon}</span>
        <h3 className="text-xl text-gold mb-4 font-serif">{title}</h3>
        <p className="text-cream/70 leading-relaxed">{description}</p>
      </div>
    </motion.div>
  );
};

export default ServiceCard;
