import type { Course, Lesson } from '../types';

/**
 * Route path constants for consistent routing throughout the app
 */
export const ROUTES = {
  HOME: '/',
  COURSE: '/course/:courseId',
  LESSON: '/course/:courseId/lesson/:lessonId',
} as const;

/**
 * Generate a course page URL
 */
export const getCourseUrl = (courseId: string): string => {
  return `/course/${courseId}`;
};

/**
 * Generate a lesson page URL
 */
export const getLessonUrl = (courseId: string, lessonId: string): string => {
  return `/course/${courseId}/lesson/${lessonId}`;
};

/**
 * Parse course ID from a course path
 */
export const parseCourseIdFromPath = (path: string): string | null => {
  const match = path.match(/^\/course\/([^\/]+)$/);
  return match ? match[1] : null;
};

/**
 * Parse course ID and lesson ID from a lesson path
 */
export const parseIdsFromLessonPath = (path: string): { courseId: string; lessonId: string } | null => {
  const match = path.match(/^\/course\/([^\/]+)\/lesson\/([^\/]+)$/);
  return match ? { courseId: match[1], lessonId: match[2] } : null;
};

/**
 * Validate if a course ID exists
 */
export const isValidCourseId = (courseId: string, courses: Course[]): boolean => {
  return courses.some(course => course.id === courseId);
};

/**
 * Validate if a lesson ID exists within a course
 */
export const isValidLessonId = (courseId: string, lessonId: string, courses: Course[]): boolean => {
  const course = courses.find(c => c.id === courseId);
  return course ? course.lessons.some(lesson => lesson.id === lessonId) : false;
};

/**
 * Get breadcrumb data for navigation
 */
export interface BreadcrumbItem {
  title: string;
  path: string;
  isActive: boolean;
}

export const getBreadcrumbs = (
  courseId?: string, 
  lessonId?: string, 
  courses: Course[] = []
): BreadcrumbItem[] => {
  const breadcrumbs: BreadcrumbItem[] = [
    { title: 'Home', path: '/', isActive: !courseId }
  ];
  
  if (courseId) {
    const course = courses.find(c => c.id === courseId);
    if (course) {
      breadcrumbs.push({
        title: course.title,
        path: getCourseUrl(courseId),
        isActive: !lessonId
      });
      
      if (lessonId) {
        const lesson = course.lessons.find(l => l.id === lessonId);
        if (lesson) {
          breadcrumbs.push({
            title: lesson.title,
            path: getLessonUrl(courseId, lessonId),
            isActive: true
          });
        }
      }
    }
  }
  
  return breadcrumbs;
};

/**
 * Get navigation context for a lesson (previous/next)
 */
export interface LessonNavigation {
  previous?: Lesson;
  next?: Lesson;
  course?: Course;
}

export const getLessonNavigation = (
  courseId: string, 
  lessonId: string, 
  courses: Course[]
): LessonNavigation => {
  const course = courses.find(c => c.id === courseId);
  if (!course) return {};
  
  const currentIndex = course.lessons.findIndex(lesson => lesson.id === lessonId);
  if (currentIndex === -1) return { course };
  
  return {
    course,
    previous: currentIndex > 0 ? course.lessons[currentIndex - 1] : undefined,
    next: currentIndex < course.lessons.length - 1 ? course.lessons[currentIndex + 1] : undefined
  };
};

/**
 * Generate all valid routes for the application (useful for sitemaps, testing)
 */
export const generateAllRoutes = (courses: Course[]): string[] => {
  const routes = ['/'];
  
  courses.forEach(course => {
    routes.push(getCourseUrl(course.id));
    course.lessons.forEach(lesson => {
      routes.push(getLessonUrl(course.id, lesson.id));
    });
  });
  
  return routes;
};