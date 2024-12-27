import React from 'react';
import header from './Header.module.css';
import search from "../../icons/search-normal.png";
import notif from "../../icons/notification-bell.png";
import ellipse from "../../icons/Ellipse 87.png";

export default function Header () {
  return (
    <div className={header.header}>
      <div className={header.right_header}>
        <div className={header.input_div}>
          <input
            id="input-searchbar"
            className={header.search_bar}
            type="text"
            placeholder="اینجا جست و جو کنید..."
          />
          <span className={`absolute inset-y-0 left-0 flex items-center pl-3`}>
            <button id="btn-serachbar">
              <img src={search} alt="Search Icon" className={`h-5 w-5`} />
            </button>
          </span>
        </div>
      </div>

      <div className={header.left_header}>
        <div className={`relative inline-block`}>
          <button id="btn-notification">
            <img className={header.notif_img} src={notif} alt="icon" />
            <img src={ellipse} alt="Notification Dot" className={header.notification_dot} />
          </button>
        </div>
      </div>
    </div>
  );
}


