document,getElementById("signupForm").addEventListener("submit", function(event) {
    event.preventDefault();
    let email = document.getElementById("email").value;
    let fullName = document.getElementById("fullName").value;
    let username = document.getElementById("username").value;
    let password = document.getElementById("password").value;
    let user = [email, fullName, username, password];
    localStorage.setItem("user", JSON.stringify(user));
    alert("Signup successful! Please log in.");
    window.location.href = "index.html";
}
);