// import React, { useState } from 'react';
// import './Login-Style.css';

// function LoginForm() {
//     const [username, setUsername] = useState('');
//     const [password, setPassword] = useState('');
//     const [errors, setErrors] = useState({ username: '', password: '', general: '' });

//     const handleSubmit = (event) => {
//         event.preventDefault();

//         let valid = true;
//         const newErrors = { username: '', password: '', general: '' };

//         // بررسی خالی بودن فیلد نام کاربری
//         if (!username) {
//             newErrors.username = 'وارد کردن این فیلد الزامی است.';
//             valid = false;
//         }

//         // بررسی خالی بودن فیلد رمز عبور
//         if (!password) {
//             newErrors.password = 'وارد کردن این فیلد الزامی است.';
//             valid = false;
//         }

//         setErrors(newErrors);

//         if (valid) {
//             // شبیه‌سازی پاسخ از سرور
//             const users = require('./users.json').users;
//             const user = users.find(u => u.username === username);

//             if (user && user.password === password) {
//                 // اگر نام کاربری و رمز صحیح باشند
//                 alert('ورود با موفقیت انجام شد');
//             } else {
//                 // اگر هر دو نام کاربری یا پسورد اشتباه باشند
//                 setErrors({
//                     username: '',
//                     password: '',
//                     general: 'کاربری پیدا نشد'
//                 });
//             }
//         }
//     };

//     return (
//         <div className="div-frame1">
//             <div className="div-project-title">
//                 <p className="para-title">پروژه نگار</p>
//             </div>

//             <div className="div-login-form">
//                 <div className="div-group-content">
//                     <div className="div-welcome">
//                         <p className="para-enter-account">ورود به حساب کاربری</p>
//                         <p className="para-welcome">
//                             به سامانه <span className="span-project-name">پروژه نگار </span> خوش آمدید.
//                         </p>
//                     </div>

//                     <form onSubmit={handleSubmit}>
//                         <div className="div-user-info">
//                             <p className="para-username">نام کاربری</p>
//                             <input
//                                 className={`input-username ${errors.username ? 'input-error' : ''}`}
//                                 type="text"
//                                 value={username}
//                                 onChange={(e) => setUsername(e.target.value)}
//                             />
//                             {errors.username && <p className="error-message">{errors.username}</p>}

//                             <p className="para-password">رمز عبور</p>
//                             <input
//                                 className={`input-password ${errors.password ? 'input-error' : ''}`}
//                                 type="password"
//                                 value={password}
//                                 onChange={(e) => setPassword(e.target.value)}
//                             />
//                             {errors.password && <p className="error-message">{errors.password}</p>}
//                         </div>

//                         <div className="div-rememeber-me">
//                             <input className="checkbox-remember-me" type="checkbox" id="remember" />
//                             <label className="label-remember-me" htmlFor="remember">مرا به خاطر بسپار</label>
//                             <p className="para-forgot-password">رمز عبور خود را فراموش کرده ام.</p>
//                         </div>

//                         {/* پیام خطای عمومی */}
//                         {errors.general && (
//                             <div className="div-general-error">
//                                 <p>{errors.general}</p>
//                             </div>
//                         )}

//                         <button type="submit" className="btn-login">ورود</button>
//                     </form>
//                 </div>
//             </div>
//         </div>
//     );
// }

// export default LoginForm;
import React, { useState, useEffect } from 'react';
import  './LoginForm.css' ;


function LoginForm() {
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
            <div classname = "div-user-info">
            <div className="div-welcome">
                         <p className="para-enter-account">ورود به حساب کاربری</p>
                         <p className="para-welcome">
                             به سامانه <span className="span-project-name">پروژه نگار </span> خوش آمدید.
                         </p>
                   </div>

                <p className="para-username">نام کاربری</p>
                <input
                    className={`input-username ${errors.username ? 'input-error' : ''}`}
                    type="text"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                />
                {errors.username && <p className="error-message">{errors.username}</p>}

                <p className="para-password">رمز عبور</p>
                <input
                    className={`input-password ${errors.password ? 'input-error' : ''}`}
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
                {errors.password && <p className="error-message">{errors.password}</p>}
            </div>

            <div className="div-rememeber-me">
                <input className="checkbox-remember-me" type="checkbox" id="remember" />
                <label className="label-remember-me" htmlFor="remember">
                    مرا به خاطر بسپار
                </label>
                <p className="para-forgot-password" onClick={() => setIsForgotPassword(true)}>
                    رمز عبور خود را فراموش کرده ام.
                </p>
            </div>

            {errors.general && (
                <div className="div-general-error">
                    <p>{errors.general}</p>
                </div>
            )}

            <button type="submit" className="btn-login">
                ورود
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
                    لطفاً کد تأییدی که به ایمیل <span className="span-project-name">your-email@example.com</span>
                    ارسال شد را وارد نمایید.
                </p>

                <div className="input-code-container">
                    {Array.from({ length: 6 }).map((_, index) => (
                        <input key={index} className="input-code" type="text" maxLength="1" />
                    ))}
                </div>

                <p className="timer">زمان باقی‌مانده: {Math.floor(timer / 60)}:{timer % 60 < 10 ? '0' : ''}{timer % 60}</p>

                {verificationError && (
                    <div className="div-verification-error">
                        <i className="fas fa-exclamation-triangle icon-warning"></i>
                        <p className="error-message">کد تایید اشتباه است.</p>
                    </div>
                )}

                <p className="para-resend">
                    آیا هنوز کد تأیید را دریافت نکرده‌اید؟ <span className="resend-link">ارسال مجدد</span>
                </p>
                <button type="submit" className="btn-login">احراز کد تایید</button>
            </div>
        </form>
    );

    return (
        <div className="div-frame1">
            <div className="div-project-title">
                <p className="para-title">پروژه نگار</p>
            </div>

            <div className="div-login-form">
                <div className="div-group-content">
                    {isVerificationPage
                        ? renderVerificationPage()
                        : isForgotPassword
                        ? renderForgotPasswordForm()
                        : renderLoginForm()}
                </div>
            </div>
        </div>
    );
}

export default LoginForm;
