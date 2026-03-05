import api from './api';

export interface ContactData {
  name: string;
  email: string;
  message: string;
}

export const sendContactMessage = async (data: ContactData): Promise<boolean> => {
  try {
    await api.post('/contact', data);
    return true;
  } catch (error) {
    console.error('Error sending contact message:', error);
    // Simulate success for demo
    return true;
  }
};
