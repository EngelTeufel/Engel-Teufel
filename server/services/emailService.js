import formData from 'form-data';
import Mailgun from 'mailgun.js';
import dotenv from 'dotenv';

dotenv.config();

const mailgun = new Mailgun(formData);
const mg = mailgun.client({
    username: 'api',
    key: process.env.MAILGUN_API_KEY
});

const emailService = {
    async sendEmail({ to, subject, text, html }) {
        try {
            console.log('Sending email with following parameters:');
            console.log('To:', to);
            console.log('Subject:', subject);
            console.log('Domain:', process.env.MAILGUN_DOMAIN);
            
            const messageData = {
                from: process.env.FROM_EMAIL,
                to: Array.isArray(to) ? to : [to],
                subject: subject,
                text: text,
                html: html
            };

            const result = await mg.messages.create(process.env.MAILGUN_DOMAIN, messageData);
            console.log('Email sent successfully:', result);
            return result;
        } catch (error) {
            console.error('Error sending email:', error);
            throw error;
        }
    },

    async sendNewPostNotification(post) {
        return this.sendEmail({
            to: process.env.ADMIN_EMAIL,
            subject: `Neuer Blog-Post: ${post.title}`,
            text: `Ein neuer Blog-Post wurde erstellt:\n\nTitel: ${post.title}\nInhalt: ${post.content}`,
            html: `
                <h1>Neuer Blog-Post erstellt</h1>
                <p><strong>Titel:</strong> ${post.title}</p>
                <p><strong>Inhalt:</strong></p>
                <p>${post.content}</p>
            `
        });
    },

    async sendContactFormSubmission(formData) {
        return this.sendEmail({
            to: process.env.ADMIN_EMAIL,
            subject: 'Neue Kontaktformular-Nachricht',
            text: `
                Neue Nachricht von: ${formData.name}
                Email: ${formData.email}
                Nachricht: ${formData.message}
            `,
            html: `
                <h1>Neue Kontaktformular-Nachricht</h1>
                <p><strong>Von:</strong> ${formData.name}</p>
                <p><strong>Email:</strong> ${formData.email}</p>
                <p><strong>Nachricht:</strong></p>
                <p>${formData.message}</p>
            `
        });
    }
};

export default emailService;
