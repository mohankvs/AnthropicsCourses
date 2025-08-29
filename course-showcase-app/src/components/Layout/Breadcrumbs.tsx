import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { courses } from '../../data/courses';
import type { BreadcrumbItem } from '../../types';
import styles from './Breadcrumbs.module.css';

const Breadcrumbs: React.FC = () => {
  const location = useLocation();
  const breadcrumbs = generateBreadcrumbs(location.pathname);

  if (breadcrumbs.length <= 1) {
    return null; // Don't show breadcrumbs on homepage
  }

  return (
    <nav className={styles.breadcrumbs} aria-label="Breadcrumb navigation">
      <ol className={styles.breadcrumbList}>
        {breadcrumbs.map((breadcrumb, index) => (
          <li key={breadcrumb.path} className={styles.breadcrumbItem}>
            {breadcrumb.isActive ? (
              <span className={styles.breadcrumbActive} aria-current="page">
                {breadcrumb.title}
              </span>
            ) : (
              <Link to={breadcrumb.path} className={styles.breadcrumbLink}>
                {breadcrumb.title}
              </Link>
            )}
            {index < breadcrumbs.length - 1 && (
              <span className={styles.breadcrumbSeparator} aria-hidden="true">
                /
              </span>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
};

function generateBreadcrumbs(pathname: string): BreadcrumbItem[] {
  const breadcrumbs: BreadcrumbItem[] = [
    { title: 'Home', path: '/', isActive: false }
  ];

  // Handle homepage
  if (pathname === '/') {
    breadcrumbs[0].isActive = true;
    return breadcrumbs;
  }

  // Parse the pathname
  const pathSegments = pathname.split('/').filter(Boolean);
  
  if (pathSegments[0] === 'course' && pathSegments[1]) {
    const courseId = pathSegments[1];
    const course = courses.find(c => c.id === courseId);
    
    if (course) {
      // Add course breadcrumb
      const isCoursePage = pathSegments.length === 2;
      breadcrumbs.push({
        title: course.title,
        path: course.path,
        isActive: isCoursePage
      });

      // Handle lesson page
      if (pathSegments[2] === 'lesson' && pathSegments[3]) {
        const lessonId = pathSegments[3];
        
        // Find lesson in course or subgroups
        let lesson = course.lessons.find(l => l.id === lessonId);
        
        if (!lesson && course.subGroups) {
          for (const subGroup of course.subGroups) {
            lesson = subGroup.lessons.find(l => l.id === lessonId);
            if (lesson) {
              // Add subgroup breadcrumb for hierarchical courses
              breadcrumbs.push({
                title: subGroup.title,
                path: `${course.path}#${subGroup.id}`,
                isActive: false
              });
              break;
            }
          }
        }
        
        if (lesson) {
          breadcrumbs.push({
            title: lesson.title,
            path: lesson.path,
            isActive: true
          });
        }
      }
    }
  }

  return breadcrumbs;
}

export default Breadcrumbs;