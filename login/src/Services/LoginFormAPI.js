// فایل LoginFormAPI.js

import apiClient from './apiClient';

/**
 * تابعی برای ارسال درخواست به سرور جهت ورود کاربر.
 * @param {Object} credentials 						- اطلاعات کاربری شامل نام کاربری و رمز عبور.
 * @returns {Promise} 							- پاسخ سرور شامل اطلاعات کاربری یا پیام خطا.
 */
export const loginUser = async (credentials) => {
  try {
    const response = await apiClient.post('/login', credentials); 	// درخواست POST به سرور برای ورود
    return response.data; 						// داده‌های دریافت شده از سرور
  } catch (error) {
    console.error('Login failed:', error);
    throw error; 							// پرتاب خطا برای مدیریت در لایه بالاتر
  }
};

/**
 * تابعی برای ارسال درخواست به سرور جهت ارسال کد تایید به ایمیل در صورت فراموشی رمز عبور.
 * @param {string} email 						- ایمیل کاربر برای ارسال کد تایید.
 * @returns {Promise} 							- پاسخ سرور شامل اطلاعات ارسال یا پیام خطا.
 */
export const sendVerificationCode = async (email) => {
  try {
    const response = await apiClient.post('/send-verification-code', { email });
    return response.data; 						// داده‌های دریافت شده از سرور
  } catch (error) {
    console.error('Error sending verification code:', error);
    throw error; 							// پرتاب خطا برای مدیریت در لایه بالاتر
  }
};
