

// ===== LOGIN PAGE LOGIC =====

const loginForm = document.getElementById("loginForm");

if (loginForm) {
  loginForm.addEventListener("submit", function (e) {
    e.preventDefault(); // stop page refresh

    const email = document.getElementById("email").value.trim();
    const password = document.getElementById("password").value.trim();
    const errorMsg = document.getElementById("errorMsg");

    // Basic validation
    if (email === "" || password === "") {
      errorMsg.textContent = "Please fill in all fields.";
      errorMsg.style.color = "yellow";
      return;
    }

    if (password.length < 6) {
      errorMsg.textContent = "Password must be at least 6 characters.";
      errorMsg.style.color = "yellow";
      return;
    }

    // Fake success (frontend only)
    errorMsg.style.color = "lightgreen";
    errorMsg.textContent = "Login successful! (frontend demo)";

    // Later this is where backend API call goes
    // fetch('/login', {...})
  });
}
// ===== SIGNUP PAGE LOGIC =====

const signupForm = document.getElementById("signupForm");

if (signupForm) {
  signupForm.addEventListener("submit", function (e) {
    e.preventDefault(); // stop reload

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("signupEmail").value.trim();
    const password = document.getElementById("signupPassword").value.trim();
    const confirmPassword = document.getElementById("confirmPassword").value.trim();
    const errorBox = document.getElementById("signupError");

    // Reset message
    errorBox.textContent = "";
    errorBox.style.color = "yellow";

    // Validation
    if (!name || !email || !password || !confirmPassword) {
      errorBox.textContent = "All fields are required.";
      return;
    }

    if (password.length < 6) {
      errorBox.textContent = "Password must be at least 6 characters.";
      return;
    }

    if (password !== confirmPassword) {
      errorBox.textContent = "Passwords do not match.";
      return;
    }

    // Fake success (frontend demo)
    errorBox.style.color = "lightgreen";
    errorBox.textContent = "Account created successfully!";

    // Future backend hookup goes here
    // fetch('/signup', { method: 'POST', body: ... })
  });
        }
