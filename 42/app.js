"use strict";
function show_magicians(magicians) {
    magicians.forEach(name => console.log(name));
}
function make_great(magicians) {
    return magicians.map(name => `the Great ${name}`);
}
let magician_name = ["Asad", "Sadam", "Mushtaq"];
let great_magicians = make_great(magician_name);
console.log(great_magicians);
