import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const JobCard = ({ title, description, icon, link }) => {
  return (
    <motion.div
      className="bg-brand-dark/50 rounded-xl overflow-hidden border border-brand-gold/10 h-full shadow-lg backdrop-blur-sm"
      whileHover={{ 
        scale: 1.02,
        backgroundColor: 'rgba(153, 123, 77, 0.1)',
        borderColor: 'rgba(153, 123, 77, 0.3)'
      }}
    >
      <div className="p-8 flex flex-col h-full">
        <div className="flex items-start gap-4 mb-4">
          <span className="text-4xl">{icon}</span>
          <h3 className="text-2xl text-brand-gold font-serif">{title}</h3>
        </div>
        <p className="text-brand-cream/80 mb-6 flex-grow leading-relaxed">{description}</p>
        <motion.div
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="mt-auto"
        >
          <Link
            to={link}
            className="inline-flex items-center text-brand-gold hover:text-brand-cream transition-colors gap-2 group"
          >
            Mehr erfahren 
            <span className="transform transition-transform group-hover:translate-x-1">→</span>
          </Link>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default JobCard;
