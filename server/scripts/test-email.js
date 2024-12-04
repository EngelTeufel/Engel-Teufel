import emailService from '../services/emailService.js';
import dotenv from 'dotenv';

// Lade die Umgebungsvariablen
dotenv.config();

async function sendTestEmail() {
    try {
        // Überprüfe die Umgebungsvariablen
        console.log('Überprüfe Umgebungsvariablen...');
        console.log('MAILGUN_DOMAIN:', process.env.MAILGUN_DOMAIN);
        console.log('FROM_EMAIL:', process.env.FROM_EMAIL);
        
        const testEmail = process.env.ADMIN_EMAIL; // Wir verwenden die Admin-E-Mail für den Test
        
        console.log('Sende Test-E-Mail...');
        console.log('An:', testEmail);
        
        await emailService.sendEmail({
            to: testEmail,
            subject: 'Test E-Mail von Engel & Teufel',
            text: 'Dies ist eine Test-E-Mail vom Engel & Teufel Blog-System.',
            html: `
                <h1>Test E-Mail</h1>
                <p>Dies ist eine Test-E-Mail vom Engel & Teufel Blog-System.</p>
                <p>Wenn Sie diese E-Mail sehen, funktioniert der E-Mail-Service korrekt!</p>
                <p>Gesendet von: ${process.env.FROM_EMAIL}</p>
                <p>Domain: ${process.env.MAILGUN_DOMAIN}</p>
            `
        });
        
        console.log('Test-E-Mail erfolgreich gesendet!');
    } catch (error) {
        console.error('Fehler beim Senden der Test-E-Mail:');
        console.error('Error Message:', error.message);
        console.error('Error Details:', error);
        
        if (error.details) {
            console.error('API Error Details:', error.details);
        }
    }
}

// Führe den Test aus
sendTestEmail();
