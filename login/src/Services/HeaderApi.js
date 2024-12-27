import apiClient from './apiClient';

/**
 * تابعی برای ارسال درخواست جستجو به سرور.
 * @param {string} query - متن جستجو.
 * @returns {Promise} - نتایج جستجو از سرور.
 */
export const searchQuery = async (query) => {
  try {
    const response = await apiClient.get(`/search`, { params: { q: query } });
    return response.data;
  } catch (error) {
    console.error('Error during search query:', error);
    throw error;
  }
};

/**
 * تابعی برای دریافت اعلان‌ها از سرور.
 * @returns {Promise} - لیست اعلان‌های دریافت شده.
 */
export const fetchNotifications = async () => {
  try {
    const response = await apiClient.get('/notifications');
    return response.data;
  } catch (error) {
    console.error('Error fetching notifications:', error);
    throw error;
  }
};