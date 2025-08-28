import type { Course, Lesson, SubGroup, BreadcrumbItem } from '../types';
import { courses } from '../data/courses';

export const getCourseById = (courseId: string): Course | undefined => {
  return courses.find(course => course.id === courseId);
};

export const getLessonById = (courseId: string, lessonId: string): Lesson | undefined => {
  const course = getCourseById(courseId);
  if (!course) return undefined;
  
  return course.lessons.find(lesson => lesson.id === lessonId);
};

export const getSubGroupById = (courseId: string, subGroupId: string): SubGroup | undefined => {
  const course = getCourseById(courseId);
  if (!course || !course.subGroups) return undefined;
  
  return course.subGroups.find(subGroup => subGroup.id === subGroupId);
};

export const getLessonsBySubGroup = (courseId: string, subGroupId: string): Lesson[] => {
  const subGroup = getSubGroupById(courseId, subGroupId);
  return subGroup ? subGroup.lessons : [];
};

export const getNextLesson = (courseId: string, currentLessonId: string): Lesson | undefined => {
  const course = getCourseById(courseId);
  if (!course) return undefined;
  
  const currentIndex = course.lessons.findIndex(lesson => lesson.id === currentLessonId);
  if (currentIndex === -1 || currentIndex === course.lessons.length - 1) return undefined;
  
  return course.lessons[currentIndex + 1];
};

export const getPreviousLesson = (courseId: string, currentLessonId: string): Lesson | undefined => {
  const course = getCourseById(courseId);
  if (!course) return undefined;
  
  const currentIndex = course.lessons.findIndex(lesson => lesson.id === currentLessonId);
  if (currentIndex <= 0) return undefined;
  
  return course.lessons[currentIndex - 1];
};

export const generateBreadcrumbs = (courseId?: string, lessonId?: string): BreadcrumbItem[] => {
  const breadcrumbs: BreadcrumbItem[] = [
    { title: 'Home', path: '/', isActive: !courseId }
  ];
  
  if (courseId) {
    const course = getCourseById(courseId);
    if (course) {
      breadcrumbs.push({
        title: course.title,
        path: course.path,
        isActive: !lessonId
      });
      
      if (lessonId) {
        const lesson = getLessonById(courseId, lessonId);
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
};

export const getAllCourses = (): Course[] => {
  return courses;
};

export const getCourseProgress = (courseId: string): { completed: number; total: number } => {
  const course = getCourseById(courseId);
  if (!course) return { completed: 0, total: 0 };
  
  // This would be enhanced with actual progress tracking
  return {
    completed: 0,
    total: course.lessons.length
  };
};

export const searchLessons = (query: string): Lesson[] => {
  const allLessons = courses.flatMap(course => course.lessons);
  const lowercaseQuery = query.toLowerCase();
  
  return allLessons.filter(lesson => 
    lesson.title.toLowerCase().includes(lowercaseQuery) ||
    lesson.description?.toLowerCase().includes(lowercaseQuery)
  );
};

export const getCoursesByCategory = (): { [key: string]: Course[] } => {
  // This could be enhanced to categorize courses
  return {
    'Fundamentals': courses.filter(c => c.id.includes('fundamentals') || c.id.includes('tutorial')),
    'Advanced': courses.filter(c => c.id.includes('real-world') || c.id.includes('evaluations') || c.id.includes('tool-use'))
  };
};