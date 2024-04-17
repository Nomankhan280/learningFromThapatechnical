// let str = "Assalamu alaikum  \"i am javascript \" developer"
// console.log(str);

//? Strings in JavaScript are a fundamental data type that represents a sequence of characters.

// Note:
//? Strings created with single or double quotes works the same.
// There is no difference between the two.
//? a:  indexOf(): The indexOf() method returns the index (position) of the first occurrence of a string in a string, or it returns -1 if the string is not found:

// let name1 = 'You are Noman Khan Which dont know me ';
// let result = name1.search(/i )
// let result = name1.search(/which/i)
// console.log(result);

// console.log(result);
// let arr = Array.from(name1)
// console.log(arr.lastIndexOf('a'));
// console.log(arr);
// let arrmap = arr.map((curelm, index)=>{
//     return `${curelm} - ${index}`
// })
// console.log(arrmap);

//? match() : Returns an array of the matched values or null if no match is found.
// let nameofAllah = 'Raheem Rahman Alameen malik';
// let result = nameofAllah.match('Rahman')
// console.log(result);


//? matchAll() : Returns an iterator of all matches, providing detailed information about each match. Returns an empty iterator if no match is found.
// let text = "Hello JavaScript, welcome to our world best JavaScript course";
// let result1 = text.matchAll('JavaScript')
// console.log(result1["javaScript"]);
// console.log(...result1);
// for(let item of result1){
//     console.log(item.index);
// }
// let result = result1[0]
// console.log(result1);
//? startsWith(): The startsWith() method returns true if a string begins with a specified value.Otherwise it returns false:
//  let text = "Hello JavaScript, welcome to our world best JavaScript course";
//  let result = text.startsWith("Helcome");
//  let result = text.startsWith("Hello");
// console.log(result);

//? a: slice() extracts a part of a string and returns the extracted part in a new string.
// let slic1 = "hello Noman khan "
// let slicNew = slic1.slice(6,12)
// console.log(slicNew);


//! Homework
// let text = "Hello JavaScript, welcome to our world best JavaScript course";
// let result = text.substring(0);
// let result = text.substring(1);
// let result = text.substring(-5);
// console.log(result);

//* Interview Question
//* =========================================
//! What is the output for the following code?

// let text = "Hello JavaScript, welcome to our world best JavaScript course";
// let result = text.slice(1);
// let result = text.replace("H", "");
// let result = text.substring(1);
//? Optional
// let result = text.replace("JavaScript", "Vinod");
// let result = text.replaceAll("JavaScript", "Vinod");

// console.log(result);


//? charAT() : The charAt() method returns the character at a specified index (position) in a string
// let text = "Hello JavaScript, welcome to our world best JavaScript course";
// let result = text.charAt(6);
// let result = text.charAt(-6);
// console.log(result);


//? charCodeAt() : The charCodeAt() method returns the code of the character at a specified index in a string. The method returns a UTF-16 code (an integer between 0 and 65535).
// let text = `Hello JavaScript, welcome to our world" best" JavaScript course`;
// let result = text.charCodeAt(6);
// console.log(result);

//todo ES2022 introduced the string method at():
//? The at() method returns the character at a specified index (position) in a string. The at() method returns the same as carAt().
// let text = "Hello JavaScript, welcome to our world best JavaScript course";
// let result = text.at(-6);
// console.log(result);

//todo Note
// The at() method is a new addition to JavaScript.
// It allows the use of negative indexes while charAt() do not.
// Now you can use myString.at(-2) instead of charAt(myString.length-2).


//? trim: Removes whitespace from both ends of the string.
// let str = '       Noman Khan      '
// console.log(str.length);
// let newstr = str.trim();
// console.log(newstr.length);

//! 1: Write a JavaScript function that prints the letters 'a' through 'z' in the console. You should use a loop to iterate through the letters and print each one on a new line.



// for(let char = 97; char <= 122; char++){
//     console.log(String.fromCharCode(char));
// }

//! 3: Write a function to check if all the vowels presents in a string or not?


