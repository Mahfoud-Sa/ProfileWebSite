import api from './api';

export interface Service {
  id: number;
  title: string;
  description: string;
  icon: string;
}

export const getServices = async (): Promise<Service[]> => {
  try {
    const response = await api.get('/services');
    return Array.isArray(response.data) ? response.data : [];
  } catch (error) {
    console.error('Error fetching services:', error);
    // Return mock data for demo if API fails
    return [
      {
        id: 1,
        title: 'Mobile Application Development',
        description: 'Building high-performance native and cross-platform mobile apps for iOS and Android.',
        icon: 'Smartphone',
      },
      {
        id: 2,
        title: 'Website Development',
        description: 'Creating modern, responsive, and SEO-optimized websites using React and Next.js.',
        icon: 'Globe',
      },
      {
        id: 3,
        title: 'Systems Integration',
        description: 'Seamlessly connecting disparate software systems through robust RESTful APIs.',
        icon: 'Layers',
      },
      {
        id: 4,
        title: 'UI/UX Design',
        description: 'Crafting intuitive and visually appealing user interfaces using Figma.',
        icon: 'Palette',
      },
    ];
  }
};
