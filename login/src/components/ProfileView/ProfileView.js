import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet';

import styles from './ProfileView.module.css';
import inputStyles from './input.css';
import outputStyles from './output.module.css';

import profile from "../../icons/profile.jfif";
import home_alt from "../../icons/home-alt (1).png";
import chevort_left from "../../icons/chevron-left (1).png";
import maximize from "../../icons/maximise-frame.png";

import Sidebar from '../Header and Sidebar/Sidebar'
import Header from '../Header and Sidebar/Header'


export default function ProfileView() {

// State برای نمایش یا پنهان کردن منو
const [isMenuVisible, setIsMenuVisible] = useState(false);

// تابع برای تغییر وضعیت منو (نمایش یا پنهان کردن)
const toggleMenu = () => {
  setIsMenuVisible(prevState => !prevState);
};

// بستن منو هنگام کلیک در خارج
useEffect(() => {
  const handleClickOutside = (event) => {
    if (!event.target.closest(`#btn-three-dots`) && !event.target.closest(`#dropdownMenu`)) {
      setIsMenuVisible(false); // بستن منو اگر کلیک در خارج از منو باشد
    }
  };

  // اضافه کردن event listener
  window.addEventListener('click', handleClickOutside);
      // پاک کردن event listener هنگام unmount شدن کامپوننت
      return () => {
        window.removeEventListener('click', handleClickOutside);
      };
    }, []);

  const handleGoProfileEdit = (event) =>{
        event.preventDefault();
        window.location.href = 'profileedit'
  }


  return (
    <>
      <Helmet>
        <title>صفحه پروفایل</title>
        {/* <link rel="stylesheet" href="Edited_ProfileView.css" />
        <link rel="stylesheet" href="header.css" />
        <link rel="stylesheet" href="sidebar.css" /> */}
        <style>
          {`
            body {
              direction: rtl;
              margin: 0;
            }
          `}
        </style>
      </Helmet>

      <div className={styles.antialiased}>  
        {/* main-container برداشته شد */}

          {/* <!--sidebar--> */}
          <Sidebar/>
          {/* <!--end of sidebar--> */}

          {/* <!--right container--> */}   {/* اینجا استایل به left-container تبدیل شد*/}
          <div class={`${styles.left_container} ${outputStyles.font_arabic_medium}`}>

            {/* <!-- navigation bar --> */}
            <Header/>
            {/* <!--end of navigation bar--> */}

            {/* <!-- navigation bar منوی زیر  --> */}
            <div class={`flex flex-row gap-[10px] mt-[112px] items-center ${outputStyles.font_arabic_medium} ${outputStyles.font_semibold} pr-[32px]`}>
              <button id="btn-home">
                <img class={`w-[24px] h-[24px] text-[16px]`} src={home_alt} alt="icon" />
              </button>

              <img class={`w-[18px] h-[18px]`} src={chevort_left} alt="icon" />

              <button id="btn-user-account" class={`text-[#B2B9C0] whitespace-nowrap`}>
                حساب کاربری
              </button>

              <img class={`w-[18px] h-[18px]`} src={chevort_left} alt="icon" />

              <button id="btn-personal-info" class={`text-[#495057] whitespace-nowrap`}>
                اطلاعات شخصی
              </button>
            </div>

            {/* <!-- فرم اطلاعات کاربر --> */}
            <div class={`flex flex-col w-[1140px] mt-[32px] mr-[32px] px-[20px] pb-[32px] border-[2px] rounded-[5px] border-[#E2E5E9] ${outputStyles.font_arabic_medium}`}>

              {/* <!-- اطلاعات شخصی و دکمه ادیت div --> */}
              <div class={`flex justify-between w-[1108px] mt-[20px]`}>

                {/* <!-- اطلاعات شخصی div --> */}
                <div class={`flex items-center`}>
                  <div>
                    <img src={maximize} class={`w-[40px] h-[40px] ml-[16px]`} />
                  </div>

                  <div class={`h-[40px] text-[24px] ${outputStyles.font_semibold} text-[#495057] ml-4 whitespace-nowrap`}>
                    اطلاعات شخصی
                  </div>
                </div>

                {/* <!-- منوی سه نقطه و دکمه ها div --> */}
                <div class={styles.menu_container}>

                  {/* <!-- دکمه سه نقطه  --> */}
                  <button id="btn-three-dots" class={styles.three_dots} onClick={toggleMenu}>
                    ...
                  </button>

                  <div class={styles.dropdown_menu} id="dropdownMenu" style={{ display: isMenuVisible ? 'block' : 'none' }}>
                    <ul>
                      <li id="item-edit" onClick={handleGoProfileEdit}>ویرایش اطلاعات شخصی</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* <!-- عکس پروفایل و نام div --> */}
              <div class={`flex flex-row items-center gap-[32px] w-[1108px]`}>

                {/* <!-- عکس پروفایل --> */}
                <img id="img-profile"
                  src={profile}
                  class={`w-[126px] h-[126px] mt-[32px] rounded-full border-[8px] border-[#000B58] z-0 relative`}
                  alt="profile" />

                {/* <!-- نام --> */}
                <span id="span-profile-name" class={`text-[24px] ${outputStyles.font_normal} text-[#495057] whitespace-nowrap`}>
                  بیتا جوان
                </span>
              </div>

              {/* <!-- اطلاعات کاربر div --> */}
              <div class={`flex flex-col gap-[24px] w-[1108px] pt-[20px]`}>

                {/* <!-- نام کاربر div --> */}
                <div class={styles.information_container}>

                  {/* <!-- نام --> */}
                  <div class={`ml-[208px] ${styles.information_div}`}>نام</div>

                  {/* <!-- نام span --> */}
                  <div class={`${styles.information_span} whitespace-nowrap`}>
                    <span id="span-firstname">بیتا</span>
                  </div>
                </div>

                {/* <!-- نام خانوادگی div --> */}
                <div class={styles.information_container}>

                  {/* <!-- نام خانوادگی --> */}
                  <div class={`ml-[143px] ${styles.information_div}`}>نام خانوادگی</div>

                  {/* <!-- نام خانوادگی span --> */}
                  <div class={`${styles.information_span} whitespace-nowrap`}>
                    <span id="span-lastname">جوان</span>
                  </div>
                </div>

                {/* <!-- شماره موبایل div --> */}
                <div class={styles.information_container}>

                  {/* <!-- شماره تلفن همراه --> */}
                  <div class={`ml-[110px] ${styles.information_div}`}>شماره تلفن همراه </div>

                  {/* <!-- شماره تلفن همراه  span --> */}
                  <div class={`${styles.information_span} whitespace-nowrap font-arial`}>
                    <span id="span-phone">09140000000</span>
                  </div>
                </div>

                {/* <!-- ایمیل div --> */}
                <div class={styles.information_container}>

                  {/* <!-- ایمیل --> */}
                  <div class={`ml-[189px] ${styles.information_div}`}>ایمیل</div>

                  {/* <!-- ایمیل  span --> */}
                  <div class={`${styles.information_span} whitespace-nowrap font-arial`}>
                    <span id="span-email">Bitaj@gmail.com</span>
                  </div>
                </div>

                {/* <!-- تخصص div --> */}
                <div class={styles.information_container}>

                  {/* <!-- تخصص --> */}
                  <div class={`ml-[175px] ${styles.information_div}`}>تخصص</div>

                  {/* <!-- تخصص  span --> */}
                  <div class={`${styles.information_span} whitespace-nowrap`}>
                    <span id="span-profession">مدیر پروژه</span>
                  </div>
                </div>

                {/* <!-- توضیحات div --> */}
                <div class={styles.information_container}>

                  {/* <!-- توضیحات --> */}
                  <div class={`ml-[161px] ${styles.information_div}`}>توضیحات</div>

                  {/* <!-- توضیحات  span --> */}
                  <div class={`${styles.information_span} pl-[16px] pb-[16px]`}>
                    <span id="span-explanations" class={`whitespace-normal`}>
                    ین متن برای توضیحات است و جنبه دیگری ندارد. چگونه باید این متن را به شما نشان دکمه
                      این متن برای تست است و ارزش دیگری ندارد.
                      این متن برای تیت است و ارزش دیگیری ندارد. این متن برای تست است. این متن برای تست است. این متن برای تست ا سندند                      این متن برای تست است و ارزش دیگری ندارد.
                      این متن برای تست است و ارزش دیگری ندارد.                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        {/* <!--main container برداشته شد--> */}
      </div>
    </>
  );
}
