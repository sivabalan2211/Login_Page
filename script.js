function validateCredentials() {
    var password = document.getElementById("password").value;
    var emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    var passwordRegex = /^(?=.*[A-Z])(?=.*[!@#$%^&*])(?=.*[0-9]).{8,}$/;
    if (!emailRegex.test(email)) {
        alert("Please enter a valid email address.");
    } else if (!passwordRegex.test(password)) {
        alert("Password must be at least 8 characters long and contain:\n" +
            "1. At least one uppercase letter\n" +
            "2. At least one special character (!@#$%^&*)\n" +
            "3. At least one number");
    } else {
        alert("Credentials are valid. You can proceed.");
    }
}
