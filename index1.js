// console.log("5" - 3);
// console.log(2<12<5); //12 = //true and true means 1 isliye true aaya hai
// console.log(typeof("20" + 10 + 10)); 
// it gives string 
//  when 20 + 10 add hoge to bo hoga 2010 aur string mein add hoga  aur phir usme 10 add hoga to bo string mein add hoga answer aayega 201010

// q1

// let userAge = 18;
// let isCityzen = true;
// let isRegister = true;

// if (userAge >= 18) {
//     if (isCityzen) {
//         if (isRegister) {
//             console.log("you are eligible to vote");
//         }else{
//             console.log("You are not eligible to vote due to Register");
//         }
       
//     }else{
//         console.log("You are not eligible to vote due to citizen");
//     }
   
// }


// q2 check number is even or odd


// let num = 5;
// if (num%2 == 0) {
//     console.log("number is even ");
// }else{
//     console.log("number is odd");
// }

// q3 wap to chacck num is positive or negative or zero


// let num = -1;
// if (num === 0) {
//     console.log("number is zero");
// }else if(num > 0){
//     console.log("number is positive");
// }else {
//     console.log("number is negative");
// }

// let num = 1;
// while (num<=10) {
//     console.log(2*num);
//     num++;
// }

// let userInput;
// let positiveNumber;
// debugger
// do {
//     userInput = prompt("enter any positive number")
//     positiveNumber = parseFloat(userInput)
// } while (isNaN(positiveNumber) || (positiveNumber<0));
// console.log("you entered a valid positive number " + positiveNumber);


// q calculate the sum of numbers from 1 to 10 using for loop
// let sum = 0;
// debugger;
// for(let num = 1; num<=10; num++){
//     sum = sum + num;
//     console.log(sum);
// }

// let a=10;
// let b = 10;
// console.log("the balue of a & b is "  + (a+b));



// q all prime no are greater than 2 are odd 
// prime num bo hote jo 1 se divide hote hai ya to num itself divide hoga such as 13


// debugger;
// let num = 15;
// let isprime = true;


// for(let i = 2; i<num; i++){
//     if (num % i === 0) {
//        isprime = false ;
//        break;
//     }
// }
// if (isprime) {
//     console.log("the number is prime ");
// }else{
//     console.log("number is not prime");
// }


// q programa to print table given number (8,9, 12,15) using for loop


// let num = 8;

// for(let i = 1; i<= 10; i++){
//     console.log(num + "x" + i + "=" + num*i);
// }


// q2

// let table = 9;
// for(let i = 1; i<= 10; i++){
//     console.log(table + " x " + i + " = " + table*i);
// }

// let table1 = 12; 
// for(let i = 1; i<= 10; i++){
//     console.log(table1 + "x" + i  + "=" + table1*i);
// }
// let multple = 15;
// debugger;
// for(let i = 1; i<=10; i++){
//     console.log(multple + " * " + i + " = " + multple*i);
// }

// q === if a year is divisible by 4 and not divisible by 100 if a year is divisible by 400 then it is a leap year otherwise it is not leap year 


// let year = 2021;
// debugger;
// // if (year % 4 ===  0) 
// if(year%4 === 0)
// {
//     console.log("its a leap year");
// }
// else
// {
//     console.log("its not a leap year ");
// }

// q write a astricks pattern

// debugger;
// for(let i = 1; i<=5; i++){
//     let pattern= "";
//     for(let j=1; j<=i; j++){
//        pattern = pattern + "*"
//     }
//     console.log(pattern);
// }


// function

// function sumOf3(a,b){
// return a+b;
// }

// console.log(sumOf3(2,2)); 
// console.log(sumOf3(2,8));

// write a function to find sum of two numbers 
// function sum(x,y){
//   return x+y;
// }
// console.log(sum(21,3));
// debugger;
// function greet(name1){
//   console.log(`Hello ${name1} welcome to thapa technical js course`);
// }

// greet('vinod');
// greet('ram');

// create a table using function  5

// function table(a){
// for(let i = 1; i<=10; i++){
//     console.log(`${a} x ${i} = ${a*i}`);
// }
// }
// table(3)
// table(4)

// find number is prime or not using function 

// function Prime(num){
    
//     let isprime = true
//     for(let i = 2; i<num; i++){
//        if (num % i === 0) {
//         isprime = false;
//         break
//        }
//     }
//     if (isprime) {
//         console.log("number is prime");
//     }
//     else{
//         console.log("number is  not prime");

