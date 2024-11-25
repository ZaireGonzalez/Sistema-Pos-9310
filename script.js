// Manejo del registro de usuario
document.getElementById("registerForm").addEventListener("submit", function (e) {
    e.preventDefault();
    const username = document.getElementById("username").value;
    const email = document.getElementById("email").value;

    alert(`Usuario registrado: ${username} (${email})`);
    document.getElementById("registerForm").reset();
});

// Manejo del inventario
const inventoryList = document.querySelector("#inventoryList ul");

document.getElementById("inventoryForm").addEventListener("submit", function (e) {
    e.preventDefault();
    const productName = document.getElementById("productName").value;
    const quantity = document.getElementById("quantity").value;

    const listItem = document.createElement("li");
    listItem.textContent = `${productName} - Cantidad: ${quantity}`;
    inventoryList.appendChild(listItem);

    document.getElementById("inventoryForm").reset();
});
