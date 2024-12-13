import React from "react";
import styles from "./ProfileView.module.css";
import projectNegar from "./icons/projectNegar.png";
import frame from "./icons/Frame 1000001430.png";
import projects from "./icons/projects.png";
import tasks from "./icons/tasks.png";
import users from "./icons/users.png";
import report from "./icons/report.png";
import calendar from "./icons/calendar.png";
import userImg from "./icons/0df984f5b0ca214b6596dd91ef682411.jfif";
import search from "./icons/search-normal.png";
import navIcon from "./icons/Group 33651.png";
import chat from "./icons/chat.png";
import status from "./icons/status.png";
import hamburger_icon from "./icons/Frame 1000001439.png";
import btn1 from "./icons/Group 33651.png";
import profile from "./icons/profile dropdown.png";
import home from "./icons/home-alt (1).png";
import left from "./icons/chevron-left (1).png";
import photo_frame from "./icons/maximise-frame.png";
import profile_photo from "./icons/0df984f5b0ca214b6596dd91ef682411.jfif";

export default function ProfileView(){
  return (
    <>
    <meta name="viewport" content="width=device-width, initial-scale=1.0"/>

    <link rel="stylesheet" href="./output.css"/>

    <div className={styles.container} style={{ direction: 'rtl' }}>
      {/* Sidebar */}
      <div className={styles.sidebar}>
        <h2 className={styles.sidebarHeader}>
          <img
            src={projectNegar}
            alt="Section Icon"
            className={styles.icon}
          />
          پروژه نگار
        </h2>


        <ul className={styles.menu}>

          <li className={styles.dashboard_item}>
            <img src={frame} alt="Dashboard" className={styles.dashboard_icon} />
            داشبورد
          </li>
          <li className={styles.projects_item}>
            <img src={projects} alt="Projects" className={styles.projects_icon}/>
            پروژه ها
          </li>
          <li className={styles.tasks_item}>
            <img src={tasks} alt="Tasks" className={styles.tasks_icon} />
            وظایف
          </li>
          <li className={styles.users_item}>
            <img src={users} alt="Users" className={styles.users_icon}/>
            کاربران
          </li>
          <li className={styles.report_item}>
            <img src={report} alt="Reports" className={styles.report_icon}/>
            گزارش
          </li>
          <li className={styles.calendar_item}>
            <img src={calendar} alt="Calendar" className={styles.calendar_icon}/>
            تقویم
          </li>
        </ul>

        {/* <!-- کارت زیر منوی سمت راست --> */}
        <div className={styles.userCard}>
          <div className={styles.userImageWrapper}>

          {/* <!-- عکس پروفایل --> */}
            <img
              src={userImg}
              alt="icon"
              className={styles.userImage}
            />

            {/* <!-- وضعیت آنلاین بودن --> */}
            <div class={styles.status}><img src={status} alt="icon" className={styles.status_icon}/></div>
          </div>
          
          {/* <!-- ایمیل و نام کاربر به صورت span تعریف شده --> */}
          <div class={styles.div_span}>
                <div class={styles.name_span}>
                    <span>بیتا جوان</span>
                </div>

                <div class={styles.email_span}>
                    <span>Bitaj@gmail.com</span>
                </div>
          </div>
          {/* <!-- منوی همبرگر --> */}
            <div class={styles.hamburger_menu}>
                <button>
                    <img src={hamburger_icon} alt="icon"/>
                </button>
            </div>
        </div>
      </div>

      {/* Navigation Bar */}
      <nav className={styles.navbar} style={{position:'fixed', top:0, zIndex: 1000}}>

      {/* <!-- کد مربوط به نوار جست و جو --> */}
        <div className={styles.searchBar}>
          <button className={styles.search_btn}>
            <img src={search} alt="Search" className={styles.search_icon}/>
          </button>
          <input
            type="text"
            placeholder="اینجا جست و جو کنید...."
            className={styles.searchInput}
          />
        </div>

        {/* <!-- کد مربوط به آیکونهای سمت راست برنامه --> */}
        <div className={styles.icon_grp}>
            <button className={styles.icon_style}>
                <img src={btn1} alt="Icon" className={styles.btn1_style}/> 
            </button>
        
            <button className={styles.icon_style}>
                <img src={chat} alt="Icon" className={styles.chat}/>
            </button>
             
            <span className={styles.user_name}>بیتا جوان</span>

            <button className={styles.icon_style}>
                <img src={profile} alt="Icon" className={styles.profile}/> 
            </button>
        </div>
        
      </nav>


      {/* <!--  محتوای اصلی برنامه div --> */}
    <div className={styles.main_div}>

        {/* <!-- navigation bar منوی زیر  --> */}
        <div className={styles.sub_navbar}>

            <button>
                <img className={styles.home} src={home} alt="icon"/>
            </button>
    
            <img className={styles.left} src={left} alt="icon"/>

            <button className={styles.account}>
                حساب کاربری
            </button>

            <img className={styles.left} src={left} alt="icon"/>

            <button className={styles.personal_info_title}>
                اطلاعات شخصی
            </button>
        </div>
            
        {/* <!-- فرم اطلاعات کاربر --> */}
        <div className={styles.personal_form}>

            {/* <!-- اطلاعات شخصی و دکمه ادیت div --> */}
            <div className={styles.personal_div}>

                {/* <!-- اطلاعات شخصی div --> */}
                <div className={styles.personal_info}>
                    <div>
                        <button>
                            <img src={photo_frame}  class={styles.photo_frame}/>
                        </button>
                    </div>
            
                    <div class={styles.info_title}>
                        اطلاعات شخصی
                    </div>
                </div>

                {/* <!-- منوی سه نقطه و دکمه ادیت div --> */}
                <div className={styles.edit_div}>

                    {/* <!-- دکمه سه نقطه  --> */}
                    <button className={styles.three_dots}>
                        ...
                    </button>
                        
                    {/* <!-- دکمه ادیت --> */}
                    <button className={styles.edit_btn}>ویرایش اطلاعات شخصی</button>
                </div>
            </div>
        
            {/* <!-- عکس پروفایل و نام div --> */}
            <div className={styles.photo_name_div}>

                {/* <!-- عکس پروفایل --> */}
                <div>
                    <img
                        src={profile_photo}
                        className={styles.profile_photo}
                        alt="profile" />
                </div>
        
                {/* <!-- نام --> */}
                <div className={styles.fullname_div}>
                    <span className={styles.fullname_title}>
                        بیتا جوان
                    </span>
                </div>
            </div>
        

            {/* <!-- اطلاعات کاربر div --> */}
            <div className={styles.user_info_div}>
        
                {/* <!-- نام کاربر div --> */}
                <div className={styles.info_div}>

                    {/* <!-- نام --> */}
                    <div className={styles.name_div}>نام</div>
        
                    {/* <!-- نام span --> */}
                    <div className={styles.info_title}>
                        <span>بیتا</span>
                    </div>
                </div>
        
                {/* <!-- نام خانوادگی div --> */}
                <div className={styles.info_div}>

                    {/* <!-- نام خانوادگی --> */}
                    <div className={styles.last_name_div}>نام خانوادگی</div>
        
                    {/* <!-- نام خانوادگی span --> */}
                    <div className={styles.info_title}>
                        <span>جوان</span>
                    </div>
                </div>
        
                {/* <!-- شماره موبایل div --> */}
                <div className={styles.info_div}>

                    {/* <!-- شماره تلفن همراه --> */}
                    <div className={styles.phone_div}>شماره تلفن همراه </div>
        
                    {/* <!-- شماره تلفن همراه  span --> */}
                    <div className={styles.info_title}>
                        <span>09140000000</span>
                    </div>
                </div>
        
                {/* <!-- ایمیل div --> */}
                <div className={styles.info_div}>

                    {/* <!-- ایمیل --> */}
                    <div className={styles.email_div}>ایمیل</div>
        
                    {/* <!-- ایمیل  span --> */}
                    <div className={styles.info_title}>
                        <span>Bitaj@gmail.com</span>
                    </div>
                </div>
        

                {/* <!-- تخصص div --> */}
                <div className={styles.info_div}>

                    {/* <!-- تخصص --> */}
                    <div className={styles.expertise_div}>تخصص</div>
        
                    {/* <!-- تخصص  span --> */}
                    <div className={styles.info_title}>
                        <span>مدیر پروژه</span>
                    </div>
                </div>
        
                {/* <!-- توضیحات div --> */}
                <div className={styles.info_div}>

                    {/* <!-- توضیحات --> */}
                    <div className={styles.explaination_div}>توضیحات</div>
        
                    {/* <!-- توضیحات  span --> */}
                    <div className={styles.info_title}>
                        <span>این فیلد مربوط به توضیحات است</span>
                    </div>
                </div>
        
            </div>
        
        </div>
    </div>

      
    </div>
    </>
  );
};

