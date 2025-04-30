const inventoryDiv = document.getElementById("inventory-items");
const expandButton = document.querySelector('.expand-button');

var InventoryColumns = 7;
var InventoryRows = 5;

for (let i = 0; i < InventoryColumns * InventoryRows; i++) {
    let item = document.createElement("div");
    item.classList.add("item");

    item.id = i;
    inventoryDiv.appendChild(item);
}

expandButton.addEventListener('click', () => {
    inventoryDiv.classList.toggle('expanded');
    expandButton.textContent = inventoryDiv.classList.contains('expanded') ? '-' : '+';
});