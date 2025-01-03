import React, { useState } from "react";

import styles from './ProjectView.module.css'
import outputStyles from '../../../styles/output.module.css'
import common from '../Common.module.css'

import maximise from "../../../icons/maximise-frame.png";
import textbadge from "../../../icons/Text badge.png";


export default function ProjectView() {

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = (event) => {
    setIsMenuOpen((prev) => !prev);
  };

    const closeMenu = (event) => {

    };
    

  React.useEffect(() => {
    window.addEventListener('click', closeMenu);
    return () => window.removeEventListener('click', closeMenu);
  }, []);





  return (
    <div class={`${styles.main_container} ${outputStyles.font_arabic_medium}`}>

      {/* <!-- نام پروژه و دکمه ادیت div --> */}
      <div class={styles.div_prj_title}>

        {/* <!-- نام پروژه div --> */}
        <div class={styles.div_prj_name}>
          <img src={maximise} class={styles.maximise} />
          <span class={styles.para_prj_name}>ذ ر زالف ب پ ت ث ج چ ح خ د </span>
        </div>

        {/* <!-- منوی سه نقطه و دکمه ها div --> */}
        <div className={common.menu_container}>

          {/* <!-- دکمه سه نقطه  --> */}
          <button className={common.three_dots} onClick={toggleMenu}>
            ...
          </button>
          {isMenuOpen && (
            <div className={`${styles.dropdown_menu}`}>
              <ul>
                <li>ویرایش</li>
                <li>حذف</li>
                <li>شروع</li>
                <li>توقف</li>
                <li>خاتمه دادن</li>
              </ul>
            </div>
          )}
        </div>
      </div>

      {/* <!-- توضیح زیر نام پروژه  div --> */}
      <div class={styles.project_description}>
        <span>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، </span>
      </div>

      {/* <!-- اطلاعات پروژه div --> */}
      <div class={styles.div_prj_info}>
        {/* <!-- وضعیت پروژه div --> */}
        <div class={styles.div_info}>
          <div class={styles.information_div}>وضعیت</div>
          <div class={styles}>
            <img src={textbadge} alt="Status Badge" class={styles.img_status} />
            <span>بک لاگ</span>
          </div>
        </div>

        {/* <!-- نام مالک div --> */}
        <div class={styles.div_info}>
          <div class={styles.information_div}>مالک</div>
          <span class={styles.information_span}>احسان شکیبا</span>
        </div>

        {/* <!-- مدیر پروژه div --> */}
        <div class={styles.div_info}>
          <div class={styles.information_div}>مدیر پروژه</div>
          <span class={styles.information_span}>بیتا جوان</span>
        </div>

        {/* <!-- موعد انجام div --> */}
        <div class={styles.div_info}>
          <div class={styles.information_div}>موعد انجام</div>
          <span class={styles.information_span}>خرداد،1403</span>
        </div>

        {/* <!-- اولویت div --> */}
        <div class={styles.div_info}>
          <div class={styles.information_div}>اولویت</div>
          <span class={styles.information_span}>بالا</span>
        </div>
      </div>
    </div>
  )

}