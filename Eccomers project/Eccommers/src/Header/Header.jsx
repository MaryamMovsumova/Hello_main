import React from "react";
import style from "../Header//header.module.scss";
import { CiLocationOn } from "react-icons/ci";
const Header = () => {
  return (
    <>
      <div className={style.header}>
        <div className={style.container}>
            
          <div className={style.header_top}>

            <div className={style.header_top_item}>
              <CiLocationOn  className={style.header_top_item_logo}/>
              <span className={style.header_top_item_text}>123 Main St, New York, NY 10001</span>
            </div>

            <div className={style.header_top_info}>

              <ul className={style.header_top_nav}>
                <li className={style.header_top_nav_menu}>
                  <a href="#" className={style.header_top_nav_menu_link}>
                    Privacy Policy
                  </a>
                </li>
                <li className={style.header_top_nav_menu}>
                  <a href="#" className={style.header_top_nav_menu_link}>
                    Terms of Use
                  </a>
                </li>
                <li className={style.header_top_nav_menu}>
                  <a href="#" className={style.header_top_nav_menu_link}>
                    Sales and Refunds
                  </a>
                </li>
              </ul>
              
            </div>

          </div>

          <div className={style.header_bottom}></div>
        </div>
      </div>
    </>
  );
};

export default Header;
