import React, { useState, useEffect } from 'react';
import styles from './LoginForm.module.css';
import { Link } from 'react-router-dom';
import eye from "../../icons/eye.png";

export default function LoginForm() {
    const [username, setUsername] = useState('');
    const [passwordVisible, setPasswordVisible] = useState(false);
    const [password, setPassword] = useState('');
    const [errors, setErrors] = useState({ username: '', password: '', general: '' });
    const [isForgotPassword, setIsForgotPassword] = useState(false);
    const [isVerificationPage, setIsVerificationPage] = useState(false); // حالت صفحه وارد کردن کد
    const [timer, setTimer] = useState(240); // 4 دقیقه
    const [verificationError, setVerificationError] = useState(false); // خطای کد تایید

    const togglePasswordVisibility = () => {
        setPasswordVisible(!passwordVisible);
    };

    useEffect(() => {
        let interval;
        if (isVerificationPage && timer > 0) {
            interval = setInterval(() => {
                setTimer((prevTimer) => prevTimer - 1);
            }, 1000);
        }
        return () => clearInterval(interval);
    }, [isVerificationPage, timer]);

    const handleSubmit = (event) => {
        event.preventDefault();

        if (isForgotPassword) {
            setIsVerificationPage(true); // تغییر به صفحه کد تایید
            return;
        }

        let valid = true;
        const newErrors = { username: '', password: '', general: '' };

        if (!username) {
            newErrors.username = 'وارد کردن این فیلد الزامی است.';
            valid = false;
        }

        if (!password) {
            newErrors.password = 'وارد کردن این فیلد الزامی است.';
            valid = false;
        }

        setErrors(newErrors);

        if (valid) {
            const users = require('./users.json').users;
            const user = users.find((u) => u.username === username);

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

    const handleForgetPassClick = (event) => {
        event.preventDefault();
        window.location.href = 'email';
    };

    const handleSignupClick = (event) => {
        event.preventDefault(); // جلوگیری از ارسال فرم
        window.location.href = '/signup'; // انتقال به صفحه signup
    };

    return (
        <div className={styles.div_frame1} style={{ direction: 'rtl' }} onKeyDown={(event) => {
            if (event.key === 'Enter') {
                handleSubmit(event);
            }
        }}>
            <div className={styles.div_login_form}>
                <div className={styles.div_group_content}>
                    <div className={styles.login_header}>
                        <div className={styles.enter_account}>
                            ورود به حساب کاربری
                        </div>
                        <div className={styles.welcome_title}>
                            به سامانه <span>پروژه نگار</span> خوش آمدید.
                        </div>
                    </div>

                    <div className={styles.user_pass}>
                        <div className={styles.username_field}>
                            <label className={styles.para_username} htmlFor="username">نام کاربری</label>
                            <input
                                type="text"
                                id="username"
                                className={`${styles.input_username} ${errors.username ? styles.input_error : ''}`}
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

                        <div className={styles.username_field}>
                            <label className={styles.para_password} htmlFor="password">رمز عبور</label>
                            <div className={styles.relative} onClick={togglePasswordVisibility}>
                                <span className={styles.eye_icon}>
                                    <img src={eye} alt="Toggle Password Visibility" className={styles.eye} />
                                </span>
                                <input
                                    className={`${styles.input_password} ${errors.password ? styles.input_error : ''}`}
                                    type={passwordVisible ? 'text' : 'password'}
                                    id="password"
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
                    </div>

                    <div className={styles.div_rememeber_me}>
                        <label className={styles.label_remember_me}>
                            <input type="checkbox" className={styles.checkbox_remember_me} />
                            <span className={styles.remember_span}></span>
                            مرا به خاطر بسپار
                        </label>
                        <span className={styles.para_forgot_password} onClick={handleForgetPassClick}>
                            رمز عبور خود را فراموش کرده ام.
                        </span>
                    </div>

                    {errors.general && (
                        <div className={styles.div_general_error}>
                            <div className={styles.div_verification_error}>
                                <i className="fas fa-exclamation-triangle icon-warning"></i>
                                <p className={styles.error_message}>{errors.general}</p>
                            </div>
                        </div>
                    )}

                    <button type="submit" className={styles.btn_login} onClick={handleSubmit}>
                        ورود
                    </button>

                    <div className={styles.register}>
                        حساب کاربری ندارید؟
                        <button type="button" onClick={handleSignupClick} className={styles.register_btn}>ثبت نام کنید</button>
                    </div>
                </div>
            </div>

            <div className={styles.div_project_title}>
                پروژه نگار
            </div>
        </div>
    );
}
