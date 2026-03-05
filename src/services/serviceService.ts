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
        title: 'Web Development',
        description: 'Building modern, responsive, and high-performance websites.',
        icon: 'Code',
      },
      {
        id: 2,
        title: 'Mobile Apps',
        description: 'Creating cross-platform mobile applications for iOS and Android.',
        icon: 'Smartphone',
      },
      {
        id: 3,
        title: 'Cloud Solutions',
        description: 'Scalable cloud infrastructure and serverless architectures.',
        icon: 'Cloud',
      },
    ];
  }
};
