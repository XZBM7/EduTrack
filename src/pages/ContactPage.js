import React from 'react';
import styled, { keyframes } from 'styled-components';

// Animation for floating effect
const float = keyframes`
  0% { transform: translateY(0px); }
  50% { transform: translateY(-10px); }
  100% { transform: translateY(0px); }
`;

// Styled components
const Container = styled.div`
  max-width: 1000px;
  margin: 2rem auto;
  padding: 3rem 2rem;
  text-align: center;
  font-family: 'Poppins', sans-serif;
  background: linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%);
  border-radius: 20px;
  box-shadow: 0 15px 40px rgba(0, 0, 0, 0.08);
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: -50%;
    left: -50%;
    width: 200%;
    height: 200%;
    background: radial-gradient(circle, rgba(255,255,255,0.1) 0%, rgba(255,255,255,0) 70%);
    z-index: 0;
  }

  @media (max-width: 768px) {
    padding: 2rem 1rem;
    border-radius: 15px;
  }
`;

const Title = styled.h1`
  color: #2b2d42;
  font-size: 2.8rem;
  margin-bottom: 1rem;
  font-weight: 700;
  position: relative;
  z-index: 1;
  background: linear-gradient(90deg, #4361ee, #3a0ca3);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  text-shadow: 1px 1px 3px rgba(0,0,0,0.05);

  @media (max-width: 768px) {
    font-size: 2.2rem;
  }
`;

const Subtitle = styled.p`
  color: #6c757d;
  font-size: 1.2rem;
  margin-bottom: 3rem;
  max-width: 700px;
  margin-left: auto;
  margin-right: auto;
  line-height: 1.6;
  position: relative;
  z-index: 1;

  @media (max-width: 768px) {
    font-size: 1rem;
    padding: 0 1rem;
  }
`;

const IconsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(120px, 1fr));
  gap: 2rem;
  position: relative;
  z-index: 1;

  @media (max-width: 600px) {
    grid-template-columns: repeat(2, 1fr);
    gap: 1.5rem;
  }
`;

const SocialLink = styled.a`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-decoration: none;
  transition: all 0.4s cubic-bezier(0.25, 0.8, 0.25, 1);
  position: relative;

  &:hover {
    transform: translateY(-5px);
    
    .icon-container {
      transform: scale(1.1);
      box-shadow: 0 10px 25px rgba(0, 0, 0, 0.15);
    }
    
    .icon-label {
      color: #2b2d42;
    }
  }
`;

const IconContainer = styled.div`
  width: 80px;
  height: 80px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 1rem;
  transition: all 0.3s ease;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
  position: relative;
  background: ${props => props.bgColor};
  animation: ${float} 4s ease-in-out infinite;
  animation-delay: ${props => props.delay || '0s'};

  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    border-radius: 50%;
    border: 2px solid rgba(255,255,255,0.3);
  }

  @media (max-width: 768px) {
    width: 70px;
    height: 70px;
  }
`;

const Icon = styled.svg`
  width: 40px;
  height: 40px;
  fill: white;
  filter: drop-shadow(0 2px 3px rgba(0,0,0,0.2));

  @media (max-width: 768px) {
    width: 35px;
    height: 35px;
  }
`;

const IconLabel = styled.span`
  color: #495057;
  font-weight: 600;
  font-size: 1rem;
  transition: color 0.3s ease;
  text-align: center;

  @media (max-width: 768px) {
    font-size: 0.9rem;
  }
`;

const SocialContacts = () => {
  const socialLinks = [
    {
      name: "WhatsApp",
      url: "https://wa.me/201125700310",
      icon: (
        <Icon viewBox="0 0 24 24">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
        </Icon>
      ),
      bgColor: "#25D366",
      delay: "0s"
    },
    {
      name: "Telegram",
      url: "https://t.me/B_X_Z7",
      icon: (
        <Icon viewBox="0 0 24 24">
          <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.894 8.221l-1.97 9.28c-.145.658-.537.818-1.084.508l-3-2.21-1.446 1.394c-.14.14-.26.26-.47.26l.213-3.053 5.56-5.022c.24-.213-.054-.334-.373-.12l-6.87 4.326-2.96-.924c-.64-.203-.658-.64.135-.954l11.57-4.46c.538-.196 1.006.13.832.942z"/>
        </Icon>
      ),
      bgColor: "#0088cc",
      delay: "0.2s"
    },
    {
      name: "Email",
      url: "mailto:ibrahim.amr755@gmail.com",
      icon: (
        <Icon viewBox="0 0 24 24">
          <path d="M12 12.713l-11.985-9.713h23.97l-11.985 9.713zm0 2.574l-12-9.725v15.438h24v-15.438l-12 9.725z"/>
        </Icon>
      ),
      bgColor: "#D44638",
      delay: "0.4s"
    },
    {
      name: "LinkedIn",
      url: "https://www.linkedin.com/in/ibrahim-amr-b238bb316?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app",
      icon: (
        <Icon viewBox="0 0 24 24">
          <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
        </Icon>
      ),
      bgColor: "#0077b5",
      delay: "0.6s"
    },
    {
  name: "YouTube Channel",
  url: "https://youtube.com/@fcihashira?si=tksdfmZzH4sNnQDZ",
  icon: (
    <Icon viewBox="0 0 24 24">
      <path d="M23.498 6.186a2.958 2.958 0 00-2.08-2.087C19.72 3.5 12 3.5 12 3.5s-7.72 0-9.418.599a2.958 2.958 0 00-2.08 2.087C0 7.91 0 12 0 12s0 4.09.502 5.814a2.958 2.958 0 002.08 2.087C4.28 20.5 12 20.5 12 20.5s7.72 0 9.418-.599a2.958 2.958 0 002.08-2.087C24 16.09 24 12 24 12s0-4.09-.502-5.814zM9.75 15.02V8.98L15.5 12l-5.75 3.02z" fill="#fff"/>
    </Icon>
  ),
  bgColor: "#FF0000", 
  delay: "0.8s"
},
    {
      name: "WhatsApp Group",
      url: "https://chat.whatsapp.com/Dhfrnn4hlJx3W8QAI9ij0n",
      icon: (
        <Icon viewBox="0 0 24 24">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
          <path d="M16 12a1 1 0 01-1 1h-2v2a1 1 0 11-2 0v-2H9a1 1 0 110-2h2V9a1 1 0 112 0v2h2a1 1 0 011 1z" fill="#fff"/>
        </Icon>
      ),
      bgColor: "#075E54",
      delay: "0.8s"
    }
  ];

  return (
    <Container>
      <Title>Connect With Us</Title>
      <Subtitle>
        We'd love to hear from you! Whether you have questions, feedback, or just want to say hello, 
        choose your preferred way to connect with our team.
      </Subtitle>
      
      <IconsContainer>
        {socialLinks.map((link, index) => (
          <SocialLink 
            key={index}
            href={link.url}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={link.name}
          >
            <IconContainer bgColor={link.bgColor} delay={link.delay}>
              {link.icon}
            </IconContainer>
            <IconLabel>{link.name}</IconLabel>
          </SocialLink>
        ))}
      </IconsContainer>
    </Container>
  );
};

export default SocialContacts;