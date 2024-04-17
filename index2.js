
//? 5: Convert a string to a number?

// let str = 'Noman khan';

// console.log();
// console.log(typeof +str);
// console.log(typeof(str));

// 6: Convert a number to a string?
// let num = 12;
// let str1 = num.toString()
// console.log( (str1));

//? 8: To check if a non-empty string is truthy or falsy in JavaScript, we can directly use if statement.
//  console.log(10 + "20");

// console.log("vinod" - "thapa");
// console.log(true + true);
// console.log(true + false);
// console.log(false + true);
// console.log(false - true);

//? Addition (+): Adds two values or variables.
//? Subtraction (-): Subtracts the right operand from the left operand.
//! What will be the Output 🤔💭
// var result = "hello" 
// var result = "hello"  
// console.log(result);


// var result = 0.1 + 0.2 
// var result = 0.1 + 0.2;
// console.log(result.toFixed(3));
// when working with floating-point numbers in JavaScript, consider using methods like toFixed() when precise decimal representation is necessary.

//! Q: Write a program that determines if a person is eligible to drive based on their age being greater than or equal to 18 and having a valid driver's license❓
// let age = 18;
// let isLicense = true;
//! write a program to check if the candidates isEligibleForDrive or not? Age must be equal to or greater then 18.
// let age = 35;
// let isLicense = true;
// let result1 = age >= 19? "yes": "not" ;
// console.log(result);
//! Q: Let say you have a variable score representing a student's exam score. If the score is greater than or equal to 60, the student passes; otherwise, they fail. Use the conditional (ternary) operator to determine the result and store it in a variable called result. Log the result to the console❓
// let age = 78;
// var result = age >= 18 ? "Yes" : "No";
// console.log(result);
// if (examscor >= 60) {
//     console.log("the student pass");
// }else{
//     console.log("the student fail");
// }


//! Requirements:
//? If the person is 18 years or older, a citizen, and registered to vote, display a message saying they are eligible to vote.
//? If the person is younger than 18, not a citizen, or not registered to vote, display a message saying they are not eligible to vote.
//? If the person is 18 or older but not a citizen, display a message saying they are not eligible due to citizenship status.
//? If the person is 18 or older, a citizen, but not registered to vote, display a message saying they are not eligible due to registration status.
//? Extended voting eligibility checker with additional conditions

// 1: Write a program to check if a number is even or odd.

//! 2: Write a program to check if a number is prime.
//todo Prime numbers are numbers that have only 2 factors: 1 and themselves.
//? All prime numbers greater than 2 are odd.
//? However, not all odd numbers are prime.

//! Explain how the switch statement works and what will be the output when the variable day is set to different values.
//! Write a JavaScript switch statement that takes a variable areaOfShapes representing different shapes, and based on its value, calculates and logs the area of the corresponding shape. Consider three shapes: 'Rectangle,' 'Circle,' and 'Square.' For 'Rectangle,' use variables a and b as the sides; for 'Circle,' use a variable r as the radius; and for 'Square,' use variable a as the side length. If the provided shape is not recognized, log a message saying, 'Sorry the shape is not available.' Test your switch statement with areaOfShapes set to 'Square' and sides a and b set to 5 and 10, respectively. Ensure that the correct area (25 in this case) is logged to the console.

//! practice 🧑‍💻
//? let's create a table of 5

//* Simple do...while loop to count from 1 to 10 🧑‍💻
//! Calculate the sum of numbers from 1 to 10 using a for loop 🧑‍💻
//! Homework ➡️ JavaScript program to print table for given number (8,9,12,15) using for Loop?

//? More Practice
//!1: program To check if a year is a leap year🧑‍💻
//? If a year is divisible by 4 and not divisible by 100, or
//? If a year is divisible by 400,
// then it is a leap year. Otherwise, it is not a leap year.
//! 2: Drawing Patterns with Asterisks: 🧑‍💻

//*       i\j  1    2    3    4    5
//*       ----------------------------
//*       1    *    -    -    -    -
//*       2    *    *    -    -    -
//*       3    *    *    *    -    -
//*       4    *    *    *    *    -
//*       5    *    *    *    *    *



//! Question 1: Calculator Function
//! Write a JavaScript function calculator that takes two numbers and an operator as parameters and returns the result of the operation. The function should support addition, subtraction, multiplication, and division.

