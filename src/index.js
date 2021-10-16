console.log("---Begin index.js---");
import { car } from "./car.js";
import { Wishlist } from "./wishlist";

// Test Data
export let myWishlist = new Wishlist([]);
for (let i=0; i < 300; i++) {
    let myCar;
    if(i < 10) {
        myCar = new car(`myMake${i+1}`, `myModel${i+1}`, `myYear200${i+1}`);
    }
    else if(i+1 > 99) {
        myCar = new car(`myMake${i+1}`, `myModel${i+1}`, `myYear2${i+1}`);
    }
    else {
        myCar = new car(`myMake${i+1}`, `myModel${i+1}`, `myYear20${i+1}`);
    }
    myCar.info();
    myWishlist.add(myCar);
}

export function controller(make, model, year) {
    console.log("---Begin controller()---");
    console.log("---End controller()---");
}