//     }
// }
// Prime(13)





// function calculator(num1, num2, operators){
// if (operators === "+") {
//     return num1 + num2
// }else if (operators === "-") {
//     return num1 - num2
// }else if (operators === "*") {
//     return num1 * num2
    
// }else if (operators === "/") {
//     return num1 / num2
    
// }
// }
// console.log(calculator(4,5, "+"));
// console.log(calculator(10,5, "-"));
// console.log(calculator(5,5, "*"));
// console.log(calculator(2024,4, "/"));

// debugger
// let calc =(n1,n2, operators)=>{
//     switch (operators) {
//         case "+":
//             return n1+n2;
//             break;
//         case "-":
//             return n1-n2;
//             break
//          case "*":
//             return n1 * n2;
//             break   
//         default:
//             console.log("no not found");
//             break;
//     }
// }
// console.log(calc(6, 4, "+"));
// console.log(calc(6, 4, "-"));
// console.log(calc(6, 4, "*"));
// console.log(calc(6, 4, "+"));



// q write a func to reverse a string without using built in reverse function 


// function isReverse(str){
//     debugger;
//     let reverse = '';
// for(let char = str.length-1; char >= 0; char--){
//     // console.log(str[char]);
//     reverse = reverse + str[char]

// }
// return reverse
// }

// console.log(isReverse("hy mera name amar hai"));
// debugger;
// let str = "Noman"
// for(let char = str.length-1; char >= 0; char--){
//     let reverse = "";
//     reverse = reverse + str[char]
//     console.log(reverse);
// }


// function isPalindrome(str){
// let reverse = ''; 
// for(let char = str.length-1; char >= 0; char--){
//     reverse = reverse + str[char]
// }
// // return reverse;
// if (reverse == str) {
//     console.log("palindrome");
// }else{
//     console.log("is not palindrome");
// }
// }
// isPalindrome("zul")

// array    

// accessing element using Array 

// let arr = ["vikram", "bala", 45, 46];
// console.log(arr[3]);




// modifuing Element using array 
//  let arr = ["vikram", "bala", 45, 46];
// arr[0] = ("bahadur");
// console.log(arr);

// 1: for of loop , also known as iterable
//* for...of Loop: The for...of loop is used to iterate over the values of an iterable object, such as arrays, strings, or other iterable objects.

// let arr = ["vikram", "bala", 45, 46];
// for (const item of arr) {
//     console.log(item);
// }

// for(let i = 0; i < arr.length; i++){
//     console.log(arr[i]);
// }


//? 2: for in loop
//* for...in Loop: The for...in loop is used to iterate over the properties (including indices) of an object.
// let arr = ["vikram", "bala", 45, 46];
// for (let key in arr) {
//    console.log(key);
// }


// ? 3: forEach Method
//* The arr.forEach() method calls the provided function once for each element of the array. The provided function may perform any kind of operation on the elements of the given array.

// let arr = ["vikram", "bala", 45, 46];
// arr.forEach(function(curnte, ind, arr){
//     // console.log( `${curnte}  ${ind} ${arr}`);
//     console.log(arr);
    
// })



// ? 4: map function
//* map() creates a new array from calling a function for every array element. map() does not change the original array.

// let arr = ["vikram", "bala", 45, 46];
// let aarmap = arr.map(function(curVal, ind, arr){
//     return `${curVal} ${ind} ${arr}`
// })

// console.log(aarmap);


//todo Practice Time
//! write a program to Multiply each element with 2
// // forEach -  Performs an action on each element
// // map -  Creates a new array with transformed elements


// console.log(num);

// numbers.forEach(function(num){
// console.log(num * 2);
// })

// let newNum = numbers.map((carElm)=>{
//     return carElm * 2;
// })
// console.log(newNum);


//* Key Differences
//! Return Value:
//? forEach: It doesn't return a value. The forEach method is used for iterating over the elements of an array and performing a side effect, such as modifying the array or performing a task for each element.


//? map: It returns a new array containing the results of applying a function to each element in the original array. The original array remains unchanged.

//! Chaining:
//? forEach: It doesn't return a value, so it cannot be directly chained with other array methods.

//? map: Since it returns a new array, you can chain other array methods after using map.

//* Use Case:
//? forEach: Used when you want to iterate over the array elements and perform an action on each element, but you don't need a new array.

//? map: Used when you want to create a new array based on the transformation of each element in the original array.


