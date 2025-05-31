import React, { useState, useEffect, useCallback } from 'react';
import '../styles/CourseCurriculum.css';

const CourseCurriculum = () => {
  const [completedLectures, setCompletedLectures] = useState([]);
  const [isLoaded, setIsLoaded] = useState(false);

  // Load from localStorage on component mount
  useEffect(() => {
    const loadProgress = () => {
      try {
        const savedProgress = localStorage.getItem('completedLectures');
        if (savedProgress) {
          const parsed = JSON.parse(savedProgress);
          if (Array.isArray(parsed)) {
            setCompletedLectures(parsed);
          }
        }
      } catch (error) {
        console.error('Error loading progress:', error);
      } finally {
        setIsLoaded(true);
      }
    };

    loadProgress();
    
    // Add event listener for storage changes
    const handleStorageChange = (e) => {
      if (e.key === 'completedLectures') {
        loadProgress();
      }
    };

    window.addEventListener('storage', handleStorageChange);
    return () => window.removeEventListener('storage', handleStorageChange);
  }, []);

  // Save to localStorage when completedLectures changes
  useEffect(() => {
    if (isLoaded) {
      localStorage.setItem('completedLectures', JSON.stringify(completedLectures));
    }
  }, [completedLectures, isLoaded]);

  const toggleLectureCompletion = useCallback((lectureId) => {
    setCompletedLectures(prev => {
      const newState = prev.includes(lectureId)
        ? prev.filter(id => id !== lectureId)
        : [...prev, lectureId];
      return newState;
    });
  }, []);

  const curriculumSections = [
    {
      title: "Introduction & Big Data Basics",
      lectures: [
        { id: 'lec1', title: "Lecture 1: Intro to Software & Big Data" },
        { id: 'lec2', title: "Lecture 2: NoSQL Types - MongoDB with Python" }
      ]
    },
    {
      title: "Software Engineering & Architecture",
      lectures: [
        { id: 'lec3', title: "Lecture 3: Clean Code + SOLID Principles" },
        { id: 'lec4', title: "Lecture 4: Microservices Fundamentals" },
        { id: 'lec5', title: "Lecture 5: Microservices Design Patterns" },
        { id: 'lec6', title: "Lecture 6: Microservices Design Patterns - Part 2" }
      ]
    },
    {
      title: "Modeling & OOP Concepts",
      lectures: [
        { id: 'lec7', title: "Lecture 7: OCL + UML Modeling" },
        { id: 'lec8', title: "Lecture 8: AOP + OOP Principles" }
      ]
    },
    {
      title: "Testing & Frontend Development",
      lectures: [
        { id: 'lec9', title: "Lecture 9: Software Testing (Manual Testing)" },
        { id: 'lec10', title: "Lecture 10: React.js - Next.js & API Integration" }
      ]
    },
    {
      title: "Advanced Topics",
      lectures: [
        { id: 'lec11', title: "Lecture 11: Classification & Regression" }
      ]
    }
  ];

  if (!isLoaded) {
    return (
      <div className="curriculum-container">
        <div className="loading-spinner">Loading...</div>
      </div>
    );
  }

  const totalLectures = 11;
  const completedCount = completedLectures.length;
  const completionPercentage = Math.round((completedCount / totalLectures) * 100);

  return (
    <div className="curriculum-container">
      <h1 className="course-title">Software Engineering Master Course</h1>
      <p className="course-description">Complete curriculum with progress tracking</p>
      
      <div className="progress-container">
        <div className="progress-bar">
          <div 
            className="progress-fill"
            style={{
              width: `${completionPercentage}%`,
              transition: 'width 0.4s ease'
            }}
          />
        </div>
        <div className="progress-info">
          <span className="progress-percentage">{completionPercentage}%</span>
          <span className="progress-count">
            ({completedCount} of {totalLectures} completed)
          </span>
        </div>
      </div>

      <div className="sections-container">
        {curriculumSections.map((section, sectionIndex) => (
          <div key={`section-${sectionIndex}`} className="curriculum-section">
            <h2 className="section-title">{section.title}</h2>
            <div className="lectures-list">
              {section.lectures.map((lecture) => (
                <div 
                  key={lecture.id}
                  className={`lecture-item ${completedLectures.includes(lecture.id) ? 'completed' : ''}`}
                  onClick={() => toggleLectureCompletion(lecture.id)}
                >
                  <div className="lecture-checkbox">
                    <input
                      type="checkbox"
                      checked={completedLectures.includes(lecture.id)}
                      readOnly
                    />
                    <span className="custom-checkbox"></span>
                  </div>
                  <div className="lecture-details">
                    <span className="lecture-title">{lecture.title}</span>
                    <span className="lecture-status">
                      {completedLectures.includes(lecture.id) ? '✓ Completed' : '○ Pending'}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CourseCurriculum;