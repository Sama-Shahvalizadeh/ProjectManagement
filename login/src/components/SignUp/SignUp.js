import React, { useState } from "react";
import styles from "./signup.module.css";
import {signUp} from "../../Services/SignUpAPI";  					// استفاده از api


export default function SignUp() {
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [errors, setErrors] = useState({});
  const [formValues, setFormValues] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    profession: "",
    password: "",
  });

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormValues({ ...formValues, [id]: value });
  };

  const handleSubmit = async () => {
    const newErrors = {};
    if (!formValues.firstName.trim()) {
      newErrors.firstName = "وارد کردن این فیلد الزامی است.";
    }
    if (!formValues.lastName.trim()) {
      newErrors.lastName = "وارد کردن این فیلد الزامی است.";
    }
    if (!formValues.email.trim()) {
      newErrors.email = "وارد کردن این فیلد الزامی است.";
    }
    if (!formValues.phone.trim()) {
      newErrors.phone = "وارد کردن این فیلد الزامی است.";
    }
    if (!formValues.profession.trim()) {
      newErrors.profession = "انتخاب این فیلد الزامی است.";
    }
    if (!formValues.password.trim()) {
      newErrors.password = "وارد کردن این فیلد الزامی است.";
    }

    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      try {
        const response = await signUp(formValues); // ارسال داده‌ها به سرور
        alert("ثبت‌نام با موفقیت انجام شد!");
        console.log("Server Response:", response);
        // انتقال به صفحه ورود یا دیگر صفحات
      } catch (error) {
        alert("خطا در ثبت‌نام. لطفاً دوباره تلاش کنید.");
        console.error("Error during sign up:", error);
      }
    }
  };

  const handleLoginPage = (event) => {
    event.preventDefault();
    window.location.href = "login";
  };

  return (
    <>
      <link
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css"
        rel="stylesheet"
      />
      <div className={styles.main_container}>
        <div className={styles.left_side}>پروژه نگار</div>
        <div className={styles.sign_form}>
          <div className={styles.form_header}>
            <div className={styles.form_header_title}>ایجاد حساب کاربری</div>
            <div className={styles.welcome_message}>
              به سامانه <span>پروژه نگار</span> خوش آمدید.
            </div>
          </div>
          <div className={styles.form_register}>
            {/* سایر فیلدهای فرم (نام، نام خانوادگی، ایمیل، و غیره) */}
            <div className={styles.form_password}>
              <label className={styles.form_label} htmlFor="password">
                رمز عبور
              </label>
              <div className={styles.relative_position}>
                <span
                  className={styles.eye_icon}
                  onClick={togglePasswordVisibility}
                >
                  <img
                    src={eye}
                    alt="Toggle Password Visibility"
                    width="20"
                    height="20"
                  />
                </span>
                <input
                  type={passwordVisible ? "text" : "password"}
                  id="password"
                  className={`${styles.form_input_password} ${
                    errors.password ? styles.input_error : ""
                  }`}
                  value={formValues.password}
                  onChange={handleChange}
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
          <button className={styles.submit_button} onClick={handleSubmit}>
            ورود
          </button>
          <div className={styles.have_account}>
            از قبل حساب دارید؟
            <button className={styles.login_link} onClick={handleLoginPage}>
              وارد حساب خود شوید
            </button>
          </div>
        </div>
      </div>
    </>
  );
}