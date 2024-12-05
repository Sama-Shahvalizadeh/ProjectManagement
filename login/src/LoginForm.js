import React, { useState } from 'react';
import './styles/Login-Style.css';

function LoginForm() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [errors, setErrors] = useState({ username: '', password: '' });

    const handleSubmit = (event) => {
        event.preventDefault();

        let valid = true;
        const newErrors = { username: '', password: '' };

        // بررسی خالی بودن فیلد نام کاربری
        if (!username) {
            newErrors.username = 'این فیلد نباید خالی باشد';
            valid = false;
        }

        // بررسی خالی بودن فیلد رمز عبور
        if (!password) {
            newErrors.password = 'این فیلد نباید خالی باشد';
            valid = false;
        }

        setErrors(newErrors);

        if (valid) {
          // شبیه‌سازی پاسخ از سرور
          const users = require('./users.json').users;
          const user = users.find(u => u.username === username);
      
          if (user && user.password === password) {
              // اگر نام کاربری و رمز صحیح باشند
              alert('ورود با موفقیت انجام شد');
          } else {
              // اگر هر دو نام کاربری یا پسورد اشتباه باشند
              const errorMessage = 'نام کاربری یا رمز عبور اشتباه است';
              
              // تنظیم ارور برای هر دو فیلد
              setErrors({
                  username: errorMessage,
                  password: errorMessage
              });
          }
      }
      
    };

    return (
        <div className="div-frame1">
            <div className="div-project-title">
                <p className="para-title">پروژه نگار</p>
            </div>

            <div className="div-login-form">
                <div className="div-group-content">
                    <div className="div-welcome">
                        <p className="para-enter-account">ورود به حساب کاربری</p>
                        <p className="para-welcome">
                            به سامانه <span className="span-project-name">پروژه نگار </span> خوش آمدید.
                        </p>
                    </div>

                    <form onSubmit={handleSubmit}>
                        <div className="div-user-info">
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
                            <label className="label-remember-me" htmlFor="remember">مرا به خاطر بسپار</label>
                            <p className="para-forgot-password">رمز عبور خود را فراموش کرده ام.</p>
                        </div>

                        <button type="submit" className="btn-login">ورود</button>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default LoginForm;
