//Task#1: Реалізуйте функцію calcRectangleArea(width, height), яка приймає 2 параметри ширина прямокутника width і 
//висота прямокутника height і обраховує його площу. 
//Передбачити припинення виконання програми і генерацію винятку у випадку, якщо функції передано не числові параметри.
//Напишіть код, який використовує цю функцію та обробляє можливі виняткові ситуації.

console.log("Task#1");

function calcRectangleArea(width, height) {
    let area = (width * height) / 2;
    console.log(typeof width);
    console.log(typeof height);
    console.log(area);
    return(area);
}

calcRectangleArea(10, 8);

//Task#2: Напишіть функцію checkAge(), яка пропонуватиме юзеру ввести свій вік і генерувати в модальному вікні помилки у випадку
console.log("Task#2");

//Task#3: Створіть клас MonthException, конструктор якого приймає параметр message і ініціалізує поле name значенням 'MonthException'.
console.log("Task#3");

//Task#4: Реалізуйте функцію showUser(id), яка приймає параметром користувацьке id і повертає об’єкт, який містить значення переданої id. 
//Також функція викидає помилку у разі якщо введено від’ємне id.
console.log("Task#4");
