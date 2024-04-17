// Q Given a String , Reverse Each word in the sentence 

// let str = "Saare Jahan se acha hindositan hamara";
// let Savedstr = str.split(" ").map((word)=>{
//    return word.split("").reverse().join("")
// })
// console.log(Savedstr.join(" "));

// How to check Array an object Or Not 
// provide some code 

// function IsArray(elm){
// console.log(Array.isArray(elm));
// }
// IsArray({})
// IsArray([])
// IsArray("")

// Q How to an empty array in javascript 
// let arr = [12,3,4,5,6,7];
// arr.length = 0;
// console.log(arr);

// how would check number is an integer or not 
// let num = 23.3;
// if (num % 1 === 0) {
//     console.log("integer");
// }else{
//     console.log("Float");
// }

// duplicate this Array 
//  function duplicate(elm){
//     return  elm.concat(elm)
// }

// console.log(duplicate([1,2,3,4,5,6]));

// Q write a javascript function that reverse a number 
// function reverseNum(num){
// return Number(num.toString().split("").reverse().join(""))
 
// }
// console.log(reverseNum(12));

// second Method 
// function ReverseKaro(num){
//     let rev = 0;
//     while (num>0) {
//         let rem = num%10;
//         rev = rev * 10 + rem;
//         num = Math.floor((num/10));

//     }
//     return rev;

// }

// console.log(ReverseKaro(1234));


// function  PalindromeChecking(str){
// let variable = str.split("").reverse().join("");
// if (variable === str) {
//     return true
// }else{
//     return false;
// }
// }
// console.log(PalindromeChecking("noon"));
// write a javascript function that return a passed string with alphbetical order 
// function alphbetical(str){
//    return str.split("").sort().join("")
// }
// console.log(alphbetical("Noman"));
// console.log(alphbetical("acedb"));

// write a javascript function that accept a strint as a parameter and convert the first letter of each word of the string in uppercase

// function capitalized(str){
//   let saved =  str.split(" ").map((word)=>{
//    return word.charAt(0).toUpperCase() + word.substring(1)
//    })
//    return saved.join(" ")
// }
// console.log(capitalized("hello kaise ho bhai"));

// write javascript function to get number of occurences of each letter specified in string

// function occ(str){
//     let ocuurenc = {}
//     str.split('').forEach((elm) => {
//         if (ocuurenc.hasOwnProperty(elm)=== false) {
//                 ocuurenc[elm] = 1;
//         }else{
//             ocuurenc[elm]++;
//         }
//     });
//     return ocuurenc
// }

// console.log(occ('hello i am Noman Khan Kh'));


// loop an array and add all number of it 
// let array = [1,2,3,4,5,66,7];
// let sum = 0;

// for(let item of array){
// sum = sum+item;
// }
// console.log(sum);

// in an array of numbers and string only add those member which are not string 
// let array =  ["hello", 12, 'h', 78, 2,1,7,"hero"];
// let sum = 0;
// array.forEach(function(elm){
//     if (typeof(elm)=== 'number') {
//         sum = sum + elm;
//     }
// })
// console.log(sum);


// loop an array of object and remove all Objects which dont gendre value male 

// let arr = [
//     {name: 'harshita', gendre: 'female'},
//     {name: 'noman', gendre: 'male'},
//     {name: 'avantika', gendre: 'female'},
//     {name: 'ayetul', gendre: 'female'},
// ]
// let count = 0
// arr.forEach((elm)=>{
// if (elm.gendre !== 'male') {
//     count++;
// }
// })
// for(j=1; j<= count; j++){
    
// for(let i = 0; i<arr.length; i++){
//     if (arr[i].gendre !== 'male') {
//         arr.splice(i,1);
//     }
// }
// }
// console.log(arr);


// write a javascript program to find the most frequently item of an Array 

// let arr = [12,3,4,5,6,3,2,4,3,4,3,4,3,2,1,4];

// let frequent = {};
// let count = 0;
// arr.forEach((item)=>{
//     if (frequent.hasOwnProperty(item)) {
//        frequent[item]++
//     }else{
//         frequent[item] = 1;
//     }
//     let saved  = Object.keys(frequent).reduce((acc,num)=>{
//         return acc>num ? acc: num;
//     })
//     console.log(saved);
// })
// console.log(frequent);


// Q write a javascript function that reverse a number

function ReverseKaro(num){
let rev = "";
while(num>0){
    let rem = num%10;
    rev = rev * 10 + rem;
    num = Math.floor(num/10);
}
return rev;
}

console.log(ReverseKaro(1234));