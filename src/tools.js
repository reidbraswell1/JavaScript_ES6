//import { deleteRow } from './index.js';
//import { updateRow } from './index.js';
import { Wishlist } from './wishlist';
import { myWishlist } from './index.js';

export function displayWishList(wishList, obj) {
  console.log("---Begin displayWishList()---");
  const tr = document.createElement("tr");
  const tr_tbody = document.getElementById("wishlist-tbody");
  const tdId = document.createElement("td");
  const tdMake = document.createElement("td");
  const tdModel = document.createElement("td");
  const tdYear = document.createElement("td");
  const tdUpdate = document.createElement("td");
  const tdDelete = document.createElement("td");
  tdId.innerText = `${wishList.length}.`;
  tdMake.innerText = obj.make;
  tdModel.innerText = obj.model;
  tdYear.innerText = obj.year;
  tdUpdate.innerHTML="<button id=" + `wishlist-update-${wishList.length - 1}` + ">Update</button>";
  tdDelete.innerHTML="<button id=" + `wishlist-delete-${wishList.length - 1}` + ">Delete</button>";
  tr.id = `wishlist-row-${wishList.length - 1}`;
  tr.appendChild(tdId);
  tr.appendChild(tdMake);
  tr.appendChild(tdModel);
  tr.appendChild(tdYear);
  tr.appendChild(tdUpdate);
  tr.appendChild(tdDelete);
  tr_tbody.appendChild(tr);
  const tdUpdateButton = document.getElementById(`wishlist-update-${wishList.length - 1}`);
  tdUpdateButton.addEventListener('click',updateRow);
  const tdDeleteButton = document.getElementById(`wishlist-delete-${wishList.length - 1}`);
  tdDeleteButton.addEventListener('click',deleteRow);
  console.log("---End displayWishList()---");
}

function updateRow() {
  console.log("---Begin Update Row---")
  const stringArray = this.id.split("-");
  const id = stringArray[stringArray.length - 1];
  console.log(`this.id=${this.id}\nid=${id}\nthis.innerText=${this.innerText}`);
  let addOrModify = document.getElementById("add-or-modify");
  let idLabel = document.getElementById("id-label");
  let idInput = document.getElementById("id");
  idLabel.style.display="block";
  idInput.style.display="inline";
  idInput.value=id;
  addOrModify.innerText="Modify";
  let make = document.getElementById("make").value;
  let model = document.getElementById("model").value;
  let year = document.getElementById("year").value;
  myWishlist.update(id,make,model,year);
  console.log("---End Update Row---");
  
}

function deleteRow() {
  console.log("---Begin Delete Row---")
  const stringArray = this.id.split("-");
  const id = stringArray[stringArray.length - 1];
  console.log(`this.id=${this.id}\nid=${id}\nthis.innerText=${this.innerText}`);
  document.getElementById(`wishlist-row-${id}`).remove();
  myWishlist.remove(id);
  console.log("Array after delete:");
  console.log(myWishlist.list);
  console.log("---End Delete Row---");
}