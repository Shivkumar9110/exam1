// Cart array to store items and quantities
let cart = [];

// Function to add items to the cart
function addToCart(item) {
  // Bug fix: Do not reduce quantity to half
  // Instead of just storing the quantity, store the entire item object
  let existingItem = cart.find(cartItem => cartItem.item === item);

  if (existingItem) {
    // If the item already exists in the cart, increment the quantity
    existingItem.quantity++;
  } else {
    // If the item is not in the cart, add it with a quantity of 1
    cart.push({ item, quantity: 1 });
  }

  // Update the cart UI
  updateCartUI();
}

// Function to update the cart UI
function updateCartUI() {
  const cartItemsElement = document.getElementById("cart-items");
  cartItemsElement.innerHTML = "";

  cart.forEach(cartItem => {
    const listItem = document.createElement("li");
    listItem.textContent = `${cartItem.item} - Quantity: ${cartItem.quantity}`;
    cartItemsElement.appendChild(listItem);
  });
}
