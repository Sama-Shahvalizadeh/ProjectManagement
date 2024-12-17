
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
import btn2 from "./icons/Group 33652.png"
import profile from "./icons/profile dropdown.png";
import chat from "./icons/chat.png";
import home from "./icons/home-alt (1).png";
import left from "./icons/chevron-left (1).png";

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
         
          <button>
                <img class={styles.breadcrumbs_icon} src={home} alt="icon"/>
          </button>

          <img class={styles.breadcrumbs_separator} src={left} alt="icon"/>

          <button className={styles.breadcrumbs_inactive}>
            حساب کاربری
          </button>

          <img class={styles.breadcrumbs_separator} src={left} alt="icon"/>

          <button className={styles.breadcrumbs_active}>
            اطلاعات شخصی
          </button>
        </div>

        <div className={styles.profile_form}>
        {/* <!-- عکس پروفایل --> */}
          <div className={styles.profile_image_edit_wrapper}>

            {/* <!-- عکس پروفایل --> */}
            <img
              src={userImg}
              className={styles.editable_profile_image}
              alt="profile" />

              <div className={styles.edit_image_button}>
                <button>
                  <img src={btn2} className={styles.edit_image_icon} alt="icon"/>
                </button>
              </div>

          </div>

          {/* <!-- اطلاعات کاربر div --> */}
          <div className={styles.profile_form_fields}>

          {/* <!-- نام کاربر div --> */}
            <div className={styles.form_field_row}>

            {/* <!-- نام --> */}
              <label className={styles.form_label} for="first-name">
                نام
              </label>

              {/* <!--  نام input --> */}
              <input type="text" id="first-name" className={styles.form_input} />

            </div>

          {/* <!-- نام خانوادگی div --> */}
            <div className={styles.form_field_row}>

              {/* <!-- نام خانوادگی --> */}
              <label class={styles.last_name_label} for="last-name">نام خانوادگی</label>
    
              {/* <!-- نام خانوادگی input --> */}
              <input class={styles.form_input} id="last-name"/>
                      
            </div>
    
            {/* <!-- شماره موبایل div --> */}
            <div className={styles.form_field_row}>

              {/* <!-- شماره تلفن همراه --> */}
              <label class={styles.phone_label} for="phone-number">شماره تلفن همراه </label>
    
              {/* <!-- شماره تلفن همراه  input --> */}
              <input class={styles.form_input} id="phone-number"/>
            </div>
    
            {/* <!-- ایمیل div --> */}
            <div className={styles.form_field_row}>

              {/* <!-- ایمیل --> */}
              <label class={styles.email_label} for="email-address">ایمیل</label>
    
              {/* <!-- ایمیل  input --> */}
              <input class={styles.form_input} id="email-address"/>
            </div>
    

              {/* <!-- تخصص div --> */}
              <div className={styles.form_field_row}>

                {/* <!-- تخصص --> */}
                <label class={styles.expert_label} for="profession">تخصص</label>

                {/* <!-- تخصص  select --> */}
                <select class={styles.expert_select} name="professions" id="profession">
                  <option>انتخاب کنید</option>
                  <option>تخصص1</option>
                  <option>تخصص2</option>
                </select>
    
              </div>
    
              {/* <!-- توضیحات div --> */}
              <div className={styles.form_field_row}>

                {/* <!-- توضیحات --> */}
                 <label class={styles.explain_label} for="explaining">توضیحات</label>

                 <textarea class={styles.explain_textaera} id="explaining" type="text" rows="5" style={{textَlign: 'right'}}></textarea>
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


