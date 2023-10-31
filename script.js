// Cart to store added products
var cart = [];

// Function to add a product to the cart
function addToCart(productName, price) {
    var product = { name: productName, price: price };
    cart.push(product);
    updateCartDisplay();
    updateCartTotal();
}

// Function to update the cart display
function updateCartDisplay() {
    var cartItemsList = document.getElementById('cart-items');
    cartItemsList.innerHTML = ''; // Clear previous items

    // Iterate through the cart and display each item
    for (var i = 0; i < cart.length; i++) {
        var li = document.createElement('li');
        li.textContent = cart[i].name + ' - $' + cart[i].price;
        
        // Add a "Remove" button to each item
        var removeButton = document.createElement('button');
        removeButton.textContent = 'Remove';
        removeButton.onclick = (function(index) {
            return function() {
                removeFromCart(index);
            };
        })(i);
        
        li.appendChild(removeButton);
        cartItemsList.appendChild(li);
    }
}

// Function to remove a product from the cart
function removeFromCart(index) {
    cart.splice(index, 1);
    updateCartDisplay();
    updateCartTotal();
}

// Function to update the cart total
function updateCartTotal() {
    var cartTotal = document.getElementById('cart-total');
    var total = 0;
    for (var i = 0; i < cart.length; i++) {
        total += cart[i].price;
    }
    cartTotal.textContent = total;
}
