import React, { useState, useEffect } from 'react';
import {verifyCode, resendVerificationCode} from '../../Services/VerifyAPI';
import styles from './Verify.module.css';

export default function Verify() {
  const [isVerificationPage, setIsVerificationPage] = useState(false); 			// حالت صفحه وارد کردن کد
  const [timer, setTimer] = useState(240); 						// 4 دقیقه
  const [verificationError, setVerificationError] = useState(false); 			// خطای کد تایید
  const [email, setEmail] = useState(''); 						// ذخیره ایمیل کاربر
  const [verificationCode, setVerificationCode] = useState(''); 			// کد تایید وارد شده

  useEffect(() => {
    let interval;
    if (isVerificationPage && timer > 0) {
      interval = setInterval(() => {
        setTimer((prevTimer) => prevTimer - 1);
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [isVerificationPage, timer]);

  const handleVerificationSubmit = async (event) => {
    event.preventDefault();
    
    try {
      // فراخوانی API برای تایید کد
      const response = await verifyCode(email, verificationCode);
      if (response.success) {
        alert('کد تایید با موفقیت تایید شد!');
        setVerificationError(false);
      } else {
        setVerificationError(true);
      }
    } catch (error) {
      setVerificationError(true);
    }
  };

  const handleNewPass = (event) => {
    event.preventDefault();
    window.location.href = 'newpass';
  };

  const handleResendCode = async () => {
    try {
      // ارسال درخواست برای ارسال مجدد کد تایید
      const response = await resendVerificationCode(email);
      if (response.success) {
        alert('کد تایید مجدداً ارسال شد!');
      }
    } catch (error) {
      alert('خطا در ارسال مجدد کد تایید');
    }
  };

  const renderVerificationPage = () => (
    <form onSubmit={handleVerificationSubmit}>
      <div className={styles.div_verification_container}>
        <div className={styles.div_welcome}>
          <p className={styles.para_enter_account}>وارد کردن کد تایید</p>
        </div>

        <p className={styles.para_verification_code}>
          لطفاً کد تأییدی که به ایمیل {email} ارسال شد را وارد نمایید.
        </p>

        <div className={styles.input_code_container}>
          {Array.from({ length: 6 }).map((_, index) => (
            <input
              key={index}
              className={styles.input_code}
              type="text"
              maxLength="1"
              onChange={(e) => setVerificationCode((prev) => prev + e.target.value)}
            />
          ))}
        </div>

        <p className={styles.timer}>
          زمان باقی‌مانده: {Math.floor(timer / 60)}:{timer % 60 < 10 ? '0' : ''}{timer % 60}
        </p>

        {verificationError && (
          <div className={styles.div_verification_error}>
            <i className="fas fa-exclamation-triangle icon-warning"></i>
            <p className={styles.error_message}>کد تایید اشتباه است.</p>
          </div>
        )}

        <p className={styles.para_resend}>
          آیا هنوز کد تأیید را دریافت نکرده‌اید?{' '}
          <span className={styles.resend_link} onClick={handleResendCode}>
            ارسال مجدد
          </span>
        </p>
        <button type="submit" className={styles.btn_login}>
          احراز کد تایید
        </button>
      </div>
    </form>
  );

  return (
    <div className={styles.div_frame1}>
      <div className={styles.div_project_title}>
        <p className={styles.para_title}>پروژه نگار</p>
      </div>

      <div className={styles.div_login_form}>
        <div className={styles.div_group_content}>
          {renderVerificationPage()}
        </div>
      </div>
    </div>
  );
}
