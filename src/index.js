console.log("---Begin index.js---");
import { car } from "./car.js";
import { wishlist } from "./wishlist";

let myCar = new car("myMake", "myModel", "myYear");
myCar.info();
let myWishlist = new wishlist([]);
myWishlist.add(myCar);
let myCar2 = new car("myMake2", "myModel2", "myYear2");
myCar2.info();
myWishlist.add(myCar2);

export function deleteRow() {
    console.log("---Begin Delete Row---")
    const stringArray = this.id.split("-");
    const id = stringArray[stringArray.length - 1];
    alert(`${this.id}, ${id}, ${this.innerText}`);
    document.getElementById(`wishlist-row-${id}`).remove();
    myWishlist.remove(id);
}

export function updateRow() {
    console.log("---Begin Update Row---")
    const stringArray = this.id.split("-");
    const id = stringArray[stringArray.length - 1];
    alert(`${this.id}, ${id}, ${this.innerText}`);
    myWishlist.update(id);
    /*
    document.getElementById(`wishlist-row-${id}`).remove();
    myWishlist.remove(id);
    */
}