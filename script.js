// Функция для отображения кнопки "Пополнить баланс" после успешной авторизации
function showAddFundsButton() {
    var addFundsButton = document.getElementById("addFundsButton");
    addFundsButton.style.display = "block";
}

// Проверяем, был ли пользователь авторизован при загрузке страницы
window.addEventListener("load", function() {
    var storedUsername = localStorage.getItem("username");
    if (storedUsername) {
        // Если пользователь был авторизован, показываем кнопку "Аккаунт" и скрываем кнопки "Вход" и "Регистрация"
        document.getElementById("accountLink").style.display = "block";
        document.getElementById("loginLink").style.display = "none";
        document.getElementById("registrationLink").style.display = "none";

        // Показываем кнопку "Пополнить баланс"
        showAddFundsButton();
    }
});

// Обработка входа пользователя
document.getElementById("loginForm").addEventListener("submit", function(event) {
    event.preventDefault();
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;

    // Получаем данные пользователя из localStorage
    var storedUsername = localStorage.getItem("username");
    var storedPassword = localStorage.getItem("password");

    // Проверяем, совпадают ли введенные данные с сохраненными
    if (username === storedUsername && password === storedPassword) {
        // Если совпадают, перенаправляем пользователя на главную страницу
        window.location.href = "index.html";

        // Показываем кнопку "Аккаунт" и скрываем кнопки "Вход" и "Регистрация"
        document.getElementById("accountLink").style.display = "block";
        document.getElementById("loginLink").style.display = "none";
        document.getElementById("registrationLink").style.display = "none";

        // Показываем кнопку "Пополнить баланс"
        showAddFundsButton();
    } else {
        // Иначе выводим сообщение об ошибке
        alert("Неверное имя пользователя или пароль.");
    }
});

// Функция для пополнения баланса
function addFunds() {
    var balance = parseInt(document.getElementById("balance").innerText);
    var funds = prompt("Введите сумму для пополнения:");
    funds = parseInt(funds);
    if (!isNaN(funds) && funds > 0) {
        document.getElementById("balance").innerText = balance + funds;
        alert("Баланс успешно пополнен на сумму: " + funds + " руб.");
    } else {
        alert("Некорректная сумма для пополнения.");
    }
}

// Обработка нажатия на кнопку "Пополнить баланс"
document.getElementById("addFundsButton").addEventListener("click", addFunds);
