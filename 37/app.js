"use strict";
function make_shirt(size = "large", print_message = "I love Typescript") {
    console.log(`Creating a ${size} shirt with the ${print_message} prints on shirt  `);
}
make_shirt();
make_shirt("Mdium");
make_shirt("Small", "I Love Javascript");
