import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Link } from 'react-router-dom';
import StrategyStep from '../../components/StrategyStep';
import WhyUsCard from '../../components/WhyUsCard';
import Hero from '../../components/Hero';
import { heroImages } from '../../assets';

const TaxFreedom = () => {
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  const advantages = [
    {
      title: 'Expertennetzwerk',
      description: 'Wir arbeiten mit erfahrenen Steuerberatern und Finanzexperten zusammen, die dich umfassend beraten.',
      icon: '👥',
    },
    {
      title: 'Individuelle Lösungen',
      description: 'Jede Strategie wird genau auf deine Bedürfnisse und Ziele zugeschnitten.',
      icon: '🎯',
    },
    {
      title: 'Langfristige Planung',
      description: 'Wir unterstützen dich dabei, nicht nur kurzfristige Vorteile zu nutzen, sondern langfristig finanzielle Freiheit zu genießen.',
      icon: '📈',
    },
  ];

  const steps = [
    {
      title: 'Analyse deiner aktuellen Situation',
      description: 'Wir prüfen deine aktuelle finanzielle und steuerliche Lage, um die besten Optionen zu ermitteln.',
      icon: '🔍',
    },
    {
      title: 'Strategische Planung',
      description: 'Gemeinsam mit unseren Partnern entwickeln wir einen Plan, der dir maximale Vorteile bietet – ob Wohnsitzverlagerung, Unternehmensgründung oder andere legale Möglichkeiten.',
      icon: '📋',
    },
    {
      title: 'Langfristige Betreuung',
      description: 'Auch nach der Umsetzung bleiben wir und unsere Partner an deiner Seite und unterstützen dich bei allen weiteren Schritten.',
      icon: '🤝',
    },
  ];

  const [introRef, introInView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [advantagesRef, advantagesInView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [processRef, processInView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [whyUsRef, whyUsInView] = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <div className="flex flex-col min-h-screen">
      <Hero
        title="Steuerfreies Leben"
        subtitle="Leben Sie Ihren Traum vom steuerfreien Einkommen"
        imageSrc={heroImages.services}
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
              Stell dir vor, ein Leben ohne steuerliche Belastungen – das ist kein Traum, sondern mit Engel & Teufel eine echte Möglichkeit. Wir bieten dir die Chance, mit einem professionellen Netzwerk und maßgeschneiderten Strategien finanzielle Freiheit zu genießen. Gemeinsam ebnen wir dir den Weg in eine steueroptimierte Zukunft.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Advantages Section */}
      <section className="section bg-[#2c3030]" ref={advantagesRef}>
        <div className="container max-w-5xl">
          <h2 className="text-3xl md:text-4xl font-serif text-center mb-12">
            Deine Vorteile auf einen Blick
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {advantages.map((advantage, index) => (
              <WhyUsCard key={index} {...advantage} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="section" ref={processRef}>
        <div className="container max-w-4xl">
          <h2 className="text-3xl md:text-4xl font-serif text-center mb-12">
            Wie funktioniert das?
          </h2>
          <div className="space-y-16">
            {steps.map((step, index) => (
              <StrategyStep key={index} {...step} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* Why Us Section */}
      <section className="section bg-[#2c3030]" ref={whyUsRef}>
        <div className="container max-w-4xl">
          <motion.div
            variants={fadeIn}
            initial="hidden"
            animate={whyUsInView ? "visible" : "hidden"}
            className="bg-dark/50 p-8 rounded-lg border border-gold/20"
          >
            <h2 className="text-3xl font-serif mb-6">Warum Engel & Teufel?</h2>
            <p className="text-lg leading-relaxed mb-8">
              Als erfahrene Full-Service-Agentur bieten wir dir nicht nur Unterstützung in der Erotik- und Aktbranche, sondern auch bei der Verwirklichung deiner finanziellen Ziele. Mit unserem Netzwerk aus Fachleuten stehen wir dir zur Seite, um dein Leben nachhaltig zu verändern.
            </p>

            <div className="text-center mt-12">
              <h3 className="text-2xl font-serif mb-4">
                Dein Weg in die Freiheit beginnt hier.
              </h3>
              <p className="mb-8">
                Du möchtest mehr über die Möglichkeiten eines steuerfreien Lebens erfahren? Lass uns ins Gespräch kommen und gemeinsam eine Lösung finden.
              </p>
              
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link
                  to="/apply"
                  className="btn-primary inline-flex items-center"
                >
                  👉 Jetzt mehr erfahren
                </Link>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default TaxFreedom;
