"use strict";
// 24. More Conditional Tests You don’t have to limit the number of tests you create to 10.
// If you want to try more comparisons, write more tests. Have at least one True and one 
//False result for each of the following
console.log("By Muhammad Juanid ");
let str1 = "Junaid";
let str2 = "Farrukh";
let num1 = 18;
let num2 = 19;
let Arr = [1, 2, 8, 6, 10, 50];
// • Tests for equality and inequality with strings
console.log("\n Tests for equality and inequality with strings: \n");
console.log(str1 === "Junaid");
console.log(str2 === str1);
// • Tests using the lower case function
console.log("\n Tests using the lower case function: \n");
console.log(str1.toLowerCase() === "Junaid");
console.log(str2.toLowerCase() !== "Farrukh");
// • Numerical tests 
console.log(" /n  Numerical tests: /n");
console.log(num1 < num2);
console.log(num1 >= num2);
console.log(num1 === 18);
console.log(num2 !== 19);
// • Tests using and and or operators
console.log("/n Tests using 'and' and 'or' operators: /n ");
console.log((num1 < 19) && (num2 > 18));
console.log((num1 < 15) || (num2 > 20));
// • Test whether an item is in a array
console.log("\n Test whether an item is in a array:\n ");
console.log(Arr.includes(10));
console.log(Arr.includes(5));
// • Test whether an item is not in a array
console.log("\n Test whether an item is not in a array:\n ");
console.log(!Arr.includes(4));
console.log(!Arr.includes(50));
