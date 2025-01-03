import React from "react";

import styles from './Phases.module.css'
import common from '../Common.module.css'
import outputStyles from '../../../styles/output.module.css'
import pagination from './Pagination.module.css'

import maximise from "../../../icons/maximise-frame.png";
import search from "../../../icons/search-normal.png";
import right from "../../../icons/chevron-right.png";
import left from "../../../icons/chevron-left (2).png";
import calendar from "../../../icons/calendar (1).png";
import aperture from "../../../icons/aperture.png";


const data = [
  {
    name: "پایه",
    startDate: "18 فروردین، 1403",
    endDate: "18 اردیبهشت، 1403",
    reviewDate: "18 شهریور، 1403",
    priority: "1",
  },
  {
    name: "متوسطه",
    startDate: "19 فروردین، 1403",
    endDate: "19 اردیبهشت، 1403",
    reviewDate: "19 شهریور، 1403",
    priority: "2",
  },
];

const TableComponent = ({ data }) => {
  const toggleMenuRowPhase = (id) => {
    const menu = document.getElementById(`dropdownMenuRowPhase-${id}`);
    if (menu) {
      menu.style.display = menu.style.display === "block" ? "none" : "block";
    }
  };

  return (
<table class={`${styles.table} ${outputStyles.font_arabic_medium}`} id={styles.table_phase}>
          {/* <!-- شروع هدر جدول --> */}
          <thead>
            <tr>
              <th class={styles.col1}>
                <div class={common.header_row_container}>
                  <label class={common.checkbox}>
                  <input type="checkbox" class={common.hidden_checkbox} />
                  <span class={common.checkmark}></span>
                    ردیف
                  </label>
                </div>
              </th>
              <th class={styles.col2}>
                <div class={styles.header_container}>
                  <img src={aperture} alt="h-title-icon" />
                  <label>عنوان فاز</label>
                </div>
              </th>
              <th class={styles.col3}>
                <div class={styles.header_container}>
                  <img src={calendar} alt="h-time-icon" />
                  <label>زمان پیش بینی شده</label>
                </div>
              </th>
              <th class={styles.col2}>
                <div class={styles.header_container}>
                  <img src={calendar} alt="h-start-icon" />
                  <label>زمان آغاز</label>
                </div>
              </th>
              <th class={styles.col2}>
                <div class={styles.header_container}>
                  <img src={calendar} alt="h-end-icon" />
                  <label>زمان پایان</label>
                </div>
              </th>
              <th class={styles.col2}>
                <div class={styles.header_container}>
                  <img src={calendar} alt="h-priority-icon" />
                  <label>اولویت</label>
                </div>
              </th>
              <th class={styles.col4}>
                <div class={styles.header_container}>
                  عملیات
                </div>
              </th>
            </tr>
          </thead>
          {/* <!-- پایان هدر --> */}

          {/* <!-- شروع body --> */}
          <tbody>
            {/* <!-- سطر اول --> */}
        {data.map((row, index) => (
          <tr key={index}>
            <td>
              <div className={common.checkbox_container}>
                <label
                  className={common.checkbox}
                  style={{ fontFamily: "Arial" }}
                >
                  <input
                    type="checkbox"
                    className={common.hidden_checkbox}
                  />
                  <span className={common.checkmark}></span>
                  {index + 1}
                </label>
              </div>
            </td>
            <td>
              <span>{row.name}</span>
            </td>
            <td>
              <span>{row.startDate}</span>
            </td>
            <td>
              <span>{row.endDate}</span>
            </td>
            <td>
              <span>{row.reviewDate}</span>
            </td>
            <td>
              <span className={styles.priority}>{row.priority}</span>
            </td>
            <td>
              <div className={common.menu_container}>
                <button
                  className={common.three_dotsPhase}
                  onClick={() => toggleMenuRowPhase(index)}
                >
                  ...
                </button>
                <div
                  className={common.dropdown_menuRowPhase}
                  id={`dropdownMenuRowPhase-${index}`}
                >
                  <ul>
                    <li>ویرایش</li>
                    <li>حذف</li>
                    <li>شروع</li>
                    <li>خاتمه</li>
                  </ul>
                </div>
              </div>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};


export default function Phases() {
  return (


    <div class={`${styles.main_container} ${outputStyles.font_arabic_medium}`}>
      {/* <!-- فاز div --> */}
      <div class={styles.div_para_phases}>

        <img src={maximise} class={styles.maximise} />

        <h2 class={`${styles.h2_phases} ${outputStyles.font_arabic_bold}`}>
          فازها
        </h2>
      </div>
      {/* <!----> */}



      {/* <!-- div محتوای اصلی شامل جدول و سرچ بار --> */}
      <div class={styles.main_content}>

        {/* <!-- div شامل سرچ بار و باتن افزودن --> */}
        <div class={styles.div_btn_search}>

          {/* <!-- div سرچ بار --> */}
          <div class={styles.div_relative}>
            <input class={styles.input_search} type="text" placeholder="اینجا جست و جو کنید..." />
            <span class={styles.span_search}>
              <button>
                <img src={search} alt="Search Icon" class={styles.icon_search} />
              </button>
            </span>
            {/* <!-- add button --> */}
            <button class={styles.btn_new}>
              + جدید
            </button>
            {/* <!----> */}
          </div>
          {/* <!----> */}

          {/* <!-- منوی سه نقطه و دکمه ها div --> */}
          <div class={common.menu_container}>

            {/* <!-- دکمه سه نقطه  --> */}
            <button class="three-dotsPhase" onclick="toggleMenuTablePhase()">
              ...
            </button>
{/*            <div class="dropdown-menuTablePhase" id="dropdownMenuTablePhase">
              <ul>
                <li>خروجی گرفتن به فرمت <span>word</span></li>
                <li>خروجی گرفتن به فرمت <span>PDF</span></li>
                <li>خروجی گرفتن به فرمت <span>DB</span></li>
                <li>حذف ردیف های انتخاب شده</li>
              </ul>
            </div>*/}
          </div>
        </div>
        {/* <!-- div پایان شامل سرچ بار و باتن افزودن --> */}

        {/* <!-- شروع جدول فاز --> */}
        
            <TableComponent data={data} />



        {/* <!-- پایان جدول --> */}

        {/* <!-- Pagination --> */}
        <div class={pagination.pagination}>
          <div class={pagination.previous_page_container}>
            <button>
              <img src={right} alt="icon" />
            </button>
            <span class={`${pagination.span_pre_next_page} ${outputStyles.font_arabic_medium} ${outputStyles.font_semibold}`}>
              صفحه قبل
            </span>
          </div>

          <div class={pagination.pagination_items}>
            <a href="#" id="page1" class="active" onclick="goToPage(1)">1</a>
            <a href="#" id="page2" onclick="goToPage(2)">2</a>
            <a href="#" id="page3" onclick="goToPage(3)">3</a>
            <a href="#" id="page4" onclick="goToPage(4)">...</a>
            <a href="#" id="page8" onclick="goToPage(8)">8</a>
            <a href="#" id="page9" onclick="goToPage(9)">9</a>
            <a href="#" id="page10" onclick="goToPage(10)">10</a>
          </div>

          <div class={pagination.next_page_container}>
            <span class={`${pagination.span_pre_next_page} ${outputStyles.font_arabic_medium} ${outputStyles.font_semibold}`}>
              صفحه بعد
            </span>
            <button>
              <img src={left} alt="icon" class={pagination.left} />
            </button>
          </div>
        </div>
        {/* <!-- پایان pagination --> */}
      </div>
      {/* <!-- div پایان محتوای اصلی شامل جدول و سرچ بار --> */}

    </div>


  )
}