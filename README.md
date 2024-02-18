### Запуск локального сервера на докере

1. Переходим папку server
2. Создаем .env файл по примеру .env.example
3. Создаем image `docker build -t strapi .`
4. Запускаем контейнер `docker run -d -p 1337:1337 strapi`

### Запуск приложения

1. Переходим в папаку front
2. Создаем .env файл по примеру .env.example
3. `yarn start`
