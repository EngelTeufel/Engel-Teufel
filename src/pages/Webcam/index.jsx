import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Link } from 'react-router-dom';
import BenefitCard from '../../components/BenefitCard';
import ProcessStep from '../../components/ProcessStep';
import WhyUsCard from '../../components/WhyUsCard';
import Hero from '../../components/Hero';
import { heroImages } from '../../assets';
import { Helmet } from 'react-helmet';

const Webcam = () => {
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  const benefits = [
    {
      title: 'Flexibilität',
      description: 'Arbeite, wann und wo du willst. Du bestimmst deine Arbeitszeiten und kannst deinen Alltag frei gestalten.',
      icon: '⏰',
    },
    {
      title: 'Professionelles Equipment',
      description: 'Wir stellen dir modernstes Equipment wie hochwertige Webcams, Beleuchtung und Laptops zur Verfügung – alles, was du für deine Sessions brauchst.',
      icon: '🎥',
    },
    {
      title: 'Top ausgestattete Studios',
      description: 'Nutze unsere exklusiven Studio-Locations für professionelle und ansprechende Übertragungen, die deine Zuschauer begeistern.',
      icon: '🎬',
    },
    {
      title: 'Persönliches Mentoring',
      description: 'Unser erfahrenes Team steht dir mit Rat und Tat zur Seite. Von der Technik bis zur Kundenkommunikation – wir begleiten dich auf deinem Weg.',
      icon: '👥',
    },
    {
      title: 'Sicherer Start',
      description: 'Wir kümmern uns um rechtliche Absicherungen, Schutz vor ungebetenen Gästen und eine diskrete Betreuung, damit du dich vollkommen sicher fühlen kannst.',
      icon: '🔒',
    },
  ];

  const processSteps = [
    {
      title: 'Bewerbung',
      description: 'Sichere dir deinen Platz bei Engel & Teufel mit einer schnellen und unkomplizierten Bewerbung.',
    },
    {
      title: 'Onboarding',
      description: 'Wir bereiten dich optimal vor – vom technischen Setup bis hin zur ersten Session.',
    },
    {
      title: 'Live gehen',
      description: 'Mit unserem Support kannst du sofort starten und deine ersten Erfolge feiern.',
    },
    {
      title: 'Kontinuierliche Betreuung',
      description: 'Wir stehen dir langfristig zur Seite und sorgen dafür, dass du dich kontinuierlich weiterentwickelst.',
    },
  ];

  const whyUs = [
    {
      title: 'Langfristige Perspektive',
      description: 'Wir bauen nicht nur kurzfristige Erfolge auf, sondern eine nachhaltige Karriere.',
      icon: '🎯',
    },
    {
      title: 'Exklusiver Support',
      description: 'Du bist nie auf dich allein gestellt – unser Team ist immer für dich da.',
      icon: '💪',
    },
    {
      title: 'Erfolg, der dich definiert',
      description: 'Du bestimmst, wie viel du verdienst und wie schnell du wächst.',
      icon: '⭐',
    },
  ];

  const [introRef, introInView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [benefitsRef, benefitsInView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [processRef, processInView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [whyUsRef, whyUsInView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [ctaRef, ctaInView] = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <>
      <Helmet>
        <title>Webcam Model werden | Engel & Teufel</title>
        <meta name="description" content="Starten Sie Ihre Karriere als Webcam Model bei Engel & Teufel. Profitieren Sie von hohen Verdienstmöglichkeiten, flexiblen Arbeitszeiten und professioneller Unterstützung." />
        <meta name="keywords" content="Webcam Model werden, Webcam Jobs, Webcam Verdienst, Webcam Agentur, Webcam Model Karriere, Webcam Beratung" />
        <meta property="og:title" content="Webcam Model werden | Engel & Teufel" />
        <meta property="og:description" content="Starte deine Karriere als Webcam Model. Professionelle Betreuung und Top-Verdienstmöglichkeiten bei Engel & Teufel." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.engelteufel.com/webcam" />
        <link rel="canonical" href="https://www.engelteufel.com/webcam" />
      </Helmet>
      <div className="flex flex-col min-h-screen">
        {/* Hero Section */}
        <Hero
          title="Webcam Management"
          subtitle="Ihr Weg zum erfolgreichen Webcam Model"
          imageSrc={heroImages.webcam}
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
                Engel & Teufel ist dein Partner für den Einstieg in die Webcam-Branche. Egal, ob du neu anfängst oder bereits Erfahrung hast – wir unterstützen dich dabei, deine Karriere aufzubauen und langfristig erfolgreich zu sein.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="section bg-[#2c3030]" ref={benefitsRef}>
          <div className="container">
            <h2 className="text-3xl md:text-4xl font-serif text-center mb-12">
              Deine Vorteile bei Engel & Teufel
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {benefits.map((benefit, index) => (
                <BenefitCard key={index} {...benefit} index={index} />
              ))}
            </div>
          </div>
        </section>

        {/* Process Section */}
        <section className="section" ref={processRef}>
          <div className="container max-w-4xl">
            <h2 className="text-3xl md:text-4xl font-serif text-center mb-12">
              Wie funktioniert es?
            </h2>
            <div className="space-y-12">
              {processSteps.map((step, index) => (
                <motion.div
                  key={index}
                  variants={fadeIn}
                  initial="hidden"
                  animate={processInView ? "visible" : "hidden"}
                  transition={{ delay: index * 0.2 }}
                >
                  <ProcessStep {...step} number={index + 1} />
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Why Us Section */}
        <section className="section bg-[#2c3030]" ref={whyUsRef}>
          <div className="container max-w-4xl">
            <h2 className="text-3xl md:text-4xl font-serif text-center mb-12">
              Warum Engel & Teufel?
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              {whyUs.map((item, index) => (
                <WhyUsCard key={index} {...item} index={index} />
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="section" ref={ctaRef}>
          <div className="container max-w-4xl">
            <motion.div
              variants={fadeIn}
              initial="hidden"
              animate={ctaInView ? "visible" : "hidden"}
              className="text-center"
            >
              <h2 className="text-3xl font-serif mb-6">
                Bist du bereit, als Webcam-Model durchzustarten?
              </h2>
              <p className="text-lg mb-8">
                Mit Engel & Teufel wirst du nicht nur erfolgreich, sondern auch sicher und professionell betreut. Dein Erfolg ist unser Ziel!
              </p>
              
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-gold/10 p-8 rounded-lg"
              >
                <Link
                  to="/apply?position=webcam"
                  className="btn-primary inline-flex items-center"
                >
                  👉 Jetzt Bewerben und Teil unseres Teams werden!
                </Link>
              </motion.div>
            </motion.div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Webcam;
