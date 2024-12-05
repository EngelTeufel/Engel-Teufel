import React from 'react';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet';
import { useInView } from 'react-intersection-observer';
import { Link } from 'react-router-dom';
import BenefitCard from '../../components/BenefitCard';
import ProcessStep from '../../components/ProcessStep';
import WhyUsCard from '../../components/WhyUsCard';
import Hero from '../../components/Hero';
import { heroImages } from '../../assets';

const Onlyfans = () => {
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  const benefits = [
    {
      title: 'Professionelle Betreuung',
      description: 'Wir nehmen uns Zeit, dich und deine Ziele kennenzulernen. Gemeinsam entwickeln wir eine Strategie, die perfekt zu dir passt.',
      icon: '👥',
    },
    {
      title: 'Hochwertiger Content',
      description: 'Mit unserem Team aus Fotografen, Videografen und Visagisten erstellen wir exklusiven Content, der deine Fans begeistert und deine Reichweite steigert.',
      icon: '📸',
    },
    {
      title: 'Social-Media-Management',
      description: 'Wir kümmern uns um deine Profile und übernehmen das Community-Building, sodass du dich voll auf deinen Content konzentrieren kannst.',
      icon: '📱',
    },
    {
      title: 'Technische Ausstattung',
      description: 'Von iPhones bis zu MacBooks – wir stellen dir das Equipment zur Verfügung, das du für erstklassigen Content benötigst.',
      icon: '💻',
    },
    {
      title: 'Langfristiger Erfolg',
      description: 'Unser Ziel ist nicht der schnelle Erfolg, sondern eine stabile und nachhaltige Karriere. Wir arbeiten daran, dich finanziell unabhängig zu machen.',
      icon: '📈',
    },
  ];

  const processSteps = [
    {
      title: 'Bewerbung',
      description: 'Melde dich ganz einfach bei uns über unsere Webseite oder Instagram an.',
    },
    {
      title: 'Onboarding',
      description: 'Wir starten mit einem ausführlichen Kennenlernen, um deine Stärken und Ziele zu definieren.',
    },
    {
      title: 'Content-Produktion',
      description: 'Gemeinsam erstellen wir hochwertigen Content, der deine Fans begeistert und deine Einnahmen maximiert.',
    },
    {
      title: 'Betreuung',
      description: 'Von regelmäßigen Check-ins bis hin zur strategischen Planung – wir begleiten dich auf jedem Schritt deines Weges.',
    },
  ];

  const whyUs = [
    {
      title: 'Professionelles Team',
      description: 'Ein erfahrenes Team aus Experten steht dir zur Seite und unterstützt dich in allen Bereichen.',
      icon: '🌟',
    },
    {
      title: 'Maximale Freiheit',
      description: 'Du entscheidest selbst über deine Arbeitszeiten und deinen Content.',
      icon: '🕊️',
    },
    {
      title: 'Finanzielle Unabhängigkeit',
      description: 'Wir helfen dir dabei, ein stabiles und lukratives Einkommen aufzubauen.',
      icon: '💰',
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
        <title>OnlyFans Management & Beratung | Engel & Teufel</title>
        <meta name="description" content="Professionelles OnlyFans Management bei Engel & Teufel. Steigern Sie Ihre Reichweite und Einnahmen mit unserer Expertise. Individuelle Beratung und Support für Ihren OnlyFans-Erfolg." />
        <meta name="keywords" content="OnlyFans Management, OnlyFans Beratung, Content Strategie, Social Media Marketing, OnlyFans Optimierung, OnlyFans Erfolg" />
        <meta property="og:title" content="OnlyFans Management & Beratung | Engel & Teufel" />
        <meta property="og:description" content="Professionelle Unterstützung für deinen OnlyFans-Erfolg. Maximiere dein Potenzial mit unserem erfahrenen Management-Team." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.engelteufel.com/onlyfans" />
        <link rel="canonical" href="https://www.engelteufel.com/onlyfans" />
      </Helmet>
      <div className="flex flex-col min-h-screen">
        {/* Hero Section */}
        <Hero
          title="OnlyFans Management"
          subtitle="Maximiere dein Potenzial auf OnlyFans"
          imageSrc={heroImages.onlyfans.desktop}
          imageMobile={heroImages.onlyfans.mobile}
          imageAlt="Engel & Teufel OnlyFans Management - Professionelle Betreuung für Content Creator"
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
                Engel & Teufel unterstützt dich dabei, auf der weltweit führenden Plattform erfolgreich zu sein. 
                Ob du bereits Erfahrung hast oder ganz neu durchstarten möchtest – wir bieten dir alles, was du für eine erfolgreiche und nachhaltige Karriere brauchst.
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
              Wie läuft die Zusammenarbeit ab?
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
                Bist du bereit, durchzustarten?
              </h2>
              <p className="text-lg mb-8">
                Engel & Teufel bietet dir die Chance, mit OnlyFans ein solides Einkommen zu erzielen und deine Ziele zu erreichen. 
                Mit unserer Erfahrung und deinem Engagement können wir Großes erreichen.
              </p>
              
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-gold/10 p-8 rounded-lg"
              >
                <Link
                  to="/apply?position=onlyfans"
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

export default Onlyfans;
