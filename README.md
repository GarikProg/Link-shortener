# Link-shortener
Приложение для укорачивания ссылок (по примеру bit.ly).

Release 0: 
Инициализация проекта, добавление основных директорий, инициализация
 eslint и необходимых библиотек для тестирования.

Release 1:
Создание серверной части приложения с записью информации в PostgresSQL через библиотеку Sequelize:
- добавления нового объекта включающего стандартную и короткую ссылку;
- обработка запросов получения массива объектов стандартных, 
коротких ссылок, и количества переходов по короткой ссылке;
- тестирование через PostMan;

Release 2: 
Создание клиентской части с использование фрейворка React 
(роутинг, запросы к серверу, отображение пользователю, вертка с использованием библиотеки material UI).

Release 3: 
Создание консольной утилиты для взаимодействия с API.

Для запуска приложения необходимо ввести следующие комнады:
`npm run build script
`npm start
