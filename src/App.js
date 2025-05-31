import { Routes, Route } from 'react-router-dom';
import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import SplashScreen from './pages/SplashScreen';
import NewsPage from './pages/NewsPage';
import ContactPage from './pages/ContactPage';
import OldLessonsCards from './pages/OldLessonsCards';

import StudentDashboard from './pages/StudentDashboard';
import Assignments from './pages/Assignments';
import LessonsCards from './pages/LessonsCards';
import PDFViewerPage from './pages/PDFViewerPage';
import CourseCurriculum from './pages/CourseCurriculum';
import SessionDashboard from './pages/SessionDashboard';

function App() {
  const [showSplash, setShowSplash] = useState(true);

  if (showSplash) {
    return <SplashScreen onFinish={() => setShowSplash(false)} />;
  }

  return (
    <div className="app">
      <Navbar />

      <main className="main-content">
        <Routes>
          <Route path="/" element={<StudentDashboard />} />
          <Route path="/dashboard" element={<StudentDashboard />} />
          <Route path="/Assignments" element={<Assignments />} />
          <Route path="/LessonsCards" element={<LessonsCards />} />
          <Route path="/PDFViewerPage" element={<PDFViewerPage />} />
          <Route path="/CourseCurriculum" element={<CourseCurriculum />} />
          <Route path="/SessionDashboard" element={<SessionDashboard />} />
          <Route path="/NewsPage" element={<NewsPage />} />
          <Route path="/ContactPage" element={<ContactPage />} />
          <Route path="/OldLessonsCards" element={<OldLessonsCards />} />
        </Routes>
      </main>

      <Footer />
    </div>
  );
}

export default App;