//* ==========================================================================
//*  How to Insert, Add, Replace and Delete Elements in Array(CRUD) - p1
//* ==========================================================================

//? 👉 How to Insert, Add, Replace and Delete Elements in Array(CRUD)
// let fruits = ["apple", "orange", "mango", "grapes", "banana"];

//? 1: push(): Method that adds one or more elements to the end of an array.
// console.log(fruits.push("guava"));
// console.log(fruits);
// The push() method returns the new length.
//? 2: pop(): Method that removes the last element from an array.
// console.log(fruits.pop());
// console.log(fruits);
//? 3: unshift(): Method that adds one or more elements to the beginning of an array.
// console.log(fruits.unshift("guava"));
// console.log(fruits);
//? 4: shift(): Method that removes the first element from an array.
// console.log(fruits.shift());
// console.log(fruits);

//* ==========================================================================
//*  what if, we want to add or remove anywhere in an elements - p2
//* ==========================================================================

//? The splice() method of Array instances changes the contents of an array by removing or replacing existing elements and/or adding new elements in place

// let arrsplice = ['hari', 'shyam', 'ram', 'mukesh'];

// arrsplice.splice(1,1, "hanuman");
// arrsplice.splice(-1,0, "hanuman");

// console.log(arrsplice);

//* =========================================
//*  Searching in an Array
//* =========================================
//?👉  Searching and Filter in an Array

//? For Search we have - indexOf, lastIndexOf & includes
// const numbers = [1, 2, 3, 4, 6, 5, 6, 7, 8, 9];

//?1: indexOf Method: The indexOf method returns the first index at which a given element can be found in the array, or -1 if it is not present.
// syntax
// indexOf(searchElement);
// indexOf(searchElement, fromIndex);
// console.log(numbers.indexOf(4, 5));

// const numbers1 = [1, 2, 3, 4, 6, 5,  7, 8, 6, 9];
// console.log(numbers1.includes(19));
// console.log(numbers1.indexOf(17)); if the finding element not find then it gives -1
// console.log(numbers1.lastIndexOf(6));


//todo Challenge time
//? 1: Add Dec at the end of an array?
//  month.unshift('December');
// month.splice(2,1, "December" )
// console.log(month);

//? 2: What is the return value of splice method?// When used to add elements, the splice method returns an empty array ([]). 
//? 3: Update march to March (update)?
//? 4: Delete June from an array?
// let month = ['january', 'february', 'august', 'june', "march"];
// month.splice(4, 1, "March")
// console.log(month);
// month.splice(month.length, 0, 'decmber')
// console.log(month);

// month.push('December')
// console.log(month);
// let montd = month.indexOf('june')
// let ret = month.splice(3,1,)
// console.log(month);

// let elem = [1,2,3,4,56,6,78,9];

// let element = elem.filter((elm1)=>{
//     return elm1 > 4;

// })
// console.log(element);

// interview Question on array filter 
// let products = [
//     {name: "laptop", price: 1200},
//     {name: "phone", price: 800},
//     {name: "tablet", price: 300},
//     {name: "Smartwatch", price: 150},
// ]

// let newprodcts = products.filter((contain)=>{
//    return contain.price <= 300;
// })
// console.log(newprodcts);


// // //! Filter unique values
//  const numbers = [1, 2, 3, 4, 6, 5, 6, 7, 8, 9];
// let uniqueValues = numbers.filter((curElem, index, arr) => {
//    console.log(index);
//  console.log(arr.indexOf(curElem));
//  return arr.indexOf(curElem) === index;
//  });
// console.log(uniqueValues);
// console.log([...new Set(numbers)]);

// let sortest = [4,5,3,6,7,9]
// sortest.sort();
// console.log(sortest);


//* =========================================
//*  How to Sort and Compare an Array
//* =========================================
//? How to Sort and Compare an Array
//? Sorting an Array: The sort method sorts the elements of an array in place and returns the sorted array. By default, it sorts elements as strings.

// let sortest = [4,5,3,76,7,9]
// let sortnum = sortest.sort((a,b)=>{
//     if(a>b) return 1;
//     if(a<b) return -1;
// })
// console.log(sortnum);
//* =========================================
//*  Very Important Array Methods
//* =========================================

//? Map(), Filter(), Reduce(),
// map() creates a new array from calling a function for every array element.
// map() does not execute the function for empty elements.
// map() does not change the original array.

//! Using map to square each number and create a new array

