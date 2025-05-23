

document.getElementById('scrollButton').addEventListener('click', function() {
    const gamesSection = document.getElementById('gamesSection');
    gamesSection.scrollIntoView({ behavior: 'smooth' });
});

function compareNumbers() {
    const randomNumber = Math.floor(Math.random() * 100) + 1; // Генерация случайного числа от 1 до 100
    let userNumber;

    while (userNumber !== randomNumber) {
        userNumber = Number(prompt('Введите число от 1 до 100')); // Запрос числа у пользователя

        if (userNumber === 0) {
            alert('Игра окончена. Спасибо за участие!');
            break; // Завершение функции и игры
        }

        if (isNaN(userNumber)) {
            alert('Это не число! Пожалуйста, введите число от 1 до 100.');
        } else if (userNumber < 1 || userNumber > 100) {
            alert('Число должно быть в диапазоне от 1 до 100.');
        } else if (userNumber > randomNumber) {
            alert('Загаданное число меньше');
        } else if (userNumber < randomNumber) {
            alert('Загаданное число больше');
        } else {
            alert('Поздравляю! Вы угадали число!');
        }
    }
}