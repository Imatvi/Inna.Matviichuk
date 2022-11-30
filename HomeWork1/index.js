// task2
alert('Matviichuk');

// task3
let lightSource1 = 'candel';
let lightSource2 = 'lantern';
console.log(lightSource1, lightSource2);
lightSource1 = lightSource2;
console.log(lightSource1, lightSource2);

// task4
const person = {
name1: 'Hulk', //string
age: 43, //number
isStrong: true, //boolean
senseOfHumor: "", //undefined
stressResistance: "" //null
};
console.log(typeof name1);
console.log(typeof age);
console.log(typeof strong);
console.log(typeof senseOfHumor);
console.log(typeof stressResistance);

// task5

let isAdult = confirm("Are you over 18 years old?");
alert(isAdult);

// task6
let name2;
let lastName;
let group;
let birthYear;

name2 = "Inna"; //string
lastName = "Matviichuk"; //string
group = "LV-732"; //string
birthYear = 1990; //number

let notMarried = true; //boolean

console.log(birthYear, notMarried, name2, lastName, group);

let programmer;
let JSexpert = null;
console.log(typeof programmer);
console.log(typeof JSexpert);


// task7
let name3 = prompt ("Please enter your name", "User");
let email = prompt ("Please enter your email address", "usermale@gmail.com");
let password = prompt ("Please enter your password for emnail", "qwerty");

console.log("Dear " + name3 + ", your email is " + email + ", your password is " + password);
alert("Dear " + name3 + ", your email is " + email + ", your password is " + password);

// task8

let secondsInHour;
let secondsInDate;
let secondsInMounth;
let daysInMounth;

secondsInHour = 60 * 60;
secondsInDate = secondsInHour * 24;
secondsInMounth = daysInMounth * secondsInDate;

console.log(secondsInHour, secondsInDate, secondsInMounth);


