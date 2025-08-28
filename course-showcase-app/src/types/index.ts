export interface Course {
  id: string;
  title: string;
  description: string;
  path: string;
  lessons: Lesson[];
  subGroups?: SubGroup[];
  readmeContent?: string;
}

export interface SubGroup {
  id: string;
  title: string;
  lessons: Lesson[];
}

export interface Lesson {
  id: string;
  title: string;
  filename: string;
  path: string;
  courseId: string;
  subGroupId?: string;
  description?: string;
  notebookContent?: string;
  images?: string[];
}

export interface NavigationItem {
  title: string;
  path: string;
  level: 'course' | 'lesson' | 'subgroup';
  parentPath?: string;
}

export interface BreadcrumbItem {
  title: string;
  path: string;
  isActive: boolean;
}