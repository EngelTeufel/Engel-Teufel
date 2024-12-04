import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import Hero from "../../components/Hero";
import { heroImages } from "../../assets";

const Careers = () => {
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  const creativeRoles = [
    {
      title: "Fotografie & Videografie",
      description: "Du liebst es, einzigartige Momente einzufangen und professionelle Inhalte zu kreieren? Dann bist du bei uns genau richtig.",
      icon: "📸",
    },
    {
      title: "Grafikdesign & Kreative Konzepte",
      description: "Du verstehst es, visuelle Geschichten zu erzählen, und entwickelst Designs, die auffallen und begeistern.",
      icon: "🎨",
    },
    {
      title: "Social-Media-Strategie",
      description: "Du kennst die neuesten Trends und weißt, wie man Reichweite und Engagement auf den Plattformen steigert.",
      icon: "📱",
    },
    {
      title: "Content-Kreation",
      description: "Deine Ideen machen aus einfachem Material unvergessliche Inhalte, die unsere Models und Partner nach vorne bringen.",
      icon: "✨",
    },
  ];

  const benefits = [
    {
      title: "Freiraum für Kreativität",
      description: "Wir schätzen deine Ideen und geben dir die Freiheit, deine Projekte selbst zu gestalten.",
      icon: "🎯",
    },
    {
      title: "Modernes Equipment",
      description: "Dir stehen die besten Tools und Technologien zur Verfügung.",
      icon: "🎥",
    },
    {
      title: "Inspirierendes Umfeld",
      description: "Arbeite mit einem engagierten Team zusammen, das sich gegenseitig unterstützt.",
      icon: "🤝",
    },
    {
      title: "Vielfältige Projekte",
      description: "Kein Tag ist wie der andere – bei uns kannst du an einer Vielzahl von spannenden Aufgaben arbeiten.",
      icon: "🎪",
    },
  ];

  return (
    <div className="flex flex-col min-h-screen bg-dark">
      <Hero
        title="Kreative Köpfe gesucht"
        subtitle="Gestalte mit uns die Zukunft der Content-Kreation"
        imageSrc={heroImages.careers}
      />

      {/* Intro Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl mb-8 text-cream font-inknut font-bold">
              Das Herz unserer Arbeit
            </h2>
            <p className="text-lg mb-8 text-cream/80">
              Engel & Teufel wäre nichts ohne die kreativen Köpfe, die unsere Visionen zum Leben erwecken. 
              Egal, ob du Fotograf:in, Videograf:in, Designer:in oder Social-Media-Expert:in bist – bei uns 
              findest du den perfekten Ort, um deiner Kreativität freien Lauf zu lassen.
            </p>
          </div>
        </div>
      </section>

      {/* Creative Roles Section */}
      <section className="py-20 bg-gold/10">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl mb-12 text-cream text-center font-inknut font-bold">
              Was wir suchen
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              {creativeRoles.map((role, index) => (
                <motion.div
                  key={index}
                  variants={fadeIn}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  className="bg-dark/60 backdrop-blur-sm p-6 rounded-lg border border-gold/20"
                >
                  <div className="text-4xl mb-4">{role.icon}</div>
                  <h3 className="text-xl text-cream mb-2 font-semibold">{role.title}</h3>
                  <p className="text-cream/80">{role.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl mb-12 text-cream text-center font-inknut font-bold">
              Warum bei Engel & Teufel arbeiten?
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={index}
                  variants={fadeIn}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  className="bg-dark/60 backdrop-blur-sm p-6 rounded-lg border border-gold/20"
                >
                  <div className="text-4xl mb-4">{benefit.icon}</div>
                  <h3 className="text-xl text-cream mb-2 font-semibold">{benefit.title}</h3>
                  <p className="text-cream/80">{benefit.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gold/10">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl mb-8 text-cream font-inknut font-bold">
              Werde Teil von Engel & Teufel
            </h2>
            <p className="text-lg mb-8 text-cream/80">
              Lass uns gemeinsam kreativ Großes schaffen. Wir suchen Menschen mit Leidenschaft, 
              die unsere Vision teilen und mit ihren einzigartigen Fähigkeiten bereichern.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link
                to="/apply"
                className="inline-block bg-gold hover:bg-gold/90 text-dark px-8 py-3 rounded-full transition-colors font-semibold"
              >
                Jetzt bewerben
              </Link>
              <Link
                to="/contact"
                className="inline-block border border-gold text-gold hover:bg-gold/10 px-8 py-3 rounded-full transition-colors font-semibold"
              >
                Mehr erfahren
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Careers;
