import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import {
  FaHome, FaFileAlt, FaComments, FaUser, FaHeart,
  FaSearch, FaEnvelope, FaCalendarAlt, FaBookmark,
  FaTasks, FaVideo, FaBook, FaClock, FaHistory, FaChalkboardTeacher
} from 'react-icons/fa';
import { RingLoader } from 'react-spinners';
import '../styles/StudentDashboard.css';

const StudentDashboard = () => {
  const [stats, setStats] = useState(null);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchStats = async () => {
      setTimeout(() => {
        setStats({
          totalLectures: 11,
          completedLectures: 1,
          remainingLectures: 11,
          canceledLectures: 0,
          upcomingLectures: 2,
          assignmentsDue: 3,
          assignmentsPending: 0
        });
        setLoading(false);
      }, 1000);
    };
    fetchStats();
  }, []);

  if (loading) {
    return (
      <div className="loading-container">
        <RingLoader color="#36D7B7" size={150} />
      </div>
    );
  }

  return (
    <div className="student-dashboard">
      <div className="dashboard-header">
        <div className="welcome-section">
          <h1>Welcome back, Student</h1>
          <p className="subtitle">Course Dashboard - Track your learning progress</p>
          <div className="date-badge">
            <FaCalendarAlt className="calendar-icon" />
            {new Date().toLocaleDateString('en-US', {
              weekday: 'long', month: 'long', day: 'numeric'
            })}
          </div>
        </div>
        <div className="user-avatar">
          <div className="avatar-circle">
            {'S'}
          </div>
        </div>
      </div>

      <div className="stats-cards">
        <div className="stat-card primary">
          <div className="stat-icon"><FaChalkboardTeacher /></div>
          <div className="stat-content">
            <h3>Lectures Summary</h3>
            <p className="stat-value">{stats.completedLectures}/{stats.totalLectures} completed</p>
            <p className="stat-change">{stats.remainingLectures} remaining • {stats.canceledLectures} canceled</p>
          </div>
        </div>

        <div className="stat-card secondary">
          <div className="stat-icon"><FaClock /></div>
          <div className="stat-content">
            <h3>Upcoming Lectures</h3>
            <p className="stat-value">{stats.upcomingLectures} this week</p>
            <p className="stat-change">Next:  6/17/2025</p>
          </div>
        </div>

        <div className="stat-card accent">
          <div className="stat-icon"><FaTasks /></div>
          <div className="stat-content">
            <h3>Assignments</h3>
            <p className="stat-value">{stats.assignmentsDue} pending</p>
            <p className="stat-change">{stats.assignmentsPending} assignments coming</p>
          </div>
        </div>
      </div>

      <div className="dashboard-sections">
        <section className="current-course card">
          <div className="section-header">
            <h2>Current Course: Software</h2>
            <Link to="/SessionDashboard" className="view-all">Course Details <span className="arrow">→</span></Link>
          </div>
          <div className="progress-container">
            <div className="progress-bar">
              <div 
                className="progress-fill" 
                style={{ width: `${(stats.completedLectures/stats.totalLectures)*100}%` }}
              ></div>
            </div>
            <div className="progress-text">
              {Math.round((stats.completedLectures/stats.totalLectures)*100)}% completed
            </div>
          </div>
          <div className="course-syllabus">
            <h4>Current Topic: Big data & NO SQL</h4>
            <p>Next: 6/17/2025</p>
          </div>
        </section>

        <section className="recent-materials card">
          <div className="section-header">
            <h2>Recent Materials</h2>
            <Link to="/LessonsCards" className="view-all">View All <span className="arrow">→</span></Link>
          </div>
          <div className="materials-list">
            <div className="material-item">
              <FaFileAlt className="material-icon" />
              <span>Lecture 10 Slides (PDF)</span>
            </div>
            <div className="material-item">
              <FaVideo className="material-icon" />
              <span>Component Lifecycle Video</span>
            </div>
            <div className="material-item">
              <FaTasks className="material-icon" />
              <span>Assignment 3 active</span>
            </div>
          </div>
        </section>
      </div>

      <div className="quick-actions">
        <h2>Quick Actions</h2>
        <div className="actions-grid">
          <Link to="/Assignments" className="action-card">
            <div className="action-icon assignments"><FaTasks /></div>
            <h3>Assignments</h3>
            <p>View and submit your work</p>
          </Link>

          <Link to="/LessonsCards" className="action-card">
            <div className="action-icon lectures"><FaVideo /></div>
            <h3>Lecture Videos</h3>
            <p>Watch recorded lectures</p>
          </Link>

          <Link to="/PDFViewerPage" className="action-card">
            <div className="action-icon slides"><FaFileAlt /></div>
            <h3>Course Slides</h3>
            <p>Download presentation materials</p>
          </Link>

          <Link to="/CourseCurriculum" className="action-card">
            <div className="action-icon syllabus"><FaBook /></div>
            <h3>Course Syllabus</h3>
            <p>View the complete curriculum</p>
          </Link>

          <Link to="/OldLessonsCards" className="action-card">
            <div className="action-icon history"><FaHistory /></div>
            <h3>Previous Courses</h3>
            <p>Access archived materials</p>
          </Link>

          <Link to="/ContactPage" className="action-card">
            <div className="action-icon contact"><FaEnvelope /></div>
            <h3>Contact Instructor</h3>
            <p>Ask questions or get help</p>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default StudentDashboard;