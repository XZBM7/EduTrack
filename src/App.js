import { Routes, Route } from 'react-router-dom';
import React, { useState, Suspense } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import SplashScreen from './pages/SplashScreen';
import NewsPage from './pages/NewsPage';
import ContactPage from './pages/ContactPage';
import OldLessonsCards from './pages/OldLessonsCards';

const StudentDashboard = React.lazy(() => import('./pages/StudentDashboard'));
const Assignments = React.lazy(() => import('./pages/Assignments'));
const LessonsCards = React.lazy(() => import('./pages/LessonsCards'));
const PDFViewerPage = React.lazy(() => import('./pages/PDFViewerPage'));
const CourseCurriculum = React.lazy(() => import('./pages/CourseCurriculum'));
const SessionDashboard = React.lazy(() => import('./pages/SessionDashboard'));


function App() {
  const [showSplash, setShowSplash] = useState(true);

  if (showSplash) {
    return <SplashScreen onFinish={() => setShowSplash(false)} />;
  }

  return (
    <div className="app">
      <Navbar />

      <main className="main-content">
        <Suspense fallback={<div>Loading...</div>}>
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
        </Suspense>
      </main>

      <Footer />
    </div>
  );
}

export default App;