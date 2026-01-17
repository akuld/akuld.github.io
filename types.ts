
export interface Project {
  id: string;
  title: string;
  shortDescription: string;
  fullDescription: string;
  category: string;
  tags: string[];
  imageUrl: string;
  galleryUrls?: string[];
  videoUrl?: string;
  githubUrl?: string;
  demoUrl?: string;
  date: string;
}

export interface LinkItem {
  label: string;
  url: string;
  icon: string;
}

export interface Skill {
  name: string;
  level: number; // 0 to 100
  category: 'Software' | 'Hardware' | 'Design' | 'General';
}
