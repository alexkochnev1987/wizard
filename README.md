### Запуск локального сервера на докере

1. Переходим папку server
2. Создаем .env файл по примеру .env.example
3. Создаем image `yarn image`
4. Запускаем контейнер `yarn docker`

### Запуск приложения

1. Переходим в папаку front
2. Создаем .env файл по примеру .env.example
3. `yarn start`

### Task

Подготовить гит репозиторий с двумя проектами внутри:

- backend - https://strapi.io/
- frontend - react native

Hа фронте вывести карту
По сокетам передавать данные геолокации в реальном времени в фоновом режиме
В бекенде сохранять полученные данные по геолокации для дальнейшего использования на втором устройстве этих данных расположения пользователя на карте
Для передачи всех данных использовать Socket.io
