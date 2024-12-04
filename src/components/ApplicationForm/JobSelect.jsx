import React from 'react';
import { motion } from 'framer-motion';

const jobCategories = [
  {
    id: 'onlyfans',
    title: 'OnlyFans-Model',
    icon: '📱',
    description: 'Starte deine Karriere als Content Creator'
  },
  {
    id: 'webcam',
    title: 'Webcam-Model',
    icon: '🎥',
    description: 'Arbeite flexibel von zuhause oder im Studio'
  },
  {
    id: 'combined',
    title: 'OnlyFans & Webcam',
    icon: '💫',
    description: 'Kombiniere beide Bereiche für maximalen Erfolg'
  },
  {
    id: 'chat',
    title: 'Chatter',
    icon: '💬',
    description: 'Betreue und berate unsere Kunden'
  },
  {
    id: 'team',
    title: 'Jobs im Team',
    icon: '👥',
    description: 'Marketing, IT, Buchhaltung und mehr'
  }
];

const JobSelect = ({ onSelect, selectedJob }) => {
  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-serif mb-4">Wähle deinen Traumjob</h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
        {jobCategories.map((job) => (
          <motion.button
            key={job.id}
            onClick={() => onSelect(job.id)}
            className={`p-6 rounded-lg text-left transition-all ${
              selectedJob === job.id
                ? 'bg-gold/20 border-2 border-gold'
                : 'bg-[#2c3030] border-2 border-transparent hover:border-gold/50'
            }`}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <span className="text-3xl mb-3 block">{job.icon}</span>
            <h3 className="text-lg font-medium mb-2">{job.title}</h3>
            <p className="text-cream/70 text-sm">{job.description}</p>
          </motion.button>
        ))}
      </div>
    </div>
  );
};

export default JobSelect;
