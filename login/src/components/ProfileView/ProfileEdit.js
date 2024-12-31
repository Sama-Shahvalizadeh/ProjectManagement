import React from "react";
import { Helmet } from 'react-helmet';

import styles from './ProfileEdit.module.css';
import outputStyles from './output.module.css';

import profile from "../../icons/profile.jfif";
import home_alt from "../../icons/home-alt (1).png";
import chevort_left from "../../icons/chevron-left (1).png";
import btn_camera from "../../icons/Group 33652.png";

import Sidebar from '../Header and Sidebar/Sidebar'
import Header from '../Header and Sidebar/Header'


export default function ProfileEdit() {

  // دکمه انصراف
  const handleCancel = (event) =>{
        event.preventDefault();
        window.location.href = 'profileview'
  }

  // دکمه ثبت تغییرات
  const handleRegister = (event) =>{

}

  // دکمه انتخاب عکس جدید
  const handleSelectImage = (event) =>{
    const fileInput = document.createElement("input");
    fileInput.type = "file";
    fileInput.accept = "image/*"; // فقط فایل‌های تصویری
    fileInput.click(); // فایل منیجر رو باز می‌کنه
  }


  return (
    <>
      <Helmet>
        <title>ویرایش پروفایل</title>
        {/* <link rel="stylesheet" href="Edited_ProfileView.css" />
        <link rel="stylesheet" href="header.css" />
        <link rel="stylesheet" href="sidebar.css" /> */}
        <style>
          {`
            body {
              direction: rtl;
              margin: 0;
              padding-bottom: 30px;
            }
          `}
        </style>
      </Helmet>

      <div className={styles.antialiased}>

          {/* <!--sidebar--> */}
          <Sidebar />
          {/* <!--end of sidebar--> */}

          {/* <!--left container--> */}
          <div class={`${styles.left_container} ${outputStyles.font_arabic_medium}`}>

            {/* <!-- navigation bar --> */}
            <Header />
            {/* <!--end of navigation bar--> */}

            {/* <!-- navigation bar منوی زیر  --> */}
            <div class={`flex flex-row gap-[10px] mt-[112px] items-center font-arabic-medium font-semibold pr-[32px]`}>
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
            <div class={`flex flex-col w-[1440px] mt-[32px] pr-[32px] font-arabic-medium`}>
              {/* <!-- عکس پروفایل --> */}
              <div class={`relative inline-block`}>
                {/* <!-- عکس پروفایل --> */}
                <img id="img-profile"
                  src={profile}
                  class={`w-[126px] h-[126px] rounded-full border-[8px] border-[#000B58] z-0 relative`}
                  alt="profile" />

                <div class={`absolute bottom-0 right-0.5 rounded-full`}>
                  <button id="btn-camera" onClick={handleSelectImage}>
                    <img src={btn_camera} class={`w-40px h-[40px]`} alt="icon"/>
                  </button>
                </div>
              </div>

              {/* <!-- اطلاعات کاربر div --> */}
              <div class={`flex flex-col gap-[16px] h-[302px] mt-[12px]`}>
                {/* <!-- نام کاربر div --> */}
                <div class={styles.information_container}>
                  {/* <!-- نام --> */}
                  <label class={styles.information_label} for="input-firstname">
                    نام
                  </label>

                  {/* <!--  نام input --> */}
                  <input type="text" id="input-firstname" class={styles.information_input}/>
                </div>

                {/* <!-- نام خانوادگی div --> */}
                <div class={styles.information_container}>
                  {/* <!-- نام خانوادگی --> */}
                  <label class={styles.information_label} for="input-lastname">نام خانوادگی</label>

                  {/* <!-- نام خانوادگی input --> */}
                  <input class={styles.information_input} id="input-lastname"/>
                </div>

                {/* <!-- شماره موبایل div --> */}
                <div class={styles.information_container}>
                  {/* <!-- شماره تلفن همراه --> */}
                  <label class={styles.information_label} for="input-phone">شماره تلفن همراه </label>

                  {/* <!-- شماره تلفن همراه  input --> */}
                  <input class={`${styles.information_input} font-arial`} id="input-phone"/>
                </div>

                {/* <!-- ایمیل div --> */}
                <div class={styles.information_container}>
                  {/* <!-- ایمیل --> */}
                  <label class={styles.information_label} for="input-email">ایمیل</label>

                  {/* <!-- ایمیل  input --> */}
                  <input class={`${styles.information_input} font-arial`}  id="input-email"/>
                </div>

                {/* <!-- تخصص div --> */}
                <div class={styles.information_container}>
                  {/* <!-- تخصص --> */}
                  <label class={styles.information_label} for="select-profession">تخصص</label>

                  {/* <!-- تخصص  select --> */}
                  <select class={styles.information_select} name="professions" id="select-profession">
                    <option value="انتخاب کنید">انتخاب کنید</option>
                    <option value="مدیر شرکت">مدیر شرکت</option>
                    <option value="مدیر پروژه">مدیر پروژه</option>
                    <option value="مدیر فرانت">مدیر فرانت</option>
                    <option value="مدیر بک">مدیر بک</option>
                    <option value="مدیر تحلیل">مدیر تحلیل</option>
                    <option value="مدیر تست">مدیر تست</option>
                    <option value="فرانت اند دولوپر">فرانت اند دولوپر</option>
                    <option value="UI/UX">UI/UX</option>
                    <option value="بک اند دولوپر">بک اند دولوپر</option>
                    <option value="deploy">deploy</option>
                    <option value="تحلیلگر">تحلیلگر</option>
                    <option value="مدیر تست">مدیر تست</option>
                    <option value="تستر">تستر</option>
                  </select>
                </div>

                {/* <!-- توضیحات div --> */}
                <div class={styles.information_container}>

                  {/* <!-- توضیحات --> */}
                  <label class={`${styles.information_label} pb-[140px] block`} for="input-explaining">توضیحات</label>

                  <textarea class={styles.explanations_textarea} id="textarea-explaining" type="text" rows="5"></textarea>
                </div>
              </div>
              <div class={`flex items-center justify-end flex-row gap-2 font-arabic-medium mt-[200px]`}>
                <button 
                 class={`bg-[#FFFFFF] text-[#000B58] w-[120px] h-[40px] rounded-[5px] border-[2px] border-[#000B58] text-[16px] whitespace-nowrap`}
                 id="btn-withdraw"
                 onClick={handleCancel}
                 >
                  انصراف
                </button>
                <button 
                class={`bg-[#000B58] text-[#F8F9FA] w-[120px] h-[40px] rounded-[5px] border-[2px] text-[14px] border-none whitespace-nowrap`} 
                id="btn-record-changes"
                onClick={handleRegister}
                >
                  ثبت تغییرات
                </button>
              </div>
            </div>
          </div>
      </div>

    </>
  )
}