// Задание 1
// Преобразовать строку 'js' в верхний регистр.
let str = 'js'
console.log(str.toLocaleUpperCase())


// Задание 2
// Создать функцию, которая принимает массив строк и строку. Функция должна вернуть новый массив, 
// содержащий только те элементы первого массива, которые начинаются со второй строки. Регистр символов не влияет на результат.
const list = ['hello world', 'print words', 'hello js'];
let word = 'hello';

function filterStr(list, str) {
    const newList = []
    list.forEach(element => {
        if (element.startsWith(str)) {
            newList.push(element)
        }
    });
    return newList
}

console.log(filterStr(list, word))

// Задание 3
// Округлить число 32.58884:
let number = 32.58884
// До меньшего целого. 
console.log(Math.floor(number))
// До большего целого.
console.log(Math.ceil(number))
// До ближайшего целого
console.log(Math.round(number))


// Задание 4
// Найти минимальное и максимальное значения из чисел 52, 53, 49, 77, 21, 32 и вывести их в консоль.
const nums = [52, 53, 49, 77, 21, 32]
console.log(Math.max(...nums))
console.log(Math.min(...nums))

// Задание 5
// Создать функцию, которая выводит в консоль случайное число от 1 до 10.

const random = () => Math.floor(Math.random() * 10) + 1

console.log(random())

// Задание 6
// Написать функцию, которая принимает целое число и возвращает массив случайных чисел от 0 до этого числа. 
// Длина массива должна быть в два раза меньше переданного числа.
function generateRandomArray(num) {
    if (num <= 0) {
        return []; // Возвращаем пустой массив для некорректных входных данных
    }

    const length = Math.floor(num / 2); // Вычисляем длину массива
    const randomArray = [];

    for (let i = 0; i < length; i++) {
        const randomNum = Math.floor(Math.random() * num); // Генерируем случайное число от 0 до num
        randomArray.push(randomNum); // Добавляем его в массив
    }

    return randomArray; // Возвращаем массив случайных чисел
}

// Пример использования:
console.log(generateRandomArray(5)); 

// Задание 7
// Создать функцию, которая принимает два целых числа и возвращает случайное число в этом диапазоне.
function getRandomInRange(a, b) {
    // Сначала находим минимальное и максимальное значения
    const min = Math.min(a, b);
    const max = Math.max(a, b);
    
    // Генерируем случайное целое число в диапазоне [min, max]
    const randomNum = Math.floor(Math.random() * (max - min + 1)) + min;
    return randomNum;
}

// Пример использования:
console.log(getRandomInRange(1, 10)); // Возвращает случайное число от 1 до 10
console.log(getRandomInRange(-5, 5)); // Возвращает случайное число от -5 до 5

// Задание 8
// Вывести в консоль текущую дату.

const today = new Date();
console.log(today.toLocaleDateString());

// Задание 9
// Создать переменную currentDate, хранящую текущую дату. Вывести дату, которая наступит через 73 дня после текущей.
const currentDate = new Date()
let futureDate = new Date(currentDate)
futureDate.setDate(currentDate.getDate() + 73)
console.log(`Через 73 дня наступит - ${futureDate.toLocaleDateString()}`)

// Задание 10
// Написать функцию, которая принимает дату и возвращает ее в формате:
// Дата: [число] [месяц на русском] [год] — это [день недели на русском].
// Время: [часы]:[минуты]:[секунды]

function formatDate(date) {
    const daysOfWeek = [
        'воскресенье', 'понедельник', 'вторник', 'среда', 
        'четверг', 'пятница', 'суббота'
    ];
    
    const months = [
        'января', 'февраля', 'марта', 'апреля', 
        'мая', 'июня', 'июля', 'августа', 
        'сентября', 'октября', 'ноября', 'декабря'
    ];
    
    const day = date.getDate();
    const month = months[date.getMonth()];
    const year = date.getFullYear();
    const dayOfWeek = daysOfWeek[date.getDay()];
    
    // Используем toLocaleTimeString для форматирования времени
    const options = { hour: '2-digit', minute: '2-digit', second: '2-digit' };
    const timeString = date.toLocaleTimeString('ru-RU', options);
    
    return `Дата: ${day} ${month} ${year} — это ${dayOfWeek}.\nВремя: ${timeString}`;
}

// Пример использования
const currentDate1 = new Date();
console.log(formatDate(currentDate1));
