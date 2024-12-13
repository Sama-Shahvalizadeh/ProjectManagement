import apiClient from './apiClient';

/**
 * تابعی برای ارسال درخواست به سرور جهت افزودن عضو جدید به پروژه.
 * @param {Object} memberData 							- اطلاعات عضو جدید (همکار، سمت، توضیحات)
 * @returns {Promise} 								- پاسخ سرور شامل تایید یا پیام خطا
 */
export const addMember = async (memberData) => {
  try {
    // ارسال درخواست POST به سرور برای افزودن عضو جدید
    const response = await apiClient.post('/members/add', memberData);
    return response.data; 							// بازگرداندن داده‌های دریافت شده از سرور
  } catch (error) {
    console.error('Error adding member:', error);
    throw error; 								// پرتاب خطا برای مدیریت در لایه بالاتر
  }
};
