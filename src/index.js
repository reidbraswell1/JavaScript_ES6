console.log("---Begin index.js---");
import { car } from "./car.js";
import { wishlist } from "./wishlist";

let myCar = new car("myMake", "myModel", "myYear");
myCar.info();
let myWishlist = new wishlist(myCar);