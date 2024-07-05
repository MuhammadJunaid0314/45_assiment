"use strict";
let Guest_list = ["SAMMAD", "QASIM", "IMRAN", "MUSTAFA"];
for (let i = 0; i < Guest_list.length; i++) {
    console.log(`Dear ${Guest_list[i]} : \n you are invited to dinner! \n`);
}
console.log(`"Unfortunately ${Guest_list[2]} , can't come to dinner."`);
Guest_list[2] = "HASHMI";
console.log(" \n NEW LIST OF INVITAION, \n");
for (let b = 0; b < Guest_list.length; b++) {
    console.log(`Dear ${Guest_list[b]} : \n you are invited to dinner! \n`);
}
