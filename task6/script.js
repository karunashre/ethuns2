function validateForm() {
    let isValid = true;

    document.getElementById('usernameError').textContent = '';
    document.getElementById('passwordError').textContent = '';

    const username = document.getElementById('username').value.trim();
    const password = document.getElementById('password').value.trim();

    if (username === '') {
        document.getElementById('usernameError').textContent = "Username is required";
        isValid = false;
    }

    if (password === '') {
        document.getElementById('passwordError').textContent = "Password is required";
        isValid = false;
    } else if (password.length < 6) {
        document.getElementById('passwordError').textContent = "Password must be at least 6 characters";
        isValid = false;
    }

    return isValid;
}
