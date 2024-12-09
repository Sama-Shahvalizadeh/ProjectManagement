
import React, { useState, useEffect } from 'react';
import styles from './LoginForm.module.css' ;
import { Link } from 'react-router-dom';


export default function LoginForm() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [errors, setErrors] = useState({ username: '', password: '', general: '' });
    const [isForgotPassword, setIsForgotPassword] = useState(false);
    const [isVerificationPage, setIsVerificationPage] = useState(false); // حالت صفحه وارد کردن کد
    const [timer, setTimer] = useState(240); // 4 دقیقه
    const [verificationError, setVerificationError] = useState(false); // خطای کد تایید

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

    const handleForgetPassClick = (event) =>{
        event.preventDefault();
        window.location.href = 'email'
    }

    const handleSignupClick = (event) => {
        event.preventDefault(); // جلوگیری از ارسال فرم
        window.location.href = '/signup'; // انتقال به صفحه signup
    };

    const handleVerificationSubmit = (event) => {
        event.preventDefault();

        const inputs = Array.from(document.querySelectorAll('.input-code'));
        const enteredCode = inputs.map((input) => input.value).join('');
        const correctCode = '123456'; // کد صحیح

        if (enteredCode !== correctCode) {
            setVerificationError(true);
            inputs.forEach((input) => (input.className = 'input-code error'));
        } else {
            alert('کد تایید با موفقیت تایید شد!');
            setVerificationError(false);
        }
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

                <button type="button" onClick={handleSignupClick} className={styles.btn_signup}>
                ثبت نام کنید
                </button>

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
                    <input
                        className={`${styles.input_password} ${errors.password ? styles.input_error : ''}`}
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                    {errors.password && (
                        <div className={styles.error_container}>
                            <i className="fas fa-exclamation-triangle icon-warning"></i>
                            <p className={styles.error_message}>{errors.password}</p>
                        </div>
                    )}
                </div>
            </div>
    
            <div className={styles.div_rememeber_me}>
                <input className={styles.checkbox_remember_me} type="checkbox" id="remember" />
                <label className={styles.label_remember_me} htmlFor="remember">
                    مرا به خاطر بسپار
                </label>
                <p className={styles.para_forgot_password}  onClick={handleForgetPassClick}>
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
   {!errors && <Link to="/email">
    </Link>}
            </button>
        </form>
    );
    

    const renderForgotPasswordForm = () => (
        <form onSubmit={handleSubmit}>
            <div className="div-welcome">
                <p className="para-enter-account">وارد کردن ایمیل</p>
            </div>

            <p className="para-verification-code">برای دریافت کد تایید ایمیل خود را وارد نمایید.</p>

            <div className="div-user-info">
                <p className="para-email">ایمیل</p>
                <input className="input-email" type="email" />
            </div>

            <button type="submit" className="btn-login">
                دریافت کد تایید
            </button>
        </form>
    );

    const renderVerificationPage = () => (
        <form onSubmit={handleVerificationSubmit}>
            <div className="div-verification-container">
                <div className="div-welcome">
                    <p className="para-enter-account">وارد کردن کد تایید</p>
                </div>

                <p className="para-verification-code">
                    لطفاً کد تأییدی که به ایمیل 
                    ارسال شد را وارد نمایید.
                </p>

                <div className="input-code-container">
                    {Array.from({ length: 6 }).map((_, index) => (
                        <input key={index} className={styles.input_code} type="text" maxLength="1" />
                    ))}
                </div>

                <p className={styles.timer}>زمان باقی‌مانده: {Math.floor(timer / 60)}:{timer % 60 < 10 ? '0' : ''}{timer % 60}</p>

                {verificationError && (
                    <div className={styles.div_verification_error}>
                        <i className="fas fa-exclamation-triangle icon-warning"></i>
                        <p className={styles.error_message}>کد تایید اشتباه است.</p>
                    </div>
                )}

                <p className={styles.para_resend}>
                    آیا هنوز کد تأیید را دریافت نکرده‌اید؟ <span className={styles.resend_link}>ارسال مجدد</span>
                </p>
                <button type="submit" className={styles.btn_login}>احراز کد تایید</button>
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

