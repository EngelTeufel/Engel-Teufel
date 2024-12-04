-- Erstelle die blog_posts Tabelle
CREATE TABLE IF NOT EXISTS blog_posts (
    id SERIAL PRIMARY KEY,
    title VARCHAR(255) NOT NULL,
    content TEXT NOT NULL,
    category VARCHAR(50) NOT NULL,
    author VARCHAR(100) NOT NULL,
    image_url TEXT,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

-- Erstelle einen Index für die Kategorie für schnellere Abfragen
CREATE INDEX IF NOT EXISTS idx_blog_posts_category ON blog_posts(category);

-- Erstelle einen Index für Volltextsuche
CREATE INDEX IF NOT EXISTS idx_blog_posts_fulltext ON blog_posts 
    USING gin(to_tsvector('german', title || ' ' || content));

-- Beispiel-Blog-Beitrag
INSERT INTO blog_posts (title, content, category, author, image_url) 
VALUES (
    'Willkommen bei Engel & Teufel',
    'Herzlich willkommen auf unserem Blog! Hier finden Sie regelmäßig Updates über unsere neuesten Projekte und Fotoshootings.',
    'news',
    'Admin',
    NULL
) ON CONFLICT DO NOTHING;
