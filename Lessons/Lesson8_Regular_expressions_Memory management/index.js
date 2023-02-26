// let str = "Data transfer started!";
// let regExp = /Data/;
// let result = regExp.exec(str);
// console.log(result);
//  
// str = "Session complete";
// result = regExp.exec(str);
// console.log(result);   

// let str = "Data transfer started!";
// let regExp = /Data/;
// let result = regExp.test(str);
// console.log(result);
//  
// str = "Session complete";
// result = regExp.test(str);
// console.log(result);


// let str = "John came home and did homework";
// 	let re = /home/g;
// 	let result = str.match(re);
// 	console.log(result); // ["home", "home"]


    "My home is a good home!".replace('home', 'car')    // "My car is a good home!"
    "My home is a good home!".replace(/home/, 'car')   // "My car is a good home!"
    "My home is a good home!".replace(/home/g, 'car')  // "My car is a good car!"

// let str = "+38(093)-458-22-76"; 
// console.log( str.match(/\d+/g) );  // ["38", "093", "458", "22", "76"]

/^\d{4}\w{1,3}$/.test('1000PRO') // true

console.log( "Paragraph 2.3".match(/\d\.\d/) );  // 2.3 
console.log( "Paragraph 223".match(/\d\.\d/) );  // null

// let re1 = /(ha)+/gi;
// let re2 = /ha+/gi;
// let str = "Hahaaaha";
// console.log(str.match(re1)); // ["Haha", "ha"] 	console.log(str.match(re2)); // ["Ha", "haaa", "ha"]

let re = /html|css|java(script)?/gi;
let str = "Java first appeared, then HTML, then JavaScript";
console.log( str.match(re) ); // ["Java", "HTML", "JavaScript"]
