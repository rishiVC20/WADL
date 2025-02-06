// document
//   .getElementById("registrationForm")
//   .addEventListener("submit", function (event) {
//     event.preventDefault();

//     const name = document.getElementById("name").value;
//     const email = document.getElementById("email").value;
//     const password = document.getElementById("password").value;

//     const user = {
//       name: name,
//       email: email,
//       password: password,
//     };

//     // AJAX POST request
//     const xhr = new XMLHttpRequest();
//     xhr.open("POST", "https://jsonplaceholder.typicode.com/users", true);
//     xhr.setRequestHeader("Content-Type", "application/json");

//     xhr.onload = function () {
//       if (xhr.status === 201) {
//         // Store data in local storage
//         let users = JSON.parse(localStorage.getItem("users")) || [];
//         users.push(user);
//         localStorage.setItem("users", JSON.stringify(users));

//         // Redirect to data display page
//         window.location.href = "data.html";
//       } else {
//         console.error("Error:", xhr.statusText);
//       }
//     };

//     xhr.onerror = function () {
//       console.error("Request failed");
//     };

//     xhr.send(JSON.stringify(user));
//   });


document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("registrationForm");

    form.addEventListener("submit", function (event) {
        event.preventDefault();

        // Get user input values
        let name = document.getElementById("name").value;
        let email = document.getElementById("email").value;
        let password = document.getElementById("password").value;

        // Create user object
        let user = { name, email, password };

        // Store in local storage
        let users = JSON.parse(localStorage.getItem("users")) || [];
        users.push(user);
        
        localStorage.setItem(name, JSON.stringify(users));

        // AJAX POST request (Mock API)
        let xhr = new XMLHttpRequest();
        xhr.open("POST", "https://jsonplaceholder.typicode.com/users", true);
        xhr.setRequestHeader("Content-Type", "application/json");

        xhr.onreadystatechange = function () {
            if (xhr.readyState === 4 && xhr.status === 201) {
                alert("User registered successfully!");
                form.reset();
            }
        };

        xhr.send(JSON.stringify(user));
    });
});
