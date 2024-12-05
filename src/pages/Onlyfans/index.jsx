import React from 'react';
import { motion } from 'framer-motion';
import Hero from '../../components/Hero';
import { heroImages } from '../../assets';

const Onlyfans = () => {
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <div className="min-h-screen bg-black">
      <Hero
        title="OnlyFans Management"
        subtitle="Maximiere dein Potenzial auf OnlyFans"
        image={heroImages.onlyfans}
      />

      <motion.section
        className="container mx-auto px-4 py-16"
        initial="hidden"
        animate="visible"
        variants={fadeIn}
      >
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-gold mb-8">
            OnlyFans Management Service
          </h2>
          <p className="text-white text-lg mb-6">
            Unser professionelles OnlyFans Management unterstützt dich dabei, deine Präsenz auf der Plattform zu optimieren und dein Einkommen zu maximieren.
          </p>

          <div className="grid md:grid-cols-2 gap-8 mt-12">
            <div className="bg-dark-gray p-6 rounded-lg">
              <h3 className="text-2xl font-semibold text-gold mb-4">
                Unsere Leistungen
              </h3>
              <ul className="text-white space-y-3">
                <li>• Profil-Optimierung und Strategie</li>
                <li>• Content-Planung und -Erstellung</li>
                <li>• Community Management</li>
                <li>• Marketing und Promotion</li>
                <li>• Einkommensoptimierung</li>
                <li>• Rechtliche Beratung</li>
              </ul>
            </div>

            <div className="bg-dark-gray p-6 rounded-lg">
              <h3 className="text-2xl font-semibold text-gold mb-4">
                Deine Vorteile
              </h3>
              <ul className="text-white space-y-3">
                <li>• Professionelle Betreuung</li>
                <li>• Höhere Einnahmen</li>
                <li>• Zeitersparnis</li>
                <li>• Rechtssicherheit</li>
                <li>• Expertenwissen</li>
                <li>• Persönlicher Support</li>
              </ul>
            </div>
          </div>

          <div className="mt-12 text-center">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-gold text-black px-8 py-3 rounded-full font-semibold text-lg hover:bg-gold-dark transition-colors duration-300"
            >
              Jetzt Beratungsgespräch vereinbaren
            </motion.button>
          </div>
        </div>
      </motion.section>
    </div>
  );
};

export default Onlyfans;
