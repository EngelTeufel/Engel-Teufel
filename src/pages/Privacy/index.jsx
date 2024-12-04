import React from 'react';
import { motion } from 'framer-motion';
import Hero from '../../components/Hero';
import { heroImages } from '../../assets';
import PrivacySection from '../../components/PrivacySection';

const Privacy = () => {
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <div className="flex flex-col min-h-screen bg-dark">
      <Hero
        title="Datenschutz"
        subtitle="Transparenz & Vertrauen"
        imageSrc={heroImages.privacy}
      />

      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto prose prose-invert">
            <h1 className="text-4xl mb-8 text-cream font-inknut">Datenschutzerklärung</h1>

            <h2 className="text-2xl mt-12 mb-4 text-cream font-inknut">1. Datenschutz auf einen Blick</h2>
            <h3 className="text-xl mt-8 mb-3 text-cream font-inknut">Allgemeine Hinweise</h3>
            <p className="text-cream/80">
              Die folgenden Hinweise geben einen einfachen Überblick darüber, was mit Ihren personenbezogenen Daten passiert, 
              wenn Sie diese Website besuchen. Personenbezogene Daten sind alle Daten, mit denen Sie persönlich identifiziert 
              werden können.
            </p>

            <h3 className="text-xl mt-8 mb-3 text-cream font-inknut">Datenerfassung auf dieser Website</h3>
            <h4 className="text-lg mt-6 mb-2 text-cream font-semibold">Wer ist verantwortlich für die Datenerfassung auf dieser Website?</h4>
            <p className="text-cream/80">
              Die Datenverarbeitung auf dieser Website erfolgt durch den Websitebetreiber. Dessen Kontaktdaten können Sie dem 
              Impressum dieser Website entnehmen.
            </p>

            <h4 className="text-lg mt-6 mb-2 text-cream font-semibold">Wie erfassen wir Ihre Daten?</h4>
            <p className="text-cream/80">
              Ihre Daten werden zum einen dadurch erhoben, dass Sie uns diese mitteilen. Hierbei kann es sich z.B. um Daten handeln, 
              die Sie in ein Kontaktformular eingeben.
            </p>
            <p className="text-cream/80">
              Andere Daten werden automatisch oder nach Ihrer Einwilligung beim Besuch der Website durch unsere IT-Systeme erfasst. 
              Das sind vor allem technische Daten (z.B. Internetbrowser, Betriebssystem oder Uhrzeit des Seitenaufrufs).
            </p>

            <h4 className="text-lg mt-6 mb-2 text-cream font-semibold">Wofür nutzen wir Ihre Daten?</h4>
            <p className="text-cream/80">
              Ein Teil der Daten wird erhoben, um eine fehlerfreie Bereitstellung der Website zu gewährleisten. Andere Daten können 
              zur Analyse Ihres Nutzerverhaltens verwendet werden.
            </p>

            <h4 className="text-lg mt-6 mb-2 text-cream font-semibold">Welche Rechte haben Sie bezüglich Ihrer Daten?</h4>
            <p className="text-cream/80">
              Sie haben jederzeit das Recht, unentgeltlich Auskunft über Herkunft, Empfänger und Zweck Ihrer gespeicherten 
              personenbezogenen Daten zu erhalten. Sie haben außerdem ein Recht, die Berichtigung oder Löschung dieser Daten 
              zu verlangen.
            </p>

            <h2 className="text-2xl mt-12 mb-4 text-cream font-inknut">2. Hosting</h2>
            <p className="text-cream/80">
              Wir hosten die Inhalte unserer Website bei folgendem Anbieter:
            </p>

            <h3 className="text-xl mt-8 mb-3 text-cream font-inknut">Externes Hosting</h3>
            <p className="text-cream/80">
              Diese Website wird extern gehostet. Die personenbezogenen Daten, die auf dieser Website erfasst werden, werden auf 
              den Servern des Hosters gespeichert. Hierbei kann es sich v. a. um IP-Adressen, Kontaktanfragen, Meta- und 
              Kommunikationsdaten, Vertragsdaten, Kontaktdaten, Namen, Websitezugriffe und sonstige Daten, die über eine 
              Website generiert werden, handeln.
            </p>

            <h2 className="text-2xl mt-12 mb-4 text-cream font-inknut">3. Allgemeine Hinweise und Pflichtinformationen</h2>
            <h3 className="text-xl mt-8 mb-3 text-cream font-inknut">Datenschutz</h3>
            <p className="text-cream/80">
              Die Betreiber dieser Seiten nehmen den Schutz Ihrer persönlichen Daten sehr ernst. Wir behandeln Ihre 
              personenbezogenen Daten vertraulich und entsprechend den gesetzlichen Datenschutzvorschriften sowie dieser 
              Datenschutzerklärung.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Privacy;
