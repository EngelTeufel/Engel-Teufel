import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { sendEmail } from '../../services/emailService';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    try {
      // Sende die Kontaktanfrage an die info@-Adresse
      await sendEmail('contact', formData);
      
      // Bei erfolgreicher Übermittlung Formular zurücksetzen
      setFormData({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: '',
      });
      
      // Erfolgsmeldung anzeigen
      alert('Vielen Dank für deine Nachricht! Wir werden uns schnellstmöglich bei dir melden.');
    } catch (error) {
      console.error('Fehler beim Senden der Nachricht:', error);
      alert('Es gab einen Fehler beim Senden deiner Nachricht. Bitte versuche es später erneut.');
    }
  };

  return (
    <motion.form
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      onSubmit={handleSubmit}
      className="space-y-6"
    >
      <div className="grid md:grid-cols-2 gap-6">
        <div>
          <label htmlFor="name" className="block text-cream mb-2">Name</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            className="w-full px-4 py-3 bg-[#2c3030] border border-gray-700 rounded-lg focus:outline-none focus:border-gold transition-colors"
            placeholder="Dein Name"
          />
        </div>
        <div>
          <label htmlFor="email" className="block text-cream mb-2">E-Mail</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full px-4 py-3 bg-[#2c3030] border border-gray-700 rounded-lg focus:outline-none focus:border-gold transition-colors"
            placeholder="deine@email.com"
          />
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        <div>
          <label htmlFor="phone" className="block text-cream mb-2">Telefon (optional)</label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            className="w-full px-4 py-3 bg-[#2c3030] border border-gray-700 rounded-lg focus:outline-none focus:border-gold transition-colors"
            placeholder="+49 123 4567890"
          />
        </div>
        <div>
          <label htmlFor="subject" className="block text-cream mb-2">Betreff</label>
          <select
            id="subject"
            name="subject"
            value={formData.subject}
            onChange={handleChange}
            required
            className="w-full px-4 py-3 bg-[#2c3030] border border-gray-700 rounded-lg focus:outline-none focus:border-gold transition-colors"
          >
            <option value="">Bitte wählen</option>
            <option value="career">Karrieremöglichkeiten</option>
            <option value="services">Dienstleistungen</option>
            <option value="collaboration">Zusammenarbeit</option>
            <option value="other">Sonstiges</option>
          </select>
        </div>
      </div>

      <div>
        <label htmlFor="message" className="block text-cream mb-2">Nachricht</label>
        <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          required
          rows="6"
          className="w-full px-4 py-3 bg-[#2c3030] border border-gray-700 rounded-lg focus:outline-none focus:border-gold transition-colors"
          placeholder="Deine Nachricht an uns..."
        />
      </div>

      <motion.button
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        type="submit"
        className="w-full md:w-auto px-8 py-3 bg-gold text-dark font-medium rounded-lg hover:bg-gold/90 transition-colors"
      >
        Nachricht senden
      </motion.button>
    </motion.form>
  );
};

export default ContactForm;
