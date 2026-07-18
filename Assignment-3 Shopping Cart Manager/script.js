// array to store products
let cart = [];

// Add Product
function addProduct() {
    let product = document.getElementById("product").value.trim();
    if (product == "") {
        alert("Please enter a product name.");
        return;
    }

    if (cart.includes(product)) {
        alert("Product already exists in the cart.");
        return;
    }
    cart.push(product);
    showCart();
    document.getElementById("product").value = "";
}

// remove
function removeProduct(index) {
    cart.splice(index, 1);
    showCart();
}

// Display Products
function showCart() {
    let cartList = document.getElementById("cartList");
    cartList.innerHTML = "";
    for (let i = 0; i < cart.length; i++) {
        cartList.innerHTML += `<li> ${cart[i]}
                <button onclick="removeProduct(${i})">Remove</button></li>`;
    }
    document.getElementById("totalItems").innerHTML =
        "Total Items: " + cart.length;
}