import dotenv from 'dotenv';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';
import fs from 'fs';
import pg from 'pg';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// Lade Umgebungsvariablen
dotenv.config({ path: join(__dirname, '../../.env') });

const { Pool } = pg;

const pool = new Pool({
  host: process.env.DB_HOST,
  port: process.env.DB_PORT || 5432,
  database: 'postgres', // Zunächst die Standard-Datenbank verwenden
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  ssl: {
    rejectUnauthorized: false
  }
});

async function initializeDatabase() {
  const client = await pool.connect();
  
  try {
    // Überprüfe, ob die Datenbank bereits existiert
    const dbCheckResult = await client.query(
      "SELECT 1 FROM pg_database WHERE datname = 'engel_und_teufel_blog'"
    );

    // Wenn die Datenbank nicht existiert, erstelle sie
    if (dbCheckResult.rows.length === 0) {
      // Bestehende Verbindungen zur Datenbank beenden
      await client.query(
        `SELECT pg_terminate_backend(pg_stat_activity.pid)
         FROM pg_stat_activity
         WHERE pg_stat_activity.datname = 'engel_und_teufel_blog'
         AND pid <> pg_backend_pid()`
      );

      console.log('Erstelle neue Datenbank...');
      await client.query('CREATE DATABASE engel_und_teufel_blog');
      console.log('Datenbank erfolgreich erstellt!');
    }

    // Verbindung zur neuen Datenbank herstellen
    const dbClient = new Pool({
      host: process.env.DB_HOST,
      port: process.env.DB_PORT || 5432,
      database: 'engel_und_teufel_blog',
      user: process.env.DB_USER,
      password: process.env.DB_PASSWORD,
      ssl: {
        rejectUnauthorized: false
      }
    });

    // SQL-Schema aus der Datei lesen
    const schemaPath = join(__dirname, '../models/schema.sql');
    const schema = fs.readFileSync(schemaPath, 'utf8');

    // Schema ausführen
    await dbClient.query(schema);
    console.log('Datenbank-Schema erfolgreich erstellt!');

    // Beispiel-Blog-Post erstellen
    const samplePost = {
      title: 'Willkommen bei Engel & Teufel',
      content: '# Willkommen auf unserem Blog!\n\nHier finden Sie regelmäßig neue Updates und interessante Einblicke.',
      category: 'Allgemein',
      author: 'Admin',
      image_url: null
    };

    await dbClient.query(
      `INSERT INTO blog_posts (title, content, category, author, image_url)
       VALUES ($1, $2, $3, $4, $5)`,
      [samplePost.title, samplePost.content, samplePost.category, samplePost.author, samplePost.image_url]
    );

    console.log('Beispiel-Blog-Post erstellt!');
    
    await dbClient.end();
  } catch (err) {
    console.error('Fehler bei der Datenbankinitialisierung:', err);
    throw err;
  } finally {
    client.release();
    await pool.end();
  }
}

initializeDatabase().catch(console.error);
