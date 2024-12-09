import React from "react";
import styles from "./SuccessPass.module.css";

function SuccessPass() {
    const handleLoginRedirect = () => {
        // انتقال به صفحه ورود
        console.log("Redirecting to login page...");
    };

    return (
        <div className="success-container">
            {/* بخش سمت چپ */}
            <div className="success-header">
                <p className="success-title">پروژه نگار</p>
            </div>

            {/* بخش سمت راست */}
            <div className="success-content">
            <div className="success-icon">
                <i className="fas fa-check"></i>
            </div>

                <p className="success-message">رمز عبور شما با موفقیت تغییر یافت.</p>
                <button className="success-button" onClick={handleLoginRedirect}>
                    ورود به حساب کاربری
                </button>
            </div>
        </div>
    );
}

export default SuccessPass;
