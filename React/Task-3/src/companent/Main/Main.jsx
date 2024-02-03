import React, { useState } from "react";
import style from "../Main/main.module.scss";
import img1 from "../../assets/image/1.jpg";
import img2 from "../../assets/image/2.jpg";
import img3 from "../../assets/image/3.jpg";
import img4 from "../../assets/image/4.jpg";
import img5 from "../../assets/image/5.jpg";

const Main = () => {

  const [ item, setItem] = useState(1)

   const clickIncr =()=>{
    setItem((prev)=>{ prev + 1})
   };

   const clickDec =()=>{
    setItem((prev)=>{prev - 1})
   };

    
  return (
    <div className="wrapper">
      <main className={style.shopping_card}>

        <div className={style.shopping_card_box}>

            <div className={style.shopping_card_box_item}>
                <img src={img1} alt="" />
            </div>

          <div className={style.shopping_card_box_img}>

          <div className={style.img_box}>
          <img src={img2} alt="" />
          </div>

          <div className={style.img_box}>
          <img src={img3} alt="" />
          </div>

          <div className={style.img_box}>
          <img src={img4} alt="" />
          </div>

          <div className={style.img_box}>
          <img src={img5} alt="" />
          </div>
          </div>

        </div>

        <div className={style.shopping_card_info}>

            <p  className={style.shopping_card_info_text}>Men's Shoes</p>
            <h2  className={style.shopping_card_info_title}>Nike Air Force 1 '07</h2>
            <p  className={style.shopping_card_info_item}>Comfortable, durable and timeless—it’s number 1 for a reason. The ‘80s construction pairs with classic colors for style that tracks whether you’re on court or on the go.</p>

            <div className={style.shopping_card_info_box}>
                <span className={style.shopping_card_info_box_price}>$ 125.00</span>

                <span className={style.shopping_card_info_box_item}>50%</span>

                <p className={style.shopping_card_info_box_sale}>$ 250.00</p>
            </div>

            <div className={style.shopping_card_info_add}>
                
                <div className={style.shopping_card_info_add_product}>
                    <p  onClick={clickDec} className={style.shopping_card_info_add_product_dec}>-</p>

                    <p className={style.hopping_card_info_add_product_item}>{item}</p>

                    <p onClick={clickIncr} className={style.shopping_card_info_add_product_inc}>+</p>
                </div>

                <button className={style.shopping_card_info_add_btn}>Add to Card</button>

            </div>


        </div>

      </main>
    </div>
  );
};

export default Main;
