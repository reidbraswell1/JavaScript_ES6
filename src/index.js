console.log("---Begin index.js---");
import { Car } from "./car.js";
import { Wishlist } from "./wishlist.js";
import { generateTestData } from "./test.js";

// Test Data
let testDataCount = 0;

export let myWishlist = generateTestData(testDataCount);
let messageInfo = document.getElementById("message-info");
if(myWishlist.list.length == 0) {
    messageInfo.style.display="block";
}
/* 
   Action called by HTML form. If the addOrModify span tag's text is Add then
   a car is added to the wish list, If Update then the existing item on the 
   wishlist is updated.
*/
export function controller(obj) {
    console.log("---Begin controller()---");
    console.log(`make=${obj.make.value}\nmodel=${obj.model.value}\nyear=${obj.year.value}`);
    let make = obj.make.value;
    let model = obj.model.value;
    let year = obj.year.value;
    let id = obj.id.value*1-1;
    let addOrModify = document.getElementById("add-or-modify");
    if(addOrModify.innerText == "Add") {
        let myCar = new Car(make,model,year);
        myWishlist.add(myCar);
        myWishlist.display(myCar);
    }
    if(addOrModify.innerText == "Modify") {
        myWishlist.update(id,make,model,year);
        let tdMake = document.getElementById(`td-make-${id}`);
        let tdModel = document.getElementById(`td-model-${id}`);
        let tdYear = document.getElementById(`td-year-${id}`);
        tdMake.innerText = make;
        tdModel.innerText = model;
        tdYear.innerText = year;
        addOrModify.innerText = "Add";
        document.getElementById("id").style.display="none";
        document.getElementById("id-label").style.display="none";
    }
    let form = document.getElementById("wishlist-add-form");
    form.reset();
    console.log("myWishlist:");
    console.log(myWishlist.list);
    console.log("---End controller()---");
}

/*
    Called by onsubmit attribute of HTML form. Since all fields
    are required there is no validation to be done at this time.
    Stubbed in for future use.
*/
export function validator(obj) {
    console.log("---Begin validator()---");
    const validationFlag = true;
    // No validation since HTML5 validation is being used all fields are required
    console.log(`make=${obj.make.value}\nmodel=${obj.model.value}\nyear=${obj.year.value}`);
    console.log("---End validator()---");
    return validationFlag;
}