import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Link } from 'react-router-dom';
import Hero from '../../components/Hero';
import { heroImages } from '../../assets';
import ServiceCard from '../../components/ServiceCard';
import { Helmet } from 'react-helmet';

const Services = () => {
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  const services = [
    {
      title: 'Professionelle Fotoshootings',
      description: 'Erhalte hochwertig produzierte Bilder, die deine Persönlichkeit und Einzigartigkeit perfekt einfangen. Ob sinnliche Aktfotos oder kreative Content-Aufnahmen – unser Team sorgt für die perfekte Inszenierung.',
      icon: '📸',
    },
    {
      title: 'Hochwertige Videoproduktionen',
      description: 'Beeindrucke deine Community mit erstklassigen Videos, die Geschichten erzählen. Von kurzen Clips bis hin zu längeren Formaten – wir liefern Qualität, die überzeugt.',
      icon: '🎥',
    },
    {
      title: 'Social Media Management',
      description: 'Lass uns deine Reichweite auf Plattformen wie OnlyFans, Instagram und mehr maximieren. Wir übernehmen die Strategie, Community-Building und das Wachstum deines Profils.',
      icon: '📱',
    },
    {
      title: 'Technische Ausstattung',
      description: 'Wir statten dich mit modernster Technik aus – von iPhones über MacBooks bis hin zu hochwertigem Studio-Equipment. Damit hast du alles, was du für professionellen Content brauchst.',
      icon: '💻',
    },
    {
      title: 'Marketingstrategien',
      description: 'Wir entwickeln maßgeschneiderte Strategien, um dich sichtbar zu machen und deine Einnahmen nachhaltig zu steigern. Dein Erfolg ist unser Ziel.',
      icon: '📈',
    },
    {
      title: 'Individuelle Betreuung',
      description: 'Jedes Model ist einzigartig, und das berücksichtigen wir. Von regelmäßigen Check-ins bis hin zu persönlichem Mentoring – wir stehen an deiner Seite.',
      icon: '🤝',
    },
    {
      title: 'Content-Pläne und Ideenentwicklung',
      description: 'Fehlt dir manchmal die Inspiration? Wir erstellen kreative und effektive Content-Pläne, die deine Zielgruppe begeistern und für Umsatz sorgen.',
      icon: '💡',
    },
    {
      title: 'Rechtliche Absicherung',
      description: 'Mit unserem erfahrenen Rechtsteam bist du bestens geschützt. Wir kümmern uns um Urheberrechte, Vertragsmanagement und alles, was rechtlich relevant ist.',
      icon: '⚖️',
    },
  ];

  const benefits = [
    {
      title: 'Flexibilität & Freiheit',
      description: 'Arbeite wann und wo du willst. Du bestimmst dein Tempo und deinen Arbeitsrhythmus.',
      icon: '🌟',
    },
    {
      title: 'Überdurchschnittliche Verdienste',
      description: 'Profitiere von lukrativen Verdienstmöglichkeiten und verschiedenen Einnahmequellen.',
      icon: '💰',
    },
    {
      title: 'Persönliches Wachstum',
      description: 'Entwickle dich weiter und baue deine Skills in den Bereichen Marketing, Social Media und Content-Erstellung aus.',
      icon: '🚀',
    },
    {
      title: 'Sicherheit & Support',
      description: 'Mit unserem erfahrenen Team im Rücken kannst du dich voll auf deine Karriere konzentrieren.',
      icon: '🛡️',
    },
    {
      title: 'Internationale Reichweite',
      description: 'Erreiche Fans auf der ganzen Welt und baue dir eine globale Community auf.',
      icon: '🌍',
    },
    {
      title: 'Langfristiger Erfolg',
      description: 'Wir helfen dir dabei, eine nachhaltige Karriere aufzubauen und deine Ziele zu erreichen.',
      icon: '📈',
    },
  ];

  const [introRef, introInView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [servicesRef, servicesInView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [ctaRef, ctaInView] = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <>
      <Helmet>
        <title>Services & Leistungen | Engel & Teufel</title>
        <meta name="description" content="Entdecken Sie unsere professionellen Services für OnlyFans und Webcam. Von Marketing bis Beratung - Engel & Teufel bietet Ihnen alle Leistungen für nachhaltigen Erfolg." />
        <meta name="keywords" content="OnlyFans Services, Webcam Management, Content Creation, Marketing Services, Model Beratung, Karriereberatung" />
        <meta property="og:title" content="Services & Leistungen | Engel & Teufel" />
        <meta property="og:description" content="Professionelle Services für OnlyFans, Webcam und Adult Content Creation. Ihr Partner für nachhaltigen Erfolg." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.engelteufel.com/services" />
        <link rel="canonical" href="https://www.engelteufel.com/services" />
      </Helmet>
      <div className="flex flex-col min-h-screen">
        <div className="flex-grow">
          <Hero
            title="Unsere Services"
            subtitle="Professionelle Betreuung & Management"
            imageSrc={heroImages.services}
          />

          {/* Overview Section */}
          <section className="relative py-20 bg-gradient-to-b from-dark to-dark/95">
            <div className="absolute inset-0 bg-gradient-to-br from-gold/5 via-transparent to-transparent" />
            <div className="container relative z-10">
              <div className="text-center mb-16">
                <h2 className="text-3xl md:text-4xl mb-6 text-cream">Was wir bieten</h2>
                <p className="text-lg text-cream/90 max-w-3xl mx-auto">
                  Von der Beratung bis zur Umsetzung - wir unterstützen dich in allen Bereichen
                  deiner Content-Creator-Karriere.
                </p>
              </div>
            </div>
          </section>

          {/* Services Grid */}
          <section className="relative py-20 bg-gradient-to-b from-dark/95 to-dark">
            <div className="absolute inset-0 bg-gradient-to-tr from-gold/5 via-transparent to-transparent" />
            <div className="container relative z-10">
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {services.map((service, index) => (
                  <motion.div
                    key={index}
                    className="bg-dark/50 backdrop-blur-sm p-8 rounded-lg border border-gold/20"
                    variants={fadeIn}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.2 }}
                  >
                    <div className="text-gold text-3xl mb-4">{service.icon}</div>
                    <h3 className="text-xl text-cream mb-4">{service.title}</h3>
                    <p className="text-cream/80 mb-6">{service.description}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>

          {/* Benefits Section */}
          <section className="relative py-20 bg-gradient-to-b from-dark to-dark/95">
            <div className="absolute inset-0 bg-gradient-to-bl from-gold/5 via-transparent to-transparent" />
            <div className="container relative z-10">
              <div className="text-center mb-16">
                <h2 className="text-3xl md:text-4xl mb-6 text-cream">Deine Vorteile</h2>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {benefits.map((benefit, index) => (
                    <motion.div
                      key={index}
                      className="bg-dark/50 backdrop-blur-sm p-6 rounded-lg border border-gold/20"
                      variants={fadeIn}
                      initial="hidden"
                      whileInView="visible"
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.2 }}
                    >
                      <div className="text-gold text-2xl mb-3">{benefit.icon}</div>
                      <h3 className="text-lg text-cream mb-2">{benefit.title}</h3>
                      <p className="text-cream/80">{benefit.description}</p>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </section>

          {/* CTA Section */}
          <section className="relative py-20 bg-gradient-to-b from-dark/95 to-dark">
            <div className="absolute inset-0 bg-gradient-to-tr from-gold/5 via-transparent to-transparent" />
            <div className="container relative z-10 text-center">
              <div className="max-w-3xl mx-auto">
                <h2 className="text-3xl md:text-4xl mb-6 text-cream">
                  Bereit für den nächsten Schritt?
                </h2>
                <p className="text-lg mb-8 text-cream/90">
                  Lass uns gemeinsam deine Karriere auf das nächste Level bringen.
                </p>
                <Link
                  to="/contact"
                  className="bg-gold hover:bg-gold-dark text-dark font-semibold px-8 py-3 rounded-full transition-all"
                >
                  👉 Jetzt loslegen
                </Link>
              </div>
            </div>
          </section>
        </div>
      </div>
    </>
  );
};

export default Services;
