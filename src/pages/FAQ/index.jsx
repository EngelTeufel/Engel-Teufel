import React, { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import FAQAccordion from '../../components/FAQAccordion';
import Hero from '../../components/Hero';
import { heroImages } from '../../assets';
import { Helmet } from 'react-helmet';

const FAQ = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  const sliderRef = useRef(null);

  const scrollCategories = (direction) => {
    if (sliderRef.current) {
      const scrollAmount = 200; // Scroll-Betrag in Pixeln
      const currentScroll = sliderRef.current.scrollLeft;
      
      sliderRef.current.scrollTo({
        left: currentScroll + (direction === 'right' ? scrollAmount : -scrollAmount),
        behavior: 'smooth'
      });
    }
  };

  const categories = [
    { id: 'all', name: 'Alle Fragen', icon: '📋' },
    { id: 'general', name: 'Allgemein', icon: 'ℹ️' },
    { id: 'onlyfans', name: 'OnlyFans', icon: '📱' },
    { id: 'webcam', name: 'Webcam', icon: '🎥' },
    { id: 'chat', name: 'Chatter', icon: '💬' },
    { id: 'team', name: 'Jobs im Team', icon: '👥' },
    { id: 'tech', name: 'Technische Ausstattung', icon: '💻' },
    { id: 'other', name: 'Sonstiges', icon: '✨' },
  ];

  const faqs = [
    {
      category: 'general',
      question: 'Wer ist Engel & Teufel?',
      answer: 'Engel & Teufel ist eine Full-Service-Agentur, die sich auf die Unterstützung von Models und Content-Creators in der Erotik- und Aktbranche spezialisiert hat. Wir bieten umfangreiche Dienstleistungen wie Content-Erstellung, Marketing und rechtliche Absicherung.'
    },
    {
      category: 'general',
      question: 'Wie kann ich mich bewerben?',
      answer: 'Du kannst dich über unser Online-Formular auf der Bewerbungsseite bewerben. Wähle einfach die Kategorie aus, die dich interessiert, und fülle das Formular aus.'
    },
    {
      category: 'general',
      question: 'Ist meine Bewerbung vertraulich?',
      answer: 'Ja, wir behandeln alle Bewerbungen und Daten streng vertraulich und nach den geltenden Datenschutzrichtlinien.'
    },
    {
      category: 'onlyfans',
      question: 'Brauche ich Erfahrung, um als OnlyFans-Model bei Engel & Teufel zu arbeiten?',
      answer: 'Erfahrung ist kein Muss! Wir begleiten dich von Anfang an und bieten dir umfassendes Coaching, um erfolgreich durchzustarten.'
    },
    {
      category: 'onlyfans',
      question: 'Was wird von mir als OnlyFans-Model erwartet?',
      answer: 'Wir erwarten Zuverlässigkeit, Kreativität und die Bereitschaft, regelmäßig Content zu erstellen. Der Erfolg hängt davon ab, wie viel du investierst.'
    },
    {
      category: 'onlyfans',
      question: 'Wie unterstützt ihr OnlyFans-Models?',
      answer: 'Wir bieten Fotoshootings, Videoproduktionen, Social-Media-Management und individuelle Strategien, um deine Plattform aufzubauen und zu skalieren.'
    },
    {
      category: 'webcam',
      question: 'Kann ich von zuhause als Webcam-Model arbeiten?',
      answer: 'Ja, du kannst von zuhause arbeiten. Alternativ kannst du auch unsere professionellen Studios nutzen, die mit modernstem Equipment ausgestattet sind.'
    },
    {
      category: 'webcam',
      question: 'Welche Arbeitszeiten gibt es?',
      answer: 'Als Webcam-Model kannst du deine Arbeitszeiten flexibel gestalten. Wir empfehlen regelmäßige und planbare Sessions, um eine loyale Community aufzubauen.'
    },
    {
      category: 'webcam',
      question: 'Was ist, wenn ich technische Probleme habe?',
      answer: 'Unser technisches Support-Team steht dir rund um die Uhr zur Verfügung, um sicherzustellen, dass alles reibungslos läuft.'
    },
    {
      category: 'chat',
      question: 'Was macht ein Chatter?',
      answer: 'Als Chatter bist du für die Kommunikation mit Fans und Abonnenten der Models verantwortlich. Du beantwortest Nachrichten, baust Beziehungen auf und unterstützt beim Verkauf von Premium-Content.'
    },
    {
      category: 'chat',
      question: 'Welche Fähigkeiten brauche ich als Chatter?',
      answer: 'Du solltest kommunikativ, kreativ und zuverlässig sein. Fließende Sprachkenntnisse in Deutsch und Englisch sind von Vorteil.'
    },
    {
      category: 'chat',
      question: 'Kann ich als Chatter von zuhause arbeiten?',
      answer: 'Ja, Chatter arbeiten vollständig remote und können von überall aus tätig sein.'
    },
    {
      category: 'team',
      question: 'Welche internen Jobs bietet Engel & Teufel an?',
      answer: 'Wir suchen regelmäßig Talente in Bereichen wie Marketing, IT, Buchhaltung, Kundenbetreuung und mehr.'
    },
    {
      category: 'team',
      question: 'Wie läuft der Bewerbungsprozess ab?',
      answer: 'Nach deiner Bewerbung werden wir dich kontaktieren, um ein erstes Gespräch zu führen. Danach folgt ein Vorstellungsgespräch, in dem wir dich und deine Fähigkeiten besser kennenlernen.'
    },
    {
      category: 'tech',
      question: 'Welche technische Ausstattung stellt Engel & Teufel bereit?',
      answer: 'Wir stellen dir iPhones, MacBooks, professionelle Kameras und weiteres Equipment zur Verfügung, um hochwertigen Content zu erstellen.'
    },
    {
      category: 'tech',
      question: 'Was passiert mit der Ausstattung nach Vertragsende?',
      answer: 'Die Ausstattung bleibt Eigentum von Engel & Teufel und muss nach Vertragsende zurückgegeben werden.'
    },
    {
      category: 'other',
      question: 'Wie schützt ihr meine Privatsphäre?',
      answer: 'Wir nutzen modernste Tools und Technologien, um deine Daten und Inhalte zu schützen. Zudem arbeiten wir mit rechtlichen Experten zusammen, um sicherzustellen, dass deine Rechte gewahrt bleiben.'
    },
    {
      category: 'other',
      question: 'Gibt es Schulungen oder Weiterbildungen?',
      answer: 'Ja, wir bieten regelmäßige Schulungen, um dich weiterzuentwickeln – sei es im Bereich Content-Erstellung, Kommunikation oder Selbstvermarktung.'
    }
  ];

  return (
    <>
      <Helmet>
        <title>FAQ - Häufig gestellte Fragen | Engel & Teufel</title>
        <meta name="description" content="Finden Sie Antworten auf häufig gestellte Fragen zu OnlyFans und Webcam bei Engel & Teufel. Umfassende Informationen zu unseren Services, Verdienstmöglichkeiten und mehr." />
        <meta name="keywords" content="FAQ OnlyFans, FAQ Webcam, Häufige Fragen, Verdienstmöglichkeiten, Model werden, Agentur FAQ" />
        <meta property="og:title" content="FAQ - Häufig gestellte Fragen | Engel & Teufel" />
        <meta property="og:description" content="Alle wichtigen Informationen und Antworten auf häufig gestellte Fragen zu unseren Services bei Engel & Teufel." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.engelteufel.com/faq" />
        <link rel="canonical" href="https://www.engelteufel.com/faq" />
      </Helmet>
      <div className="flex flex-col min-h-screen">
        <Hero
          title="Häufige Fragen"
          subtitle="Antworten auf deine Fragen"
          imageSrc={heroImages.faq.desktop}
          imageMobile={heroImages.faq.mobile}
          imageAlt="Engel & Teufel FAQ - Häufig gestellte Fragen und Antworten"
        />
        {/* Hero Section */}
        <motion.section
          className="section bg-gradient-to-b from-dark to-[#2c3030]"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <div className="container">
            <h1 className="text-4xl md:text-6xl font-serif text-center mb-6">
              Häufig gestellte Fragen
            </h1>
            <p className="text-xl md:text-2xl text-center text-cream/80 max-w-3xl mx-auto">
              Hier findest du Antworten auf die wichtigsten Fragen
            </p>
          </div>
        </motion.section>

        {/* FAQ Section */}
        <section className="section">
          <div className="container max-w-4xl">
            {/* Category Filter with Arrows */}
            <motion.div
              className="mb-12 relative"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              {/* Left Arrow */}
              <button
                onClick={() => scrollCategories('left')}
                className="absolute left-0 top-1/2 -translate-y-1/2 z-10 p-2 bg-dark/80 hover:bg-dark rounded-full shadow-lg text-gold hover:text-gold/80 transition-colors"
                aria-label="Scroll left"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 19l-7-7 7-7"
                  />
                </svg>
              </button>

              {/* Categories Slider */}
              <div
                ref={sliderRef}
                className="overflow-x-auto scrollbar-hide mx-10"
              >
                <div className="flex space-x-4 min-w-max pb-4">
                  {categories.map((category) => (
                    <motion.button
                      key={category.id}
                      onClick={() => setActiveCategory(category.id)}
                      className={`px-4 py-2 rounded-lg flex items-center space-x-2 transition-colors ${
                        activeCategory === category.id
                          ? 'bg-gold text-dark'
                          : 'bg-[#2c3030] hover:bg-[#3c4040]'
                      }`}
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <span>{category.icon}</span>
                      <span>{category.name}</span>
                    </motion.button>
                  ))}
                </div>
              </div>

              {/* Right Arrow */}
              <button
                onClick={() => scrollCategories('right')}
                className="absolute right-0 top-1/2 -translate-y-1/2 z-10 p-2 bg-dark/80 hover:bg-dark rounded-full shadow-lg text-gold hover:text-gold/80 transition-colors"
                aria-label="Scroll right"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </button>
            </motion.div>

            {/* FAQ Accordion */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
            >
              <FAQAccordion faqs={faqs} category={activeCategory} />
            </motion.div>

            {/* Contact Section */}
            <motion.div
              className="mt-12 pt-12 border-t border-gray-700 text-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
            >
              <h2 className="text-2xl font-serif mb-4">Hast du weitere Fragen?</h2>
              <p className="text-cream/70 mb-6">
                Kontaktiere uns gerne über unser Kontaktformular oder per E-Mail an{' '}
                <a href="mailto:info@engelteufel.com" className="text-gold hover:text-gold/80 transition-colors">
                  info@engelteufel.com
                </a>
                . Wir freuen uns darauf, dir weiterzuhelfen!
              </p>
              <motion.div
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <Link
                  to="/contact"
                  className="inline-flex items-center px-6 py-3 bg-gold text-dark font-medium rounded-lg hover:bg-gold/90 transition-colors"
                >
                  Kontaktiere uns
                </Link>
              </motion.div>
            </motion.div>
          </div>
        </section>
      </div>
    </>
  );
};

export default FAQ;
