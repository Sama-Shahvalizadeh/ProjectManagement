import apiClient from './apiClient';

/**
 * تابعی برای ارسال درخواست به سرور جهت ایجاد یک پروژه جدید.
 * @param {Object} projectData 							- اطلاعات پروژه جدید (مانند نام، توضیحات و غیره).
 * @returns {Promise} 								- پاسخ سرور شامل اطلاعات پروژه ایجاد شده یا پیام خطا.
 */
export const createProject = async (projectData) => {
  try {
    // ارسال درخواست POST به سرور
    const response = await apiClient.post('/projects/create', projectData);
    return response.data; 							// بازگرداندن داده‌های دریافت شده از سرور
  } catch (error) {
    console.error('Error creating project:', error);
    throw error; 								// پرتاب خطا برای مدیریت در لایه بالاتر
  }
};
