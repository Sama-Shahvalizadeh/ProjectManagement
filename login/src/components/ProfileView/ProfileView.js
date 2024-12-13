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

export default function ProfileView(){
  return (
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
      <nav class={styles.navbar} style={{ position: "fixed", top: "0", zIndex: 1000}}>


{/* <!-- کد مربوط به نوار جست و جو --> */}
<div class="relative flex items-center my-auto text-[#787486] text-[14px]">
    <button class="absolute left-2 top-1/2 transform -translate-y-1/2">
        <img src="icons/search-normal.png" class="h-[22px] w-[22px]"/>
    </button>
    <input type="text" placeholder="اینجا جست و جو کنید...." class="w-[470px] h-[38px] rounded-[5px] bg-[#E2E5E9] focus:outline-none focus:ring focus:ring-[#000B58] px-[16px] text-[#000B58] whitespace-nowrap" />
</div>

{/* <!-- کد مربوط به آیکونهای سمت راست برنامه --> */}
<div class="flex flex-row row-4 justify-end items-center">
    <button class="bg-[#F8F9FA]">
        <img src="icons/Group 33651.png" alt="Icon" class="h-[25px] w-[25px] ml-[16px]"/> 
    </button>

    <button class="bg-[#F8F9FA]">
        <img src="icons/chat.png" alt="Icon" class="h-[25px] w-[25px] ml-[32px]"/>
    </button>
     
    <span class="whitespace-nowrap text-[#495057] text-[16px] font-semibold ml-[32px] whitespace-nowrap">بیتا جوان</span>

    <button class="bg-[#F8F9FA]">
        <img src="icons/profile dropdown.png" alt="Icon" class="h-[18px] w-[18px]"/> 
    </button>
</div>
</nav>
    </div>
  );
};

