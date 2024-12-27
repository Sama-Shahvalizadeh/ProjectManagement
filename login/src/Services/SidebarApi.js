import apiClient from './apiClient';

/**
 * تابعی برای دریافت اطلاعات پروفایل کاربر.
 * @returns {Promise}                                           - اطلاعات پروفایل کاربر از سرور.
 */
export const fetchUserProfile = async () => {
  try {
    const response = await apiClient.get('/user/profile');
    return response.data;
  } catch (error) {
    console.error('Error fetching user profile:', error);
    throw error;
  }
};

/**
 * تابعی برای دریافت لیست پروژه‌ها.
 * @returns {Promise}                                            - لیست پروژه‌ها از سرور.
 */
export const fetchProjects = async () => {
  try {
    const response = await apiClient.get('/projects');
    return response.data;
  } catch (error) {
    console.error('Error fetching projects:', error);
    throw error;
  }
};

/**
 * تابعی برای دریافت وظایف کاربر.
 * @returns {Promise}                                             - لیست وظایف از سرور.
 */
export const fetchTasks = async () => {
  try {
    const response = await apiClient.get('/tasks');
    return response.data;
  } catch (error) {
    console.error('Error fetching tasks:', error);
    throw error;
  }
};