import { useColorScheme as useNativeColorScheme } from 'react-native';

export const useColorScheme = () => {
  return useNativeColorScheme() ?? 'light';
};

export const Colors = {
  light: {
    text: '#000',
    background: '#fff',
    card: '#f5f5f5',
    primary: '#007AFF',
    border: '#e0e0e0',
    placeholder: '#999',
  },
  dark: {
    text: '#fff',
    background: '#000',
    card: '#1c1c1e',
    primary: '#0A84FF',
    border: '#38383a',
    placeholder: '#666',
  },
};

export const formatDate = (dateString: string | null): string => {
  if (!dateString) return 'N/A';
  const date = new Date(dateString);
  return new Intl.DateTimeFormat('vi-VN', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  }).format(date);
};

export const formatRelativeTime = (dateString: string | null): string => {
  if (!dateString) return '';
  
  const date = new Date(dateString);
  const now = new Date();
  const diffInSeconds = Math.floor((now.getTime() - date.getTime()) / 1000);
  
  if (diffInSeconds < 60) return 'vừa xong';
  if (diffInSeconds < 3600) return `${Math.floor(diffInSeconds / 60)} phút trước`;
  if (diffInSeconds < 86400) return `${Math.floor(diffInSeconds / 3600)} giờ trước`;
  if (diffInSeconds < 604800) return `${Math.floor(diffInSeconds / 86400)} ngày trước`;
  
  return formatDate(dateString);
};

export const truncateText = (text: string, maxLength: number): string => {
  if (text.length <= maxLength) return text;
  return text.substring(0, maxLength).trim() + '...';
};
