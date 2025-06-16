import React, { useState } from 'react';
import '../styles/OldLessonsCards.css';

const OldLessonsCards = ({ lessons = [
  {
    id: 1,
    title: "Intro ",
    description: "An introduction to software",
    videoUrl: "https://drive.google.com/drive/folders/1HUYmNPJIwyckTfgh8Co1PHsEWkSpyYqr?usp=drive_link",
    // pdfUrl: "#"
  },
  {
    id: 2,
    title: "What is Software Engineering? and UI & UX",
    description: "Overview of software engineering and its importance and UI & UX",
    videoUrl: "https://drive.google.com/file/d/1J6hT6njqyS1_xy3p3fxP-3U6i30VmjNh/view?usp=drive_link",
    pdfUrl: "https://drive.google.com/file/d/1J8SfsdgebQZipfON0gm6RCl7r9PsbIM1/view?usp=drive_link"
  },
  {
    id: 3,
    title: "Steps of Software Engineering Part 2",
    description: "Key steps to plan, design, and launch a software system including agile, requirements, and more.",
    videoUrl: "https://drive.google.com/file/d/1K3Yv1uSC6yBwCM8BiWWU_1if2HpIg3x0/view?usp=drive_link",
    pdfUrl: "https://drive.google.com/file/d/1K4W8PUUSZgMwsBOFbWG6MlG7ZQpPz7h7/view?usp=drive_link"
  },
  {
    id: 4,
    title: "UML",
    description: "Learn how to model user interactions and activities & Visualize system behavior over time and interaction between components.",
    // videoUrl: "#",
    pdfUrl: "https://drive.google.com/file/d/1KXuXlgUlrzzatL3dngy08crZOvXK2Zpi/view?usp=drive_link"
  },
  {
    id: 5,
    title: "Intro to Testing & Design Patterns",
    description: "Basics of software testing and its types and good design practices",
    videoUrl: "https://drive.google.com/file/d/1MafHc-nc5iz_6saFrQTPqW6msrhwATwK/view?usp=drive_link",
    pdfUrl: "https://drive.google.com/file/d/1NCPS6SrUrtIpjsLhD3RZyMZkcEEGIBZ_/view?usp=drive_link"
  },
  {
    id: 6,
    title: "SOLID Principles & Package Diagrams",
    description: "Understand reusable solutions and group related classes into packages.",
    videoUrl: "https://drive.google.com/file/d/1McZZ1t4uHSbeAW-D3uTlNA8Nt68RmsK4/view?usp=drive_link",
    pdfUrl: "https://drive.google.com/file/d/1NCTDJVxCADUHnUqCyJ6BO2fhyrPfkgST/view?usp=drive_link"
  },
  {
    id: 7,
    title: "Intro to Databases",
    description: "Foundations of databases and their uses.",
    videoUrl: "https://drive.google.com/file/d/1McZZ1t4uHSbeAW-D3uTlNA8Nt68RmsK4/view?usp=drive_link",
    pdfUrl: "https://drive.google.com/file/d/1NCTDJVxCADUHnUqCyJ6BO2fhyrPfkgST/view?usp=drive_link"
  },
  {
    id: 8,
    title: "Database Basics: SQL",
    description: "Learn how to interact with databases using SQL.",
    videoUrl: "https://drive.google.com/file/d/1McZZ1t4uHSbeAW-D3uTlNA8Nt68RmsK4/view?usp=drive_link",
    pdfUrl: "https://drive.google.com/file/d/1NCTDJVxCADUHnUqCyJ6BO2fhyrPfkgST/view?usp=drive_link"
  },
  {
    id: 9,
    title: "Advanced SQL: Part 1",
    description: "DDL",
    videoUrl: "https://drive.google.com/file/d/1Mu8dWDoNCu9QySENuPMIeF3AMTEv3yPT/view?usp=drive_link",
    pdfUrl: "https://drive.google.com/file/d/1NOv0usXPGp62QMLpXuf3uKZlVjvaLM-F/view?usp=drive_link"
  },
  {
    id: 10,
    title: "Advanced SQL: Part 2",
    description: "DML + DQL",
    videoUrl: "https://drive.google.com/file/d/19hyUG4ku0Tnsa7-AYXiEyQc8iSrNa3fR/view?usp=drive_link",
    pdfUrl: "https://drive.google.com/file/d/1NmRKjp7AFUTmBSG3nn4E-X_TPrpqZ-Yg/view?usp=drive_link"
  },
  {
    id: 11,
    title: "Advanced SQL: Part 3",
    description: "Aggregation",
    videoUrl: "https://drive.google.com/file/d/1t9lpDZYTa1_qd1P6O_3hdBZ05YIrcC4v/view?usp=drive_link",
    pdfUrl: "https://drive.google.com/file/d/14ptgLUitGkAJcNMXRrtSwAhZiiuAvcI_/view?usp=drive_link"
  },
  {
    id: 12,
    title: "Advanced SQL: Part 4",
    description: "build The database",
    videoUrl: "https://drive.google.com/file/d/12glipJDQUHcV7MepvaBxmsWcj9Ghxhsf/view?usp=drive_link",
    pdfUrl: "https://drive.google.com/file/d/1S9WnSHZj1E4LfYhOBaBalPOM6MJ7wws1/view?usp=drive_link"
  }
] }) => {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredLessons = lessons.filter(lesson => {
    const searchLower = searchTerm.toLowerCase();
    return (
      lesson.title.toLowerCase().includes(searchLower) ||
      lesson.description.toLowerCase().includes(searchLower)
    );
  });

  return (
    <div className="lessons-container">
      <h1 className="page-title">Educational Courses Old software - 1</h1>
      
      <div className="search-container">
        <input
          type="text"
          placeholder="Search courses..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="search-input"
        />
        <span className="search-icon">🔍</span>
      </div>

      {filteredLessons.length === 0 ? (
        <div className="no-content">
          <div className="no-content-icon">📭</div>
          <h2>No matching content found</h2>
          <p>Try a different search term</p>
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

export default OldLessonsCards;