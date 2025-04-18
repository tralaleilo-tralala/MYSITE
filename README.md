- Git add . – добавление файлов в индекс
- Git status – дает понимание какие файлы были изменены, добавлены или удалены, но они еще не закоммичены
- git commit -m "Описание коммита" - фиксирует изменения в репозитории. Сохраняет их в историю, в которую можно обратиться.
- Git log – выводит всю историю коммитов, там информация изменений и действий.
- Git show – дает информацию о конкретном коммите. Дата, автор, что изменилось
- Git diff – разница между текущими изменнениями и последним коммитом. Показывает, что именно изменилось в файлах.
- git restore – омтеняет все изменения в файлах, возвращает к состоянию последнего коммита. 
- git rm - удаление файлов из Git, а также из рабочей папки в случае необходимости.
- git reset - отменяет все коммиты не запушенные и возвращает в проект к более раннему этапу. (git reset --hard HEAD-1)
- git branch - показывает список веток.
    1. git branch "имя ветки" - создаем  новую ветку. 
    2. git branch -d "имя ветки" - удаляем ветку с названия. 
- git pull - переносит актуальные изменения с гита на наш репозиторий. Желательно находиться на главной ветке в момент выполнения.
- git push - отправляет изменения в удаленный репозиторий. Работает только после коммита.
- git help -a -  показывает все доступные команды в git.
- git clone url - скопировать/склонировать удаленный репозиторий.

Тема 1.
### Понятие репозитория и структура проекта.
Репозиторий - хранилище кода, включающее:
1. все файлы и папки проекта. 
2. историю изменений(коммиты).
3. информацию о ветках и настройках.   

Виды репозитория:
1. Локальный - хранится на компьютере разработчика(папка.git).
2. Удаленный(remote) - размещен на сервере(GitHub, GitLab).

### структура папок
project/     #корневая папка проекта
|
| --.git/        # скрытая папка с данными git(история, настройки)
|
| --src/         # исходный код(наприме, main.py, index.js)
|
| --docs/        # документация(README.md, API - описание)
|
| -- tests/      # тесты(unit - тесты, интеграционный тест)
|
| -- config/     # файлы кофигурации(настройки сервера, БД)
|
| -- assets/     # ресурсы(изображения, шрифты)
|
| -- .gitignore  # файл, указывающий, какие файлы Git должен игнорировать

Основные элементы:
- .git/ - служебная папка Git(нельзя удалить)
- README.md - описание проекта(обычно в корне)
- .gitignore - список файлов, которые Git не отслеживает

### Жизненный цикл файлов в Git
Файлы в Git проходят несколько стадий:
1. Неотслежеваемые (Untracked) - Git о них не знает.
2. Измененные (Modified) - файлы, которые уже в репозитории, но были измененеы.
3. Идексированные (Staged) - файлы, подготовленные к коммиту (git add).
4. Зафиксированные (Committed) - изменения сохранены в репозитории (git commit).

# Важные правила
Коммиты должны быть автомарными - каждое изменение логически завершенное.
- .gitignore обязателен - чтобы не засорять репозиторий ненужными файлами.
- README.md - лицо проекта - должен содержать описание, установку и использование.


учетные данные виндовс - удаление github.com не своего юзера 


Тема 2.
# Виды, цели и уровни интеграции программных модулей.
Интеграция программных модулей – процесс объединения отдельных компонентов ПО в единую систему, которая обеспечивает их совместное функционирование. 
Цель интеграции:
1. Обеспечение взаимодействия модулей. 
2. Повышение надежности и производительности системы.
3. Упрощение разработки и сопровождение ПО.
4. Минимизация дублирования функционала.

Виды интеграции программных модулей:

1. По способу взаимодействия:
1. Горизонтальная интеграция – объединение модулей одного уровня (например, взаимодействие между сервисами в микросервисной архитектуре).
2.  Вертикальная интеграция – объединение модулей разных уровней (например, клиент-сервисное взаимодействие).

	2. По степени связанности:
		1. Слабая связанность – модули взаимодействуют через стандартные интерфейсы.(API, сообщения, что упрощает замену компонентам) (пример - rest full API, микросервисы)
		2.  Сильная связанность – модули тесно зависят друг от друга, изменение одного модуля требует модификации других. (пример – монолитная архитектура). 

	3. По времени выполнения:
		1. Статическая интеграция – компоненты связываются на этапе компиляции. 
		2. Динамическая интеграция – компоненты связываются во время выполнения. (плагины)
	
	4. По уровню автоматизации:
		1. Ручная интеграция – разработчик сам настраивает взаимодействия модулей между собой.
		2.   Автоматическая интеграция – используются CI/CD и систему сборки. 

	Уровни интеграции:
	1. Уровень данных – интеграция осуществляется через общие базы данных, файлы или очереди сообщений. Примеры: SQL БД, MySQL, postgreSQL, блокеры сообщений(RabbitMU(K))  
	2. Уровень API – сервисный уровень, модули взаимодействуют через API (rest grafQL) (пример - web – сервисы, микросервисная архитектура). 
	3. Уровень пользовательского интерфейса (UI) – интеграция происходит через единый интерфейс (web, мобильные приложения), примеры – SPA, PVA. Реализовать SPA И PVA можно с помощью фреймворка, реакт ангула и VUE; desk-stop приложения – можно реализовать с помощью QT и электрон.  
	4. Уровень бизнес логики – интеграция на уровне бизнес правил и процессов. Примеры – ERP системы, Word flow движки.

