"use strict";
let Guest_list = ["SAMMAD", "QASIM", "IMRAN", "MUSTAFA"];
console.log("Good News! We have found a bigger dinner table, so we are inviting to dinner more guest : \n ");
Guest_list.unshift("FAIZAN");
Guest_list.splice(2, 0, "BILAL");
Guest_list.push("NOSHAD");
for (let a = 0; a < Guest_list.length; a++) {
    console.log(`Dear ${Guest_list[a]} : \n you are invited to dinner! \n`);
}
console.log("Unfortunately, the new dinner won't arrive in time so, we can only invite two guest for dinner.\n");
while (Guest_list.length > 2) {
    let notinvite = Guest_list.pop();
    console.log(`Sorry, Due to limited space we can't invite you to dinner Miss.${notinvite}.\n`);
}
for (let a = 0; a < Guest_list.length; a++) {
    console.log(`Dear ${Guest_list[a]} : \n you are still invited to dinner! \n`);
}
Guest_list.pop();
Guest_list.pop();
console.log(Guest_list);
