import React, { useState } from 'react';
import styles from './Email.module.css';
import back from "../../icons/Frame 1000001414.png";

export default function Email() {

    const handleGetCodeClick = async (event) => {
        event.preventDefault();
        window.location.href = 'verify'
    }

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
   