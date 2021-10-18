import { updateRow } from './tools.js';
//import { displayWishList } from './tools.js';
import { deleteRow } from './tools.js'

export class Wishlist {
    constructor(list) {
        console.log("---Begin wishlist constructor---");
        console.log(`Constructor Parameters:\n1. ${list}`);
        this.list = list;
    }
    add(car) {
        console.log("---Begin add()--");
        this.list.push(car);
        //displayWishList(this.list, car);
        console.log("---End add()---");
    }
    display(car) {
        console.log("---Begin display()---");
        // Populate the table cells with the car info
        car.info(this.list);
        // Create an event listener for update and delete events
        const tdUpdateButton = document.getElementById(`wishlist-update-${this.list.length - 1}`);
        tdUpdateButton.addEventListener('click',updateRow);
        const tdDeleteButton = document.getElementById(`wishlist-delete-${this.list.length - 1}`);
        tdDeleteButton.addEventListener('click',deleteRow);
        console.log("---End display()---");
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