// let square = [3,4,5,6,7];
// let squarenum = square.map((num)=>{ 
//     return num*num
// })
// console.log(squarenum);


//! 1: Using the map method, write a function that takes an array of strings and returns a new array where each string is capitalized.
// Original array of strings

// let arr = ['Noman', "sarhan", "aleem", 'adnan'];
// let newaarr = arr.map((num)=>{
//     return num.toUpperCase()
// })
// console.log(newaarr);

//! 2: Using the map method, write a function that takes an array of numbers and returns a new array where each number is squared, but only if it's an even number.
// let num = [2,4, 3, 5, 6,8];
// let squared = num.map((num1)=>{
//     if(num1 % 2 === 0){
//         return num1*num1
//     }
   
// }).filter((num1) => num1 !== undefined)
// console.log(squared);

// let num1 = [12,3,45,67]
// let results = num1.filter((num2)=>{
//     return num2 !== 45;
// })
// console.log(results);

// let num = [2,4, 3, 5, 6,8];
// let evensquare = num.map((num1)=>(num1 % 2 === 0 ? num1*num1: undefined))
// .filter((num1)=>{
//     return num1 !== undefined;
// })
// console.log(evensquare);


//! 3: Using the map method, write a function that takes an array of names and returns a new array where each name is prefixed with "Mr. ".
// let arr = ['Noman', "sarhan", "aleem", 'adnan'];
// let prefixed = arr.map((elm)=>{
//     return `Mr.${elm}`
// })
// console.log(prefixed);


//? Reduce method
// The reduce method in JavaScript is used to accumulate or reduce an array to a single value. It iterates over the elements of an array and applies a callback function to each element, updating an accumulator value with the result. The reduce method takes a callback function as its first argument and an optional initial value for the accumulator as the second argument.
// syntax
// array.reduce(function callback(accumulator, currentValue, index, array) {
//   // Your logic here
//   // Return the updated accumulator value
// }, initialValue);


// const productPrice = [100, 200, 300, 400, 500];
// let total = productPrice.reduce((acc, curElem)=>{
// return acc + curElem;
// })

// console.log(total);


//? 1: Object.keys(): Returns an array containing the names of all enumerable own properties of an object.

// let keys = Object.keys(product);
// console.log(keys);

//? 2: Object.values(): Returns an array containing the values of all enumerable own properties of an object.
// let values = Object.values(product);
// console.log(values);

//? 3: Object.entries(): Returns an array containing arrays of key-value pairs for each enumerable own property of an object.
// let entries = Object.entries(product);
// console.log(entries);

//? 4: Object.hasOwnProperty(): Returns a boolean indicating whether the object has the specified property as an own property.
// console.log(product.hasOwnProperty("name")); // Output: true
// console.log(product.hasOwnProperty("isStudent")); // Output: false

//? 5: Object.assign(): Copies the values of all enumerable own properties from one or more source objects to a target object.
// const target = { a: 1, b: 5 };
// const source = { b: 3, c: 4 };
// const mergedObject = Object.assign(target, source);
// console.log(mergedObject); // Output: { a: 1, b: 3, c: 4 }

//? 6: Object.freeze(): Freezes an object, preventing new properties from being added to it and existing properties from being modified or deleted.
// Object.freeze(product);
// product.id = "5656";
// console.log(product);


//! 1: What will be the output?

// const target = { a: 1, b: 2 };
// const source = { b: 3, c: 4 };
// source["d"] = 7;
// console.log(source);

// let mergedObj =Object.assign({}, target, source)
// console.log(mergedObj);

//  Interview Question - Object Manipulation: ================================================
//! Problem: Given an object representing a student, write a function to add a new subject with its corresponding grade to the student's record. Also check if the grades property is present or not?

// let student = {
//   name: "Bob",
//   age: 20,
//   grades: {
//     math: 90,
//     science: 85,
//     history: 88,
//   },
// };

// const addnewsubject  =(student, subject, marks)=>{
//     if (!student.grades) {
//         student.grades = {}
//     }

//     return student.grades[subject] = marks
// }
// console.log(addnewsubject(student,"computer",91));
// console.log(student);


// let obg1 = {name: "Noman Khan", age: 22, city:"shahabad"}
// let obg2 = {name: "Noman Khan", age: 22, city:"shahabad", gao:"raheempur"}
// let obg3 = {name: "Noman Khan", age: 22, city:"shahabad"}

