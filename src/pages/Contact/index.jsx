import React from 'react';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet';
import Hero from '../../components/Hero';
import { heroImages } from '../../assets';
import { FaInstagram, FaFacebookF, FaTiktok } from 'react-icons/fa';
import ContactForm from '../../components/ContactForm';

const Contact = () => {
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  const socialLinks = [
    {
      name: 'Instagram',
      icon: <FaInstagram className="w-6 h-6" />,
      url: 'https://instagram.com/engelteufel',
    },
    {
      name: 'Facebook',
      icon: <FaFacebookF className="w-6 h-6" />,
      url: 'https://facebook.com/engelteufel',
    },
    {
      name: 'TikTok',
      icon: <FaTiktok className="w-6 h-6" />,
      url: 'https://tiktok.com/@engelteufel',
    },
  ];

  return (
    <>
      <Helmet>
        <title>Kontakt | Engel & Teufel</title>
        <meta name="description" content="Kontaktieren Sie Engel & Teufel - Ihre Full-Service Agentur für OnlyFans und Webcam. Wir beraten Sie gerne persönlich und individuell zu allen Fragen." />
        <meta name="keywords" content="Engel & Teufel Kontakt, Agentur Beratung, OnlyFans Beratung, Webcam Beratung, Persönliches Gespräch, Karriereberatung" />
        <meta property="og:title" content="Kontakt | Engel & Teufel" />
        <meta property="og:description" content="Haben Sie Fragen? Kontaktieren Sie uns - Ihr Team von Engel & Teufel steht Ihnen gerne zur Verfügung." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.engelteufel.com/contact" />
        <link rel="canonical" href="https://www.engelteufel.com/contact" />
      </Helmet>
      <div className="flex flex-col min-h-screen">
        <Hero
          title="Kontakt"
          subtitle="Wir freuen uns auf Ihre Nachricht"
          imageSrc={heroImages.contact}
        />
        {/* Main Content */}
        <section className="section">
          <div className="container max-w-6xl">
            <div className="grid md:grid-cols-2 gap-12 lg:gap-20">
              {/* Contact Information */}
              <motion.div
                variants={fadeIn}
                initial="hidden"
                animate="visible"
                transition={{ delay: 0.2 }}
                className="space-y-8"
              >
                <div>
                  <h2 className="text-2xl font-serif mb-6">So erreichst du uns</h2>
                  <div className="space-y-4">
                    <div>
                      <h3 className="text-gold mb-2">📍 Adresse:</h3>
                      <p>Engel & Teufel GmbH</p>
                      <p>Kapstadtring 7</p>
                      <p>22297 Hamburg</p>
                    </div>
                    <div>
                      <h3 className="text-gold mb-2">📞 Telefon:</h3>
                      <p>+49 (0) 174 7590498</p>
                    </div>
                    <div>
                      <h3 className="text-gold mb-2">📧 E-Mail:</h3>
                      <a href="mailto:info@engelteufel.com" className="hover:text-gold transition-colors">
                        info@engelteufel.com
                      </a>
                    </div>
                    <div>
                      <h3 className="text-gold mb-2">🌐 Web:</h3>
                      <a href="https://www.engelteufel.com" target="_blank" rel="noopener noreferrer" className="hover:text-gold transition-colors">
                        www.engelteufel.com
                      </a>
                    </div>
                  </div>
                </div>

                {/* Social Media */}
                <div>
                  <h2 className="text-2xl font-serif mb-6">Folge uns auf Social Media</h2>
                  <p className="mb-4">Bleib immer auf dem Laufenden und erfahre spannende News, Tipps und mehr:</p>
                  <div className="flex space-x-4">
                    {socialLinks.map((social) => (
                      <motion.a
                        key={social.name}
                        href={social.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-3 bg-[#2c3030] rounded-full hover:bg-gold/20 transition-colors"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                      >
                        {social.icon}
                      </motion.a>
                    ))}
                  </div>
                </div>
              </motion.div>

              {/* Contact Form */}
              <motion.div
                variants={fadeIn}
                initial="hidden"
                animate="visible"
                transition={{ delay: 0.4 }}
              >
                <h2 className="text-2xl font-serif mb-6">Direkt Kontakt aufnehmen</h2>
                <p className="mb-8">
                  Fülle unser Kontaktformular aus und wir melden uns so schnell wie möglich bei dir. 
                  Gemeinsam finden wir die Antworten auf deine Fragen oder planen den nächsten Schritt in deiner Karriere.
                </p>
                <ContactForm />
              </motion.div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Contact;
