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
  "language": "ru",
  "x-generator": "Zanata 4.6.2"
 },
 "$0 Template": [
  null,
  "$0 шаблон"
 ],
 "$0 is not available from any repository.": [
  null,
  "$0 недоступен из какого-либо репозитория."
 ],
 "$0 will be installed.": [
  null,
  "$0 будет установлен."
 ],
 "1 Minute": [
  null,
  "1 минута"
 ],
 "1 day": [
  null,
  "1 день"
 ],
 "1 hour": [
  null,
  "1 час"
 ],
 "1 min": [
  null,
  "1 минута"
 ],
 "1 week": [
  null,
  "1 неделя"
 ],
 "10th": [
  null,
  "десятые"
 ],
 "11th": [
  null,
  "11"
 ],
 "12th": [
  null,
  "12"
 ],
 "13th": [
  null,
  "13-й"
 ],
 "14th": [
  null,
  "четырнадцатый"
 ],
 "15th": [
  null,
  "пятнадцатый"
 ],
 "16th": [
  null,
  "шестнадцатый"
 ],
 "17th": [
  null,
  "семнадцатый"
 ],
 "18th": [
  null,
  "восемнадцатый"
 ],
 "19th": [
  null,
  "девятнадцатый"
 ],
 "1st": [
  null,
  "первый"
 ],
 "2 min": [
  null,
  "2 мин."
 ],
 "20 Minutes": [
  null,
  "20 минут"
 ],
 "20th": [
  null,
  "двадцатый"
 ],
 "21st": [
  null,
  "двадцать первый"
 ],
 "22nd": [
  null,
  "двадцать второй"
 ],
 "23rd": [
  null,
  "двадцать третий"
 ],
 "24th": [
  null,
  "двадцать четвёртая"
 ],
 "25th": [
  null,
  "двадцать пятый"
 ],
 "26th": [
  null,
  "двадцать шестой"
 ],
 "27th": [
  null,
  "двадцать седьмой"
 ],
 "28th": [
  null,
  "двадцать восьмой"
 ],
 "29th": [
  null,
  "двадцать девятая"
 ],
 "2nd": [
  null,
  "второй"
 ],
 "3 min": [
  null,
  "3 мин."
 ],
 "30th": [
  null,
  "тридцатые"
 ],
 "31st": [
  null,
  "тридцать первый"
 ],
 "3rd": [
  null,
  "третий"
 ],
 "4 min": [
  null,
  "4 мин."
 ],
 "40 Minutes": [
  null,
  "40 минут"
 ],
 "4th": [
  null,
  "четвёртая"
 ],
 "5 Minutes": [
  null,
  "5 минут"
 ],
 "5 min": [
  null,
  "5 минут"
 ],
 "5 minutes": [
  null,
  "5 минут"
 ],
 "5th": [
  null,
  "пятые"
 ],
 "6 hours": [
  null,
  "6 часов"
 ],
 "60 Minutes": [
  null,
  "60 минут"
 ],
 "6th": [
  null,
  "шестые"
 ],
 "7th": [
  null,
  "седьмые"
 ],
 "8th": [
  null,
  "восьмых"
 ],
 "9th": [
  null,
  "девятую"
 ],
 "Additional packages:": [
  null,
  "Дополнительные пакеты:"
 ],
 "Advanced TCA": [
  null,
  "Расширенный TCA"
 ],
 "After": [
  null,
  "После"
 ],
 "After system boot": [
  null,
  "После загрузки системы"
 ],
 "Alert and above": [
  null,
  "Предупреждение и выше"
 ],
 "All In One": [
  null,
  "Все в одном"
 ],
 "Asset Tag": [
  null,
  "Тег секции"
 ],
 "At specific time": [
  null,
  "В определенное время"
 ],
 "Automatic Startup": [
  null,
  ""
 ],
 "Automatically using NTP": [
  null,
  "Автоматическое использование NTP"
 ],
 "Automatically using specific NTP servers": [
  null,
  "Автоматическое использование определенных NTP-серверов"
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
  "Версия BIOS"
 ],
 "Before": [
  null,
  "До"
 ],
 "Binds To": [
  null,
  "Привязывается к"
 ],
 "Blade": [
  null,
  "лопасть"
 ],
 "Blade enclosure": [
  null,
  "Корпус лезвия"
 ],
 "Bound By": [
  null,
  "Связано"
 ],
 "Bug Fix Updates Available": [
  null,
  "Доступны исправления ошибок"
 ],
 "Bus Expansion Chassis": [
  null,
  "Шина расширения шины"
 ],
 "CPU": [
  null,
  "ЦП"
 ],
 "Cached": [
  null,
  "Сохраненная копия"
 ],
 "Cancel": [
  null,
  "Отмена"
 ],
 "Cannot schedule event in the past": [
  null,
  "Невозможно запланировать событие в прошлом"
 ],
 "Change": [
  null,
  "Изменить"
 ],
 "Change Host Name": [
  null,
  "Изменить имя хоста"
 ],
 "Change System Time": [
  null,
  "Изменить системное время"
 ],
 "Checking for updates…": [
  null,
  "Проверка обновлений…"
 ],
 "Checking installed software": [
  null,
  "Проверка установленного программного обеспечения"
 ],
 "Class": [
  null,
  "Класс"
 ],
 "Click to see system hardware information": [
  null,
  "Нажмите, чтобы просмотреть информацию о системном оборудовании"
 ],
 "Close": [
  null,
  "Закрыть"
 ],
 "Command": [
  null,
  "Команда"
 ],
 "Compact PCI": [
  null,
  "Компактный PCI"
 ],
 "Condition $0=$1 was not met": [
  null,
  "Состояние $0знак равно$1 не было выполнено"
 ],
 "Condition failed": [
  null,
  "Не удалось выполнить условие"
 ],
 "Conflicted By": [
  null,
  "Конфликт"
 ],
 "Conflicts": [
  null,
  "Конфликты"
 ],
 "Consists Of": [
  null,
  "Состоит из"
 ],
 "Convertible": [
  null,
  "конвертируемый"
 ],
 "Create Timer": [
  null,
  "Создать таймер"
 ],
 "Create Timers": [
  null,
  "Создание таймеров"
 ],
 "Critical and above": [
  null,
  "Критический и выше"
 ],
 "Current boot": [
  null,
  "Текущая загрузка"
 ],
 "Debug and above": [
  null,
  "Отладка и выше"
 ],
 "Delay": [
  null,
  "задержка"
 ],
 "Description": [
  null,
  "Описание"
 ],
 "Desktop": [
  null,
  "Рабочий стол"
 ],
 "Detachable": [
  null,
  "отрывной"
 ],
 "Details": [
  null,
  "Подробности"
 ],
 "Disable": [
  null,
  "Отключить"
 ],
 "Disabled": [
  null,
  "Выключено"
 ],
 "Disk I/O": [
  null,
  "Дисковый ввод-вывод"
 ],
 "Docking Station": [
  null,
  "Док-станция"
 ],
 "Domain": [
  null,
  "Домен"
 ],
 "Don't Repeat": [
  null,
  "Не повторяйте"
 ],
 "Downloading $0": [
  null,
  "загрузка $0"
 ],
 "Embedded PC": [
  null,
  "Встроенный ПК"
 ],
 "Enable": [
  null,
  "Включить"
 ],
 "Enable Forcefully": [
  null,
  "Включить принудительно"
 ],
 "Enable stored metrics…": [
  null,
  "Включить сохраненные метрики ..."
 ],
 "Enabled": [
  null,
  "Включено"
 ],
 "Enhancement Updates Available": [
  null,
  "Доступны обновленные обновления"
 ],
 "Entry": [
  null,
  "Запись"
 ],
 "Error": [
  null,
  "Ошибка"
 ],
 "Error and above": [
  null,
  "Ошибка и выше"
 ],
 "Everything": [
  null,
  "Все"
 ],
 "Expansion Chassis": [
  null,
  "Шасси расширения"
 ],
 "Friday": [
  null,
  "Пятница"
 ],
 "General": [
  null,
  "Общие"
 ],
 "Go to": [
  null,
  "Идти к"
 ],
 "Go to now": [
  null,
  "Перейдите к"
 ],
 "Hand Held": [
  null,
  "Ручная работа"
 ],
 "Hardware": [
  null,
  "Физическое"
 ],
 "Hardware Information": [
  null,
  "Информация об оборудовании"
 ],
 "Host Name": [
  null,
  "Имя узла"
 ],
 "Hour : Minute": [
  null,
  "Время: минута"
 ],
 "Hour needs to be a number between 0-23": [
  null,
  "Час должен быть числом от 0 до 23"
 ],
 "Hours": [
  null,
  "Часы"
 ],
 "I/O Wait": [
  null,
  "Ожидание ввода-вывода"
 ],
 "Id": [
  null,
  "Идентификатор"
 ],
 "Info and above": [
  null,
  "Информация и выше"
 ],
 "Install": [
  null,
  "Установка"
 ],
 "Install Software": [
  null,
  "Установить программное обеспечение"
 ],
 "Installing $0": [
  null,
  "Установка $0"
 ],
 "Instantiate": [
  null,
  "иллюстрировать примерами"
 ],
 "Invalid date format": [
  null,
  "Неверный формат даты"
 ],
 "Invalid date format and invalid time format": [
  null,
  "Недопустимый формат даты и неверный формат времени"
 ],
 "Invalid date format.": [
  null,
  "Неверный формат даты."
 ],
 "Invalid number.": [
  null,
  "Неправильный номер."
 ],
 "Invalid time format": [
  null,
  "Недопустимый формат времени"
 ],
 "Invalid time zone": [
  null,
  "Недействительный часовой пояс"
 ],
 "IoT Gateway": [
  null,
  "IoT Gateway"
 ],
 "Joins Namespace Of": [
  null,
  "Присоединяется к пространству имен"
 ],
 "Journal": [
  null,
  "журнал"
 ],
 "Journal entry": [
  null,
  "запись в журнале"
 ],
 "Journal entry not found": [
  null,
  "Запись в журнале не найдена"
 ],
 "Kernel": [
  null,
  "Ядро"
 ],
 "Laptop": [
  null,
  "портативный компьютер"
 ],
 "Last 24 hours": [
  null,
  "Последние 24 часа"
 ],
 "Last 7 days": [
  null,
  "Последние 7 дней"
 ],
 "Last Trigger": [
  null,
  "Последний триггер"
 ],
 "Load earlier entries": [
  null,
  "Загрузка ранних записей"
 ],
 "Loading...": [
  null,
  "Загрузка..."
 ],
 "Log messages": [
  null,
  "Журнальные сообщения"
 ],
 "Logs": [
  null,
  "Журналы"
 ],
 "Low Profile Desktop": [
  null,
  "Низкий профиль рабочего стола"
 ],
 "Lunch Box": [
  null,
  "Коробка для ланча"
 ],
 "Machine ID": [
  null,
  "ИД машины"
 ],
 "Machine SSH Key Fingerprints": [
  null,
  "Отпечатки пальцев машины SSH"
 ],
 "Main Server Chassis": [
  null,
  "Основной серверный корпус"
 ],
 "Manually": [
  null,
  "Вручную"
 ],
 "Mask": [
  null,
  "Маска"
 ],
 "Mask Forcefully": [
  null,
  "Маска насильно"
 ],
 "Memory": [
  null,
  "Память"
 ],
 "Memory & Swap": [
  null,
  "Память и обмен"
 ],
 "Message to logged in users": [
  null,
  "Сообщение для зарегистрированных пользователей"
 ],
 "Mini PC": [
  null,
  "Мини-ПК"
 ],
 "Mini Tower": [
  null,
  "Мини-башня"
 ],
 "Minute needs to be a number between 0-59": [
  null,
  "Минута должна быть числом от 0 до 59"
 ],
 "Minutes": [
  null,
  "Минуты"
 ],
 "Model": [
  null,
  "Модель"
 ],
 "Monday": [
  null,
  "Понедельник"
 ],
 "Multi-system Chassis": [
  null,
  "Многосистемное шасси"
 ],
 "NTP Server": [
  null,
  "Сервер NTP"
 ],
 "Name": [
  null,
  "Имя"
 ],
 "Need at least one NTP server": [
  null,
  "Нужна, по крайней мере, один сервер NTP"
 ],
 "Network Traffic": [
  null,
  "Сетевой трафик"
 ],
 "Next Run": [
  null,
  "Следующий прогон"
 ],
 "Nice": [
  null,
  "Приоритет"
 ],
 "No Delay": [
  null,
  "Без задержки"
 ],
 "No host keys found.": [
  null,
  "Не найдено ключей хоста."
 ],
 "Not authorized to upload-report": [
  null,
  "Не разрешено выгрузка-отчет"
 ],
 "Not synchronized": [
  null,
  "Не синхронизирован"
 ],
 "Note": [
  null,
  "Примечание"
 ],
 "Notebook": [
  null,
  "Ноутбук"
 ],
 "Notice and above": [
  null,
  "Извещение и выше"
 ],
 "Off": [
  null,
  "Выкл"
 ],
 "Ok": [
  null,
  "OK"
 ],
 "On": [
  null,
  "Вкл"
 ],
 "On Failure": [
  null,
  "О неисправности"
 ],
 "Only Emergency": [
  null,
  "Только чрезвычайная ситуация"
 ],
 "Only alphabets, numbers, : , _ , . , @ , - are allowed.": [
  null,
  "Только алфавиты, числа,:, _,. , @ , - разрешены."
 ],
 "Operating System": [
  null,
  "Операционная система"
 ],
 "Other": [
  null,
  "Другие"
 ],
 "PCI": [
  null,
  "PCI"
 ],
 "PackageKit crashed": [
  null,
  "Пакет PackageKit разбился"
 ],
 "Part Of": [
  null,
  "Часть"
 ],
 "Path": [
  null,
  "Путь"
 ],
 "Paths": [
  null,
  "Пути"
 ],
 "Performance Profile": [
  null,
  "Профиль производительности"
 ],
 "Peripheral Chassis": [
  null,
  "Периферийное шасси"
 ],
 "Pizza Box": [
  null,
  "Коробка для пиццы"
 ],
 "Portable": [
  null,
  "портативный"
 ],
 "Power Options": [
  null,
  "Электропитание"
 ],
 "Preset": [
  null,
  "Предустановленная"
 ],
 "Preset Forcefully": [
  null,
  "Предварительно установленный"
 ],
 "Pretty Host Name": [
  null,
  "Довольно имя хоста"
 ],
 "Problem details": [
  null,
  "Информация о проблемах"
 ],
 "Problem info": [
  null,
  "Информация о проблеме"
 ],
 "Propagates Reload To": [
  null,
  "Продвигает"
 ],
 "RAID Chassis": [
  null,
  "Шасси RAID"
 ],
 "Rack Mount Chassis": [
  null,
  "Корпус для монтажа в стойку"
 ],
 "Real Host Name": [
  null,
  "Реальное имя хоста"
 ],
 "Real host name can only contain lower-case characters, digits, dashes, and periods (with populated subdomains)": [
  null,
  "Реальное имя хоста может содержать только строчные символы, цифры, тире и периоды (с заполненными субдоменами)"
 ],
 "Real host name must be 64 characters or less": [
  null,
  "Реальное имя хоста должно быть не менее 64 символов"
 ],
 "Reboot": [
  null,
  "Перезагрузить"
 ],
 "Recent": [
  null,
  "Недавние"
 ],
 "Reload": [
  null,
  "Восстановить"
 ],
 "Reload Propagated From": [
  null,
  "Перезагрузить Пропагандированный"
 ],
 "Removals:": [
  null,
  "Удаления:"
 ],
 "Removing $0": [
  null,
  "Удаление $0"
 ],
 "Repeat Daily": [
  null,
  "Повторить ежедневно"
 ],
 "Repeat Hourly": [
  null,
  "Повторить почасово"
 ],
 "Repeat Monthly": [
  null,
  "Повторить месяц"
 ],
 "Repeat Weekly": [
  null,
  "Повторить еженедельно"
 ],
 "Repeat Yearly": [
  null,
  "Повторять ежегодно"
 ],
 "Report": [
  null,
  "Сообщить"
 ],
 "Reported": [
  null,
  "сообщается"
 ],
 "Reporter 'reporter-ureport' not found.": [
  null,
  "Репортер «репортер-урепорт» не найден."
 ],
 "Reporting was unsucessful. Try running `reporter-ureport -d ": [
  null,
  "Отчетность была неприемлемой. Попробуйте запустить `reporter-ureport -d "
 ],
 "Required By": [
  null,
  "Требуется"
 ],
 "Requires": [
  null,
  "Требует"
 ],
 "Requisite": [
  null,
  "Реквизит"
 ],
 "Requisite Of": [
  null,
  "Реквизиты"
 ],
 "Reset": [
  null,
  "Сбросить"
 ],
 "Restart": [
  null,
  "Перезапуск"
 ],
 "Run": [
  null,
  "Запустить"
 ],
 "Running Since": [
  null,
  ""
 ],
 "Saturday": [
  null,
  "Суббота"
 ],
 "Save": [
  null,
  "Сохранить"
 ],
 "Sealed-case PC": [
  null,
  "Компьютер с герметичным корпусом"
 ],
 "Seconds": [
  null,
  "Секунды"
 ],
 "Secure Shell Keys": [
  null,
  "Защищенные ключи ключей"
 ],
 "Security Updates Available": [
  null,
  "Доступные обновления для системы безопасности"
 ],
 "Service Logs": [
  null,
  "Журналы обслуживания"
 ],
 "Service name": [
  null,
  "Наименование услуги"
 ],
 "Services": [
  null,
  "Службы"
 ],
 "Set Host name": [
  null,
  "Установить имя хоста"
 ],
 "Set Time": [
  null,
  "Установленное время"
 ],
 "Severity": [
  null,
  "Приоритет"
 ],
 "Show fingerprints": [
  null,
  "Показать отпечатки пальцев"
 ],
 "Shut Down": [
  null,
  "Выключение"
 ],
 "Slot": [
  null,
  "слот"
 ],
 "Sockets": [
  null,
  "Сокеты"
 ],
 "Space-saving Computer": [
  null,
  "Компактный компьютер"
 ],
 "Specific Time": [
  null,
  "Конкретное время"
 ],
 "Start": [
  null,
  "Пуск"
 ],
 "State": [
  null,
  "Состояние"
 ],
 "Static": [
  null,
  "Статический"
 ],
 "Status": [
  null,
  "Состояние"
 ],
 "Stick PC": [
  null,
  "Stick PC"
 ],
 "Stop": [
  null,
  "Остановить"
 ],
 "Store Metrics": [
  null,
  ""
 ],
 "Sub Chassis": [
  null,
  "Sub Chassis"
 ],
 "Sub Notebook": [
  null,
  "Sub Notebook"
 ],
 "Sunday": [
  null,
  "Воскресенье"
 ],
 "Swap Used": [
  null,
  "Обмен Swap"
 ],
 "Synchronized": [
  null,
  "синхронизированный"
 ],
 "Synchronized with {{Server}}": [
  null,
  "Синхронизировано с {{Server}}"
 ],
 "System": [
  null,
  "Система"
 ],
 "System Information": [
  null,
  "Сведения о системе"
 ],
 "System Not Registered": [
  null,
  "Система не зарегистрирована"
 ],
 "System Services": [
  null,
  "Системные службы"
 ],
 "System Time": [
  null,
  "Системное время"
 ],
 "System Up To Date": [
  null,
  "Система до даты"
 ],
 "Tablet": [
  null,
  "Планшет"
 ],
 "Targets": [
  null,
  "Цели"
 ],
 "Terminal": [
  null,
  "Терминал"
 ],
 "The user <b>$0</b> does not have permissions for creating timers": [
  null,
  "Пользователь <b>$0</b> не имеет разрешений для создания таймеров"
 ],
 "The user <b>$0</b> is not permitted to change the system time": [
  null,
  "Пользователь <b>$0</b> не разрешено изменять системное время"
 ],
 "The user <b>$0</b> is not permitted to enable or disable services": [
  null,
  "Пользователь <b>$0</b> не разрешено включать или отключать услуги"
 ],
 "The user <b>$0</b> is not permitted to modify hostnames": [
  null,
  "Пользователь <b>$0</b> не разрешается изменять имена хостов"
 ],
 "The user <b>$0</b> is not permitted to shutdown or restart this server": [
  null,
  "Пользователь <b>$0</b> не разрешено выключение или перезагрузка этого сервера"
 ],
 "The user <b>$0</b> is not permitted to start or stop services": [
  null,
  "Пользователь <b>$0</b> не разрешено запускать или останавливать услуги"
 ],
 "This day doesn't exist in all months.<br> The timer will only be executed in months that have 31st.": [
  null,
  "Этот день не существует в течение всех месяцев.<br> Таймер будет выполняться только в месяцах с 31-м."
 ],
 "This field cannot be empty.": [
  null,
  "Это поле не может быть пустым."
 ],
 "This unit is an instance of the $0 template.": [
  null,
  "Это устройство является экземпляром $0 шаблон."
 ],
 "This unit is not designed to be enabled explicitly.": [
  null,
  "Это устройство не предназначено для включения явно."
 ],
 "Thursday": [
  null,
  "Четверг"
 ],
 "Time Zone": [
  null,
  "Часовой пояс"
 ],
 "Timers": [
  null,
  "Таймеры"
 ],
 "Total size: $0": [
  null,
  "Общий размер: $0"
 ],
 "Tower": [
  null,
  "башня"
 ],
 "Triggered By": [
  null,
  "Вызваны"
 ],
 "Triggers": [
  null,
  "Триггеры"
 ],
 "Trying to synchronize with {{Server}}": [
  null,
  "Попытка синхронизировать с {{Server}}"
 ],
 "Tuesday": [
  null,
  "Вторник"
 ],
 "Type": [
  null,
  "Тип"
 ],
 "Unknown": [
  null,
  "Неизвестно"
 ],
 "Unmask": [
  null,
  "Разоблачать"
 ],
 "Updates Available": [
  null,
  "Доступные обновления"
 ],
 "Usage of $0 CPU core": [
  "Usage of $0 CPU cores",
  "Использование $0 Ядро процессора",
  "Использование $0 Процессорные ядра",
  "Использование $0 Процессорные ядра"
 ],
 "Used": [
  null,
  "Использовано"
 ],
 "User": [
  null,
  "Пользователь"
 ],
 "Vendor": [
  null,
  "Производитель"
 ],
 "Version": [
  null,
  "Версия"
 ],
 "Waiting for other software management operations to finish": [
  null,
  "Ожидание выполнения других операций управления программным обеспечением"
 ],
 "Wanted By": [
  null,
  "разыскивается"
 ],
 "Wants": [
  null,
  "хочет"
 ],
 "Warning and above": [
  null,
  "Предупреждение и выше"
 ],
 "Wednesday": [
  null,
  "Среда"
 ],
 "Weeks": [
  null,
  "недели"
 ],
 "[$0 bytes of binary data]": [
  null,
  "[$0 байты двоичных данных]"
 ],
 "[binary data]": [
  null,
  "[двоичные данные]"
 ],
 "[no data]": [
  null,
  "[нет данных]"
 ],
 "failed to list ssh host keys: $0": [
  null,
  "не удалось перечислить ключи хоста ssh: $0"
 ],
 "of $0 CPU core": [
  "of $0 CPU cores",
  "из $0 Ядро процессора",
  "из $0 Процессорные ядра",
  "из $0 Процессорные ядра"
 ],
 "undefined": [
  null,
  "не определено"
 ],
 "unknown": [
  null,
  "неизвестно"
 ],
 "page-title\u0004CPU Status": [
  null,
  "Состояние процессора"
 ],
 "page-title\u0004Memory": [
  null,
  "Память"
 ]
}));
