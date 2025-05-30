import React from "react";
import "../styles/SessionDashboard.css";
import { sessionData } from "./SessionData";

const SessionDashboard = () => {
  return (
    <div className="session-dashboard">
      <h2 className="dashboard-title">Session Status</h2>
      
      {sessionData.length > 0 ? (
        <div className="sessions-grid">
          {sessionData.map((session) => (
            <div 
              key={session.id} 
              className={`session-card ${session.status}`}
            >
              <div className="session-icon">{session.icon}</div>
              <div className="session-details">
                <h3 className="session-name">{session.name}</h3>
                <p className="session-time">{session.time}</p>
                <p className="session-date">{session.date}</p>
                <span className="session-status">{session.status}</span>
                
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
                    ) : (
                      "View Stream Link"
                    )}
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="no-sessions">
          <p>No sessions available</p>
        </div>
      )}
    </div>
  );
};

export default SessionDashboard;