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
console.log(i1);
//    if (i1 = 0) {
//       console.log(i1 + " is even");
//  }
//   else if (i1 % 2 === 0) {
//     console.log( i1 + " is odd");
//   }
//   else {
//     console.log(i1 + " is even");
//   }
}
  
// //  if (i1 = 0) {
//   console.log(i1 + " is even");
//  }
//   else if (i1 % 2 === 0) {
//     console.log( i1 + " is odd");
//   }
//   else {
//     console.log(i1 + " is even");
//   }

// }

//task3: Напишіть функцію randArray(k), яка заповнюватиме масив k випадковими цілими числами. Випадкові числа генеруються із діапазону 1-500.
console.log("Task#3");
function randArray(k) {
  let array = [];



}
let array1 = [];

//task4: Напишіть функцію raiseToDegree(a,b), яка повертає результат піднесення числа a до степеня b. 
//Функція працює тільки з цілими числами. Реалізувати інтерфейс введення чисел a, b з клавіатури.
console.log("Task#4");

function raiseToDegree(a,b) {
  let result = a ** b;
  if (Number.isInteger(a, b)) {
    console.log(result);
  } else {
    console.log("You have entered incorrect data.");
  }
}

let a = prompt("Please enter  first number")
let b = prompt("Please enter  second number")

raiseToDegree(a, b);

function containsNumbers(str) {
  return /^\d+$/.test(str);
}

if(containsNumbers(a, b, c)) { 
  console.log("Correct data."); 
} else { 
  console.log("Incorrect data.");
  alert("You have entered incorrect data."); }

//task5
console.log("Task#5");

//task6
console.log("Task#6");

//task7
console.log("Task#7");