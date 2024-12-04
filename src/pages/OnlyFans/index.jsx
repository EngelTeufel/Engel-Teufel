import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import Hero from '../../components/Hero';
import { heroImages } from '../../assets';

const OnlyFans = () => {
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Hero
        title="OnlyFans"
        subtitle="Starten Sie Ihre OnlyFans-Karriere mit uns"
        imageSrc={heroImages.onlyfans}
      />
      
      {/* Content Section */}
      <section className="section">
        <div className="container max-w-4xl">
          <motion.div
            className="prose prose-lg prose-invert mx-auto"
            initial="hidden"
            animate="visible"
            variants={fadeIn}
          >
            <h2>OnlyFans mit Engel & Teufel</h2>
            <p>
              Content kommt bald...
            </p>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default OnlyFans;
