import React from 'react';
import { motion } from 'framer-motion';

const PrivacySection = ({ title, summary, children }) => {
  const [isExpanded, setIsExpanded] = React.useState(false);

  return (
    <div className="mb-8 border-b border-gray-700 pb-8">
      <button
        onClick={() => setIsExpanded(!isExpanded)}
        className="w-full text-left"
      >
        <h2 className="text-2xl font-serif text-gold mb-4 flex justify-between items-center">
          {title}
          <span className={`transform transition-transform ${isExpanded ? 'rotate-180' : ''}`}>
            ▼
          </span>
        </h2>
        {summary && (
          <div className="bg-[#2c3030] p-4 rounded-lg mb-4">
            <div className="grid gap-2">
              {summary.map((item, index) => (
                <div key={index} className="flex items-start gap-2">
                  <span className="text-gold">{item.icon}</span>
                  <span className="text-cream/70">{item.label}:</span>
                  <span className="text-cream">{item.value}</span>
                </div>
              ))}
            </div>
          </div>
        )}
      </button>
      <motion.div
        initial={false}
        animate={{ height: isExpanded ? 'auto' : 0, opacity: isExpanded ? 1 : 0 }}
        transition={{ duration: 0.3 }}
        className="overflow-hidden"
      >
        <div className="space-y-4 text-cream/80 pt-4">
          {children}
        </div>
      </motion.div>
    </div>
  );
};

export default PrivacySection;
