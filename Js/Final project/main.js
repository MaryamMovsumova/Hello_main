"use strict"
const btn = document.querySelectorAll('.products_box_btn');
const productsCard = document.querySelector(".products_card");
const wishBoxNum = document.querySelector(".wish_list_box_num");
const basketIcon = document.querySelector("wish_list_box_icon");
const basket = document.querySelector(".basket");




document.addEventListener("DOMContentLoaded", () => {
  fetch("https://dummyjson.com/products")
    .then((data) => data.json())
    .then((res) => res.products.map((item) => {
      productsCard.innerHTML += `
<div class="products_box">
<img class="products_box_img" src="${item.thumbnail}" alt="">
<div class="products_box_sale">Nağd alışda ${item.stock}% endirim</div>
<h3 class="products_box_title">${item.title}</h3>
<p class="products_box_price">${item.price} ₼</p>
<button id="${item.id}" class="products_box_btn">Səbətə at</button>
</div>
`;
    })
    )
    .then(addEventListenerToButtons);
});

if (basketIcon) {
  basketIcon.addEventListener('click', () => {
    basket.classList.add('basket_active')
  })
};

let basketProducts = [];
function addCard() {
  if (!wishBoxNum.classList.contains("num_active"))
    wishBoxNum.classList.add("num_active")
  let title = this.parentElement.querySelector(".products_box_title").innerHTML
  let price = this.parentElement.querySelector(".products_box_price").innerHTML
  let img = this.parentElement.querySelector(".products_box_img").src;
  let id= this.id
  if(!basketProducts.find(x => x.id === id)){
    basketProducts.push({ title: title, price: price, img: img, id: id })
  }
  else{
    alert("Bu məhsul səbətdə artıq var");
  }
  // add count of products to wish list box
  wishBoxNum.innerHTML = basketProducts.length

}


function addEventListenerToButtons() {
  const btns = document.querySelectorAll('.products_box_btn');
  btns.forEach(btn => {
    btn.addEventListener('click', addCard);
  });
}







