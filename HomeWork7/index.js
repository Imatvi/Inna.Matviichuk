//Task#1: Допишіть код використовуючи деструктурування, щоб в консолі браузера з'явилися рядки, які написані в коментарях.
console.log("Task#1");

let arr = ["Tom", "Sam", "Ray", "Bob"];
let [first, second, third, fourth] = arr;
console.log(first); // "Tom"
console.log(second); // "Sam"
console.log(fourth); // [Bob]


//Task#2: Допишіть код використовуючи деструктурування, щоб в консолі браузера з'явилися рядки, які написані в коментарях.
console.log("Task#2");

let data = {
    names: ["Sam", "Tom", "Ray", "Bob"],
    ages: [20, 24, 22, 26],
 };
 let {[person1, person2, person3, person4], [age1, age2, age3, age4]} = data;
 console.log(person2); // "Tom"
 console.log(age2); // 24
 console.log(person4); // "Bob"
 console.log(age4); // 26
 
//Task#3: Напишіть функцію mul(), яка приймає будь-яку кількість параметрів різного типу і повертає добуток параметрів типу Number.
console.log("Task#3");

function mul() {

 }
 console.log(mul(1, "str", 2, 3, true)); // 6
 console.log(mul(null, "str", false, true)); // 0
 

//Task#4: Змініть код використовуючи стрілкові функції, щоб в коді не використовувалися методи bind().

console.log("Task#4");

let server = {
    data: 0,
    convertToString: function (callback) {
       callback((function () {
          return this.data + "";
       }).bind(this));
    }
 };
 let client = {
    server: server,
    result: "",
    calc: function (data) {
       this.server.data = data;
       this.server.convertToString(this.notification());
    },
    notification: function () {
       return (function (callback) {
          this.result = callback();
       }).bind(this);
    }
 };
 client.calc(123);
 console.log(client.result); // "123"
 console.log(typeof client.result); // "string"

 
//Task#5: Напишіть функцію mapBuilder (keysArray, valuesArrays), яка приймає два масиви однакової довжини. 
//Використовуючи ці масиви, функція повинна створювати об'єкт типу Map, ключами якого є значення з першого масиву, 
//а значеннями Map - значення з другого масиву.
//Після цього функція повертає даний об'єкт Map.

console.log("Task#5");

let keys = [1, 2, 3, 4];
let values = ["div", "span", "b", "i"];
let map = mapBuilder(keys, values);
console.log(map.size); // 4
	console.log(map.get(2)); // "span"
