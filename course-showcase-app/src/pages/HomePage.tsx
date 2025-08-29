import React from 'react';
import { getAllCourses } from '../utils/courseUtils';
import CourseCard from '../components/CourseCard';
import styles from './HomePage.module.css';

const HomePage: React.FC = () => {
  const courses = getAllCourses();

  if (!courses || courses.length === 0) {
    return (
      <div className="container">
        <div className={styles.homePage}>
          <div className={styles.error}>
            <h2>No courses available</h2>
            <p>Please check back later for course content.</p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="container">
      <div className={styles.homePage}>
        <header className={styles.header}>
          <h1 className={styles.title}>Anthropic Courses</h1>
          <p className={styles.subtitle}>
            Welcome to Anthropic's educational courses. Explore our comprehensive collection 
            of tutorials and guides to master AI development with Claude.
          </p>
        </header>
        
        <main>
          <div className={styles.coursesGrid}>
            {courses.map(course => (
              <CourseCard 
                key={course.id} 
                course={course}
              />
            ))}
          </div>
        </main>
      </div>
    </div>
  );
};

export default HomePage;