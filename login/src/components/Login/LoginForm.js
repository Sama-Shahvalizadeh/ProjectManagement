
import React, { useState, useEffect } from 'react';
import styles from './LoginForm.module.css';
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

    const handleForgetPassClick = (event) => {
        event.preventDefault();
        window.location.href = 'email'
    }

    const handleSignupClick = (event) => {
        event.preventDefault(); // جلوگیری از ارسال فرم
        window.location.href = '/signup'; // انتقال به صفحه signup
    };

    const renderLoginForm = () => (

        <div className={styles.div_login_form}>

            <div className={styles.div_group_content}>

                <div class={styles.login_header}>
                    <div class={styles.enter_account}>
                        ورود به حساب کاربری
                    </div>
                    <div class={styles.welcome_title}>
                        به سامانه <span>پروژه نگار</span> خوش آمدید.

                    </div>
                </div>


                <div class={styles.user_pass}>

                    <div className={styles.username_field}>
                        <label class={styles.para_username} for="username">نام کاربری</label>
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
                        <label class={styles.para_password} for="password">رمز عبور</label>

                        <input
                            className={`${styles.input_password} ${errors.password ? styles.input_error : ''}`}
                            type="password"
                            id="password"
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
                    <label class={styles.label_remember_me}>
                        <input type="checkbox" class={styles.checkbox_remember_me} />
                        <span class={styles.remember_span}></span>
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

                <button type="submit" className={styles.btn_login}>
                    ورود
                    {!errors && <Link to="/email">
                    </Link>}
                </button>

                <div class={styles.register}>
                    حساب کاربری ندارید؟
                    <button type="button" onClick={handleSignupClick} class={styles.register_btn} >ثبت نام کنید</button>
                </div>


            </div>
        </div>

    );


    return (


        <div className={styles.div_frame1} style={{ direction: 'rtl' }}   onKeyDown={(event) => {
            if (event.key === 'Enter') {
              handleSubmit(event);
            }
          }}>


            {/* {renderLoginForm()} */}

            <div className={styles.div_login_form}>

                <div className={styles.div_group_content}>

                    <div class={styles.login_header}>
                        <div class={styles.enter_account}>
                            ورود به حساب کاربری
                        </div>
                        <div class={styles.welcome_title}>
                            به سامانه <span>پروژه نگار</span> خوش آمدید.

                        </div>
                    </div>


                    <div class={styles.user_pass}>

                        <div className={styles.username_field}>
                            <label class={styles.para_username} for="username">نام کاربری</label>
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
                            <label class={styles.para_password} for="password">رمز عبور</label>

                            <input
                                className={`${styles.input_password} ${errors.password ? styles.input_error : ''}`}
                                type="password"
                                id="password"
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
                        <label class={styles.label_remember_me}>
                            <input type="checkbox" class={styles.checkbox_remember_me} />
                            <span class={styles.remember_span}></span>
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
                        {!errors && <Link to="/email">
                        </Link>}
                    </button>

                    <div class={styles.register}>
                        حساب کاربری ندارید؟
                        <button type="button" onClick={handleSignupClick} class={styles.register_btn} >ثبت نام کنید</button>
                    </div>


                </div>
            </div>

            <div className={styles.div_project_title}>
                پروژه نگار
            </div>
        </div>

    );
}

