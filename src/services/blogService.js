const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000/api';

export const blogService = {
  // Alle Blog-Beiträge abrufen
  getAllPosts: async () => {
    try {
      const response = await fetch(`${API_URL}/posts`);
      if (!response.ok) {
        const error = await response.json();
        throw new Error(error.message || 'Netzwerkfehler');
      }
      return await response.json();
    } catch (error) {
      console.error('Fehler beim Abrufen der Posts:', error);
      throw error;
    }
  },

  // Neuen Blog-Beitrag erstellen
  createPost: async (postData) => {
    try {
      const response = await fetch(`${API_URL}/posts`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(postData),
      });
      
      if (!response.ok) {
        const error = await response.json();
        throw new Error(error.message || 'Netzwerkfehler');
      }
      
      return await response.json();
    } catch (error) {
      console.error('Fehler beim Erstellen des Posts:', error);
      throw error;
    }
  },

  // Blog-Beitrag aktualisieren
  updatePost: async (id, postData) => {
    try {
      const response = await fetch(`${API_URL}/posts/${id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(postData),
      });
      
      if (!response.ok) {
        const error = await response.json();
        throw new Error(error.message || 'Netzwerkfehler');
      }
      
      return await response.json();
    } catch (error) {
      console.error('Fehler beim Aktualisieren des Posts:', error);
      throw error;
    }
  },

  // Blog-Beitrag löschen
  deletePost: async (id) => {
    try {
      const response = await fetch(`${API_URL}/posts/${id}`, {
        method: 'DELETE',
      });
      
      if (!response.ok) {
        const error = await response.json();
        throw new Error(error.message || 'Netzwerkfehler');
      }
      
      return await response.json();
    } catch (error) {
      console.error('Fehler beim Löschen des Posts:', error);
      throw error;
    }
  },

  // Blog-Beiträge nach Kategorie filtern
  getPostsByCategory: async (category) => {
    try {
      const response = await fetch(`${API_URL}/posts/category/${category}`);
      if (!response.ok) {
        const error = await response.json();
        throw new Error(error.message || 'Netzwerkfehler');
      }
      return await response.json();
    } catch (error) {
      console.error('Fehler beim Filtern der Posts:', error);
      throw error;
    }
  },

  // Einzelnen Blog-Beitrag abrufen
  getPost: async (id) => {
    try {
      const response = await fetch(`${API_URL}/posts/${id}`);
      if (!response.ok) {
        const error = await response.json();
        throw new Error(error.message || 'Netzwerkfehler');
      }
      return await response.json();
    } catch (error) {
      console.error('Fehler beim Abrufen des Posts:', error);
      throw error;
    }
  },
};
