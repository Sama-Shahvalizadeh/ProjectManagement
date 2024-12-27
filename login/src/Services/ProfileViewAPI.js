import apiClient from './apiClient';

/**
 * تابعی برای ارسال درخواست به سرور جهت دریافت اطلاعات پروفایل کاربر.
 * @param {string} userId - شناسه کاربری برای دریافت اطلاعات پروفایل.
 * @returns {Promise} - پاسخ سرور شامل اطلاعات پروفایل یا خطا.
 */
export const getProfile = async (userId) => {
  try {
    // ارسال درخواست GET به سرور برای دریافت اطلاعات پروفایل
    const response = await apiClient.get(`/user/profile/${userId}`);
    return response.data;                                                       // بازگرداندن داده‌های دریافت شده از سرور
  } catch (error) {
    console.error('Error during fetching profile:', error);
    throw error;                                                                // پرتاب خطا برای مدیریت در لایه بالاتر
  }
};

/**
 * تابعی برای ارسال درخواست به سرور جهت آپدیت اطلاعات پروفایل کاربر.
 * @param {string} userId                                                       - شناسه کاربری برای آپدیت پروفایل.
 * @param {Object} updatedData                                                  - داده‌های جدید برای آپدیت پروفایل (نام، ایمیل، تلفن و غیره).
 * @returns {Promise}                                                           - پاسخ سرور شامل موفقیت یا خطا.
 */
export const updateProfile = async (userId, updatedData) => {
  try {
    // ارسال درخواست PUT به سرور برای آپدیت اطلاعات پروفایل
    const response = await apiClient.put(`/user/profile/${userId}`, updatedData);
    return response.data;                                                       // بازگرداندن داده‌های دریافت شده از سرور
  } catch (error) {
    console.error('Error during updating profile:', error);
    throw error;                                                                // پرتاب خطا برای مدیریت در لایه بالاتر
  }
};