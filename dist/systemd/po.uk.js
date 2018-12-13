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

    function transformAngular(data, prev) {
        var key, context, parts, value, result = { };
        for (key in data) {
            if (key === "")
                continue;
            parts = key.split("\u0004");
            value = data[key];
            if (parts[1]) {
                context = parts[0];
                key = parts[1];
            } else {
                context = "$$noContext";
                key = parts[0];
            }
            if (value[0] === null)
                value = value[1];
            else
                value = value.slice(1);
            if (!(key in result))
                result[key] = { };
            result[key][context] = value;
        }
        return angular.extend(prev, result);
    }

    /* Load into angular here */
    if (typeof angular === 'object') {
        try {
            module = angular.module(["gettext"]);
        } catch(ex) { console.log(ex); /* Either no angular or angular-gettext */ };
        if (module) {
            loaded = true;
            module.run(['gettextCatalog', function(gettextCatalog) {
                var lang = data[""]["language"];
                var prev = (gettextCatalog.getCurrentLanguage() == lang) ? gettextCatalog.strings : { };
                gettextCatalog.setStrings(lang, transformAngular(data, prev));
                gettextCatalog.setCurrentLanguage(lang);
            }]);
        }
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
 "Additional packages:": [
  null,
  "Додаткові пакунки:"
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
 "Asset Tag": [
  null,
  "Мітка активу"
 ],
 "At specific time": [
  null,
  "У вказаний момент часу"
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
 "CPU": [
  null,
  "Процесор"
 ],
 "Cached": [
  null,
  "Кеш"
 ],
 "Cancel": [
  null,
  "Скасувати"
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
 "Checking installed software": [
  null,
  "Перевіряємо встановлене програмне забезпечення"
 ],
 "Class": [
  null,
  "Клас"
 ],
 "Close": [
  null,
  "Закрити"
 ],
 "Command": [
  null,
  "Команда"
 ],
 "Condition failed": [
  null,
  "Не виконано умову"
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
 "Current boot": [
  null,
  "Поточне завантаження"
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
 "Disk I/O": [
  null,
  "Дисковий ввід/вивід"
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
 "Enable stored metrics…": [
  null,
  "Вмикання збереженої метрики…"
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
 "Hours": [
  null,
  "Години"
 ],
 "I/O Wait": [
  null,
  "Очікування В-В"
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
 "Instantiate": [
  null,
  "Створити екземпляр"
 ],
 "Invalid time zone": [
  null,
  "Некоректний часовий пояс"
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
 "Last 24 hours": [
  null,
  "Попередні 24 години"
 ],
 "Last 7 days": [
  null,
  "Попередні 7 днів"
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
 "Machine ID": [
  null,
  "Ід. комп’ютера"
 ],
 "Machine SSH Key Fingerprints": [
  null,
  "Відбитки ключів SSH комп’ютерів"
 ],
 "Manually": [
  null,
  "Вручну"
 ],
 "Memory": [
  null,
  "Пам'ять"
 ],
 "Memory & Swap": [
  null,
  "Пам'ять і резерв"
 ],
 "Minutes": [
  null,
  "Хвилини"
 ],
 "Model": [
  null,
  "Модель"
 ],
 "Monday": [
  null,
  "понеділок"
 ],
 "Name": [
  null,
  "Назва"
 ],
 "Network Traffic": [
  null,
  "Навантаження на мережу"
 ],
 "Nice": [
  null,
  "Пріоритетність"
 ],
 "No Delay": [
  null,
  "Без затримки"
 ],
 "No host keys found.": [
  null,
  "Не знайдено ключів вузлів."
 ],
 "Not authorized to upload-report": [
  null,
  "Не уповноважено на вивантаження звітів"
 ],
 "Not synchronized": [
  null,
  "Не синхронізовано"
 ],
 "Note": [
  null,
  "Примітка"
 ],
 "Notice and above": [
  null,
  "Зауваження і вище"
 ],
 "Off": [
  null,
  "Вимкнено"
 ],
 "Ok": [
  null,
  "Гаразд"
 ],
 "On": [
  null,
  "Увімкнено"
 ],
 "Only Emergency": [
  null,
  "Лише критичне"
 ],
 "Operating System": [
  null,
  "Операційна система"
 ],
 "PCI": [
  null,
  "PCI"
 ],
 "Paths": [
  null,
  "Шляхи"
 ],
 "Performance Profile": [
  null,
  "Профіль швидкодії"
 ],
 "Power Options": [
  null,
  "Параметри живлення"
 ],
 "Pretty Host Name": [
  null,
  "Зручна назва вузла"
 ],
 "Problem details": [
  null,
  "Подробиці щодо проблеми"
 ],
 "Problem info": [
  null,
  "Дані щодо проблеми"
 ],
 "Real Host Name": [
  null,
  "Справжня назва вузла"
 ],
 "Reboot": [
  null,
  "Перезавантажити"
 ],
 "Recent": [
  null,
  "Нещодавні"
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
 "Saturday": [
  null,
  "субота"
 ],
 "Save": [
  null,
  "Зберегти"
 ],
 "Seconds": [
  null,
  "Секунди"
 ],
 "Secure Shell Keys": [
  null,
  "Ключі захищеної оболонки (SSH)"
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
 "Set Time": [
  null,
  "Встановити час"
 ],
 "Severity": [
  null,
  "Важливість"
 ],
 "Show fingerprints": [
  null,
  "Показати відбитки"
 ],
 "Shut Down": [
  null,
  "Вимкнути"
 ],
 "Slot": [
  null,
  "Слот"
 ],
 "Sockets": [
  null,
  "Сокети"
 ],
 "Specific Time": [
  null,
  "У визначений час"
 ],
 "Store metrics": [
  null,
  "Метрика зберігання"
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
 "System Services": [
  null,
  "Служби системи"
 ],
 "System Time": [
  null,
  "Системний час"
 ],
 "Targets": [
  null,
  "Призначення"
 ],
 "Terminal": [
  null,
  "Термінал"
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
 ]
}));
