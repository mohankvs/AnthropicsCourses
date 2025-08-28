import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { getCourseById } from '../utils/courseUtils';

const CoursePage: React.FC = () => {
  const { courseId } = useParams<{ courseId: string }>();
  const course = courseId ? getCourseById(courseId) : undefined;

  if (!course) {
    return (
      <div className="container">
        <div className="error">
          <h1>Course Not Found</h1>
          <p>The course "{courseId}" could not be found.</p>
          <Link to="/" className="btn btn-primary">Back to Home</Link>
        </div>
      </div>
    );
  }

  return (
    <div className="container">
      <div style={{ padding: '2rem 0' }}>
        <nav style={{ marginBottom: '1rem' }}>
          <Link to="/" style={{ color: 'var(--text-secondary)' }}>← Back to Courses</Link>
        </nav>
        
        <h1>{course.title}</h1>
        <p style={{ fontSize: 'var(--font-size-lg)', marginBottom: '2rem' }}>{course.description}</p>
        
        {course.subGroups && course.subGroups.length > 0 ? (
          <div>
            <h2>Course Sections</h2>
            {course.subGroups.map(subGroup => (
              <div key={subGroup.id} style={{ marginBottom: '2rem' }}>
                <h3>{subGroup.title}</h3>
                <div className="grid" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1rem' }}>
                  {subGroup.lessons.map(lesson => (
                    <div key={lesson.id} className="card">
                      <h4 style={{ margin: '0 0 0.5rem 0', fontSize: 'var(--font-size-base)' }}>{lesson.title}</h4>
                      <p style={{ fontSize: 'var(--font-size-sm)', margin: '0 0 1rem 0' }}>{lesson.description}</p>
                      <Link to={lesson.path} className="btn btn-secondary">
                        View Lesson
                      </Link>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div>
            <h2>Lessons ({course.lessons.length})</h2>
            <div className="grid" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))' }}>
              {course.lessons.map(lesson => (
                <div key={lesson.id} className="card">
                  <h3 style={{ margin: '0 0 0.5rem 0' }}>{lesson.title}</h3>
                  <p style={{ margin: '0 0 1rem 0' }}>{lesson.description}</p>
                  <Link to={lesson.path} className="btn btn-primary">
                    View Lesson
                  </Link>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default CoursePage;