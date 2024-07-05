"use strict";
console.log("By Muhammad Junaid");
let car = "subaru";
console.log("\n 5 Tests evaluate to True: \n");
//Test 1:
console.log("Is car === 'subaru' ? I predict True.");
console.log(car === 'subaru');
//Test 2:
console.log("Is car !== 'toyota' ? I predict True.");
console.log(car !== 'toyota');
//Test 3:
console.log("Is the length of car > 4 ? I predict True.");
console.log(car.length > 4);
//Test 4:
console.log("Is the length of car <= 6 ? I predict True.");
console.log(car.length <= 6);
//Test 5:
console.log("Does car starts with 's' ? I predict True.");
console.log(car.startsWith('s'));
console.log("\n 5 Tests evaluate to False: \n");
//Test 1: 
console.log("Is car == 'Honda' ? I predict Falsa. ");
console.log(car === "Honda");
//Test 2:
console.log("Is car in uppercase? I predict Falsa. ");
console.log(car.toUpperCase() === car);
//Test 3:
console.log("Is car == 'Subaru' ? I predict Falsa. ");
console.log(car === 'Subaru');
//Test 4:
console.log("Is car === Audi ? I predict Falsa. ");
console.log(car === "Audi");
//Test 5:
console.log("Is the length of car ===7 ? I predict Falsa. ");
console.log(car.length === 7);
