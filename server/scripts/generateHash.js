import bcrypt from 'bcrypt';

const password = 'admin123'; // Das gewünschte Admin-Passwort
const saltRounds = 10;

bcrypt.hash(password, saltRounds, (err, hash) => {
  if (err) {
    console.error('Fehler beim Hashen:', err);
    return;
  }
  console.log('Gehashtes Passwort für .env ADMIN_PASSWORD:');
  console.log(hash);
});
