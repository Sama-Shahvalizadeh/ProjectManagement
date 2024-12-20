import React, { useState } from 'react';
import styles from './NewPass.module.css';
import back from "../../icons/Frame 1000001414.png";

export default function NewPass() {
    const [newPassword, setNewPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [errors, setErrors] = useState({ newPassword: '', confirmPassword: '', general: '' });
    const [isPasswordMismatch, setIsPasswordMismatch] = useState(false); // برای بررسی مغایرت

    const handleBackePage = (event) => {
        event.preventDefault();
        window.location.href = 'verify';
    };

    const handleSubmit = (event) => {
        event.preventDefault();

        let valid = true;
        const newErrors = { newPassword: '', confirmPassword: '', general: '' };

        if (!newPassword) {
            newErrors.newPassword = 'این فیلد نباید خالی باشد';
            valid = false;
        }

        if (!confirmPassword) {
            newErrors.confirmPassword = 'این فیلد نباید خالی باشد';
            valid = false;
        }

        if (newPassword && confirmPassword && newPassword !== confirmPassword) {
            newErrors.confirmPassword = 'تکرار رمز عبور با رمز عبور یکسان نیست';
            valid = false;
            setIsPasswordMismatch(true); // فعال‌سازی بررسی مغایرت
        } else {
            setIsPasswordMismatch(false); // غیر فعال‌سازی بررسی مغایرت
        }

        setErrors(newErrors);

        if (valid) {
            console.log('Sending data...');
            window.location.href = 'successpass'; // ریدایرکت فقط زمانی که همه شرایط برآورده شده باشند
        }
    };

    return (
        <div className={styles.div_frame1}>
            <div className={styles.div_project_title}>
                <p className={styles.para_prj_title}>پروژه نگار</p>
            </div>

            <div className={styles.main_enter_container} style={{ direction: 'rtl' }}>
                <div style={styles.div_back}>
                    <button onClick={handleBackePage}>
                        <img src={back} className={styles.back_btn} alt="icon" />
                    </button>
                </div>
                <div className={styles.div_new_pass_form}>
                    <form onSubmit={handleSubmit}>
                        <div className={styles.form_title}>
                            <p className={styles.para_title}>تعریف رمز عبور جدید</p>
                            <p className={styles.para_welcome}>رمز عبور جدید شما باید مغایر با رمز عبور قبلی باشد.</p>
                        </div>

                        <div className={styles.div_change_pass}>
                            <label htmlFor="newPassword" className={`${styles.para_username} ${isPasswordMismatch ? styles.error_label : ''}`}>رمز عبور جدید</label>
                            <input
                                id="newPassword"
                                className={`${styles.input_new_pass} ${errors.newPassword || isPasswordMismatch ? styles.input_error : ''}`}
                                type="password"
                                value={newPassword}
                                onChange={(e) => setNewPassword(e.target.value)}
                            />
                            {errors.newPassword && (
                                <div className={styles.error_container}>
                                    <i className="fas fa-exclamation-triangle icon-warning"></i>
                                    <p className={styles.error_message}>{errors.newPassword}</p>
                                </div>
                            )}

                            <label htmlFor="confirmPassword" className={`${styles.para_username} ${isPasswordMismatch ? styles.error_label : ''}`}>تکرار رمز عبور جدید</label>
                            <input
                                id="confirmPassword"
                                className={`${styles.input_conf_pass} ${errors.confirmPassword || isPasswordMismatch ? styles.input_error : ''}`}
                                type="password"
                                value={confirmPassword}
                                onChange={(e) => setConfirmPassword(e.target.value)}
                            />
                            {errors.confirmPassword && (
                                <div className={styles.error_container}>
                                    <i className="fas fa-exclamation-triangle icon-warning"></i>
                                    <p className={styles.error_message}>{errors.confirmPassword}</p>
                                </div>
                            )}
                        </div>

                        {/* If there's an email field, you can add a similar structure as needed */}
                        {errors.general && (
                            <div className={styles.div_general_error}>
                                <div className={styles.div_verification_error}>
                                    <i className="fas fa-exclamation-triangle icon-warning"></i>
                                    <p className={styles.error_message}>{errors.general}</p>
                                </div>
                            </div>
                        )}

                        <button type="submit" className={styles.btn_change} disabled={!!errors.newPassword || !!errors.confirmPassword}>تغییر رمز عبور</button>
                    </form>
                </div>
            </div>
        </div>
    );
}
