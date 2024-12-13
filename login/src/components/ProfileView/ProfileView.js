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

export default function ProfileView(){
  return (
    <div className={styles.container}>
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
        <div className={styles.userCard}>
          <div className={styles.userImageWrapper}>
            <img
              src={userImg}
              alt="User"
              className={styles.userImage}
            />
            <div className={styles.status}></div>
          </div>
          <div>
            <span>بیتا جوان</span>
            <span>Bitaj@gmail.com</span>
          </div>
        </div>
      </div>

      {/* Navigation Bar */}
      <nav className={styles.navbar}>
        <div className={styles.searchBar}>
          <button className={styles.searchIcon}>
            <img src={search} alt="Search" />
          </button>
          <input
            type="text"
            placeholder="اینجا جست و جو کنید...."
            className={styles.searchInput}
          />
        </div>
        <div className={styles.navIcons}>
          <button>
            <img src="icons/Group 33651.png" alt="Icon" />
          </button>
          <button>
            <img src="icons/chat.png" alt="Chat" />
          </button>
          <span className={styles.userName}>بیتا جوان</span>
          <button>
            <img src="icons/profile dropdown.png" alt="Dropdown" />
          </button>
        </div>
      </nav>
    </div>
  );
};

