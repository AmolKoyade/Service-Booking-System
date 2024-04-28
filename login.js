document.getElementById("login-form").addEventListener("submit", function (event) {
    event.preventDefault();
    loginUser();
});

function loginUser() {
    let username = document.getElementById("loginUsername").value;
    let password = document.getElementById("loginPassword").value;

    // Here you would typically send the username and password to the server for authentication
    // For now, let's just display a success message
    document.getElementById("login-message").textContent = "Login successful!";
    
    // Redirect to services.html upon successful login
    setTimeout(function () {
        loginSuccess();
    }, 2000); // Redirect after 2 seconds (2000 milliseconds)
}

function loginSuccess() {
    window.location.href = "services.html";
}
