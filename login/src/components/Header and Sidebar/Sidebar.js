import React from 'react';
import sidebar from './Sidebar.module.css';
import outputStyles from './output.module.css';
import prjNegar from "../../icons/projectNegar.png";
import home_gray from "../../icons/home-gray.png";
import projects from "../../icons/projects.png";
import tasks from "../../icons/tasks.png";
import users from "../../icons/users.png";
import report from "../../icons/report.png";
import calendar from "../../icons/calendar.png";
import profile from "../../icons/profile.jfif";
import status from "../../icons/status.png";
import frame from "../../icons/Frame 1000001439.png";
import { Helmet } from 'react-helmet';


export default function Sidebar() {
  return (
    <>

      <div class={sidebar.sidebar}>
        <h2 className={`${sidebar.sidebar_header} ${outputStyles.font_saba}`}>
          <img class={sidebar.sidebar_header_icon} src={prjNegar} alt="icon" />
          <span>پروژه نگار</span>
        </h2>

        <ul className={`${sidebar.sidebar_list} ${outputStyles.font_arabic_medium} ${outputStyles.font_semibold}`}>
          <li id="item-dashboard" class={sidebar.sidebar_item}>
            <img class={sidebar.sidebar_icon} src={home_gray} alt="icon" />
            <span class={sidebar.sidebar_text}>داشبورد</span>
          </li>

          <li id="item-projects" class={sidebar.sidebar_item}>
            <img class={sidebar.sidebar_icon} src={projects} alt="icon" />
            <span class={sidebar.sidebar_text}>پروژه ها</span>
          </li>

          <li id="item-tasks" class={sidebar.sidebar_item}>
            <img class={sidebar.sidebar_icon} src={tasks} alt="icon" />
            <span class={sidebar.sidebar_text}>وظایف</span>
          </li>

          <li id="item-users" class={sidebar.sidebar_item}>
            <img class={sidebar.sidebar_icon} src={users} alt="icon" />
            <span class={sidebar.sidebar_text}>کاربران</span>
          </li>

          <li id="item-report" class={sidebar.sidebar_item}>
            <img class={sidebar.sidebar_icon} src={report} alt="icon" />
            <span class={sidebar.sidebar_text}>گزارش</span>
          </li>

          <li id="item-calendar" class={sidebar.sidebar_item}>
            <img class={sidebar.sidebar_icon} src={calendar} alt="icon" />
            <span class={sidebar.sidebar_text}>تقویم</span>
          </li>
        </ul>

        {/* <!--sidebar card--> */}
        <div className={`${sidebar.profile_card} ${outputStyles.font_arabic_medium} h-sm:mt-[50px] h-md:mt-[200px] h-lg:mt-[490px] h-xl:mt-[600px] h-2xl:mt-[700px] h-3xl:[800px] h-4xl:[900px] mx-auto`}>
          <div class={`relative inline-block mr-[8px]`}>
            {/* <!-- عکس پروفایل --> */}
            <img id="img-sidebar-profile" src={profile} class={`w-[40px] h-[40px] rounded-full border-[6px] border-[#000B58]`} alt="icon" />

            {/* <!-- وضعیت آنلاین بودن --> */}

            <img id="img-status" class={`w-[8px] h-[8px] absolute bottom-1.5 right-1 rounded-full`} src={status} alt="icon" />
          </div>

          {/* <!-- ایمیل و نام کاربر به صورت span تعریف شده --> */}
          <div class={`mr-[8px]`}>
            <div class={`whitespace-normal`}>
              <span id="span-sidebar-username">الف ب پ ت ث ج چ ح خ د</span>
            </div>

            <div class={`mt-[16px] whitespace-nowrap`}>
              <span id="span-sidebar-email">Bitajhjhjhkbjbj@gmail.com</span>
            </div>
          </div>

          {/* <!-- منوی همبرگر --> */}
          <div class={`fixed ml-[16px] mr-[185px]`}>
            <button id="btn-side-hamburger">
              <img src={frame} alt="icon" />
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
