//task1: Заданий масив з елементами [2, 3, 4, 5]. За допомогою циклу for знайдіть добуток елементів цього масиву. 
//Також реалізуйте завдання через while.

console.log("Task#1");

let array = [2, 3, 4, 5];
console.log(typeof array[0]);

let product = 1;

for (let i = 0; i < array.length; i++) {
  product *= array[i] ;
  console.log(product);
}

//------------

console.log("Part 2")

let array1 = [2, 3, 4, 5];
let product1 = 1;

let i = 0;

while (i < array1.length) {
  product1 *= array1[i];
  i++;
  console.log(product1)
}

//task2: Напишіть JavaScript for цикл, який буде ітеруватися від 0 до 15. 
//Для кожної ітерації він перевірятиме, чи є поточне число парним чи непарним, і відображатиме повідомлення на екрані.

console.log("Task#2");

//let i1 = 0;
for( let i1 = 0; i1 < 16; i1++) {
  if (i1 % 2 === 0) {
    console.log(i1 + " is even.");
  } else {
    console.log(i1 + " is odd.");
  }
}

//task3: Напишіть функцію randArray(k), яка заповнюватиме масив k випадковими цілими числами. Випадкові числа генеруються із діапазону 1-500.
console.log("Task#3");

function randArray(k) {
  let array = [];
  for (i = 0; i < k; i++) {
    array[i] = Math.floor(Math.random() * 500) + 1;
  }
  console.log(array);
}
randArray(6);

//task4: Напишіть функцію raiseToDegree(a,b), яка повертає результат піднесення числа a до степеня b. 
//Функція працює тільки з цілими числами. Реалізувати інтерфейс введення чисел a, b з клавіатури.
console.log("Task#4");

function raiseToDegree(a,b) {
  let result = a ** b;
  console.log(result);
}

let a = +prompt("Please enter  first number")
let b = +prompt("Please enter  second number")

if (Number.isInteger(a) && Number.isInteger(b)) {
  console.log(raiseToDegree(a, b));
} else {
  console.log("You have entered inccorect data.");
}

//task5: Реалізуйте функцію – findMin(), яка повинна приймати довільну кількість числових аргументів і повертати той, який має найменше значення. 
//Порада: для розв’язку можете скористатися спеціальним масивом arguments.
console.log("Task#5");

function findMin() {
  let min = arguments[0];
  for (i =1; i < arguments.length; i++) {
    if (arguments[i] < min) {
      min = arguments[i];
    }
  }
  return min;
}

console.log( findMin(12, 14, 4, -4, 0.2));
console.log( findMin(1, -6, -10, 0.7));

//task6: Напишіть функцію findUnique(arr), яка приймає масив arr і перевіряє на унікальність його елементи. 
//Якщо всі елементи масиву унікальні (не мають дублів), то функція поверне true, інакше - false.
console.log("Task#6");

function findUnique(arr) {
  let createArr = new Set(arr);
  return createArr.size === arr.length;
}

console.log( findUnique([1, 2, 3, 5, 3]));
console.log( findUnique([1, 2, 3, 5, 11]));

// function findUnique(arr) {
//   for(let i = 0; i < arr.length; i++) {
//     for(let x = (i + 1); x < arr.length; x++) {
//       if (arr[i] === arr[x]){
//         return false;
//       }
//     }
//   }
//   return true;
// }

//task7: Напишіть функцію, яка повертає останній елемент масиву. 
//Функція може приймати 2 параметра: 1-ий масив, 2-ий числовий параметр, що відповідає кількості 'х' останніх елементів масиву, які треба вивести.
console.log("Task#7");

function returnLastElement(arr1, count) {
  if (count == null) {
    console.log(arr1.pop());
  } else {
    console.log(arr1.slice(-count));
  }
}

console.log( returnLastElement([3, 4, 10, -5]));
console.log( returnLastElement([3, 4, 10, -5],2));
console.log( returnLastElement([3, 4, 10, -5],8));

//task8: Напишіть функцію, яка приймає рядок як параметр і перетворює першу букву кожного слова рядка в верхній регістр.
console.log("Task#8");

function changeFirstLetter(str) {
  let array = str.split(' ');
  let newArray = [];

  for(let i = 0; i < array.length; i++) {
    newArray.push(array[i].charAt(0).toUpperCase() + array[i].slice(1));
  }
  return newArray.join(' ');
}
console.log( changeFirstLetter("i love java script"));