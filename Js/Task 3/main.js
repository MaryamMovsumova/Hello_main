// Task 1: Change the Background Color
// Create an HTML file with a button. When the button is clicked, change the background color of the page to a random color.

// const changeColor = () => {
//       const randomColor = Math.floor(Math.random() * 16777215).toString(16);
//       document.body.style.backgroundColor = "#" + randomColor;
//       color.innerHTML = "#" + randomColor
// }

// const btn = document.querySelector(".btn");
// btn.addEventListener("click", changeColor);
// changeColor();


// Task 2: Create an HTML file with a button and a counter display. When the button is clicked, increment the counter and update the display.


const buttonTarget = document.getElementsByClassName(".update_btn");
const counter = 0;

function incrementer() {
      buttonTarget.innerHTML = counter.toString();
      counter++;
      return counter;
}

// Task 3: Create an HTML element for the image tag and show the screen an image then create a button in HTML and write a function in JS for button click. When click the button change the image source(src) attribute

const myImg = document.getElementsByClassName("my_img");
const myBtn = document.getElementsByClassName("my_btn");

myBtn.addEventListener("click", function () {
      myImg.src = "adidas.png";
});