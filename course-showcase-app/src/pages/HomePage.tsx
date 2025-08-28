import React from 'react';
import { Link } from 'react-router-dom';
import { getAllCourses } from '../utils/courseUtils';

const HomePage: React.FC = () => {
  const courses = getAllCourses();

  return (
    <div className="container">
      <div style={{ padding: '2rem 0' }}>
        <h1>Anthropic Courses</h1>
        <p>Welcome to Anthropic's educational courses. Choose a course to get started:</p>
        
        <div className="grid" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', marginTop: '2rem' }}>
          {courses.map(course => (
            <div key={course.id} className="card">
              <h3>{course.title}</h3>
              <p>{course.description}</p>
              <div style={{ marginTop: '1rem' }}>
                <Link to={course.path} className="btn btn-primary">
                  View Course ({course.lessons.length} lessons)
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HomePage;