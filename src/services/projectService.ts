import api from './api';

export interface Project {
  id: number;
  title: string;
  description: string;
  technologies: string[];
  imageUrl: string;
  link: string;
}

export const getProjects = async (): Promise<Project[]> => {
  try {
    const response = await api.get('/projects');
    return Array.isArray(response.data) ? response.data : [];
  } catch (error) {
    console.error('Error fetching projects:', error);
    // Return mock data for demo if API fails
    return [
      {
        id: 1,
        title: 'E-Commerce Platform',
        description: 'A full-featured online store with payment integration.',
        technologies: ['React', 'ASP.NET Core', 'SQL Server'],
        imageUrl: 'https://picsum.photos/seed/ecommerce/600/400',
        link: '#',
      },
      {
        id: 2,
        title: 'Cloud Dashboard',
        description: 'Real-time monitoring for cloud infrastructure.',
        technologies: ['React', 'D3.js', 'Azure'],
        imageUrl: 'https://picsum.photos/seed/dashboard/600/400',
        link: '#',
      },
    ];
  }
};
