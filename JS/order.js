document.getElementById("orderId").textContent = Math.floor(Math.random() * 100000);
document.getElementById("totalAmount").textContent = localStorage.getItem("totalPrice");

const items = JSON.parse(localStorage.getItem("cartData")) || [];
const list = document.getElementById("orderItems");

items.forEach(item => {
    const li = document.createElement("li");
    li.textContent = item;
    list.appendChild(li);
});

localStorage.removeItem("cartData");
localStorage.removeItem("totalPrice");

function goBack() {
    window.location.href = "pizzahut.html";
}