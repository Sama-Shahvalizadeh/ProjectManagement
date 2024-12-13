import apiClient from './apiClient';

/**
 * تابعی برای ارسال درخواست به سرور جهت دریافت کد تایید ایمیل.
 * @param {string} email 									- آدرس ایمیل وارد شده توسط کاربر.
 * @returns {Promise} 										- پاسخ سرور شامل وضعیت درخواست یا پیام خطا.
 */
export const sendVerificationCode = async (email) => {
  try {
    // ارسال درخواست POST به سرور برای ارسال کد تایید ایمیل
    const response = await apiClient.post('/email/send-verification-code', { email });
    return response.data; 									// بازگرداندن داده‌های دریافت شده از سرور
  } catch (error) {
    console.error('Error sending verification code:', error);
    throw error; 										// پرتاب خطا برای مدیریت در لایه بالاتر
  }
};
