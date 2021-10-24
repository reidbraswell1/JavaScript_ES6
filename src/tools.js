import { myWishlist } from './index.js';

/*
  Callback function called when a click event occurs on the update button
*/
export function updateRow() {
  console.log("---Begin Update Row---")
  const stringArray = this.id.split("-");
  const id = stringArray[stringArray.length - 1];
  console.log(`this.id=${this.id}\nid=${id}\nthis.innerText=${this.innerText}`);
  let addOrModify = document.getElementById("add-or-modify");
  let idLabel = document.getElementById("id-label");
  let idInput = document.getElementById("id");
  idLabel.style.display="block";
  idInput.style.display="inline";
  idInput.value=id*1+1;
  addOrModify.innerText="Modify";
  let make = document.getElementById("make").value = myWishlist.list[id].make;
  let model = document.getElementById("model").value = myWishlist.list[id].model;
  let year = document.getElementById("year").value = myWishlist.list[id].year;
  console.log("---End Update Row---");
  }

/*
  Callback function called when a click event occurs on the update button
*/
export function deleteRow() {
  console.log("---Begin Delete Row---")
  const stringArray = this.id.split("-");
  const id = stringArray[stringArray.length - 1];
  console.log(`this.id=${this.id}\nid=${id}\nthis.innerText=${this.innerText}`);
  document.getElementById(`wishlist-row-${id}`).remove();
  myWishlist.remove(id);
  console.log("Array after delete:");
  console.log(myWishlist.list);
  let messageInfo = document.getElementById("message-info");
  let wishListIsEmpty = true;
  for(let i=0; i < myWishlist.list.length; i++) {
    console.log(typeof(myWishlist.list[i]));
    if(typeof(myWishlist.list[i]) != "undefined") {
      wishListIsEmpty = false;
      break;
    }
  }
  if(wishListIsEmpty) {
      messageInfo.style.display="block";
  }
  console.log("---End Delete Row---");
}