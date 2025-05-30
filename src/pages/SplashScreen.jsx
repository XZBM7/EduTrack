import React, { useState, useEffect } from 'react';
import styled, { keyframes } from 'styled-components';

const galaxySpin = keyframes`
  0% { transform: rotate(0deg) scale(0.8); opacity: 0; }
  50% { transform: rotate(180deg) scale(1.2); opacity: 1; }
  100% { transform: rotate(360deg) scale(1); opacity: 1; }
`;

const particleMove = keyframes`
  0% { transform: translate(0, 0); opacity: 0; }
  50% { opacity: 1; }
  100% { transform: translate(var(--tx), var(--ty)); opacity: 0; }
`;

const gradientFlow = keyframes`
  0% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
  100% { background-position: 0% 50%; }
`;

const CosmicContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(320deg, #0f0c29, #302b63, #24243e);
  background-size: 300% 300%;
  animation: ${gradientFlow} 8s ease infinite;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  z-index: 9999;
  overflow: hidden;
`;

const NebulaLogo = styled.div`
  font-size: 4rem;
  font-weight: 800;
  color: transparent;
  background: linear-gradient(90deg, #ff8a00, #e52e71, #00b4db);
  -webkit-background-clip: text;
  background-clip: text;
  margin-bottom: 2rem;
  position: relative;
  z-index: 2;
  animation: ${galaxySpin} 2s ease-out forwards;
`;

const Particle = styled.div`
  position: absolute;
  width: 4px;
  height: 4px;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.8);
  animation: ${particleMove} 3s linear infinite;
  z-index: 1;
`;

const QuantumLoader = styled.div`
  width: 300px;
  height: 8px;
  background: rgba(255, 255, 255, 0.1);
  border-radius: 10px;
  overflow: hidden;
  position: relative;
  z-index: 2;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.3);
`;

const LoaderProgress = styled.div`
  height: 100%;
  width: 0%;
  background: linear-gradient(90deg, #00b4db, #e52e71);
  border-radius: 10px;
  transition: width 5s cubic-bezier(0.17, 0.67, 0.83, 0.67);
  position: relative;
  overflow: hidden;

  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(
      90deg,
      transparent,
      rgba(255, 255, 255, 0.5),
      transparent
    );
    animation: shimmer 2s infinite;
  }

  @keyframes shimmer {
    0% { transform: translateX(-100%); }
    100% { transform: translateX(100%); }
  }
`;

const SplashScreen = ({ onFinish }) => {
  const [visited] = useState(localStorage.getItem('visited') === 'true');
  const [particles, setParticles] = useState([]);

  useEffect(() => {
    if (!visited) {
      const newParticles = Array.from({ length: 30 }, (_, i) => ({
        id: i,
        tx: `${Math.random() * 200 - 100}px`,
        ty: `${Math.random() * 200 - 100}px`,
        delay: Math.random() * 3,
        size: `${Math.random() * 3 + 2}px`
      }));
      setParticles(newParticles);

      localStorage.setItem('visited', 'true');
      const timer = setTimeout(() => {
        onFinish();
      }, 5000);
      return () => clearTimeout(timer);
    } else {
      onFinish();
    }
  }, [onFinish, visited]);

  if (visited) return null;

  return (
    <CosmicContainer>
      {particles.map((p) => (
        <Particle
          key={p.id}
          style={{
            '--tx': p.tx,
            '--ty': p.ty,
            '--delay': `${p.delay}s`,
            '--size': p.size,
            animationDelay: p.delay + 's',
            width: p.size,
            height: p.size
          }}
        />
      ))}
      
      <NebulaLogo>EduTrack</NebulaLogo>
      <QuantumLoader>
        <LoaderProgress style={{ width: '100%' }} />
      </QuantumLoader>
    </CosmicContainer>
  );
};

export default SplashScreen;