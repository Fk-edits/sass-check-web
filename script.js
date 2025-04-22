const validUsername = "admin"; // Replace with your valid username
const validPassword = "123";   // Replace with your valid password

document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    if (username === validUsername && password === validPassword) {
        window.location.href = 'index1.html'; // Redirect to target page after login
    } else {
        alert('Invalid username or password. Please try again.');
    }
});

// Modal logic
const modal = document.getElementById("forgotPasswordModal");
const btn = document.getElementById("forgotPasswordBtn");
const closeBtn = document.getElementsByClassName("close")[0];

btn.onclick = function() {
    modal.style.display = "block";
}

closeBtn.onclick = function() {
    modal.style.display = "none";
}

window.onclick = function(event) {
    if (event.target === modal) {
        modal.style.display = "none";
    }
}
