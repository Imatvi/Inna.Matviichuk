//task1: Допишіть код, щоб в консолі браузера з'явилися рядки, які написані в коментарях, оперуючи при цьому змінними х і у.
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
//Користувач вводить число (використовуйте prompt ()). Необхідно перевірити чи є введене число
// 	a) парним додатним;
// 	b) кратним числу 7.
// Результат перевірки вивести в консоль

let number = prompt("Please enter any number");
let result1 = number > 0; 
let result2 = (number % 2 == 0);
let result3 = (number % 7 == 0);

console.log(result1);
console.log(result2);
console.log(result3);

if (result1 = number > 0) {
    console.log(number + " is positive.");
} else if (result1 = number < 0) {
    console.log(number + " is negative.");
};

if (result2 = (number % 2 == 0)) {
    console.log(number + " is even.");
} else if (result2 = (number % 2 != 0)) {
    console.log(number + " is odd.");
};

if (result3 = (number % 7 == 0)) {
    console.log(number + " is a multiple of seven.")
} else if ((number % 7 != 0)) {console.log(number + " is not a multiple of seven.");

};

//task3: Створіть порожній масив
let array1 = [];

array1[0] = 5; //У перший елемент масиву запишіть будь-яке число
console.log(array1[0]);

array1[1] = "submarines"; //У другий елемент масиву запишіть будь-який рядок;
console.log(array1[1]);

array1[2] = 1 > 0; //У третій елемент масиву запишіть будь-яке логічне значення;
console.log(array1[2]);

array1[3] = null; //У четвертий елемент масиву запишіть значення null;
console.log(array1[3]);

console.log(array1.length); //Виведіть на екран число елементів, яке зберігається в масиві;

array1[4] = prompt("Please enter any value"); //Запитайте у користувача ввести будь-яке значення і запишіть це значення в п'ятий елемент масиву;

console.log(array1[4]); //Виведіть на екран п'ятий елемент масиву.


array1.shift(); //Видаліть 1-ий елемент масиву і виведіть масив на екран.

console.log(array1);


//task4: Напишіть програму, яка об’єднує всі наявні елементи масиву в стрічку і розділяє їх символом “*”.

const cities = ["Rome", "Lviv", "Warsaw"];

console.log(cities[0] + "*" + cities[1] + "*" + cities[2]);

//task5: Використовуючи функцію prompt() задайте користувачу питання про досягнення ним повнолітнього віку. Результат запишіть в змінну isAdult. В залежності від отриманого значення виведіть відповідне повідомлення про статус особи. Наприклад: при виконанні умови вік більше 18 вивести “Ви досягли повнолітнього віку”. Якщо вік менше 18 років вивести “Ви ще надто молоді”, 

let isAdult1 = prompt ("Скільки вам років?");

if (isAdult1 >= 18 ) {
    console.log("Ви досягли повнолітнього віку.");
    alert("You are an adult.");
} else if (isAdult1 < 18 ) {
    console.log("Ви ще надто молоді.");
    alert("You are too young.");
};

//task6: Користувач вводить три довжини сторін трикутника (використовуйте prompt () три рази для введення кожної сторони).

//a) визначити і вивести в консоль площу трикутника 

alert("Please measure the length of all sides of the triangle");
let x = prompt("Please enter length of the first sides");
let y = prompt("Please enter length of the second sides");
let z = prompt("Please enter length of the third sides");

x = Number(x);
y = Number(y);
z = Number(z);

let p = (( x + y + z ) / 2);

let area = Math.sqrt(p * (p - x) * (p - y) * (p - z));
console.log(area); 

//b) перевірити чи цей трикутник є прямокутним і вивести в консоль результат перевірки



