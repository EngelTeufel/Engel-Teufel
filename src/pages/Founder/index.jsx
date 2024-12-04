import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Link } from 'react-router-dom';
import Hero from '../../components/Hero';
import { heroImages } from '../../assets';

const Founder = () => {
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  const [visionRef, visionInView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [approachRef, approachInView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [missionRef, missionInView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [quoteRef, quoteInView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [ctaRef, ctaInView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [founderImageRef, founderImageInView] = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <div className="flex flex-col min-h-screen">
      <Hero
        title="Der Gründer"
        subtitle="Victor Engelmann – Die Vision hinter Engel & Teufel"
        imageSrc={heroImages.founder}
      />
      {/* Vision Section */}
      <section className="section" ref={visionRef}>
        <div className="container max-w-4xl">
          <motion.div
            variants={fadeIn}
            initial="hidden"
            animate={visionInView ? "visible" : "hidden"}
            className="prose prose-invert mx-auto"
          >
            <p className="text-lg leading-relaxed mb-8">
              Victor Engelmann, der Gründer von Engel & Teufel, ist nicht nur ein Unternehmer, sondern ein Visionär in der Erotik- und Aktbranche. Mit über fünf Jahren Erfahrung hat er es geschafft, eine Agentur aufzubauen, die sich durch Transparenz, Professionalität und langfristigen Erfolg auszeichnet.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Founder Image Section */}
      <section className="section bg-dark/50" ref={founderImageRef}>
        <div className="container max-w-4xl">
          <motion.div
            variants={fadeIn}
            initial="hidden"
            animate={founderImageInView ? "visible" : "hidden"}
            className="flex justify-center"
          >
            <div className="relative w-full max-w-2xl aspect-[3/4] overflow-hidden rounded-lg border-2 border-gold/20">
              <img
                src="/images/team/Victor.E.png"
                alt="Victor Engelmann - Gründer von Engel & Teufel"
                className="object-cover object-center w-full h-full"
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Approach Section */}
      <section className="section bg-[#2c3030]" ref={approachRef}>
        <div className="container max-w-4xl">
          <motion.div
            variants={fadeIn}
            initial="hidden"
            animate={approachInView ? "visible" : "hidden"}
          >
            <h2 className="text-3xl md:text-4xl font-serif text-center mb-8">
              Sein Ansatz
            </h2>
            <div className="bg-dark/50 p-8 rounded-lg border border-gold/20">
              <p className="text-lg leading-relaxed">
                Victor glaubt daran, dass jedes Model einzigartig ist und ein individuelles Potenzial hat. Sein Ziel ist es, nicht nur kurzfristige Erfolge zu erzielen, sondern gemeinsam mit den Models nachhaltige Karrieren aufzubauen. Dabei steht er für faire Bedingungen und setzt auf Qualität statt Quantität – ein Konzept, das Engel & Teufel von vielen anderen Agenturen unterscheidet.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="section" ref={missionRef}>
        <div className="container max-w-4xl">
          <motion.div
            variants={fadeIn}
            initial="hidden"
            animate={missionInView ? "visible" : "hidden"}
          >
            <h2 className="text-3xl md:text-4xl font-serif text-center mb-8">
              Ein Mann mit einer Mission
            </h2>
            <p className="text-lg leading-relaxed text-center mb-8">
              Victor hat Engel & Teufel gegründet, um Standards in einer Branche zu setzen, die oft falsch verstanden wird. Sein Fokus liegt auf der langfristigen Unterstützung von Models, der Entwicklung innovativer Marketingstrategien und der Schaffung einer sicheren Umgebung, in der jeder sein volles Potenzial entfalten kann.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Quote Section */}
      <section className="section bg-[#2c3030]" ref={quoteRef}>
        <div className="container max-w-4xl">
          <motion.div
            variants={fadeIn}
            initial="hidden"
            animate={quoteInView ? "visible" : "hidden"}
            className="text-center"
          >
            <h2 className="text-3xl md:text-4xl font-serif mb-8">
              Warum Engel & Teufel?
            </h2>
            <blockquote className="relative p-8 mb-8">
              <div className="text-6xl text-gold absolute top-0 left-0">"</div>
              <p className="text-xl italic text-cream/90 mt-6 mb-4 relative z-10">
                Mein Ziel ist es, eine Agentur zu führen, die mehr bietet als bloße Vermittlung. Ich möchte Menschen helfen, ihren Wert zu erkennen und sie dabei unterstützen, diesen selbstbewusst nach außen zu tragen. Es geht nicht nur um Erfolg – es geht darum, gemeinsam Träume zu verwirklichen.
              </p>
              <div className="text-6xl text-gold absolute bottom-0 right-0">"</div>
            </blockquote>
          </motion.div>
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
              Lass uns gemeinsam wachsen
            </h2>
            <p className="text-lg mb-8">
              Victor Engelmann und sein Team stehen bereit, um dich auf deinem Weg zum Erfolg zu begleiten. Nutze die Chance, Teil von Engel & Teufel zu werden und deine Karriere auf ein neues Level zu bringen.
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
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Founder;
