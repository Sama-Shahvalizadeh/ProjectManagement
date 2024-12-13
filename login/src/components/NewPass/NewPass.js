import React, { useState } from 'react';
import styles from './NewPass.module.css';
import { changePassword } from '../../Services/NewPassAPI'; 				// وارد کردن API مربوط به تغییر رمز عبور

export default function NewPass() {
    const [newPassword, setNewPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [errors, setErrors] = useState({ newPassword: '', confirmPassword: '' });
    const [isPasswordMismatch, setIsPasswordMismatch] = useState(false); 		// برای بررسی مغایرت

    const handleSuccessPass = (event) => {
        event.preventDefault();
        window.location.href = 'successpass'; 						// انتقال به صفحه موفقیت
    };

    const handleSubmit = async (event) => {
        event.preventDefault();

        let valid = true;
        const newErrors = { newPassword: '', confirmPassword: '' };

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
            try {
                const passwordData = { newPassword, confirmPassword };
                const response = await changePassword(passwordData); 			// فراخوانی API برای تغییر رمز عبور
                console.log('Password change response:', response);
                handleSuccessPass(event); 						// اگر تغییر رمز عبور موفقیت‌آمیز بود، به صفحه موفقیت برو
            } catch (error) {
                console.error('Error changing password:', error);
            }
        }
    };

    return (
        <div className={styles.div_frame1}>
            <div className={styles.div_project_title}>
                <p className={styles.para_prj_title}>پروژه نگار</p>
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
                        {errors.newPassword && <p className={styles.error_message}>{errors.newPassword}</p>}

                        <label htmlFor="confirmPassword" className={`${styles.para_username} ${isPasswordMismatch ? styles.error_label : ''}`}>تکرار رمز عبور جدید</label>
                        <input
                            id="confirmPassword"
                            className={`${styles.input_conf_pass} ${errors.confirmPassword || isPasswordMismatch ? styles.input_error : ''}`}
                            type="password"
                            value={confirmPassword}
                            onChange={(e) => setConfirmPassword(e.target.value)}
                        />
                        {errors.confirmPassword && (
                            <div className={styles.div_general_error}>
                                <i className="fas fa-exclamation-triangle warning-icon"></i>
                                <p>{errors.confirmPassword}</p>
                            </div>
                        )}
                    </div>

                    <button type="submit" className={styles.btn_change}>تغییر رمز عبور</button>
                </form>
            </div>
        </div>
    );
}
