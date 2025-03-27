document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("userForm");
    const tableBody = document.getElementById("userTableBody");

    if (form) {
        form.addEventListener("submit", (e) => {
            e.preventDefault();
            
            const name = document.getElementById("name").value;
            const email = document.getElementById("email").value;
            const contact = document.getElementById("contact").value;
            const address = document.getElementById("address").value;

            const user = { name, email, contact, address };

            // Store data in localStorage
            let users = JSON.parse(localStorage.getItem("users")) || [];
            users.push(user);
            localStorage.setItem("users", JSON.stringify(users));

            form.reset();
            alert("User Registered Successfully!");
        });
    }

    if (tableBody) {
        const users = JSON.parse(localStorage.getItem("users")) || [];
        
        users.forEach((user, index) => {
            const row = document.createElement("tr");
            row.innerHTML = `
                <td>${user.name}</td>
                <td>${user.email}</td>
                <td>${user.contact}</td>
                <td>${user.address}</td>
            `;
            tableBody.appendChild(row);
        });
    }
});
