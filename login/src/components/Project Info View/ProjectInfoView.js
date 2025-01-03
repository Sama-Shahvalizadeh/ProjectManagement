import React from 'react'
import { Helmet } from 'react-helmet';

import Sidebar from '../Header and Sidebar/Sidebar'
import Header from '../Header and Sidebar/Header'
import ProjectView from './Project View/ProjectView';
import Phases from './Phases/Phases'

import common from './Common.module.css'
import inputStyles from './input.css';
import outputStyles from './output.module.css'
import styles from './ProjectInfoView.module.css'

import home from "../../icons/home-alt (1).png";
import left from "../../icons/chevron-left (1).png";


export default function ProjectInfoView() {

  return (
    <>
      <Helmet>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Document</title>
        <link rel="stylesheet" href="./output.css" />
        <link rel="stylesheet" href="../Project_View/ProjectView.css" />
        <link rel="stylesheet" href="../Phase_View/PhaseTable.css" />
        <link rel="stylesheet" href="../Team_View/TeamTable.css" />
        <link rel="stylesheet" href="../Project_Common_Codes/Common.css" />
        <link rel="stylesheet" href="../Project_Common_Codes/Pagination.css" />
        <link rel="stylesheet" href="../Project_Common_Codes/header.css" />
        <link rel="stylesheet" href="../Project_Common_Codes/sidebar.css" />

        <style>
          {`body {
            direction: rtl;
          margin: 0;
          overflow: hidden;
        }`}
        </style>
      </Helmet>
      <div>
        {/* سایدبار */}
        <Sidebar />

        <div className={`${common.left_container} ${outputStyles.font_arabic_medium}`}>

          {/* <!-- navigation bar --> */}
          <Header />

          {/* <!-- navigation bar منوی زیر  --> */}
          <div class={`${styles.button_bar} ${outputStyles.font_semibold}`}>

            <button>
              <img class={styles.home} src={home} alt="icon" />
            </button>

            <img class={styles.left} src={left} alt="icon" />

            <button>
              <span class={styles.para_projects}>پروژه ها</span>
            </button>

            <img class={styles.left} src={left} alt="icon" />

            <button>
              <span class={styles.para_projects}>پلتفرم مدیریت حمل و نقل لجستیک</span>
            </button>

            <img class={styles.left} src={left} alt="icon" />

            <button>
              <span class={styles.para_prj_info}>اطلاعات پروژه</span>
            </button>
          </div>
          {/* <!-- پایان منوی زیر navigation bar --> */}

          {/* <!-- باتنهای جابه جایی بین صفحات مختلف --> */}
          <div class={`${styles.btn_shift} ${outputStyles.font_semibold}`}>

            <div>
              <button class={styles.btn_prj_info}>
                اطلاعات پروژه
              </button>
            </div>

            <div>
              <button class={styles.para_prj_info}>
                نیازمندی ها
              </button>
            </div>

            <div>
              <button class={styles.para_prj_info}>
                ماژول ها
              </button>
            </div>

            <div>
              <button class={styles.para_prj_info}>
                UC ها
              </button>
            </div>

            <div>
              <button class={styles.para_prj_info}>
                واژه نامه
              </button>
            </div>

            <div>
              <button class={styles.para_prj_info}>
                مستندات
              </button>
            </div>
          </div>
          {/* <!-- پایان باتنهای جا به جایی بین صفحات مختلف --> */}

          {/* <!-- فرم اطلاعات پروژه --> */}
          <ProjectView/>
          {/* <!-- پایان فرم اطلاعات پروژه --> */}


          {/* <!-- شروع محتوای فاز --> */}
          <Phases/>
          {/* <!-- پایان شروع محتوای فاز --> */}


          {/* <!-- شروع محتوای ممبر --> */}
          {/* <!-- پایان شروع محتوای ممبر -->  */}



        </div>




      </div>
    </>
  )
}