import React from "react";
import "./SuccessPass.css";

function SuccessMessage({ onRedirect }) {
    return (
        <div className="success-container">
            <div className="success-header">
                <p className="success-title">پروژه نگار</p>
            </div>
            <div className="success-content">
                <div className="success-icon">
                    <i className="fas fa-check"></i>
                </div>
                <p className="success-message">رمز عبور شما با موفقیت تغییر یافت.</p>
                <button className="success-button" onClick={onRedirect}>
                    ورود به حساب کاربری
                </button>
            </div>
        </div>
    );
}

export default SuccessMessage;
