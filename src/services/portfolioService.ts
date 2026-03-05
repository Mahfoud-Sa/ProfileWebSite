import api from './api';

export interface PortfolioItem {
  id: number;
  title: string;
  category: string;
  imageUrl: string;
}

export const getPortfolio = async (): Promise<PortfolioItem[]> => {
  try {
    const response = await api.get('/portfolio');
    return Array.isArray(response.data) ? response.data : [];
  } catch (error) {
    console.error('Error fetching portfolio:', error);
    // Return mock data for demo if API fails
    return [
      { id: 1, title: 'Fintech App UI', category: 'UI/UX Design', imageUrl: 'https://picsum.photos/seed/ui1/600/600' },
      { id: 2, title: 'Corporate Branding', category: 'Branding', imageUrl: 'https://picsum.photos/seed/brand1/600/600' },
      { id: 3, title: 'SaaS Platform', category: 'Web App', imageUrl: 'https://picsum.photos/seed/saas1/600/600' },
      { id: 4, title: 'Mobile Wallet', category: 'Mobile App', imageUrl: 'https://picsum.photos/seed/wallet1/600/600' },
      { id: 5, title: 'E-learning Portal', category: 'Web App', imageUrl: 'https://picsum.photos/seed/learn1/600/600' },
      { id: 6, title: 'Health Tracker', category: 'Mobile App', imageUrl: 'https://picsum.photos/seed/health1/600/600' },
    ];
  }
};
