"use strict";
function make_sandwich(...items) {
    console.log("\n Making a Sandwich with the following items:");
    items.forEach(single_item => console.log("-" + single_item));
    console.log("Now Enjoy Sandwhich");
}
make_sandwich("Chicken", "Onnion", "Cheese", "Mayo", "Egg");
make_sandwich("Bread", "Butter");
make_sandwich("Bread", "Butter", "Mayo", "Egg", "Chicken", "Onnion", "Cheese", "Lettuce");
