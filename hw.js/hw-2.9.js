// Задание 1. Скрытие и показ текста
// Задача: cоздайте кнопку, которая будет скрывать и показывать текст в заголовке <h1>
// Инструкция:
// В HTML создайте заголовок <h1> с текстом и кнопку.Используйте метод querySelector
//  для получения ссылок на заголовок и кнопку.
// Используйте событие click и метод addEventListener, чтобы скрывать и показывать заголовок при нажатии на кнопку.
// Как должно работать: нажатие на кнопку «Скрыть» скрывает текст заголовка. Повторное нажатие показывает текст снова.

const btn = document.querySelector('.btn');
const headingEL = document.querySelector('.heading');

btn.addEventListener('click', () => {
    headingEL.classList.toggle('hidden');
    btn.textContent = headingEL.classList.contains('hidden') ? 'Показать' : 'Скрыть'; // Меняем текст кнопки

    if (btn.textContent === 'Показать') {
        headingEL.style.display = 'none'
    } else {
        headingEL.style.display = 'block'
    }
});

// Задание 2. Изменение стиля элемента
// Задача: создайте кнопку, которая изменяет цвет текста в элементе <p> Инструкция:
// В HTML создайте абзац <p> и кнопку.Используйте метод querySelector для получения ссылки на абзац и кнопку.
// Используйте событие click и метод addEventListener, чтобы изменить стиль элемента, например его цвет.
// Как должно работать: нажатие на кнопку «Изменить цвет» делает текст абзаца синим.

const btn2 = document.querySelector('.btn2');
const textEl = document.querySelector('.text');

btn2.addEventListener('click', () => {
    const originalColor = 'black';
    const newColor = 'blue';

    // Меняем текст кнопки в зависимости от состояния
    btn2.textContent = textEl.style.color === newColor ? 'Изменить цвет текста' : 'Вернуть оригинальный цвет';

    // Переключаем цвет текста
    textEl.style.color = textEl.style.color === newColor ? originalColor : newColor;
});


// Задание 3. Динамическое изменение текста
// Задача: создайте кнопку, которая меняет текст в заголовке <h1>
// В HTML создайте заголовок <h1> с текстом и кнопку.Используйте метод querySelector для получения ссылки на заголовок и кнопку.
// Используйте событие click и метод addEventListener, чтобы изменить текст заголовка при нажатии на кнопку.
// Как должно работать: нажатие на кнопку «Изменить текст» меняет текст заголовка на «Привет, мир!».

const btn3 = document.querySelector('.btn3');
const headingEL3 = document.querySelector('.heading3');
const oldText = headingEL3.textContent; // Сохраняем исходный текст заголовка

btn3.addEventListener('click', () => {
    // Проверяем состояние кнопки
    if (btn3.textContent === 'Изменить текст') {
        let newText = prompt('Введите новый текст');
        if (newText) { // Проверка на пустой ввод
            headingEL3.textContent = newText; // Устанавливаем новый текст
        }
        btn3.textContent = 'Вернуть текст'; // Меняем текст кнопки
    } else {
        headingEL3.textContent = oldText; // Возвращаем старый текст
        btn3.textContent = 'Изменить текст'; // Меняем текст кнопки обратно
    }
});

// Задание 4. Поиск и изменение элементов по классу
// Задача: найдите все элементы с классом description и измените их текст на «Измененный текст».// Инструкция:
// В HTML создайте несколько элементов с классом description.Используйте метод querySelectorAll
// для поиска всех элементов с этим классом.
// Переберите найденные элементы и измените их текстовое содержимое с помощью свойства textContent
// Как должно работать: после выполнения скрипта все элементы с классом descriptio изменяют свой текст на «Измененный текст».

const textEL4 = document.querySelectorAll('.description')
const btn4 = document.querySelector('.btn4')

btn4.addEventListener('click', () => {
    if (btn4.textContent === 'Изменить текст') {
        textEL4.forEach((el) => el.textContent = 'Измененный текст')
        btn4.textContent = 'Вернуть текст';
    } else { 
        textEL4.forEach((el) => el.textContent = 'Cтарый текст')
        btn4.textContent = 'Изменить текст'
    }
})


// Задание 5. Работа с querySelectorAll
// Задача: создайте несколько элементов <p> с разными классами. Используйте querySelectorAll, 
// чтобы найти все элементы с классом description и изменить их текст.
// Инструкция:
// В HTML создайте несколько абзацев <p>, некоторые из них должны иметь класс description.
// Используй querySelectorAll для поиска всех элементов с классом description.
// Переберите найденные элементы и измените их текстовое содержимое.
// Как должно работать: после выполнения скрипта все элементы с классом description изменяют свой текст на «Новый текст».
const textEL5 = document.querySelectorAll('.description5')
const btn5 = document.querySelector('.btn5')

btn5.addEventListener('click', () => {
    if (btn5.textContent === 'Изменить текст') {
        textEL5.forEach((el) => el.textContent = 'Новый текст')
        btn5.textContent = 'Вернуть текст';
    } else { 
        textEL5.forEach((el) => el.textContent = 'Cтарый текст')
        btn5.textContent = 'Изменить текст'
    }
})

// Задание 6. Добавление нового элемента в DOM
// Задача: создайте кнопку, которая добавляет новый элемент <p> с текстом в конец документа.
// Инструкция:
// В HTML создайте кнопку.Используйте метод createElement для создания нового элемента.
// Используйте appendChild для добавления нового элемента в конец документа при нажатии на кнопку Как должно работать: 
// нажатие на кнопку «Добавить элемент» добавляет в конец страницы новый абзац с текстом «Новый абзац».

const contentEL6 = document.querySelector('.content6')
const btn6 = document.querySelector('.btn6')


btn6.addEventListener('click', () => {
    const textEl6 = document.createElement('p');
    textEl6.textContent = 'Новый абзац'
    textEl6.classList.add('description6')

    contentEL6.append(textEl6)
})


// Задание 7. Удаление элемента
// Задача: создайте кнопку, которая удаляет первый элемент <p> с классом description.
// Инструкция: В HTML создайте несколько абзацев <p , некоторые из них должны иметь класс description
// // Используйте метод querySelector для поиска первого элемента с классом description.
// Используйте метод remove для удаления этого элемента при нажатии на кнопку.
// Как должно работать: нажатие на кнопку «Удалить элемент» удаляет первый абзац с классом description со страницы.

const contentEL7 = document.querySelector('.content7');
const textEl7 = document.querySelector('.description7');
const btn7 = document.querySelector('.btn7');

btn7.addEventListener('click', () => {
    textEl7.remove();
})