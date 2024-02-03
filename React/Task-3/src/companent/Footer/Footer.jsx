import React from "react";
import style from "../Footer/footer.module.scss";
import { CiYoutube } from "react-icons/ci";
import { FaInstagram ,FaFacebookSquare,FaTwitter} from "react-icons/fa";



const Footer = () => {
  return (
    <>
      <div className="wrapper">
        <footer className={style.footer}>
          <ul className={style.footer_nav}>

            <li className={style.footer_nav_list}>
              <a href="#" className={style.footer_nav_list_item}>
                HELP
              </a>
            </li>

            <li className={style.footer_nav_list}>
              <a href="#" className={style.footer_nav_list_item}>
                COMPANY
              </a>
            </li>

            <li className={style.footer_nav_list}>
              <a href="#" className={style.footer_nav_list_item}>
              PROMOTIONS & DISCOUNTS
              </a>
            </li>       

          </ul>

          <div className={style.footer_icon}>
            <CiYoutube />
            <FaInstagram />
            <FaFacebookSquare />
            <FaTwitter />
            
          </div>
        </footer>
      </div>
    </>
  );
};

export default Footer;
