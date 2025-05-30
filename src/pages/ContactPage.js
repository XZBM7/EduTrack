import React from 'react';

const SocialContacts = () => {
  return (
    <div className="social-contacts-container">
      <h1 className="social-contacts-title">Connect With Us</h1>
      <p className="social-contacts-subtitle">We'd love to hear from you! Choose your preferred way to connect.</p>
      
      <div className="social-icons-container">
        <a href="https://wa.me/201125700310" target="_blank" rel="noopener noreferrer" className="social-icon whatsapp">
          <div className="icon-container">
            <svg className="icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
            </svg>
          </div>
          <span className="icon-label">WhatsApp</span>
        </a>
        
        <a href="https://t.me/B_X_Z7" target="_blank" rel="noopener noreferrer" className="social-icon telegram">
          <div className="icon-container">
            <svg className="icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
              <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.894 8.221l-1.97 9.28c-.145.658-.537.818-1.084.508l-3-2.21-1.446 1.394c-.14.14-.26.26-.47.26l.213-3.053 5.56-5.022c.24-.213-.054-.334-.373-.12l-6.87 4.326-2.96-.924c-.64-.203-.658-.64.135-.954l11.57-4.46c.538-.196 1.006.13.832.942z"/>
            </svg>
          </div>
          <span className="icon-label">Telegram</span>
        </a>
        
        <a href="mailto:ibrahim.amr755@gmai.com" className="social-icon email">
          <div className="icon-container">
            <svg className="icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
              <path d="M12 12.713l-11.985-9.713h23.97l-11.985 9.713zm0 2.574l-12-9.725v15.438h24v-15.438l-12 9.725z"/>
            </svg>
          </div>
          <span className="icon-label">Email</span>
        </a>
        
        
        <a href="https://linkedin.com/in/Ibrahim Amr" target="_blank" rel="noopener noreferrer" className="social-icon linkedin">
          <div className="icon-container">
            <svg className="icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
              <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
            </svg>
          </div>
          <span className="icon-label">LinkedIn</span>
        </a>
        
        <a href="https://chat.whatsapp.com/Dhfrnn4hlJx3W8QAI9ij0n" target="_blank" rel="noopener noreferrer" className="social-icon whatsapp-group">
          <div className="icon-container">
            <svg className="icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
              <path d="M16 12a1 1 0 01-1 1h-2v2a1 1 0 11-2 0v-2H9a1 1 0 110-2h2V9a1 1 0 112 0v2h2a1 1 0 011 1z" fill="#fff"/>
            </svg>
          </div>
          <span className="icon-label">WhatsApp Group</span>
        </a>
      </div>
    </div>
  );
};

export default SocialContacts;

// CSS-in-JS (can be moved to a separate file if preferred)
const styles = `
.social-contacts-container {
  max-width: 800px;
  margin: 0 auto;
  padding: 2rem;
  text-align: center;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  background: linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%);
  border-radius: 15px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
}

.social-contacts-title {
  color: #2c3e50;
  font-size: 2.5rem;
  margin-bottom: 1rem;
  font-weight: 700;
  text-shadow: 1px 1px 2px rgba(0,0,0,0.1);
}

.social-contacts-subtitle {
  color: #7f8c8d;
  font-size: 1.1rem;
  margin-bottom: 2.5rem;
}

.social-icons-container {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 1.5rem;
}

.social-icon {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-decoration: none;
  transition: all 0.3s ease;
  width: 100px;
}

.social-icon:hover {
  transform: translateY(-5px);
}

.icon-container {
  width: 70px;
  height: 70px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 0.8rem;
  transition: all 0.3s ease;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

.icon {
  width: 35px;
  height: 35px;
  fill: white;
}

.icon-label {
  color: #2c3e50;
  font-weight: 600;
  font-size: 0.9rem;
}

/* Individual icon colors */
.whatsapp .icon-container {
  background-color: #25D366;
}

.whatsapp:hover .icon-container {
  background-color: #128C7E;
  box-shadow: 0 6px 12px rgba(37, 211, 102, 0.3);
}

.telegram .icon-container {
  background-color: #0088cc;
}

.telegram:hover .icon-container {
  background-color: #0077b5;
  box-shadow: 0 6px 12px rgba(0, 136, 204, 0.3);
}

.email .icon-container {
  background-color: #D44638;
}

.email:hover .icon-container {
  background-color: #c1351a;
  box-shadow: 0 6px 12px rgba(212, 70, 56, 0.3);
}

.linkedin .icon-container {
  background-color: #0077b5;
}

.linkedin:hover .icon-container {
  background-color: #005582;
  box-shadow: 0 6px 12px rgba(0, 119, 181, 0.3);
}

.whatsapp-group .icon-container {
  background-color: #075E54;
}

.whatsapp-group:hover .icon-container {
  background-color: #054d44;
  box-shadow: 0 6px 12px rgba(7, 94, 84, 0.3);
}

/* Responsive design */
@media (max-width: 600px) {
  .social-icons-container {
    gap: 1rem;
  }
  
  .social-icon {
    width: 80px;
  }
  
  .icon-container {
    width: 60px;
    height: 60px;
  }
  
  .icon {
    width: 30px;
    height: 30px;
  }
}
`;

const styleElement = document.createElement('style');
styleElement.innerHTML = styles;
document.head.appendChild(styleElement);