// const areObject = (obg1,obg2)=>{
//     let o1 = Object.keys(obg1);
//     let o2 = Object.keys(obg2)
//    if (o1.length !== o2.length) {
    // console.log("the keys are not same");
//     return false
//    }

//    for(let key in obg1){
//     if (obg1[key] !== obg2[key]) {
//         return false
//     }
//    }
//    return true
// }
// // areObject(obg1,obg3)
// console.log(areObject(obg1,obg3));
// debugger;
// const firsFun = ()=>{
//     console.log("this is forst function");
//     secondFun()
// }
// firsFun()
// const secondFun = ()=>{
//     console.log("second function");
//     setTimeout(() => {
//         console.log("hy kaisi ho ");
//     }, 4000);
// }
// ? 1. Copying an array
// let fruits = ["Apple", "Orange", "mango", "banana"];
// let newFruits = [...fruits];
// console.log(newFruits);

//? 2: Concatenating arrays / Combining arrays
// const numbers1 = [1, 2, 3, 4];
// const numbers2 = [4, 5, 6];
// const newNumbers = [...numbers1, ...numbers2];
// console.log(newNumbers);

//? 3: Adding Elements to existing array
// let fruits = ["Apple", "Orange", "mango", "banana"];
// // fruits.push("guava", "grapes");
// fruits.push(...["guava", "grapes"]);
// console.log(fruits);


//! One more useCases
//? In JavaScript, when you spread a string using the spread syntax (...), it converts the string into an array of its individual characters.

//? Traditional way
// const country = "INDIA";
// console.log(country.split(""));

//? New way of doing it
// const country = "INDIA";
// console.log([...country]);
//* ==========================================
//*  Rest parameters  - Modern JavaScript
//* =========================================
//? The rest parameter syntax allows a function to accept an indefinite number of arguments as an array, providing a more flexible way to work with functions that can accept varying numbers of arguments.

//? traditional way of doing it
// const sum = (a, b, c, d) => {
//   return a + b + c + d;
// };

//? with rest parameters
// const sum = (a, b, ...numbers) => {
//     //   console.log(typeof numbers);
//     return numbers.reduce((accum, curVal) => (accum = accum + curVal), 0);
//   };
  
//   console.log(sum(1, 2, 3, 4)); 

// <!--*  Event Propagation: 
// <!--* ===================================

// <!--* Event propagation refers to the process of how events propagate or travel through the DOM (Document Object Model) hierarchy. 
//  <!--? In JavaScript, there are two phases of event  propagation: capturing phase and bubbling phase. Understanding event propagation is crucial for managing and handling events in complex web applications. 
 
//  <!--* =================================== 
//  <!--*  Phases of Event Propagation: 
//  <!--* ===================================
//  <!-- 
//  ? Capturing Phase:
//  The event starts from the root of the DOM and goes down to the target element.
//  Handlers registered for the capturing phase are executed.
 
//  ? Target Phase:
//  The event reaches the target element.
//  The handler registered for the target phase is executed.
 
//  ? Bubbling Phase:
//  The event starts from the target element and bubbles up to the root of the DOM.
//  Handlers registered for the bubbling phase are executed. -->
 
//  <!--?  event.stopPropagation() -->
//  <!-- The stopPropagation() method of the Event interface prevents further propagation of the current event in the capturing and bubbling phases. -->
 

// function processfun(name, callback){
//     console.log("recieved Name " + name);
//   callback(name)
// }

// function greet(hello){
//     console.log("assalamualiakum "+hello);
// }
// processfun(" vinod ",  greet)



//! Write a program to perform mathematical operations using callback functions and two variables in JavaScript.

//? Instructions:
//? Define a higher-order function called mathOperation that takes three arguments: x, y, and operation.
//? Implement two callback functions:
//? add: Takes two numbers x and y and returns their sum.
//? sub: Takes two numbers x and y and returns the result of subtracting x from y.
//? Use the mathOperation function to perform addition and subtraction operations on two variables a and b.
//? Display the results of the operations.

// function mathOperation(x,y,operation){
//     return operation(x,y);
// }

// function add(a,b){
//     return a+b;
// }

// function sub(a,b){
//     return b-a;
// }
// console.log(mathOperation(5,15, add));
// console.log(mathOperation(5,15, sub));

// function strnum(a,n){
//   if (n=>0 && n< a.length) {
//     return a.charAt(n)
//   }else{
//     return "";
//   }
// }
// console.log(strnum("hellokaise", 7));



