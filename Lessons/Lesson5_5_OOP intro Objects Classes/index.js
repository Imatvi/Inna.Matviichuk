// let user = {
//     name: "John Doe",
//     marriage: true,
//     age: 20,
//     salary: 5000,
//     sayHello: function() {
//         console.log("Hello  world from " + this.name);
//     }
// }

// for (let i in user) {
//     console.log(user[i]);
// }

// console.log(Object.keys(user));
// console.log(Object.values(user));
// console.log(Object.entries(user));

// user.sayHello();

// class Animal {
//     constructor(kind) {
//         this.kind = kind;
//     }
//     run() {
//         alert(this.kind + " runs!");
//     }
// }

// class Leopard extends Animal {
//     jump() {
//         alert(this.kind + " jumps!");
//     }
// }

// let leopard = new Leopard("Spotted leopard");

// leopard.jump();
// leopard.run();

// let employee = new Object();
// employee.firstName = "John";
// employee.lastName = "Doe";
// employee.marriage = true;
// employee.age = 20;
// employee.salary = 5000;
// employee.fullName = function() {
//     return this.firstName + " " + this.lastName;
// }
// console.log(employee);

// function Employee(firstName, lastName, position) {
//     this.firstName = firstName;
//     this.lastName = lastName;
//     this.position = position;
//     this.fullName = function() {
//         return this.firstName + " " + this.lastName;
//     }
// }

// let devPeterPeterson = new Employee("Peter", "Peterson", "dev");
// console.log(devPeterPeterson);

// class Student {
//     constructor(name) {
//         this.name = name;
// }
// showName() {
//     alert(this.name);
// }
// }

// let student = new Student("Sam");
// student.showName();

// class User {
//     constructor(firstName, lastName, age) {
//         this.firstName = firstName;
//         this.lastName = lastName;
//         this.age = age;
//     }
//     showFullName() {
//         console.log(this.firstName + " " + this.lastName);
//     }
//     showAge() {
//         console.log(this.age);
//     }
// }

// let John = new User("John", "Doe", 20);
// let Yuriy = new User("Yuriy", "Yurchenko", 25);

// console.log(John);
// console.log(Yuriy);

// Yuriy.showAge();

class User {
    constructor(name) {
        this._name = name;
    }
    get name() {
        return this._name;
    }
    set name(value) {
        if (value.length < 4) {
            alert("Name is too chort")
            return;
        }
        this._name = value;
    }
}

let user = new User("John");
alert(user.name);
let user2 = new User("David");
user2.name = "Bob";