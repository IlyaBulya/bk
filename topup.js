document.getElementById('topupForm').addEventListener('submit', function(event) {
    event.preventDefault();

    var amount = parseInt(document.getElementById('amount').value);
    if (!isNaN(amount) && amount > 0) {
        var currentBalance = parseInt(localStorage.getItem('balance')) || 0;
        localStorage.setItem('balance', currentBalance + amount);
        window.location.href = 'index.html'; // Перенаправляем на главную страницу после пополнения
    } else {
        alert("Введите корректную сумму.");
    }
});
