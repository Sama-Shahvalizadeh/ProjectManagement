import React, { useState } from "react";
import eye from "../../icons/eye.png";
import styles from "./signup.module.css";

export default function SignUp() {
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [errors, setErrors] = useState({}); // برای ذخیره پیام خطا
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

  const handleSubmit = () => {
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
      alert("فرم با موفقیت ارسال شد.");
    }
  };

  const handleLoginPage = (event) => {
    event.preventDefault();
    window.location.href = 'login'
}

  return (
    <>
      <link
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css"
        rel="stylesheet"
      />
      <div className={styles.main_container} >

        <div className={styles.left_side}>پروژه نگار</div>

        <div className={styles.sign_form}>
            <div className={styles.form_header}>
              <div className={styles.form_header_title}>ایجاد حساب کاربری</div>
              <div className={styles.welcome_message}>
                به سامانه <span>پروژه نگار</span> خوش آمدید.
              </div>
            </div>

            <div className={styles.form_register}>
              <div className={styles.form_first_name}>
                <label className={styles.form_label} htmlFor="firstName">
                  نام
                </label>
                <input
                  type="text"
                  id="firstName"
                  className={`${styles.form_input} ${errors.firstName ? styles.input_error : ""
                    }`}
                  value={formValues.firstName}
                  onChange={handleChange}
                />
                {errors.firstName && (
                  <div className={styles.error_container}>
                    <i className="fas fa-exclamation-triangle icon-warning"></i>
                    <p className={styles.error_message}>{errors.firstName}</p>
                  </div>
                )}
              </div>

              <div className={styles.form_last_name}>
                <label className={styles.form_label} htmlFor="lastName">
                  نام خانوادگی
                </label>
                <input
                  type="text"
                  id="lastName"
                  className={`${styles.form_input} ${errors.lastName ? styles.input_error : ""
                    }`}
                  value={formValues.lastName}
                  onChange={handleChange}
                />
                {errors.lastName && (
                  <div className={styles.error_container}>
                    <i className="fas fa-exclamation-triangle icon-warning"></i>
                    <p className={styles.error_message}>{errors.lastName}</p>
                  </div>
                )}
              </div>

              <div className={styles.form_email}>
                <label className={styles.form_label} htmlFor="email">
                  ایمیل
                </label>
                <input
                  type="text"
                  id="email"
                  className={`${styles.form_input} ${errors.email ? styles.input_error : ""
                    }`}
                  value={formValues.email}
                  onChange={handleChange}
                />
                {errors.email && (
                  <div className={styles.error_container}>
                    <i className="fas fa-exclamation-triangle icon-warning"></i>
                    <p className={styles.error_message}>{errors.email}</p>
                  </div>
                )}
              </div>

              <div className={styles.form_phone}>
                <label className={styles.form_label} htmlFor="phone">
                  شماره تلفن
                </label>
                <input
                  type="text"
                  id="phone"
                  className={`${styles.form_input} ${errors.phone ? styles.input_error : ""
                    }`}
                  value={formValues.phone}
                  onChange={handleChange}
                />
                {errors.phone && (
                  <div className={styles.error_container}>
                    <i className="fas fa-exclamation-triangle icon-warning"></i>
                    <p className={styles.error_message}>{errors.phone}</p>
                  </div>
                )}
              </div>

              <div className={styles.form_field}>
                <label className={styles.form_label} htmlFor="profession">
                  تخصص
                </label>
                <select
                  id="profession"
                  className={`${styles.form_select} ${errors.profession ? styles.input_error : ""
                    }`}
                  value={formValues.profession}
                  onChange={handleChange}
                >
                  <option value="">انتخاب کنید</option>
                  <option>آپشن اول</option>
                  <option>آپشن دوم</option>
                  <option>آپشن سوم</option>
                  <option>آپشن چهارم</option>
                </select>
                {errors.profession && (
                  <div className={styles.error_container}>
                    <i className="fas fa-exclamation-triangle icon-warning"></i>
                    <p className={styles.error_message}>{errors.profession}</p>
                  </div>
                )}
              </div>

              <div className={styles.form_password}>
                <label className={styles.form_label} htmlFor="password">
                  رمز عبور
                </label>
                <div className={styles.relative_position}>
                  <span className={styles.eye_icon} onClick={togglePasswordVisibility}>
                    <img src={eye} alt="Toggle Password Visibility" width="20" height="20" />
                  </span>
                  <input
                    type={passwordVisible ? "text" : "password"}
                    id="password"
                    className={`${styles.form_input_password} ${errors.password ? styles.input_error : ""
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
              <button className={styles.login_link} onClick={handleLoginPage}>وارد حساب خود شوید</button>
            </div>

        </div>

      </div>
    </>
  );
}
