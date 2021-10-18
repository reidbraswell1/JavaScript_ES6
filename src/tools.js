import { myWishlist } from './index.js';

export function displayWishList(wishList, car) {
  console.log("---Begin displayWishList()---");
  // Populate the table cells with the car info
  car.info(wishList);
  // Create an event listener for update and delete events
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
  let make = document.getElementById("make").value = myWishlist.list[id].make;
  let model = document.getElementById("model").value = myWishlist.list[id].model;
  let year = document.getElementById("year").value = myWishlist.list[id].year;
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