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
  "language": "uk",
  "x-generator": "Zanata 4.6.2"
 },
 "$0 Network": [
  null,
  "Мережа $0"
 ],
 "$0 is available for most operating systems. To install it, search for it in GNOME Software or run the following:": [
  null,
  "$0 можна користуватися у більшості операційних систем. Щоб встановити пакунок із програмою, знайдіть відповідний запис у Програмних засобах GNOME або віддайте таку команду:"
 ],
 "Activate": [
  null,
  "Задіяти"
 ],
 "Add": [
  null,
  "Додати"
 ],
 "Add Disk": [
  null,
  "Додати диск"
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
 "Boot order settings could not be saved": [
  null,
  "Не вдалося зберегти параметри порядку завантаження"
 ],
 "Bus": [
  null,
  "Канал"
 ],
 "CPU Type": [
  null,
  "Тип процесора"
 ],
 "Cache": [
  null,
  "Кеш"
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
 "Creation of VM $0 failed": [
  null,
  "Не вдалося створити ВМ $0"
 ],
 "Ctrl+Alt+Del": [
  null,
  "Ctrl+Alt+Del"
 ],
 "Current Allocation": [
  null,
  "Поточне отримання"
 ],
 "DHCP Range": [
  null,
  "Діапазон DHCP"
 ],
 "Deactivate": [
  null,
  "Вимкнути"
 ],
 "Delete": [
  null,
  "Вилучити"
 ],
 "Delete Content": [
  null,
  "Вилучити дані"
 ],
 "Delete Storage Pool $0": [
  null,
  "Вилучити буфер зберігання даних $0"
 ],
 "Delete associated storage files:": [
  null,
  "Вилучити пов’язані файли у сховищі даних:"
 ],
 "Delete the Volumes inside this Pool": [
  null,
  "Вилучити томи у цьому буфері"
 ],
 "Deleting an inactive Storage Pool will only undefine the Pool. Its content will not be deleted.": [
  null,
  "Вилучення неактивного буфера зберігання даних призведе лише до скасування визначення буфера. Вміст буфера вилучено не буде."
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
 "Disk $0 fail to get detached from VM $1": [
  null,
  "Не вдалося від'єднати диск $0 від віртуальної машини $1"
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
 "Disks cannot be removed from $0 VMs": [
  null,
  "Не можна вилучати диски з ВМ $0"
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
  "Емульована машина"
 ],
 "Existing Disk Image": [
  null,
  "Наявний образ диска"
 ],
 "Existing disk image on host's file system": [
  null,
  "Наявний образ диска у файловій системі основної системи"
 ],
 "Failed to fetch the IP addresses of the interfaces present in $0": [
  null,
  "Не вдалося отримати IP-адреси інтерфейсів, які є у $0"
 ],
 "Fewer than the maximum number of virtual CPUs should be enabled.": [
  null,
  "Має бути увімкнено менше за максимальну кількість віртуальних процесорів."
 ],
 "File": [
  null,
  "Файл"
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
 "Forwarding mode": [
  null,
  "Режим переспрямовування"
 ],
 "General": [
  null,
  "Загальний"
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
 "Hide Performance Options": [
  null,
  "Приховати параметри швидкодії"
 ],
 "Host": [
  null,
  "Вузол"
 ],
 "Host Device": [
  null,
  "Пристрій основної системи"
 ],
 "Host Name": [
  null,
  "Назва вузла"
 ],
 "Host should not be empty": [
  null,
  "Вузол не повинен бути порожнім"
 ],
 "IP Address": [
  null,
  "IP-адреса"
 ],
 "IPv4 Address": [
  null,
  "Адреса IPv4"
 ],
 "IPv6 Address": [
  null,
  "Адреса IPv6"
 ],
 "Immediately Start VM": [
  null,
  "Негайно запустити ВМ"
 ],
 "In most configurations, macvtap does not work for host to guest network communication.": [
  null,
  "У більшості конфігурацій macvtap не працює для обміну мережею між основною і гостьовою системами."
 ],
 "Initiator": [
  null,
  "Ініціатор"
 ],
 "Initiator IQN should not be empty": [
  null,
  "IQN ініціатора має бути непорожнімy"
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
 "Interface Type": [
  null,
  "Тип інтерфейсу"
 ],
 "Invalid filename": [
  null,
  "Некоректна назва файла"
 ],
 "Isolated Network": [
  null,
  "Ізольована мережа"
 ],
 "Launch Remote Viewer": [
  null,
  "Запустити віддалений переглядач"
 ],
 "Loading ...": [
  null,
  "Завантажуємо…"
 ],
 "Local Install Media": [
  null,
  "Локальні носії для встановлення"
 ],
 "MAC Address": [
  null,
  "MAC-адреса"
 ],
 "Mac": [
  null,
  "Mac"
 ],
 "Mac Address": [
  null,
  "Mac-адреса"
 ],
 "Manual Connection": [
  null,
  "З’єднання вручну"
 ],
 "Maximum Allocation": [
  null,
  "Максимальне отримання"
 ],
 "Maximum Transmission Unit": [
  null,
  "Максимальна одиниця передавання"
 ],
 "Maximum memory could not be saved": [
  null,
  "Не вдалося зберегти дані щодо максимального обсягу пам'яті"
 ],
 "Maximum number of virtual CPUs allocated for the guest OS, which must be between 1 and $0": [
  null,
  "Максимальна кількість віртуальних процесорів, наданих для гостьової операційної системи, має бути у межах від 1 до $0"
 ],
 "Memory": [
  null,
  "Пам'ять"
 ],
 "Memory could not be saved": [
  null,
  "Не вдалося зберегти дані щодо обсягу пам'яті"
 ],
 "Memory size between 128 MiB and the maximum allocation": [
  null,
  "Обсяг пам'яті між 128 МіБ та максимальним отриманим"
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
 "NAT to $0": [
  null,
  "NAT до $0"
 ],
 "NIC $0 of VM $1 failed to change state": [
  null,
  "NIC $0 ВМ $1, не вдалося змінити стан"
 ],
 "Name": [
  null,
  "Назва"
 ],
 "Name should not be empty": [
  null,
  "Назва має бути непорожньою"
 ],
 "Name: ": [
  null,
  "Назва: "
 ],
 "Netmask": [
  null,
  "Маска мережі"
 ],
 "Network $0 failed to get activated": [
  null,
  "Не вдалося активувати мережу $0"
 ],
 "Network $0 failed to get deactivated": [
  null,
  "Не вдалося деактивувати мережу $0"
 ],
 "Network Boot (PXE)": [
  null,
  "Мережеве завантаження (PXE)"
 ],
 "Network File System": [
  null,
  "Мережева файлова система"
 ],
 "Network Interfaces": [
  null,
  "Інтерфейси мережі"
 ],
 "Network Selection does not support PXE.": [
  null,
  "Для вибору мережі не передбачено підтримки PXE."
 ],
 "Network interface settings could not be saved": [
  null,
  "Не вдалося зберегти параметри інтерфейсу мережі"
 ],
 "Networks": [
  null,
  "Мережі"
 ],
 "New Volume Name": [
  null,
  "Назва нового тому"
 ],
 "No Storage Pools available": [
  null,
  "Немає доступних буферів зберігання даних"
 ],
 "No Storage Volumes defined for this Storage Pool": [
  null,
  "Для цього буфера зберігання сховища не визначено томів сховища"
 ],
 "No VM is running or defined on this host": [
  null,
  "У цій основній системі не запущено або не визначено віртуальних машин"
 ],
 "No Virtual Networks": [
  null,
  "Немає віртуальних мереж"
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
 "No network is defined on this host": [
  null,
  "У цій основній системі мережу не визначено"
 ],
 "No networks available": [
  null,
  "Немає доступних мереж"
 ],
 "No storage pool is defined on this host": [
  null,
  "На цьому вузлі не визначено буфера зберігання даних"
 ],
 "None (Isolated Network)": [
  null,
  "Немає (ізольована мережа)"
 ],
 "OS Vendor": [
  null,
  "Виробник ОС"
 ],
 "One or more selected volumes are used by domains. Detach the disks first to allow volume deletion.": [
  null,
  "Один або декілька позначених томів використовуються доменами. Щоб уможливити вилучення цих томів, спочатку від'єднайте диски."
 ],
 "Only editable when the guest is shut off": [
  null,
  "Можна редагувати, лише якщо гостьову систему вимкнено"
 ],
 "Open": [
  null,
  "Відкрита"
 ],
 "Operating System": [
  null,
  "Операційна система"
 ],
 "Operation is in progress": [
  null,
  ""
 ],
 "Overview": [
  null,
  "Огляд"
 ],
 "Path": [
  null,
  "Шлях"
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
 "Pause": [
  null,
  "Призупинити"
 ],
 "Persistence": [
  null,
  "Сталість"
 ],
 "Persistent": [
  null,
  "Постійний"
 ],
 "Physical Disk Device": [
  null,
  "Фізичний пристрій диска"
 ],
 "Physical disk device on host": [
  null,
  "Фізичний пристрій у основній системі"
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
 "Prefix": [
  null,
  "Префікс"
 ],
 "Private": [
  null,
  "Закрита"
 ],
 "Product": [
  null,
  "Продукт"
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
 "Resume": [
  null,
  "Відновити"
 ],
 "Route to $0": [
  null,
  "Маршрут до $0"
 ],
 "Routed Network": [
  null,
  "Маршрутизована мережа"
 ],
 "Run": [
  null,
  "Запустити"
 ],
 "Run when host boots": [
  null,
  "Запустити під час завантаження основної системи"
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
 "Show Performance Options": [
  null,
  "Показати параметри швидкодії"
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
 "Source Format": [
  null,
  "Початковий формат"
 ],
 "Source Path": [
  null,
  "Шлях до джерела"
 ],
 "Source path should not be empty": [
  null,
  "Шлях до джерела не може бути порожнім"
 ],
 "Source should start with http, ftp or nfs protocol": [
  null,
  "Адреса джерела має починатися із назви протоколу — http, ftp або nfs"
 ],
 "Start libvirt": [
  null,
  "Запустити libvirt"
 ],
 "Start pool when host boots": [
  null,
  "Запускати резервне сховище після завантаження вузла"
 ],
 "Startup": [
  null,
  "Запуск"
 ],
 "State": [
  null,
  "Стан"
 ],
 "Storage": [
  null,
  "Сховище даних"
 ],
 "Storage Pool $0 failed to get activated": [
  null,
  "Не вдалося активувати буфер сховища $0"
 ],
 "Storage Pool $0 failed to get deactivated": [
  null,
  "Не вдалося деактивувати буфер сховища $0"
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
 "Storage Volumes": [
  null,
  "Томи даних"
 ],
 "Storage Volumes could not be deleted": [
  null,
  "Не вдалося вилучити томи сховища даних"
 ],
 "System": [
  null,
  "Система"
 ],
 "Target": [
  null,
  "Призначення"
 ],
 "Target Path": [
  null,
  "Шлях призначення"
 ],
 "Target path should not be empty": [
  null,
  "Шлях призначення не може бути порожнім"
 ],
 "The Storage Pool could not be deleted": [
  null,
  "Не вдалося вилучити буфер сховища даних"
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
 "This volume is already used by another VM.": [
  null,
  "Цей том вже використано іншою ВМ."
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
 "Type ID": [
  null,
  "Ідентифікатор типу"
 ],
 "URL": [
  null,
  "Адреса"
 ],
 "Unique name": [
  null,
  "Унікальна назва"
 ],
 "Unit": [
  null,
  "Модуль"
 ],
 "Unknown": [
  null,
  "Невідомий"
 ],
 "Unplug": [
  null,
  "Від'єднати"
 ],
 "Up to $0 $1 available in the default location": [
  null,
  ""
 ],
 "Up to $0 $1 available on the host": [
  null,
  "У основній системі доступними є до $0 $1"
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
 "Used by": [
  null,
  "Використовується"
 ],
 "VCPU settings could not be saved": [
  null,
  "Не вдалося зберегти параметри віртуальних процесорів"
 ],
 "VM $0 failed to Reboot": [
  null,
  "Не вдалося перезавантажити віртуальну машину $0"
 ],
 "VM $0 failed to force Reboot": [
  null,
  "Не вдалося примусово перезавантажити віртуальну машину $0"
 ],
 "VM $0 failed to force shutdown": [
  null,
  "Не вдалося примусово вимкнути віртуальну машину $0"
 ],
 "VM $0 failed to get deleted": [
  null,
  "Не вдалося вилучити віртуальну машину $0"
 ],
 "VM $0 failed to get installed": [
  null,
  "Не вдалося встановити віртуальну машину $0"
 ],
 "VM $0 failed to pause": [
  null,
  "Не вдалося призупинити віртуальну машину $0"
 ],
 "VM $0 failed to resume": [
  null,
  "Не вдалося відновити роботу віртуальної машини $0"
 ],
 "VM $0 failed to send NMI": [
  null,
  "Не вдалося надіслати NMI віртуальній машині $0"
 ],
 "VM $0 failed to shutdown": [
  null,
  "Не вдалося вимкнути віртуальну машину $0"
 ],
 "VM $0 failed to start": [
  null,
  "Не вдалося запустити віртуальну машину $0"
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
 "Vendor": [
  null,
  "Постачальник"
 ],
 "Virtual Machines": [
  null,
  "Віртуальні машини"
 ],
 "Virtual Network": [
  null,
  "Віртуальна мережа"
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
 "WWPN": [
  null,
  "WWPN"
 ],
 "You need to select the most closely matching OS vendor and Operating System": [
  null,
  "Вам слід вибрати найбільш відповідного виробника операційної системи і операційну систему"
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
 "control-label $0": [
  null,
  "control-label $0"
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
 "host device": [
  null,
  "пристрій основної системи"
 ],
 "hostdev": [
  null,
  "пристрій осн. системи"
 ],
 "iSCSI Initiator IQN": [
  null,
  "IQN ініціатора iSCSI"
 ],
 "iSCSI Target": [
  null,
  "Ціль iSCSI"
 ],
 "iSCSI direct Target": [
  null,
  "Безпосереднє призначення iSCSI"
 ],
 "iSCSI target IQN": [
  null,
  "IQN цілі iSCSI"
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
 "redirected device": [
  null,
  "переспрямований пристрій"
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
