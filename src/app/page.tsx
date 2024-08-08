"use client";

import { useState, useEffect } from 'react';
import { fetchArticles, Article } from '../lib/api';

const Home = () => {
  const [articles, setArticles] = useState<Article[]>([]);
  const [category, setCategory] = useState('home'); // Default category
  const [searchTerm, setSearchTerm] = useState(''); // Search term
  const [page, setPage] = useState(1); // Page number
  const [loading, setLoading] = useState(false); // Loading state

  useEffect(() => {
    const getArticles = async () => {
      setLoading(true);
      const data = await fetchArticles(category, searchTerm, page);
      console.log(data); // Log the data to verify
      setArticles((prevArticles) => [...prevArticles, ...data]);
      setLoading(false);
    };
    getArticles();
  }, [category, searchTerm, page]);

  const handleCategoryChange = (newCategory: string) => {
    setCategory(newCategory);
    setSearchTerm(''); // Clear search term when category changes
    setPage(1); // Reset page number
    setArticles([]); // Clear articles
  };

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
    setPage(1); // Reset page number
    setArticles([]); // Clear articles
  };

  const handleLoadMore = () => {
    setPage((prevPage) => prevPage + 1);
  };

  const placeholderImage = "https://via.placeholder.com/350x200?text=No+Image";

  return (
    <div className="container">
      <h1>NewsFlex</h1>
      <div className="navbar">
        <a href="#" onClick={() => handleCategoryChange('home')}>Home</a>
        <a href="#" onClick={() => handleCategoryChange('technology')}>Technology</a>
        <a href="#" onClick={() => handleCategoryChange('sports')}>Sports</a>
        <a href="#" onClick={() => handleCategoryChange('politics')}>Politics</a>
        <a href="#" onClick={() => handleCategoryChange('business')}>Business</a>
        <a href="#" onClick={() => handleCategoryChange('entertainment')}>Entertainment</a>
        <a href="#" onClick={() => handleCategoryChange('health')}>Health</a>
        <a href="#" onClick={() => handleCategoryChange('science')}>Science</a>
        <a href="#" onClick={() => handleCategoryChange('world')}>World</a>
        <div className="search-container">
          <i className="fas fa-search"></i>
          <input
            type="text"
            placeholder="Search..."
            value={searchTerm}
            onChange={handleSearchChange}
          />
        </div>
      </div>
      <div className="articles">
        {articles.length === 0 ? (
          <p>No articles available</p>
        ) : (
          articles.map((article) => (
            <a 
              href={article.url} 
              target="_blank" 
              rel="noopener noreferrer" 
              className={`article ${!article.image ? 'no-image' : ''}`} 
              key={article.id}
            >
              {article.image ? (
                <img src={article.image} alt={article.title} />
              ) : (
                <div className="no-image-placeholder">No Image</div>
              )}
              <div className="article-content">
                <h2>{article.title}</h2>
                <p>{article.description || 'No description available'}</p>
              </div>
            </a>
          ))
        )}
      </div>
      <div style={{ textAlign: 'center', marginTop: '20px' }}>
        {loading ? (
          <p>Loading...</p>
        ) : (
          <button onClick={handleLoadMore} style={{ padding: '10px 20px', fontSize: '16px', cursor: 'pointer' }}>
            Load More
          </button>
        )}
      </div>
      <footer className="footer">
        <p>&copy; 2024 NewsFlex. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Home;
