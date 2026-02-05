let orders = JSON.parse(localStorage.getItem("orders")) || [];
const container = document.getElementById("ordersContainer");

function renderOrders() {
    container.innerHTML = "";

    if (orders.length === 0) {
        container.innerHTML = `<p class="empty">No orders placed yet.</p>`;
        return;
    }

    orders.forEach((order, index) => {
        const div = document.createElement("div");
        div.className = "order-box";

        div.innerHTML = `
            <h2>Order #${index + 1}</h2>
            <p class="time">🕒 ${order.time}</p>
            <ul>
                ${order.items.map(item => `<li>${item}</li>`).join("")}
            </ul>
            <strong>Total: $${order.total}</strong>
            <br><br>
            <button class="complete-btn" onclick="markComplete(${index})">
                ✅ Mark as Complete
            </button>
        `;

        container.appendChild(div);
    });
}

function markComplete(index) {
    orders.splice(index, 1);

    localStorage.setItem("orders", JSON.stringify(orders));

    renderOrders();
}

renderOrders();