// console.log(calculator(5, 2, '+')); // Output: 7
// console.log(calculator(8, 4, '-')); // Output: 4
// console.log(calculator(10, 2, '/')); // Output: 5


//! Reverse a String:
//! Write a function to reverse a given string without using built-in reverse methods.
//

//! Palindrome Check:
//! Create a function to determine if a given string is a palindrome (reads the same backward as forward).

//! write a program to Multiply each element with 2
// const numbers = [1, 2, 3, 4, 5];
// // forEach -  Performs an action on each element
// // map -  Creates a new array with transformed elements

//? For Search we have - indexOf, lastIndexOf & includes

//todo Challenge time
//? 1: Add Dec at the end of an array?
//? 2: What is the return value of splice method?
//? 3: Update march to March (update)?
//? 4: Delete June from an array?



// !Example 2: Filtering Products by Price
//  const products = [
//    { name: "Laptop", price: 1200 },
//    { name: "Phone", price: 800 },
//    { name: "Tablet", price: 300 },
//    { name: "Smartwatch", price: 150 },
//  ];

//   Filter products with a price less than or equal to 500

// Sorting an Array: The sort method sorts the elements of an array in place and returns the sorted array. By default, it sorts elements as strings.

// const fruits = ["Banana", "Apple", "Orange", "Mango"];
// const numbers = [1, 2, 4, 3, 6, 5, 6, 7, 4, 8, 9,45,6,7,8,90,76,43,21];
// let NewNumber = numbers.sort((a,b)=>{
//     return b-a;
// })
// console.log(NewNumber);
// console.log(numbers);

//! 1: Using the map method, write a function that takes an array of strings and returns a new array where each string is capitalized.
//! 2: Using the map method, write a function that takes an array of numbers and returns a new array where each number is squared, but only if it's an even number.
//! 3: Using the map method, write a function that takes an array of names and returns a new array where each name is prefixed with "Mr. ".
// let text = "Hello JavaScript, welcome to our world best JavaScript course";
// let result = text.substring(1);
// let result1 = text.replace("H", "");


//! 1: Write a JavaScript function that prints the letters 'a' through 'z' in the console. You should use a loop to iterate through the letters and print each one on a new line.
// the function will be used in String.fromCharCode(i )
//! 2: Write a function to count the number of vowels in a string?


//* Object in JavaScript
//* ==============================
//? Objects are a fundamental part of JavaScript, providing a way to group related data and functions together. In JavaScript, an object is a collection of key-value pairs, where each key is a string (or a symbol) and each value can be any data type, including other objects. Objects can have properties and methods, making them versatile for various use cases.


// dynymic key in Object
// let idtype = "college"

// let object = {
//     [idtype]:  123421,
//     name: "Noman Khan",
//     age: 22,
//     greet: function(){
//         console.log(`Hy, my  ${idtype} id, is ${object[idtype]} and name is ${object.name}`);
//     }
// }
// object.greet()

// let obg1 = {name: "vinod"};
// let obj2 = {name: "voned"};
// let user = obg1 === obj2 ? "yes":" No"
// console.log(user);


//! Problem: Write a function that transforms an array of an objects into an object where the keys are the objects' ids.
// const obj = [
//     {id: 1, name: "Alice"},
//     {id: 2, name: "Bob"}, 
//     {id: 3, name: "Charlie"}
// ]
// Should print: { '1': { id: 1, name: 'Alice' }, '2': { id: 2, name: 'Bob' }, '3': { id: 3, name: 'Charlie' } } 
//! Problem: Write a function that compares two objects to determine if they have the same properties and values.
// let obg1 = {name:"noman", id: 1, age: 22}
// let obg2 = {name:"noman", id: 1, age: 22}
// let obg3 = {name:"noman", id: 1, age: 22, city: "shahabad"};

// function compareObg(obg1,obg2){
//     o1 = Object.keys(obg1)
//     o2 = Object.keys(obg2)
//     if (o1.length !== o2.length) {
//         // console.log("more values");
//         return false
//     }

//     for(let key in obg1){
//         if (obg1[key] !== obg2[key]) {
//             return false 
//         }
//     }
//     return true
// }

// console.log(compareObg(obg1,obg3));




localStorage.setItem("youtubesepadhayi", "javascript")
localStorage.getItem("youtubesepadhayi")
localStorage.removeItem("youtubesepadhayi")