export function displayWishList(obj) {
  console.log("---Begin displayWishList()---");
  const tr = document.createElement("tr");
  const tr_tbody = document.getElementById("wishlist-tbody");
  const tdMake = document.createElement("td");
  const tdModel = document.createElement("td");
  const tdYear = document.createElement("td");
  tdMake.innerText = obj.make;
  tdModel.innerText = obj.model;
  tdYear.innerText = obj.year;
  tr.appendChild(tdMake);
  tr.appendChild(tdModel);
  tr.appendChild(tdYear);
  tr_tbody.appendChild(tr);
  console.log("---End displayWishList()---");
}
