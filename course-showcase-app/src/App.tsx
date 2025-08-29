import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import CoursePage from './pages/CoursePage';
import LessonPage from './pages/LessonPage';
import NotFoundPage from './pages/NotFoundPage';
import { Header, Breadcrumbs } from './components/Layout';

function App() {
  return (
    <Router>
      <div className="app">
        <Header />
        <Breadcrumbs />
        <main>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/course/:courseId" element={<CoursePage />} />
            <Route path="/course/:courseId/lesson/:lessonId" element={<LessonPage />} />
            <Route path="/404" element={<NotFoundPage />} />
            {/* Catch-all route for 404 pages */}
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
