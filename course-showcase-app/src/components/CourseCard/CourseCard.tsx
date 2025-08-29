import React from 'react';
import { Link } from 'react-router-dom';
import type { Course } from '../../types';
import { getCourseUrl } from '../../utils/routeUtils';
import styles from './CourseCard.module.css';

interface CourseCardProps {
  course: Course;
}

const CourseCard: React.FC<CourseCardProps> = ({ course }) => {
  return (
    <div className={styles.courseCard}>
      <div className={styles.cardContent}>
        <h3 className={styles.courseTitle}>{course.title}</h3>
        <p className={styles.courseDescription}>{course.description}</p>
        <div className={styles.lessonCount}>
          {course.lessons.length} lesson{course.lessons.length !== 1 ? 's' : ''}
        </div>
      </div>
      <div className={styles.cardActions}>
        <Link 
          to={getCourseUrl(course.id)} 
          className={styles.viewCourseButton}
          aria-label={`View ${course.title} course`}
        >
          View Course
        </Link>
      </div>
    </div>
  );
};

export default CourseCard;