import React from 'react';
import { motion } from 'framer-motion';
import Hero from '../../components/Hero';
import { heroImages } from '../../assets';

const LegalSection = ({ title, children }) => (
  <div className="mb-12">
    <h2 className="text-2xl font-serif text-gold mb-6">{title}</h2>
    <div className="space-y-4 text-cream/80">{children}</div>
  </div>
);

const Legal = () => {
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Hero
        title="Impressum"
        subtitle="Rechtliche Informationen"
        imageSrc={heroImages.contact}
      />
      {/* Content Section */}
      <section className="section">
        <div className="container max-w-4xl">
          <motion.div
            variants={fadeIn}
            initial="hidden"
            animate="visible"
            transition={{ delay: 0.2 }}
            className="prose prose-invert max-w-none"
          >
            <LegalSection title="Angaben gemäß § 5 TMG">
              <p>
                Engel&Teufel GmbH<br />
                Kapstadtring 7<br />
                22297 Hamburg<br />
                Deutschland
              </p>
            </LegalSection>

            <LegalSection title="Vertreten durch">
              <p>Geschäftsführer: Victor Engelmann</p>
            </LegalSection>

            <LegalSection title="Kontakt">
              <p>
                Telefon: 0174 7590498<br />
                E-Mail: v.engelmann@engelteufel.com
              </p>
            </LegalSection>

            <LegalSection title="Umsatzsteuer">
              <p>
                Umsatzsteuer-Identifikationsnummer gemäß § 27 a Umsatzsteuergesetz:<br />
                DE355286685
              </p>
            </LegalSection>

            <LegalSection title="Verantwortlich für den Inhalt">
              <p>
                Verantwortlich für den Inhalt nach § 55 Abs. 2 RStV:<br />
                Victor Engelmann<br />
                Kapstadtring 7<br />
                22297 Hamburg
              </p>
            </LegalSection>

            <LegalSection title="Datenschutzbeauftragter">
              <p>
                E-Mail: datenschutz@engelteufel.com<br />
                Telefon: 0174 7590498
              </p>
            </LegalSection>

            <LegalSection title="Transparenzpflichten nach Digital Services Act (DSA)">
              <p>
                <strong>Ansprechpartner für Anfragen zu rechtswidrigen Inhalten:</strong><br />
                E-Mail: datenschutz@engelteufel.com<br />
                Telefon: 0174 7590498
              </p>
              <p>
                Als Anbieter eines digitalen Dienstes sind wir verpflichtet, auf Anfragen im Zusammenhang mit rechtswidrigen Inhalten auf unserer Plattform zeitnah zu reagieren. Nutzer können uns über die oben genannten Kontaktmöglichkeiten erreichen, um solche Inhalte zu melden.
              </p>
              <p>
                <strong>Meldung von rechtswidrigen Inhalten:</strong><br />
                Nutzer und betroffene Dritte haben die Möglichkeit, uns rechtswidrige Inhalte, die auf unserer Plattform veröffentlicht wurden, zu melden. Jede Meldung wird überprüft, und wir werden entsprechende Maßnahmen ergreifen, um die gemeldeten Inhalte zu prüfen und gegebenenfalls zu entfernen.
              </p>
              <p>
                <strong>Informationen zur Verarbeitung von Daten:</strong><br />
                Im Rahmen der Bearbeitung von Anfragen zur Meldung rechtswidriger Inhalte verarbeiten wir die personenbezogenen Daten, die im Zusammenhang mit der Meldung und Kommunikation erforderlich sind. Weitere Informationen finden Sie in unserer Datenschutzerklärung.
              </p>
            </LegalSection>

            <LegalSection title="EU-Streitschlichtung">
              <p>
                Die Europäische Kommission stellt eine Plattform zur Online-Streitbeilegung (OS) bereit:{' '}
                <a 
                  href="https://ec.europa.eu/consumers/odr/main/index.cfm?event=main.home2.show&lng=DE" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-gold hover:text-gold/80 transition-colors"
                >
                  https://ec.europa.eu/consumers/odr
                </a>
              </p>
              <p>
                Wir sind nicht bereit oder verpflichtet, an Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle teilzunehmen.
              </p>
            </LegalSection>

            <LegalSection title="Haftung für Inhalte">
              <p>
                Als Diensteanbieter sind wir gemäß § 7 Abs.1 TMG für eigene Inhalte auf diesen Seiten nach den allgemeinen Gesetzen verantwortlich. Nach §§ 8 bis 10 TMG sind wir als Diensteanbieter jedoch nicht verpflichtet, übermittelte oder gespeicherte fremde Informationen zu überwachen oder nach Umständen zu forschen, die auf eine rechtswidrige Tätigkeit hinweisen.
              </p>
              <p>
                Verpflichtungen zur Entfernung oder Sperrung der Nutzung von Informationen nach den allgemeinen Gesetzen bleiben hiervon unberührt. Eine diesbezügliche Haftung ist jedoch erst ab dem Zeitpunkt der Kenntnis einer konkreten Rechtsverletzung möglich. Bei Bekanntwerden von entsprechenden Rechtsverletzungen werden wir diese Inhalte umgehend entfernen.
              </p>
            </LegalSection>

            <LegalSection title="Haftung für Links">
              <p>
                Unser Angebot enthält Links zu externen Websites Dritter, auf deren Inhalte wir keinen Einfluss haben. Deshalb können wir für diese fremden Inhalte auch keine Gewähr übernehmen. Für die Inhalte der verlinkten Seiten ist stets der jeweilige Anbieter oder Betreiber der Seiten verantwortlich.
              </p>
              <p>
                Die verlinkten Seiten wurden zum Zeitpunkt der Verlinkung auf mögliche Rechtsverstöße überprüft. Rechtswidrige Inhalte waren zum Zeitpunkt der Verlinkung nicht erkennbar. Eine permanente inhaltliche Kontrolle der verlinkten Seiten ist jedoch ohne konkrete Anhaltspunkte einer Rechtsverletzung nicht zumutbar. Bei Bekanntwerden von Rechtsverletzungen werden wir derartige Links umgehend entfernen.
              </p>
            </LegalSection>

            <LegalSection title="Urheberrecht">
              <p>
                Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten unterliegen dem deutschen Urheberrecht. Die Vervielfältigung, Bearbeitung, Verbreitung und jede Art der Verwertung außerhalb der Grenzen des Urheberrechtes bedürfen der schriftlichen Zustimmung des jeweiligen Autors bzw. Erstellers.
              </p>
              <p>
                Downloads und Kopien dieser Seite sind nur für den privaten, nicht kommerziellen Gebrauch gestattet. Soweit die Inhalte auf dieser Seite nicht vom Betreiber erstellt wurden, werden die Urheberrechte Dritter beachtet. Insbesondere werden Inhalte Dritter als solche gekennzeichnet.
              </p>
              <p>
                Sollten Sie trotzdem auf eine Urheberrechtsverletzung aufmerksam werden, bitten wir um einen entsprechenden Hinweis. Bei Bekanntwerden von Rechtsverletzungen werden wir derartige Inhalte umgehend entfernen.
              </p>
            </LegalSection>

            <LegalSection title="Bildernachweis">
              <p>
                Die Bilder, Fotos und Grafiken auf dieser Webseite sind urheberrechtlich geschützt.<br />
                Bildnachweise: Fotograf.Engelmann
              </p>
            </LegalSection>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Legal;
