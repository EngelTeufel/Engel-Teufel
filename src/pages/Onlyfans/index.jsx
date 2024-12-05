import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import Hero from '../../components/Hero';
import { heroImages } from '../../assets';

const Onlyfans = () => {
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  const benefits = [
    {
      title: "Professionelle Betreuung",
      description: "Wir nehmen uns Zeit, dich und deine Ziele kennenzulernen. Gemeinsam entwickeln wir eine Strategie, die perfekt zu dir passt."
    },
    {
      title: "Hochwertiger Content",
      description: "Mit unserem Team aus Fotografen, Videografen und Visagisten erstellen wir exklusiven Content, der deine Fans begeistert und deine Reichweite steigert."
    },
    {
      title: "Social-Media-Management",
      description: "Wir kümmern uns um deine Profile und übernehmen das Community-Building, sodass du dich voll auf deinen Content konzentrieren kannst."
    },
    {
      title: "Technische Ausstattung",
      description: "Von iPhones bis zu MacBooks – wir stellen dir das Equipment zur Verfügung, das du für erstklassigen Content benötigst."
    },
    {
      title: "Langfristiger Erfolg",
      description: "Unser Ziel ist nicht der schnelle Erfolg, sondern eine stabile und nachhaltige Karriere. Wir arbeiten daran, dich finanziell unabhängig zu machen."
    }
  ];

  const steps = [
    {
      title: "Bewerbung",
      description: "Melde dich ganz einfach bei uns über unsere Webseite oder Instagram an."
    },
    {
      title: "Onboarding",
      description: "Wir starten mit einem ausführlichen Kennenlernen, um deine Stärken und Ziele zu definieren."
    },
    {
      title: "Content-Produktion",
      description: "Gemeinsam erstellen wir hochwertigen Content, der deine Fans begeistert und deine Einnahmen maximiert."
    },
    {
      title: "Betreuung",
      description: "Von regelmäßigen Check-ins bis hin zur strategischen Planung – wir begleiten dich auf jedem Schritt deines Weges."
    }
  ];

  return (
    <div className="min-h-screen bg-black">
      <Hero
        title="Werde OnlyFans-Model mit Engel & Teufel"
        subtitle="Starte deine Karriere auf OnlyFans – mit einem starken Partner an deiner Seite!"
        image={heroImages.onlyfans}
      />

      <motion.section
        className="container mx-auto px-4 py-16"
        initial="hidden"
        animate="visible"
        variants={fadeIn}
      >
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-white text-lg mb-12">
            Engel & Teufel unterstützt dich dabei, auf der weltweit führenden Plattform erfolgreich zu sein. 
            Ob du bereits Erfahrung hast oder ganz neu durchstarten möchtest – wir bieten dir alles, was du für eine erfolgreiche und nachhaltige Karriere brauchst.
          </p>

          <h2 className="text-3xl md:text-4xl font-bold text-gold mb-12">
            Deine Vorteile bei Engel & Teufel
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                className="bg-dark-gray p-6 rounded-lg"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.2 }}
              >
                <h3 className="text-xl font-semibold text-gold mb-4">
                  {benefit.title}
                </h3>
                <p className="text-white">
                  {benefit.description}
                </p>
              </motion.div>
            ))}
          </div>

          <h2 className="text-3xl md:text-4xl font-bold text-gold mb-12">
            Wie läuft die Zusammenarbeit ab?
          </h2>

          <div className="grid md:grid-cols-2 gap-8 mb-16">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                className="bg-dark-gray p-6 rounded-lg"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.2 }}
              >
                <h3 className="text-xl font-semibold text-gold mb-4">
                  {step.title}
                </h3>
                <p className="text-white">
                  {step.description}
                </p>
              </motion.div>
            ))}
          </div>

          <div className="bg-dark-gray p-8 rounded-lg mb-16">
            <h2 className="text-2xl md:text-3xl font-bold text-gold mb-6">
              Bist du bereit, durchzustarten?
            </h2>
            <p className="text-white text-lg mb-8">
              Engel & Teufel bietet dir die Chance, mit OnlyFans ein solides Einkommen zu erzielen und deine Ziele zu erreichen. 
              Mit unserer Erfahrung und deinem Engagement können wir Großes erreichen.
            </p>
            <Link to="/apply">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-gold text-black px-8 py-3 rounded-full font-semibold text-lg hover:bg-gold-dark transition-colors duration-300"
              >
                Jetzt Bewerben und Teil unseres Teams werden!
              </motion.button>
            </Link>
          </div>
        </div>
      </motion.section>
    </div>
  );
};

export default Onlyfans;
