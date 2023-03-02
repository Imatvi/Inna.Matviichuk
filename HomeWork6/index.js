//Task#1: Напишіть функцію, яка перевірятиме чи перший символ в рядку написаний в верхньому регістрі, чи ні. 
console.log("Task#1")
// function defineLetter(str) {
//     let RegExp = /[A-Z]/;
//     if RegExp = true {
//         console.log("String includes upper letters");
//     } else {
//         console.log("String does not includes upper letters");
//     }
// }

// let str1 = "uppercase";
// let str2 = "UpperCase";
// console.log(regExp.test(str1));
// console.log(regExp.test(str2)); 

function upperCase(str) {
    let regexp = /^[A-Z]/;
    if (regexp.test(str)) {
        console.log("String's starts with uppercase character");
    } else {
        console.log("String's not starts with uppercase character");
    }
}

upperCase("Regexp");
upperCase("regexp");


//Task#2: Напишіть функцію, яка приймає рядкові дані і виконує перевірку на їх відповідність емейлу. Валідними вважаються всі символи на різних позиціях

onsole.log("Task#2");

function checkEmail(data) {
    let regexp = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (regexp.test(data)) {
        console.log("Email is valid");
    } else {
        console.log("Email is invalid");
    }
}

function checkEmail(data) {
    const regExp = /\S+@\S+\.\S+/;
    console.log(regExp.test(data));
}

checkEmail("Qmail2@gmail.com");

//Task#3: Напишіть регулярний вираз, який знаходитиме в тексті одну літеру d, за якою йде одна чи більше b, за якими одна d. 
//Запам’ятати знайдені b і наступну за ними d.  Враховувати верхній і нижній регістр.

console.log("Task#3");

let regExp1 = /d(b+)(d)/i;
let array1 = regExp1.exec("cdbBdbsbz");
console.log(array1);

//Task#4: Напишіть регулярний вираз, який в рядковому тексті 2 підстрічки буде міняти місцями.

console.log("Task#4");

let res1 = /(w+)\s(\w+)/;
let string = "Java Script";
let newString = string.replace(res1, "$2, $1";
console.log(newString);

//Task#5: Напишіть функцію, яка виконуватиме валідацію номера банківської карти (9999-9999-9999-9999).

console.log("Task#5");

function checkCardNumber(string) {
    let regExp2 = /^\d{4}\-\d{4}\-\d{4}\-\d{4}$/;
    let res2 = regExp2.test(string);
    if (res2) {
        console.log("Validated");
    } else {
        console.log("Not validated");
    }
}

checkCardNumber("5214-5521-51122-5521");
checkCardNumber("5214-5521-5112-5521");
checkCardNumber("52145521511225521");
checkCardNumber("52s14-5521-5112-5521");

//Task#6: Напишіть функцію, яка приймає рядкові дані і виконує перевірку на їх відповідність емейлу.

console.log("Task#6");

function checkEmail2(str) {
    let regexp = /^[a-zA-Z0-9]+([-]?\w+)*@\w+([-]?\w+)*(\.\w{2,3})+$/;
    if (regexp.test(str)) {
        console.log("Email is valid");
    } else {
        console.log("Email is invalid");
    }
}

checkEmail('my_mail@gmail.com');
checkEmail('#my_mail@gmail.com');
checkEmail('my_ma--il@gmail.com');

//Task#7: Напишіть функцію, яка перевіряє правильність логіна. 
//Правильний логін - рядок від 2 до 10 символів, що містить лише букви та числа, номер не може бути першим.

console.log("Task#7");

function checkLogin(data) {
    let regexp3 = /^[a-zA-Z]{1}[a-zA-Z0-9]\.{1, 9}$/;
    let numberOfSymbols = /[0-9.\]+/g;
    let res3 = data.match(numberOfSymbols);
    let res4 = regexp3.test(data);
    console.log(`${data} is ${res4} - ${res3}`)
}
checkLogin('ee1.1ret3');
checkLogin('ee1*1ret3');
