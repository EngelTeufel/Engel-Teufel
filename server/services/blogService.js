import { query } from '../config/db-config.js';
import emailService from './emailService.js';

const blogService = {
  // Alle Blog-Beiträge abrufen
  getAllPosts: async () => {
    try {
      const result = await query(
        'SELECT * FROM blog_posts ORDER BY created_at DESC'
      );
      return result.rows;
    } catch (error) {
      console.error('Fehler beim Abrufen der Posts:', error);
      throw error;
    }
  },

  // Blog-Beiträge nach Kategorie filtern
  getPostsByCategory: async (category) => {
    try {
      const result = await query(
        'SELECT * FROM blog_posts WHERE category = $1 ORDER BY created_at DESC',
        [category]
      );
      return result.rows;
    } catch (error) {
      console.error('Fehler beim Filtern der Posts:', error);
      throw error;
    }
  },

  // Einzelnen Blog-Beitrag abrufen
  getPost: async (id) => {
    try {
      const result = await query(
        'SELECT * FROM blog_posts WHERE id = $1',
        [id]
      );
      return result.rows[0];
    } catch (error) {
      console.error('Fehler beim Abrufen des Posts:', error);
      throw error;
    }
  },

  // Blog-Beitrag erstellen
  createPost: async (postData) => {
    const { title, content, category, author, image_url } = postData;
    try {
      console.log('Erstelle neuen Post:', postData);
      const result = await query(
        `INSERT INTO blog_posts (title, content, category, author, image_url)
         VALUES ($1, $2, $3, $4, $5)
         RETURNING *`,
        [title, content, category, author, image_url]
      );
      
      const newPost = result.rows[0];
      console.log('Post erfolgreich erstellt:', newPost);

      // Sende E-Mail-Benachrichtigung an Admin
      try {
        await emailService.sendNewPostNotification(
          newPost,
          process.env.ADMIN_EMAIL
        );
        console.log('Benachrichtigungs-E-Mail gesendet');
      } catch (emailError) {
        console.error('Fehler beim Senden der E-Mail:', emailError);
        // Wir werfen den Fehler nicht, da der Post trotzdem erstellt wurde
      }

      return newPost;
    } catch (error) {
      console.error('Fehler beim Erstellen des Posts:', error);
      throw error;
    }
  },

  // Blog-Beitrag aktualisieren
  updatePost: async (id, postData) => {
    const { title, content, category, author, image_url } = postData;
    try {
      console.log('Aktualisiere Post:', id, postData);
      const result = await query(
        `UPDATE blog_posts 
         SET title = $1, content = $2, category = $3, author = $4, image_url = $5
         WHERE id = $6
         RETURNING *`,
        [title, content, category, author, image_url, id]
      );
      console.log('Post erfolgreich aktualisiert:', result.rows[0]);
      return result.rows[0];
    } catch (error) {
      console.error('Fehler beim Aktualisieren des Posts:', error);
      throw error;
    }
  },

  // Blog-Beitrag löschen
  deletePost: async (id) => {
    try {
      console.log('Lösche Post:', id);
      await query('DELETE FROM blog_posts WHERE id = $1', [id]);
      console.log('Post erfolgreich gelöscht');
      return { message: 'Post erfolgreich gelöscht' };
    } catch (error) {
      console.error('Fehler beim Löschen des Posts:', error);
      throw error;
    }
  },

  // Volltextsuche in Blog-Beiträgen
  searchPosts: async (searchTerm) => {
    try {
      const result = await query(
        `SELECT *, 
         ts_rank(to_tsvector('german', title || ' ' || content), 
                plainto_tsquery('german', $1)) AS rank
         FROM blog_posts
         WHERE to_tsvector('german', title || ' ' || content) @@ 
               plainto_tsquery('german', $1)
         ORDER BY rank DESC`,
        [searchTerm]
      );
      return result.rows;
    } catch (error) {
      console.error('Fehler bei der Suche:', error);
      throw error;
    }
  }
};

export default blogService;
