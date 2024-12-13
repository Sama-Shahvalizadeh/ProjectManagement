import React, { useEffect } from 'react';
import styles from './CreateProject.module.css';
import '@majidh1/jalalidatepicker/dist/jalalidatepicker.min.css';
import "@majidh1/jalalidatepicker";
import myicon from './icons/close.png';

export default function CreateProject() {
  useEffect(() => {
    window.jalaliDatepicker.startWatch({
      minDate: "today",  // نمایش تاریخ از امروز
      maxDate: "1440/05/10",  // نمایش تاریخ تا 1400/05/10
      time: false,  // امکان انتخاب تاریخ و زمان
    });
  }, []);

  return (
    <div className={styles.container} style={{ direction: 'rtl' }}>
      <div id="modal" className={styles.modal_style}>
        <div className={styles.modal}>
          {/* باتن خروج */}
          <p>          .</p>
          <p>          .</p>
          <p>          .</p>

          <div>
            <button type="button" className={styles.closeButton}>
              <img src={myicon} className={styles.closeIcon} alt="close" />
              
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
                name='انتخاب کنید' 
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
                name='انتخاب کنید' 
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
                type="text"  // تبدیل به ورودی متنی برای تقویم جلالی
                placeholder="لطفا یک تاریخ وارد نمایید"
                data-jdp
              />
            </div>

            <div className={styles.field}>
              <label className={styles.prior_label} htmlFor="importance">اولویت</label>
              <select
                className={styles.prior_select}
                id="importance"
                name='انتخاب کنید' 
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
