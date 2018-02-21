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
 "Action": [
  null,
  "Дія"
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
 "All running virtual machines will be turned off.": [
  null,
  "Усі запущені віртуальні машини буде вимкнено."
 ],
 "Automatically selected host": [
  null,
  "Автоматично вибраний вузол"
 ],
 "Autostart:": [
  null,
  "Автозапуск:"
 ],
 "Available": [
  null,
  "Доступні"
 ],
 "Base Template": [
  null,
  "Базовий шаблон"
 ],
 "Base template": [
  null,
  "Базовий шаблон"
 ],
 "Base template:": [
  null,
  "Базовий шаблон:"
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
 "CREATE VM action failed": [
  null,
  "Не вдалося виконати дію CREATE VM"
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
 "Cluster": [
  null,
  "Кластер"
 ],
 "Cluster Templates": [
  null,
  "Шаблони кластера"
 ],
 "Cluster Virtual Machines": [
  null,
  "Віртуальні машини кластера"
 ],
 "Confirm deletion of $0": [
  null,
  "Підтвердження вилучення $0"
 ],
 "Confirm migration": [
  null,
  "Підтвердження перенесення"
 ],
 "Confirm reload:": [
  null,
  "Підтвердження перезавантаження:"
 ],
 "Confirm save:": [
  null,
  "Підтвердження збереження:"
 ],
 "Connect to oVirt Engine": [
  null,
  "З'єднатися із рушієм oVirt"
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
 "Create VM": [
  null,
  "Створення ВМ"
 ],
 "Delete": [
  null,
  "Вилучити"
 ],
 "Delete associated storage files:": [
  null,
  "Вилучити пов’язані файли у сховищі даних:"
 ],
 "Description": [
  null,
  "Опис"
 ],
 "Description:": [
  null,
  "Опис:"
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
 "Edit the vdsm.conf": [
  null,
  "Редагувати vdsm.conf"
 ],
 "Emulated Machine:": [
  null,
  "Емуляція машини:"
 ],
 "Enter New VM name": [
  null,
  "Введіть назву нової ВМ"
 ],
 "FQDN": [
  null,
  "FQDN"
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
 "HA": [
  null,
  "HA"
 ],
 "HA:": [
  null,
  "HA:"
 ],
 "Host": [
  null,
  "Вузол"
 ],
 "Host to Maintenance": [
  null,
  "Вузол для обслуговування"
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
 "Loading data ...": [
  null,
  "Завантажуємо дані…"
 ],
 "MAC Address": [
  null,
  "MAC-адреса"
 ],
 "MIGRATE action failed": [
  null,
  "Не вдалося виконати дію MIGRATE"
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
 "Migrate To:": [
  null,
  "Перенести до:"
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
 "No VM found in oVirt.": [
  null,
  "У oVirt не знайдено ВМ."
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
 "OK": [
  null,
  "Гаразд"
 ],
 "OS": [
  null,
  "ОС"
 ],
 "OS Type:": [
  null,
  "Тип ОС:"
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
 "Optimized for:": [
  null,
  "Оптимізовано для:"
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
 "Please confirm, the host shall be switched to maintenance mode.": [
  null,
  "Будь ласка, підтвердьте, що вузол має бути перемкнуто у режим обслуговування."
 ],
 "Please provide fully qualified domain name and port of the oVirt engine.": [
  null,
  "Будь ласка, вкажіть повну доменну назву та порт рушія oVirt."
 ],
 "Please provide valid oVirt engine fully qualified domain name (FQDN) and port (443 by default)": [
  null,
  "Будь ласка, вкажіть повну доменну адресу (FQDN) і порт (типово 443) рушія oVirt"
 ],
 "Please refer to oVirt's $0 for more information about Remote Viewer setup.": [
  null,
  "Будь ласка, зверніться до $0 oVirt, щоб дізнатися більше про налаштовування засобу віддаленого перегляду."
 ],
 "Please start the virtual machine to access its console.": [
  null,
  "Будь ласка, запустіть віртуальну машину, щоб отримати доступ до її консолі."
 ],
 "Please wait till VMs list is loaded from the server.": [
  null,
  "Будь ласка, зачекайте, доки список віртуальних машин буде завантажено із сервера."
 ],
 "Please wait till list of templates is loaded from the server.": [
  null,
  "Будь ласка, зачекайте, доки з сервера буде завантажено список шаблонів."
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
 "Preparing for Maintenance": [
  null,
  "Готуємося до обслуговування"
 ],
 "Protocol": [
  null,
  "Протокол"
 ],
 "REBOOT action failed": [
  null,
  "Не вдалося виконати дію REBOOT"
 ],
 "Readonly": [
  null,
  "Лише запис"
 ],
 "Reconnect": [
  null,
  "Повторно з’єднатися"
 ],
 "Register oVirt": [
  null,
  "Зареєструвати oVirt"
 ],
 "Registering oVirt to Cockpit": [
  null,
  "Реєструємо oVirt на Cockpit"
 ],
 "Reload": [
  null,
  "Перезавантажити"
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
 "Run Here": [
  null,
  "Запустити тут"
 ],
 "Running Since:": [
  null,
  "Працює з:"
 ],
 "SHUTDOWN action failed": [
  null,
  "Не вдалося виконати дію SHUTDOWN"
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
 "START action failed": [
  null,
  "Не вдалося виконати дію START"
 ],
 "SUSPEND action failed": [
  null,
  "Не вдалося виконати дію SUSPEND"
 ],
 "Save": [
  null,
  "Зберегти"
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
 "Start the VM to see disk statistics.": [
  null,
  "Запустити віртуальну машину для перегляду статистики диска."
 ],
 "State": [
  null,
  "Стан"
 ],
 "Stateless": [
  null,
  "Без збереження стану"
 ],
 "Stateless:": [
  null,
  "Без збереження стану:"
 ],
 "Storage Size": [
  null,
  "Розмір зберігання"
 ],
 "Storage Size should not be negative number": [
  null,
  "Розмір зберігання має бути невід'ємним числом"
 ],
 "Suspend": [
  null,
  "Призупинити"
 ],
 "Switch Host to Maintenance": [
  null,
  "Перемкнути вузол у режим обслуговування"
 ],
 "Switching host to maintenance mode failed. Received error: ": [
  null,
  "Не вдалося перемкнути вузол у режим обслуговування. Отримано повідомлення про помилку:"
 ],
 "Switching host to maintenance mode in progress ...": [
  null,
  "Виконуємо перемикання вузла у режим обслуговування…"
 ],
 "System": [
  null,
  "Система"
 ],
 "Target": [
  null,
  "Призначення"
 ],
 "Template": [
  null,
  "Шаблон"
 ],
 "Templates": [
  null,
  "Шаблони"
 ],
 "Templates of $0 cluster": [
  null,
  "Шаблони кластера $0"
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
 "This virtual machine is not managed by oVirt": [
  null,
  "Ця віртуальна машина не керується з боку oVirt"
 ],
 "Too many files found": [
  null,
  "Знайдено забагато файлів"
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
 "VDSM": [
  null,
  "VDSM"
 ],
 "VDSM Service Management": [
  null,
  "Керування службою VDSM"
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
 "VM icon": [
  null,
  "Піктограма ВМ"
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
 "Version": [
  null,
  "Версія"
 ],
 "Version num": [
  null,
  "Номер версії"
 ],
 "Virtual Machines": [
  null,
  "Віртуальні машини"
 ],
 "Virtual Machines of $0 cluster": [
  null,
  "Віртуальні машини кластера $0"
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
 "connecting": [
  null,
  "встановлюємо з'єднання"
 ],
 "cores": [
  null,
  "ядра"
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
 "error": [
  null,
  "помилка"
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
 "initializing": [
  null,
  "ініціалізація"
 ],
 "installation failed": [
  null,
  "не вдалося встановити"
 ],
 "installing OS": [
  null,
  "встановлюємо ОС"
 ],
 "kdumping": [
  null,
  "створюємо дамп ядра"
 ],
 "maintenance": [
  null,
  "супровід"
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
 "non operational": [
  null,
  "не придатна до роботи"
 ],
 "non responsive": [
  null,
  "не відповідає"
 ],
 "oVirt": [
  null,
  "oVirt"
 ],
 "oVirt Host State:": [
  null,
  "Стан вузла oVirt:"
 ],
 "oVirt Provider installation script failed due to missing arguments.": [
  null,
  "Не вдалося виконати сценарій встановлення засобу забезпечення oVirt через пропущені аргументи."
 ],
 "oVirt Provider installation script failed: Can't write to /etc/cockpit/machines-ovirt.config, try as root.": [
  null,
  "Не вдалося виконати сценарій встановлення засобу забезпечення oVirt: не вдалося виконати запис до /etc/cockpit/machines-ovirt.config, спробуйте від імені root."
 ],
 "oVirt installation script failed with following output: ": [
  null,
  "Не вдалося виконати сценарій встановлення oVirt із таким виведенням: "
 ],
 "oVirt login in progress": [
  null,
  "Виконуємо вхід до oVirt"
 ],
 "other": [
  null,
  "інше"
 ],
 "paused": [
  null,
  "призупинено"
 ],
 "pending approval": [
  null,
  "чекаємо на підтвердження"
 ],
 "reboot": [
  null,
  "перезавантаження"
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
 "sockets": [
  null,
  "сокети"
 ],
 "suspended (PM)": [
  null,
  "призупинено (PM)"
 ],
 "threads": [
  null,
  "потоки"
 ],
 "udp": [
  null,
  "udp"
 ],
 "unassigned": [
  null,
  "не прив'язано"
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
 "vCPUs": [
  null,
  "Вірт. проц."
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
