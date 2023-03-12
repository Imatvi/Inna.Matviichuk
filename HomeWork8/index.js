//Task#1: Реалізуйте функцію getPromise(message, delay), 
//яка приймає текстове повідомлення message і цілочисельне значення затримки delay (в мс) і повертає Promise,
// який чекає задану кількість часу (використовуючи аргумент delay) і завершується повідомленням message.

console.log("Task#1");

function getPromise(message, delay) {


};


getPromise("test promise", 2000).then(function(data) {
    console.log(data);	
});


//Task#2: Реалізуйте функцію calcArrProduct(arr), яка приймає масив чисел. 
//Функція повинна повернути Promise, робота якого завершується поверненням добутку елементів масиву, 
//якщо вони є типу Numbers, або повідомленням " Error! Incorrect array! " у випадку, якщо хоча б 1 елемент масиву нечисловий.

console.log("Task#2");

function calcArrProduct(arr) {


};


calcArrProduct([3,4,5]).then(result => console.log(result)); // 60
calcArrProduct([5,"user2", 7, 12]).then(result => console.log(result));


//Task#3: Заданий цикл for, який виводить послідовність чисел від 0 до 10 з випадковим інтервалом (від 0 до N мілісекунд). 
//Використовуючи проміси потрібно змінити цикл так, щоб числа виводилися в строгій послідовності від 0 до 10. 
//Наприклад, якщо виведення нуля займає 4 секунди, а одиниці 2 секунди, 
//то одиниця повинна дочекатися виведення  нуля і тільки потім почати свій відлік (щоб дотримуватися послідовності).

console.log("Task#3");



const delay = (i, time) => new Promise(resolve => setTimeout(() => resolve(i), time));
function showNumbers() {
	// your code with using delay(i, time)
}
showNumbers();


//Task#4: Задачу номер 3 потрібно реалізувати без застосування промісів. 
//Переписати функцію showNumbers, використовуючи конструкцію async/await.
console.log("Task#4");

