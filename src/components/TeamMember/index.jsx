import React from 'react';
import { motion } from 'framer-motion';

const TeamMember = ({ name, position, description, photoUrl }) => {
  // Generate image filename based on first name and last initial
  const generatePhotoUrl = (name) => {
    const [firstName, lastName] = name.split(' ');
    const lastInitial = lastName ? lastName[0] : '';
    return photoUrl || `/images/team/${firstName}.${lastInitial}.jpg`;
  };

  return (
    <motion.div
      className="bg-[#2c3030] rounded-lg overflow-hidden"
      whileHover={{ scale: 1.02 }}
      transition={{ type: "spring", stiffness: 300 }}
    >
      <div className="aspect-w-1 aspect-h-1 overflow-hidden">
        <img
          src={generatePhotoUrl(name)}
          alt={name}
          className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
          onError={(e) => {
            e.target.src = '/images/team/placeholder.jpg';
          }}
        />
      </div>
      <div className="p-6">
        <h3 className="text-xl text-gold mb-2 font-serif">{name}</h3>
        <p className="text-cream/90 font-medium mb-3">{position}</p>
        <p className="text-cream/70">{description}</p>
      </div>
    </motion.div>
  );
};

export default TeamMember;
