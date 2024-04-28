document
  .getElementById("registration-form")
  .addEventListener("submit", function (event) {
    event.preventDefault();
    registerUser();
  });

function registerUser() {
  let username = document.getElementById("username").value;
  let email = document.getElementById("email").value;
  let password = document.getElementById("password").value;
  let address = document.getElementById("address").value;
  let contact = document.getElementById("contact").value;

  let user = {
    id: generateId(),
    username: username,
    email: email,
    password: password,
    address: address,
    contact: contact,
  };

  // Here you can send the user data to the server or store it locally
  // For now, let's just display a success message
  document.getElementById("registration-message").textContent =
    "User Registration successful.";
  console.log(user);

  // Redirecting to the login page after a short delay
  setTimeout(function () {
    window.location.href = "login.html";
  }, 2000); // Redirect after 2 seconds (2000 milliseconds)
}

function generateId() {
  return Math.random().toString(36).substr(2, 9);
}
