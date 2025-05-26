

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
// game - 2
function generateTask() {
    let amount = 4; // Количество задач
    const operations = ['+', '-', '*', '/'];
    
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


// hw-2.7 Встроенные объекты
// game - 3
function reverseText() {
    let userText = prompt('Введите слово, которое хотите перевернуть');

    // Проверяем, что введенный текст не является числом
    if (isNaN(userText)) {
        // Переворачиваем текст
        let reversedText = userText.split('').reverse().join('');
        alert(reversedText);
    } else {
        alert('Пожалуйста, введите текст, а не число.');
    }
}

// game - 4 
function startQuiz() {
    const quiz = [
        {
            question: "Какой цвет небо?",
            options: ["1. Красный", "2. Синий", "3. Зеленый"],
            correctAnswer: 2 // номер правильного ответа
        },
        {
            question: "Сколько дней в неделе?",
            options: ["1. Шесть", "2. Семь", "3. Восемь"],
            correctAnswer: 2
        },
        {
            question: "Сколько у человека пальцев на одной руке?",
            options: ["1. Четыре", "2. Пять", "3. Шесть"],
            correctAnswer: 2
        }
    ];

    let score = 0; // Счетчик правильных ответов

    for (let i = 0; i < quiz.length; i++) {
        const questionObj = quiz[i];
        
        // Формируем вопрос и варианты ответов
        let questionText = questionObj.question + "\n";
        for (let j = 0; j < questionObj.options.length; j++) {
            questionText += questionObj.options[j] + "\n";
        }

        // Запрашиваем ответ у пользователя
        let userAnswer = prompt(questionText);
        
        // Проверяем, введен ли ответ
        if (userAnswer !== null) {
            // Преобразуем введенный ответ в число
            let answerNumber = parseInt(userAnswer);
            console.log(questionObj.correctAnswer)

            // Проверяем правильность ответа
            if (answerNumber === questionObj.correctAnswer) {
                score++; // Увеличиваем счетчик, если ответ верный
            } else {
                alert(`Не верно. Правильный ответ: ${questionObj.options[questionObj.correctAnswer - 1]}`);
            }
        }
    }

    // Выводим результат
    alert(`Вы ответили правильно на ${score} из ${quiz.length} вопросов.`);
}







   