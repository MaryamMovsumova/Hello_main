"use strick"

//Function Basics

//1

function greetUser(name) {
    console.log("Hello " + name)
};

greetUser("Maryam");

//2

function calculateArea(a, b) {
    return a * b
};

console.log(calculateArea(20, 15));

//3


// function isEven(i){

//     let val=(2,4,5,7,8,9,30)

//     if(i %2 ===0){
//         return "true"
//     }

//     else{
//         return "false"
//     }
// };

// console.log(isEven)


//Object and Methods

//1

let obj = [
    {
    name: "John"
    age:25
    city: "Canada"
    },

    {
    name: "Kate"
    age:22
    city: "Turkey"
    },

    {
    name: "Diana"
    age:27
    city: "Russia"
    },
];



function displayPersonInfo() {
    return `${obj.name} + ${obj.age} + ${obj.city}`
}

console.log(displayPersonInfo);


//2










//3

const cars = [
    {
        color: "red",
        model: "mercedes",
        year: 2018,
    },
    {
        color: "blue",
        model: "bmw",
        year: 2020,
    },
    {
        color: "red",
        model: "kia",
        year: 2023,
    },

];

const displayCarInfo = cars.map((car)=> `${car.color} + ${car.model} + ${car.year}`);

console.log(displayCarInfo);

//Advanced Array Methods

//1

const arr =[2,4];

const powerArr = arr.map((i)=> arr**2);

console.log(powerArr);

//2

const str =["Hello", "John", "Good",23,90];

const filteredStr = str.filter((item)=> item===String);

console.log(filteredStr);

//3

const num = [2,4,5,6];
const calculateTotal = num.reduce((a,b)=> a+b,0);

console.log(calculateTotal)




