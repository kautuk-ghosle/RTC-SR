function validateLogin() {
  const user = document.getElementById('username').value;
  const pass = document.getElementById('password').value;
  const errorMsg = document.getElementById('error-msg');

  if (user === 'admin' && pass === 'admin') {
    window.location.href = 'home.html'; // Redirect to home page
    return false; // Prevent form from submitting normally
  } else {
    errorMsg.textContent = "Invalid username or password.";
    return false;
  }
}

