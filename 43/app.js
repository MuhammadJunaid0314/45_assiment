"use strict";
function show_magicians(magicians) {
    magicians.forEach(name => console.log(name));
}
function make_great(magicians) {
    return magicians.map(name => `The Gret ${name}`);
}
let magician_names = ["Asad", "Sadam", "Mushtaq"];
let copy_magician_names = magician_names.slice();
let copy_great_magicians = make_great(copy_magician_names);
show_magicians(magician_names);
show_magicians(copy_great_magicians);
