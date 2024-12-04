import React from 'react';
import { motion } from 'framer-motion';
import Hero from '../../components/Hero';
import { heroImages } from '../../assets';

const Section = ({ number, title, children }) => (
  <div className="mb-8">
    <h2 className="text-xl font-serif text-gold mb-4">
      {number}. {title}
    </h2>
    <div className="space-y-4 text-cream/80">{children}</div>
  </div>
);

const Subsection = ({ number, children }) => (
  <div className="mb-4">
    <p className="text-cream/80">
      <span className="text-gold">{number}</span> {children}
    </p>
  </div>
);

const Terms = () => {
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Hero
        title="AGB"
        subtitle="Allgemeine Geschäftsbedingungen"
        imageSrc={heroImages.contact}
      />
      {/* Hero Section */}
      <motion.section
        className="section bg-gradient-to-b from-dark to-[#2c3030]"
        initial="hidden"
        animate="visible"
        variants={fadeIn}
      >
        <div className="container">
          <h1 className="text-4xl md:text-6xl font-serif text-center mb-6">
            Allgemeine Geschäftsbedingungen
          </h1>
        </div>
      </motion.section>

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
            <div className="mb-8">
              <p className="text-lg">
                Engel & Teufel GmbH<br />
                Kapstadtring 7<br />
                22297 Hamburg
              </p>
            </div>

            <Section number="1" title="Geltungsbereich">
              <Subsection number="1.1">
                Diese Allgemeinen Geschäftsbedingungen (AGB) gelten für alle Geschäftsbeziehungen zwischen der Engel & Teufel GmbH (nachfolgend „Engel & Teufel") und ihren Kunden in der jeweils zum Zeitpunkt des Vertragsschlusses gültigen Fassung.
              </Subsection>
              <Subsection number="1.2">
                Abweichende, entgegenstehende oder ergänzende Allgemeine Geschäftsbedingungen des Kunden werden nicht Vertragsbestandteil, es sei denn, Engel & Teufel stimmt ihrer Geltung ausdrücklich schriftlich zu.
              </Subsection>
            </Section>

            <Section number="2" title="Vertragsschluss">
              <Subsection number="2.1">
                Die Präsentation von Dienstleistungen auf der Website oder in anderen Medien stellt kein rechtlich bindendes Angebot dar, sondern eine Aufforderung zur Abgabe eines Angebots durch den Kunden.
              </Subsection>
              <Subsection number="2.2">
                Der Kunde gibt ein verbindliches Angebot auf Abschluss eines Dienstleistungsvertrags ab, indem er eine Bestellung oder Anfrage per E-Mail, Telefon oder über ein Online-Formular absendet.
              </Subsection>
              <Subsection number="2.3">
                Ein Vertrag kommt erst durch die schriftliche Bestätigung von Engel & Teufel zustande.
              </Subsection>
            </Section>

            <Section number="3" title="Leistungen">
              <Subsection number="3.1">
                Engel & Teufel bietet Dienstleistungen im Bereich der Content-Creation, Medienproduktion, Marketing und Management für Models und Content-Creator an.
              </Subsection>
              <Subsection number="3.2">
                Der genaue Leistungsumfang wird im jeweiligen Vertrag oder in der Auftragsbestätigung festgelegt.
              </Subsection>
              <Subsection number="3.3">
                Engel & Teufel behält sich das Recht vor, die angebotenen Dienstleistungen zu ändern, anzupassen oder weiterzuentwickeln, sofern dies zur Erfüllung des Vertrags notwendig ist.
              </Subsection>
            </Section>

            <Section number="4" title="Vergütung und Zahlungsbedingungen">
              <Subsection number="4.1">
                Die Höhe der Vergütung für die jeweiligen Dienstleistungen wird im Vertrag oder in der Auftragsbestätigung festgelegt.
              </Subsection>
              <Subsection number="4.2">
                Alle Preise verstehen sich, sofern nicht anders angegeben, zuzüglich der gesetzlichen Mehrwertsteuer.
              </Subsection>
              <Subsection number="4.3">
                Zahlungen sind innerhalb von 14 Tagen nach Rechnungsstellung ohne Abzug fällig, sofern nichts anderes vereinbart wurde.
              </Subsection>
              <Subsection number="4.4">
                Im Falle des Zahlungsverzugs ist Engel & Teufel berechtigt, Verzugszinsen in Höhe von 5 % über dem Basiszinssatz zu verlangen.
              </Subsection>
            </Section>

            <Section number="5" title="Pflichten des Kunden">
              <Subsection number="5.1">
                Der Kunde verpflichtet sich, alle zur Erbringung der vertraglich vereinbarten Leistungen notwendigen Informationen rechtzeitig und vollständig zur Verfügung zu stellen.
              </Subsection>
              <Subsection number="5.2">
                Der Kunde ist verpflichtet, im Rahmen der Zusammenarbeit alle gesetzlichen Vorschriften, insbesondere die des Urheberrechts und des Datenschutzes, einzuhalten.
              </Subsection>
              <Subsection number="5.3">
                Der Kunde versichert, dass er alle notwendigen Rechte an den von ihm bereitgestellten Inhalten besitzt und diese nicht gegen Rechte Dritter verstoßen.
              </Subsection>
            </Section>

            <Section number="6" title="Nutzungsrechte">
              <Subsection number="6.1">
                Engel & Teufel räumt dem Kunden die für die Erbringung der Dienstleistung erforderlichen Nutzungsrechte an den erstellten Inhalten ein.
              </Subsection>
              <Subsection number="6.2">
                Die Übertragung der Nutzungsrechte erfolgt erst nach vollständiger Zahlung der vereinbarten Vergütung.
              </Subsection>
              <Subsection number="6.3">
                Der Kunde darf die Inhalte ausschließlich im Rahmen der vertraglich festgelegten Zwecke verwenden. Eine Weiterveräußerung oder sonstige Weitergabe der Inhalte an Dritte ist ohne schriftliche Zustimmung von Engel & Teufel nicht gestattet.
              </Subsection>
            </Section>

            <Section number="7" title="Haftung">
              <Subsection number="7.1">
                Engel & Teufel haftet für Schäden, die durch vorsätzliches oder grob fahrlässiges Verhalten entstanden sind, unbeschränkt.
              </Subsection>
              <Subsection number="7.2">
                Bei leichter Fahrlässigkeit haftet Engel & Teufel nur bei Verletzung wesentlicher Vertragspflichten (Kardinalpflichten). Die Haftung ist in diesem Fall auf den vertragstypischen, vorhersehbaren Schaden begrenzt.
              </Subsection>
              <Subsection number="7.3">
                Engel & Teufel haftet nicht für mittelbare Schäden, entgangenen Gewinn oder sonstige Folgeschäden.
              </Subsection>
              <Subsection number="7.4">
                Die Haftung für Schäden aus der Verletzung des Lebens, des Körpers oder der Gesundheit bleibt unberührt.
              </Subsection>
            </Section>

            <Section number="8" title="Vertraulichkeit und Datenschutz">
              <Subsection number="8.1">
                Beide Parteien verpflichten sich, über alle im Rahmen der Geschäftsbeziehung bekannt gewordenen vertraulichen Informationen Stillschweigen zu bewahren.
              </Subsection>
              <Subsection number="8.2">
                Engel & Teufel verpflichtet sich, die datenschutzrechtlichen Bestimmungen einzuhalten und die personenbezogenen Daten des Kunden nur im Rahmen der vertraglichen Zusammenarbeit zu verwenden.
              </Subsection>
            </Section>

            <Section number="9" title="Vertragsdauer und Kündigung">
              <Subsection number="9.1">
                Der Vertrag wird auf unbestimmte Zeit geschlossen, sofern nicht ausdrücklich eine feste Laufzeit vereinbart wurde.
              </Subsection>
              <Subsection number="9.2">
                Beide Parteien haben das Recht, den Vertrag mit einer Frist von 30 Tagen zum Monatsende zu kündigen.
              </Subsection>
              <Subsection number="9.3">
                Das Recht zur fristlosen Kündigung aus wichtigem Grund bleibt unberührt.
              </Subsection>
            </Section>

            <Section number="10" title="Schlussbestimmungen">
              <Subsection number="10.1">
                Änderungen und Ergänzungen des Vertrags bedürfen der Schriftform. Dies gilt auch für die Änderung des Schriftformerfordernisses.
              </Subsection>
              <Subsection number="10.2">
                Sollte eine Bestimmung dieser AGB unwirksam oder undurchführbar sein oder werden, bleibt die Wirksamkeit der übrigen Bestimmungen hiervon unberührt.
              </Subsection>
              <Subsection number="10.3">
                Es gilt das Recht der Bundesrepublik Deutschland unter Ausschluss des UN-Kaufrechts (CISG).
              </Subsection>
              <Subsection number="10.4">
                Gerichtsstand für alle Streitigkeiten aus diesem Vertrag ist Hamburg.
              </Subsection>
            </Section>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Terms;
