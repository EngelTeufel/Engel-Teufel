import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import JobSelect from './JobSelect';
import {
  GeneralFields,
  OnlyFansFields,
  WebcamFields,
  ChatFields,
  TeamFields
} from './FormFields';
import { sendEmail } from '../../services/emailService';

const ApplicationForm = () => {
  const [step, setStep] = useState(1);
  const [selectedJob, setSelectedJob] = useState('');
  const [ageError, setAgeError] = useState('');
  const [formData, setFormData] = useState({
    // General Fields
    fullName: '',
    birthDate: '',
    email: '',
    phone: '',
    address: '',
    instagram: '',
    tiktok: '',
    // Job Specific Fields will be added based on selection
  });

  const handleChange = (e) => {
    const { name, value, type, files } = e.target;
    
    if (name === 'birthDate') {
      const birthDate = new Date(value);
      const today = new Date();
      let age = today.getFullYear() - birthDate.getFullYear();
      const monthDiff = today.getMonth() - birthDate.getMonth();
      
      // If birthday hasn't occurred this year, subtract a year
      if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birthDate.getDate())) {
        age--;
      }

      if (age < 18) {
        setAgeError('Sorry, du musst mindestens 18 Jahre alt sein.');
        return;
      } else {
        setAgeError('');
      }
    }

    if (type === 'file') {
      setFormData(prev => ({
        ...prev,
        [name]: files[0]
      }));
    } else {
      setFormData(prev => ({
        ...prev,
        [name]: value
      }));
    }
  };

  const handleJobSelect = (jobId) => {
    setSelectedJob(jobId);
    setStep(2);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Validate age before submission
    if (formData.birthDate) {
      const birthDate = new Date(formData.birthDate);
      const today = new Date();
      let age = today.getFullYear() - birthDate.getFullYear();
      const monthDiff = today.getMonth() - birthDate.getMonth();
      
      if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birthDate.getDate())) {
        age--;
      }

      if (age < 18) {
        setAgeError('Sorry, du musst mindestens 18 Jahre alt sein.');
        return;
      }
    }

    try {
      // Bestimme den E-Mail-Typ basierend auf der Jobauswahl
      const emailType = selectedJob === 'onlyfans' || selectedJob === 'webcam' || selectedJob === 'combined' 
        ? 'model' 
        : 'bewerbung';

      // Sende die E-Mail mit den Formulardaten
      await sendEmail(emailType, {
        ...formData,
        jobType: selectedJob
      });

      // Bei erfolgreicher Übermittlung zum nächsten Schritt
      setStep(3);
    } catch (error) {
      console.error('Fehler bei der Bewerbung:', error);
      // Hier könnte eine Fehlerbehandlung implementiert werden
      alert('Es gab einen Fehler bei der Übermittlung deiner Bewerbung. Bitte versuche es später erneut.');
    }
  };

  const renderJobSpecificFields = () => {
    switch (selectedJob) {
      case 'onlyfans':
        return <OnlyFansFields formData={formData} onChange={handleChange} />;
      case 'webcam':
        return <WebcamFields formData={formData} onChange={handleChange} />;
      case 'combined':
        return (
          <>
            <OnlyFansFields formData={formData} onChange={handleChange} />
            <WebcamFields formData={formData} onChange={handleChange} />
          </>
        );
      case 'chat':
        return <ChatFields formData={formData} onChange={handleChange} />;
      case 'team':
        return <TeamFields formData={formData} onChange={handleChange} />;
      default:
        return null;
    }
  };

  return (
    <div className="max-w-4xl mx-auto">
      <AnimatePresence mode="wait">
        {step === 1 && (
          <motion.div
            key="step1"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
          >
            <JobSelect onSelect={handleJobSelect} selectedJob={selectedJob} />
          </motion.div>
        )}

        {step === 2 && (
          <motion.form
            key="step2"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            onSubmit={handleSubmit}
            className="space-y-8"
          >
            <GeneralFields formData={formData} onChange={handleChange} />
            {ageError && (
              <div className="text-red-500 text-sm mt-2 bg-red-500/10 p-3 rounded-lg">
                {ageError}
              </div>
            )}
            {renderJobSpecificFields()}

            <div className="space-y-4">
              <div className="border-t border-gray-700 pt-6">
                <label className="flex items-start space-x-3">
                  <input
                    type="checkbox"
                    required
                    className="mt-1"
                  />
                  <span className="text-sm text-cream/70">
                    Ich stimme zu, dass meine Daten gemäß der Datenschutzerklärung verarbeitet werden. 
                    Alle Informationen werden vertraulich behandelt.
                  </span>
                </label>
              </div>

              <div className="flex space-x-4">
                <motion.button
                  type="button"
                  onClick={() => setStep(1)}
                  className="px-6 py-2 border border-gold text-gold rounded-lg hover:bg-gold/10 transition-colors"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  Zurück
                </motion.button>
                <motion.button
                  type="submit"
                  className="px-8 py-2 bg-gold text-dark font-medium rounded-lg hover:bg-gold/90 transition-colors"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  disabled={!!ageError}
                >
                  Bewerbung absenden
                </motion.button>
              </div>
            </div>
          </motion.form>
        )}

        {step === 3 && (
          <motion.div
            key="step3"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="text-center py-12"
          >
            <div className="text-6xl mb-6">✨</div>
            <h2 className="text-2xl font-serif mb-4">Vielen Dank für deine Bewerbung!</h2>
            <p className="text-cream/70 mb-8">
              Wir werden uns schnellstmöglich mit dir in Verbindung setzen.
              Ein Teammitglied wird deine Bewerbung prüfen und sich innerhalb der nächsten 48 Stunden bei dir melden.
            </p>
            <motion.button
              onClick={() => {
                setStep(1);
                setSelectedJob('');
                setFormData({});
                setAgeError('');
              }}
              className="text-gold hover:text-gold/80 transition-colors"
              whileHover={{ scale: 1.05 }}
            >
              Zurück zur Übersicht
            </motion.button>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default ApplicationForm;
