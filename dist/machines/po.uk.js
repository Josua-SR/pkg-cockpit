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
 "$0 is available for most operating systems. To install it, search for it in GNOME Software or run the following:": [
  null,
  "$0 можна користуватися у більшості операційних систем. Щоб встановити пакунок із програмою, знайдіть відповідний запис у Програмних засобах GNOME або віддайте таку команду:"
 ],
 "Add": [
  null,
  "Додати"
 ],
 "Add Disk": [
  null,
  "Додати диск"
 ],
 "Address": [
  null,
  "Адреса"
 ],
 "Address:": [
  null,
  "Адреса:"
 ],
 "Always attach": [
  null,
  "Завжди долучати"
 ],
 "Apply": [
  null,
  "Застосувати"
 ],
 "Automatically start libvirt on boot": [
  null,
  "Автоматично запускати libvirt при завантаженні"
 ],
 "Autostart": [
  null,
  "Автозапуск"
 ],
 "Available": [
  null,
  "Доступні"
 ],
 "Boot Order": [
  null,
  "Порядок завантаження"
 ],
 "Bus": [
  null,
  "Канал"
 ],
 "CHANGE NETWORK STATE action failed": [
  null,
  "Не вдалося виконати дію зі зміни стану мережі"
 ],
 "CPU Type": [
  null,
  "Тип процесора"
 ],
 "Cancel": [
  null,
  "Скасувати"
 ],
 "Capacity": [
  null,
  "Місткість"
 ],
 "Changes will take effect after shutting down the VM": [
  null,
  "Зміни буде застосовано після завершення роботи ВМ"
 ],
 "Clicking \"Launch Remote Viewer\" will download a .vv file and launch $0.": [
  null,
  "У результаті натискання «Запустити віддалений переглядач» буде отримано файл .vv і запущено $0."
 ],
 "Connect with any $0 viewer application.": [
  null,
  "З’єднатися із будь-якою програмою перегляду $0."
 ],
 "Connect with any SPICE or VNC viewer application.": [
  null,
  "З’єднатися із будь-якою програмою перегляду SPICE або VNC."
 ],
 "Connecting": [
  null,
  "Встановлюємо з’єднання"
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
 "Cores per socket": [
  null,
  "Кількість ядер на сокет"
 ],
 "Create": [
  null,
  "Створити"
 ],
 "Create New": [
  null,
  "Створити"
 ],
 "Create Storage Pool": [
  null,
  "Створити резервне сховище"
 ],
 "Create VM": [
  null,
  "Створення ВМ"
 ],
 "Creation of vm $0 failed": [
  null,
  "Не вдалося створити віртуальну машину $0"
 ],
 "Ctrl+Alt+Del": [
  null,
  "Ctrl+Alt+Del"
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
 "Disconnected": [
  null,
  "Роз'єднано"
 ],
 "Disconnected from serial console. Click the Reconnect button.": [
  null,
  "Від'єднано від послідовної консолі. Натисніть кнопку «Повторно з'єднатися»."
 ],
 "Disk failed to be attached": [
  null,
  "Не вдалося долучити диск"
 ],
 "Disk failed to be created": [
  null,
  "Не вдалося створити диск"
 ],
 "Disks": [
  null,
  "Диски"
 ],
 "Download the MSI from $0": [
  null,
  "Отримати MSI з $0"
 ],
 "Edit": [
  null,
  "Змінити"
 ],
 "Emulated Machine": [
  null,
  "Емуляція машини"
 ],
 "Fewer than the maximum number of virtual CPUs should be enabled.": [
  null,
  "Має бути увімкнено менше за максимальну кількість віртуальних процесорів."
 ],
 "File": [
  null,
  "Файл"
 ],
 "Filesystem": [
  null,
  "Файлова система"
 ],
 "Filesystem Directory": [
  null,
  "Каталог файлової системи"
 ],
 "Force Restart": [
  null,
  "Примусовий перезапуск"
 ],
 "Force Shut Down": [
  null,
  "Примусово вимкнути"
 ],
 "Format": [
  null,
  "Формат"
 ],
 "GET HYPERVISOR MAX VCPU action failed": [
  null,
  "Помилка під час спроби виконати дію GET HYPERVISOR MAX VCPU"
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
 "Host Name": [
  null,
  "Назва вузла"
 ],
 "Host should not be empty": [
  null,
  "Вузол не повинен бути порожнім"
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
 "Mac Address": [
  null,
  "Mac-адреса"
 ],
 "Manual Connection": [
  null,
  "З’єднання вручну"
 ],
 "Maximum number of virtual CPUs allocated for the guest OS, which must be between 1 and $0": [
  null,
  "Максимальна кількість віртуальних процесорів, наданих для гостьової операційної системи, має бути у межах від 1 до $0"
 ],
 "Memory": [
  null,
  "Пам'ять"
 ],
 "Memory should be positive number": [
  null,
  "Об'єм пам'яті має бути додатним числом"
 ],
 "MiB": [
  null,
  "МіБ"
 ],
 "Model": [
  null,
  "Модель"
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
 "Network File System": [
  null,
  "Мережева файлова система"
 ],
 "Network Type": [
  null,
  "Тип мережі"
 ],
 "Network settings could not be saved": [
  null,
  "Не вдалося зберегти параметри мережі"
 ],
 "Networks": [
  null,
  "Мережі"
 ],
 "New Volume Name": [
  null,
  "Назва нового тому"
 ],
 "No Storage Volumes defined for this Storage Pool": [
  null,
  "Для цього буфера зберігання сховища не визначено томів сховища"
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
 "No storage pool is defined on this host": [
  null,
  "На цьому вузлі не визначено буфера зберігання даних"
 ],
 "No virtual networks": [
  null,
  "Немає віртуальних мереж"
 ],
 "OS Vendor": [
  null,
  "Виробник ОС"
 ],
 "Operating System": [
  null,
  "Операційна система"
 ],
 "Overview": [
  null,
  "Огляд"
 ],
 "Path on host's filesystem": [
  null,
  "Шлях у файловій системі вузла"
 ],
 "Path to ISO file on host's file system": [
  null,
  "Шлях до ISO у файловій системі основної системи"
 ],
 "Path to file": [
  null,
  "Шлях до файла"
 ],
 "Persistence": [
  null,
  "Сталість"
 ],
 "Please enter new volume name": [
  null,
  "Будь ласка, введіть назву нового тому"
 ],
 "Please enter new volume size": [
  null,
  "Будь ласка, введіть розмір нового тому"
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
 "Preferred number of sockets to expose to the guest.": [
  null,
  "Бажана кількість сокетів, які слід надавати гостьовій системі."
 ],
 "Protocol": [
  null,
  "Протокол"
 ],
 "QEMU/KVM System connection": [
  null,
  "З'єднання системи QEMU/KVM"
 ],
 "QEMU/KVM User connection": [
  null,
  "З'єднання користувача QEMU/KVM"
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
 "Save": [
  null,
  "Зберегти"
 ],
 "Send Non-Maskable Interrupt": [
  null,
  "Надіслати немасковане переривання"
 ],
 "Send key": [
  null,
  "Надіслати ключ"
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
 "Size": [
  null,
  "Розмір"
 ],
 "Sockets": [
  null,
  "Сокети"
 ],
 "Source": [
  null,
  "Джерело"
 ],
 "Source Path": [
  null,
  "Шлях до джерела"
 ],
 "Source path should not be empty": [
  null,
  "Шлях до джерела не може бути порожнім"
 ],
 "Source should start with https, ftp or nfs protocol": [
  null,
  "Запис джерела має починатися із назви протоколу: https, ftp або nfs"
 ],
 "Start libvirt": [
  null,
  "Запустити libvirt"
 ],
 "Start pool when host boots": [
  null,
  "Запускати резервне сховище після завантаження вузла"
 ],
 "Start the VM to see disk statistics.": [
  null,
  "Запустити віртуальну машину для перегляду статистики диска."
 ],
 "Startup": [
  null,
  "Запуск"
 ],
 "State": [
  null,
  "Стан"
 ],
 "Storage Pool Name": [
  null,
  "Назва резервного сховища"
 ],
 "Storage Pool failed to be created": [
  null,
  "Не вдалося створити резервне сховище"
 ],
 "Storage Pools": [
  null,
  "Буфери даних"
 ],
 "Storage Size": [
  null,
  "Розмір зберігання"
 ],
 "Storage Size should not be negative number": [
  null,
  "Розмір зберігання має бути невід'ємним числом"
 ],
 "Storage Volumes": [
  null,
  "Томи даних"
 ],
 "System": [
  null,
  "Система"
 ],
 "Target Path": [
  null,
  "Шлях призначення"
 ],
 "Target path should not be empty": [
  null,
  "Шлях призначення не може бути порожнім"
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
 "The directory on the server being exported": [
  null,
  "Каталог на сервері, який експортується"
 ],
 "The pool is empty": [
  null,
  "Буфер порожній"
 ],
 "Threads per core": [
  null,
  "Потоків на ядро"
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
 "Unique name": [
  null,
  "Унікальна назва"
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
 "Use Existing": [
  null,
  "Використати наявний"
 ],
 "Used": [
  null,
  "Використано"
 ],
 "VCPU settings could not be saved": [
  null,
  "Не вдалося зберегти параметри віртуальних процесорів"
 ],
 "VM CHANGE_NETWORK_STATE action failed": [
  null,
  "Помилка дії VM CHANGE_NETWORK_STATE"
 ],
 "VM DELETE (DESTROY) action failed": [
  null,
  "Помилка дії VM DELETE (DESTROY)"
 ],
 "VM DELETE (UNDEFINE) action failed": [
  null,
  "Помилка дії VM DELETE (UNDEFINE)"
 ],
 "VM DELETE action failed": [
  null,
  "Помилка дії VM DELETE"
 ],
 "VM DETACH_DISK action failed": [
  null,
  "Помилка дії VM DETACH_DISK"
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
 "VM SENDNMI action failed": [
  null,
  "Помилка дії VM SENDNMI"
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
 "Volume": [
  null,
  "Том"
 ],
 "active": [
  null,
  "активний"
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
 "inactive": [
  null,
  "неактивний"
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
 "qcow2": [
  null,
  "qcow2"
 ],
 "raw": [
  null,
  "raw"
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
 "vCPU Count": [
  null,
  "К-ть вірт. процесорів"
 ],
 "vCPU Maximum": [
  null,
  "Макс. вірт. процесорів"
 ],
 "vCPUs": [
  null,
  "Вірт. проц."
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
