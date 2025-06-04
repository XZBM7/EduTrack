import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FaHome, FaBook, FaCalendarAlt, FaEnvelope, FaUser, FaSearch } from 'react-icons/fa';
import '../styles/Navbar-footer.css';

const Navbar = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [showResults, setShowResults] = useState(false);
  const navigate = useNavigate();

  // Sample data to search through (you can replace with your actual data)
  const searchData = [
    { id: 1, title: 'Introduction to Programming', type: 'course', path: '/CourseCurriculum' },
    { id: 2, title: 'Software Engineering Basics', type: 'course', path: '/CourseCurriculum' },
    { id: 3, title: 'Weekly Assignment', type: 'assignment', path: '/Assignments' },
    { id: 4, title: 'Upcoming Exam', type: 'event', path: '/SessionDashboard' },
    { id: 5, title: 'New Course Materials', type: 'news', path: '/NewsPage' },
    { id: 6, title: 'Web Development Fundamentals', type: 'course', path: '/CourseCurriculum' },
  ];

  const handleSearch = (query) => {
    setSearchQuery(query);
    if (query.length > 0) {
      const results = searchData.filter(item =>
        item.title.toLowerCase().includes(query.toLowerCase())
      );
      setSearchResults(results);
      setShowResults(true);
    } else {
      setSearchResults([]);
      setShowResults(false);
    }
  };

  const handleResultClick = (path) => {
    navigate(path);
    setSearchQuery('');
    setShowResults(false);
  };

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    if (searchResults.length > 0) {
      navigate(searchResults[0].path);
      setSearchQuery('');
      setShowResults(false);
    }
  };

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (!e.target.closest('.navbar-search')) {
        setShowResults(false);
      }
    };

    document.addEventListener('click', handleClickOutside);
    return () => document.removeEventListener('click', handleClickOutside);
  }, []);

  return (
    <nav className="dashboard-navbar">
      <div className="navbar-brand">
        <Link to="/" className="logo">
          <span className="logo-icon">🎓</span>
          <span className="logo-text">EduTrack</span>
        </Link>
      </div>
      
      <div className="navbar-search">
        <form onSubmit={handleSearchSubmit}>
          <FaSearch className="search-icon" />
          <input 
            type="text" 
            placeholder="Search courses, materials..." 
            value={searchQuery}
            onChange={(e) => handleSearch(e.target.value)}
            onFocus={() => searchQuery.length > 0 && setShowResults(true)}
          />
        </form>
        
        {showResults && searchResults.length > 0 && (
          <div className="search-results-dropdown">
            {searchResults.map(result => (
              <div 
                key={result.id} 
                className="search-result-item"
                onClick={() => handleResultClick(result.path)}
              >
                <div className="search-result-icon">
                  {result.type === 'course' && <FaBook />}
                  {result.type === 'assignment' && <FaCalendarAlt />}
                  {result.type === 'event' && <FaCalendarAlt />}
                  {result.type === 'news' && <FaEnvelope />}
                </div>
                <div className="search-result-content">
                  <div className="search-result-title">{result.title}</div>
                  <div className="search-result-type">{result.type}</div>
                </div>
              </div>
            ))}
          </div>
        )}

        {showResults && searchResults.length === 0 && searchQuery.length > 0 && (
          <div className="search-results-dropdown">
            <div className="search-no-results">
              No results found for "{searchQuery}"
            </div>
          </div>
        )}
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
          <span className="notification-badge">1</span>
        </Link>
        <Link to="/NewsPage" className="nav-link">
          <FaEnvelope className="nav-icon" />
          <span>News</span>
          <span className="notification-badge">1</span>
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