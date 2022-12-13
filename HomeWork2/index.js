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
let a = prompt("Please enter the length of the longest side. If all of them are equal just enter a length.");
let b = prompt("Please enter the length of the second sides");
let c = prompt("Please enter the length of the third sides");

a = Number(a);
b = Number(b);
c = Number(c);

let p = (( a + b + c ) / 2);

let area = Math.sqrt(p * (p - a) * (p - b) * (p - c));
console.log(area); 

//b) перевірити чи цей трикутник є прямокутним і вивести в консоль результат перевірки

if ( a ** 2 == b ** 2 + c ** 2 ) {
    console.log("Triangle is equilateral");
} else if ( a ** 2 != b ** 2 + c ** 2 ) {
    console.log("Triangle is not equilateral");
}

//task7: Написати умовну конструкцію, яка в залежності від часу доби виводитиме відповідне привітання. Потрібно отримати реальний час доби із системи. Зробити 2 способами через 2 різних умовних оператора.

let currentdate = new Date();
let datetime =  currentdate.getHours() + ":" 
+ currentdate.getMinutes() + ":" + currentdate.getSeconds();

console.log(new Date);
console.log(datetime);

let night = datetime >= 23 && datetime <= 5;
let morning = datetime >= 5 && datetime <= 11;
let afternoon = datetime >= 11 && datetime <= 17;
let evening = datetime >= 17 && datetime <= 23;

switch (datetime) {
    case night:
        console.log("Доброї ночі!"); //В діапазоні годин 23-5 – має виводитися привітання “Доброї ночі”
        break;
    case morning:
        console.log("Доброго ранку!");//В діапазоні годин 5-11 – має виводитися привітання “Доброго ранку”
        break;
    case afternoon:
        console.log("Доброго дня!");//В діапазоні годин 11-17 – має виводитися привітання “Доброго дня”
        break;
    default:
        console.log("Доброго вечора!");//В діапазоні годин 17-23 – має виводитися привітання “Доброго вечора”   

}
