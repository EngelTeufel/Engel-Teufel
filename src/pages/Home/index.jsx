import React from 'react';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import Hero from '../../components/Hero';
import AnimatedNumber from '../../components/AnimatedNumber';
import { heroImages } from '../../assets';

const Home = () => {
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  const benefits = [
    'Individuelle Betreuung',
    'Professionelles Equipment',
    'Hochwertiger Content',
    'Effektive Marketingstrategien',
  ];

  const services = [
    {
      title: 'Professionelle Fotoshootings',
      description: 'Für ästhetischen und authentischen Content.',
      icon: '📸',
    },
    {
      title: 'Videoproduktionen',
      description: 'Erzähle deine Geschichte in beeindruckenden Clips.',
      icon: '🎥',
    },
    {
      title: 'Social-Media-Management',
      description: 'Effektives Community-Building und Reichweitenaufbau.',
      icon: '📱',
    },
    {
      title: 'Technische Ausstattung',
      description: 'Alles, was du brauchst, um auf höchstem Niveau zu arbeiten.',
      icon: '💻',
    },
  ];

  const stats = [
    { value: '70', label: 'Aktive Models', suffix: ' Modelle' },
    { value: '70Tsd.€', label: 'Marketing-Budget pro Monat' },
    { value: '30', label: 'Mitarbeiter', suffix: ' Mitarbeiter' },
    { value: '1,5M€', label: 'Monatlicher Umsatz' },
  ];

  return (
    <>
      <Helmet>
        <title>Engel & Teufel | Full-Service Agentur für Erotik & Adult Content</title>
        <meta name="description" content="Engel & Teufel ist Ihre professionelle Full-Service Agentur für OnlyFans, Webcam und Adult Content Creation. Starten Sie jetzt Ihre erfolgreiche Karriere!" />
        <meta name="keywords" content="Erotik Agentur, OnlyFans Management, Webcam Agentur, Adult Content, Model Management, Engel und Teufel" />
        <meta property="og:title" content="Engel & Teufel | Full-Service Agentur" />
        <meta property="og:description" content="Ihre professionelle Full-Service Agentur für OnlyFans, Webcam und Adult Content Creation. Starten Sie jetzt!" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.engelteufel.com" />
        <link rel="canonical" href="https://www.engelteufel.com" />
      </Helmet>
      <div className="flex flex-col min-h-screen bg-dark font-montserrat">
        <Hero
          title="Engel & Teufel"
          subtitle="Dein Partner für professionellen Content"
          imageSrc={heroImages.home}
        />

        {/* Services Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl mb-12 text-cream text-center font-inknut font-bold">
                Unsere Services
              </h2>
              <motion.div
                variants={fadeIn}
                initial="hidden"
                animate="visible"
                className="grid md:grid-cols-2 gap-8"
              >
                {services.map((service, index) => (
                  <div
                    key={index}
                    className="bg-dark/60 backdrop-blur-sm p-8 rounded-xl border border-gold/20"
                  >
                    <div className="text-4xl mb-4">{service.icon}</div>
                    <h3 className="text-xl text-cream mb-2 font-semibold">{service.title}</h3>
                    <p className="text-cream/80 font-normal">{service.description}</p>
                  </div>
                ))}
              </motion.div>
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-20 bg-gold/10">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl mb-12 text-cream text-center font-inknut font-bold">
                Deine Vorteile
              </h2>
              <motion.div
                variants={fadeIn}
                initial="hidden"
                animate="visible"
                className="grid md:grid-cols-2 gap-6"
              >
                {benefits.map((benefit, index) => (
                  <div
                    key={index}
                    className="flex items-center bg-dark/60 backdrop-blur-sm p-6 rounded-lg border border-gold/20"
                  >
                    <span className="text-gold text-xl mr-4">✓</span>
                    <span className="text-cream font-medium">{benefit}</span>
                  </div>
                ))}
              </motion.div>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl mb-8 text-cream text-center font-inknut font-bold">
                Zusammen ist viel möglich
              </h2>
              <motion.div
                variants={fadeIn}
                initial="hidden"
                animate="visible"
                className="grid grid-cols-2 md:grid-cols-4 gap-8"
              >
                {stats.map((stat, index) => (
                  <div key={index} className="text-center">
                    <div className="text-3xl md:text-4xl font-bold text-gold mb-2 font-inknut">
                      <AnimatedNumber value={stat.value} duration={2000} suffix={stat.suffix || ''} />
                    </div>
                    <div className="text-cream/80 text-sm font-medium">{stat.label}</div>
                  </div>
                ))}
              </motion.div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gold/10">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl mb-6 text-cream font-inknut font-bold">
                Bereit durchzustarten?
              </h2>
              <p className="text-lg mb-8 text-cream/80 italic font-normal">
                Wir unterstützen dich auf deinem Weg zum Erfolg.
              </p>
              <Link
                to="/careers"
                className="inline-block bg-gold hover:bg-gold/90 text-dark px-8 py-3 rounded-full transition-colors font-semibold"
              >
                Jetzt informieren
              </Link>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Home;
