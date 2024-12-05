import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Link } from 'react-router-dom';
import Hero from '../../components/Hero';
import { heroImages } from '../../assets';
import { Helmet } from 'react-helmet';

const About = () => {
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  const features = [
    {
      title: 'Ganzheitlicher Ansatz',
      description: 'Wir bieten dir alles aus einer Hand – von hochwertigen Fotoshootings und Videoproduktionen bis hin zu professionellem Marketing und Social Media Management.',
      icon: '🎯',
    },
    {
      title: 'Diskretion und Vertrauen',
      description: 'Wir schützen deine Privatsphäre und schaffen eine sichere Umgebung, in der du dich voll auf deinen Erfolg konzentrieren kannst.',
      icon: '🔒',
    },
    {
      title: 'Langfristige Unterstützung',
      description: 'Wir begleiten dich nicht nur am Anfang, sondern bauen mit dir gemeinsam eine nachhaltige Karriere auf.',
      icon: '🌱',
    },
  ];

  const [missionRef, missionInView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [philosophyRef, philosophyInView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [featuresRef, featuresInView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [teamRef, teamInView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [visionRef, visionInView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [valuesRef, valuesInView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [ctaRef, ctaInView] = useInView({ triggerOnce: true, threshold: 0.1 });

  const values = [
    {
      title: 'Innovation',
      description: 'Wir setzen auf die neuesten Trends und Technologien, um dir den bestmöglichen Start zu ermöglichen.',
    },
    {
      title: 'Kreativität',
      description: 'Wir fördern deine kreative Freiheit und unterstützen dich bei der Umsetzung deiner Ideen.',
    },
    {
      title: 'Nachhaltigkeit',
      description: 'Wir setzen auf langfristige Zusammenarbeit und unterstützen dich bei der Entwicklung deiner Karriere.',
    },
  ];

  return (
    <>
      <Helmet>
        <title>Über uns | Engel & Teufel</title>
        <meta name="description" content="Erfahren Sie mehr über Engel & Teufel - Ihre vertrauenswürdige Full-Service Agentur. Wir verbinden Professionalität mit persönlicher Betreuung für Ihren Erfolg." />
        <meta name="keywords" content="Über Engel & Teufel, Full-Service Agentur, Unternehmenswerte, OnlyFans Management, Webcam Agentur, Agenturgeschichte" />
        <meta property="og:title" content="Über uns | Engel & Teufel" />
        <meta property="og:description" content="Entdecken Sie die Geschichte und Vision von Engel & Teufel - Ihre vertrauenswürdige Full-Service Agentur für die Erotikbranche." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.engelteufel.com/about" />
        <link rel="canonical" href="https://www.engelteufel.com/about" />
      </Helmet>
      <div className="flex flex-col min-h-screen">
        <div className="flex-grow">
          <Hero
            title="Über Engel & Teufel"
            subtitle="Ihre vertrauenswürdige Full-Service Agentur"
            imageSrc={heroImages.about}
          />

          {/* Mission Section */}
          <section className="relative py-20 bg-gradient-to-b from-dark to-dark/95" ref={missionRef}>
            <div className="absolute inset-0 bg-gradient-to-br from-gold/5 via-transparent to-transparent" />
            <div className="container relative z-10">
              <motion.div
                className="text-center mb-16"
                variants={fadeIn}
                initial="hidden"
                animate={missionInView ? "visible" : "hidden"}
              >
                <h2 className="text-3xl md:text-4xl mb-6 text-cream">Unsere Mission</h2>
                <p className="text-lg text-cream/90 max-w-3xl mx-auto">
                  Engel & Teufel ist mehr als nur eine Agentur – wir sind dein vertrauensvoller Partner in der Erotik- und Aktbranche. Mit unserer langjährigen Erfahrung und einem Team aus Experten unterstützen wir dich dabei, deine Ziele zu erreichen und nachhaltig erfolgreich zu sein. Wir setzen auf Qualität, Diskretion und Innovation, um dir den bestmöglichen Start oder Ausbau deiner Karriere zu ermöglichen.
                </p>
              </motion.div>
            </div>
          </section>

          {/* Philosophy Section */}
          <section className="relative py-20 bg-gradient-to-b from-dark/95 to-dark" ref={philosophyRef}>
            <div className="absolute inset-0 bg-gradient-to-tr from-gold/5 via-transparent to-transparent" />
            <div className="container relative z-10">
              <motion.div
                className="text-center mb-16"
                variants={fadeIn}
                initial="hidden"
                animate={philosophyInView ? "visible" : "hidden"}
              >
                <h2 className="text-3xl md:text-4xl mb-6 text-cream">Unsere Philosophie</h2>
                <p className="text-lg text-cream/90 max-w-3xl mx-auto">
                  Bei Engel & Teufel glauben wir daran, dass jeder Mensch einzigartig ist – und genauso individuell ist unser Ansatz. Wir arbeiten eng mit dir zusammen, um deine Stärken zu erkennen und dein volles Potenzial zu entfalten. Dein Wert wird nicht durch Zahlen definiert, sondern durch deine Persönlichkeit und dein Engagement.
                </p>
              </motion.div>
            </div>
          </section>

          {/* Features Section */}
          <section className="section" ref={featuresRef}>
            <div className="container">
              <h2 className="text-3xl md:text-4xl font-serif text-center mb-12">
                Was uns besonders macht
              </h2>
              <div className="grid md:grid-cols-3 gap-8">
                {features.map((feature, index) => (
                  <motion.div
                    key={index}
                    className="bg-[#2c3030] p-8 rounded-lg"
                    variants={fadeIn}
                    initial="hidden"
                    animate={featuresInView ? "visible" : "hidden"}
                    transition={{ delay: index * 0.2 }}
                  >
                    <span className="text-4xl mb-4 block">{feature.icon}</span>
                    <h3 className="text-xl text-gold mb-4">{feature.title}</h3>
                    <p className="text-cream/80">{feature.description}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>

          {/* Team Section */}
          <section className="section bg-[#2c3030]" ref={teamRef}>
            <div className="container max-w-4xl">
              <motion.div
                variants={fadeIn}
                initial="hidden"
                animate={teamInView ? "visible" : "hidden"}
              >
                <h2 className="text-3xl md:text-4xl font-serif text-center mb-8">Unser Team</h2>
                <p className="text-lg leading-relaxed mb-8 text-center">
                  Hinter Engel & Teufel steht ein engagiertes Team aus erfahrenen Profis, die in allen Bereichen der Branche tätig sind. Von kreativen Köpfen für Content Creation bis hin zu Experten im Marketing – wir arbeiten Hand in Hand, um dir das beste Ergebnis zu liefern.
                </p>
              </motion.div>
            </div>
          </section>

          {/* Values Section */}
          <section className="relative py-20 bg-gradient-to-b from-dark to-dark/95" ref={valuesRef}>
            <div className="absolute inset-0 bg-gradient-to-bl from-gold/5 via-transparent to-transparent" />
            <div className="container relative z-10">
              <motion.div
                className="text-center mb-16"
                variants={fadeIn}
                initial="hidden"
                animate={valuesInView ? "visible" : "hidden"}
              >
                <h2 className="text-3xl md:text-4xl mb-6 text-cream">Unsere Werte</h2>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {values.map((value, index) => (
                    <motion.div
                      key={index}
                      className="bg-dark/50 backdrop-blur-sm p-6 rounded-lg border border-gold/20"
                      variants={fadeIn}
                      initial="hidden"
                      animate={valuesInView ? "visible" : "hidden"}
                      transition={{ delay: index * 0.2 }}
                    >
                      <h3 className="text-gold text-xl mb-2">{value.title}</h3>
                      <p className="text-cream/90">{value.description}</p>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </div>
          </section>

          {/* Vision Section */}
          <section className="relative py-20 bg-gradient-to-b from-dark/95 to-dark" ref={visionRef}>
            <div className="absolute inset-0 bg-gradient-to-tr from-gold/5 via-transparent to-transparent" />
            <div className="container relative z-10">
              <motion.div
                className="text-center mb-16"
                variants={fadeIn}
                initial="hidden"
                animate={visionInView ? "visible" : "hidden"}
              >
                <h2 className="text-3xl md:text-4xl mb-6 text-cream">Unsere Vision</h2>
                <p className="text-lg text-cream/90 max-w-3xl mx-auto">
                  Wir streben danach, die führende Plattform für Content Creator zu sein,
                  die nicht nur finanziellen Erfolg, sondern auch persönliches Wachstum
                  ermöglicht.
                </p>
              </motion.div>
            </div>
          </section>

          {/* CTA Section */}
          <section className="relative py-20 bg-gradient-to-b from-dark/95 to-dark" ref={ctaRef}>
            <div className="absolute inset-0 bg-gradient-to-tr from-gold/5 via-transparent to-transparent" />
            <div className="container relative z-10 text-center">
              <motion.div
                variants={fadeIn}
                initial="hidden"
                animate={ctaInView ? "visible" : "hidden"}
              >
                <h2 className="text-3xl md:text-4xl mb-6 text-cream">
                  Bereit, Teil unserer Geschichte zu werden?
                </h2>
                <p className="text-lg mb-8 text-cream/90 max-w-2xl mx-auto">
                  Entdecke die Möglichkeiten, die Engel & Teufel dir bietet.
                </p>
                <Link
                  to="/apply"
                  className="bg-gold hover:bg-gold-dark text-dark font-semibold px-8 py-3 rounded-full transition-all"
                >
                  👉 Jetzt mehr erfahren
                </Link>
              </motion.div>
            </div>
          </section>
        </div>
      </div>
    </>
  );
};

export default About;
