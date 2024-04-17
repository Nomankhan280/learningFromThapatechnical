//! 1: Write a function to add a specified number of days to a given date.


// function addTodays(date,extraDay){s
    // console.log(date.getDate());
    // console.log(date.setDate(6));
    // console.log(date.setDate(date.getDate() + extraDay));
    // console.log(new Date(1707264000000));
//     let update = date.setDate(date.getDate() + extraDay)
//     update = new Date(update)
//     return update;
    
//     }
    
//     let date1 = new Date('2024-02-29')
//   let NewWord =   addTodays(date1, 7)
//   console.log(NewWord.toLocaleString());

//! Question: Write a function to calculate the difference in days between two given dates.
function getDaysDifference(d1,d2){
   let ondDay = 24 * 60 * 60 *1000
//    console.log(ondDay);
    let days = Math.abs(d1 - d2);
    // console.log(days);
    return Math.round(days/ondDay)

}

// // Example usage:
const date1 = new Date("2024-02-19");

const date2 = new Date("2024-03-01");
console.log(getDaysDifference(date1, date2)); // Output: 11 (difference in days)