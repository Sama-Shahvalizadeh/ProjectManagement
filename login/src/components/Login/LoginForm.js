import React, { useState, useEffect } from 'react';
import styles from './LoginForm.module.css';
import { Link } from 'react-router-dom';
import eye from "../../icons/eye.png";
import { sendVerificationCode } from '../../Services/LoginFormAPI';                                             // وارد کردن تابع ارسال کد تایید

export default function LoginForm() {
    const [username, setUsername] = useState('');                                                               // وضعیت برای نام کاربری
    const [password, setPassword] = useState('');                                                               // وضعیت برای رمز عبور
    const [errors, setErrors] = useState({ username: '', password: '', general: '', emailError: '' });          // وضعیت برای ارورهای فرم
    const [passwordVisible, setPasswordVisible] = useState(false);                                              // وضعیت برای نمایش یا مخفی کردن رمز عبور
    const [email, setEmail] = useState('');                                                                     // وضعیت برای ذخیره ایمیل وارد شده (برای بازنشانی رمز عبور)

    const togglePasswordVisibility = () => {
        setPasswordVisible((prevState) => !prevState);                                                          // تغییر وضعیت نمایش/مخفی کردن رمز عبور
    };

    const handleSubmit = (event) => {
        event.preventDefault();                                                                                 // جلوگیری از ارسال فرم

        let valid = true;
        const newErrors = { username: '', password: '', general: '' };

        if (!username) {
            newErrors.username = 'وارد کردن این فیلد الزامی است.';                                           // نمایش ارور اگر نام کاربری وارد نشده باشد
            valid = false;
        }

        if (!password) {
            newErrors.password = 'وارد کردن این فیلد الزامی است.';                                          // نمایش ارور اگر رمز عبور وارد نشده باشد
            valid = false;
        }

        setErrors(newErrors);

        if (valid) {
            const users = require('./users.json').users;                                                      // دریافت لیست کاربران
            const user = users.find((u) => u.username === username);                                          // پیدا کردن کاربر با نام کاربری وارد شده

            if (user && user.password === password) {
                alert('ورود با موفقیت انجام شد');
            } else {
                setErrors({
                    username: '',
                    password: '',
                    general: 'متاسفانه کاربری با نام کاربری و رمز عبور وارد شده در سامانه یافت نشد.',
                });
            }
        }
    };

    const handleForgetPassClick = async (event) => {
        event.preventDefault();                                                                                 // جلوگیری از انتقال پیش فرض صفحه

        if (!email) {
            setErrors(prevErrors => ({
                ...prevErrors,
                emailError: 'لطفاً آدرس ایمیل خود را وارد کنید.'
            }));
            return;
        }

        try {
            const response = await sendVerificationCode(email);                                                 // ارسال درخواست به سرور برای ارسال کد تایید

            alert('کد تایید به ایمیل شما ارسال شد.');
            window.location.href = '/verify-email';
        } catch (error) {
            setErrors(prevErrors => ({
                ...prevErrors,
                emailError: 'ارسال کد تایید با مشکل مواجه شد. لطفاً دوباره تلاش کنید.'
            }));
        }
    };

    const handleSignupClick = (event) => {
        event.preventDefault();                         // جلوگیری از ارسال فرم
        window.location.href = '/signup';               // انتقال به صفحه ثبت نام
    };

    const renderLoginForm = () => (
        <form onSubmit={handleSubmit}>
            <div className={styles.div_user_info}>
                <div className={styles.div_welcome}>
                    <p className={styles.para_enter_account}>ورود به حساب کاربری</p>
                    <p className={styles.para_welcome}>
                        به سامانه <span className={styles.span_project_name}>پروژه نگار </span> خوش آمدید.
                    </p>
                </div>

                <p className={styles.para_username}>نام کاربری</p>
                <div className={styles.input_wrapper}>
                    <input
                        className={`${styles.input_username} ${errors.username ? styles.input_error : ''}`}
                        type="text"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                    />
                    {errors.username && (
                        <div className={styles.error_container}>
                            <i className="fas fa-exclamation-triangle icon-warning"></i>
                            <p className={styles.error_message}>{errors.username}</p>
                        </div>
                    )}
                </div>

                <p className={styles.para_password}>رمز عبور</p>
                <div className={styles.input_wrapper}>
                    <div className={styles.relative_position}>
                        <span className={styles.eye_icon} onClick={togglePasswordVisibility}>
                            <img src={eye} alt="Toggle Password Visibility" width="20" height="20" />
                        </span>
                        <input
                            className={`${styles.input_password} ${errors.password ? styles.input_error : ''}`}
                            type={passwordVisible ? 'text' : 'password'}
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </div>
                    {errors.password && (
                        <div className={styles.error_container}>
                            <i className="fas fa-exclamation-triangle icon-warning"></i>
                            <p className={styles.error_message}>{errors.password}</p>
                        </div>
                    )}
                </div>

                {errors.emailError && (
                    <div className={styles.error_container}>
                        <i className="fas fa-exclamation-triangle icon-warning"></i>
                        <p className={styles.error_message}>{errors.emailError}</p> 
                    </div>
                )}

            </div>

            <div className={styles.div_rememeber_me}>
                <input className={styles.checkbox_remember_me} type="checkbox" id="remember" />
                <label className={styles.label_remember_me} htmlFor="remember">
                    مرا به خاطر بسپار
                </label>
                <p className={styles.para_forgot_password} onClick={handleForgetPassClick}>
                    رمز عبور خود را فراموش کرده ام.
                </p>
            </div>

            {errors.general && (
                <div className={styles.div_general_error}>
                    <div className={styles.div_verification_error}>
                        <i className="fas fa-exclamation-triangle icon-warning"></i>
                        <p className={styles.error_message}>{errors.general}</p> 
                    </div>
                </div>
            )}

            <button type="submit" className={styles.btn_login}>
                ورود
            </button>

            <div className={styles.register}>
                حساب کاربری ندارید؟
                <button className={styles.register_btn} onClick={handleSignupClick}>ثبت نام کنید</button>
            </div>
        </form>
    );

    return (
        <div className={styles.div_frame1}>
            <div className={styles.div_project_title}>
                <p className={styles.para_title}>پروژه نگار</p>
            </div>
            <div className={styles.div_login_form}>
                <div className={styles.div_group_content}>
                    {renderLoginForm()}
                </div>
            </div>
        </div>
    );
}