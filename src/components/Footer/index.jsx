import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FaInstagram, FaTwitter, FaTelegram, FaWhatsapp } from 'react-icons/fa';

const Footer = () => {
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  const socialLinks = [
    {
      icon: <FaInstagram className="w-6 h-6" />,
      url: 'https://www.instagram.com/agentur_engel_teufel/',
      label: 'Instagram'
    },
    {
      icon: <FaTwitter className="w-6 h-6" />,
      url: 'https://x.com/Engel_Teufel_',
      label: 'Twitter/X'
    },
    {
      icon: <FaTelegram className="w-6 h-6" />,
      url: 'https://t.me/Engel_Teufel_die_Agentur',
      label: 'Telegram'
    },
    {
      icon: <FaWhatsapp className="w-6 h-6" />,
      url: 'https://wa.me/491747590498',
      label: 'WhatsApp'
    }
  ];

  return (
    <footer className="bg-dark pt-16 pb-8">
      <div className="container mx-auto px-4">
        {/* Newsletter Signup */}
        <div className="max-w-3xl mx-auto mb-16 text-center">
          <h3 className="text-gold font-serif text-2xl mb-4">Newsletter</h3>
          <p className="text-cream/80 mb-6">
            Bleib auf dem Laufenden – Jetzt für unseren Newsletter anmelden!
          </p>
          <form className="flex w-full max-w-2xl mx-auto">
            <input
              type="email"
              placeholder="Deine E-Mail"
              className="flex-1 bg-[#2c3030] text-cream px-6 py-3 rounded-l-lg focus:outline-none focus:ring-1 focus:ring-gold"
            />
            <button
              type="submit"
              className="bg-gold hover:bg-gold/90 text-dark px-8 py-3 rounded-r-lg font-medium transition-colors"
            >
              Anmelden
            </button>
          </form>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          {/* Logo */}
          <div className="flex justify-center md:justify-start mb-8 md:mb-0">
            <img 
              src="/images/footer/Logo ICON-02.webp" 
              alt="Engel & Teufel Logo" 
              className="h-24 w-auto"
            />
          </div>

          {/* Contact Information */}
          <div>
            <h3 className="text-gold font-serif text-xl mb-4">Kontakt</h3>
            <address className="text-cream/80 not-italic">
              Engel & Teufel GmbH<br />
              Kapstadtring 7<br />
              22297 Hamburg<br />
              <a href="tel:+4917475904980" className="hover:text-gold transition-colors">
                +49 (0) 174 7590498
              </a><br />
              <a href="mailto:info@engelteufel.com" className="hover:text-gold transition-colors">
                info@engelteufel.com
              </a>
            </address>
          </div>

          {/* Important Links */}
          <div>
            <h3 className="text-gold font-serif text-xl mb-4">Rechtliches</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/faq" className="text-cream/80 hover:text-gold transition-colors">
                  FAQ
                </Link>
              </li>
              <li>
                <Link to="/privacy" className="text-cream/80 hover:text-gold transition-colors">
                  Datenschutzerklärung
                </Link>
              </li>
              <li>
                <Link to="/legal" className="text-cream/80 hover:text-gold transition-colors">
                  Impressum
                </Link>
              </li>
              <li>
                <Link to="/terms" className="text-cream/80 hover:text-gold transition-colors">
                  AGB
                </Link>
              </li>
            </ul>
          </div>

          {/* Social Media */}
          <div>
            <h3 className="text-gold font-serif text-xl mb-4">Social Media</h3>
            <div className="grid grid-cols-2 gap-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-cream/80 hover:text-gold transition-colors group"
                >
                  <span className="transform group-hover:scale-110 transition-transform">
                    {social.icon}
                  </span>
                  <span className="text-sm">{social.label}</span>
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-800 pt-8">
          <p className="text-center text-cream/60">
            2024 Engel & Teufel GmbH. Alle Rechte vorbehalten.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
