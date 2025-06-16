import React, { useState } from "react";
import "../styles/SessionDashboard.css";
import { sessionData } from "./SessionData";

const SessionDashboard = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [statusFilter, setStatusFilter] = useState("all"); // 'all', 'active', 'completed', 'cancelled', 'upcoming'

  const filteredSessions = sessionData.filter((session) => {
    const matchesSearch = session.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
                         session.time.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         session.date.toLowerCase().includes(searchTerm.toLowerCase());
    
    const matchesStatus = statusFilter === "all" || session.status === statusFilter;

    return matchesSearch && matchesStatus;
  });

  return (
    <div className="session-dashboard">
      <h2 className="dashboard-title">Session Status</h2>
      
      <div className="dashboard-controls">
        <div className="search-container">
          <input
            type="text"
            placeholder="Search sessions..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="search-input"
          />
          <span className="search-icon">🔍</span>
        </div>
        
        <div className="status-filters">
          <button 
            className={`status-btn ${statusFilter === 'all' ? 'active' : ''}`}
            onClick={() => setStatusFilter('all')}
          >
            All
          </button>
          <button 
            className={`status-btn ${statusFilter === 'active' ? 'active' : ''}`}
            onClick={() => setStatusFilter('active')}
          >
            Live Now
          </button>
          <button 
            className={`status-btn ${statusFilter === 'upcoming' ? 'active' : ''}`}
            onClick={() => setStatusFilter('upcoming')}
          >
            Upcoming
          </button>
          <button 
            className={`status-btn ${statusFilter === 'completed' ? 'active' : ''}`}
            onClick={() => setStatusFilter('completed')}
          >
            Completed
          </button>
          <button 
            className={`status-btn ${statusFilter === 'cancelled' ? 'active' : ''}`}
            onClick={() => setStatusFilter('cancelled')}
          >
            Cancelled
          </button>
        </div>
      </div>

      {filteredSessions.length > 0 ? (
        <div className="sessions-grid">
          {filteredSessions.map((session) => (
            <div 
              key={session.id} 
              className={`session-card ${session.status}`}
            >
              <div className="session-icon">{session.icon}</div>
              <div className="session-details">
                <h3 className="session-name">{session.name}</h3>
                <p className="session-time">{session.time}</p>
                <p className="session-date">{session.date}</p>
                <span className={`session-status ${session.status}`}>
                  {session.status === 'active' ? 'Live Now' : 
                   session.status === 'upcoming' ? 'Upcoming' :
                   session.status === 'completed' ? 'Completed' : 'Cancelled'}
                </span>
                
                <div className="live-stream-container">
                  <a 
                    href={session.liveLink} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className={`live-link ${session.status === 'active' ? 'active' : ''}`}
                  >
                    {session.status === 'active' ? (
                      <>
                        <span className="live-badge">LIVE</span>
                        Join Stream Now
                      </>
                    ) : session.status === 'upcoming' ? (
                      "Link of Stream "
                    ) : (
                      "View Recording"
                    )}
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="no-sessions">
          <div className="no-sessions-icon">📭</div>
          <p>No matching sessions found</p>
          <small>Try adjusting your search or filters</small>
        </div>
      )}
    </div>
  );
};

export default SessionDashboard;