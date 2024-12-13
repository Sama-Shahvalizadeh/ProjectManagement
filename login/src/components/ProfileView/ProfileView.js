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

export default function ProfileView(){
  return (
    <>
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
      <nav class={styles.navbar} style={{position:'fixed', top:'0', zIndex: 1000}}>

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
        <div class={styles.icon_grp}>
            <button class={styles.icon_style}>
                <img src={btn1} alt="Icon" class={styles.btn1_style}/> 
            </button>
        
            <button class={styles.icon_style}>
                <img src={chat} alt="Icon" class={styles.chat}/>
            </button>
             
            <span class={styles.user_name}>بیتا جوان</span>

            <button class={styles.icon_style}>
                <img src={profile} alt="Icon" class={styles.profile}/> 
            </button>
        </div>
        
      </nav>


      {/* <!--  محتوای اصلی برنامه div --> */}
    <div class={styles.main_div}>

        {/* <!-- navigation bar منوی زیر  --> */}
        <div class={styles.sub_navbar}>

            <button>
                <img class={styles.home} src={home} alt="icon"/>
            </button>
    
            <img class={styles.left} src={left} alt="icon"/>

            <button class={styles.account}>
                حساب کاربری
            </button>

            <img class={styles.left} src={left} alt="icon"/>

            <button class={styles.personal_info}>
                اطلاعات شخصی
            </button>
        </div>
            
        {/* <!-- فرم اطلاعات کاربر --> */}
        <div class="flex flex-col w-[1140px] h-[480px] mt-[32px] mr-[268px] pr-[16px] border-[2px] rounded-[5px] border-[#E2E5E9] font-arabic-medium antialiased">

            {/* <!-- اطلاعات شخصی و دکمه ادیت div --> */}
            <div class="flex items-center justify-between w-[1108px] h-[40px]">

                {/* <!-- اطلاعات شخصی div --> */}
                <div class="flex items-center mt-[20px]">
                    <div>
                        <button>
                            <img src="icons/maximise-frame.png"  class="h-[40px] w-[40px] ml-[16px]"/>
                        </button>
                    </div>
            
                    <div class="w-[222px] h-[40px] text-[24px] font-normal text-[#495057] ml-4 whitespace-nowrap">
                        اطلاعات شخصی
                    </div>
                </div>

                {/* <!-- منوی سه نقطه و دکمه ادیت div --> */}
                <div class="flex flex-col items-end space-y-1">

                    {/* <!-- دکمه سه نقطه  --> */}
                    <button class="text-[#0D062D] text-[16px] mt-[64px]">
                        ...
                    </button>
                        
                    {/* <!-- دکمه ادیت --> */}
                    <button class="w-[200px] h-[60px] border-[2px] rounded-[5px] border-[#E2E5E9] text-[14px] text-[#495057] font-semibold whitespace-nowrap">ویرایش اطلاعات شخصی</button>
                </div>
            </div>
        
            {/* <!-- عکس پروفایل و نام div --> */}
            <div class="flex flex-row items-center gap-[32px] w-[1108px] mt-[40px] h-[138px]">

                {/* <!-- عکس پروفایل --> */}
                <div>
                    <img
                        src="icons/0df984f5b0ca214b6596dd91ef682411.jfif"
                        class="h-auto max-w-full w-[126px] h-[126px] rounded-full border-[6px] border-[#000B58] z-0 relative"
                        alt="profile" />
                </div>
        
                {/* <!-- نام --> */}
                <div class="w-[88px] h-[32px]">
                    <span class="text-[24px] font-normal text-[#495057] whitespace-nowrap">
                        بیتا جوان
                    </span>
                </div>
            </div>
        

            {/* <!-- اطلاعات کاربر div --> */}
            <div class="flex flex-col gap-[16px] w-[1108px] h-[302px] mt-[12px]">
        
                {/* <!-- نام کاربر div --> */}
                <div class="flex flex-row items-center">

                    {/* <!-- نام --> */}
                    <div class="w-[19px] h-[24px] ml-[208px] font-bold text-[16px] text-[#495057] whitespace-nowrap">نام</div>
        
                    {/* <!-- نام span --> */}
                    <div class="h-[24px] font-light text-[#1B1D1F] text-[16px]">
                        <span>بیتا</span>
                    </div>
                </div>
        
                {/* <!-- نام خانوادگی div --> */}
                <div class="flex flex-row items-center">

                    {/* <!-- نام خانوادگی --> */}
                    <div class="w-[83px] h-[24px] ml-[143px] font-bold text-[16px] text-[#495057] whitespace-nowrap">نام خانوادگی</div>
        
                    {/* <!-- نام خانوادگی span --> */}
                    <div class="h-[30px] font-light text-[#1B1D1F] text-[16px]">
                        <span>جوان</span>
                    </div>
                </div>
        
                {/* <!-- شماره موبایل div --> */}
                <div class="flex flex-row items-center">

                    {/* <!-- شماره تلفن همراه --> */}
                    <div class="w-[116px] h-[24px] ml-[110px] font-bold text-[16px] text-[#495057] whitespace-nowrap">شماره تلفن همراه </div>
        
                    {/* <!-- شماره تلفن همراه  span --> */}
                    <div class="h-[24px] font-light text-[#1B1D1F] text-[16px]">
                        <span>09140000000</span>
                    </div>
                </div>
        
                {/* <!-- ایمیل div --> */}
                <div class="flex flex-row items-center">

                    {/* <!-- ایمیل --> */}
                    <div class="w-[37px] h-[24px] ml-[189px] font-bold text-[16px] text-[#495057] whitespace-nowrap">ایمیل</div>
        
                    {/* <!-- ایمیل  span --> */}
                    <div class="h-[24px] font-light text-[#1B1D1F] text-[16px]">
                        <span>Bitaj@gmail.com</span>
                    </div>
                </div>
        

                {/* <!-- تخصص div --> */}
                <div class="flex flex-row items-center">

                    {/* <!-- تخصص --> */}
                    <div class="w-[51px] h-[24px] ml-[175px] font-bold text-[16px] text-[#495057] whitespace-nowrap">تخصص</div>
        
                    {/* <!-- تخصص  span --> */}
                    <div class="h-[24px] font-light text-[#1B1D1F] text-[16px]">
                        <span>مدیر پروژه</span>
                    </div>
                </div>
        
                {/* <!-- توضیحات div --> */}
                <div class="flex flex-row items-center">

                    {/* <!-- توضیحات --> */}
                    <div class="w-[65px] h-[24px] ml-[161px] font-bold text-[16px] text-[#495057] whitespace-nowrap">توضیحات</div>
        
                    {/* <!-- توضیحات  span --> */}
                    <div class="h-[24px] font-light text-[#1B1D1F] text-[16px]">
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

