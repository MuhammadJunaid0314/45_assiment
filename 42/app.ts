function show_magicians (magicians:string[]){
    magicians.forEach(name =>console.log(name));
}



function make_great (magicians:string[]){
    return magicians.map(name => `the Great ${name}`);
}



let magician_name = ["Asad","Sadam","Mushtaq"]


let great_magicians = make_great (magician_name);

console.log(great_magicians);
