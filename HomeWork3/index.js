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

//console.log(product);


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

//task3
console.log("Task#3");

//task4
console.log("Task#4");

//task5
console.log("Task#5");

//task6
console.log("Task#6");

//task7
console.log("Task#7");