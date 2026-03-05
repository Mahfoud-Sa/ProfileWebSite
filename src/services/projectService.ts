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
        title: 'Herfah - Artisan Marketplace',
        description: 'A comprehensive platform for artisans to showcase and sell their handmade crafts.',
        technologies: ['React', 'Next.js', 'ASP.NET Core', 'SQL Server'],
        imageUrl: 'https://picsum.photos/seed/herfah/600/400',
        link: '#',
      },
      {
        id: 2,
        title: 'Accounting & Project Management',
        description: 'An integrated system for managing business finances and project timelines efficiently.',
        technologies: ['ASP.NET Core', 'React', 'Azure', 'Swagger'],
        imageUrl: 'https://picsum.photos/seed/accounting/600/400',
        link: '#',
      },
      {
        id: 3,
        title: 'E-Commerce Integration',
        description: 'Seamless integration of payment gateways and inventory management for retail businesses.',
        technologies: ['Next.js', 'RESTful APIs', 'Stripe'],
        imageUrl: 'https://picsum.photos/seed/ecommerce/600/400',
        link: '#',
      },
    ];
  }
};
