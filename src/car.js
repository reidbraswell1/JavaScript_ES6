// Car class
class Car {
    constructor (make, model, year) {
        console.log("---Begin car constructor---");
        console.log(`Constructor Parameters:\n1. make=${make}\n2. model=${model}\n3. year=${year} `)
        this.make = make;
        this.model = model;
        this.year = year;
    }
    // Display wishlist as a table
    info(wishlist) { 
        console.log("---Begin info()---");
        console.log(`Parameters:\n1. make=${this.make}\n2. model=${this.model} \n3. year=${this.year}`);
        const tr_tbody = document.getElementById("wishlist-tbody");
        const tr = document.createElement("tr");
        const tdId = document.createElement("td");
        const tdMake = document.createElement("td");
        const tdModel = document.createElement("td");
        const tdYear = document.createElement("td");
        const tdUpdate = document.createElement("td");
        const tdDelete = document.createElement("td");
        tdId.innerText = `${wishlist.length}.`;
        tdMake.innerText = this.make;
        tdModel.innerText = this.model;
        tdYear.innerText = this.year;
        tdMake.id = `td-make-${wishlist.length - 1}`;
        tdModel.id = `td-model-${wishlist.length - 1}`;
        tdYear.id = `td-year-${wishlist.length - 1}`;
        tdUpdate.innerHTML="<button id=" + `wishlist-update-${wishlist.length - 1}` + ">Update</button>";
        tdDelete.innerHTML="<button id=" + `wishlist-delete-${wishlist.length - 1}` + ">Delete</button>";
        tr.id = `wishlist-row-${wishlist.length - 1}`;
        tr.appendChild(tdId);
        tr.appendChild(tdMake);
        tr.appendChild(tdModel);
        tr.appendChild(tdYear);
        tr.appendChild(tdUpdate);
        tr.appendChild(tdDelete);
        tr_tbody.appendChild(tr);
        /*
        const tdUpdateButton = document.getElementById(`wishlist-update-${wishlist.length - 1}`);
        tdUpdateButton.addEventListener('click',updateRow);
        const tdDeleteButton = document.getElementById(`wishlist-delete-${wishlist.length - 1}`);
        tdDeleteButton.addEventListener('click',deleteRow);
        */
        console.log("---End info()---");
    }
}
export { Car };