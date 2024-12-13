import React, { useState } from 'react';
import {createProject} from '../../Services/CreateProjectAPI'; 	  // وارد کردن API
import styles from './CreateProject.module.css';
import '@majidh1/jalalidatepicker/dist/jalalidatepicker.min.css';
import "@majidh1/jalalidatepicker";
import myicon from './icons/close.png';

export default function CreateProject() {
  const [formData, setFormData] = useState({
    title: '',
    status: '',
    owner: '',
    manager: '',
    dueDate: '',
    importance: '',
    explaining: ''
  });
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    window.jalaliDatepicker.startWatch({
      minDate: "today",  // نمایش تاریخ از امروز
      maxDate: "1440/05/10",  // نمایش تاریخ تا 1400/05/10
      time: false,  // امکان انتخاب تاریخ و زمان
    });
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      // ارسال درخواست برای ایجاد پروژه جدید
      const projectData = { ...formData }; 			// ارسال تمام داده‌های فرم به API
      await createProject(projectData);
      alert('پروژه با موفقیت ایجاد شد!');
      setFormData({
        title: '',
        status: '',
        owner: '',
        manager: '',
        dueDate: '',
        importance: '',
        explaining: ''
      });
    } catch (err) {
      setError('خطا در ایجاد پروژه. لطفاً دوباره تلاش کنید.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className={styles.container} style={{ direction: 'rtl' }}>
      <div id="modal" className={styles.modal_style}>
        <div className={styles.modal}>
          {/* باتن خروج */}
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
            {/* فیلد عنوان */}
            <div className={styles.title_field}>
              <label className={styles.title_label} htmlFor="title">عنوان</label>
              <input
                className={styles.input}
                id="title"
                type="text"
                name="title"
                value={formData.title}
                onChange={handleInputChange}
              />
            </div>

            {/* فیلد وضعیت */}
            <div className={styles.status_field}>
              <label className={styles.status_label} htmlFor="status">وضعیت</label>
              <select
                className={styles.status_select}
                id="status"
                name="status"
                value={formData.status}
                onChange={handleInputChange}
              >
                <option value="">انتخاب کنید</option>
                <option value="فعال">فعال</option>
                <option value="غیرفعال">غیرفعال</option>
              </select>
            </div>

            {/* فیلد مالک */}
            <div className={styles.field}>
              <label className={styles.label} htmlFor="owner">مالک</label>
              <input
                className={styles.owner_input}
                id="owner"
                type="text"
                name="owner"
                value={formData.owner}
                onChange={handleInputChange}
              />
            </div>

            {/* فیلد مدیر پروژه */}
            <div className={styles.field}>
              <label className={styles.manager_label} htmlFor="manager">مدیر پروژه</label>
              <select
                className={styles.manager_select}
                id="manager"
                name="manager"
                value={formData.manager}
                onChange={handleInputChange}
              >
                <option value="">انتخاب کنید</option>
                <option value="مدیر1">مدیر1</option>
                <option value="مدیر2">مدیر2</option>
              </select>
            </div>

            {/* فیلد تاریخ موعد */}
            <div className={styles.field}>
              <label className={styles.duedate_label} htmlFor="dueDate">موعد انجام</label>
              <input
                className={styles.duedate_input}
                id="dueDate"
                type="text"
                name="dueDate"
                value={formData.dueDate}
                onChange={handleInputChange}
                placeholder="لطفا یک تاریخ وارد نمایید"
                data-jdp
              />
            </div>

            {/* فیلد اولویت */}
            <div className={styles.field}>
              <label className={styles.prior_label} htmlFor="importance">اولویت</label>
              <select
                className={styles.prior_select}
                id="importance"
                name="importance"
                value={formData.importance}
                onChange={handleInputChange}
              >
                <option value="">انتخاب کنید</option>
                <option value="بالا">بالا</option>
                <option value="متوسط">متوسط</option>
                <option value="پایین">پایین</option>
              </select>
            </div>

            {/* فیلد توضیحات */}
            <div className={styles.textareaField}>
              <label className={styles.textareaLabel} htmlFor="explaining">توضیحات</label>
              <textarea
                className={styles.textarea}
                id="explaining"
                name="explaining"
                value={formData.explaining}
                onChange={handleInputChange}
                rows="5"
              ></textarea>
            </div>
          </div>

          {/* نمایش خطا */}
          {error && <div className={styles.error}>{error}</div>}

          {/* باتن ذخیره پروژه */}
          <div className={styles.saveButtonContainer}>
            <button
              type="submit"
              className={styles.saveButton}
              onClick={handleSubmit}
              disabled={loading}
            >
              {loading ? 'در حال ارسال...' : 'افزودن پروژه'}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}