import { updateRow } from './index.js';
import { displayWishList } from './tools.js';

class wishlist {
    constructor(list) {
        console.log("---Begin wishlist constructor---");
        console.log(`Constructor Parameters:\n1. ${list}`);
        this.list = list;
    }
    add(car) {
        console.log("---Begin add()--");
        this.list.push(car);
        displayWishList(this.list, car);
    }
    remove(idx) {
        console.log("---Begin wishList.remove()---");
        console.log(`Parameters: Idx:${idx}`);
    }
    update(idx) {
        console.log("---Begin wishList.update()---");
        console.log(`Parameters: Idx:${idx}`);
    }
}
export { wishlist };