import { updateRow } from './index.js';
import { displayWishList } from './tools.js';

export class Wishlist {
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
        delete this.list[idx];
    }
    update(idx,make,model,year) {
        console.log("---Begin WishList.update()---");
        console.log(`Parameters: Idx:${idx}\nmake=${make}\nmodel=${model}\nyear=${year}`);
        this.list[idx].make = make;
        this.list[idx].model = model;
        this.list[idx].year = year;
        console.log("---End Wishlist.update()---");
    }
}