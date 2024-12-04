import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { blogService } from '../../services/blogService';
import { authService } from '../../services/authService';

const Admin = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [blogPosts, setBlogPosts] = useState([]);
  const [currentPost, setCurrentPost] = useState(null);
  const [isEditing, setIsEditing] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    title: '',
    content: '',
    image: null,
    category: 'news',
    author: '',
    password: ''
  });

  const handleLogin = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setError('');
    
    try {
      const success = await authService.login(formData.password);
      if (success) {
        setIsAuthenticated(true);
        setFormData(prev => ({ ...prev, password: '' }));
      }
    } catch (error) {
      setError(error.message || 'Login fehlgeschlagen');
    } finally {
      setIsLoading(false);
    }
  };

  const checkAuth = (password) => {
    return password === 'admin123';
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setFormData(prev => ({ ...prev, image: reader.result }));
      };
      reader.readAsDataURL(file);
    }
  };

  useEffect(() => {
    if (isAuthenticated) {
      loadPosts();
    }
  }, [isAuthenticated]);

  const loadPosts = async () => {
    try {
      const posts = await blogService.getAllPosts();
      setBlogPosts(posts);
    } catch (error) {
      alert('Fehler beim Laden der Blog-Beiträge');
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setError(null);

    try {
      console.log('Submitting blog post with data:', {
        title: formData.title,
        content: formData.content,
        category: formData.category,
        author: formData.author,
        image_url: formData.image ? formData.image : null
      });

      const postData = {
        ...formData,
        image_url: formData.image // Umbenenne image zu image_url
      };
      delete postData.image; // Entferne das alte image-Feld
      delete postData.password; // Entferne das Passwort-Feld

      const response = await (isEditing ? blogService.updatePost(currentPost.id, postData) : blogService.createPost(postData));
      console.log('Server response:', response);

      if (response.id) {
        await loadPosts();
        setFormData({
          title: '',
          content: '',
          image: null,
          category: 'news',
          author: '',
          password: ''
        });
        setIsEditing(false);
        setCurrentPost(null);
        alert(isEditing ? 'Blog-Beitrag aktualisiert!' : 'Blog-Beitrag erfolgreich gespeichert!');
      } else {
        throw new Error('Keine ID in der Serverantwort');
      }
    } catch (err) {
      console.error('Error creating blog post:', err);
      setError(err.message || 'Fehler beim Speichern des Blog-Beitrags');
    } finally {
      setIsLoading(false);
    }
  };

  const handleEdit = (post) => {
    setCurrentPost(post);
    setFormData({
      title: post.title,
      content: post.content,
      category: post.category,
      author: post.author,
      image: post.image
    });
    setIsEditing(true);
  };

  const handleDelete = async (postId) => {
    if (window.confirm('Möchten Sie diesen Beitrag wirklich löschen?')) {
      try {
        await blogService.deletePost(postId);
        await loadPosts();
      } catch (error) {
        alert('Fehler beim Löschen des Blog-Beitrags');
      }
    }
  };

  const handlePreview = (content) => {
    setFormData(prev => ({ ...prev, content }));
  };

  if (!isAuthenticated) {
    return (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="min-h-screen bg-gray-100 flex items-center justify-center"
      >
        <div className="bg-white p-8 rounded-lg shadow-md w-96">
          <h2 className="text-2xl font-bold mb-6 text-center">Admin Login</h2>
          <form onSubmit={handleLogin} className="space-y-4">
            <div>
              <label className="block text-gray-700 mb-2">Passwort</label>
              <input
                type="password"
                value={formData.password}
                onChange={(e) => setFormData(prev => ({ ...prev, password: e.target.value }))}
                className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>
            {error && (
              <div className="text-red-500 text-sm mt-2">
                {error}
              </div>
            )}
            <button
              type="submit"
              disabled={isLoading}
              className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 disabled:opacity-50"
            >
              {isLoading ? 'Wird geladen...' : 'Einloggen'}
            </button>
          </form>
        </div>
      </motion.div>
    );
  }

  return (
    <div className="min-h-screen bg-dark-gray p-8">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="max-w-4xl mx-auto"
      >
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold text-cream">Blog Admin Panel</h1>
          <button
            onClick={() => setIsAuthenticated(false)}
            className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded transition-colors"
          >
            Ausloggen
          </button>
        </div>

        <div className="bg-darker-gray p-6 rounded-lg shadow-xl mb-8">
          <h2 className="text-xl font-bold text-cream mb-4">
            {isEditing ? 'Beitrag bearbeiten' : 'Neuer Blog-Beitrag'}
          </h2>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <input
                type="text"
                placeholder="Titel"
                value={formData.title}
                onChange={(e) => setFormData(prev => ({ ...prev, title: e.target.value }))}
                className="w-full p-3 rounded bg-dark-gray border border-gold/30 text-cream focus:border-gold outline-none"
              />
            </div>
            <div>
              <input
                type="text"
                placeholder="Autor"
                value={formData.author}
                onChange={(e) => setFormData(prev => ({ ...prev, author: e.target.value }))}
                className="w-full p-3 rounded bg-dark-gray border border-gold/30 text-cream focus:border-gold outline-none"
              />
            </div>
            <div>
              <select
                value={formData.category}
                onChange={(e) => setFormData(prev => ({ ...prev, category: e.target.value }))}
                className="w-full p-3 rounded bg-dark-gray border border-gold/30 text-cream focus:border-gold outline-none"
              >
                <option value="news">News</option>
                <option value="events">Events</option>
                <option value="stories">Stories</option>
              </select>
            </div>
            <div>
              <input
                type="file"
                accept="image/*"
                onChange={handleImageChange}
                className="w-full p-3 rounded bg-dark-gray border border-gold/30 text-cream focus:border-gold outline-none"
              />
              {formData.image && (
                <img 
                  src={formData.image} 
                  alt="Vorschau" 
                  className="mt-2 max-h-40 rounded"
                />
              )}
            </div>
            <div>
              <div className="flex gap-2 mb-2">
                <button
                  type="button"
                  onClick={() => handlePreview(formData.content + '**Fett**')}
                  className="px-3 py-1 bg-dark-gray text-cream rounded hover:bg-gold/20"
                >
                  Fett
                </button>
                <button
                  type="button"
                  onClick={() => handlePreview(formData.content + '*Kursiv*')}
                  className="px-3 py-1 bg-dark-gray text-cream rounded hover:bg-gold/20"
                >
                  Kursiv
                </button>
                <button
                  type="button"
                  onClick={() => handlePreview(formData.content + '\n# Überschrift')}
                  className="px-3 py-1 bg-dark-gray text-cream rounded hover:bg-gold/20"
                >
                  Überschrift
                </button>
                <button
                  type="button"
                  onClick={() => handlePreview(formData.content + '\n- Listenpunkt')}
                  className="px-3 py-1 bg-dark-gray text-cream rounded hover:bg-gold/20"
                >
                  Liste
                </button>
              </div>
              <textarea
                value={formData.content}
                onChange={(e) => setFormData(prev => ({ ...prev, content: e.target.value }))}
                className="w-full h-64 p-3 rounded bg-dark-gray border border-gold/30 text-cream focus:border-gold outline-none font-mono"
                placeholder="Inhalt (Markdown unterstützt)"
              />
            </div>
            <div className="flex gap-4">
              <button
                type="submit"
                className="bg-gold hover:bg-gold/80 text-dark-gray font-bold py-2 px-4 rounded transition-colors"
              >
                {isEditing ? 'Aktualisieren' : 'Veröffentlichen'}
              </button>
              {isEditing && (
                <button
                  type="button"
                  onClick={() => {
                    setIsEditing(false);
                    setCurrentPost(null);
                    setFormData({
                      title: '',
                      content: '',
                      image: null,
                      category: 'news',
                      author: ''
                    });
                  }}
                  className="bg-gray-500 hover:bg-gray-600 text-white py-2 px-4 rounded transition-colors"
                >
                  Abbrechen
                </button>
              )}
            </div>
          </form>
        </div>

        <div className="bg-darker-gray p-6 rounded-lg shadow-xl">
          <h2 className="text-xl font-bold text-cream mb-4">Blog-Beiträge</h2>
          <div className="space-y-4">
            {blogPosts.map(post => (
              <div key={post.id} className="border border-gold/30 p-4 rounded">
                <div className="flex items-start gap-4">
                  {post.image && (
                    <img 
                      src={post.image} 
                      alt={post.title} 
                      className="w-24 h-24 object-cover rounded"
                    />
                  )}
                  <div className="flex-1">
                    <h3 className="text-lg font-bold text-cream">{post.title}</h3>
                    <p className="text-cream/60 text-sm">
                      {new Date(post.date).toLocaleDateString('de-DE')} | {post.author} | {post.category}
                    </p>
                    <div className="mt-4 flex gap-2">
                      <button
                        onClick={() => handleEdit(post)}
                        className="bg-blue-500 hover:bg-blue-600 text-white px-3 py-1 rounded text-sm transition-colors"
                      >
                        Bearbeiten
                      </button>
                      <button
                        onClick={() => handleDelete(post.id)}
                        className="bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded text-sm transition-colors"
                      >
                        Löschen
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Admin;
