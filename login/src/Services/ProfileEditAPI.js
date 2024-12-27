import apiClient from './apiClient';

/**
 * تابعی برای به‌روزرسانی اطلاعات کاربر.
 * @param {Object} userData                                             - اطلاعات جدید کاربر (نام، ایمیل، شماره تلفن و...).
 * @returns {Promise}                                                   - پاسخ سرور شامل موفقیت یا خطا.
 */
export const updateProfile = async (userData) => {
  try {
    // ارسال درخواست PUT به سرور برای به‌روزرسانی اطلاعات پروفایل
    const response = await apiClient.put('/user/profile', userData);
    return response.data;                                               // بازگرداندن داده‌های دریافت شده از سرور
  } catch (error) {
    console.error('Error during profile update:', error);
    throw error;                                                        // پرتاب خطا برای مدیریت در لایه بالاتر
  }
};