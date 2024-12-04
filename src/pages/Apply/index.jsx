import React from 'react';
import { motion } from 'framer-motion';
import Hero from '../../components/Hero';
import { heroImages } from '../../assets';
import ApplicationForm from '../../components/ApplicationForm';

const Apply = () => {
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <div className="flex flex-col min-h-screen bg-dark">
      <Hero
        title="Bewirb dich"
        subtitle="Werde Teil unseres Teams"
        imageSrc={heroImages.apply}
      />

      {/* Application Form Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl mb-12 text-cream text-center font-inknut">
              Bewerbungsformular
            </h2>

            <ApplicationForm />

            {/* FAQ Section */}
            <div className="mt-20">
              <h3 className="text-2xl text-cream mb-8 font-inknut">Häufig gestellte Fragen</h3>
              
              <div className="space-y-6">
                <div>
                  <h4 className="text-lg text-cream mb-2 font-semibold">Wie läuft der Bewerbungsprozess ab?</h4>
                  <p className="text-cream/80">
                    Nach Eingang Ihrer Bewerbung prüfen wir diese sorgfältig und melden uns innerhalb von 48 Stunden bei Ihnen.
                  </p>
                </div>
                
                <div>
                  <h4 className="text-lg text-cream mb-2 font-semibold">Welche Unterlagen werden benötigt?</h4>
                  <p className="text-cream/80">
                    Bitte reichen Sie einen Lebenslauf im PDF-Format ein. Weitere Unterlagen können Sie im Nachrichtenfenster erwähnen.
                  </p>
                </div>
                
                <div>
                  <h4 className="text-lg text-cream mb-2 font-semibold">Wie lange dauert der Prozess?</h4>
                  <p className="text-cream/80">
                    Der gesamte Bewerbungsprozess dauert in der Regel nicht länger als eine Woche.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Privacy Notice */}
      <section className="relative py-10">
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <p className="text-cream/60 text-sm">
              Durch das Absenden des Formulars erklärst du dich mit unserer{' '}
              <a href="/privacy" className="text-gold hover:text-gold/80 underline">
                Datenschutzerklärung
              </a>{' '}
              einverstanden.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Apply;
