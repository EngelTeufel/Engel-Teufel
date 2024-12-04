import bcrypt from 'bcrypt';

const authService = {
  validatePassword: async (password) => {
    try {
      // Vergleiche das eingegebene Passwort mit dem gehashten Passwort aus der Umgebungsvariable
      const isValid = await bcrypt.compare(password, process.env.ADMIN_PASSWORD);
      return isValid;
    } catch (error) {
      console.error('Fehler bei der Passwortvalidierung:', error);
      throw error;
    }
  }
};

export default authService;
