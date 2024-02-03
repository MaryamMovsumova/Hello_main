import React from "react";
import style from "../Header/header.module.scss";
import { CiShoppingBasket } from "react-icons/ci";
import { RxAvatar } from "react-icons/rx";

const Header = () => {
  return (
    <>
      <div className="wrapper">
        <header className={style.header}>
          <h2 className={style.header_logo}>Sneakers</h2>
          <ul className={style.header_nav}>
            <li className={style.header_nav_list}>
              <a href="#" className={style.header_nav_list_item}>
                Collections
              </a>
            </li>
            <li className={style.header_nav_list}>
              <a href="#" className={style.header_nav_list_item}>
                Men
              </a>
            </li>
            <li className={style.header_nav_list}>
              <a href="#" className={style.header_nav_list_item}>
                Women
              </a>
            </li>
            <li className={style.header_nav_list}>
              <a href="#" className={style.header_nav_list_item}>
                About
              </a>
            </li>
            <li className={style.header_nav_list}>
              <a href="#" className={style.header_nav_list_item}>
                Contact
              </a>
            </li>
          </ul>

          <div className={style.header_icon_box}>
            <div className={style.header_icon}>
                <CiShoppingBasket />
            </div>
            <div className={style.header_avatar}>
            <RxAvatar />
            </div>
          </div>
        </header>
      </div>
    </>
  );
};

export default Header;
