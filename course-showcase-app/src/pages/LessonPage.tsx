import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { getCourseById, getLessonById, getNextLesson, getPreviousLesson } from '../utils/courseUtils';

const LessonPage: React.FC = () => {
  const { courseId, lessonId } = useParams<{ courseId: string; lessonId: string }>();
  const course = courseId ? getCourseById(courseId) : undefined;
  const lesson = courseId && lessonId ? getLessonById(courseId, lessonId) : undefined;
  const nextLesson = courseId && lessonId ? getNextLesson(courseId, lessonId) : undefined;
  const previousLesson = courseId && lessonId ? getPreviousLesson(courseId, lessonId) : undefined;

  if (!course || !lesson) {
    return (
      <div className="container">
        <div className="error">
          <h1>Lesson Not Found</h1>
          <p>The lesson "{lessonId}" in course "{courseId}" could not be found.</p>
          <Link to="/" className="btn btn-primary">Back to Home</Link>
        </div>
      </div>
    );
  }

  return (
    <div className="container">
      <div style={{ padding: '2rem 0' }}>
        <nav style={{ marginBottom: '1rem' }}>
          <Link to="/" style={{ color: 'var(--text-secondary)' }}>Home</Link>
          <span style={{ margin: '0 0.5rem', color: 'var(--text-muted)' }}>→</span>
          <Link to={course.path} style={{ color: 'var(--text-secondary)' }}>{course.title}</Link>
          <span style={{ margin: '0 0.5rem', color: 'var(--text-muted)' }}>→</span>
          <span style={{ color: 'var(--text-primary)' }}>{lesson.title}</span>
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