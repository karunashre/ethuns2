document.getElementById('regForm').addEventListener('submit', function(event) {
    event.preventDefault();

    let isValid = true;

    const fields = ['firstName', 'lastName', 'email', 'password', 'confirmPassword', 'age', 'phone', 'address', 'state'];

    fields.forEach(field => {
        const input = document.getElementById(field);
        const error = document.getElementById(`${field}Error`);

        if (input.value.trim() === '') {
            error.style.display = 'inline';
            isValid = false;
        } else {
            error.style.display = 'none';
        }
    });

    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirmPassword').value;

    if (password !== confirmPassword) {
        document.getElementById('confirmPasswordError').style.display = 'inline';
        isValid = false;
    }

    if (isValid) {
        alert('Form submitted successfully!');
    }
});
