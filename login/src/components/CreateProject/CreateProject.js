import React, { useState } from 'react';
import styles from './CreateProject.module.css'

export default function CreateProject(){

  // // مدیریت state برای فرم
  // const [formData, setFormData] = useState({
  //   title: '',
  //   status: '',
  //   owner: '',
  //   manager: '',
  //   dueDate: '',
  //   importance: '',
  //   explaining: '',
  // });

  // // مدیریت تغییرات در فیلدها
  // const handleInputChange = (event) => {
  //   const { id, value } = event.target;
  //   setFormData({ ...formData, [id]: value });
  // };

  // // ارسال داده‌ها به بک‌اند
  // const handleSubmit = async (event) => {
  //   event.preventDefault();
  //   try {
  //     const response = await fetch('https://your-backend-api.com/create-project', {
  //       method: 'POST',
  //       headers: {
  //         'Content-Type': 'application/json',
  //       },
  //       body: JSON.stringify(formData),
  //     });

  //     if (response.ok) {
  //       alert('پروژه با موفقیت ثبت شد!');
  //       setFormData({
  //         title: '',
  //         status: '',
  //         owner: '',
  //         manager: '',
  //         dueDate: '',
  //         importance: '',
  //         explaining: '',
  //       });
  //     } else {
  //       alert('خطا در ثبت پروژه!');
  //     }
  //   } catch (error) {
  //     console.error('خطا:', error);
  //     alert('ارتباط با سرور برقرار نشد.');
  //   }
  // };

  return (
    <div className={styles.container} style={{ direction: 'rtl' }}>
        <div id="modal">
          <div className={styles.modal}>
            {/* باتن خروج */}
            <div>
              <button type="button" className={styles.closeButton}>
                <img src="icons/close.png" className={styles.closeIcon} alt="close" />
              </button>
            </div>

            {/* عنوان */}
            <div className={styles.titleContainer}>
              <h2 className={styles.title}>افزودن پروژه جدید</h2>
            </div>

            {/* فرم اطلاعات پروژه */}
            <div className={styles.formContainer}>
              <div className={styles.title_field}>
                <label className={styles.title_label} htmlFor="title">عنوان</label>
                <input
                  className={styles.input}
                  id="title"
                  type="text"
                  // value={formData.title}
                  // onChange={handleInputChange}
                />
              </div>

              <div className={styles.status_field}>
                <label className={styles.status_label} htmlFor="status">وضعیت</label>
                <select
                  className={styles.status_select}
                  id="status"
                  // value={formData.status}
                  // onChange={handleInputChange}
                >
                  <option value="">انتخاب کنید</option>
                  <option value="فعال">فعال</option>
                  <option value="غیرفعال">غیرفعال</option>
                </select>
              </div>

              <div className={styles.field}>
                <label className={styles.label} htmlFor="owner">مالک</label>
                <input
                  className={styles.owner_input}
                  id="owner"
                  type="text"
                  // value={formData.owner}
                  // onChange={handleInputChange}
                />
              </div>

              <div className={styles.field}>
                <label className={styles.manager_label} htmlFor="manager">مدیر پروژه</label>
                <select
                  className={styles.manager_select}
                  id="manager"
                  // value={formData.manager}
                  // onChange={handleInputChange}
                >
                  <option value="">انتخاب کنید</option>
                  <option value="مدیر1">مدیر1</option>
                  <option value="مدیر2">مدیر2</option>
                </select>
              </div>

              <div className={styles.field}>
                <label className={styles.duedate_label} htmlFor="dueDate">موعد انجام</label>
                <input
                  className={styles.duedate_input}
                  id="dueDate"
                  type="date"
                  // value={formData.dueDate}
                  // onChange={handleInputChange}
                  onKeyDown={(e) => e.preventDefault()}
                />
              </div>

              <div className={styles.field}>
                <label className={styles.prior_label} htmlFor="importance">اولویت</label>
                <select
                  className={styles.prior_select}
                  id="importance"
                  // value={formData.importance}
                  // onChange={handleInputChange}
                >
                  <option className={styles.prior_option} >انتخاب کنید</option>
                  <option className={styles.prior_option} >بالا</option>
                  <option className={styles.prior_option} >متوسط</option>
                  <option className={styles.prior_option} >پایین</option>
                </select>
              </div>

              <div className={styles.textareaField}>
                <label className={styles.textareaLabel} htmlFor="explaining">توضیحات</label>
                <textarea
                  className={styles.textarea}
                  id="explaining"
                  // value={formData.explaining}
                  // onChange={handleInputChange}
                  rows="5"
                ></textarea>
              </div>
            </div>

            {/* باتن ذخیره پروژه */}
            <div className={styles.saveButtonContainer}>
              <button type="submit" className={styles.saveButton}>افزودن پروژه</button>
            </div>
          </div>
        </div>
    </div>
  );

}