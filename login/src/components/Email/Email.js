import React, { useState } from 'react';
import styles from './Email.module.css';

export default function Email() {

    const handleGetCodeClick = (event) => {
        event.preventDefault();
        window.location.href = 'verify'
    }

    return (
        <form onSubmit={() => {}}>

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
                <input className={styles.input_email} type="email" />
            </div>

            <button type="submit" className={styles.btn_login} onClick={handleGetCodeClick}>
                دریافت کد تایید
            </button>
                </div>
            </div>
            
            </div>
        </form>
    );


    }
   