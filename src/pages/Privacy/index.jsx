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
        <h1>Datenschutzerklärung</h1>
        
        <h2 id="m716">Präambel</h2>
        <p>Mit der folgenden Datenschutzerklärung möchten wir Sie darüber aufklären, welche Arten Ihrer personenbezogenen Daten (nachfolgend auch kurz als "Daten" bezeichnet) wir zu welchen Zwecken und in welchem Umfang verarbeiten. Die Datenschutzerklärung gilt für alle von uns durchgeführten Verarbeitungen personenbezogener Daten, sowohl im Rahmen der Erbringung unserer Leistungen als auch insbesondere auf unseren Webseiten, in mobilen Applikationen sowie innerhalb externer Onlinepräsenzen, wie z. B. unserer Social-Media-Profile (nachfolgend zusammenfassend bezeichnet als "Onlineangebot").</p>
        <p>Die verwendeten Begriffe sind nicht geschlechtsspezifisch.</p>
        <p>Stand: 4. Dezember 2024</p>

        <h2>Inhaltsübersicht</h2>
        <ul>
          <li><a href="#m716">Präambel</a></li>
          <li><a href="#m3">Verantwortlicher</a></li>
          <li><a href="#mOverview">Übersicht der Verarbeitungen</a></li>
          <li><a href="#m2427">Maßgebliche Rechtsgrundlagen</a></li>
          {/* Add all other sections as links */}
        </ul>

        <h2 id="m3">Verantwortlicher</h2>
        <p>Engel&Teufel GmbH<br/>
        Kapstadtring 7<br/>
        22297 Hamburg</p>
        <p>Vertretungsberechtigte Personen: Victor Engelmann</p>
        <p>E-Mail-Adresse: <a href="mailto:Datenschutzbeauftragte@engelteufel.com">Datenschutzbeauftragte@engelteufel.com</a></p>
        <p>Impressum: <a href="https://engelteufel.com/legal" target="_blank" rel="noopener noreferrer">https://engelteufel.com/legal</a></p>

        {/* Continue with all other sections */}
        <h2 id="mOverview">Übersicht der Verarbeitungen</h2>
        <p>Die nachfolgende Übersicht fasst die Arten der verarbeiteten Daten und die Zwecke ihrer Verarbeitung zusammen und verweist auf die betroffenen Personen.</p>
        
        <h3>Arten der verarbeiteten Daten</h3>
        <ul>
          <li>Bestandsdaten</li>
          <li>Zahlungsdaten</li>
          <li>Standortdaten</li>
          <li>Kontaktdaten</li>
          <li>Inhaltsdaten</li>
          <li>Vertragsdaten</li>
          <li>Nutzungsdaten</li>
          <li>Meta-, Kommunikations- und Verfahrensdaten</li>
          <li>Protokolldaten</li>
        </ul>

        {/* Add remaining content sections */}
      </div>
    </>
  );
};

export default PrivacyPolicy;
