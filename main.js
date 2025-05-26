

document.getElementById('scrollButton').addEventListener('click', function() {
    const gamesSection = document.getElementById('gamesSection');
    gamesSection.scrollIntoView({ behavior: 'smooth' });
});

// hw-2.5 Функции
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


// hw-2.6 Массивы
function generateTask() {
    let amount = 4; // Количество задач
    const operations = [ '/'];
    
    // Подтверждение от пользователя
    let userAgree = confirm(`Тебе необходимо решить ${amount} примера на вычитание, сложение, умножение или деление!`);
    if (!userAgree) {
        alert('Ждем тебя в следующий раз!');
        return;
    } else {
        let correctAnswers = 0; // Счетчик правильных ответов

        for (let i = 0; i < amount; i++) {
            let num1 = Math.floor(Math.random() * 10) + 1; // Случайное первое число
            let num2 = Math.floor(Math.random() * 10) + 1; // Случайное второе число
            const operation = operations[Math.floor(Math.random() * operations.length)]; // Случайная операция

            if (operation === '/') {
                const largerNum = Math.max(num1, num2);
                const smallerNum = Math.min(num1, num2);
                num1 = largerNum; // Делимое
                num2 = smallerNum; // Делитель
            }


            let userAnswer = prompt(`Сколько будет ${num1} ${operation} ${num2}? - (введите 'exit' для выхода))`); // Запрос ответа у пользователя

            // Проверка на выход
            if (userAnswer.toLowerCase() === 'exit') {
                alert('Вы вышли из игры. Спасибо за участие!');
                return; // Завершение функции
            }

            userAnswer = Number(userAnswer);

            // Проверка ответа в зависимости от операции
            let correctAnswer;
            switch (operation) {
                case '+':
                    correctAnswer = num1 + num2;
                    break;
                case '-':
                    correctAnswer = num1 - num2;
                    break;
                case '*':
                    correctAnswer = num1 * num2;
                    break;
                case '/':
                    correctAnswer = (num2 !== 0) ? Number((num1 / num2).toFixed(1))  : 'undefined'; // Проверка деления на ноль
                    break;
            }
            console.log(typeof(userAnswer))
            console.log(typeof(correctAnswer))
            console.log(userAnswer)
            console.log(correctAnswer)

            // Проверка правильности ответа
            if (userAnswer === correctAnswer) {
                alert('Это правильный ответ!');
                correctAnswers++;
            } else {
                alert(`Не верно. Правильный ответ: ${correctAnswer}`);
            }
        }
        alert(`Вы ответили правильно на ${correctAnswers} из ${amount} задач.`);
    }
}
   