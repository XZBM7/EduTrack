import React, { useState, useEffect } from 'react';
import '../styles/NewsPage.css';

const NewsPage = () => {
  const [news, setNews] = useState([
    {
      id: 1,
      title: "The start of course",
      content: "The course will start from 2025-06-15 to 2025-07-15, with 3 sessions per week, held online or offline via YouTube",
      date: "2025-5-31",
      author: "XZ",
      isImportant: true
    },
    // {
    //   id: 2,
    //   title: "Scholarship Applications Open",
    //   content: "Applications for the fall semester scholarships are now being accepted until August 30th.",
    //   date: "2023-08-15",
    //   author: "Financial Aid Department",
    //   isImportant: false
    // },
    // {
    //   id: 3,
    //   title: "New Library Hours",
    //   content: "Starting next week, the library will extend its opening hours until 10 PM on weekdays.",
    //   date: "2023-08-10",
    //   author: "Library Services",
    //   isImportant: false
    // }
  ]);

  const [isLoading, setIsLoading] = useState(false);

  const sortedNews = [...news].sort((a, b) => new Date(b.date) - new Date(a.date));

  return (
    <div className="news-page">
      <header className="news-header">
        <h1>Latest News & Announcements</h1>
        <p>Important updates and messages for students</p>
      </header>

      {isLoading ? (
        <div className="loading-spinner">Loading news...</div>
      ) : (
        <div className="news-container">
          {sortedNews.length > 0 ? (
            sortedNews.map(item => (
              <article 
                key={item.id} 
                className={`news-card ${item.isImportant ? 'important' : ''}`}
              >
                <div className="news-card-header">
                  <h2>{item.title}</h2>
                  {item.isImportant && <span className="important-badge">IMPORTANT</span>}
                </div>
                <p className="news-content">{item.content}</p>
                <div className="news-meta">
                  <span className="news-date">{new Date(item.date).toLocaleDateString('en-US', { 
                    year: 'numeric', 
                    month: 'long', 
                    day: 'numeric' 
                  })}</span>
                  <span className="news-author">Posted by: {item.author}</span>
                </div>
              </article>
            ))
          ) : (
            <div className="no-news">
              <img src="/images/no-news.svg" alt="No news" />
              <h3>No news available at the moment</h3>
              <p>Check back later for updates</p>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default NewsPage;