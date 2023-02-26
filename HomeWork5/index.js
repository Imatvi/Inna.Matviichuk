//Task#1:Напишіть функцію propsCount(currentObject), яка приймає об’єкт і визначає кількість властивостей цього об’єкта.
console.log("Task#1");

function propsCount(currentObject) {
    let currentObject = {
    };
}

let worker = {
    age:35,
    hight: 175,
    weigh: 80
}

console.log(propsCount(worker));

//Task#2:Створіть довільний об’єкт, який має 5 полів. 
//Необхідно написати функцію showProps(obj), яка приймає даний об’єкт і виводить список його властивостей записаних в масив. 
//Виведіть також масив значень властивостей об’єкта.

console.log("Task#2");



//Task#3:Створіть клас Person, в якого конструктор приймає параметри name і surname, а також міститься метод showFullName(), 
//який виводить ім’я і прізвище особи. 

console.log("Task#3");

class Person {
    constructor(name, surname) {
        this.name = name;
        this.surname = surname;
        this.showFullName = function () {
            return `${this.name} ${this.surname}`;
        }
    }
}

class Student extends Person {
    constructor(name, surname, year) {
        super(name, surname);
        this.middleName = middleName;
        this.year = year;
        this.showFullName = function () {
            return super.showFullName() + ` ${this.middleName}`;
        }
        this.showCourse() {
            return current.year - this.year
        }
    }
}

const stud1 = new Student("Petro", "Petrenko", 2015);
console.log(stud1.showFullName("Petrovych")); 
console.log("Current course: " + stud1.showCourse());

//Task#4: Створіть клас Worker який буде мати конструктор, який приймає наступні властивості: 
//fullName (ім’я і прізвище), dayRate (ставка за день роботи), workingDays (кількість відпрацьованих днів). 

console.log("Task#4");

class Worker {
    constructor(fullName, dayRate, workingDays) {
        this.fullName = fullName;
        this.dayRate = dayRate;
        this.workingDays = workingDays;
        this.showSalary = function () {
            return this.dayRate * this.workingDays;
        }
    }
}

//Task#5:Створіть батьківський клас GeometricFigure, який має порожній метод для визначення площі getArea() та метод toString() для виведення назви класу.
//Створіть 3 класи нащадки Triangle, Square і Circle, які наслідуються від класу GeometricFigure. 

console.log("Task#5");

class GeometricFigure {
    getArea() {
return 0;
}
toString() {
return Object.getPrototypeOf(this).constructor.name;
}
}

const figures = [new Triangle(4, 5), new Square(7), new Circle(5)];
console.log(handleFigures(figures));
