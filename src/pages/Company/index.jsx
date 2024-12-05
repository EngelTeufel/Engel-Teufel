import React from 'react';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet';
import { useInView } from 'react-intersection-observer';
import { Link } from 'react-router-dom';
import BenefitCard from '../../components/BenefitCard';
import WhyUsCard from '../../components/WhyUsCard';
import Hero from '../../components/Hero';
import { heroImages } from '../../assets';

const Company = () => {
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  const values = [
    {
      title: 'Transparenz',
      description: 'Ehrliche Kommunikation ohne versteckte Agenden.',
      icon: '🤝',
    },
    {
      title: 'Professionalität',
      description: 'Jedes Projekt wird mit größter Sorgfalt und Hingabe umgesetzt.',
      icon: '💼',
    },
    {
      title: 'Verantwortung',
      description: 'Wir stehen hinter unseren Partnern und sind stets für sie da.',
      icon: '🛡️',
    },
    {
      title: 'Innovation',
      description: 'Wir nutzen modernste Technologien und Trends, um uns von der Masse abzuheben.',
      icon: '💡',
    },
  ];

  const features = [
    {
      title: 'Erfahrung und Expertise',
      description: 'Jahrzehntelange Erfahrung in Marketing, Content-Produktion und rechtlicher Betreuung.',
      icon: '🎯',
    },
    {
      title: 'Innovative Lösungen',
      description: 'Von der Erstellung hochwertiger Inhalte bis hin zur strategischen Markenbildung bieten wir alles aus einer Hand.',
      icon: '🚀',
    },
    {
      title: 'Vertrauen und Diskretion',
      description: 'Wir stehen für einen respektvollen Umgang und schützen die Privatsphäre unserer Partner.',
      icon: '🔒',
    },
    {
      title: 'Nachhaltiger Erfolg',
      description: 'Keine schnellen Versprechungen – wir setzen auf langfristige Strategien, die echte Ergebnisse liefern.',
      icon: '📈',
    },
  ];

  const services = [
    {
      title: 'Content-Produktion',
      description: 'Professionelle Fotoshootings und Videoproduktionen in unseren Studios.',
      icon: '📸',
    },
    {
      title: 'Marketing & Social Media',
      description: 'Durchdachte Strategien für deinen Erfolg auf allen Plattformen.',
      icon: '📱',
    },
    {
      title: 'Rechtliche Betreuung',
      description: 'Umfassende rechtliche Beratung und Unterstützung für deine Sicherheit.',
      icon: '⚖️',
    },
    {
      title: 'Technische Ausstattung',
      description: 'Modernste Ausrüstung wie iPhones und MacBooks für optimale Ergebnisse.',
      icon: '💻',
    },
    {
      title: 'Persönliches Mentoring',
      description: 'Individuelle Betreuung und flexible Arbeitszeiten für deine Entwicklung.',
      icon: '🎓',
    },
    {
      title: 'Exklusive Locations',
      description: 'Zugang zu hochwertigen Locations und professionellen Content-Plänen.',
      icon: '🏰',
    },
  ];

  const [introRef, introInView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [missionRef, missionInView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [featuresRef, featuresInView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [valuesRef, valuesInView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [servicesRef, servicesInView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [ctaRef, ctaInView] = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <>
      <Helmet>
        <title>Engel & Teufel | Full-Service Agentur für die Erotikbranche</title>
        <meta name="description" content="Engel & Teufel ist Ihre professionelle Full-Service Agentur für die Erotik- und Erwachsenenbranche. Wir bieten umfassende Unterstützung für Models und Content Creator." />
        <meta name="keywords" content="Erotik Agentur, Full-Service Agentur, Model Management, Content Creator, Engel und Teufel, Adult Industry" />
        <meta property="og:title" content="Engel & Teufel | Full-Service Agentur" />
        <meta property="og:description" content="Professionelle Full-Service Agentur für die Erotik- und Erwachsenenbranche. Experten für Model Management und Content Creation." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.engelteufel.com/company" />
        <link rel="canonical" href="https://www.engelteufel.com/company" />
      </Helmet>
      <div className="flex flex-col min-h-screen">
        {/* Hero Section */}
        <Hero
          title="Unternehmen"
          subtitle="Unsere Vision & Mission"
          imageSrc={heroImages.company}
        />

        {/* Introduction Section */}
        <section className="section" ref={introRef}>
          <div className="container max-w-4xl">
            <motion.div
              variants={fadeIn}
              initial="hidden"
              animate={introInView ? "visible" : "hidden"}
              className="text-center"
            >
              <p className="text-lg leading-relaxed mb-12">
                Engel & Teufel steht für Professionalität, Vertrauen und Erfolg. Mit unserer langjährigen Erfahrung haben wir uns als zuverlässiger Partner für Models, Content-Creator und Unternehmen in der Erotikbranche etabliert.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Mission Section */}
        <section className="section bg-[#2c3030]" ref={missionRef}>
          <div className="container max-w-4xl">
            <motion.div
              variants={fadeIn}
              initial="hidden"
              animate={missionInView ? "visible" : "hidden"}
              className="text-center"
            >
              <h2 className="text-3xl md:text-4xl font-serif mb-8">Unsere Mission</h2>
              <p className="text-lg leading-relaxed mb-12">
                Wir möchten Talente fördern und Karrieren nachhaltig aufbauen. Unser Ziel ist es, dir die besten Voraussetzungen für deinen Erfolg zu bieten – individuell, transparent und immer auf Augenhöhe.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Features Section */}
        <section className="section" ref={featuresRef}>
          <div className="container">
            <h2 className="text-3xl md:text-4xl font-serif text-center mb-12">
              Was uns ausmacht
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              {features.map((feature, index) => (
                <BenefitCard key={index} {...feature} index={index} />
              ))}
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="section bg-[#2c3030]" ref={valuesRef}>
          <div className="container">
            <h2 className="text-3xl md:text-4xl font-serif text-center mb-12">
              Unsere Werte
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {values.map((value, index) => (
                <WhyUsCard key={index} {...value} index={index} />
              ))}
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className="section" ref={servicesRef}>
          <div className="container">
            <h2 className="text-3xl md:text-4xl font-serif text-center mb-12">
              Was wir bieten
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((service, index) => (
                <BenefitCard key={index} {...service} index={index} />
              ))}
            </div>
          </div>
        </section>

        {/* Vision & CTA Section */}
        <section className="section bg-[#2c3030]" ref={ctaRef}>
          <div className="container max-w-4xl">
            <motion.div
              variants={fadeIn}
              initial="hidden"
              animate={ctaInView ? "visible" : "hidden"}
              className="text-center"
            >
              <h2 className="text-3xl md:text-4xl font-serif mb-8">Unsere Vision</h2>
              <p className="text-lg mb-12">
                Engel & Teufel steht für die Zukunft der Erotikbranche. Wir möchten die Standards neu definieren und mit modernen, ethischen und transparenten Ansätzen langfristige Erfolge schaffen – für unsere Models, unsere Partner und unsere Branche.
              </p>
              
              <div className="bg-dark-gray p-8 rounded-lg">
                <h3 className="text-2xl font-serif mb-6">
                  Bist du bereit, Teil von Engel & Teufel zu werden?
                </h3>
                <Link to="/apply">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="btn-primary"
                  >
                    Jetzt Bewerben
                  </motion.button>
                </Link>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Company;
