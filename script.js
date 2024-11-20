// Sample grocery data
const groceries = [
    { id: 1, name: 'Apples', price: 25.00 },
    { id: 2, name: 'Bananas', price: 10.00 },
    { id: 3, name: 'Carrots', price: 20.00 },
    { id: 4, name: 'Bread', price: 15.00 },
];

let cart = [];

// Function to display groceries
function displayGroceries() {
    const groceryList = document.getElementById('grocery-list');
    groceries.forEach(grocery => {
        const item = document.createElement('div');
        item.classList.add('grocery-item');
        item.innerHTML = `
            <h3>${grocery.name}</h3>
            <p>Price: ${grocery.price.toFixed(2)}</p>
            <button onclick="addToCart(${grocery.id})">Add to Cart</button>
        `;
        groceryList.appendChild(item);
    });
}

// Function to add items to cart
function addToCart(id) {
    const selectedGrocery = groceries.find(grocery => grocery.id === id);
    cart.push(selectedGrocery);
    displayCart();
}

// Function to display cart
function displayCart() {
    const cartItems = document.getElementById('cart-items');
    cartItems.innerHTML = ''; // Clear previous items
    cart.forEach((item, index) => {
        const cartItem = document.createElement('div');
        cartItem.classList.add('cart-item');
        cartItem.innerHTML = `
            <h3>${item.name}</h3>
            <p>Price: ${item.price.toFixed(2)}</p>
            <button onclick="removeFromCart(${index})">Remove</button>
        `;
        cartItems.appendChild(cartItem);
    });
}

// Function to remove items from cart
function removeFromCart(index) {
    cart.splice(index, 1);
    displayCart();
}

// Function to simulate checkout and order tracking
document.getElementById('checkout-btn').addEventListener('click', () => {
    if (cart.length > 0) {
        // Simulate secure payment
        alert(' Your order is placed.');

        // Simulate order tracking
        document.getElementById('tracking-info').innerText = 'Your order is being prepared for delivery.';
        setTimeout(() => {
            document.getElementById('tracking-info').innerText = 'Your order is out for delivery.';
        }, 3000);
        setTimeout(() => {
            document.getElementById('tracking-info').innerText = 'Your order has been delivered!';
        }, 6000);
    } else {
        alert('Your cart is empty.');
    }
});

// Initialize the app by displaying groceries
displayGroceries();
let cardNumInput = 
    document.querySelector('#cardNum')

cardNumInput.addEventListener('keyup', () => {
    let cNumber = cardNumInput.value
    cNumber = cNumber.replace(/\s/g, "")

    if (Number(cNumber)) {
        cNumber = cNumber.match(/.{1,4}/g)
        cNumber = cNumber.join(" ")
        cardNumInput.value = cNumber
    }
})
