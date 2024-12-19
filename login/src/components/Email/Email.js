import React, { useState } from 'react';
import styles from './Email.module.css';
import back from "../../icons/Frame 1000001414.png";

export default function Email() {
    const [email, setEmail] = useState('');
    const [errors, setErrors] = useState({ email: '' });

    const handleGetCodeClick = (event) => {
        event.preventDefault();

        // بررسی خالی بودن فیلد ایمیل
        if (!email.trim()) {
            setErrors({ email: 'وارد کردن این فیلد الزامی است.' });
        } else {
            setErrors({ email: '' });
            window.location.href = 'verify'; // تغییر به صفحه کد تایید
        }
    }

    const handleBackPage = (event) =>{
        window.location.href = 'login'; // تغییر به صفحه کد تایید
    }

    return (
        <div className={styles.main_container} style={{ direction: 'rtl' }}>
            <div className={styles.main_enter_container}>

                <div className={styles.top_div}>
                    <button className={styles.rounded_full}>
                        <img src={back} className={styles.back} alt="icon" onClick={handleBackPage}/>
                    </button>
                </div>

                <div className={styles.content_div}>
                    <div className={styles.enter_header}>
                        <div className={styles.enter_email}>
                            وارد کردن ایمیل
                        </div>
                        <div className={styles.for_code}>
                            برای دریافت کد تایید، ایمیل خود را وارد نمایید.
                        </div>
                    </div>

                    <div className={styles.div_email_field}>
                        <div className={styles.email_field}>
                            <label className={styles.email_label} htmlFor="email">ایمیل</label>
                            <input
                                type="email"
                                id="email"
                                className={`${styles.input_email} ${errors.email ? styles.input_error : ''}`}
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

                    </div>

                    <button className={styles.get_code_btn} onClick={handleGetCodeClick}>
                        دریافت کد تایید
                    </button>
                </div>
            </div>

            <div className={styles.div_project_title}>
                پروژه نگار
            </div>
        </div>
    );
}
