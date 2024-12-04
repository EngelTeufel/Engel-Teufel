import { query } from '../config/db-config.js';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

async function initializeDatabase() {
    try {
        // Lese das SQL-Script
        const sqlScript = fs.readFileSync(
            path.join(__dirname, 'init-db.sql'),
            'utf8'
        );

        // Führe das SQL-Script aus
        await query(sqlScript);
        
        console.log('Datenbank wurde erfolgreich initialisiert!');
    } catch (error) {
        console.error('Fehler bei der Datenbankinitialisierung:', error);
        throw error;
    }
}

// Führe die Initialisierung aus
initializeDatabase().catch(console.error);
