import 'dotenv/config';
import express from 'express';
import cors from 'cors';
import blogService from './services/blogService.js';
import authService from './services/authService.js';

const app = express();

// Middleware
app.use(cors());
app.use(express.json({ limit: '50mb' }));
app.use(express.urlencoded({ extended: true, limit: '50mb' }));

// Routen
// GET alle Blog-Beiträge
app.get('/api/posts', async (req, res) => {
  try {
    const posts = await blogService.getAllPosts();
    res.json(posts);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// GET Blog-Beiträge nach Kategorie
app.get('/api/posts/category/:category', async (req, res) => {
  try {
    const posts = await blogService.getPostsByCategory(req.params.category);
    res.json(posts);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// GET Blog-Beiträge suchen
app.get('/api/posts/search/:term', async (req, res) => {
  try {
    const posts = await blogService.searchPosts(req.params.term);
    res.json(posts);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// GET einzelnen Blog-Beitrag
app.get('/api/posts/:id', async (req, res) => {
  try {
    const post = await blogService.getPost(req.params.id);
    if (!post) return res.status(404).json({ message: 'Beitrag nicht gefunden' });
    res.json(post);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// POST neuen Blog-Beitrag
app.post('/api/posts', async (req, res) => {
  try {
    const newPost = await blogService.createPost(req.body);
    res.status(201).json(newPost);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// PUT/UPDATE Blog-Beitrag
app.put('/api/posts/:id', async (req, res) => {
  try {
    const updatedPost = await blogService.updatePost(req.params.id, req.body);
    if (!updatedPost) return res.status(404).json({ message: 'Beitrag nicht gefunden' });
    res.json(updatedPost);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// DELETE Blog-Beitrag
app.delete('/api/posts/:id', async (req, res) => {
  try {
    await blogService.deletePost(req.params.id);
    res.json({ message: 'Beitrag erfolgreich gelöscht' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Auth Route
app.post('/api/auth/login', async (req, res) => {
  try {
    const { password } = req.body;
    const isValid = await authService.validatePassword(password);
    
    if (isValid) {
      res.json({ success: true });
    } else {
      res.status(401).json({ success: false, message: 'Ungültiges Passwort' });
    }
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
});

// Error Handler
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ message: 'Ein Serverfehler ist aufgetreten' });
});

// Server starten
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server läuft auf Port ${PORT}`);
});
