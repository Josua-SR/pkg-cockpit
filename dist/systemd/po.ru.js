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
  "language": "ru",
  "x-generator": "Zanata 4.6.2"
 },
 "$0 Template": [
  null,
  "$0 Шаблон"
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
  "1 мин"
 ],
 "1 week": [
  null,
  "1 неделя"
 ],
 "10th": [
  null,
  "10-го числа"
 ],
 "11th": [
  null,
  "11-го числа"
 ],
 "12th": [
  null,
  "12-го числа"
 ],
 "13th": [
  null,
  "13-го числа"
 ],
 "14th": [
  null,
  "14-го числа"
 ],
 "15th": [
  null,
  "15-го числа"
 ],
 "16th": [
  null,
  "16-го числа"
 ],
 "17th": [
  null,
  "17-го числа"
 ],
 "18th": [
  null,
  "18-го числа"
 ],
 "19th": [
  null,
  "19-го числа"
 ],
 "1st": [
  null,
  "1-го числа"
 ],
 "2 min": [
  null,
  "2 мин"
 ],
 "20 Minutes": [
  null,
  "20 минут"
 ],
 "20th": [
  null,
  "20-го числа"
 ],
 "21st": [
  null,
  "21-го числа"
 ],
 "22nd": [
  null,
  "22-го числа"
 ],
 "23rd": [
  null,
  "23-го числа"
 ],
 "24th": [
  null,
  "24-го числа"
 ],
 "25th": [
  null,
  "25-го числа"
 ],
 "26th": [
  null,
  "26-го числа"
 ],
 "27th": [
  null,
  "27-го числа"
 ],
 "28th": [
  null,
  "28-го числа"
 ],
 "29th": [
  null,
  "29-го числа"
 ],
 "2nd": [
  null,
  "2-го числа"
 ],
 "3 min": [
  null,
  "3 мин"
 ],
 "30th": [
  null,
  "30-го числа"
 ],
 "31st": [
  null,
  "31-го числа"
 ],
 "3rd": [
  null,
  "3-го числа"
 ],
 "4 min": [
  null,
  "4 мин"
 ],
 "40 Minutes": [
  null,
  "40 минут"
 ],
 "4th": [
  null,
  "4-го числа"
 ],
 "5 Minutes": [
  null,
  "5 минут"
 ],
 "5 min": [
  null,
  "5 мин"
 ],
 "5 minutes": [
  null,
  "5 минут"
 ],
 "5th": [
  null,
  "5-го числа"
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
  "6-го числа"
 ],
 "7th": [
  null,
  "7-го числа"
 ],
 "8th": [
  null,
  "8-го числа"
 ],
 "9th": [
  null,
  "9-го числа"
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
  "Через/After="
 ],
 "After system boot": [
  null,
  "После загрузки системы"
 ],
 "Alert and above": [
  null,
  "Оповещение и выше"
 ],
 "All": [
  null,
  "Все"
 ],
 "All In One": [
  null,
  "Всё в одном"
 ],
 "Appearance:": [
  null,
  "Стиль отображения:"
 ],
 "Asset Tag": [
  null,
  "Ярлык/Тег актива"
 ],
 "At specific time": [
  null,
  "В определённое время"
 ],
 "Automatic Startup": [
  null,
  "Автоматический запуск"
 ],
 "Automatically using NTP": [
  null,
  "Автоматическое использование NTP"
 ],
 "Automatically using specific NTP servers": [
  null,
  "Автоматическое использование определённых NTP-серверов"
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
  "Before="
 ],
 "Binds To": [
  null,
  "BindsTo="
 ],
 "Black": [
  null,
  "Чёрный"
 ],
 "Blade": [
  null,
  "Блейд-сервер"
 ],
 "Blade enclosure": [
  null,
  "Корзина"
 ],
 "Bound By": [
  null,
  "BoundBy="
 ],
 "Bug Fix Updates Available": [
  null,
  "Доступны исправления ошибок"
 ],
 "Bus Expansion Chassis": [
  null,
  "Корпус расширения шины"
 ],
 "CPU": [
  null,
  "ЦП"
 ],
 "CPU Security": [
  null,
  "Безопасность процессора"
 ],
 "CPU Security Toggles": [
  null,
  ""
 ],
 "Cached": [
  null,
  "Кэшировано"
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
  "Изменить имя узла"
 ],
 "Change System Time": [
  null,
  "Изменить системное время"
 ],
 "Checking for updates…": [
  null,
  "Проверка наличия обновлений…"
 ],
 "Checking installed software": [
  null,
  "Проверка установленного программного обеспечения"
 ],
 "Class": [
  null,
  "Класс"
 ],
 "Clear All Filters": [
  null,
  "Сбросить все фильтры"
 ],
 "Click to see system hardware information": [
  null,
  "Щёлкните для просмотра информации об оборудовании"
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
  "CompactPCI"
 ],
 "Condition $0=$1 was not met": [
  null,
  "Не выполнено условие $0=$1"
 ],
 "Condition failed": [
  null,
  "Условие не выполнено"
 ],
 "Conflicted By": [
  null,
  "ConflictedBy="
 ],
 "Conflicts": [
  null,
  "Conflicts="
 ],
 "Consists Of": [
  null,
  "ConsistsOf="
 ],
 "Convertible": [
  null,
  "Компьютер-трансформер"
 ],
 "Copy": [
  null,
  "Копировать"
 ],
 "Create Timer": [
  null,
  "Создать таймер"
 ],
 "Create Timers": [
  null,
  "Создание таймера"
 ],
 "Critical and above": [
  null,
  "Критический и выше"
 ],
 "Ctrl+Insert": [
  null,
  "Ctrl+Insert"
 ],
 "Current boot": [
  null,
  "Текущая сессия"
 ],
 "Dark": [
  null,
  "Тёмный"
 ],
 "Debug and above": [
  null,
  "Отладка и выше"
 ],
 "Delay": [
  null,
  "Задержка"
 ],
 "Description": [
  null,
  "Описание"
 ],
 "Desktop": [
  null,
  "Настольный компьютер"
 ],
 "Detachable": [
  null,
  "Съёмный компьютер"
 ],
 "Details": [
  null,
  "Подробности"
 ],
 "Disable": [
  null,
  "Отключить"
 ],
 "Disable simultaneous multithreading": [
  null,
  "Отключить одновременную многопотоковость"
 ],
 "Disabled": [
  null,
  "Отключено"
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
  "Без повтора"
 ],
 "Downloading $0": [
  null,
  "Загрузка $0"
 ],
 "Embedded PC": [
  null,
  "Встраиваемый компьютер"
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
  "Включить сохранённые показатели..."
 ],
 "Enabled": [
  null,
  "Включено"
 ],
 "Enhancement Updates Available": [
  null,
  "Доступны улучшения"
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
 "Filter by name or description...": [
  null,
  "Фильтровать по имени или описанию..."
 ],
 "Friday": [
  null,
  "Пятница"
 ],
 "General": [
  null,
  "Общее"
 ],
 "Go to": [
  null,
  "Переход..."
 ],
 "Go to now": [
  null,
  "Текущий момент"
 ],
 "Hand Held": [
  null,
  "Карманный компьютер"
 ],
 "Hardware": [
  null,
  "Оборудование"
 ],
 "Hardware Information": [
  null,
  "Сведения об оборудовании"
 ],
 "Host Name": [
  null,
  "Имя узла"
 ],
 "Hour : Minute": [
  null,
  "Часы : Минуты"
 ],
 "Hour needs to be a number between 0-23": [
  null,
  "Количество часов должно лежать в интервале от 0 до 23"
 ],
 "Hours": [
  null,
  "ч"
 ],
 "I/O Wait": [
  null,
  "Ожидание ввода-вывода"
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
  "Последнее срабатывание"
 ],
 "Light": [
  null,
  "Светлый"
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
  "Идентификатор системы"
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
  "Применить маску"
 ],
 "Mask Forcefully": [
  null,
  "Принудительное применение маски"
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
  "мин"
 ],
 "Mitigations": [
  null,
  ""
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
  "Следующий запуск"
 ],
 "Nice": [
  null,
  "Приоритет"
 ],
 "No Delay": [
  null,
  "Без задержки"
 ],
 "No Matching Results": [
  null,
  ""
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
 "Paste": [
  null,
  ""
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
  "Портативный"
 ],
 "Power Options": [
  null,
  "Электропитание"
 ],
 "Preset": [
  null,
  "Предустановка"
 ],
 "Preset Forcefully": [
  null,
  "Принудительная предустановка"
 ],
 "Pretty Host Name": [
  null,
  "Довольно имя хоста"
 ],
 "Previous boot": [
  null,
  ""
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
 "Read more...": [
  null,
  ""
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
  "Перезагрузка"
 ],
 "Recent": [
  null,
  "Недавние"
 ],
 "Reload": [
  null,
  "Перезагрузить"
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
  "Повторять ежедневно"
 ],
 "Repeat Hourly": [
  null,
  "Повторять ежечасно"
 ],
 "Repeat Monthly": [
  null,
  "Повторять ежемесячно"
 ],
 "Repeat Weekly": [
  null,
  "Повторять еженедельно"
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
  ""
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
  "Требуется для"
 ],
 "Requires": [
  null,
  "Требуются"
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
  "Сброс"
 ],
 "Restart": [
  null,
  "Перезапустить"
 ],
 "Run": [
  null,
  "Запуск"
 ],
 "Running Since": [
  null,
  "Время запуска"
 ],
 "Saturday": [
  null,
  "Суббота"
 ],
 "Save": [
  null,
  "Сохранить"
 ],
 "Save and reboot": [
  null,
  ""
 ],
 "Sealed-case PC": [
  null,
  "Компьютер с герметичным корпусом"
 ],
 "Seconds": [
  null,
  "с"
 ],
 "Secure Shell Keys": [
  null,
  "Ключи SSH"
 ],
 "Security Updates Available": [
  null,
  "Доступные обновления для системы безопасности"
 ],
 "Service": [
  null,
  "Служба"
 ],
 "Service Logs": [
  null,
  "Журналы службы"
 ],
 "Service name": [
  null,
  "Название службы"
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
 "Shift+Insert": [
  null,
  ""
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
 "Software-based workarounds help prevent CPU security issues. These mitigations have the side effect of reducing performance. Change these settings at your own risk.": [
  null,
  ""
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
  "Запустить"
 ],
 "State": [
  null,
  "Состояние"
 ],
 "Static": [
  null,
  "Статически"
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
  "Сохранять показатели"
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
 "The user $0 is not permitted to change cpu security mitigations": [
  null,
  ""
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
  "Этот элемент не предназначено для включения явно."
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
  "Снять маску"
 ],
 "Updates Available": [
  null,
  "Доступные обновления"
 ],
 "Usage of $0 CPU core": [
  "Usage of $0 CPU cores",
  "Использование $0 ядра процессора",
  "Использование $0 ядер процессора",
  "Использование $0 ядер процессора"
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
  "Желателен для"
 ],
 "Wants": [
  null,
  "Желательны"
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
  "нед"
 ],
 "White": [
  null,
  "Белый"
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
  "из $0 ядра процессора",
  "из $0 ядер процессора",
  "из $0 ядер процессора"
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
