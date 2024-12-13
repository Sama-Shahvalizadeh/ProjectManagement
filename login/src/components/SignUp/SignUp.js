import React, { useState } from "react";
import styles from "./signup.module.css";
import {signUp} from "../../Services/SignUpAPI";  					// استفاده از api

export default function SignUp() {
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [password, setPassword] = useState(""); 					// برای ذخیره مقدار رمز عبور
  const [isPasswordEmpty, setIsPasswordEmpty] = useState(false); 			// کنترل وضعیت خالی بودن رمز عبور
  const [name, setName] = useState(""); 						// ذخیره نام	
  const [email, setEmail] = useState(""); 						// ذخیره ایمیل
  const [phone, setPhone] = useState(""); 						// ذخیره شماره تلفن
  const [isSubmitting, setIsSubmitting] = useState(false); 				// برای کنترل وضعیت ارسال فرم

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  const handleSignUp = async () => {
    if (password.trim() === "") {
      setIsPasswordEmpty(true);
      return;
    } else {
      setIsPasswordEmpty(false);
    }

    const userData = { name, email, phone, password };

    setIsSubmitting(true);

    try {
      // ارسال درخواست ثبت‌نام به سرور
      const response = await signUp(userData);
      console.log('User signed up successfully:', response);
    } catch (error) {
      console.error('Error during sign up:', error);
    }

    setIsSubmitting(false);
  };

  return (
    <>
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
              <input
                className="input-username"
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)} // ذخیره نام کاربر
              />

              <p className="para-email">ایمیل</p>
              <input
                className="input-email"
                type="text"
                value={email}
                onChange={(e) => setEmail(e.target.value)} // ذخیره ایمیل
              />

              <p className="para-phone">شماره تلفن</p>
              <input
                className="input-phone"
                type="text"
                value={phone}
                onChange={(e) => setPhone(e.target.value)} // ذخیره شماره تلفن
              />

              <p className="para-password">رمز عبور</p>
              <div className="password-container">
                <input
                  className="input-password"
                  type={passwordVisible ? "text" : "password"}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)} // ذخیره مقدار رمز عبور
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

            <button className="btn-login" onClick={handleSignUp} disabled={isSubmitting}>
              {isSubmitting ? 'در حال ثبت‌نام...' : 'ثبت‌نام'}
            </button>
          </div>
        </div>
      </div>
    </>
  );
}