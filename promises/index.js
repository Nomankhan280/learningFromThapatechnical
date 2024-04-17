//* ==========================================
//*  Promise in JavaScript
//* ==========================================

//? A promise in JavaScript is an object that represents the eventual completion or failure of an asynchronous operation. It allows you to handle asynchronous operations more easily and cleanly by providing a way to write asynchronous code that looks synchronous.

//* It can be in one of three states:

//? Pending: Initial state, neither fulfilled nor rejected.
//* Fulfilled(Resolved): The operation completed successfully.
//! Rejected: The operation failed or encountered an error.
//? Promises have built-in methods like then and catch to handle the results of asynchronous operations when they complete or encounter errors, making it easier to write asynchronous code that is more readable and maintainable compared to traditional callback-based approaches.
// 1: By default promise has the pending state
// 2: the moment we use setTimeout, we need to handle promises, we can do using then and catch

const promise1 = new Promise((resolve,reject)=>{
    setTimeout(() => {
        resolve("success")
    }, 2000);
}) 
const promise2 = new Promise((resolve,reject)=>{
    setTimeout(() => {
        resolve("failed")
    }, 2000);
}) 
const promise3 = new Promise((resolve,reject)=>{
    setTimeout(() => {
        resolve("success1")
    }, 200);
}) 

//? Promise.all is used when you want to wait for all promises to complete successfully. Reject state will throw an error.
// Promise.all([promise1,promise2,promise3]).then((res)=>{
//     console.log(res);
// }).catch((err)=>{
//     console.log(err);
// })

//? Promise.allSettled is used when you want to wait for all promises to complete, regardless of success or failure, and get information about their outcomes.
// Promise.allSettled([promise1,promise2,promise3]).then((res)=>{
//     console.log(res);
// }).catch((err)=>{
//     console.log(err);
// })
//? Promise.race is used when you are interested in the result of the first promise that completes, regardless of success or failure.

// Promise.race([promise1,promise2,promise3]).then((res)=>{
//         console.log(res);
//     }).catch((err)=>{
//         console.log(err);
//     })
// let firstPromise = new Promise((reslove,reject)=>{
//     setTimeout(() => {
//         reject("hello I love you Shivani")
//     }, 2000);
// })
// firstPromise.then((res)=>{
//     console.log(res);
// })
// .catch((err)=>{
//     console.log(err);
// }).finally((fin)=>{
//     console.log("finally! i until miss you ");
// })

// let studentName = "Alice";

// const enrolment = (studentName)=>{
//     let pr = new Promise((resolve,reject)=>{
// setTimeout(() => {
//    let isSuccesfull = Math.random() > 0.4;
//    if (isSuccesfull) {
//     resolve(`enrollment succesfull for ${studentName}`)
//    }else{
//     reject(`not successful for student ${studentName}`)
//    }
// }, 1000);
//     });
   
// };

// enrolment(studentName)
// ek hour 60 min aur min 60 secnd

// function points(twoPointers, ) {
// 	// let final = twoPointers + threePointers;
// 	// return final
// 	let final = "";
// 	for(let i = 1; i<= twoPointers.length; i++){
// 		final += twoPointers[i]
// 	}
// 	return final
// }

// console.log(points(4))
