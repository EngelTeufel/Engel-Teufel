import React from 'react';
import { SEO } from '../../components/SEO';
import { metadata } from '../../config/metadata';

const PrivacyPolicy = () => {
  return (
    <>
      <SEO
        title="Datenschutzerklärung – Engel & Teufel"
        description="Informationen zum Datenschutz bei Engel & Teufel. Erfahren Sie, wie wir Ihre Daten schützen und verarbeiten."
        keywords={["Datenschutz", "Privacy Policy", "DSGVO", "Engel & Teufel", "Datenschutzerklärung"]}
      />
      <div className="container mx-auto px-4 py-12 prose prose-lg prose-invert max-w-4xl">
        <h1 className="text-4xl font-serif text-gold mb-8">Datenschutzerklärung</h1>
        
        <section className="mb-8">
          <h2 className="text-2xl font-serif text-gold mb-4">1. Einleitung</h2>
          <p className="text-cream/80 leading-relaxed">
            Wir von Engel & Teufel nehmen den Schutz Ihrer persönlichen Daten sehr ernst. Diese Datenschutzerklärung informiert Sie darüber, welche personenbezogenen Daten wir erheben, wie wir diese verarbeiten und welche Rechte Sie als betroffene Person haben.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-serif text-gold mb-4">2. Verantwortliche Stelle</h2>
          <p className="text-cream/80 leading-relaxed">
            Verantwortlich für die Datenverarbeitung im Sinne der Datenschutzgesetze:<br />
            Engel & Teufel GmbH<br />
            Kapstadtring 7, 22297 Hamburg<br />
            E-Mail: datenschutz@engelteufel.com
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-serif text-gold mb-4">3. Erhebung und Verarbeitung personenbezogener Daten</h2>
          <p className="text-cream/80 leading-relaxed">
            Wir erheben und verarbeiten personenbezogene Daten ausschließlich im Rahmen der geltenden Datenschutzvorschriften. Personenbezogene Daten sind alle Informationen, die sich auf eine identifizierte oder identifizierbare natürliche Person beziehen.
          </p>
          
          <h3 className="text-xl font-serif text-gold mt-6 mb-3">a. Daten, die wir erheben:</h3>
          <ul className="list-disc pl-6 text-cream/80">
            <li>Bei Besuch unserer Webseite: IP-Adresse, Browsertyp, Betriebssystem, Referrer-URL, Zugriffszeitpunkt.</li>
            <li>Bei Nutzung des Kontaktformulars: Name, E-Mail-Adresse, Telefonnummer, Nachricht.</li>
            <li>Bei Bewerbungen: Name, Kontaktdaten, Fotos, Social-Media-Profile, Zahlungsinformationen.</li>
            <li>Bei Anmeldung zu Newslettern: E-Mail-Adresse.</li>
          </ul>

          <h3 className="text-xl font-serif text-gold mt-6 mb-3">b. Zwecke der Datenverarbeitung:</h3>
          <ul className="list-disc pl-6 text-cream/80">
            <li>Bereitstellung und Optimierung unserer Webseite.</li>
            <li>Beantwortung von Anfragen und Kommunikation.</li>
            <li>Abwicklung von Verträgen und Bewerbungen.</li>
            <li>Versenden von Marketingmaterialien, sofern Sie zugestimmt haben.</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-serif text-gold mb-4">4. Rechtsgrundlage der Datenverarbeitung</h2>
          <p className="text-cream/80 leading-relaxed">
            Wir verarbeiten Ihre personenbezogenen Daten nur, wenn eine rechtliche Grundlage besteht:
          </p>
          <ul className="list-disc pl-6 text-cream/80">
            <li>Art. 6 Abs. 1 lit. a DSGVO: Einwilligung.</li>
            <li>Art. 6 Abs. 1 lit. b DSGVO: Erfüllung eines Vertrags.</li>
            <li>Art. 6 Abs. 1 lit. f DSGVO: Wahrung unserer berechtigten Interessen.</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-serif text-gold mb-4">5. Weitergabe von Daten an Dritte</h2>
          <p className="text-cream/80 leading-relaxed">
            Wir geben Ihre Daten nur weiter, wenn:
          </p>
          <ul className="list-disc pl-6 text-cream/80">
            <li>Sie ausdrücklich zugestimmt haben.</li>
            <li>Es gesetzlich vorgeschrieben ist.</li>
            <li>Es zur Erfüllung eines Vertragsverhältnisses notwendig ist.</li>
          </ul>
          <p className="text-cream/80 leading-relaxed mt-3">
            Beispiele: Zahlungsdienstleister, IT-Dienstleister, rechtliche Berater.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-serif text-gold mb-4">6. Speicherung und Löschung von Daten</h2>
          <p className="text-cream/80 leading-relaxed">
            Wir speichern Ihre personenbezogenen Daten nur so lange, wie es für die oben genannten Zwecke erforderlich ist oder gesetzliche Aufbewahrungspflichten bestehen. Danach werden die Daten gelöscht oder anonymisiert.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-serif text-gold mb-4">7. Ihre Rechte</h2>
          <p className="text-cream/80 leading-relaxed">
            Sie haben folgende Rechte bezüglich Ihrer personenbezogenen Daten:
          </p>
          <ul className="list-disc pl-6 text-cream/80">
            <li>Auskunft: Sie können eine Bestätigung verlangen, ob und welche personenbezogenen Daten wir verarbeiten.</li>
            <li>Berichtigung: Sie können die Berichtigung unrichtiger oder unvollständiger Daten verlangen.</li>
            <li>Löschung: Sie können die Löschung Ihrer Daten verlangen, sofern keine rechtliche Verpflichtung zur Aufbewahrung besteht.</li>
            <li>Einschränkung: Sie können die Einschränkung der Verarbeitung verlangen.</li>
            <li>Datenübertragbarkeit: Sie können verlangen, dass wir Ihre Daten in einem gängigen Format bereitstellen.</li>
            <li>Widerruf: Sie können eine erteilte Einwilligung jederzeit widerrufen.</li>
            <li>Widerspruch: Sie können der Verarbeitung Ihrer Daten widersprechen, sofern diese auf Grundlage eines berechtigten Interesses erfolgt.</li>
          </ul>
          <p className="text-cream/80 leading-relaxed mt-3">
            Bitte kontaktieren Sie uns hierfür unter: datenschutz@engelteufel.com
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-serif text-gold mb-4">8. Cookies und Tracking-Technologien</h2>
          <p className="text-cream/80 leading-relaxed">
            Unsere Webseite verwendet Cookies, um die Benutzerfreundlichkeit zu verbessern und bestimmte Funktionen bereitzustellen.
          </p>
          <h3 className="text-xl font-serif text-gold mt-6 mb-3">Arten von Cookies:</h3>
          <ul className="list-disc pl-6 text-cream/80">
            <li>Notwendige Cookies: Für den Betrieb der Webseite erforderlich.</li>
            <li>Analyse-Cookies: Zur Verbesserung unserer Inhalte (z. B. Google Analytics).</li>
            <li>Marketing-Cookies: Für personalisierte Werbung.</li>
          </ul>
          <p className="text-cream/80 leading-relaxed mt-3">
            Cookie-Einstellungen: Sie können die Verwendung von Cookies über Ihre Browser-Einstellungen steuern.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-serif text-gold mb-4">9. Datensicherheit</h2>
          <p className="text-cream/80 leading-relaxed">
            Wir schützen Ihre Daten durch technische und organisatorische Maßnahmen vor unbefugtem Zugriff, Verlust oder Missbrauch. Hierzu zählen SSL-Verschlüsselung, Firewalls und Zugangsbeschränkungen.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-serif text-gold mb-4">10. Änderungen der Datenschutzerklärung</h2>
          <p className="text-cream/80 leading-relaxed">
            Wir behalten uns vor, diese Datenschutzerklärung anzupassen, um Änderungen in rechtlichen, technischen oder geschäftlichen Rahmenbedingungen zu berücksichtigen. Die aktuelle Version finden Sie stets auf unserer Webseite.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-serif text-gold mb-4">11. Kontakt</h2>
          <p className="text-cream/80 leading-relaxed">
            Für Fragen oder Anliegen zum Datenschutz kontaktieren Sie uns bitte:<br />
            E-Mail: datenschutz@engelteufel.com
          </p>
        </section>
      </div>
    </>
  );
};

export default PrivacyPolicy;
