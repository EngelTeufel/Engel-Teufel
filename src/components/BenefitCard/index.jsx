import React from 'react';
import { motion } from 'framer-motion';

const BenefitCard = ({ title, description, icon, index }) => {
  return (
    <motion.div
      className="bg-[#2c3030] rounded-lg overflow-hidden"
      whileHover={{ scale: 1.02, backgroundColor: 'rgba(153, 123, 77, 0.1)' }}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1 }}
    >
      <div className="p-6">
        <div className="flex items-start gap-4">
          <span className="text-3xl">{icon}</span>
          <div>
            <h3 className="text-lg text-gold mb-2 font-serif">{title}</h3>
            <p className="text-cream/70">{description}</p>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default BenefitCard;
