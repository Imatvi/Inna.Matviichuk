function raiseToDegree(a,b) {
    let result = a ** b;
    if (Number.isInteger(a, b)) {
      console.log(result);
    } else {
      console.log("You have entered incorrect data.");
    }
  }
  
  let a = prompt("Please enter  first number")
  let b = prompt("Please enter  second number")
  
  raiseToDegree(a, b);