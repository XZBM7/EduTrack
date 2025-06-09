import React, { useState } from 'react';
import '../styles/NewsPage.css';

const NewsPage = () => {
  const [news, setNews] = useState([
    {
      id: 1,
      title: "The start of course",
      content: "The course will start from 2025-06-15 to 2025-07-15, with 3 sessions per week, held online or offline via YouTube",
      date: "2025-5-31",
      author: "XZ",
      isImportant: true,
      category: "announcement"
    },
     {
     id: 2,
  title: "The New partner Hashira",
  content: `جاهزين لكامب جديد؟😆
نقدم لكم Advanced Software Engineering Camp
الكامب اللي هيركز على مواضيع متقدمه من ال Software Engineering واللي منها:
🔻Microservices
🔻OCL & UML
🔻Principles (OOP & AOP)
🔻Testing
🔻Clean Code
🔻Big Data & NoSQL

4 اسابيع من الاستفاده والتعلم والتطبيق على ال Software Engineering
لينك التقديم👇(التقديم مفتوح لحد يوم 14 June )
https://forms.gle/EwLNUKRJwzneMJyd6`,
  date: "2025-06-10",
  author: "XZ",
  isImportant: true,
  category: "general"
},
    // {
    //   id: 3,
    //   title: "New Library Hours",
    //   content: "Starting next week, the library will extend its opening hours until 10 PM on weekdays.",
    //   date: "2023-08-10",
    //   author: "Library Services",
    //   isImportant: false,
    //   category: "general"
    // }
  ]);

  const [searchTerm, setSearchTerm] = useState('');
  const [filter, setFilter] = useState('all'); // 'all', 'important', 'announcement', 'general', 'scholarship'
  const [sortBy, setSortBy] = useState('newest'); // 'newest', 'oldest'

  const filteredNews = news.filter(item => {
    const matchesSearch = item.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
                         item.content.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         item.author.toLowerCase().includes(searchTerm.toLowerCase());
    
    const matchesFilter = filter === 'all' || 
                         (filter === 'important' && item.isImportant) || 
                         item.category === filter;

    return matchesSearch && matchesFilter;
  });

  const sortedNews = [...filteredNews].sort((a, b) => {
    const dateA = new Date(a.date);
    const dateB = new Date(b.date);
    return sortBy === 'newest' ? dateB - dateA : dateA - dateB;
  });

  return (
    <div className="news-page">
      <header className="news-header">
        <h1>Latest News & Announcements</h1>
        <p>Important updates and messages for students</p>
      </header>

      {/* Search and Filter Bar */}
      <div className="news-controls">
        <div className="search-container">
          <input
            type="text"
            placeholder="Search news..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="search-input"
          />
          <span className="search-icon">🔍</span>
        </div>

        <div className="filter-controls">
          <div className="filter-group">
            <label>Filter by:</label>
            <select 
              value={filter} 
              onChange={(e) => setFilter(e.target.value)}
              className="filter-select"
            >
              <option value="all">All News</option>
              <option value="important">Important Only</option>
              <option value="announcement">Announcements</option>
              <option value="general">General News</option>
              <option value="scholarship">Scholarships</option>
            </select>
          </div>

          <div className="filter-group">
            <label>Sort by:</label>
            <select 
              value={sortBy} 
              onChange={(e) => setSortBy(e.target.value)}
              className="filter-select"
            >
              <option value="newest">Newest First</option>
              <option value="oldest">Oldest First</option>
            </select>
          </div>
        </div>
      </div>

      <div className="news-container">
        {sortedNews.length > 0 ? (
          sortedNews.map(item => (
            <article 
              key={item.id} 
              className={`news-card ${item.isImportant ? 'important' : ''}`}
            >
              <div className="news-card-header">
                <h2>{item.title}</h2>
                <div className="news-badges">
                  {item.isImportant && <span className="important-badge">IMPORTANT</span>}
                  <span className="category-badge">{item.category}</span>
                </div>
              </div>
              <p className="news-content">{item.content}</p>
              <div className="news-meta">
                <span className="news-date">
                  {new Date(item.date).toLocaleDateString('en-US', { 
                    year: 'numeric', 
                    month: 'long', 
                    day: 'numeric' 
                  })}
                </span>
                <span className="news-author">Posted by: {item.author}</span>
              </div>
            </article>
          ))
        ) : (
          <div className="no-news">
            <div className="no-news-icon">📰</div>
            <h3>No news found</h3>
            <p>Try adjusting your search or filters</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default NewsPage;