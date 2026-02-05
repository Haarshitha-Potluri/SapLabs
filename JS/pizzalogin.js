function login(role) {
    document.getElementById("emailError").textContent = "";
    document.getElementById("passwordError").textContent = "";
    document.getElementById("agreeError").textContent = "";

    const email = document.getElementById("email").value.trim();
    const password = document.getElementById("password").value.trim();
    const agree = document.getElementById("agree").checked;

    let isValid = true;
    const emailPattern = /^[^\s@]+@[^\s@]+\.[a-z]{2,}$/i;

    if (!emailPattern.test(email)) {
        document.getElementById("emailError").textContent =
            "Please enter a valid email address";
        isValid = false;
    }

    if (password.length < 6) {
        document.getElementById("passwordError").textContent =
            "Password must be at least 6 characters";
        isValid = false;
    }

    if (!agree) {
        document.getElementById("agreeError").textContent =
            "You must agree to continue";
        isValid = false;
    }

    if (isValid) {
        alert("✅ Login successful!");
        window.location.href =
            role === "user" ? "pizzahut.html" : "owner.html";
    }
}