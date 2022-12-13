// console.log("das ist fantastisch");
// let message = "well well well";
// console.log(message);
// const person = {
//     name: "Wednesday",
//     sex: 'female',
//     age: 14
// };
// console.log(person);
// let button = "Enter";
// console.log(typeof button);

// let age = prompt ("How old are you?", "18");
// alert(age);

// let agree = confirm("Are you agree?");
// alert(agree);

// let a = -11;
// if (a > 0) {
//    console.log("Number " + a + " positive");
// } else if (a < 0) {
//    console.log("Number " + a + " negative");
// } else {
//    console.log("Number " + a + " is exactly zero");
// }


// alert("Please measure the length of all sides of the triangle");
// let x = prompt("Please enter length of the first sides");
// let y = prompt("Please enter length of the second sides");
// let z = prompt("Please enter length of the third sides");

// x = Number(x);
// y = Number(y);
// z = Number(z);

// let p = (( x + y + z ) / 2);

// let area = Math.sqrt(p * (p - x) * (p - y) * (p - z));
// console.log(area);


let currentdate = new Date();
let datetime = "Last Sync: " + currentdate.getDay() + "/" + currentdate.getMonth() 
+ "/" + currentdate.getFullYear() + " @ " 
+ currentdate.getHours() + ":" 
+ currentdate.getMinutes() + ":" + currentdate.getSeconds();

console.log(new Date);
console.log(datetime);