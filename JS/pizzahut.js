let total = 0;
let itemCount = 0;

function addToCart(item, price) {
    const cartItems = document.getElementById("cartItems");
    let existingLi = Array.from(cartItems.children).find(li => li.dataset.item === item);

    if (!existingLi) {
        const li = document.createElement("li");
        li.dataset.item = item;
        li.dataset.price = price;
        li.dataset.qty = 1;
        li.innerHTML = `
    <span>${item} - $<span class="itemTotal">${price}</span></span>
    <span class="qty-controls">
        <button class="decrease">-</button>
        <span class="qty">1</span>
        <button class="increase">+</button>
    </span>
`;

        cartItems.appendChild(li);

        total += price;
        document.getElementById("total").textContent = total;

        li.querySelector(".increase").addEventListener("click", () => changeQty(li, 1));
        li.querySelector(".decrease").addEventListener("click", () => changeQty(li, -1));
    } else {
        changeQty(existingLi, 1);
    }
}

function changeQty(li, delta) {
    let qty = parseInt(li.dataset.qty) + delta;
    if (qty < 0) qty = 0;

    li.dataset.qty = qty;
    li.querySelector(".qty").textContent = qty;
    let price = parseInt(li.dataset.price);
    li.querySelector(".itemTotal").textContent = price * qty;

    const cartItems = document.getElementById("cartItems");
    total = Array.from(cartItems.children).reduce((sum, li) => sum + li.dataset.price * li.dataset.qty, 0);
    document.getElementById("total").textContent = total;

    if (qty === 0) li.remove();
}

function placeOrder() {
    const cartItems = document.getElementById("cartItems");
    if (cartItems.children.length === 0) {
        alert("🛑 Cart is empty!");
        return;
    }

    const items = Array.from(cartItems.children).map(li => {
        return `${li.dataset.item} x${li.dataset.qty} - $${li.dataset.price * li.dataset.qty}`;
    });

    const order = {
        id: Math.floor(Math.random() * 100000),
        items: items,
        total: total,
        time: new Date().toLocaleString()
    };

    localStorage.setItem("cartData", JSON.stringify(items));
    localStorage.setItem("totalPrice", total);
    localStorage.setItem("orderId", order.id);

    let orders = JSON.parse(localStorage.getItem("orders")) || [];
    orders.push(order);
    localStorage.setItem("orders", JSON.stringify(orders));

    window.location.href = "order.html";
}