import React from 'react';

const FormField = ({ label, type, name, value, onChange, required, placeholder, options }) => {
  const baseClasses = "w-full px-4 py-3 bg-[#2c3030] border border-gray-700 rounded-lg focus:outline-none focus:border-gold transition-colors";

  if (type === 'select') {
    return (
      <div className="mb-4">
        <label className="block text-cream mb-2">{label}</label>
        <select
          name={name}
          value={value}
          onChange={onChange}
          required={required}
          className={baseClasses}
        >
          <option value="">Bitte wählen</option>
          {options.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
      </div>
    );
  }

  if (type === 'textarea') {
    return (
      <div className="mb-4">
        <label className="block text-cream mb-2">{label}</label>
        <textarea
          name={name}
          value={value}
          onChange={onChange}
          required={required}
          placeholder={placeholder}
          rows="4"
          className={baseClasses}
        />
      </div>
    );
  }

  if (type === 'file') {
    return (
      <div className="mb-4">
        <label className="block text-cream mb-2">{label}</label>
        <input
          type="file"
          name={name}
          onChange={onChange}
          required={required}
          accept="image/*,video/*,.pdf,.doc,.docx"
          className="w-full"
        />
        {placeholder && (
          <p className="mt-2 text-sm text-cream/60">{placeholder}</p>
        )}
      </div>
    );
  }

  return (
    <div className="mb-4">
      <label className="block text-cream mb-2">{label}</label>
      <input
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        required={required}
        placeholder={placeholder}
        className={baseClasses}
      />
    </div>
  );
};

export const GeneralFields = ({ formData, onChange }) => (
  <div className="space-y-6">
    <h3 className="text-xl font-serif mb-4">Persönliche Informationen</h3>
    <div className="grid md:grid-cols-2 gap-4">
      <FormField
        label="Vollständiger Name"
        type="text"
        name="fullName"
        value={formData.fullName}
        onChange={onChange}
        required
        placeholder="Vor- und Nachname"
      />
      <FormField
        label="Geburtsdatum"
        type="date"
        name="birthDate"
        value={formData.birthDate}
        onChange={onChange}
        required
      />
    </div>
    <div className="grid md:grid-cols-2 gap-4">
      <FormField
        label="E-Mail"
        type="email"
        name="email"
        value={formData.email}
        onChange={onChange}
        required
        placeholder="deine@email.com"
      />
      <FormField
        label="Telefon"
        type="tel"
        name="phone"
        value={formData.phone}
        onChange={onChange}
        required
        placeholder="+49 123 4567890"
      />
    </div>
    <FormField
      label="Adresse"
      type="text"
      name="address"
      value={formData.address}
      onChange={onChange}
      required
      placeholder="Straße, Hausnummer, PLZ, Stadt"
    />
    <div className="grid md:grid-cols-2 gap-4">
      <FormField
        label="Instagram (optional)"
        type="text"
        name="instagram"
        value={formData.instagram}
        onChange={onChange}
        placeholder="@username"
      />
      <FormField
        label="TikTok (optional)"
        type="text"
        name="tiktok"
        value={formData.tiktok}
        onChange={onChange}
        placeholder="@username"
      />
    </div>
  </div>
);

export const OnlyFansFields = ({ formData, onChange }) => (
  <div className="space-y-6">
    <h3 className="text-xl font-serif mb-4">OnlyFans Erfahrung</h3>
    <FormField
      label="Hast du bereits Erfahrung mit OnlyFans?"
      type="select"
      name="onlyfansExperience"
      value={formData.onlyfansExperience}
      onChange={onChange}
      required
      options={[
        { value: 'yes', label: 'Ja, ich habe bereits ein aktives Profil' },
        { value: 'past', label: 'Ja, aber nicht mehr aktiv' },
        { value: 'no', label: 'Nein, noch keine Erfahrung' }
      ]}
    />
    <FormField
      label="Welche Art von Content möchtest du erstellen?"
      type="textarea"
      name="contentType"
      value={formData.contentType}
      onChange={onChange}
      required
      placeholder="Beschreibe kurz, welche Art von Content du erstellen möchtest..."
    />
    <FormField
      label="Bestehende Profile (optional)"
      type="textarea"
      name="existingProfiles"
      value={formData.existingProfiles}
      onChange={onChange}
      placeholder="Links zu deinen bestehenden Profilen..."
    />
  </div>
);

export const WebcamFields = ({ formData, onChange }) => (
  <div className="space-y-6">
    <h3 className="text-xl font-serif mb-4">Webcam Details</h3>
    <FormField
      label="Bevorzugter Arbeitsort"
      type="select"
      name="workLocation"
      value={formData.workLocation}
      onChange={onChange}
      required
      options={[
        { value: 'home', label: 'Von Zuhause' },
        { value: 'studio', label: 'Im Studio' },
        { value: 'both', label: 'Beides möglich' }
      ]}
    />
    <FormField
      label="Verfügbare Technik"
      type="textarea"
      name="equipment"
      value={formData.equipment}
      onChange={onChange}
      required
      placeholder="Welche technische Ausstattung besitzt du bereits? (Webcam, Laptop, etc.)"
    />
    <FormField
      label="Bevorzugte Arbeitszeiten"
      type="select"
      name="workHours"
      value={formData.workHours}
      onChange={onChange}
      required
      options={[
        { value: 'flexible', label: 'Flexibel' },
        { value: 'morning', label: 'Vormittags' },
        { value: 'afternoon', label: 'Nachmittags' },
        { value: 'evening', label: 'Abends' },
        { value: 'night', label: 'Nachts' }
      ]}
    />
  </div>
);

export const ChatFields = ({ formData, onChange }) => (
  <div className="space-y-6">
    <h3 className="text-xl font-serif mb-4">Chat Qualifikationen</h3>
    <FormField
      label="Sprachkenntnisse"
      type="textarea"
      name="languages"
      value={formData.languages}
      onChange={onChange}
      required
      placeholder="Welche Sprachen sprichst du fließend?"
    />
    <FormField
      label="Chat-Erfahrung"
      type="select"
      name="chatExperience"
      value={formData.chatExperience}
      onChange={onChange}
      required
      options={[
        { value: 'professional', label: 'Professionelle Erfahrung' },
        { value: 'hobby', label: 'Hobby-Erfahrung' },
        { value: 'none', label: 'Keine Erfahrung' }
      ]}
    />
    <FormField
      label="Bevorzugte Arbeitszeiten"
      type="select"
      name="workHours"
      value={formData.workHours}
      onChange={onChange}
      required
      options={[
        { value: 'flexible', label: 'Flexibel' },
        { value: 'morning', label: 'Vormittags' },
        { value: 'afternoon', label: 'Nachmittags' },
        { value: 'evening', label: 'Abends' },
        { value: 'night', label: 'Nachts' }
      ]}
    />
  </div>
);

export const TeamFields = ({ formData, onChange }) => (
  <div className="space-y-6">
    <h3 className="text-xl font-serif mb-4">Team Position</h3>
    <FormField
      label="Gewünschte Position"
      type="select"
      name="position"
      value={formData.position}
      onChange={onChange}
      required
      options={[
        { value: 'marketing', label: 'Marketing' },
        { value: 'it', label: 'IT & Entwicklung' },
        { value: 'accounting', label: 'Buchhaltung' },
        { value: 'support', label: 'Support' },
        { value: 'other', label: 'Andere Position' }
      ]}
    />
    <FormField
      label="Berufserfahrung"
      type="textarea"
      name="experience"
      value={formData.experience}
      onChange={onChange}
      required
      placeholder="Beschreibe kurz deine relevante Berufserfahrung..."
    />
    <FormField
      label="Motivation"
      type="textarea"
      name="motivation"
      value={formData.motivation}
      onChange={onChange}
      required
      placeholder="Warum möchtest du Teil von Engel & Teufel werden?"
    />
    <FormField
      label="Lebenslauf"
      type="file"
      name="resume"
      onChange={onChange}
      required
      placeholder="Bitte lade deinen Lebenslauf als PDF oder Word-Dokument hoch"
    />
  </div>
);

export default FormField;
