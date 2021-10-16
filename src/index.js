console.log("---Begin index.js---");
import { car } from "./car.js";
import { wishlist } from "./wishlist";

// Test Data
let myWishlist = new wishlist([]);
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