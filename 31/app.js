"use strict";
let user_names = ['Ayesha', 'Noman', 'Admin', 'Farrukh', 'Inam', 'Hamza', 'Subhan'];
if (user_names.length === 0) {
    console.log("Your Array is empty.We need to find some users");
}
else {
    user_names.forEach(one_user => {
        if (one_user === "Admin") {
            console.log(`Hello ${one_user},would you like to see a status report? `);
        }
        else {
            console.log(`Hello ${one_user},thank you for logging in again.`);
        }
    });
}
