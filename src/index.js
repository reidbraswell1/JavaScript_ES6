console.log("---Begin index.js---");
import { car } from "./car.js";
import { Wishlist } from "./wishlist";

// Test Data
export let myWishlist = new Wishlist([]);
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
    }
    let form = document.getElementById("wishlist-add-form");
    form.reset();
    console.log("myWishlist:");
    console.log(myWishlist.list);
    console.log("---End controller()---");
}