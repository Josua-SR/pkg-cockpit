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
 "$0 Network": [
  null,
  "$0 Сеть"
 ],
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
 "Additional": [
  null,
  ""
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
 "Boot order settings could not be saved": [
  null,
  ""
 ],
 "Bus": [
  null,
  "автобус"
 ],
 "CPU Type": [
  null,
  ""
 ],
 "Cache": [
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
 "Creation of VM $0 failed": [
  null,
  ""
 ],
 "Ctrl+Alt+Del": [
  null,
  "Ctrl + Alt + Del"
 ],
 "Current Allocation": [
  null,
  ""
 ],
 "DHCP Range": [
  null,
  ""
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
  "Удаление неактивного пула носителей только отменит определение пула. Его содержимое не будет удалено."
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
 "Disk $0 fail to get detached from VM $1": [
  null,
  ""
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
 "Disks cannot be removed from $0 VMs": [
  null,
  ""
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
 "Existing Disk Image": [
  null,
  ""
 ],
 "Existing disk image on host's file system": [
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
 "Forwarding mode": [
  null,
  ""
 ],
 "General": [
  null,
  "Общие"
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
 "Hide Performance Options": [
  null,
  ""
 ],
 "Host": [
  null,
  "Узел"
 ],
 "Host Device": [
  null,
  ""
 ],
 "Host Name": [
  null,
  "Имя узла"
 ],
 "Host should not be empty": [
  null,
  "Хост не должен быть пустым"
 ],
 "IPv4 Address": [
  null,
  ""
 ],
 "IPv6 Address": [
  null,
  ""
 ],
 "Immediately Start VM": [
  null,
  "Немедленно запустите VM"
 ],
 "In most configurations, macvtap does not work for host to guest network communication.": [
  null,
  ""
 ],
 "Initiator": [
  null,
  ""
 ],
 "Initiator IQN should not be empty": [
  null,
  ""
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
 "Interface Type": [
  null,
  ""
 ],
 "Invalid filename": [
  null,
  "Неверное имя файла"
 ],
 "Isolated Network": [
  null,
  ""
 ],
 "Launch Remote Viewer": [
  null,
  "Запустить средство удаленного просмотра"
 ],
 "Loading ...": [
  null,
  "Загрузка..."
 ],
 "Local Install Media": [
  null,
  ""
 ],
 "MAC Address": [
  null,
  "MAC-адрес"
 ],
 "Mac": [
  null,
  ""
 ],
 "Mac Address": [
  null,
  "MAC-адрес"
 ],
 "Manual Connection": [
  null,
  "Ручное подключение"
 ],
 "Maximum Allocation": [
  null,
  ""
 ],
 "Maximum Transmission Unit": [
  null,
  ""
 ],
 "Maximum memory could not be saved": [
  null,
  ""
 ],
 "Maximum number of virtual CPUs allocated for the guest OS, which must be between 1 and $0": [
  null,
  "Максимальное количество виртуальных процессоров, выделенных для гостевой ОС, которое должно быть от 1 до $0"
 ],
 "Memory": [
  null,
  "Память"
 ],
 "Memory could not be saved": [
  null,
  ""
 ],
 "Memory size between 128 MiB and the maximum allocation": [
  null,
  ""
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
 "NAT to $0": [
  null,
  ""
 ],
 "NIC $0 of VM $1 failed to change state": [
  null,
  ""
 ],
 "Name": [
  null,
  "Имя"
 ],
 "Name should not be empty": [
  null,
  "Имя не должно быть пустым"
 ],
 "Name: ": [
  null,
  ""
 ],
 "Netmask": [
  null,
  "Маска сети"
 ],
 "Network $0 failed to get activated": [
  null,
  ""
 ],
 "Network $0 failed to get deactivated": [
  null,
  ""
 ],
 "Network Boot (PXE)": [
  null,
  ""
 ],
 "Network File System": [
  null,
  "Сетевая файловая система"
 ],
 "Network Interfaces": [
  null,
  ""
 ],
 "Network Selection does not support PXE.": [
  null,
  ""
 ],
 "Network interface settings could not be saved": [
  null,
  ""
 ],
 "Networks": [
  null,
  "Сети"
 ],
 "New Volume Name": [
  null,
  "Новое имя тома"
 ],
 "No Storage Pools available": [
  null,
  ""
 ],
 "No Storage Volumes defined for this Storage Pool": [
  null,
  "Для этого пула хранения не определены тома хранения"
 ],
 "No VM is running or defined on this host": [
  null,
  "Никакая виртуальная машина не запущена или не определена на этом хосте"
 ],
 "No Virtual Networks": [
  null,
  ""
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
 "No network is defined on this host": [
  null,
  ""
 ],
 "No networks available": [
  null,
  ""
 ],
 "No storage pool is defined on this host": [
  null,
  "На этом хосте не определен пул хранения"
 ],
 "None (Isolated Network)": [
  null,
  ""
 ],
 "OS Vendor": [
  null,
  "Поставщик ОС"
 ],
 "One or more selected volumes are used by domains. Detach the disks first to allow volume deletion.": [
  null,
  ""
 ],
 "Only editable when the guest is shut off": [
  null,
  ""
 ],
 "Open": [
  null,
  ""
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
 "Pause": [
  null,
  ""
 ],
 "Persistence": [
  null,
  ""
 ],
 "Persistent": [
  null,
  ""
 ],
 "Physical Disk Device": [
  null,
  ""
 ],
 "Physical disk device on host": [
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
 "Prefix": [
  null,
  ""
 ],
 "Private": [
  null,
  ""
 ],
 "Product": [
  null,
  ""
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
  "Только для чтения"
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
  "Перезапустить"
 ],
 "Resume": [
  null,
  ""
 ],
 "Route to $0": [
  null,
  ""
 ],
 "Routed Network": [
  null,
  ""
 ],
 "Run": [
  null,
  "Запуск"
 ],
 "Run when host boots": [
  null,
  ""
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
 "Show Performance Options": [
  null,
  ""
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
 "Source Format": [
  null,
  ""
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
 "Storage": [
  null,
  "Хранилище"
 ],
 "Storage Pool $0 failed to get activated": [
  null,
  ""
 ],
 "Storage Pool $0 failed to get deactivated": [
  null,
  ""
 ],
 "Storage Pool Name": [
  null,
  "Имя пула хранения"
 ],
 "Storage Pool failed to be created": [
  null,
  "Не удалось создать пул хранения"
 ],
 "Storage Pools": [
  null,
  "Бассейны"
 ],
 "Storage Volumes": [
  null,
  "Объемы хранения"
 ],
 "Storage Volumes could not be deleted": [
  null,
  ""
 ],
 "System": [
  null,
  "Система"
 ],
 "Target": [
  null,
  "Целевой"
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
 "This volume is already used by another VM.": [
  null,
  ""
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
 "Type ID": [
  null,
  ""
 ],
 "URL": [
  null,
  "Ссылка (URL)"
 ],
 "Unique name": [
  null,
  "Уникальное имя"
 ],
 "Unit": [
  null,
  "Сервис"
 ],
 "Unplug": [
  null,
  "Отключайте"
 ],
 "Up to $0 $1 available on the host": [
  null,
  ""
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
 "Used by": [
  null,
  ""
 ],
 "VCPU settings could not be saved": [
  null,
  "Не удалось сохранить настройки VCPU"
 ],
 "VM $0 failed to Reboot": [
  null,
  ""
 ],
 "VM $0 failed to force Reboot": [
  null,
  ""
 ],
 "VM $0 failed to force shutdown": [
  null,
  ""
 ],
 "VM $0 failed to get deleted": [
  null,
  ""
 ],
 "VM $0 failed to get installed": [
  null,
  ""
 ],
 "VM $0 failed to pause": [
  null,
  ""
 ],
 "VM $0 failed to resume": [
  null,
  ""
 ],
 "VM $0 failed to send NMI": [
  null,
  ""
 ],
 "VM $0 failed to shutdown": [
  null,
  ""
 ],
 "VM $0 failed to start": [
  null,
  ""
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
 "Vendor": [
  null,
  "Производитель"
 ],
 "Virtual Machines": [
  null,
  "Виртуальные машины"
 ],
 "Virtual Network": [
  null,
  ""
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
 "WWPN": [
  null,
  ""
 ],
 "You need to select the most closely matching OS vendor and Operating System": [
  null,
  ""
 ],
 "active": [
  null,
  "Активно"
 ],
 "bridge": [
  null,
  "мост"
 ],
 "cdrom": [
  null,
  "CDROM"
 ],
 "control-label $0": [
  null,
  ""
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
  "отключён"
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
 "host device": [
  null,
  ""
 ],
 "hostdev": [
  null,
  "hostdev"
 ],
 "iSCSI Initiator IQN": [
  null,
  ""
 ],
 "iSCSI Target": [
  null,
  ""
 ],
 "iSCSI direct Target": [
  null,
  ""
 ],
 "iSCSI target IQN": [
  null,
  ""
 ],
 "idle": [
  null,
  "вхолостую"
 ],
 "inactive": [
  null,
  "Неактивно"
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
 "redirected device": [
  null,
  ""
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
