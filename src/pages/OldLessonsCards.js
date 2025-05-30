import React from 'react';
import '../styles/LessonsCards.css';

const LessonsCards = ({ lessons = [] }) => {
  return (
    <div className="lessons-container">
      <h1 className="page-title">Educational Courses</h1>
      
      {lessons.length === 0 ? (
        <div className="no-content">
          <div className="no-content-icon">📭</div>
          <h2>No content yet</h2>
          <p>Check back later for new courses</p>
        </div>
      ) : (
        <div className="cards-grid">
          {lessons.map((lesson) => (
            <div className="lesson-card" key={lesson.id}>
              <div className="card-header">
                <h2 className="lesson-title">{lesson.title}</h2>
              </div>
              <div className="card-body">
                <p className="lesson-description">{lesson.description}</p>
              </div>
              <div className="card-footer">
                <a href={lesson.videoUrl} className="video-link" target="_blank" rel="noopener noreferrer">
                  Watch Video
                </a>
                <a href={lesson.pdfUrl} className="pdf-link" target="_blank" rel="noopener noreferrer">
                  Download PDF
                </a>
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