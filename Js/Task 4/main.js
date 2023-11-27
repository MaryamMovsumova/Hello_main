// Write program that will reverse string: 'Hello world' => 'dlrow olleH' 

// let str = "Hello world"
// let reversedStr = ""
// for (let i=str.length-1; i>=0; i--) {
//     reversedStr += str[i]
//     }
//     console.log(reversedStr);

// Write program to repeat every character in string 3 times: 'Hello world' => 'HHHeeellllllooo wwwooorrrlllddd!!!'  

let string = "Hello world"
let newString = "";
for (let i = 0; i < string.length; i++) {

}
console.log(newString);


// Write program to repeat given string n times: 'Hello world', 3 => 'Hello worldHello worldHello world'  

let world = "Hello world";
let repeatWorld = 3;
let reversedStr = "";
for (let i = 0; i < repeatWorld; i++) {
    reversedStr += world
}

console.log(reversedStr);

//  Write program to find the first not repeated character: 'abacddbec' => 'e'    

let findStr = "abacddbec"
let result = '';
for (let i = 0; i < findStr.length; i++) {
    let k = findStr[i];
    let count = 0;
    for (let j = 0; j < findStr.length; j++) {
        if (count > 1) {
            break;
        }
        if (findStr[j] == k) {
            count++;
        }

    }
    if (count == 1) {
        result = k;
        break;
    }


}
console.log(result);

// Write program to find the first repeated character: 'abacddbec' => 'a'    

let repeatChar = "abacddbec";
let resultChar = "";
for (let i = 0; i < repeatChar.length; i++) {

    let charCount = 0;
    for (let j = 0; j < repeatChar.length; j++) {

        if (repeatChar[i] === repeatChar[j]) {
            charCount++
        }

    }
    if (charCount == 1) {
        resultChar = repeatChar;
        break;
    }
}
console.log(resultChar);

























// Create a program to calculate the sum of the elements in an array of numbers: [1, 2, 3, 4, 5] => 15    


let array = [1, 2, 3, 4, 5];
let totalSum = 0;
for (let i = 0; i < array.length; i++) {
    totalSum += array[i];
}

console.log(totalSum);

// Create a program to calculate the average of the elements in an array of numbers: [1, 2, 3, 4, 5] => 3   

let arr = [1, 2, 3, 4, 5];
let avg = 0;
for (let i = 0; i < arr.length; i++) {
    avg += arr[i];
}
avg = avg / arr.length;
console.log(avg)


// Create a program to find the maximum number in an array of numbers: [1, 2, 3, 4, 5] => 5  

let num = [1, 2, 3, 4, 5];
let resultNum = maxElement(num)
function maxElement(arr) {
    let largestNum = arr[0];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > largestNum) {
            largestNum = arr[i]
        }

    }
    return largestNum;
}

console.log(resultNum);

// Create a program to find the minimum number in an array of numbers: [1, 2, 3, 4, 5] => 1  

let miNum = [1, 2, 3, 4, 5];
let minResult = minElement(miNum);
function minElement(arr) {
    let smallestNum = arr[0];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] < smallestNum) {
            smallestNum = arr[i];
        }
    }
    return smallestNum;
}
console.log(minResult);

// Create a program to find the second largest number in an array of numbers: [1, 2, 3, 4, 5] => 4    

let secondMaxNum = [1, 2, 3, 4, 5];
let secMax = secondLargestNumber(secondMaxNum);
function secondLargestNumber(arr) {
    let firstLarge = -Infinity;
    let secondLarge = -Infinity;
    for (let i = 0; i < arr.length; i++) {
        if (firstLarge < arr[i]) {
            secondLarge = firstLarge;
            firstLarge = arr[i];
        } else if (secondLarge < arr[i] && arr[i] != firstLarge) {
            secondLarge = arr[i];
        }
    }
    return secondLarge;
}
console.log(secMax);

// Create a program to find the second smallest number in an array of numbers: [1, 2, 3, 4, 5] => 2

let secondMinNum = [1, 2, 3, 4, 5];
let secMin = secondSmallestNumber(secondMinNum);
function secondSmallestNumber(arr) {
    let firstSmall = Infinity;
    let secondSmall = Infinity;
    for (let i = 0; i < arr.length; i++) {
        if (firstSmall > arr[i]) {
            secondSmall = firstSmall;
            firstSmall = arr[i];
        } else if (secondSmall > arr[i] && arr[i] != firstSmall) {
            secondSmall = arr[i];
        }
    }
    return secondSmall;
}
console.log(secMin);


// Create a program to find the count of each element in an array of numbers: [1, 2, 3, 4, 5, 1, 2, 3, 4, 5] => {1: 2, 2: 2, 3: 2, 4: 2, 5: 2}    

let countArr = [1, 2, 3, 4, 5, 1, 2, 3, 4, 5];
let count = {}
for (let i = 0; i < countArr.length; i++) {
    if (!count[countArr[i]]) {
        count[countArr[i]] = 1;
    } else {
        count[countArr[i]]++;
    }
}
console.log(count);


// Create a program to find the sum of the odd numbers in an array of numbers: [1, 2, 3, 4, 5] => 9

let oddNum = [1, 2, 3, 4, 5];
let sumOdd = sumOfOddNumbers(oddNum);
function sumOfOddNumbers(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] % 2 !== 0) {
            sum += arr[i];
        }
    }
    return sum;
}
console.log(sumOdd);



