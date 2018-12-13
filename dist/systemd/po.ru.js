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
 "Asset Tag": [
  null,
  "Тег секции"
 ],
 "At specific time": [
  null,
  "В определенное время"
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
 "Checking installed software": [
  null,
  "Проверка установленного программного обеспечения"
 ],
 "Class": [
  null,
  "Класс"
 ],
 "Close": [
  null,
  "Закрыть"
 ],
 "Command": [
  null,
  "Команда"
 ],
 "Condition failed": [
  null,
  "Не удалось выполнить условие"
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
 "Disk I/O": [
  null,
  "Дисковый ввод-вывод"
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
 "Enable stored metrics…": [
  null,
  "Включить сохраненные метрики ..."
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
 "Hours": [
  null,
  "Часы"
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
 "Invalid time zone": [
  null,
  "Недействительный часовой пояс"
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
 "Last 24 hours": [
  null,
  "Последние 24 часа"
 ],
 "Last 7 days": [
  null,
  "Последние 7 дней"
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
 "Machine ID": [
  null,
  "ИД машины"
 ],
 "Machine SSH Key Fingerprints": [
  null,
  "Отпечатки пальцев машины SSH"
 ],
 "Manually": [
  null,
  "Вручную"
 ],
 "Memory": [
  null,
  "Память"
 ],
 "Memory & Swap": [
  null,
  "Память и обмен"
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
 "Name": [
  null,
  "Имя"
 ],
 "Network Traffic": [
  null,
  "Сетевой трафик"
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
 "Only Emergency": [
  null,
  "Только чрезвычайная ситуация"
 ],
 "Operating System": [
  null,
  "Операционная система"
 ],
 "PCI": [
  null,
  "PCI"
 ],
 "Paths": [
  null,
  "Пути"
 ],
 "Performance Profile": [
  null,
  "Профиль производительности"
 ],
 "Power Options": [
  null,
  "Электропитание"
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
 "Real Host Name": [
  null,
  "Реальное имя хоста"
 ],
 "Reboot": [
  null,
  "Перезагрузить"
 ],
 "Recent": [
  null,
  "Недавние"
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
 "Saturday": [
  null,
  "Суббота"
 ],
 "Save": [
  null,
  "Сохранить"
 ],
 "Seconds": [
  null,
  "Секунды"
 ],
 "Secure Shell Keys": [
  null,
  "Защищенные ключи ключей"
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
 "Specific Time": [
  null,
  "Конкретное время"
 ],
 "Store metrics": [
  null,
  "Хранить метрики"
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
 "System Services": [
  null,
  "Системные службы"
 ],
 "System Time": [
  null,
  "Системное время"
 ],
 "Targets": [
  null,
  "Цели"
 ],
 "Terminal": [
  null,
  "Терминал"
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
 ]
}));
