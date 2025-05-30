import React from 'react';
import { Link } from 'react-router-dom';
import { FaHome, FaBook, FaCalendarAlt, FaEnvelope, FaUser, FaSearch } from 'react-icons/fa';
import '../styles/Navbar-footer.css';



const Navbar = () => {
  return (
    <nav className="dashboard-navbar">
      <div className="navbar-brand">
        <Link to="/" className="logo">
          <span className="logo-icon">🎓</span>
          <span className="logo-text">EduTrack</span>
        </Link>
      </div>
      
      <div className="navbar-search">
        <FaSearch className="search-icon" />
        <input type="text" placeholder="Search courses, materials..." />
      </div>
      
      <div className="navbar-links">
        <Link to="/dashboard" className="nav-link active">
          <FaHome className="nav-icon" />
          <span>Dashboard</span>
        </Link>
        <Link to="/CourseCurriculum" className="nav-link">
          <FaBook className="nav-icon" />
          <span>Courses</span>
        </Link>
        <Link to="/SessionDashboard" className="nav-link">
          <FaCalendarAlt className="nav-icon" />
          <span>Calendar</span>
        </Link>
        <Link to="/Assignments" className="nav-link">
          <FaCalendarAlt className="nav-icon" />
          <span>Assignments</span>
          <span className="notification-badge">0</span>
        </Link>
        <Link to="/NewsPage" className="nav-link">
          <FaEnvelope className="nav-icon" />
          <span>News</span>
          <span className="notification-badge">0</span>
        </Link>
      </div>
      
      <div className="navbar-profile">
        <div className="profile-dropdown">
          <div className="profile-avatar">
            <span>S</span>
          </div>
          <div className="profile-info">
            <span className="profile-name">Student User</span>
            <span className="profile-role">Computer Science</span>
          </div>
          <FaUser className="dropdown-icon" />
        </div>
      </div>
    </nav>
  );
};
export default Navbar; 