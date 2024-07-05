"use strict";
let current_users = ['Ayesha', 'Areeba', 'Noman', 'Junaid', 'Abid'];
let new_users = ['Areeba', 'Rehman', 'Nomi', 'Hamza', 'Junaid'];
new_users.forEach(new_one_user => {
    let our_condition = current_users.some(current_one_user => current_one_user.toLowerCase() === new_one_user.toLowerCase());
    if (our_condition) {
        console.log(`Sorry ${new_one_user} is Already Takken`);
    }
    else {
        console.log(`This Username ${new_one_user} is Avilable `);
    }
});
