//Task#1:Напишіть функцію propsCount(currentObject), яка приймає об’єкт і визначає кількість властивостей цього об’єкта.
console.log("Task#1");

const mentor = {
    cource: "JS fundamental",
    duration: 3,
    direction: "web-development"
};
function getPropsCount(currentObject) {
    return Object.keys(currentObject).length;
}
console.log("getPropsCount(mentor)");

// function propsCount(currentObject) {
//     let currentObject = {
//     };
// }

// let worker = {
//     age:35,
//     hight: 175,
//     weigh: 80
// }

// console.log(propsCount(worker));

//Task#2:Створіть довільний об’єкт, який має 5 полів. 
//Необхідно написати функцію showProps(obj), яка приймає даний об’єкт і виводить список його властивостей записаних в масив. 
//Виведіть також масив значень властивостей об’єкта.

console.log("Task#2");

function showProps(objects) {
    console.log(Object.values(objects));
    console.log(Object.keys(objects));
}

console.log(showProps({ Ukraine: 32, USA: 247, Poland: 105, Estonia: 32, Lithuania: 33 }));

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
            let date = new Date();
            let currentYear = date.getFullYear();
            return currentYear - this.year;
        }
    }
}

const stud1 = new Student("Petro", "Petrenko", 2015);
console.log(stud1.showFullName("Petrovych"));
console.log("Current course: " + stud1.showCourse());
const stud2 = new Student("Mariia", "Mariychuk", 2020);
console.log(stud1.showFullName("Mariychuk"));
console.log("Current course: " + stud2.showCourse());

//Task#4: Створіть клас Worker який буде мати конструктор, який приймає наступні властивості: 
//fullName (ім’я і прізвище), dayRate (ставка за день роботи), workingDays (кількість відпрацьованих днів). 

console.log("Task#4");

const workerList = [];

class Worker {
    #experience = 1.2;
    constructor(fullName, dayRate, workingDays) {
        this.fullName = fullName;
        this.dayRate = dayRate;
        this.workingDays = workingDays;
        workerList.push(this);
    }
    showSalary() {
        console.log(`${this.fullName} salary: ${this.dayRate * this.workingDays}`)
    }
    showSalaryWithExpires() {
        console.log(`${this.fullName} salary: ${this.dayRate * this.workingDays * this.workingDays}`)
    }
    showSalaryWorker() {
        return `${this.dayRate * this.workingDays * this.#experience}`;
    }
    get showExp() {
        return this.#experience;
    }
    set setExp(experience) {
        this.#experience = experience;
    }
    sortSalaries(workersArray) {
        let sortedSalary = workersArray.sort(function (a, b) {
            return a.showSalaryWorker() - b.showSalaryWorker();
        })
        for (let i = 0; i < sortedSalary.length; i++) {
            console.log(sortedSalary[i].fullName + ": " + sortedSalary[i].showSalaryWorker());
        }
    }
}

let worker1 = new Worker("John Johnson", 20, 23);
console.log(worker1.fullName);
worker1.showSalary();
console.log("New experience: " + worker1.showExp);
worker1.showSalaryWithExperience();
worker1.setExp = 1.5;
console.log("New experience: " + worker1.showExp);
worker1.showSalaryWithExperience();

let worker2 = new Worker("Tom Tomson", 48, 22);
console.log(worker1.fullName);
worker1.showSalary();
console.log("New experience: " + worker1.showExp);
worker1.showSalaryWithExperience();
worker1.setExp = 1.9;
console.log("New experience: " + worker1.showExp);
worker1.showSalaryWithExperience();

let worker3 = new Worker("Andy Ander", 29, 23);
console.log(worker1.fullName);
worker1.showSalary();
console.log("New experience: " + worker1.showExp);
worker1.showSalaryWithExperience();
worker1.setExp = 0.6;
console.log("New experience: " + worker1.showExp);
worker1.showSalaryWithExperience();

worker3.sortSalaries(workerList);

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

class Triangle extends GeometricFigure {
    constructor(b, h) {
        super();
        this.base = b;
        this.height = h;
    }
    getArea() {
        return this.base * this.height / 2;
    }
}

class Square extends GeometricFigure {
    constructor(a) {
        super();
        this.side = a;
    }
    getArea() {
        return this.side ** 2;
    }
}

class Circle extends GeometricFigure {
    constructor(r) {
        super();
        this.radius = r;
    }
    getArea() {
        return Math.PI * this.radius ** 2;
    }
}

function handleFigures(figures) {
    return figures.reduce(function (sum, figure) {
        if (figure instanceof GeometricFigure) {
            console.log(`Geometric figure: ${figure.toString()} - area: ${figure.getArea()}`);
            return sum + figure.getArea();
        }
        throw Error('Bad argument figure.')
    }, 0);
}

const figures = [new Triangle(4, 5), new Square(7), new Circle(5)];

console.log(handleFigures(figures));
