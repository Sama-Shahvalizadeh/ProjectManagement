import axios from 'axios';

/**
 * این کلاینت API برای مدیریت تمام درخواست‌های API به کار می‌رود.
 * شما می‌توانید baseURL را تغییر دهید تا مطابق با URL سرور بک‌اند باشد.
 */
const apiClient = axios.create({
  baseURL: 'https://your-backend-server.com/api',                                     // آدرس پایه API را اینجا وارد کنید
  timeout: 10000,                                                                     // حداکثر زمان انتظار برای هر درخواست
  headers: {
    'Content-Type': 'application/json',                                               // نوع داده‌های ارسالی
  },      
});

/**
 * این بخش برای مدیریت توکن‌های احراز هویت استفاده می‌شود.
 * می‌توانید قبل از ارسال هر درخواست، توکن را به هدر Authorization اضافه کنید.
 */
apiClient.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('authToken');                                  // توکن احراز هویت را از localStorage می‌گیرد
    if (token) {
      config.headers['Authorization'] = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    // خطاهای مربوط به درخواست را اینجا مدیریت کنید
    return Promise.reject(error);
  }
);

/**
 * این بخش برای مدیریت خطاهای عمومی پاسخ‌های API است.
 */
apiClient.interceptors.response.use(
  (response) => {
    // پاسخ‌های موفق را اینجا مدیریت کنید
    return response;
  },
  (error) => {
    // خطاهای مربوط به پاسخ را اینجا مدیریت کنید
    if (error.response && error.response.status === 401) {
      // اگر وضعیت 401 (احراز هویت ناموفق) باشد
      console.error('Unauthorized! Redirecting to login page...');
      window.location.href = '/login';
    }
    return Promise.reject(error);
  }
);

export default apiClient;
