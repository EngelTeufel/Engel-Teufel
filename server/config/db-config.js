import pg from 'pg';
const { Pool } = pg;

const pool = new Pool({
  host: process.env.DB_HOST || 'localhost',
  port: process.env.DB_PORT || 5432,
  database: process.env.DB_NAME || 'engel_und_teufel',
  user: process.env.DB_USER || 'postgres',
  password: process.env.DB_PASSWORD,
  // Für lokale Entwicklung SSL deaktivieren
  ssl: process.env.NODE_ENV === 'production' ? {
    rejectUnauthorized: false
  } : false
});

// Test der Datenbankverbindung
pool.connect((err, client, release) => {
  if (err) {
    return console.error('Fehler bei der Datenbankverbindung:', err.stack);
  }
  console.log('Erfolgreich mit der Datenbank verbunden');
  release();
});

// Hilfsfunktion für Datenbankabfragen
const query = (text, params) => pool.query(text, params);

export { pool, query };