Инструментальные средства интеграции:

1. Средства сборки и управления зависимостями
	- Maven, Gradle(Java).
	- npm, yarn(JavaScript).
	- pip (Python)
2.  CI/CD - инструменты 
	- Jenkins¬¬¬, Gitlab CI, GitHub Actions – автоматизация сборки и тестирования.
	- Docker, Kubernetes – контейнеризация и орекстрация.
3. Middleware и брокеры сообщений
	- RabbitMQ, Apache Kafka – асинхронная интеграция.
	- Redis – киширование и Pub/Sub.
4. API шлюзы и сервисные сетки
	- Kong, Apigee – управление API.
	-Istio, Linkerd – сервис-меш для микросервисов.


Автоматизация бизнес процесса – использование различных технологий для выполнения повторяющихся задач, подразумевает минимизацию ручного труда и повышение эффективности работы организации. 
Цели автоматизации: 
1. Ускорение выполнения операций. 
2. Снижение ошибок. 
3. Оптимизация затрат. 
4. Повышение управляемости и прозрачности процессов.
5. Масштабируемый бизнес.

Виды бизнес процессов:
1. Линейные процессы (простые) – подразумевает последовательные задачи без ветвлений. 
2. Нелинейные процессы (сложные)  - включают в себя условия, циклы и параллельные потоки.
	
Виды бизнес процессов по функциональным областям:
1. Управление документооборотом.
2. Финансы и бухгалтерия.(автоматизация расчетов) 
3. Логистика и склад. (учет товаров, маршрутизация доставки)
4. Эйчар  процесс. (рекрутинг(набор персонала) комбординг(погружение в задачи, работы компании))
5. Тех-поддержка. (тикет системы, чат боты для улучшения поддержки функционала)

Уровни автоматизации бизнес процессов:
1. Базовый – рутиные задачи.(оптимизируется рассылка email и sms, генерация отчетов, обработка данных) 
2. Средний – work flow автоматизация. (применяются VRM системы, настройка маршрутов согласования различных требований, используется для интеграции CRM)
3. Высокий – применяются RPA (роботизированная автоматизация процесса), предназначены для имитаций действий пользователя. 
4. ИИ – используется для анализа данных в чат ботах и в прогназирвонии.

Инструментальные средства для автоматизции
1. Low-code/No-code платформы
- Microsoft Power Automate - интеграция сервисов без программирования.
- Zapier - связь между веб-приложениями (Google Docs - Slack)
- Notion + Automate.io - управление проектами.

2. BPM -системы
- Camunda - open-source - решение для моделирования процессоров.
- Bizagi - Визуальный дизайн workflow
- Appian, Pega - корпоративные платформы.

3. RPA - инструменты
- UiPath - разработка программных роботов.
- utomation Anywhere - облачная автоматизация.

4. Интеграционные платформы.
- Apache Kafka - потоковая обработка данных.
- MuleSoft - API-интеграция.

Этапы внедрения автоматизации
1. Анализ процессов - появление узких мест. 
2. Выбор инструментов - зависит от бюджета и поставленных задач.
3. Прототепирование - тест на правильно-выстроенные процессы.
4. Внедрение и обучение - адаптация сотрудников к новым процессам, анвординг.
5. Мониторинг и оптимизация - сбор метрик(PPI).

### Конфиг Prettier
## Форматировать документ: shift + alt + f
{
# Максимальное количество символов на одной строке
    "printWidth": 80,
# Использовать символы табуляции для отступов
    "useTabs": true,
# Ширина отступа при табуляции (количество пробелов)
    "tabsWidth": 2,
# Использовать точки с запятой в конце выражений JavaScript
    "semi": true,
# Использовать одинарные кавычки или двойные 
    "singleQuote": true, / если одинарные
                    false(либо ничего), / для двойных
# Правило подстановки завершающей запятой [1,2,3,4]
    1. none - не добавлять финальную запятую
    2. es5 - добавить запятую там, где это допустимо
    3. all - везде, где синтаксис позволяет
    "traillingComa": "es5", 
# Оставлять ли пустое пространство в внутри квадратных или круглых скобках [ ] ( )
    "bracketSpacing": true / если оставляем
                    false / если не оставляем
# Включать ли аргументы функции в круглые скобки 
    1. always - всегда
    2. avoid - избегать круглых скобок при одном аргументе
    "arrowParens": "always",  
}

