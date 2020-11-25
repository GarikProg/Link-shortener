# Link-shortener
Приложение для укорачивания ссылок (по примеру bit.ly).

## Release 0: 
Инициализация проекта, добавление основных директорий, инициализация
 eslint и необходимых библиотек для тестирования.

## Release 1:
Создание серверной части приложения с записью информации в PostgresSQL через библиотеку Sequelize:
- добавления нового объекта включающего стандартную и короткую ссылку;
- обработка запросов получения массива объектов стандартных, 
коротких ссылок, и количества переходов по короткой ссылке;
- тестирование через PostMan;

## Release 2: 
- Создание клиентской части с использование фрейворка React 
(роутинг, запросы к серверу, отображение пользователю, вертка с использованием библиотеки material UI).

## Release 3: 
- Создание консольной утилиты для взаимодействия с API.

## До запуска приложения необходимо сформировать .env (в директории /server) файл со следующими полями:
- URL_DB - 'ссылка для подключения субд PostgresSQL'
Пример: URL_DB=postgres://jpdbtcdz:MPqX_DqQhkLWYA0q0HJ9AuTgZbWJuaWF@hattie.db.elephantsql.com:5432/jpdbtcdz

## Для запуска приложения необходимо ввести следующие комнады:
```console
npm run build script
npm start
```
Приложение доступно по адресу: http://localhost:3001

## Для запуска консольной утилиты необходимо ввести следующие команды (хост и порт указан по умолчанию):
```console
cd console
npm install
node console.js  --get-stats --address=http://localhost:3001
```
