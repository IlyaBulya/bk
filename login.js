document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();
    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;

    // Получаем данные пользователя из localStorage
    var storedUsername = localStorage.getItem('username');
    var storedPassword = localStorage.getItem('password');

    // Проверяем, совпадают ли введенные данные с сохраненными
    if (username === storedUsername && password === storedPassword) {
        // Сохраняем статус входа
        localStorage.setItem('loggedIn', 'true');
        // Перенаправляем пользователя на главную страницу
        window.location.href = 'index.html';
    } else {
        // Иначе выводим сообщение об ошибке
        alert('Неверное имя пользователя или пароль.');
    }
});
