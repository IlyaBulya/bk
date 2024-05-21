window.addEventListener('load', function() {
    var username = localStorage.getItem('username');
    var loggedIn = localStorage.getItem('loggedIn');

    if (username && loggedIn === 'true') {
        document.getElementById('usernameDisplay').innerText = username;
    } else {
        // Перенаправляем пользователя на страницу входа, если он не авторизован
        window.location.href = 'login.html';
    }

    document.getElementById('logoutButton').addEventListener('click', function() {
        // Удаляем статус входа
        localStorage.setItem('loggedIn', 'false');
        // Перенаправляем пользователя на главную страницу
        window.location.href = 'index.html';
    });
});
