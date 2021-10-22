import { updateRow } from './tools.js';
//import { displayWishList } from './tools.js';
import { deleteRow } from './tools.js'

// Wishlist Class
export class Wishlist {
    constructor(list) {
        console.log("---Begin wishlist constructor---");
        console.log(`Constructor Parameters:\n1. ${list}`);
        this.list = list;
    }
    // Adds item to wishlist
    add(car) {
        console.log("---Begin add()--");
        this.list.push(car);
        //displayWishList(this.list, car);
        console.log("---End add()---");
    }
    // Displays last item added to wishlist
    display(car) {
        console.log("---Begin display()---");
        let messageInfo = document.getElementById("message-info");
        messageInfo.style.display="none";
        // Populate the table cells with the car info
        car.info(this.list);
        // Create an event listener for update and delete events
        const tdUpdateButton = document.getElementById(`wishlist-update-${this.list.length - 1}`);
        tdUpdateButton.classList="btn btn-success";
        tdUpdateButton.addEventListener('click',updateRow);
        const tdDeleteButton = document.getElementById(`wishlist-delete-${this.list.length - 1}`);
        tdDeleteButton.classList="btn btn-danger";
        tdDeleteButton.addEventListener('click',deleteRow);
        console.log("---End display()---");
    }
    // Remove (marked as null or undefined) item pointed to by index
    remove(idx) {
        console.log("---Begin wishList.remove()---");
        console.log(`Parameters: Idx:${idx}`);
        delete this.list[idx];
    }
    // Update item in wishlist
    update(idx,make,model,year) {
        console.log("---Begin WishList.update()---");
        console.log(`Parameters: Idx:${idx}\nmake=${make}\nmodel=${model}\nyear=${year}`);
        this.list[idx].make = make;
        this.list[idx].model = model;
        this.list[idx].year = year;
        console.log("---End Wishlist.update()---");
    }
}