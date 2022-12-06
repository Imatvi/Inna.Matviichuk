//task1
let x = 1;
let y = 2;

y = "2";
let res1 = x + y;
console.log(res1); // "12"
console.log(typeof res1); // "string"

x = "true";
let res2 = x + y;
console.log(res2); // "true2"
console.log(typeof res2); // "string"

let res3 = x != y;
console.log(res3); // true
console.log(typeof res3); // "boolean"

let res4 = x - y;
console.log(res4); // NaN
console.log(typeof res4); // "number"

//task2
let number = prompt("Please enter any number");
let result1 = number > 0; 
let result2 = (number % 2 == 0);
//let result3 = (number = Math.sqrt(7));
let result3 = (number (Math.sqrt(7)));

console.log(result1);
console.log(result2);
console.log(result3);

