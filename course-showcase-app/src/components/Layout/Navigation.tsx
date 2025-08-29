import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { courses } from '../../data/courses';
import type { Lesson, SubGroup } from '../../types';
import styles from './Navigation.module.css';

interface NavigationProps {
  courseId?: string;
  currentLessonId?: string;
  className?: string;
}

const Navigation: React.FC<NavigationProps> = ({ 
  courseId, 
  currentLessonId, 
  className 
}) => {
  const location = useLocation();
  const [expandedSubGroups, setExpandedSubGroups] = useState<Set<string>>(new Set());
  
  if (!courseId) {
    return (
      <nav className={`${styles.navigation} ${className || ''}`}>
        <div className={styles.navigationHeader}>
          <h3>All Courses</h3>
        </div>
        <ul className={styles.navigationList}>
          {courses.map((course) => (
            <li key={course.id} className={styles.navigationItem}>
              <Link 
                to={course.path} 
                className={`${styles.navigationLink} ${
                  location.pathname === course.path ? styles.active : ''
                }`}
              >
                {course.title}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    );
  }

  const course = courses.find(c => c.id === courseId);
  if (!course) return null;

  const toggleSubGroup = (subGroupId: string) => {
    const newExpanded = new Set(expandedSubGroups);
    if (newExpanded.has(subGroupId)) {
      newExpanded.delete(subGroupId);
    } else {
      newExpanded.add(subGroupId);
    }
    setExpandedSubGroups(newExpanded);
  };

  // Auto-expand subgroup containing current lesson
  React.useEffect(() => {
    if (currentLessonId && course.subGroups) {
      const subGroupWithCurrentLesson = course.subGroups.find(sg => 
        sg.lessons.some(lesson => lesson.id === currentLessonId)
      );
      if (subGroupWithCurrentLesson) {
        setExpandedSubGroups(prev => new Set([...prev, subGroupWithCurrentLesson.id]));
      }
    }
  }, [currentLessonId, course.subGroups]);

  const renderLessonList = (lessons: Lesson[]) => (
    <ul className={styles.lessonList}>
      {lessons.map((lesson) => (
        <li key={lesson.id} className={styles.lessonItem}>
          <Link 
            to={lesson.path}
            className={`${styles.lessonLink} ${
              currentLessonId === lesson.id ? styles.active : ''
            }`}
          >
            <span className={styles.lessonTitle}>{lesson.title}</span>
            {lesson.description && (
              <span className={styles.lessonDescription}>{lesson.description}</span>
            )}
          </Link>
        </li>
      ))}
    </ul>
  );

  return (
    <nav className={`${styles.navigation} ${className || ''}`}>
      <div className={styles.navigationHeader}>
        <Link to={course.path} className={styles.courseTitle}>
          {course.title}
        </Link>
        <Link to="/" className={styles.backToHome}>
          ← All Courses
        </Link>
      </div>

      {/* Course with subgroups (like Prompt Engineering Tutorial) */}
      {course.subGroups && course.subGroups.length > 0 ? (
        <div className={styles.subGroupContainer}>
          {course.subGroups.map((subGroup: SubGroup) => (
            <div key={subGroup.id} className={styles.subGroup}>
              <button
                className={styles.subGroupToggle}
                onClick={() => toggleSubGroup(subGroup.id)}
                aria-expanded={expandedSubGroups.has(subGroup.id)}
              >
                <span className={styles.subGroupTitle}>{subGroup.title}</span>
                <span className={`${styles.toggleIcon} ${
                  expandedSubGroups.has(subGroup.id) ? styles.expanded : ''
                }`}>
                  ▼
                </span>
              </button>
              {expandedSubGroups.has(subGroup.id) && renderLessonList(subGroup.lessons)}
            </div>
          ))}
        </div>
      ) : (
        /* Course with direct lessons */
        renderLessonList(course.lessons)
      )}
    </nav>
  );
};

export default Navigation;