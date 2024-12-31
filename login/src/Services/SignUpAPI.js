import apiClient from './apiClient';

/**
 * تابعی برای ارسال درخواست به سرور جهت ثبت‌نام کاربر جدید.
 * @param {Object} userData 						- اطلاعات کاربر جدید (نام، ایمیل، شماره تلفن، رمز عبور و غیره).
 * @returns {Promise} 							- پاسخ سرور شامل موفقیت یا خطا.
 */
export const signUp = async (userData) => {
  try {
    // ارسال درخواست POST به سرور برای ثبت‌نام
    const response = await apiClient.post('/auth/signup', userData);
    return response.data; 						// بازگرداندن داده‌های دریافت شده از سرور
  } catch (error) {
    console.error('Error during sign up:', error);
    throw error; 							// پرتاب خطا برای مدیریت در لایه بالاتر
  }
};
