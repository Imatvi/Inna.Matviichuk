// try {
//     console.log('Try block start');
//     console.log('Try block end');
// } catch(error) {
//     console.log('Catch is ignored, because there are no errors');
// }
// console.log('Code after try...catch');

// let error = new SyntaxError(message);
// let error1 = new ReferenceError(message);

// function enterPIN() {
//     let pin = prompt("Enter PIN-number (max length 4): ", "");
//     if (pin.length > 4) {
//         throw new Error("Line length greater than 4 characters");
//     }
//     return pin;
// }
// try {
//     let result = enterPIN();
//     console.log(result);
// } catch (exception) {
//     console.log(exception.name);
//     console.log(exception.message);
//     console.log(exception.stack);
// }

function checkAge() {
    let age = +prompt("please enter your age");
    if(age > 18){
        throw new Error("the user is too young");
    }
    return age;
}
try{
    checkAge();
} catch(exception){
    console.log(exception.name);
    console.log(exception.message);
}