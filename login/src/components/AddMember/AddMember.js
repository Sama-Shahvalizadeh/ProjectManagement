import React, {useState} from 'react';
import styles from './AddMember.module.css';

export default function AddMember() {


  // مدیریت state فرم
  const [formData, setFormData] = useState({
    coworker: '',
    responsibility: '',
    explaining: '',
  });

  // مدیریت تغییرات در فیلدها
  const handleInputChange = (event) => {
    const { id, value } = event.target;
    setFormData({ ...formData, [id]: value });
  };

  // ارسال داده‌ها به بک‌اند
  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await fetch('https://your-backend-api.com/add-member', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        alert('اطلاعات با موفقیت ارسال شد!');
        setFormData({ coworker: '', responsibility: '', explaining: '' }); // پاک کردن فرم
      } else {
        alert('خطا در ارسال اطلاعات!');
      }
    } catch (error) {
      console.error('خطا:', error);
      alert('ارتباط با سرور برقرار نشد.');
    }
  };
  return (
  
    <div className={styles.container} style={{ direction: 'rtl' }}>
        {/* Modal */}
      <div id="modal">
        <div className={styles.modal}>
          {/* باتن خروج از برنامه */}
          <div>
            <button className={styles.closeButton}>
              <img src="icons/close.png" className={styles.closeIcon} alt="close" />
            </button>
          </div>

          {/* عنوان افزودن عضو جدید */}
          <div className={styles.titleContainer}>
            <h2 className={styles.title}>افزودن عضو جدید</h2>
          </div>

          {/* فرم وارد کردن اطلاعات همکار جدید */}
          <div className={styles.formContainer}>
            {/* div مربوط به همکار */}
            <div className={styles.field}>
              <label className={styles.label} htmlFor="coworker">همکار</label>
              <select className={styles.select} id="coworker">
                <option>انتخاب کنید</option>
                <option>همکار1</option>
                <option>همکار2</option>
              </select>
            </div>

            {/* div مربوط به سمت همکار */}
            <div className={styles.field}>
              <label className={styles.label} htmlFor="responsibility">سمت</label>
              <select className={styles.select} id="responsibility">
                <option>انتخاب کنید</option>
                <option>سمت1</option>
                <option>سمت2</option>
              </select>
            </div>

            {/* div مربوط به توضیحات همکار */}
            <div className={styles.textareaField}>
              <label className={styles.textareaLabel} htmlFor="explaining">توضیحات</label>
              <textarea
                className={styles.textarea}
                id="explaining"
                type="text"
                rows="5"
                
                style={{ textAlign: 'right' }}
              ></textarea>
            </div>
          </div>

          {/* افزودن باتن ذخیره همکار */}
          <div className={styles.saveButtonContainer}>
            <button className={styles.saveButton} onClick={handleSubmit}>افزودن عضو</button>
          </div>
        </div>
      </div>
    </div>
  );
}
