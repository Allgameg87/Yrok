// Задание 1: Получение данных о пользователе
// Используем реальный тестовый API JSONPlaceholder для демонстрации
async function getUserData(userId) {
    try {
        const response = await fetch(`https://jsonplaceholder.typicode.com/users/${userId}`);
        
        if (!response.ok) {
            throw new Error('User not found');
        }
        
        const userData = await response.json();
        return userData;
    } catch (error) {
        return Promise.reject(error.message);
    }
}

// Задание 2: Отправка данных на сервер
// Используем реальный тестовый API JSONPlaceholder для демонстрации
async function saveUserData(user) {
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(user),
        });
        
        if (!response.ok) {
            throw new Error('Failed to save user data');
        }
        
        // Возвращаем ответ от сервера для демонстрации
        const savedData = await response.json();
        return savedData;
    } catch (error) {
        return Promise.reject(error.message);
    }
}

// Задание 3: Изменение стиля элемента через заданное время
function changeStyleDelayed(id, delay) {
    setTimeout(() => {
        const element = document.getElementById(id);
        if (element) {
            // Изменяем стиль элемента (например, цвет фона и цвет текста)
            element.style.backgroundColor = '#4CAF50';
            element.style.color = 'white';
            element.style.padding = '10px';
            element.style.borderRadius = '5px';
        } else {
            console.error(`Element with id "${id}" not found`);
        }
    }, delay);
}

// Экспорт функций для использования в других модулях (если используется ES6 modules)
if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
        getUserData,
        saveUserData,
        changeStyleDelayed
    };
}

