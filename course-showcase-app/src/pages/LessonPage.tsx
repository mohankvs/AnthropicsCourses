import React from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { getAllCourses } from '../utils/courseUtils';
import { isValidCourseId, isValidLessonId, getBreadcrumbs, getLessonNavigation } from '../utils/routeUtils';

const LessonPage: React.FC = () => {
  const { courseId, lessonId } = useParams<{ courseId: string; lessonId: string }>();
  const courses = getAllCourses();
  
  // Validate route parameters
  if (!courseId || !lessonId || 
      !isValidCourseId(courseId, courses) || 
      !isValidLessonId(courseId, lessonId, courses)) {
    return <Navigate to="/404" replace />;
  }
  
  const breadcrumbs = getBreadcrumbs(courseId, lessonId, courses);
  const navigation = getLessonNavigation(courseId, lessonId, courses);
  const { course, previous: previousLesson, next: nextLesson } = navigation;
  const lesson = course?.lessons.find(l => l.id === lessonId);

  if (!course || !lesson) {
    return <Navigate to="/404" replace />;
  }

  return (
    <div className="container">
      <div style={{ padding: '2rem 0' }}>
        <nav style={{ marginBottom: '1rem' }}>
          {breadcrumbs.map((crumb, index) => (
            <span key={crumb.path}>
              {index > 0 && <span style={{ margin: '0 0.5rem', color: 'var(--text-muted)' }}>→</span>}
              {crumb.isActive ? (
                <span style={{ color: 'var(--text-primary)' }}>{crumb.title}</span>
              ) : (
                <Link to={crumb.path} style={{ color: 'var(--text-secondary)' }}>{crumb.title}</Link>
              )}
            </span>
          ))}
        </nav>
        
        <h1>{lesson.title}</h1>
        {lesson.description && (
          <p style={{ fontSize: 'var(--font-size-lg)', marginBottom: '2rem', color: 'var(--text-secondary)' }}>
            {lesson.description}
          </p>
        )}
        
        <div className="card" style={{ marginBottom: '2rem' }}>
          <h3>Lesson Content</h3>
          <p>Notebook: <code>{lesson.filename}</code></p>
          <p style={{ color: 'var(--text-secondary)' }}>
            This lesson content will be loaded from the Jupyter notebook file.
            In the next implementation phase, we'll add the actual notebook viewer.
          </p>
        </div>
        
        <div className="flex" style={{ justifyContent: 'space-between', alignItems: 'center', marginTop: '2rem' }}>
          <div>
            {previousLesson ? (
              <Link to={previousLesson.path} className="btn btn-secondary">
                ← Previous: {previousLesson.title}
              </Link>
            ) : (
              <div></div>
            )}
          </div>
          
          <Link to={course.path} className="btn btn-secondary">
            Back to Course
          </Link>
          
          <div>
            {nextLesson ? (
              <Link to={nextLesson.path} className="btn btn-primary">
                Next: {nextLesson.title} →
              </Link>
            ) : (
              <div></div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default LessonPage;