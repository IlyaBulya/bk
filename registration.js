// Обработка регистрации пользователя
document.getElementById("fullRegistrationForm").addEventListener("submit", function(event) {
    event.preventDefault();
    var fullName = document.getElementById("fullName").value;
    var email = document.getElementById("email").value;
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;

    // Сохраняем данные пользователя в localStorage
    localStorage.setItem("username", username);
    localStorage.setItem("password", password);

    // Перенаправляем пользователя на главную страницу
    window.location.href = "index.html";
});
