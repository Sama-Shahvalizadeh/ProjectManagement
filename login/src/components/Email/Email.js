import React, { useState } from 'react';
import styles from './Email.module.css';
import {sendVerificationCode} from "../../Services/EmailAPI"; 		// استفاده از API برای ارسال کد تایید

export default function Email() {
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  // تابع برای ارسال کد تایید به سرور
  const handleGetCodeClick = async (event) => {
    event.preventDefault();

    if (!email) {
      setError('ایمیل الزامی است.');
      return;
    }

    setError('');
    setIsLoading(true);

    try {
      // ارسال درخواست برای دریافت کد تایید
      const response = await sendVerificationCode(email);
      if (response.success) {
        // هدایت کاربر به صفحه تایید کد
        window.location.href = '/verify';
      } else {
        setError('خطا در ارسال کد تایید. لطفا دوباره تلاش کنید.');
      }
    } catch (error) {
      setError('مشکلی در ارتباط با سرور پیش آمده است.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <form onSubmit={(e) => e.preventDefault()}>

      <div className={styles.div_frame1}>
        <div className={styles.div_project_title}>
          <p className={styles.para_title}>پروژه نگار</p>
        </div>

        <div className={styles.div_login_form}>
          <div className={styles.div_group_content}>
            <div className={styles.div_welcome}>
              <p className={styles.para_enter_account}>وارد کردن ایمیل</p>
            </div>

            <p className={styles.para_verification_code}>برای دریافت کد تایید ایمیل خود را وارد نمایید.</p>

            <div className={styles.div_user_info}>
              <p className={styles.para_email}>ایمیل</p>
              <input
                className={styles.input_email}
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>

            {error && <p className={styles.error_message}>{error}</p>}

            <button type="submit" className={styles.btn_login} onClick={handleGetCodeClick} disabled={isLoading}>
              {isLoading ? 'در حال ارسال...' : 'دریافت کد تایید'}
            </button>
          </div>
        </div>
      </div>
    </form>
  );
}
