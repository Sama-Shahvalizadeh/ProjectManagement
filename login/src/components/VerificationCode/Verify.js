import React, { useState, useEffect } from 'react';
import styles from './Verify.module.css';
import back from "../../icons/Frame 1000001414.png";

export default function Verify() {
    const [timer, setTimer] = useState(240); // 4 دقیقه
    const [verificationError, setVerificationError] = useState(false); // خطای کد تایید

    useEffect(() => {
        if (timer > 0) {
            const interval = setInterval(() => {
                setTimer((prevTimer) => prevTimer - 1);
            }, 1000);

            return () => clearInterval(interval); // پاک کردن تایمر هنگام خروج
        }
    }, [timer]);

    const handleVerificationSubmit = (event) => {
        event.preventDefault();

        const inputs = Array.from(document.querySelectorAll('.input-code'));
        const enteredCode = inputs.map((input) => input.value).join('');
        const correctCode = '123456'; // کد صحیح

        if (enteredCode !== correctCode) {
            setVerificationError(true);
        } else {
            alert('کد تایید با موفقیت تایید شد!');
            setVerificationError(false);
            window.location.href = 'newpass';
        }
    };

    const handleBackePage = (event) => {
        event.preventDefault();
        window.location.href = 'email';
    };

    const formatTime = (time) => {
        const minutes = Math.floor(time / 60);
        const seconds = time % 60;
        return `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
    };

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
                        <input key={index} className={`${styles.input_code} input-code`} type="text" maxLength="1" />
                    ))}
                </div>

                <p className={styles.timer}>زمان باقی‌مانده: {formatTime(timer)}</p>

                {verificationError && (
                    <div className={styles.div_verification_error}>
                        <i className="fas fa-exclamation-triangle icon-warning"></i>
                        <p className={styles.error_message}>کد تایید اشتباه است.</p>
                    </div>
                )}

                <p className={styles.para_resend}>
                    آیا هنوز کد تأیید را دریافت نکرده‌اید؟ <span className={styles.resend_link}>ارسال مجدد</span>
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

            <div className={styles.main_enter_container} style={{ direction: 'rtl' }}>
                <div style={styles.div_back}>
                    <button onClick={handleBackePage}>
                        <img src={back} className={styles.back_btn} alt="icon" />
                    </button>
                </div>
                <div className={styles.div_login_form}>
                    <div className={styles.div_group_content}>
                        {renderVerificationPage()}
                    </div>
                </div>
            </div>
        </div>
    );
}
