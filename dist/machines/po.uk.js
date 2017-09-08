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
 "$0 is available for most operating systems. To install it, search for it in GNOME Software or run the following:": [
  null,
  "$0 можна користуватися у більшості операційних систем. Щоб встановити пакунок із програмою, знайдіть відповідний запис у Програмних засобах GNOME або віддайте таку команду:"
 ],
 "Address:": [
  null,
  "Адреса:"
 ],
 "Autostart:": [
  null,
  "Автозапуск:"
 ],
 "Available": [
  null,
  "Доступні"
 ],
 "Boot Order:": [
  null,
  "Порядок завантаження:"
 ],
 "Bus": [
  null,
  "Канал"
 ],
 "CPU Type:": [
  null,
  "Тип процесора:"
 ],
 "Cancel": [
  null,
  "Скасувати"
 ],
 "Capacity": [
  null,
  "Місткість"
 ],
 "Clicking \"Launch Remote Viewer\" will download a .vv file and launch $0.": [
  null,
  "У результаті натискання «Запустити віддалений переглядач» буде отримано файл .vv і запущено $0."
 ],
 "Confirm deletion of $0": [
  null,
  "Підтвердження вилучення $0"
 ],
 "Connect with Remote Viewer": [
  null,
  "З’єднатися із Віддаленим переглядачем"
 ],
 "Connect with any $0 viewer application.": [
  null,
  "З’єднатися із будь-якою програмою перегляду $0."
 ],
 "Connect with any SPICE or VNC viewer application.": [
  null,
  "З’єднатися із будь-якою програмою перегляду SPICE або VNC."
 ],
 "Connection": [
  null,
  "З’єднання"
 ],
 "Console": [
  null,
  "Консоль"
 ],
 "Count:": [
  null,
  "Кількість:"
 ],
 "Delete": [
  null,
  "Вилучити"
 ],
 "Delete associated storage files:": [
  null,
  "Вилучити пов’язані файли у сховищі даних:"
 ],
 "Device": [
  null,
  "Пристрій"
 ],
 "Disks": [
  null,
  "Диски"
 ],
 "Download the MSI from $0": [
  null,
  "Отримати MSI з $0"
 ],
 "Emulated Machine:": [
  null,
  "Емуляція машини:"
 ],
 "File": [
  null,
  "Файл"
 ],
 "Force Restart": [
  null,
  "Примусовий перезапуск"
 ],
 "Force Shut Down": [
  null,
  "Примусово вимкнути"
 ],
 "GB": [
  null,
  "ГБ"
 ],
 "Host": [
  null,
  "Вузол"
 ],
 "Launch Remote Viewer": [
  null,
  "Запустити віддалений переглядач"
 ],
 "Manual Connection": [
  null,
  "З’єднання вручну"
 ],
 "Memory:": [
  null,
  "Пам’ять:"
 ],
 "More Information": [
  null,
  "Докладніше"
 ],
 "Name": [
  null,
  "Назва"
 ],
 "No VM is running or defined on this host": [
  null,
  "У цій основній системі не запущено або не визначено віртуальних машин"
 ],
 "No boot device found": [
  null,
  "Не знайдено пристрою для завантаження"
 ],
 "No disks defined for this VM": [
  null,
  "Для цієї ВМ не визначено дисків"
 ],
 "No graphics console is defined for this virtual machine.": [
  null,
  "Для цієї віртуальної машини не визначено графічної консолі."
 ],
 "Ok": [
  null,
  "Гаразд"
 ],
 "Overview": [
  null,
  "Огляд"
 ],
 "Please start the virtual machine to access its graphics console.": [
  null,
  "Будь ласка, запустіть віртуальну машину, щоб отримати доступ до її графічної консолі."
 ],
 "Pool": [
  null,
  "Буфер"
 ],
 "Port": [
  null,
  "Порт"
 ],
 "Protocol": [
  null,
  "Протокол"
 ],
 "Readonly": [
  null,
  "Лише запис"
 ],
 "Restart": [
  null,
  "Перезапустити"
 ],
 "Run": [
  null,
  "Запустити"
 ],
 "SPICE": [
  null,
  "SPICE"
 ],
 "SPICE Address:": [
  null,
  "Адреса SPICE:"
 ],
 "SPICE Port:": [
  null,
  "Порт SPICE:"
 ],
 "SPICE TLS Port:": [
  null,
  "Порт TLS SPICE:"
 ],
 "Send Non-Maskable Interrupt": [
  null,
  "Надіслати немасковане переривання"
 ],
 "Session": [
  null,
  "Сеанс"
 ],
 "Shut Down": [
  null,
  "Вимкнути"
 ],
 "Source": [
  null,
  "Джерело"
 ],
 "State": [
  null,
  "Стан"
 ],
 "Switch to Desktop Viewer": [
  null,
  "Перемкнутися на перегляд стільниці"
 ],
 "Switch to In-Browser Viewer": [
  null,
  "Перемкнутися на перегляд у браузері"
 ],
 "System": [
  null,
  "Система"
 ],
 "Target": [
  null,
  "Призначення"
 ],
 "The VM crashed.": [
  null,
  "Віртуальна машина аварійно завершила роботу."
 ],
 "The VM is down.": [
  null,
  "Віртуальну машину вимкнено."
 ],
 "The VM is going down.": [
  null,
  "Віртуальна машина вимикається."
 ],
 "The VM is idle.": [
  null,
  "Віртуальна машина бездіяльна."
 ],
 "The VM is in process of dying (shut down or crash is not completed).": [
  null,
  "Віртуальна машина завершує роботу (вимикання або аварійне завершення у процесі)."
 ],
 "The VM is paused.": [
  null,
  "Роботу віртуальної машини призупинено."
 ],
 "The VM is running and will be forced off before deletion.": [
  null,
  "Запущено віртуальну машину. Її буде примусово зупинено перед вилученням."
 ],
 "The VM is running.": [
  null,
  "Віртуальна машина працює."
 ],
 "The VM is suspended by guest power management.": [
  null,
  "Роботу віртуальної машини призупинено засобами керування живленням гостьової системи."
 ],
 "Upgrade to a more recent version of libvirt to view disk statistics": [
  null,
  "Щоб мати змогу переглядати статистику дисків, оновіться до новішої версії libvirt"
 ],
 "Usage": [
  null,
  "Використання"
 ],
 "Used": [
  null,
  "Використано"
 ],
 "VM FORCE OFF action failed": [
  null,
  "Не вдалося виконати дію FORCE OFF для ВМ"
 ],
 "VM FORCE REBOOT action failed": [
  null,
  "Не вдалося виконати дію FORCE REBOOT для ВМ"
 ],
 "VM REBOOT action failed": [
  null,
  "Не вдалося виконати дію REBOOT для ВМ"
 ],
 "VM SEND Non-Maskable Interrrupt action failed": [
  null,
  "Спроба виконати дію немаскованого переривання VM SEND завершилася невдало"
 ],
 "VM SHUT DOWN action failed": [
  null,
  "Не вдалося виконати дію SHUT DOWN для ВМ"
 ],
 "VM START action failed": [
  null,
  "Не вдалося виконати дію START для ВМ"
 ],
 "VNC": [
  null,
  "VNC"
 ],
 "VNC Address:": [
  null,
  "Адреса VNC:"
 ],
 "VNC Port:": [
  null,
  "Порт VNC:"
 ],
 "VNC TLS Port:": [
  null,
  "Порт TLS VNC:"
 ],
 "Virtual Machines": [
  null,
  "Віртуальні машини"
 ],
 "Volume": [
  null,
  "Том"
 ],
 "Your browser does not support iframes.": [
  null,
  "У браузері не передбачено підтримки iframe."
 ],
 "cdrom": [
  null,
  "cdrom"
 ],
 "crashed": [
  null,
  "аварійне завершення"
 ],
 "custom": [
  null,
  "нетиповий"
 ],
 "disabled": [
  null,
  "вимкнено"
 ],
 "disk": [
  null,
  "диск"
 ],
 "dying": [
  null,
  "вмирає"
 ],
 "enabled": [
  null,
  "увімкнено"
 ],
 "host": [
  null,
  "вузол"
 ],
 "idle": [
  null,
  "бездіяльний"
 ],
 "network": [
  null,
  "мережа"
 ],
 "no": [
  null,
  "ні"
 ],
 "other": [
  null,
  "інше"
 ],
 "paused": [
  null,
  "призупинено"
 ],
 "running": [
  null,
  "працює"
 ],
 "shut off": [
  null,
  "вимкнути"
 ],
 "shutdown": [
  null,
  "завершити роботу"
 ],
 "suspended (PM)": [
  null,
  "призупинено (PM)"
 ],
 "vCPUs:": [
  null,
  "vCPU:"
 ],
 "yes": [
  null,
  "так"
 ]
}));
