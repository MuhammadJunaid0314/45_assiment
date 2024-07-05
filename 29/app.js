"use strict";
// Favorite Fruit: Make a array of your favorite fruits, and then write a series of independent if statements that check for
// certain fruits in your array.
// • Make a array of your three favorite fruits and call it favorite_fruits.
// • Write five if statements. Each should check whether a certain kind of fruit is in your array. If the fruit is in your
// array, the if block should print a statement, such as You really like bananas!
const favorite_fruits = ["Banana", "Mango", "Apple"];
if (favorite_fruits.includes('Banana')) {
    console.log("you really like banana!");
}
if (favorite_fruits.includes('Apple')) {
    console.log("you really like apple!");
}
if (favorite_fruits.includes('Mango')) {
    console.log("you really like mango!");
}
if (favorite_fruits.includes('Grapes')) {
    console.log("I don't like grapes!");
}
if (favorite_fruits.includes('Orange')) {
    console.log("I don't like orange!");
}
