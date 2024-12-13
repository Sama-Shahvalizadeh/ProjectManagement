
import React from 'react';
import styles from './ProfileEdit.module.css';
import projectNegar from "./icons/projectNegar.png";
import frame from "./icons/Frame 1000001430.png";
import projects from "./icons/projects.png";
import tasks from "./icons/tasks.png";
import users from "./icons/users.png";
import report from "./icons/report.png";
import calendar from "./icons/calendar.png";
import userImg from "./icons/0df984f5b0ca214b6596dd91ef682411.jfif";
import status from "./icons/status.png";
import hamburger_icon from "./icons/Frame 1000001439.png";
import search from "./icons/search-normal.png";
import btn1 from "./icons/Group 33651.png";
import profile from "./icons/profile dropdown.png";
import chat from "./icons/chat.png";


export default function ProfileEdit ()  {
  return (    <>
      <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
  
      <link rel="stylesheet" href="./output.css"/>
  
      <div className={styles.container} style={{ direction: 'rtl' }}>
      {/* منوی سمت راست */}
      <div className={styles.sidebar}>
        <h2 className={styles.sidebar_header}>
          <img src={projectNegar} alt="Section Icon" className={styles.sidebar_icon} />
          پروژه نگار
        </h2>
        <ul className={styles.sidebar_list}>
          <li className={styles.sidebar_dashboard}><img src={frame} alt="Dashboard" className={styles.sidebar_dashboard_icon} />داشبورد</li>
          <li className={styles.sidebar_projects}><img src={projects} alt="Projects" className={styles.sidebar_item_icon} />پروژه ها</li>
          <li className={styles.sidebar_item}><img src={tasks} alt="Tasks" className={styles.sidebar_item_icon} />وظایف</li>
          <li className={styles.sidebar_item}><img src={users} alt="Users" className={styles.sidebar_item_icon} />کاربران</li>
          <li className={styles.sidebar_item}><img src={report} alt="Reports" className={styles.sidebar_item_icon} />گزارش</li>
          <li className={styles.sidebar_item}><img src={calendar} alt="Calendar" className={styles.sidebar_item_icon} />تقویم</li>
        </ul>


        <div className={styles.sidebar_card}>
          <div className={styles.profile_image_wrapper}>
            <img src={userImg} className={styles.profile_image} alt="icon" />
            <div className={styles.status_icon_wrapper}><img src={status} alt="status" className={styles.status_icon} /></div>
          </div>
          <div className={styles.user_info}>
            <span>بیتا جوان</span>
            <span>Bitaj@gmail.com</span>
          </div>
          <button className={styles.menu_button}><img src={hamburger_icon} alt="menu" /></button>
        </div>
      </div>

      {/* navigation bar بالای صفحه */}
      <nav className={styles.navbar} style={{position:'fixed', top:0, zIndex: 1000}}>
        <div className={styles.search_wrapper}>
          <button className={styles.search_button}><img src={search}className={styles.search_icon} alt="search" /></button>
          <input type="text" placeholder="اینجا جست و جو کنید...." className={styles.search_input} />
        </div>

        {/* <!-- کد مربوط به آیکونهای سمت راست برنامه --> */}
        <div className={styles.navbar_icons_wrapper}>
          <button className={styles.btn_style}><img src={btn1} alt="Icon" className={styles.btn1} /></button>
          <button className={styles.btn_style}><img src={chat} alt="Chat" className={styles.chat} /></button>
          <button><img src={profile} alt="Dropdown" className={styles.navbar_dropdown_icon} /></button>
        </div>
      </nav>

      {/* محتوای اصلی برنامه */}
      <div className={styles.main_content}>
        <div className={styles.breadcrumbs}>
          <button><img className={styles.breadcrumbs_icon} src="icons/home-alt (1).png" alt="Home" /></button>
          <img className={styles.breadcrumbs_separator} src="icons/chevron-left (1).png" alt="Separator" />
          <button className={styles.breadcrumbs_inactive}>حساب کاربری</button>
          <img className={styles.breadcrumbs_separator} src="icons/chevron-left (1).png" alt="Separator" />
          <button className={styles.breadcrumbs_active}>اطلاعات شخصی</button>
        </div>

        <div className={styles.profile_form}>
          <div className={styles.profile_image_edit_wrapper}>
            <img src="icons/0df984f5b0ca214b6596dd91ef682411.jfif" className={styles.editable_profile_image} alt="profile" />
            <button className={styles.edit_image_button}><img src="icons/Group 33652.png" className={styles.edit_image_icon} alt="edit" /></button>
          </div>

          <div className={styles.profile_form_fields}>
            <div className={styles.form_field_row}>
              <label htmlFor="first-name" className={styles.form_label}>نام</label>
              <input type="text" id="first-name" className={styles.form_input} />
            </div>
            <div className={styles.form_field_row}>
              <label htmlFor="last-name" className={styles.form_label}>نام خانوادگی</label>
              <input type="text" id="last-name" className={styles.form_input} />
            </div>
            <div className={styles.form_field_row}>
              <label htmlFor="phone-number" className={styles.form_label}>شماره تلفن همراه</label>
              <input type="text" id="phone-number" className={styles.form_input} />
            </div>
            <div className={styles.form_field_row}>
              <label htmlFor="email-address" className={styles.form_label}>ایمیل</label>
              <input type="text" id="email-address" className={styles.form_input} />
            </div>
            <div className={styles.form_field_row}>
              <label htmlFor="profession" className={styles.form_label}>تخصص</label>
              <select id="profession" className={styles.form_select}>
                <option>انتخاب کنید</option>
                <option>تخصص1</option>
                <option>تخصص2</option>
              </select>
            </div>
            <div className={styles.form_field_row}>
              <label htmlFor="explaining" className={styles.form_label}>توضیحات</label>
              <textarea id="explaining" className={styles.form_textarea}></textarea>
            </div>
          </div>

          <div className={styles.form_buttons_wrapper}>
            <button className={styles.cancel_button}>انصراف</button>
            <button className={styles.submit_button}>ثبت تغییرات</button>
          </div>
        </div>
      </div>
    </div>
    </>
  );
};


