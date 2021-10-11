import { deleteRow } from './index.js';
import { updateRow } from './index.js';
import { wishlist } from './wishlist';

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
  tdId.innerText = wishList.length;
  tdMake.innerText = obj.make;
  tdModel.innerText = obj.model;
  tdYear.innerText = obj.year;
  tdUpdate.innerHTML="<button id=" + `wishlist-update-${wishList.length - 1}` + ">Update</button>";
  tdDelete.innerHTML="<button id=" + `wishlist-delete-${wishList.length - 1}` + ">Delete</button>";
  tr.id = `wishlist-row-${wishlist.length - 1}`;
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