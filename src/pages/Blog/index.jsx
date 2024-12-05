import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import ReactMarkdown from 'react-markdown';
import { Helmet } from 'react-helmet';
import { blogService } from '../../services/blogService';

const Blog = () => {
  const [posts, setPosts] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    loadPosts();
  }, []);

  const loadPosts = async () => {
    try {
      const fetchedPosts = await blogService.getAllPosts();
      setPosts(fetchedPosts);
    } catch (error) {
      console.error('Fehler beim Laden der Blog-Beiträge:', error);
    }
  };

  const categories = [
    { id: 'all', name: 'Alle' },
    { id: 'news', name: 'News' },
    { id: 'events', name: 'Events' },
    { id: 'stories', name: 'Stories' }
  ];

  const filteredPosts = posts.filter(post => {
    const matchesCategory = selectedCategory === 'all' || post.category === selectedCategory;
    const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         post.content.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <>
      <Helmet>
        <title>Blog & News | Engel & Teufel</title>
        <meta name="description" content="Aktuelle News, Tipps und Insights aus der Branche. Bleiben Sie informiert mit dem Engel & Teufel Blog - Ihr Guide für OnlyFans und Webcam Erfolg." />
        <meta name="keywords" content="OnlyFans Blog, Webcam News, Content Creator Tipps, Branchennews, Marketing Insights, Erfolgsstrategien" />
        <meta property="og:title" content="Blog & News | Engel & Teufel" />
        <meta property="og:description" content="Aktuelle News, Tipps und Insights aus der Erotikbranche. Bleib auf dem Laufenden mit dem Engel & Teufel Blog." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.engelteufel.com/blog" />
        <link rel="canonical" href="https://www.engelteufel.com/blog" />
      </Helmet>
      <div className="min-h-screen bg-dark-gray py-20">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="container mx-auto px-4"
        >
          <Hero
            title="Blog & News"
            subtitle="Aktuelle Insights und Trends"
            imageSrc={heroImages.blog}
          />
          
          {/* Filter und Suche */}
          <div className="max-w-4xl mx-auto mb-12">
            <div className="flex flex-col md:flex-row gap-4 items-center justify-between bg-darker-gray p-6 rounded-lg">
              <div className="flex gap-2 overflow-x-auto pb-2 md:pb-0">
                {categories.map(category => (
                  <button
                    key={category.id}
                    onClick={() => setSelectedCategory(category.id)}
                    className={`px-4 py-2 rounded-full transition-colors ${
                      selectedCategory === category.id
                        ? 'bg-gold text-dark-gray'
                        : 'bg-dark-gray text-cream hover:bg-gold/20'
                    }`}
                  >
                    {category.name}
                  </button>
                ))}
              </div>
              <input
                type="text"
                placeholder="Suchen..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full md:w-64 p-2 rounded bg-dark-gray border border-gold/30 text-cream focus:border-gold outline-none"
              />
            </div>
          </div>

          {/* Blog Posts */}
          <div className="max-w-4xl mx-auto grid gap-8">
            {filteredPosts.map(post => (
              <motion.article
                key={post.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="bg-darker-gray rounded-lg overflow-hidden shadow-xl"
              >
                {post.image && (
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-64 object-cover"
                  />
                )}
                <div className="p-6">
                  <div className="flex items-center gap-2 text-sm text-cream/60 mb-2">
                    <span>{new Date(post.date).toLocaleDateString('de-DE')}</span>
                    <span>•</span>
                    <span>{post.author}</span>
                    <span>•</span>
                    <span className="capitalize">{post.category}</span>
                  </div>
                  <h2 className="text-2xl font-bold text-cream mb-4">{post.title}</h2>
                  <div 
                    className="text-cream/80 mb-6 prose prose-invert prose-sm max-w-none"
                  >
                    <ReactMarkdown>{post.content}</ReactMarkdown>
                  </div>
                  <Link
                    to={`/blog/${post.id}`}
                    className="inline-block bg-gold hover:bg-gold/80 text-dark-gray font-bold py-2 px-4 rounded transition-colors"
                  >
                    Weiterlesen
                  </Link>
                </div>
              </motion.article>
            ))}
          </div>

          {filteredPosts.length === 0 && (
            <div className="text-center text-cream/60 mt-12">
              Keine Blog-Beiträge gefunden.
            </div>
          )}
        </motion.div>
      </div>
    </>
  );
};

export default Blog;
