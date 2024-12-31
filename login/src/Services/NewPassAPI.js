import apiClient from './apiClient';

/**
 * تابعی برای ارسال درخواست به سرور جهت تغییر رمز عبور.
 * @param {Object} passwordData 						- داده‌های مربوط به رمز عبور جدید (شامل newPassword و confirmPassword).
 * @returns {Promise} 								- پاسخ سرور شامل نتیجه عملیات تغییر رمز عبور یا پیام خطا.
 */
export const changePassword = async (passwordData) => {
  try {
    // ارسال درخواست POST به سرور برای تغییر رمز عبور
    const response = await apiClient.post('/user/change-password', passwordData);
    return response.data; 							// بازگشت داده‌های دریافتی از سرور (مثلاً پیامی مبنی بر موفقیت یا خطا)
  } catch (error) {
    console.error('Error changing password:', error);
    throw error; 								// پرتاب خطا برای مدیریت در لایه بالاتر
  }
};
