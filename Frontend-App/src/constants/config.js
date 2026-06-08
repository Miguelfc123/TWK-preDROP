// Environment and API Configuration
export const API_CONFIG = {
  API_URL: process.env.REACT_APP_API_URL || 'http://localhost:5000/api',
  TIMEOUT: 30000,
};

// App Constants
export const APP_NAME = 'TWK - Fashion Store';
export const APP_VERSION = '1.0.0';

// Routes
export const ROUTES = {
  HOME: '/',
  PRODUCT: (id) => `/product/${id}`,
  SEARCH: (query) => `/?search=${query}`,
};

// Image Paths
export const IMAGE_PATHS = {
  CLOTHING: '/images/clothing',
  FOOTWEAR: '/images/footwear',
  ACCESSORIES: '/images/accessories',
  BANNERS: '/images/banners',
};

// Pagination
export const PAGINATION = {
  ITEMS_PER_PAGE: 12,
  MAX_PAGES: 10,
};
