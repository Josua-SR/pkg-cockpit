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
  ""
 ],
 "$0 will be installed.": [
  null,
  ""
 ],
 "1 Minute": [
  null,
  ""
 ],
 "1 day": [
  null,
  ""
 ],
 "1 hour": [
  null,
  ""
 ],
 "1 week": [
  null,
  ""
 ],
 "10th": [
  null,
  ""
 ],
 "11th": [
  null,
  ""
 ],
 "12th": [
  null,
  ""
 ],
 "13th": [
  null,
  ""
 ],
 "14th": [
  null,
  ""
 ],
 "15th": [
  null,
  ""
 ],
 "16th": [
  null,
  ""
 ],
 "17th": [
  null,
  ""
 ],
 "18th": [
  null,
  ""
 ],
 "19th": [
  null,
  ""
 ],
 "1st": [
  null,
  ""
 ],
 "20 Minutes": [
  null,
  ""
 ],
 "20th": [
  null,
  ""
 ],
 "21st": [
  null,
  ""
 ],
 "22nd": [
  null,
  ""
 ],
 "23rd": [
  null,
  ""
 ],
 "24th": [
  null,
  ""
 ],
 "25th": [
  null,
  ""
 ],
 "26th": [
  null,
  ""
 ],
 "27th": [
  null,
  ""
 ],
 "28th": [
  null,
  ""
 ],
 "29th": [
  null,
  ""
 ],
 "2nd": [
  null,
  ""
 ],
 "30th": [
  null,
  ""
 ],
 "31st": [
  null,
  ""
 ],
 "3rd": [
  null,
  ""
 ],
 "40 Minutes": [
  null,
  ""
 ],
 "4th": [
  null,
  ""
 ],
 "5 Minutes": [
  null,
  ""
 ],
 "5 minutes": [
  null,
  ""
 ],
 "5th": [
  null,
  ""
 ],
 "6 hours": [
  null,
  ""
 ],
 "60 Minutes": [
  null,
  ""
 ],
 "6th": [
  null,
  ""
 ],
 "7th": [
  null,
  ""
 ],
 "8th": [
  null,
  ""
 ],
 "9th": [
  null,
  ""
 ],
 "Additional packages:": [
  null,
  ""
 ],
 "Advanced TCA": [
  null,
  ""
 ],
 "After": [
  null,
  "После"
 ],
 "After system boot": [
  null,
  ""
 ],
 "Alert and above": [
  null,
  ""
 ],
 "All In One": [
  null,
  ""
 ],
 "Asset Tag": [
  null,
  "Тег секции"
 ],
 "At specific time": [
  null,
  ""
 ],
 "Automatically using NTP": [
  null,
  ""
 ],
 "Automatically using specific NTP servers": [
  null,
  ""
 ],
 "BIOS": [
  null,
  "BIOS"
 ],
 "BIOS date": [
  null,
  ""
 ],
 "BIOS version": [
  null,
  ""
 ],
 "Blade": [
  null,
  ""
 ],
 "Blade enclosure": [
  null,
  ""
 ],
 "Bus Expansion Chassis": [
  null,
  ""
 ],
 "CPU": [
  null,
  "ЦП"
 ],
 "Cached": [
  null,
  ""
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
  ""
 ],
 "Change System Time": [
  null,
  ""
 ],
 "Checking installed software": [
  null,
  ""
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
 "Compact PCI": [
  null,
  ""
 ],
 "Condition failed": [
  null,
  ""
 ],
 "Convertible": [
  null,
  ""
 ],
 "Create Timer": [
  null,
  ""
 ],
 "Create Timers": [
  null,
  ""
 ],
 "Critical and above": [
  null,
  ""
 ],
 "Current boot": [
  null,
  ""
 ],
 "Debug and above": [
  null,
  ""
 ],
 "Delay": [
  null,
  ""
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
  ""
 ],
 "Disk I/O": [
  null,
  "Дисковый ввод-вывод"
 ],
 "Docking Station": [
  null,
  ""
 ],
 "Domain": [
  null,
  "Домен"
 ],
 "Don't Repeat": [
  null,
  ""
 ],
 "Downloading $0": [
  null,
  ""
 ],
 "Embedded PC": [
  null,
  ""
 ],
 "Enable persistent metrics…": [
  null,
  ""
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
  ""
 ],
 "Everything": [
  null,
  ""
 ],
 "Expansion Chassis": [
  null,
  ""
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
  ""
 ],
 "Go to now": [
  null,
  ""
 ],
 "Hand Held": [
  null,
  ""
 ],
 "Hardware": [
  null,
  "Физическое"
 ],
 "Hardware Information": [
  null,
  ""
 ],
 "Host Name": [
  null,
  "Имя узла"
 ],
 "Hour : Minute": [
  null,
  ""
 ],
 "Hours": [
  null,
  "Часы"
 ],
 "I/O Wait": [
  null,
  ""
 ],
 "Info and above": [
  null,
  ""
 ],
 "Install": [
  null,
  "Установка"
 ],
 "Install Software": [
  null,
  ""
 ],
 "Installing $0": [
  null,
  ""
 ],
 "Instantiate": [
  null,
  ""
 ],
 "Invalid time zone": [
  null,
  ""
 ],
 "IoT Gateway": [
  null,
  ""
 ],
 "Journal": [
  null,
  ""
 ],
 "Journal entry": [
  null,
  ""
 ],
 "Journal entry not found": [
  null,
  ""
 ],
 "Kernel": [
  null,
  "Ядро"
 ],
 "Laptop": [
  null,
  ""
 ],
 "Last 24 hours": [
  null,
  ""
 ],
 "Last 7 days": [
  null,
  "Последние 7 дней"
 ],
 "Load earlier entries": [
  null,
  ""
 ],
 "Loading...": [
  null,
  "Загрузка..."
 ],
 "Log messages": [
  null,
  ""
 ],
 "Logs": [
  null,
  "Журналы"
 ],
 "Low Profile Desktop": [
  null,
  ""
 ],
 "Lunch Box": [
  null,
  ""
 ],
 "Machine ID": [
  null,
  ""
 ],
 "Machine SSH Key Fingerprints": [
  null,
  ""
 ],
 "Main Server Chassis": [
  null,
  ""
 ],
 "Manually": [
  null,
  ""
 ],
 "Memory": [
  null,
  "Память"
 ],
 "Memory & Swap": [
  null,
  ""
 ],
 "Mini PC": [
  null,
  ""
 ],
 "Mini Tower": [
  null,
  ""
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
  ""
 ],
 "Name": [
  null,
  "Имя"
 ],
 "Network Traffic": [
  null,
  ""
 ],
 "Nice": [
  null,
  "Приоритет"
 ],
 "No Delay": [
  null,
  ""
 ],
 "No host keys found.": [
  null,
  ""
 ],
 "Not authorized to upload-report": [
  null,
  ""
 ],
 "Not synchronized": [
  null,
  ""
 ],
 "Note": [
  null,
  "Примечание"
 ],
 "Notebook": [
  null,
  ""
 ],
 "Notice and above": [
  null,
  ""
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
  ""
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
  ""
 ],
 "Paths": [
  null,
  "Пути"
 ],
 "Performance Profile": [
  null,
  ""
 ],
 "Peripheral Chassis": [
  null,
  ""
 ],
 "Pizza Box": [
  null,
  ""
 ],
 "Portable": [
  null,
  ""
 ],
 "Power Options": [
  null,
  ""
 ],
 "Pretty Host Name": [
  null,
  ""
 ],
 "Problem details": [
  null,
  ""
 ],
 "Problem info": [
  null,
  ""
 ],
 "RAID Chassis": [
  null,
  ""
 ],
 "Rack Mount Chassis": [
  null,
  ""
 ],
 "Real Host Name": [
  null,
  ""
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
  ""
 ],
 "Removing $0": [
  null,
  ""
 ],
 "Repeat Daily": [
  null,
  ""
 ],
 "Repeat Hourly": [
  null,
  ""
 ],
 "Repeat Monthly": [
  null,
  ""
 ],
 "Repeat Weekly": [
  null,
  ""
 ],
 "Repeat Yearly": [
  null,
  ""
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
  ""
 ],
 "Reporting was unsucessful. Try running `reporter-ureport -d ": [
  null,
  ""
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
 "Sealed-case PC": [
  null,
  ""
 ],
 "Seconds": [
  null,
  "Секунды"
 ],
 "Secure Shell Keys": [
  null,
  ""
 ],
 "Service Logs": [
  null,
  ""
 ],
 "Service name": [
  null,
  ""
 ],
 "Services": [
  null,
  "Службы"
 ],
 "Set Time": [
  null,
  ""
 ],
 "Severity": [
  null,
  "Приоритет"
 ],
 "Show fingerprints": [
  null,
  ""
 ],
 "Shut Down": [
  null,
  "Выключение"
 ],
 "Slot": [
  null,
  ""
 ],
 "Sockets": [
  null,
  "Сокеты"
 ],
 "Space-saving Computer": [
  null,
  ""
 ],
 "Specific Time": [
  null,
  ""
 ],
 "Stick PC": [
  null,
  ""
 ],
 "Store Performance Data": [
  null,
  ""
 ],
 "Sub Chassis": [
  null,
  ""
 ],
 "Sub Notebook": [
  null,
  ""
 ],
 "Sunday": [
  null,
  "Воскресенье"
 ],
 "Swap Used": [
  null,
  ""
 ],
 "Synchronized": [
  null,
  ""
 ],
 "Synchronized with {{Server}}": [
  null,
  ""
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
  ""
 ],
 "System Time": [
  null,
  ""
 ],
 "Tablet": [
  null,
  "Планшет"
 ],
 "Targets": [
  null,
  ""
 ],
 "Terminal": [
  null,
  "Терминал"
 ],
 "This unit is not designed to be enabled explicitly.": [
  null,
  ""
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
  ""
 ],
 "Total size: $0": [
  null,
  ""
 ],
 "Tower": [
  null,
  ""
 ],
 "Trying to synchronize with {{Server}}": [
  null,
  ""
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
  ""
 ],
 "Warning and above": [
  null,
  ""
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
  ""
 ],
 "[binary data]": [
  null,
  ""
 ],
 "[no data]": [
  null,
  ""
 ]
}));
