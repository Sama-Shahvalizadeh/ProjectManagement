import React from "react";
import styles from "./SuccessPass.module.css";

export default function SuccessPass() {
    const handleLoginRedirect = () => {
        // انتقال به صفحه ورود
        console.log("Redirecting to login page...");
    };

    return (
        <div className={styles.success_container}>
            {/* بخش سمت چپ */}
            <div className={styles.success_header}>
                <p className={styles.success_title}>پروژه نگار</p>
            </div>

            {/* بخش سمت راست */}
            <div className={styles.success_content}>
                <div className={styles.success_icon}>
                    <i className="fas fa-check"></i>
                </div>
                <p className={styles.success_message}>رمز عبور شما با موفقیت تغییر یافت.</p>
                <button className={styles.success_button} onClick={handleLoginRedirect}>
                    ورود به حساب کاربری
                </button>
            </div>
        </div>
    );
}
