// Заполняем информацию об аккаунте
var usernameElement = document.getElementById("username");
var storedUsername = localStorage.getItem("username");
if (storedUsername) {
    usernameElement.textContent = storedUsername;
} else {
    usernameElement.textContent = "Гость";
}

// Обработка выхода из аккаунта
document.getElementById("logoutButton").addEventListener("click", function() {
    // Очищаем данные пользователя в localStorage
    localStorage.removeItem("username");
    localStorage.removeItem("password");
    // Перенаправляем пользователя на страницу входа
    window.location.href = "login.html";
});
