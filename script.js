
document.getElementById("signupForm").addEventListener("submit", function(e) {

    e.preventDefault();

    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;
    let confirmPassword = document.getElementById("confirmPassword").value;

    let users = JSON.parse(localStorage.getItem("users")) || [];

    if (password !== confirmPassword) {
        document.getElementById("message").innerText = "Passwords do not match!";
        return;
    }

    let existingUser = users.find(user => user.email === email);

    if (existingUser) {
        document.getElementById("message").innerText = "Email already registered!";
        return;
    }

    let newUser = {
        name: name,
        email: email,
        password: password
    };

    users.push(newUser);

    localStorage.setItem("users", JSON.stringify(users));

    document.getElementById("message").innerText = "Signup Successful!";

    document.getElementById("signupForm").reset();

});
