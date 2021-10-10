//import { wishlist } from "./wishlist";

export function displayWishList(wishList, obj) {
  console.log("---Begin displayWishList()---");
  const tr = document.createElement("tr");
  const tr_tbody = document.getElementById("wishlist-tbody");
  const tdMake = document.createElement("td");
  const tdModel = document.createElement("td");
  const tdYear = document.createElement("td");
  const tdId = document.createElement("td");
  const tdUpdate = document.createElement("td");
  const tdDelete = document.createElement("td");
  tdMake.innerText = obj.make;
  tdModel.innerText = obj.model;
  tdYear.innerText = obj.year;
  tdUpdate.innerHTML="<button id=" + `wishlist-update-${wishList.length - 1}` + ">Update</button>";
  tdDelete.innerHTML="<button id=" + `wishlist-delete-${wishList.length - 1}` + ">Delete</button>";
  tdId.className = "hidden";
  tr.appendChild(tdMake);
  tr.appendChild(tdModel);
  tr.appendChild(tdYear);
  tr.appendChild(tdId);
  tr.appendChild(tdUpdate);
  tr.appendChild(tdDelete);
  tr_tbody.appendChild(tr);
  const tdDeleteButton = document.getElementById(`wishlist-delete-${wishList.length - 1}`);
  tdDeleteButton.addEventListener('click',deleteRow);
  console.log("---End displayWishList()---");
}

function deleteRow() {
    console.log("---Begin Delete Row---")
    const stringArray = this.id.split("-");
    const id = stringArray[stringArray.length - 1];
    alert(`${this.id}, ${id}, ${this.innerText}`);
    document.getElementById(`wishlist-row-${id}`).remove();
}
