import React, { useState, useEffect } from 'react';
import styles from './Verify.module.css' ;
import { Link } from 'react-router-dom';

export default function Verify(){

  const [isVerificationPage, setIsVerificationPage] = useState(false); // حالت صفحه وارد کردن کد
  const [timer, setTimer] = useState(240); // 4 دقیقه
  const [verificationError, setVerificationError] = useState(false); // خطای کد تایید

  useEffect(() => {
    let interval;
    if (isVerificationPage && timer > 0) {
        interval = setInterval(() => {
            setTimer((prevTimer) => prevTimer - 1);
        }, 1000);
    }
    return () => clearInterval(interval);
}, [isVerificationPage, timer]);


const handleVerificationSubmit = (event) => {
  event.preventDefault();

  const inputs = Array.from(document.querySelectorAll('.input-code'));
  const enteredCode = inputs.map((input) => input.value).join('');
  const correctCode = '123456'; // کد صحیح

  if (enteredCode !== correctCode) {
      setVerificationError(true);
      inputs.forEach((input) => (input.className = 'input-code error'));
  } else {
      alert('کد تایید با موفقیت تایید شد!');
      setVerificationError(false);
  }
};
  
  const handleNewPass = (event) =>{
        event.preventDefault();
        window.location.href = 'newpass'

  }
  const renderVerificationPage = () => (
    <form onSubmit={handleVerificationSubmit}>
        <div className={styles.div_verification_container}>
            <div className={styles.div_welcome}>
                <p className={styles.para_enter_account}>وارد کردن کد تایید</p>
            </div>

            <p className={styles.para_verification_code}>
                لطفاً کد تأییدی که به ایمیل 
                ارسال شد را وارد نمایید.
            </p>

            <div className={styles.input_code_container}>
                {Array.from({ length: 6 }).map((_, index) => (
                    <input key={index} className={styles.input_code} type="text" maxLength="1" />
                ))}
            </div>

            <p className={styles.timer}>زمان باقی‌مانده: {Math.floor(timer / 60)}:{timer % 60 < 10 ? '0' : ''}{timer % 60}</p>

            {verificationError && (
                <div className={styles.div_verification_error}>
                    <i className="fas fa-exclamation-triangle icon-warning"></i>
                    <p className={styles.error_message}>کد تایید اشتباه است.</p>
                </div>
            )}

            <p className={styles.para_resend}>
                آیا هنوز کد تأیید را دریافت نکرده‌اید؟ <span className={styles.resend_link}>ارسال مجدد</span>
            </p>
            <button type="submit" className={styles.btn_login} onClick={handleNewPass}>احراز کد تایید</button>
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
