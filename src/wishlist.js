import { displayWishList } from './tools.js';

class wishlist {
    constructor(list) {
        console.log("---Begin wishlist constructor---");
        console.log(`Constructor Parameters:\n1. ${list}`);
        this.list = list;
    }
    add(car) {
        this.list.push(car);
        displayWishList(this.list, car);
    }
    remove(idx,car) {

    }
}
export { wishlist };