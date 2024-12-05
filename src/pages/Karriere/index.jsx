import React from 'react';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import Hero from '../../components/Hero';
import { heroImages } from '../../assets';

const Karriere = () => {
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  const features = [
    {
      icon: '',
      title: 'Professionelle Unterstützung',
      description: 'Von Fotoshootings bis zum Marketing - unser erfahrenes Team steht dir zur Seite und sorgt für deinen Erfolg.',
    },
    {
      icon: '',
      title: 'Modernste Ausstattung',
      description: 'Wir stellen dir hochwertige Technik zur Verfügung - von iPhones über MacBooks bis hin zu professionellem Equipment.',
    },
    {
      icon: '',
      title: 'Rechtliche Sicherheit',
      description: 'Mit unserem Rechtsteam bist du auf der sicheren Seite. Wir kümmern uns um Verträge und rechtliche Absicherung.',
    },
  ];

  const positions = [
    {
      id: 'content-creator',
      title: 'Content Creatorin (m/w/d)',
      location: 'Europaweit',
      type: 'Flexibel',
      description: 'Erstelle einzigartigen Content für OnlyFans und Social Media. Baue deine eigene Community auf und generiere passives Einkommen.',
      requirements: [
        'Kreativität und Eigeninitiative',
        'Interesse an Social Media',
        'Zuverlässigkeit',
      ],
    },
    {
      id: 'model',
      title: 'OnlyFans Model (m/w/d)',
      location: 'Europaweit',
      type: 'Flexibel',
      description: 'Werde Teil unseres erfolgreichen Model-Teams. Profitiere von professionellen Shootings und unserer Marketing-Expertise.',
      requirements: [
        'Offenheit für Foto- und Videoproduktionen',
        'Zuverlässigkeit',
        'Interesse an Social Media',
      ],
    },
    {
      id: 'webcam',
      title: 'Webcam Model (m/w/d)',
      location: 'Europaweit',
      type: 'Flexibel',
      description: 'Starte als Webcam Model und baue dir eine treue Fanbase auf. Wir unterstützen dich mit Equipment und Know-how.',
      requirements: [
        'Kommunikationsfreude',
        'Zuverlässigkeit',
        'Gute Internetverbindung',
      ],
    },
    {
      id: 'chatter',
      title: 'Chat Model (m/w/d)',
      location: 'Europaweit',
      type: 'Flexibel',
      description: 'Verdiene von überall als Chat Model. Perfekt geeignet als Nebenjob oder Haupteinnahmequelle.',
      requirements: [
        'Gute Schreibfähigkeiten',
        'Kreativität',
        'Zuverlässigkeit',
      ],
    },
  ];

  const benefits = [
    'Überdurchschnittliche Verdienstmöglichkeiten',
    'Flexible Arbeitszeiten & Orte',
    'Persönliches Coaching & Mentoring',
    'Regelmäßige Content-Produktionen',
    'Marketing & Social Media Support',
    'Internationale Karrieremöglichkeiten',
  ];

  return (
    <>
      <Helmet>
        <title>Karriere & Jobs | Engel & Teufel</title>
        <meta name="description" content="Starten Sie Ihre Karriere bei Engel & Teufel. Entdecken Sie attraktive Jobmöglichkeiten im OnlyFans und Webcam Bereich mit Top-Verdienstmöglichkeiten und flexiblen Arbeitszeiten." />
        <meta name="keywords" content="OnlyFans Jobs, Webcam Jobs, Model Karriere, Verdienstmöglichkeiten, Flexible Arbeitszeiten, Karrierechancen" />
        <meta property="og:title" content="Karriere & Jobs | Engel & Teufel" />
        <meta property="og:description" content="Ihre Karriere bei Engel & Teufel - Entdecken Sie vielfältige Möglichkeiten im Bereich Adult Content Creation." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.engelteufel.com/karriere" />
        <link rel="canonical" href="https://www.engelteufel.com/karriere" />
      </Helmet>
      <div className="flex flex-col min-h-screen bg-dark">
        <Hero
          title="Karriere"
          subtitle="Deine Zukunft beginnt hier"
          imageSrc={heroImages.careers}
        />

        {/* Features Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl mb-12 text-cream text-center font-inknut">
                Warum Engel & Teufel?
              </h2>
              <div className="grid md:grid-cols-3 gap-8">
                {features.map((feature, index) => (
                  <div
                    key={index}
                    className="bg-dark/60 backdrop-blur-sm p-6 rounded-lg border border-gold/20"
                  >
                    <div className="text-3xl mb-4 text-gold">{feature.icon}</div>
                    <h3 className="text-xl text-cream mb-2 font-semibold">{feature.title}</h3>
                    <p className="text-cream/80">{feature.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Positions Section */}
        <section className="py-20 bg-gold/10">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl mb-12 text-cream text-center font-inknut">
                Offene Positionen
              </h2>
              <div className="space-y-6">
                {positions.map((position, index) => (
                  <div
                    key={index}
                    className="bg-dark/60 backdrop-blur-sm p-6 rounded-lg border border-gold/20"
                  >
                    <div className="flex justify-between items-start mb-4">
                      <div>
                        <h3 className="text-xl text-cream mb-1 font-semibold">{position.title}</h3>
                        <p className="text-cream/60 text-sm">{position.location} • {position.type}</p>
                      </div>
                      <Link
                        to={`/apply?position=${position.id}`}
                        className="bg-gold hover:bg-gold/90 text-dark px-6 py-2 rounded-full transition-colors font-semibold"
                      >
                        Bewerben
                      </Link>
                    </div>
                    <p className="text-cream/80 mb-4">{position.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {position.requirements.map((req, idx) => (
                        <span
                          key={idx}
                          className="bg-dark/40 text-cream/60 px-3 py-1 rounded-full text-sm"
                        >
                          {req}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl mb-12 text-cream text-center font-inknut">
                Deine Vorteile
              </h2>
              <div className="grid md:grid-cols-2 gap-6">
                {benefits.map((benefit, index) => (
                  <div
                    key={index}
                    className="flex items-center bg-dark/60 backdrop-blur-sm p-6 rounded-lg border border-gold/20"
                  >
                    <span className="text-gold text-xl mr-4">✓</span>
                    <span className="text-cream font-semibold">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gold/10">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl mb-6 text-cream font-inknut">
                Bereit für den nächsten Schritt?
              </h2>
              <p className="text-lg mb-8 text-cream/80 italic">
                Wir freuen uns darauf, dich kennenzulernen.
              </p>
              <Link
                to="/apply"
                className="inline-block bg-gold hover:bg-gold/90 text-dark px-8 py-3 rounded-full transition-colors font-semibold"
              >
                Jetzt bewerben
              </Link>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Karriere;
