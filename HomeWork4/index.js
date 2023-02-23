//Task#1: Реалізуйте функцію calcRectangleArea(width, height), яка приймає 2 параметри ширина прямокутника width і 
//висота прямокутника height і обраховує його площу. 
//Передбачити припинення виконання програми і генерацію винятку у випадку, якщо функції передано не числові параметри.
//Напишіть код, який використовує цю функцію та обробляє можливі виняткові ситуації.

console.log("Task#1");

function calcRectangleArea(width, height) {
    if (isNaN(width) || isNaN(height)) {
        throw "Entered data is not a number.";
    }
    return width * height;
}
try {
    alert(calcRectangleArea(5, "string"));
}
catch (e) {
    console.log(e);
}


calcRectangleArea(10, 8);

//Task#2: Напишіть функцію checkAge(), яка пропонуватиме юзеру ввести свій вік і генерувати в модальному вікні помилки у випадку
console.log("Task#2");

// function checkAge() {
//     let age = +prompt("How old are you?");
//     return age;
// }

function checkAge() {
    try{
        const age = prompt("This movie is available for watching only for those who are more than 14 years old. Please enter your age.")
        if (age == ""){
            throw new Error("The field is empty! Please enter your age.")
        }else if (isNaN(parseInt(age))){
            throw new Error("Please enter Number.")
        }else if (age < 14){
            throw new Error("Soory, you cannot watch this movie!")
        }else{
            alert("Enjoy the watching!");
        }
    }
    catch(e){
        alert(e.name+" "+e.message)
    }
}

checkAge();

//Task#3: Створіть клас MonthException, конструктор якого приймає параметр message і ініціалізує поле name значенням 'MonthException'.
console.log("Task#3");

class MonthException {
    constructor(message) {
        this.message = message;
        this.name = 'MonthException';
    }
}

function showMonthName(month) {
    month = month - 1;
    let months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    if (month[month] !== undefined) {
        return months[month];
    }else{
        throw new MonthException('Incorrrect month number');
    }
}

try {
    let myMonth = 4;
    let monthName = showMonthName(myMonth);
    console.log(monthName);
} catch (e) {
    console.error(e.name, e.message);
}

//class MonthException;

//Task#4: Реалізуйте функцію showUser(id), яка приймає параметром користувацьке id і повертає об’єкт, який містить значення переданої id. 
//Також функція викидає помилку у разі якщо введено від’ємне id.
console.log("Task#4");

function showUser(id) {
    if (id < 0) {
        throw new Error('ID should not be negative' + id);
    } 
    return { id };
}

function showUsers(ids) {
    let result = [];
    ids.forEach(function (id) {
        try {
            let person = showUser(id);
            result.push(person);
        } catch (exception) {
            console.log(exception.message);
        }
    });
    return result;
}

showUsers([7, -12, 44, 22]);