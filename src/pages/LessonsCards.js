import React, { useState } from 'react';
import '../styles/LessonsCards.css';

const LessonsCards = ({ lessons = [ {
    id: 1,
    title: "Intro to software & big data ",
    description: "An introduction to software & big data",
    videoUrl: "https://youtu.be/QJobLJbCTZ4",
     pdfUrl: "PDFViewerPage"
  },] }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filterOption, setFilterOption] = useState('all'); 

  const filteredLessons = lessons.filter(lesson => {
    const matchesSearch = lesson.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
                         lesson.description.toLowerCase().includes(searchTerm.toLowerCase());
    
    let matchesFilter = true;
    if (filterOption === 'withVideo') {
      matchesFilter = lesson.videoUrl && lesson.videoUrl !== '#';
    } else if (filterOption === 'withPDF') {
      matchesFilter = lesson.pdfUrl && lesson.pdfUrl !== '#';
    }

    return matchesSearch && matchesFilter;
  });

  return (
    <div className="lessons-container">
      <h1 className="page-title">Educational Courses</h1>
      
      <div className="search-filter-container">
        <div className="search-box">
          <input
            type="text"
            placeholder="Search courses..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="search-input"
          />
          <span className="search-icon">🔍</span>
        </div>
        
        <div className="filter-options">
        </div>
      </div>

      {filteredLessons.length === 0 ? (
        <div className="no-content">
          <div className="no-content-icon">📭</div>
          <h2>No matching content found</h2>
          <p>Try adjusting your search or filters</p>
        </div>
      ) : (
        <div className="cards-grid">
          {filteredLessons.map((lesson) => (
            <div className="lesson-card" key={lesson.id}>
              <div className="card-header">
                <h2 className="lesson-title">{lesson.title}</h2>
              </div>
              <div className="card-body">
                <p className="lesson-description">{lesson.description}</p>
              </div>
              <div className="card-footer">
                {lesson.videoUrl && lesson.videoUrl !== '#' ? (
                  <a href={lesson.videoUrl} className="video-link" target="_blank" rel="noopener noreferrer">
                    Watch Video
                  </a>
                ) : (
                  <span className="disabled-link">Video Unavailable</span>
                )}
                {lesson.pdfUrl && lesson.pdfUrl !== '#' ? (
                  <a href={lesson.pdfUrl} className="pdf-link" target="_blank" rel="noopener noreferrer">
                    Download PDF
                  </a>
                ) : (
                  <span className="disabled-link">PDF Unavailable</span>
                )}
              </div>
              <div className="card-corner"></div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default LessonsCards;