function validateForm() {
    let isValid = true;

    document.querySelectorAll('.error').forEach(e => e.textContent = '');

    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const website = document.getElementById('website').value.trim();
    const message = document.getElementById('message').value.trim();

    
    if (name === '') {
        document.getElementById('nameError').textContent = "This field is required";
        isValid = false;
    }

  
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (email === '') {
        document.getElementById('emailError').textContent = "A valid email address is required";
        isValid = false;
    } else if (!emailPattern.test(email)) {
        document.getElementById('emailError').textContent = "Invalid email format";
        isValid = false;
    }

    const urlPattern = /^(https?:\/\/)?([\w\d-]+\.)+\w{2,}(\/.*)?$/;
    if (website === '') {
        document.getElementById('websiteError').textContent = "A valid URL is required";
        isValid = false;
    } else if (!urlPattern.test(website)) {
        document.getElementById('websiteError').textContent = "Invalid URL format";
        isValid = false;
    }

    if (message === '') {
        document.getElementById('messageError').textContent = "This field is required";
        isValid = false;
    }

    return isValid;
}
