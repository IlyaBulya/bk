// Функция для отображения кнопки "Пополнить баланс" после успешной авторизации
function showAddFundsButton() {
    var addFundsButton = document.getElementById("addFundsButton");
    addFundsButton.style.display = "block";

    // Обработка нажатия на кнопку "Пополнить баланс"
    addFundsButton.addEventListener("click", function() {
        var funds = prompt("Введите сумму для пополнения:");
        funds = parseInt(funds);
        if (!isNaN(funds) && funds > 0) {
            var balance = parseInt(document.getElementById("balance").innerText);
            document.getElementById("balance").innerText = balance + funds;
            alert("Баланс успешно пополнен на " + funds + " руб.");
        } else {
            alert("Некорректная сумма для пополнения.");
        }
    });
}

// Проверяем, был ли пользователь авторизован при загрузке страницы
window.addEventListener("load", function() {
    var storedUsername = localStorage.getItem("username");
    var loggedIn = localStorage.getItem("loggedIn");

    if (storedUsername && loggedIn === "true") {
        showAddFundsButton();
        document.getElementById("accountLink").style.display = "block";
        document.getElementById("loginLink").style.display = "none";
        document.getElementById("registrationLink").style.display = "none";
    }
});

// Обработка выбора позиций для ставок
var positionButtons = document.querySelectorAll('.position');
var modal = document.getElementById("playerSelectionModal");
var span = document.getElementsByClassName("close")[0];
var playerCardsContainer = document.getElementById("playerCards");

positionButtons.forEach(button => {
    button.addEventListener('click', function() {
        var position = button.getAttribute('data-position');
        showPlayerSelectionModal(position, button);
    });
});

span.onclick = function() {
    modal.style.display = "none";
}

window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

function showPlayerSelectionModal(position, button) {
    playerCardsContainer.innerHTML = ''; // Clear previous players
    var players = getPlayersByPosition(position);
    players.forEach(player => {
        var playerCard = document.createElement('div');
        playerCard.className = 'player-card';
        playerCard.innerHTML = `<img src="${player.image}" alt="${player.name}"><p>${player.name}</p>`;
        playerCard.addEventListener('click', function() {
            selectPlayer(player, button);
        });
        playerCardsContainer.appendChild(playerCard);
    });
    modal.style.display = "block";
}

function getPlayersByPosition(position) {
    // This should be replaced with actual data retrieval
    var allPlayers = {
        leftForward: [
            { name: 'Игрок 1', image: 'player1.jpg' },
            { name: 'Игрок 2', image: 'player2.jpg' }
        ],
        centerForward: [
            { name: 'Игрок 3', image: 'player3.jpg' },
            { name: 'Игрок 4', image: 'player4.jpg' }
        ],
        rightForward: [
            { name: 'Игрок 5', image: 'player5.jpg' },
            { name: 'Игрок 6', image: 'player6.jpg' }
        ],
        leftDefense: [
            { name: 'Игрок 7', image: 'player7.jpg' },
            { name: 'Игрок 8', image: 'player8.jpg' }
        ],
        rightDefense: [
            { name: 'Игрок 9', image: 'player9.jpg' },
            { name: 'Игрок 10', image: 'player10.jpg' }
        ],
        goalie: [
            { name: 'Игрок 11', image: 'player11.jpg' },
            { name: 'Игрок 12', image: 'player12.jpg' }
        ]
    };

    return allPlayers[position] || [];
}

function selectPlayer(player, button) {
    button.innerHTML = `<img src="${player.image}" alt="${player.name}" class="player-img"><p>${player.name}</p>`;
    modal.style.display = "none";
}
