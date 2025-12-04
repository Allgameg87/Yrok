# Реализация заданий по JavaScript

Этот проект содержит реализацию трех заданий по работе с асинхронными функциями и DOM в JavaScript.

## Задание 1: Получение данных о пользователе

Функция `getUserData(userId)` получает данные о пользователе с удаленного сервера.

**Использование:**
```javascript
getUserData(1)
    .then(user => console.log(user))
    .catch(error => console.error(error));
```

## Задание 2: Отправка данных на сервер

Функция `saveUserData(user)` отправляет данные о пользователе на сервер.

**Использование:**
```javascript
const user = {
    name: 'John Smith',
    age: 30,
    email: 'john@example.com'
};

saveUserData(user)
    .then(() => console.log('User data saved successfully'))
    .catch(error => console.error(error));
```

## Задание 3: Изменение стиля элемента через заданное время

Функция `changeStyleDelayed(id, delay)` изменяет стиль элемента после указанной задержки.

**Использование:**
```javascript
changeStyleDelayed('myElement', 2000); // Через 2 секунды изменяет стиль элемента
```

## Файлы проекта

- `functions.js` - содержит все три функции
- `index.html` - HTML страница для тестирования функций
- `README.md` - документация проекта

## Запуск

Откройте файл `index.html` в браузере для тестирования функций.

**Примечание:** Функции `getUserData` и `saveUserData` используют тестовый API (`https://api.example.com/users`). В реальном проекте замените URL на актуальный адрес вашего API.


