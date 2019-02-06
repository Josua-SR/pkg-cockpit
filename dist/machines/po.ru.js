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
 "$0 is available for most operating systems. To install it, search for it in GNOME Software or run the following:": [
  null,
  "$0 доступен для большинства операционных систем. Чтобы установить его, выполните поиск в программном обеспечении GNOME или выполните следующие действия:"
 ],
 "Activate": [
  null,
  "Включить"
 ],
 "Add": [
  null,
  "Добавить"
 ],
 "Add Disk": [
  null,
  "Добавить диск"
 ],
 "Address": [
  null,
  "Адрес"
 ],
 "Address:": [
  null,
  "Адрес:"
 ],
 "Always attach": [
  null,
  ""
 ],
 "Apply": [
  null,
  "Применить"
 ],
 "Automatically start libvirt on boot": [
  null,
  "Автоматически запускать libvirt при загрузке"
 ],
 "Autostart": [
  null,
  ""
 ],
 "Available": [
  null,
  "Доступно"
 ],
 "Boot Order": [
  null,
  ""
 ],
 "Bus": [
  null,
  "автобус"
 ],
 "CHANGE NETWORK STATE action failed": [
  null,
  "Не удалось выполнить действие CHANGE NETWORK STATE"
 ],
 "CPU Type": [
  null,
  ""
 ],
 "Cancel": [
  null,
  "Отмена"
 ],
 "Capacity": [
  null,
  "Объем"
 ],
 "Changes will take effect after shutting down the VM": [
  null,
  "Изменения вступят в силу после выключения виртуальной машины"
 ],
 "Clicking \"Launch Remote Viewer\" will download a .vv file and launch $0.": [
  null,
  "Нажав «Launch Remote Viewer», вы загрузите файл .vv и запустите $0"
 ],
 "Connect with any $0 viewer application.": [
  null,
  "Подключитесь к любому $0 приложение для просмотра."
 ],
 "Connect with any SPICE or VNC viewer application.": [
  null,
  "Подключайтесь к любому приложению SPICE или VNC."
 ],
 "Connecting": [
  null,
  "Подключение"
 ],
 "Connecting to Virtualization Service": [
  null,
  "Подключение к службе виртуализации"
 ],
 "Connection": [
  null,
  "Соединение"
 ],
 "Console Type": [
  null,
  "Тип консоли"
 ],
 "Consoles": [
  null,
  "консоли"
 ],
 "Cores per socket": [
  null,
  "Ядер на сокет"
 ],
 "Create": [
  null,
  "Создать"
 ],
 "Create New": [
  null,
  "Создать"
 ],
 "Create Storage Pool": [
  null,
  "Создать пул хранения"
 ],
 "Create VM": [
  null,
  "Создать виртуальную машину"
 ],
 "Creation of vm $0 failed": [
  null,
  "Создание vm $0 не удалось"
 ],
 "Ctrl+Alt+Del": [
  null,
  "Ctrl + Alt + Del"
 ],
 "Deactivate": [
  null,
  "Отключить"
 ],
 "Delete": [
  null,
  "Удалить"
 ],
 "Delete Content": [
  null,
  ""
 ],
 "Delete Storage Pool $0": [
  null,
  ""
 ],
 "Delete associated storage files:": [
  null,
  "Удаление связанных файлов хранения:"
 ],
 "Delete the Volumes inside this Pool": [
  null,
  ""
 ],
 "Deleting an inactive Storage Pool will only undefine the Pool. Its content will not be deleted.": [
  null,
  ""
 ],
 "Device": [
  null,
  "Устройство"
 ],
 "Disconnect": [
  null,
  "Отключиться"
 ],
 "Disconnected": [
  null,
  "Отключен"
 ],
 "Disconnected from serial console. Click the Reconnect button.": [
  null,
  "Отключен от последовательной консоли. Нажмите кнопку «Повторное подключение»."
 ],
 "Disk failed to be attached": [
  null,
  "Не удалось подключить диск"
 ],
 "Disk failed to be created": [
  null,
  "Не удалось создать диск"
 ],
 "Disks": [
  null,
  "Диски"
 ],
 "Download the MSI from $0": [
  null,
  "Загрузите MSI из $0"
 ],
 "Edit": [
  null,
  "Правка"
 ],
 "Emulated Machine": [
  null,
  ""
 ],
 "Fewer than the maximum number of virtual CPUs should be enabled.": [
  null,
  "Меньше, чем максимальное количество виртуальных процессоров должно быть включено."
 ],
 "File": [
  null,
  "Файл"
 ],
 "Filesystem": [
  null,
  "Файловая система"
 ],
 "Filesystem Directory": [
  null,
  "Каталог файловой системы"
 ],
 "Force Restart": [
  null,
  "Принудительный перезапуск"
 ],
 "Force Shut Down": [
  null,
  "Завершение работы"
 ],
 "Format": [
  null,
  "Формат"
 ],
 "GET HYPERVISOR MAX VCPU action failed": [
  null,
  "Не удалось выполнить действие GET HYPERVISOR MAX VCPU"
 ],
 "GiB": [
  null,
  "ГиБ"
 ],
 "Graphics Console (VNC)": [
  null,
  "Графическая консоль (VNC)"
 ],
 "Graphics Console in Desktop Viewer": [
  null,
  "Графическая консоль в Desktop Viewer"
 ],
 "Host": [
  null,
  "Узел"
 ],
 "Host Name": [
  null,
  "Имя узла"
 ],
 "Host should not be empty": [
  null,
  "Хост не должен быть пустым"
 ],
 "INSTALL VM action failed": [
  null,
  "УСТАНОВИТЬ действие VM не удалось"
 ],
 "Immediately Start VM": [
  null,
  "Немедленно запустите VM"
 ],
 "Install": [
  null,
  "Установка"
 ],
 "Installation Source": [
  null,
  "Источник установки"
 ],
 "Installation Source Type": [
  null,
  "Тип источника установки"
 ],
 "Installation Source should not be empty": [
  null,
  "Источник установки не должен быть пустым"
 ],
 "Invalid filename": [
  null,
  "Неверное имя файла"
 ],
 "Launch Remote Viewer": [
  null,
  "Запустить средство удаленного просмотра"
 ],
 "Loading ...": [
  null,
  "Загрузка..."
 ],
 "MAC Address": [
  null,
  "MAC-адрес"
 ],
 "Mac Address": [
  null,
  "MAC-адрес"
 ],
 "Manual Connection": [
  null,
  "Ручное подключение"
 ],
 "Maximum number of virtual CPUs allocated for the guest OS, which must be between 1 and $0": [
  null,
  "Максимальное количество виртуальных процессоров, выделенных для гостевой ОС, которое должно быть от 1 до $0"
 ],
 "Memory": [
  null,
  "Память"
 ],
 "MiB": [
  null,
  "МиБ"
 ],
 "Model": [
  null,
  "Модель"
 ],
 "Model type": [
  null,
  "Тип модели"
 ],
 "More Information": [
  null,
  "Дополнительная информация"
 ],
 "Name": [
  null,
  "Имя"
 ],
 "Name should not be empty": [
  null,
  "Имя не должно быть пустым"
 ],
 "Network File System": [
  null,
  "Сетевая файловая система"
 ],
 "Network Type": [
  null,
  "Тип сети"
 ],
 "Network settings could not be saved": [
  null,
  "Сетевые настройки не могут быть сохранены"
 ],
 "Networks": [
  null,
  "Сети"
 ],
 "New Volume Name": [
  null,
  "Новое имя тома"
 ],
 "No Storage Volumes defined for this Storage Pool": [
  null,
  "Для этого пула хранения не определены тома хранения"
 ],
 "No VM is running or defined on this host": [
  null,
  "Никакая виртуальная машина не запущена или не определена на этом хосте"
 ],
 "No boot device found": [
  null,
  "Не найдено загрузочного устройства"
 ],
 "No console defined for this virtual machine.": [
  null,
  "Консоли не определены для этой виртуальной машины."
 ],
 "No disks defined for this VM": [
  null,
  "Диски, определенные для этой виртуальной машины"
 ],
 "No matching files found": [
  null,
  "Не найдено совпадающих файлов"
 ],
 "No network interfaces defined for this VM": [
  null,
  "Сетевые интерфейсы, определенные для этой виртуальной машины"
 ],
 "No storage pool is defined on this host": [
  null,
  "На этом хосте не определен пул хранения"
 ],
 "No virtual networks": [
  null,
  "Нет виртуальных сетей"
 ],
 "OS Vendor": [
  null,
  "Поставщик ОС"
 ],
 "Operating System": [
  null,
  "Операционная система"
 ],
 "Overview": [
  null,
  "Обзор"
 ],
 "Path": [
  null,
  "Путь"
 ],
 "Path on host's filesystem": [
  null,
  "Путь в файловой системе хоста"
 ],
 "Path to ISO file on host's file system": [
  null,
  "Путь к файлу ISO в файловой системе хоста"
 ],
 "Path to file": [
  null,
  "Путь к файлу"
 ],
 "Persistence": [
  null,
  ""
 ],
 "Persistent": [
  null,
  ""
 ],
 "Please enter new volume name": [
  null,
  "Введите новое имя тома"
 ],
 "Please enter new volume size": [
  null,
  "Введите новый размер тома"
 ],
 "Please start the virtual machine to access its console.": [
  null,
  "Пожалуйста, запустите виртуальную машину, чтобы получить доступ к ее консоли."
 ],
 "Plug": [
  null,
  "штепсель"
 ],
 "Pool": [
  null,
  "Пул"
 ],
 "Port": [
  null,
  "Порт"
 ],
 "Preferred number of sockets to expose to the guest.": [
  null,
  "Предпочтительное количество сокетов, которые выставляют гостю."
 ],
 "Protocol": [
  null,
  "Протокол"
 ],
 "QEMU/KVM System connection": [
  null,
  "QEMU / KVM Системное соединение"
 ],
 "QEMU/KVM User connection": [
  null,
  "QEMU / KVM Подключение пользователя"
 ],
 "Readonly": [
  null,
  "Только чтение"
 ],
 "Reconnect": [
  null,
  "Заново"
 ],
 "Remote URL": [
  null,
  "Удаленный URL"
 ],
 "Restart": [
  null,
  "Перезапуск"
 ],
 "Run": [
  null,
  "Запустить"
 ],
 "SPICE": [
  null,
  "SPICE"
 ],
 "SPICE Address:": [
  null,
  "SPICE Адрес:"
 ],
 "SPICE Port:": [
  null,
  "Порт SPICE:"
 ],
 "SPICE TLS Port:": [
  null,
  "Порт SPICE TLS:"
 ],
 "Save": [
  null,
  "Сохранить"
 ],
 "Send Non-Maskable Interrupt": [
  null,
  "Отправить не-маскируемое прерывание"
 ],
 "Send key": [
  null,
  "Отправить ключ"
 ],
 "Serial Console": [
  null,
  "Серийная консоль"
 ],
 "Session": [
  null,
  "Сеанс"
 ],
 "Shut Down": [
  null,
  "Выключение"
 ],
 "Size": [
  null,
  "Размер"
 ],
 "Sockets": [
  null,
  "Сокеты"
 ],
 "Source": [
  null,
  "Источник"
 ],
 "Source Path": [
  null,
  "Путь к источнику"
 ],
 "Source path should not be empty": [
  null,
  "Исходный путь не должен быть пустым"
 ],
 "Source should start with http, ftp or nfs protocol": [
  null,
  ""
 ],
 "Start libvirt": [
  null,
  "Начать libvirt"
 ],
 "Start pool when host boots": [
  null,
  "Запуск пула при загрузке хоста"
 ],
 "Startup": [
  null,
  "Запускать"
 ],
 "State": [
  null,
  "Состояние"
 ],
 "Storage Pool Name": [
  null,
  "Имя пула хранения"
 ],
 "Storage Pool failed to be created": [
  null,
  "Не удалось создать пул хранения"
 ],
 "Storage Pool failed to get activated": [
  null,
  ""
 ],
 "Storage Pool failed to get deactivated": [
  null,
  ""
 ],
 "Storage Pools": [
  null,
  "Бассейны"
 ],
 "Storage Size": [
  null,
  "Размер хранилища"
 ],
 "Storage Volumes": [
  null,
  "Объемы хранения"
 ],
 "System": [
  null,
  "Система"
 ],
 "Target Path": [
  null,
  "Целевой путь"
 ],
 "Target path should not be empty": [
  null,
  "Целевой путь не должен быть пустым"
 ],
 "The Storage Pool could not be deleted": [
  null,
  ""
 ],
 "The VM crashed.": [
  null,
  "VM потерпела крах."
 ],
 "The VM is down.": [
  null,
  "VM отключена."
 ],
 "The VM is going down.": [
  null,
  "ВМ идет вниз."
 ],
 "The VM is idle.": [
  null,
  "VM бездействует."
 ],
 "The VM is in process of dying (shut down or crash is not completed).": [
  null,
  "VM находится в процессе умирания (закрытие или сбой не завершены)."
 ],
 "The VM is paused.": [
  null,
  "VM приостановлена."
 ],
 "The VM is running and will be forced off before deletion.": [
  null,
  "VM запускается и будет отключена перед удалением."
 ],
 "The VM is running.": [
  null,
  "VM запущена."
 ],
 "The VM is suspended by guest power management.": [
  null,
  "VM приостанавливается управлением гостевой системой."
 ],
 "The directory on the server being exported": [
  null,
  "Каталог на экспортируемом сервере"
 ],
 "The pool is empty": [
  null,
  "Пул пуст"
 ],
 "Threads per core": [
  null,
  "Потоков на ядро"
 ],
 "Too many files found": [
  null,
  "Слишком много файлов найдено"
 ],
 "Troubleshoot": [
  null,
  "Диагностика"
 ],
 "Type": [
  null,
  "Тип"
 ],
 "URL": [
  null,
  "Ссылка (URL)"
 ],
 "Unique name": [
  null,
  "Уникальное имя"
 ],
 "Unplug": [
  null,
  "Отключайте"
 ],
 "Usage": [
  null,
  "Формат"
 ],
 "Use Existing": [
  null,
  "Использовать существующие"
 ],
 "Used": [
  null,
  "Использовано"
 ],
 "VCPU settings could not be saved": [
  null,
  "Не удалось сохранить настройки VCPU"
 ],
 "VM CHANGE_NETWORK_STATE action failed": [
  null,
  "Действие VM CHANGE_NETWORK_STATE не выполнено"
 ],
 "VM DELETE (DESTROY) action failed": [
  null,
  "Не удалось выполнить действие VM DELETE (DESTROY)"
 ],
 "VM DELETE (UNDEFINE) action failed": [
  null,
  "Не удалось выполнить действие VM DELETE (UNDEFINE)"
 ],
 "VM DELETE action failed": [
  null,
  "Не удалось выполнить действие VM DELETE"
 ],
 "VM DETACH_DISK action failed": [
  null,
  "Действие VM DETACH_DISK не выполнено"
 ],
 "VM FORCE OFF action failed": [
  null,
  "Не удалось выполнить действие VM FORCE OFF"
 ],
 "VM FORCE REBOOT action failed": [
  null,
  "Не удалось выполнить действие VM FORCE REBOOT"
 ],
 "VM REBOOT action failed": [
  null,
  "Не удалось выполнить действие VM REBOOT"
 ],
 "VM SEND Non-Maskable Interrrupt action failed": [
  null,
  "Отклонено действие VM SEND Непрерывное прерывание"
 ],
 "VM SENDNMI action failed": [
  null,
  "Сбой действия VM SENDNMI"
 ],
 "VM SHUT DOWN action failed": [
  null,
  "Действие VM SHUT DOWN не выполнено"
 ],
 "VM START action failed": [
  null,
  "Не удалось выполнить действие VM START"
 ],
 "VNC": [
  null,
  "VNC"
 ],
 "VNC Address:": [
  null,
  "VNC Адрес:"
 ],
 "VNC Port:": [
  null,
  "Порт VNC:"
 ],
 "VNC TLS Port:": [
  null,
  "Порт VNC TLS:"
 ],
 "Virtual Machines": [
  null,
  "Виртуальные машины"
 ],
 "Virtualization Service (libvirt) is Not Active": [
  null,
  "Служба виртуализации (libvirt) не активна"
 ],
 "Virtualization Service is Available": [
  null,
  "Доступна служба виртуализации"
 ],
 "Volume": [
  null,
  "Том"
 ],
 "active": [
  null,
  "активных"
 ],
 "bridge": [
  null,
  "мост"
 ],
 "cdrom": [
  null,
  "CDROM"
 ],
 "crashed": [
  null,
  "разбившийся"
 ],
 "custom": [
  null,
  "обычай"
 ],
 "direct": [
  null,
  "непосредственный"
 ],
 "disabled": [
  null,
  "отключено"
 ],
 "disk": [
  null,
  "диск"
 ],
 "down": [
  null,
  "вниз"
 ],
 "dying": [
  null,
  "умирающий"
 ],
 "enabled": [
  null,
  "включено"
 ],
 "ethernet": [
  null,
  "локальные сети"
 ],
 "host": [
  null,
  "узел"
 ],
 "hostdev": [
  null,
  "hostdev"
 ],
 "idle": [
  null,
  "вхолостую"
 ],
 "inactive": [
  null,
  "неактивный"
 ],
 "mcast": [
  null,
  "mcast"
 ],
 "network": [
  null,
  "сеть"
 ],
 "no": [
  null,
  "нет"
 ],
 "other": [
  null,
  "Другой"
 ],
 "paused": [
  null,
  "приостановлено"
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
  "выполняется"
 ],
 "server": [
  null,
  "сервер"
 ],
 "show less": [
  null,
  "показывай меньше"
 ],
 "show more": [
  null,
  "показать больше"
 ],
 "shut off": [
  null,
  "Заткнись"
 ],
 "shutdown": [
  null,
  "неисправность"
 ],
 "suspended (PM)": [
  null,
  "приостановлено (PM)"
 ],
 "udp": [
  null,
  "udp"
 ],
 "undefined": [
  null,
  "не определено"
 ],
 "up": [
  null,
  "вверх"
 ],
 "user": [
  null,
  "пользователь"
 ],
 "vCPU Count": [
  null,
  "счетчик vCPU"
 ],
 "vCPU Maximum": [
  null,
  "максимум vCPU"
 ],
 "vCPUs": [
  null,
  "VCPU"
 ],
 "vhostuser": [
  null,
  "vhostuser"
 ],
 "yes": [
  null,
  "да"
 ]
}));
