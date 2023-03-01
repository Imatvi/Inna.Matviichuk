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

//Task#2: Напишіть функцію, яка приймає рядкові дані і виконує перевірку на їх відповідність емейлу. Валідними вважаються всі символи на різних позиціях

onsole.log("Task#2");

checkEmail("Qmail2@gmail.com");
true

//Task#3: Напишіть регулярний вираз, який знаходитиме в тексті одну літеру d, за якою йде одна чи більше b, за якими одна d. 
//Запам’ятати знайдені b і наступну за ними d.  Враховувати верхній і нижній регістр.

console.log("Task#3");

//Task#4: Напишіть регулярний вираз, який в рядковому тексті 2 підстрічки буде міняти місцями.

console.log("Task#4");

//Task#5: Напишіть функцію, яка виконуватиме валідацію номера банківської карти (9999-9999-9999-9999).

/^\d{4}\.^\d{4}\.^\d{4}\.^\d{4}\./


/^\d{4}\w{1,3}$/.test('1000PRO') // true

console.log( "Paragraph 2.3".match(/\d\.\d/) );  // 2.3 
console.log( "Paragraph 223".match(/\d\.\d/) );  // null

console.log("Task#5");

//Task#6: Напишіть функцію, яка приймає рядкові дані і виконує перевірку на їх відповідність емейлу.

console.log("Task#6");

//Task#7: Напишіть функцію, яка перевіряє правильність логіна. 
//Правильний логін - рядок від 2 до 10 символів, що містить лише букви та числа, номер не може бути першим.

console.log("Task#7");