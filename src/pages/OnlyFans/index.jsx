import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import Hero from '../../components/Hero';
import SEO from '../../components/SEO';
import { heroImages } from '../../assets';
import { metadata } from '../../config/metadata';

const OnlyFans = () => {
  const { onlyfans } = metadata;
  
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <>
      <SEO 
        title={onlyfans.title}
        description={onlyfans.description}
        keywords={onlyfans.keywords}
      />
      <div className="flex flex-col min-h-screen">
        <Hero
          title="OnlyFans"
          subtitle="Starten Sie Ihre OnlyFans-Karriere mit uns"
          imageSrc={heroImages.onlyfans}
        />
        
        {/* Content Section */}
        <section className="section">
          <div className="container max-w-4xl">
            <motion.div
              className="prose prose-lg prose-invert mx-auto"
              initial="hidden"
              animate="visible"
              variants={fadeIn}
            >
              <h2 className="text-3xl font-bold mb-8">Werde OnlyFans-Model mit Engel & Teufel</h2>
              <p className="text-xl mb-6">
                Starte deine Karriere auf OnlyFans – mit einem starken Partner an deiner Seite!
                Engel & Teufel unterstützt dich dabei, auf der weltweit führenden Plattform erfolgreich zu sein.
                Ob du bereits Erfahrung hast oder ganz neu durchstarten möchtest – wir bieten dir alles,
                was du für eine erfolgreiche und nachhaltige Karriere brauchst.
              </p>

              <h3 className="text-2xl font-bold mt-12 mb-6">Deine Vorteile bei Engel & Teufel</h3>
              <div className="grid md:grid-cols-2 gap-8 mb-12">
                <motion.div
                  className="benefit-card p-6 rounded-lg bg-gray-800"
                  variants={fadeIn}
                  whileHover={{ scale: 1.02 }}
                >
                  <h4 className="text-xl font-semibold mb-3">1. Professionelle Betreuung</h4>
                  <p>Wir nehmen uns Zeit, dich und deine Ziele kennenzulernen. Gemeinsam entwickeln wir eine Strategie, die perfekt zu dir passt.</p>
                </motion.div>

                <motion.div
                  className="benefit-card p-6 rounded-lg bg-gray-800"
                  variants={fadeIn}
                  whileHover={{ scale: 1.02 }}
                >
                  <h4 className="text-xl font-semibold mb-3">2. Hochwertiger Content</h4>
                  <p>Mit unserem Team aus Fotografen, Videografen und Visagisten erstellen wir exklusiven Content, der deine Fans begeistert und deine Reichweite steigert.</p>
                </motion.div>

                <motion.div
                  className="benefit-card p-6 rounded-lg bg-gray-800"
                  variants={fadeIn}
                  whileHover={{ scale: 1.02 }}
                >
                  <h4 className="text-xl font-semibold mb-3">3. Social-Media-Management</h4>
                  <p>Wir kümmern uns um deine Profile und übernehmen das Community-Building, sodass du dich voll auf deinen Content konzentrieren kannst.</p>
                </motion.div>

                <motion.div
                  className="benefit-card p-6 rounded-lg bg-gray-800"
                  variants={fadeIn}
                  whileHover={{ scale: 1.02 }}
                >
                  <h4 className="text-xl font-semibold mb-3">4. Technische Ausstattung</h4>
                  <p>Von iPhones bis zu MacBooks – wir stellen dir das Equipment zur Verfügung, das du für erstklassigen Content benötigst.</p>
                </motion.div>

                <motion.div
                  className="benefit-card p-6 rounded-lg bg-gray-800 md:col-span-2"
                  variants={fadeIn}
                  whileHover={{ scale: 1.02 }}
                >
                  <h4 className="text-xl font-semibold mb-3">5. Langfristiger Erfolg</h4>
                  <p>Unser Ziel ist nicht der schnelle Erfolg, sondern eine stabile und nachhaltige Karriere. Wir arbeiten daran, dich finanziell unabhängig zu machen.</p>
                </motion.div>
              </div>

              <h3 className="text-2xl font-bold mt-12 mb-6">Wie läuft die Zusammenarbeit ab?</h3>
              <div className="space-y-6 mb-12">
                <div className="process-step">
                  <h4 className="text-xl font-semibold mb-2">Bewerbung</h4>
                  <p>Melde dich ganz einfach bei uns über unsere Webseite oder Instagram an.</p>
                </div>
                <div className="process-step">
                  <h4 className="text-xl font-semibold mb-2">Onboarding</h4>
                  <p>Wir starten mit einem ausführlichen Kennenlernen, um deine Stärken und Ziele zu definieren.</p>
                </div>
                <div className="process-step">
                  <h4 className="text-xl font-semibold mb-2">Content-Produktion</h4>
                  <p>Gemeinsam erstellen wir hochwertigen Content, der deine Fans begeistert und deine Einnahmen maximiert.</p>
                </div>
                <div className="process-step">
                  <h4 className="text-xl font-semibold mb-2">Betreuung</h4>
                  <p>Von regelmäßigen Check-ins bis hin zur strategischen Planung – wir begleiten dich auf jedem Schritt deines Weges.</p>
                </div>
              </div>

              <div className="text-center mt-12">
                <h3 className="text-2xl font-bold mb-4">Bist du bereit, durchzustarten?</h3>
                <p className="mb-8">
                  Engel & Teufel bietet dir die Chance, mit OnlyFans ein solides Einkommen zu erzielen und deine Ziele zu erreichen.
                  Mit unserer Erfahrung und deinem Engagement können wir Großes erreichen.
                </p>
                <Link
                  to="/contact"
                  className="inline-block px-8 py-4 bg-primary text-white font-bold rounded-lg hover:bg-primary-dark transition-colors"
                >
                  Jetzt Bewerben und Teil unseres Teams werden!
                </Link>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </>
  );
};

export default OnlyFans;
