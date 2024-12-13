// فایل VerifyAPI.js

import apiClient from './apiClient';

/**
 * ارسال درخواست برای تایید کد وارد شده.
 * @param {string} email 								- ایمیل کاربر برای ارسال کد تایید.
 * @param {string} verificationCode 							- کد تایید وارد شده توسط کاربر.
 * @returns {Promise} 									- پاسخ سرور که می‌تواند وضعیت موفقیت یا خطا باشد.
 */
export const verifyCode = async (email, verificationCode) => {
  try {
    // ارسال درخواست POST به سرور برای تایید کد
    const response = await apiClient.post('/verify', { email, verificationCode });
    return response.data; 								// بازگرداندن داده‌های دریافت شده از سرور
  } catch (error) {
    console.error('Error verifying code:', error);
    throw error; 									// پرتاب خطا برای مدیریت در لایه بالاتر
  }
};

/**
 * ارسال درخواست برای ارسال مجدد کد تایید.
 * @param {string} email 								- ایمیل کاربر برای ارسال کد تایید.
 * @returns {Promise} 									- پاسخ سرور که می‌تواند وضعیت موفقیت یا خطا باشد.
 */
export const resendVerificationCode = async (email) => {
  try {
    // ارسال درخواست POST به سرور برای ارسال مجدد کد
    const response = await apiClient.post('/verify/resend', { email });
    return response.data; 								// بازگرداندن داده‌های دریافت شده از سرور
  } catch (error) {
    console.error('Error resending verification code:', error);
    throw error; 									// پرتاب خطا برای مدیریت در لایه بالاتر
  }
};
