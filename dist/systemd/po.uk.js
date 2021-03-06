(function (root, data) {
    var loaded, module;

    /* Load into AMD if desired */
    if (typeof define === 'function' && define.amd) {
        define(data);
        loaded = true;
    }

    /* Load into Cockpit locale */
    if (typeof cockpit === 'object') {
        cockpit.locale(data)
        loaded = true;
    }

    if (!loaded)
        root.po = data;

/* The syntax of this line is important  by po2json */
}(this, {
 "": {'plural-forms':function(n) {
var nplurals, plural;
nplurals=3; plural=(n%10==1 && n%100!=11 ? 0 : n%10>=2 && n%10<=4 && (n%100<10 || n%100>=20) ? 1 : 2);
return plural;
},
  "language": "uk",
  "x-generator": "Zanata 4.6.2"
 },
 "$0 Template": [
  null,
  "Шаблон $0"
 ],
 "$0 is not available from any repository.": [
  null,
  "$0 немає у жодному зі сховищ."
 ],
 "$0 will be installed.": [
  null,
  "Буде встановлено $0."
 ],
 "1 Minute": [
  null,
  "1 хвилина"
 ],
 "1 day": [
  null,
  "1 день"
 ],
 "1 hour": [
  null,
  "1 година"
 ],
 "1 min": [
  null,
  "1 хв."
 ],
 "1 week": [
  null,
  "1 тиждень"
 ],
 "10th": [
  null,
  "10-е"
 ],
 "11th": [
  null,
  "11-е"
 ],
 "12th": [
  null,
  "12-е"
 ],
 "13th": [
  null,
  "13-е"
 ],
 "14th": [
  null,
  "14-е"
 ],
 "15th": [
  null,
  "15-е"
 ],
 "16th": [
  null,
  "16-е"
 ],
 "17th": [
  null,
  "17-е"
 ],
 "18th": [
  null,
  "18-е"
 ],
 "19th": [
  null,
  "19-е"
 ],
 "1st": [
  null,
  "1-е"
 ],
 "2 min": [
  null,
  "2 хв."
 ],
 "20 Minutes": [
  null,
  "20 хвилин"
 ],
 "20th": [
  null,
  "20-е"
 ],
 "21st": [
  null,
  "21-е"
 ],
 "22nd": [
  null,
  "22-е"
 ],
 "23rd": [
  null,
  "23-є"
 ],
 "24th": [
  null,
  "24-е"
 ],
 "25th": [
  null,
  "25-е"
 ],
 "26th": [
  null,
  "26-е"
 ],
 "27th": [
  null,
  "27-е"
 ],
 "28th": [
  null,
  "28-е"
 ],
 "29th": [
  null,
  "29-е"
 ],
 "2nd": [
  null,
  "2-е"
 ],
 "3 min": [
  null,
  "3 хв."
 ],
 "30th": [
  null,
  "30-е"
 ],
 "31st": [
  null,
  "31-е"
 ],
 "3rd": [
  null,
  "3-є"
 ],
 "4 min": [
  null,
  "4 хв."
 ],
 "40 Minutes": [
  null,
  "40 хвилин"
 ],
 "4th": [
  null,
  "4-е"
 ],
 "5 Minutes": [
  null,
  "5 хвилин"
 ],
 "5 min": [
  null,
  "5 хв."
 ],
 "5 minutes": [
  null,
  "5 хвилин"
 ],
 "5th": [
  null,
  "5-е"
 ],
 "6 hours": [
  null,
  "6 годин"
 ],
 "60 Minutes": [
  null,
  "60 хвилин"
 ],
 "6th": [
  null,
  "6"
 ],
 "7th": [
  null,
  "7"
 ],
 "8th": [
  null,
  "8"
 ],
 "9th": [
  null,
  "9-е"
 ],
 "Absent": [
  null,
  "Відсутній"
 ],
 "Active since ": [
  null,
  "Активний з "
 ],
 "Additional actions": [
  null,
  "Додаткові дії"
 ],
 "Additional packages:": [
  null,
  "Додаткові пакунки:"
 ],
 "Advanced TCA": [
  null,
  "Розширене TCA"
 ],
 "After": [
  null,
  "Після"
 ],
 "After system boot": [
  null,
  "Після завантаження системи"
 ],
 "Alert and above": [
  null,
  "Тривога і вище"
 ],
 "All": [
  null,
  "Всі"
 ],
 "All In One": [
  null,
  "Усе-в-одному"
 ],
 "Allow running (unmask)": [
  null,
  "Дозволити запуск (зняти маску)"
 ],
 "Appearance:": [
  null,
  "Вигляд:"
 ],
 "Asset Tag": [
  null,
  "Мітка активу"
 ],
 "At specific time": [
  null,
  "У вказаний момент часу"
 ],
 "Automatic Startup": [
  null,
  "Автоматичний запуск"
 ],
 "Automatically starts": [
  null,
  "Запускати автоматично"
 ],
 "Automatically using NTP": [
  null,
  "Автоматично на основі NTP"
 ],
 "Automatically using specific NTP servers": [
  null,
  "Автоматично за допомогою певних серверів NTP"
 ],
 "BIOS": [
  null,
  "BIOS"
 ],
 "BIOS date": [
  null,
  "Дата BIOS"
 ],
 "BIOS version": [
  null,
  "Версія BIOS"
 ],
 "Before": [
  null,
  "До"
 ],
 "Binds To": [
  null,
  "Пов'язано з"
 ],
 "Black": [
  null,
  "Чорний"
 ],
 "Blade": [
  null,
  "Blade"
 ],
 "Blade enclosure": [
  null,
  "Обгортка Blade"
 ],
 "Bound By": [
  null,
  "Пов'язано"
 ],
 "Bug Fix Updates Available": [
  null,
  "Доступні оновлення із виправленнями вад"
 ],
 "Bus Expansion Chassis": [
  null,
  "Апаратний блок розширення каналу"
 ],
 "CPU": [
  null,
  "Процесор"
 ],
 "CPU Security": [
  null,
  "Захист процесора"
 ],
 "CPU Security Toggles": [
  null,
  "Перемикачі захисту процесора"
 ],
 "Cached": [
  null,
  "Кеш"
 ],
 "Cancel": [
  null,
  "Скасувати"
 ],
 "Cannot schedule event in the past": [
  null,
  "Не можна планувати подію на минуле"
 ],
 "Change": [
  null,
  "Змінити"
 ],
 "Change Host Name": [
  null,
  "Змінити назву вузла"
 ],
 "Change System Time": [
  null,
  "Змінити системний час"
 ],
 "Checking for updates…": [
  null,
  "Шукаємо оновлення…"
 ],
 "Checking installed software": [
  null,
  "Перевіряємо встановлене програмне забезпечення"
 ],
 "Class": [
  null,
  "Клас"
 ],
 "Clear All Filters": [
  null,
  "Зняти усі фільтри"
 ],
 "Click to see system hardware information": [
  null,
  "Натисніть, щоб побачити дані щодо обладнання системи"
 ],
 "Close": [
  null,
  "Закрити"
 ],
 "Command": [
  null,
  "Команда"
 ],
 "Compact PCI": [
  null,
  "Компактний PCI"
 ],
 "Condition $0=$1 was not met": [
  null,
  "Умову $0=$1 не виконано"
 ],
 "Condition failed": [
  null,
  "Не виконано умову"
 ],
 "Conflicted By": [
  null,
  "Конфліктує за"
 ],
 "Conflicts": [
  null,
  "Конфліктує"
 ],
 "Consists Of": [
  null,
  "Складається з"
 ],
 "Convertible": [
  null,
  "Змінюваний"
 ],
 "Copy": [
  null,
  "Копіювати"
 ],
 "Create Timer": [
  null,
  "Створити таймер"
 ],
 "Create Timers": [
  null,
  "Створити таймери"
 ],
 "Critical and above": [
  null,
  "Критичні і вище"
 ],
 "Ctrl+Insert": [
  null,
  "Ctrl+Insert"
 ],
 "Current boot": [
  null,
  "Поточне завантаження"
 ],
 "Dark": [
  null,
  "Темний"
 ],
 "Debug and above": [
  null,
  "Діагностика і вище"
 ],
 "Delay": [
  null,
  "Затримка"
 ],
 "Description": [
  null,
  "Опис"
 ],
 "Desktop": [
  null,
  "Робоча станція"
 ],
 "Detachable": [
  null,
  "Змінний"
 ],
 "Details": [
  null,
  "Подробиці"
 ],
 "Disable simultaneous multithreading": [
  null,
  "Вимкнути багатопотоковість"
 ],
 "Disabled": [
  null,
  "Вимкнено"
 ],
 "Disallow running (mask)": [
  null,
  "Заборонити запуск (замаскувати)"
 ],
 "Disk I/O": [
  null,
  "Дисковий ввід/вивід"
 ],
 "Docking Station": [
  null,
  "Станція заряджання"
 ],
 "Domain": [
  null,
  "Домен"
 ],
 "Don't Repeat": [
  null,
  "Не повторювати"
 ],
 "Downloading $0": [
  null,
  "Отримуємо $0"
 ],
 "Dual Rank": [
  null,
  "Подвійний ранг"
 ],
 "Embedded PC": [
  null,
  "Вбудований ПК"
 ],
 "Enable stored metrics…": [
  null,
  "Вмикання збереженої метрики…"
 ],
 "Enabled": [
  null,
  "Увімкнено"
 ],
 "Enhancement Updates Available": [
  null,
  "Доступні оновлення із поліпшеннями"
 ],
 "Entry": [
  null,
  "Запис"
 ],
 "Error": [
  null,
  "Помилка"
 ],
 "Error and above": [
  null,
  "Помилка і вище"
 ],
 "Everything": [
  null,
  "Все"
 ],
 "Expansion Chassis": [
  null,
  "Апаратний блок розширення"
 ],
 "Failed to start": [
  null,
  "Не вдалося запустити"
 ],
 "Filter by name or description...": [
  null,
  "Фільтрувати за назвою або описом…"
 ],
 "Forbidden from running": [
  null,
  "Заборонено запускати"
 ],
 "Friday": [
  null,
  "п'ятниця"
 ],
 "General": [
  null,
  "Загальний"
 ],
 "Go to": [
  null,
  "Перейти до"
 ],
 "Go to now": [
  null,
  "Перейти зараз"
 ],
 "Hand Held": [
  null,
  "Портативний"
 ],
 "Hardware": [
  null,
  "Обладнання"
 ],
 "Hardware Information": [
  null,
  "Дані щодо обладнання"
 ],
 "Host Name": [
  null,
  "Назва вузла"
 ],
 "Hour : Minute": [
  null,
  "Година : Хвилина"
 ],
 "Hour needs to be a number between 0-23": [
  null,
  "Години слід вказувати у форматі числа від 0 до 23"
 ],
 "Hours": [
  null,
  "Години"
 ],
 "I/O Wait": [
  null,
  "Очікування В-В"
 ],
 "ID": [
  null,
  "Ід."
 ],
 "Info and above": [
  null,
  "Інформація і вище"
 ],
 "Install": [
  null,
  "Встановити"
 ],
 "Install Software": [
  null,
  "Встановити програмне забезпечення"
 ],
 "Installing $0": [
  null,
  "Встановлюємо $0"
 ],
 "Instance of template: ": [
  null,
  ""
 ],
 "Instantiate": [
  null,
  "Створити екземпляр"
 ],
 "Invalid date format": [
  null,
  "Некоректний формат дати"
 ],
 "Invalid date format and invalid time format": [
  null,
  "Некоректний формат дати і часу"
 ],
 "Invalid date format.": [
  null,
  "Некоректний формат дати."
 ],
 "Invalid number.": [
  null,
  "Некоректне число."
 ],
 "Invalid time format": [
  null,
  "Некоректний формат визначення часу"
 ],
 "Invalid time zone": [
  null,
  "Некоректний часовий пояс"
 ],
 "IoT Gateway": [
  null,
  "Шлюз IoT"
 ],
 "Joins Namespace Of": [
  null,
  "Долучається до простору назв"
 ],
 "Journal": [
  null,
  "Журнал"
 ],
 "Journal entry": [
  null,
  "Запис журналу"
 ],
 "Journal entry not found": [
  null,
  "Не знайдено запису журналу"
 ],
 "Kernel": [
  null,
  "Ядро"
 ],
 "Laptop": [
  null,
  "Переносний ПК"
 ],
 "Last 24 hours": [
  null,
  "Попередні 24 години"
 ],
 "Last 7 days": [
  null,
  "Попередні 7 днів"
 ],
 "Last Trigger": [
  null,
  "Останній перемикач"
 ],
 "Light": [
  null,
  "Світлий"
 ],
 "Load earlier entries": [
  null,
  "Завантажити попередні записи"
 ],
 "Loading...": [
  null,
  "Завантаження…"
 ],
 "Log messages": [
  null,
  "Повідомлення журналу"
 ],
 "Logs": [
  null,
  "Журнали"
 ],
 "Low Profile Desktop": [
  null,
  "Низькопрофільна робоча станція"
 ],
 "Lunch Box": [
  null,
  "Пусковий комп'ютер"
 ],
 "Machine ID": [
  null,
  "Ід. комп’ютера"
 ],
 "Machine SSH Key Fingerprints": [
  null,
  "Відбитки ключів SSH комп’ютерів"
 ],
 "Main Server Chassis": [
  null,
  "Апаратний блок основного сервера"
 ],
 "Manually": [
  null,
  "Вручну"
 ],
 "Mask Service": [
  null,
  "Замаскувати службу"
 ],
 "Masked": [
  null,
  "Замасковано"
 ],
 "Masking service prevents all dependant units from running. This can have bigger impact than anticipated. Please confirm that you want to mask this unit.": [
  null,
  "Маскування служби забороняє запуск усіх залежних модулів. Це може спричинити значніші наслідки, ніж ви очікуєте. Будь ласка, підтвердьте, що ви хочете замаскувати цей модуль."
 ],
 "Memory": [
  null,
  "Пам'ять"
 ],
 "Memory & Swap": [
  null,
  "Пам'ять і резерв"
 ],
 "Memory Technology": [
  null,
  "Технологія пам'яті"
 ],
 "Message to logged in users": [
  null,
  "Повідомлення користувачам, які увійшли"
 ],
 "Mini PC": [
  null,
  "Міні-ПК"
 ],
 "Mini Tower": [
  null,
  "Міні-башточка"
 ],
 "Minute needs to be a number between 0-59": [
  null,
  "Хвилини слід вказувати у форматі числа від 0 до 59"
 ],
 "Minutes": [
  null,
  "Хвилини"
 ],
 "Mitigations": [
  null,
  "Запобіжні заходи"
 ],
 "Model": [
  null,
  "Модель"
 ],
 "Monday": [
  null,
  "понеділок"
 ],
 "Multi-system Chassis": [
  null,
  "Багатосистемний апаратний блок"
 ],
 "NTP Server": [
  null,
  "Сервер NTP"
 ],
 "Name": [
  null,
  "Назва"
 ],
 "Need at least one NTP server": [
  null,
  "Потрібен принаймні один сервер NTP"
 ],
 "Network Traffic": [
  null,
  "Навантаження на мережу"
 ],
 "Next Run": [
  null,
  "Наступний запуск"
 ],
 "Nice": [
  null,
  "Пріоритетність"
 ],
 "No Delay": [
  null,
  "Без затримки"
 ],
 "No Matching Results": [
  null,
  "Нічого не знайдено"
 ],
 "No host keys found.": [
  null,
  "Не знайдено ключів вузлів."
 ],
 "Not authorized to upload-report": [
  null,
  "Не уповноважено на вивантаження звітів"
 ],
 "Not running": [
  null,
  "Зупинено"
 ],
 "Not synchronized": [
  null,
  "Не синхронізовано"
 ],
 "Note": [
  null,
  "Примітка"
 ],
 "Notebook": [
  null,
  "Ноутбук"
 ],
 "Notice and above": [
  null,
  "Зауваження і вище"
 ],
 "Ok": [
  null,
  "Гаразд"
 ],
 "On Failure": [
  null,
  "Якщо помилка"
 ],
 "Only Emergency": [
  null,
  "Лише критичне"
 ],
 "Only alphabets, numbers, : , _ , . , @ , - are allowed.": [
  null,
  "Можна використовувати лише літери, цифри, : , _ , . , @ , -."
 ],
 "Operating System": [
  null,
  "Операційна система"
 ],
 "Other": [
  null,
  "Інше"
 ],
 "PCI": [
  null,
  "PCI"
 ],
 "PackageKit crashed": [
  null,
  "Аварійне завершення роботи PackageKit"
 ],
 "Part Of": [
  null,
  "Частина"
 ],
 "Paste": [
  null,
  "Вставити"
 ],
 "Path": [
  null,
  "Шлях"
 ],
 "Paths": [
  null,
  "Шляхи"
 ],
 "Performance Profile": [
  null,
  "Профіль швидкодії"
 ],
 "Peripheral Chassis": [
  null,
  "Периферійний апаратний блок"
 ],
 "Pizza Box": [
  null,
  "З коробку для піци"
 ],
 "Portable": [
  null,
  "Портативний"
 ],
 "Power Options": [
  null,
  "Параметри живлення"
 ],
 "Present": [
  null,
  "Поточна"
 ],
 "Pretty Host Name": [
  null,
  "Зручна назва вузла"
 ],
 "Previous boot": [
  null,
  "Попереднє завантаження"
 ],
 "Problem details": [
  null,
  "Подробиці щодо проблеми"
 ],
 "Problem info": [
  null,
  "Дані щодо проблеми"
 ],
 "Propagates Reload To": [
  null,
  "Поширює перезавантаження на"
 ],
 "RAID Chassis": [
  null,
  "Апаратний блок RAID"
 ],
 "Rack Mount Chassis": [
  null,
  "Апаратний блок монтування стійок"
 ],
 "Rank": [
  null,
  "Ранг"
 ],
 "Read more...": [
  null,
  "Докладніше…"
 ],
 "Read-only": [
  null,
  "Лише читання"
 ],
 "Real Host Name": [
  null,
  "Справжня назва вузла"
 ],
 "Real host name can only contain lower-case characters, digits, dashes, and periods (with populated subdomains)": [
  null,
  "Назва справжнього вузла має складатися лише з літер у нижньому регістрі, цифр, дефісів та точок (із заповненими піддоменами)"
 ],
 "Real host name must be 64 characters or less": [
  null,
  "Назва справжнього вузла має складатися не більше ніж з 64 символів"
 ],
 "Reboot": [
  null,
  "Перезавантажити"
 ],
 "Recent": [
  null,
  "Нещодавні"
 ],
 "Reload": [
  null,
  "Перезавантажити"
 ],
 "Reload Propagated From": [
  null,
  "Поширене перезавантаження з"
 ],
 "Removals:": [
  null,
  "Вилучення:"
 ],
 "Removing $0": [
  null,
  "Вилучаємо $0"
 ],
 "Repeat Daily": [
  null,
  "Повторювати щодня"
 ],
 "Repeat Hourly": [
  null,
  "Повторювати щогодини"
 ],
 "Repeat Monthly": [
  null,
  "Повторювати щомісяця"
 ],
 "Repeat Weekly": [
  null,
  "Повторювати щотижня"
 ],
 "Repeat Yearly": [
  null,
  "Повторювати щороку"
 ],
 "Report": [
  null,
  "Звіт"
 ],
 "Reported": [
  null,
  "Повідомлено"
 ],
 "Reporter 'reporter-ureport' not found.": [
  null,
  "Не знайдено засіб звітування «reporter-ureport»."
 ],
 "Reporting was unsucessful. Try running `reporter-ureport -d ": [
  null,
  "Не вдалося надіслати звіт. Спробуйте віддати команду «reporter-ureport -d "
 ],
 "Required By": [
  null,
  "Потрібен для"
 ],
 "Required by ": [
  null,
  "Потрібен для"
 ],
 "Requires": [
  null,
  "Потребує"
 ],
 "Requires administration access to edit": [
  null,
  "Потребує адміністративного доступу для редагування"
 ],
 "Requisite": [
  null,
  "Потрібний"
 ],
 "Requisite Of": [
  null,
  "Потрібний для"
 ],
 "Reset": [
  null,
  "Скинути"
 ],
 "Restart": [
  null,
  "Перезапустити"
 ],
 "Run": [
  null,
  "Запустити"
 ],
 "Running": [
  null,
  "Працює"
 ],
 "Saturday": [
  null,
  "субота"
 ],
 "Save": [
  null,
  "Зберегти"
 ],
 "Save and reboot": [
  null,
  "Зберегти і перезавантажити"
 ],
 "Sealed-case PC": [
  null,
  "ПК з опломбованим корпусом"
 ],
 "Seconds": [
  null,
  "Секунди"
 ],
 "Secure Shell Keys": [
  null,
  "Ключі захищеної оболонки (SSH)"
 ],
 "Security Updates Available": [
  null,
  "Доступні оновлення захисту"
 ],
 "Service": [
  null,
  "Служба"
 ],
 "Service Logs": [
  null,
  "Журнали служб"
 ],
 "Service name": [
  null,
  "Назва служби"
 ],
 "Services": [
  null,
  "Служби"
 ],
 "Set Host name": [
  null,
  "Встановити назву вузла"
 ],
 "Set Time": [
  null,
  "Встановити час"
 ],
 "Severity": [
  null,
  "Важливість"
 ],
 "Shift+Insert": [
  null,
  "Shift+Insert"
 ],
 "Show fingerprints": [
  null,
  "Показати відбитки"
 ],
 "Shut Down": [
  null,
  "Вимкнути"
 ],
 "Single Rank": [
  null,
  "Єдиний ранг"
 ],
 "Size": [
  null,
  "Розмір"
 ],
 "Slot": [
  null,
  "Слот"
 ],
 "Sockets": [
  null,
  "Сокети"
 ],
 "Software-based workarounds help prevent CPU security issues. These mitigations have the side effect of reducing performance. Change these settings at your own risk.": [
  null,
  "Програмні заходи допомагають усунути проблеми із захистом процесора. Ці заходи мають побіжний ефект — зниження швидкодії. Змінюйте ці параметри, лише якщо повністю усвідомлюєте наслідки."
 ],
 "Space-saving Computer": [
  null,
  "Компактний комп'ютер"
 ],
 "Specific Time": [
  null,
  "У визначений час"
 ],
 "Speed": [
  null,
  "Швидкість"
 ],
 "Start": [
  null,
  "Почати"
 ],
 "Start Service": [
  null,
  "Запустити службу"
 ],
 "Start and Enable": [
  null,
  "Запустити і увімкнути"
 ],
 "State": [
  null,
  "Стан"
 ],
 "Static": [
  null,
  "Статичний"
 ],
 "Status": [
  null,
  "Стан"
 ],
 "Stick PC": [
  null,
  "Паличковий ПК"
 ],
 "Stop": [
  null,
  "Зупинити"
 ],
 "Stop and Disable": [
  null,
  "Зупинити і вимкнути"
 ],
 "Store Metrics": [
  null,
  "Метрика зберігання"
 ],
 "Sub Chassis": [
  null,
  "Підблок"
 ],
 "Sub Notebook": [
  null,
  "Підноутбук"
 ],
 "Sunday": [
  null,
  "неділя"
 ],
 "Swap Used": [
  null,
  "Використано резерву"
 ],
 "Synchronized": [
  null,
  "Синхронізовано"
 ],
 "Synchronized with {{Server}}": [
  null,
  "Синхронізовано із {{Server}}"
 ],
 "System": [
  null,
  "Система"
 ],
 "System Information": [
  null,
  "Дані щодо системи"
 ],
 "System Not Registered": [
  null,
  "Систему не зареєстровано"
 ],
 "System Services": [
  null,
  "Служби системи"
 ],
 "System Time": [
  null,
  "Системний час"
 ],
 "System Up To Date": [
  null,
  "Система не потребує оновлення"
 ],
 "Tablet": [
  null,
  "Планшет"
 ],
 "Targets": [
  null,
  "Призначення"
 ],
 "Terminal": [
  null,
  "Термінал"
 ],
 "The user $0 is not permitted to change cpu security mitigations": [
  null,
  "Користувачу $0 заборонено змінювати заходи захисту процесора"
 ],
 "The user <b>$0</b> does not have permissions for creating timers": [
  null,
  "Користувачу <b>$0</b> заборонено створювати таймери"
 ],
 "The user <b>$0</b> is not permitted to change the system time": [
  null,
  "Користувачу <b>$0</b> заборонено змінювати час системи"
 ],
 "The user <b>$0</b> is not permitted to modify hostnames": [
  null,
  "Користувачу <b>$0</b> не дозволено змінювати назви вузлів"
 ],
 "The user <b>$0</b> is not permitted to shutdown or restart this server": [
  null,
  "Користувачеві <b>$0</b> заборонено вимикати або перезапускати цей сервер"
 ],
 "This day doesn't exist in all months.<br> The timer will only be executed in months that have 31st.": [
  null,
  "Цей день є не в усіх місяцях.<br> Таймер виконуватиметься лише у місяці, у яких є 31 день."
 ],
 "This field cannot be empty.": [
  null,
  "Вміст цього поля не може бути порожнім."
 ],
 "This unit is not designed to be enabled explicitly.": [
  null,
  "Цей модуль не створено для вмикання явним чином."
 ],
 "Thursday": [
  null,
  "четвер"
 ],
 "Time Zone": [
  null,
  "Часовий пояс"
 ],
 "Timers": [
  null,
  "Таймери"
 ],
 "Total size: $0": [
  null,
  "Загальний розмір: $0"
 ],
 "Tower": [
  null,
  "Башточка"
 ],
 "Triggered By": [
  null,
  "Причина вмикання"
 ],
 "Triggers": [
  null,
  "Умовні зміни"
 ],
 "Trying to synchronize with {{Server}}": [
  null,
  "Намагаємося синхронізуватися з {{Server}}"
 ],
 "Tuesday": [
  null,
  "вівторок"
 ],
 "Type": [
  null,
  "Тип"
 ],
 "Unknown": [
  null,
  "Невідомий"
 ],
 "Updates Available": [
  null,
  "Доступні оновлення"
 ],
 "Updating status...": [
  null,
  "Оновлюємо стан…"
 ],
 "Usage of $0 CPU core": [
  "Usage of $0 CPU cores",
  "Використання $0 ядра процесора",
  "Використання $0 ядер процесора",
  "Використання $0 ядер процесора"
 ],
 "Used": [
  null,
  "Використано"
 ],
 "User": [
  null,
  "Користувач"
 ],
 "Vendor": [
  null,
  "Постачальник"
 ],
 "Version": [
  null,
  "Версія"
 ],
 "Waiting for other software management operations to finish": [
  null,
  "Очікуємо на завершення інших дій із програмним забезпеченням"
 ],
 "Wanted By": [
  null,
  "Бажаний для"
 ],
 "Wants": [
  null,
  "Бажає"
 ],
 "Warning and above": [
  null,
  "Попередження і вище"
 ],
 "Wednesday": [
  null,
  "середа"
 ],
 "Weeks": [
  null,
  "Тижні"
 ],
 "White": [
  null,
  "Білий"
 ],
 "[$0 bytes of binary data]": [
  null,
  "[$0 байтів двійкових даних]"
 ],
 "[binary data]": [
  null,
  "[двійкові дані]"
 ],
 "[no data]": [
  null,
  "[немає даних]"
 ],
 "failed to list ssh host keys: $0": [
  null,
  "не вдалося побудувати список ключів SSH вузла: $0"
 ],
 "of $0 CPU core": [
  "of $0 CPU cores",
  "з $0 ядра процесора",
  "з $0 ядер процесора",
  "з $0 ядер процесора"
 ],
 "undefined": [
  null,
  "не визначено"
 ],
 "unknown": [
  null,
  "невідомо"
 ],
 "page-title\u0004CPU Status": [
  null,
  "Стан процесора"
 ],
 "page-title\u0004Memory": [
  null,
  "Пам'ять"
 ]
}));
