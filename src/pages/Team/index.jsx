import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Link } from 'react-router-dom';
import TeamMember from '../../components/TeamMember';
import Hero from '../../components/Hero';
import { heroImages } from '../../assets';
import { Helmet } from 'react-helmet';

const Team = () => {
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  const teamMembers = [
    {
      name: 'Sophia Lehmann',
      position: 'Leitung Marketing',
      description: 'Kreativ, strategisch und immer mit einem Auge für Details. Sophia sorgt dafür, dass dein Content die Aufmerksamkeit bekommt, die er verdient.',
    },
    {
      name: 'Sebastian Wagner',
      position: 'Leitung Lager & Logistik',
      description: 'Koordiniert und organisiert den reibungslosen Ablauf hinter den Kulissen, damit du dich auf deine Arbeit konzentrieren kannst.',
    },
    {
      name: 'Christian Mayer',
      position: 'Fachanwalt für Medienrecht',
      description: 'Deine rechtliche Absicherung ist bei ihm in besten Händen. Christian kümmert sich um alle rechtlichen Fragen und Herausforderungen.',
    },
    {
      name: 'Natalie Weber',
      position: 'Assistentin der Geschäftsführung',
      description: 'Organisiert, effizient und immer einen Schritt voraus. Natalie plant und koordiniert, damit alles reibungslos läuft.',
    },
    {
      name: 'Nadine Weber',
      position: 'Assistentin der Geschäftsführung',
      description: 'Mit Präzision und Weitblick sorgt Nadine dafür, dass alle Abläufe perfekt ineinandergreifen.',
    },
    {
      name: 'Mia Richter',
      position: 'Leitung Fuhrpark',
      description: 'Stets darauf bedacht, dass du mobil bleibst. Mia kümmert sich um die Organisation und Bereitstellung unserer Fahrzeuge.',
    },
    {
      name: 'Lena Bauer',
      position: 'Leitung Einkauf',
      description: 'Sorgt dafür, dass nur die beste Ausstattung und die hochwertigsten Produkte bei uns eingesetzt werden.',
    },
    {
      name: 'Jonas Schmidt',
      position: 'Leitung IT',
      description: 'Dein technischer Support bei allen Fragen rund um Plattformen, Daten und Sicherheit.',
    },
    {
      name: 'Isabella Keller',
      position: 'Leitung Finanzbuchhaltung',
      description: 'Sorgt für klare Zahlen und eine reibungslose Abrechnung.',
    },
  ];

  const [teamRef, teamInView] = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <>
      <Helmet>
        <title>Unser Team | Engel & Teufel</title>
        <meta name="description" content="Lernen Sie das professionelle Team von Engel & Teufel kennen. Experten für OnlyFans und Webcam mit langjähriger Erfahrung stehen Ihnen zur Seite." />
        <meta name="keywords" content="Engel & Teufel Team, OnlyFans Experten, Webcam Spezialisten, Content Creation Team, Marketing Experten, Beratungsteam" />
        <meta property="og:title" content="Unser Team | Engel & Teufel" />
        <meta property="og:description" content="Professionelle Experten für OnlyFans, Webcam und Adult Content Creation - Das Team von Engel & Teufel." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.engelteufel.com/team" />
        <link rel="canonical" href="https://www.engelteufel.com/team" />
      </Helmet>
      <div className="min-h-screen">
        {/* Hero Section */}
        <Hero
          title="Unser Team – Gemeinsam für deinen Erfolg"
          subtitle="Das Herzstück von Engel & Teufel"
          imageSrc={heroImages.team}
          imageAlt="Engel & Teufel Team"
        />

        {/* Intro Section */}
        <section className="py-20">
          <div className="container max-w-4xl mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-center space-y-8"
            >
              <p className="text-lg text-cream/80">
                Unser Team besteht aus engagierten Experten, die mit Leidenschaft und Erfahrung 
                daran arbeiten, deinen Erfolg zu sichern. Wir glauben daran, dass jede Zusammenarbeit 
                auf Vertrauen, Transparenz und Professionalität basiert – und genau das leben wir jeden Tag.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Security Notice Section */}
        <section className="py-12 bg-gold/10">
          <div className="container max-w-4xl mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="bg-dark/60 backdrop-blur-sm p-8 rounded-2xl border border-gold/20"
            >
              <div className="flex items-start space-x-4">
                <div className="text-4xl">🔒</div>
                <div>
                  <h2 className="text-2xl font-serif text-gold mb-4">Sicherheit steht an erster Stelle</h2>
                  <p className="text-cream/80">
                    In unserer Branche hat Sicherheit höchste Priorität. Deshalb sind alle Teamfotos, 
                    die wir auf dieser Seite veröffentlichen, mit KI bearbeitet. Die Bilder sehen unseren 
                    Mitarbeitern zwar sehr ähnlich, schützen aber ihre Identität und Privatsphäre vor 
                    unbefugtem Zugriff. Wir stehen zu 100 % hinter unserem Team und tun alles, um es zu schützen.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Team Members Section */}
        <section className="section py-20" ref={teamRef}>
          <div className="container">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {teamMembers.map((member, index) => (
                <motion.div
                  key={member.name}
                  variants={fadeIn}
                  initial="hidden"
                  animate={teamInView ? "visible" : "hidden"}
                  transition={{ delay: index * 0.1 }}
                >
                  <TeamMember {...member} />
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="section bg-[#2c3030] py-20">
          <div className="container max-w-4xl text-center">
            <motion.div
              variants={fadeIn}
              initial="hidden"
              animate="visible"
              className="space-y-8"
            >
              <h2 className="text-3xl md:text-4xl font-serif heading-gradient">
                Werde Teil unseres Teams
              </h2>
              <p className="text-lg text-cream/80 max-w-2xl mx-auto">
                Du möchtest mit uns zusammenarbeiten? Wir freuen uns darauf, dich kennenzulernen!
              </p>
              <Link
                to="/apply"
                className="button-primary inline-block text-lg"
              >
                Jetzt Bewerben
              </Link>
            </motion.div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Team;