// let checkAllVowel = ((str)=>{
//     let vowels  = 'aeiou';
//     for(let char of vowels){
//         // console.log(char);
//         // console.log(str.includes(char));
//         if (!str.includes(char)) {
//             return false
//         }
//     }
//     return true
// })
// console.log(checkAllVowel('hay i am Noman kHan e u'));


//! 2: Write a function to count the number of vowels in a string?
// debugger;
// let countvowels = ((str)=>{
//     let vowels = 'aeiou';
//     let count = 0;
//     for(let char of str){
//         // console.log(char);
//         if (vowels.includes(char)) {
//             count++;
//         }
//     }
//     return count;
// })
// console.log(countvowels('hy my name is khan hum jayege or bo jayege'));

//! 4: Write a JavaScript function to check if the given sting is Pangram or not?

// let pangramChecker = ((str)=>{
// let inputstr = str.toLowersCase( ).split("")
// console.log(inputstr);
// })
// console.log(pangramChecker("The quick brown fox jumps ove the lazy dog"));

// let str = ("The quick brown fox jumps ove the lazy dog")

// let inputstr = str.toLowerCase().split("")
// console.log(inputstr);
// let value = inputstr.filter((currelm)=> (currelm >= 'a'.charCodeAt() && currelm <= 'z'.charCodeAt()) )
// console.log(value);

// let date = new Date("2024-02-24");
// let date1 = new Date("2025-03-13");
// let diff = date1 - date;
// console.log(diff/(1000*60*60));

// function repeatedFunction(){
//     console.log("this function reapets every 1000 miliseconds");
// }
// let id = setInterval(repeatedFunction, 1000);
// setTimeout(() => {
//     clearInterval(id)
//     console.log("interval is cleard");
// }, 5000);


// let obj3 = obj === obj1? true: false;
// console.log(obj3);
//  pass by value m hum data ki copy pass karte hai aur pass by refrence mein actual data mein change karte hai 
// obj.Name = 'sant kabeer'
// let newObj = Object.assign({}, obj,obj1);
// newObj.Name = "shukr"
// console.log(newObj);
// console.log(obj);


// let student = {
//     name: 'Blob',
//     age: 20,
//     grades: {
//         math: 90,
//         science: 80,
//         history: 88,
//     },
// };

// function AddSubjectGrade(student, subject, marks){
//     if (!student.grades) {
//        student.grades = {}
//     }
//     console.log(student.grades[subject]=marks);
// }
// AddSubjectGrade(student, "computer", 90)
// console.log(student);
// const areObjectsEqual = (obj1,obj2)=>{
//     let ob1 = Object.keys(obj1)
//     let ob2 = Object.keys(obj2);
//     if (ob1.length !== ob2.length) {
//         return false
       
//     }
//     for(let key in obj1){
//         // console.log(obj1[key]);
//         if (obj1[key] !== obj2[key]) {
//            return false
//         }
//        return true
//     }
    
// }

// let obgA = {name: "Alice", age: 26, city: "New York", country: "Usa"};
// let ObjB = {john: "",name: "Alice", age: 255, city: "New York", country: "ind"}
// console.log(areObjectsEqual(obgA,ObjB));

// let inputArray = [
//     {id:1, name:"Alice"},
//     {id:2, name:"john"},
//     {id:3, name:"bob"},
// ]

// function ArrayToObj(arr){
// console.log(arr[0].id);
// let obj = {}
// for(let key of arr){
    // console.log(key.id, key);
 
//     (obj[key.id] = key)
// }
// return obj
// }

// console.log( ArrayToObj(inputArray));


// closure jab banta jab ek inner function outer function ke variable ko acces kar leta hai aur uske usko excute kar deta hai
// function outerfuction(){
//     var outervariable = "i am from outer";
//     function innerfinction(){
//         console.log(outervariable);
//     }
//     return innerfinction
// }

// let closureFunction = outerfuction();
// console.dir(closureFunction);

function multiplyer(number){
    return function (factor){
        console.log(factor,number);
        return factor*number
    }
}
let duoble = multiplyer(2);
console.log(duoble(5));