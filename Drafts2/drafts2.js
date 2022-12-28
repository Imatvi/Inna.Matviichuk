// let students = ["petro", "vasyl", "igor", "serhiy"];

// for(let i in students) {
//     console.log(students[i]);
// }

// for(let element of students) {
//     console.log(element);
// }

// let message = "Hello all";
// for(let element1 of message) {
//     console.log(element1);
// }

let numbers = [1, 2, 3, 4, 5 , 6, 7];

for(let element2 of numbers) {
    if(element2 === 4) {
        break;
    }
    console.log(element2);
}

for (let element3 of numbers) {
    if(element3 === 4 || element3 === 6) {
        continue;
    }
    console.log(element3);
}

for(element4 of numbers) {
    if(element4 % 2 === 0) {
        continue;
    }
    console.log(element4);
}

function sendMessage() {
    alert("My message to the world!");
}

sendMessage();
console.log(sendMessage);