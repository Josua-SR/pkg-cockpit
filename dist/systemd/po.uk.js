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
  "x-generator": "Zanata 3.9.6"
 },
 "$0 Template": [
  null,
  "Шаблон $0"
 ],
 "$0 day": [
  "$0 days",
  "$0 день",
  "$0 дні",
  "$0 днів"
 ],
 "$0 hour": [
  "$0 hours",
  "$0 година",
  "$0 години",
  "$0 годин"
 ],
 "$0 minute": [
  "$0 minutes",
  "$0 хвилина",
  "$0 хвилини",
  "$0 хвилин"
 ],
 "$0 month": [
  "$0 months",
  "$0 місяць",
  "$0 місяці",
  "$0 місяців"
 ],
 "$0 week": [
  "$0 weeks",
  "$0 тиждень",
  "$0 тижні",
  "$0 тижнів"
 ],
 "$0 year": [
  "$0 years",
  "$0 рік",
  "$0 роки",
  "$0 років"
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
 "All In One": [
  null,
  "Усе-в-одному"
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
 "Blade": [
  null,
  "Blade"
 ],
 "Blade enclosure": [
  null,
  "Обгортка Blade"
 ],
 "Bus Expansion Chassis": [
  null,
  "Апаратний блок розширення каналу"
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
 "Class": [
  null,
  ""
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
 "Convertible": [
  null,
  "Змінюваний"
 ],
 "Create Timer": [
  null,
  "Створити таймер"
 ],
 "Create Timers": [
  null,
  "Створити таймери"
 ],
 "Current boot": [
  null,
  "Поточне завантаження"
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
 "Disable": [
  null,
  "Вимкнути"
 ],
 "Disabled": [
  null,
  "Вимкнено"
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
 "Embedded PC": [
  null,
  "Вбудований ПК"
 ],
 "Enable": [
  null,
  "Увімкнути"
 ],
 "Enable Forcefully": [
  null,
  "Примусово увімкнути"
 ],
 "Enabled": [
  null,
  "Увімкнено"
 ],
 "Entry": [
  null,
  "Запис"
 ],
 "Error": [
  null,
  "Помилка"
 ],
 "Everything": [
  null,
  "Все"
 ],
 "Expansion Chassis": [
  null,
  "Апаратний блок розширення"
 ],
 "Free": [
  null,
  "Вільно"
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
 "Id": [
  null,
  "Ід."
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
 "Mask": [
  null,
  "Маска"
 ],
 "Mask Forcefully": [
  null,
  "Примусово замаскувати"
 ],
 "Memory": [
  null,
  "Пам'ять"
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
 "Model": [
  null,
  ""
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
 "Notebook": [
  null,
  "Ноутбук"
 ],
 "Off": [
  null,
  "Вимкнено"
 ],
 "On": [
  null,
  "Увімкнено"
 ],
 "Only Problems": [
  null,
  "Лише проблеми"
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
  ""
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
 "Preset": [
  null,
  "Шаблон"
 ],
 "Preset Forcefully": [
  null,
  "Примусово початкові налаштування"
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
 "Problems, Errors": [
  null,
  "Проблеми, помилки"
 ],
 "Problems, Errors, Warnings": [
  null,
  "Проблеми, помилки, попередження"
 ],
 "Problems, Errors, Warnings, Notices": [
  null,
  "Проблеми, помилки, попередження, зауваження"
 ],
 "RAID Chassis": [
  null,
  "Апаратний блок RAID"
 ],
 "Rack Mount Chassis": [
  null,
  "Апаратний блок монтування стійок"
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
 "Show fingerprints": [
  null,
  "Показати відбитки"
 ],
 "Shut Down": [
  null,
  "Вимкнути"
 ],
 "Since $0": [
  null,
  "З $0"
 ],
 "Slot": [
  null,
  ""
 ],
 "Sockets": [
  null,
  "Сокети"
 ],
 "Space-saving Computer": [
  null,
  "Компактний комп'ютер"
 ],
 "Specific Time": [
  null,
  "У визначений час"
 ],
 "Start": [
  null,
  "Почати"
 ],
 "State": [
  null,
  "Стан"
 ],
 "Static": [
  null,
  "Статичний"
 ],
 "Stick PC": [
  null,
  "Паличковий ПК"
 ],
 "Stop": [
  null,
  "Зупинити"
 ],
 "Store Performance Data": [
  null,
  "Зберігати дані щодо швидкодії"
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
 "System Services": [
  null,
  "Служби системи"
 ],
 "System Time": [
  null,
  "Системний час"
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
 "The user <b>$0</b> does not have permissions for creating timers": [
  null,
  "Користувачу <b>$0</b> заборонено створювати таймери"
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
 "This unit is an instance of the $0 template.": [
  null,
  "Цей модуль є екземпляром шаблона $0."
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
 "Tower": [
  null,
  "Башточка"
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
 "Unmask": [
  null,
  "Розмаскувати"
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
  ""
 ],
 "Version": [
  null,
  "Версія"
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
