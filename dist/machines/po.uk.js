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
 "Additional": [
  null,
  "Додаткові"
 ],
 "Address": [
  null,
  "Адреса"
 ],
 "Address:": [
  null,
  "Адреса:"
 ],
 "Automatically start libvirt on boot": [
  null,
  "Автоматично запускати libvirt при завантаженні"
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
 "CHANGE NETWORK STATE action failed": [
  null,
  "Не вдалося виконати дію зі зміни стану мережі"
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
 "Connect with any $0 viewer application.": [
  null,
  "З’єднатися із будь-якою програмою перегляду $0."
 ],
 "Connect with any SPICE or VNC viewer application.": [
  null,
  "З’єднатися із будь-якою програмою перегляду SPICE або VNC."
 ],
 "Connecting to Virtualization Service": [
  null,
  "Встановлюємо зв'язок із службою віртуалізації"
 ],
 "Connection": [
  null,
  "З’єднання"
 ],
 "Console Type": [
  null,
  "Тип консолі"
 ],
 "Consoles": [
  null,
  "Консолі"
 ],
 "Count:": [
  null,
  "Кількість:"
 ],
 "Create": [
  null,
  "Створити"
 ],
 "Create New VM": [
  null,
  "Створити віртуальну машину"
 ],
 "Create New Virtual Machine": [
  null,
  "Створити віртуальну машину"
 ],
 "Creation of vm $0 failed": [
  null,
  "Не вдалося створити віртуальну машину $0"
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
 "Disconnect": [
  null,
  "Від’єднатися"
 ],
 "Disconnected from serial console. Click the Reconnect button.": [
  null,
  "Від'єднано від послідовної консолі. Натисніть кнопку «Повторно з'єднатися»."
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
 "Filesystem": [
  null,
  "Файлова система"
 ],
 "Force Restart": [
  null,
  "Примусовий перезапуск"
 ],
 "Force Shut Down": [
  null,
  "Примусово вимкнути"
 ],
 "GiB": [
  null,
  "ГіБ"
 ],
 "Graphics Console (VNC)": [
  null,
  "Графічна консоль (VNC)"
 ],
 "Graphics Console in Desktop Viewer": [
  null,
  "Графічна консоль у перегляді стільниці"
 ],
 "Host": [
  null,
  "Вузол"
 ],
 "INSTALL VM action failed": [
  null,
  "Помилка під час дії зі встановлення ВМ"
 ],
 "Immediately Start VM": [
  null,
  "Негайно запустити ВМ"
 ],
 "Install": [
  null,
  "Встановити"
 ],
 "Installation Source": [
  null,
  "Джерело для встановлення"
 ],
 "Installation Source Type": [
  null,
  "Тип джерела для встановлення"
 ],
 "Installation Source should not be empty": [
  null,
  "Запис джерела для встановлення має бути непорожнім"
 ],
 "Invalid filename": [
  null,
  "Некоректна назва файла"
 ],
 "Launch Remote Viewer": [
  null,
  "Запустити віддалений переглядач"
 ],
 "Loading ...": [
  null,
  "Завантажуємо…"
 ],
 "MAC Address": [
  null,
  "MAC-адреса"
 ],
 "MTU": [
  null,
  "MTU"
 ],
 "Managed": [
  null,
  "Керована"
 ],
 "Manual Connection": [
  null,
  "З’єднання вручну"
 ],
 "Memory": [
  null,
  "Пам'ять"
 ],
 "Memory should be positive number": [
  null,
  "Об'єм пам'яті має бути додатним числом"
 ],
 "Memory:": [
  null,
  "Пам’ять:"
 ],
 "MiB": [
  null,
  "МіБ"
 ],
 "Model type": [
  null,
  "Тип моделі"
 ],
 "More Information": [
  null,
  "Докладніше"
 ],
 "Name": [
  null,
  "Назва"
 ],
 "Name should not be empty": [
  null,
  "Назва має бути непорожньою"
 ],
 "Name should not consist of empty characters only": [
  null,
  "Назва не може складатися лише із порожніх символів"
 ],
 "Networks": [
  null,
  "Мережі"
 ],
 "No VM is running or defined on this host": [
  null,
  "У цій основній системі не запущено або не визначено віртуальних машин"
 ],
 "No boot device found": [
  null,
  "Не знайдено пристрою для завантаження"
 ],
 "No console defined for this virtual machine.": [
  null,
  "Для цієї віртуальної машини консолей не визначено."
 ],
 "No disks defined for this VM": [
  null,
  "Для цієї ВМ не визначено дисків"
 ],
 "No matching files found": [
  null,
  "Відповідних файлів не знайдено"
 ],
 "No network interfaces defined for this VM": [
  null,
  "Немає інтерфейсів мережі, які визначено для цієї ВМ"
 ],
 "OS Vendor": [
  null,
  "Виробник ОС"
 ],
 "Ok": [
  null,
  "Гаразд"
 ],
 "Operating System": [
  null,
  "Операційна система"
 ],
 "Overview": [
  null,
  "Огляд"
 ],
 "Path to ISO file on host's file system": [
  null,
  "Шлях до ISO у файловій системі основної системи"
 ],
 "Path to file": [
  null,
  "Шлях до файла"
 ],
 "Please start the virtual machine to access its console.": [
  null,
  "Будь ласка, запустіть віртуальну машину, щоб отримати доступ до її консолі."
 ],
 "Plug": [
  null,
  "З'єднати"
 ],
 "Pool": [
  null,
  "Буфер"
 ],
 "Port": [
  null,
  "Порт"
 ],
 "Portgroup": [
  null,
  "Група портів"
 ],
 "Protocol": [
  null,
  "Протокол"
 ],
 "Readonly": [
  null,
  "Лише запис"
 ],
 "Reconnect": [
  null,
  "Повторно з’єднатися"
 ],
 "Remote URL": [
  null,
  "Віддалена адреса"
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
 "Send shortcut": [
  null,
  "Надіслати скорочення"
 ],
 "Serial Console": [
  null,
  "Послідовна консоль"
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
 "Source should start with http, ftp or nfs protocol": [
  null,
  "Адреса джерела має починатися із назви протоколу — http, ftp або nfs"
 ],
 "Start libvirt": [
  null,
  "Запустити libvirt"
 ],
 "Start the VM to see disk statistics.": [
  null,
  "Запустити віртуальну машину для перегляду статистики диска."
 ],
 "State": [
  null,
  "Стан"
 ],
 "Storage Size": [
  null,
  "Розмір зберігання"
 ],
 "Storage Size should not be negative number": [
  null,
  "Розмір зберігання має бути невід'ємним числом"
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
 "Too many files found": [
  null,
  "Знайдено забагато файлів"
 ],
 "Troubleshoot": [
  null,
  "Діагностика проблем"
 ],
 "Type": [
  null,
  "Тип"
 ],
 "URL": [
  null,
  "Адреса"
 ],
 "Unplug": [
  null,
  "Від'єднати"
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
 "Virtualization Service (libvirt) is Not Active": [
  null,
  "Служба віртуалізації (libvirt) не є активною"
 ],
 "Virtualization Service is Available": [
  null,
  "Доступна служба віртуалізації"
 ],
 "Virtualport": [
  null,
  "Віртуальний порт"
 ],
 "Volume": [
  null,
  "Том"
 ],
 "Your browser does not support iframes.": [
  null,
  "У браузері не передбачено підтримки iframe."
 ],
 "bridge": [
  null,
  "місток"
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
 "direct": [
  null,
  "безпосередньо"
 ],
 "disabled": [
  null,
  "вимкнено"
 ],
 "disk": [
  null,
  "диск"
 ],
 "down": [
  null,
  "нижче"
 ],
 "dying": [
  null,
  "вмирає"
 ],
 "enabled": [
  null,
  "увімкнено"
 ],
 "ethernet": [
  null,
  "ethernet"
 ],
 "host": [
  null,
  "вузол"
 ],
 "hostdev": [
  null,
  "пристрій осн. системи"
 ],
 "idle": [
  null,
  "бездіяльний"
 ],
 "mcast": [
  null,
  "mcast"
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
 "server": [
  null,
  "сервер"
 ],
 "show less": [
  null,
  "показати менше"
 ],
 "show more": [
  null,
  "показати більше"
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
 "udp": [
  null,
  "udp"
 ],
 "undefined": [
  null,
  "не визначено"
 ],
 "up": [
  null,
  "вище"
 ],
 "user": [
  null,
  "користувач"
 ],
 "vCPUs:": [
  null,
  "vCPU:"
 ],
 "vhostuser": [
  null,
  "vhostuser"
 ],
 "yes": [
  null,
  "так"
 ]
}));
