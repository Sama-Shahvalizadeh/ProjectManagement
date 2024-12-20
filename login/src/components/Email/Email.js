import React, { useState } from 'react';
import styles from './Email.module.css';
import back from "../../icons/Frame 1000001414.png";

export default function Email() {
    const [email, setEmail] = useState('');
    const [errors, setErrors] = useState({});

    const handleGetCodeClick = (event) => {
        event.preventDefault();
        if (!email.trim()) {
            setErrors({ email: 'ایمیل نمی‌تواند خالی باشد.' });
            return;
        }
        setErrors({}); // پاک کردن ارور در صورت صحت اطلاعات
        window.location.href = 'verify';
    };

    const handleBackePage = (event) => {
        event.preventDefault();
        window.location.href = 'login';
    };

    return (
        <div className={styles.div_frame1}>

            <div className={styles.div_project_title}>
                <p className={`${styles.para_title} ${styles.center_title}`}>پروژه نگار</p>
            </div>

            <div className={styles.main_enter_container} style={{ direction: 'rtl' }}>
                <div style={styles.div_back}>
                    <button onClick={handleBackePage}>
                        <img src={back} className={styles.back_btn} alt="icon" />
                    </button>
                </div>

                <div className={styles.div_login_form}>
                    <div className={styles.div_group_content}>
                        <div className={styles.div_welcome}>
                            <p className={styles.para_enter_account}>وارد کردن ایمیل</p>
                        </div>

                        <p className={styles.para_verification_code}>
                            برای دریافت کد تایید ایمیل خود را وارد نمایید.
                        </p>

                        <div className={styles.div_user_info}>
                            <p className={styles.para_email}>ایمیل</p>
                            <input
                                className={styles.input_email}
                                type="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                            />
                            {errors.email && (
                                <div className={styles.error_container}>
                                    <i className="fas fa-exclamation-triangle icon-warning"></i>
                                    <p className={styles.error_message}>{errors.email}</p>
                                </div>
                            )}
                        </div>

                        <button type="submit" className={styles.btn_login} onClick={handleGetCodeClick}>
                            دریافت کد تایید
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}
