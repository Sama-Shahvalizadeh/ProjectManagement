import React, { useState } from "react";
import styles from "./signup.module.css"


export default function SignUp  () {
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [password, setPassword] = useState(""); // برای ذخیره مقدار رمز عبور
  const [isPasswordEmpty, setIsPasswordEmpty] = useState(false); // کنترل وضعیت خالی بودن رمز عبور

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  const handleLogin = () => {
    // بررسی خالی بودن فیلد رمز عبور
    if (password.trim() === "") {
      setIsPasswordEmpty(true);
    } else {
      setIsPasswordEmpty(false);
    }
  };

  return (
    <>
      {/* لینک Font Awesome */}
      <link
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css"
        rel="stylesheet"
      />

      <div className={styles["div-frame1"]}>
        <div className={styles["div-project-title"]}>
          <p className="para-title">پروژه نگار</p>
        </div>

        <div className="div-login-form">
          <div className="div-group-content">
            <div className="div-welcome">
              <p className="para-enter-account">ایجاد حساب کاربری</p>
              <p className="para-welcome">
                به سامانه <span className="span-project-name">پروژه نگار </span> خوش آمدید.
              </p>
            </div>

            <div className="div-user-info">

	      <p className="para-username">نام و نام خانوادگی</p>
              <input className="input-username" type="text" />

              <p className="para-email">ایمیل</p>
              <input className="input-email" type="text" />

              <p className="para-phone">شماره تلفن</p>
              <input className="input-phone" type="text" />

              <p className="para-expertise">تخصص</p>
              <select className="input-expertise" disabled>
                <option value=""></option>
              </select>

              <p className="para-password">رمز عبور</p>
              <div className="password-container">
                <input
                  className="input-password"
                  type={passwordVisible ? "text" : "password"}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)} // ذخیره مقدار ورودی
                  style={{
                    borderColor: isPasswordEmpty ? "#ff0000e8" : "#ccc", // تغییر رنگ کادر
                  }}
                />
                <span className="eye-icon" onClick={togglePasswordVisibility}>
                  <i className={`fas ${passwordVisible ? "fa-eye-slash" : "fa-eye"}`}></i>
                </span>
              </div>
              {isPasswordEmpty && (
                <p className="para-forgot-password" style={{ color: "#ff0000e8" }}>
                  <i className="fas fa-exclamation-triangle icon-warning"></i>
                  وارد کردن این فیلد الزامی است
                </p>
              )}
            </div>

            <button className="btn-login" onClick={handleLogin}>
              ورود
            </button>
          </div>
        </div>
      </div>
    </>
  );
};
