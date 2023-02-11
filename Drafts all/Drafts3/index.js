// function raiseToDegree(a,b) {
//     let result = a ** b;
//     if (Number.isInteger(a, b)) {
//       console.log(result);
//     } else {
//       console.log("You have entered incorrect data.");
//     }
//   }
  
//   let a = prompt("Please enter  first number")
//   let b = prompt("Please enter  second number")
  
//   raiseToDegree(a, b);

  // for( let i1 = 0; i1 < 16; i1++) {
  //   if (i1 % 2 === 0) {
  //     console.log(i1 + " is even.");
  //   } else {
  //     console.log(i1 + " is odd.");
  //   }
  // }

  // function randArray(k) {
  //   let array = [];
  //   for (i = 0; i < k; i++) {
  //     array[i] = Math.floor(Math.random() * 500) + 1;
  //   }
  //   console.log(array);
  // }
  // randArray(6);

  // function raiseToDegree(a,b) {
  //   let result = a ** b;
  //   console.log(result);
  // }
  
  // let a = +prompt("Please enter  first number")
  // let b = +prompt("Please enter  second number")

  // if (Number.isInteger(a) && Number.isInteger(b)) {
  //   console.log(raiseToDegree(a, b));
  // } else {
  //   console.log("You have entered inccorect data.");
  // }


  // function findMin() {
  //   let min = arguments[0];
  //   for (i =1; i < arguments.length; i++) {
  //     if (arguments[i] < min) {
  //       min = arguments[i];
  //     }
  //   }
  //   return min;
  // }
  
  // console.log( findMin(12, 14, 4, -4, 0.2));
  // console.log( findMin(1, -6, -10, 0.7))


// function findUnique(arr) {
//   let createArr = new Set(arr);
//   return createArr.size === arr.length;
// }

// console.log( findUnique([1, 2, 3, 5, 3]));
// console.log( findUnique([1, 2, 3, 5, 11]));

// function returnLastElement(arr1, count) {
//   if (count == null) {
//     console.log(arr1.pop());
//   } else {
//     console.log(arr1.slice(-count));
//   }
// }

// console.log( returnLastElement([3, 4, 10, -5]));
// console.log( returnLastElement([3, 4, 10, -5],2));
// console.log( returnLastElement([3, 4, 10, -5],8));


// let arr = [1, 2, 3, 4, 5];
// arr.pop();
// console.log( arr.pop());
//arr.pop(); //5
//console.log(arr); //(4) [1, 2, 3, 4]

function changeFirstLetter(str) {
  let array = str.split(' ');
  let newArray = [];

  for(let i = 0; i < array.length; i++) {
    newArray.push(array[i].charAt(0).toUpperCase() + array[i].slice(1));
  }
  return newArray.join(' ');
}
console.log( changeFirstLetter("i love java script"));