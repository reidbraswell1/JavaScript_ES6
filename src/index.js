console.log("---Begin index.js---");
import { car } from "./car.js";
import { Wishlist } from "./wishlist";
import { generateTestData } from "./test.js";

// Test Data
let testDataCount = 0;
//export let myWishlist = new Wishlist([]);
export let myWishlist = generateTestData(testDataCount);

export function controller(obj) {
    console.log("---Begin controller()---");
    console.log(`make=${obj.make.value}\nmodel=${obj.model.value}\nyear=${obj.year.value}`);
    let make = obj.make.value;
    let model = obj.model.value;
    let year = obj.year.value;
    let id = obj.id.value;
    let addOrModify = document.getElementById("add-or-modify");
    if(addOrModify.innerText == "Add") {
        let myCar = new car(make,model,year);
        myWishlist.add(myCar);
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