const loginBtn = document.getElementById("loginBtn");
const signupBtn = document.getElementById("signupBtn");

const loginForm = document.getElementById("loginForm");
const signupForm = document.getElementById("signupForm");

/* Toggle Forms */

loginBtn.addEventListener("click", () => {
    loginForm.style.display = "block";
    signupForm.style.display = "none";

    loginBtn.classList.add("active");
    signupBtn.classList.remove("active");
});

signupBtn.addEventListener("click", () => {
    loginForm.style.display = "none";
    signupForm.style.display = "block";

    signupBtn.classList.add("active");
    loginBtn.classList.remove("active");
});

/* SIGNUP */

signupForm.addEventListener("submit", function(e) {

    e.preventDefault();

    const fullName = document.getElementById("signupName").value;
    const email = document.getElementById("signupEmail").value;
    const phone = document.getElementById("signupPhone").value;
    const password = document.getElementById("signupPassword").value;

    const user = {
        fullName,
        email,
        phone,
        password
    };

    localStorage.setItem("postalUser", JSON.stringify(user));

    alert("✅ Account Created Successfully!");

    this.reset();

    signupForm.style.display = "none";
    loginForm.style.display = "block";

    loginBtn.classList.add("active");
    signupBtn.classList.remove("active");
});

/* LOGIN */

loginForm.addEventListener("submit", function(e) {

    e.preventDefault();

    const loginInput = document.getElementById("loginEmail").value;
    const loginPassword = document.getElementById("loginPassword").value;

    const savedUser = JSON.parse(localStorage.getItem("postalUser"));

    if (!savedUser) {
        alert("⚠ Please Create Account First");
        return;
    }

    if (
        (loginInput === savedUser.email ||
         loginInput === savedUser.phone) &&
        loginPassword === savedUser.password
    ) {

        alert("🎉 Login Successful! Welcome " + savedUser.fullName);

        window.location.href = "dashboard.html";

    } else {

        alert("❌ Invalid Email/Phone or Password");

    }
});