document.getElementById('registrationForm').addEventListener('submit', function(event) {
    event.preventDefault();
    var username = document.getElementById('regUsername').value;
    var password = document.getElementById('regPassword').value;

    // Save the new user credentials to localStorage
    localStorage.setItem('username', username);
    localStorage.setItem('password', password);

    // Automatically log the user in after registration
    localStorage.setItem('loggedIn', 'true');

    // Redirect to the main page
    window.location.href = 'index.html';
});
