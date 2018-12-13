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
 "$0 vCPU Details": [
  null,
  "$0 Сведения о VCPU"
 ],
 "Action": [
  null,
  "Действие"
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
 "All running virtual machines will be turned off.": [
  null,
  "Все запущенные виртуальные машины будут отключены."
 ],
 "Apply": [
  null,
  "Применить"
 ],
 "Attach permanently": [
  null,
  ""
 ],
 "Automatically selected host": [
  null,
  "Автоматически выбранный хост"
 ],
 "Autostart:": [
  null,
  "Автоматический старт:"
 ],
 "Available": [
  null,
  "Доступно"
 ],
 "Base Template": [
  null,
  "Базовый шаблон"
 ],
 "Base template": [
  null,
  "Базовый шаблон"
 ],
 "Base template:": [
  null,
  "Базовый шаблон:"
 ],
 "Boot Order:": [
  null,
  "Порядок загрузки:"
 ],
 "Bus": [
  null,
  "автобус"
 ],
 "CPU Type:": [
  null,
  "Тип процессора:"
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
 "Cluster": [
  null,
  "Кластер"
 ],
 "Cluster Templates": [
  null,
  "Кластерные шаблоны"
 ],
 "Cluster Virtual Machines": [
  null,
  "Виртуальные машины кластера"
 ],
 "Confirm migration": [
  null,
  "Подтверждение миграции"
 ],
 "Confirm reload:": [
  null,
  "Подтвердите перезагрузку:"
 ],
 "Confirm save:": [
  null,
  "Подтвердить сохранение:"
 ],
 "Connect to oVirt Engine": [
  null,
  "Подключиться к oVirt Engine"
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
 "Create New VM": [
  null,
  "Создать новую виртуальную машину"
 ],
 "Create VM": [
  null,
  "Создать виртуальную машину"
 ],
 "Ctrl+Alt+Del": [
  null,
  "Ctrl + Alt + Del"
 ],
 "Delete": [
  null,
  "Удалить"
 ],
 "Delete associated storage files:": [
  null,
  "Удаление связанных файлов хранения:"
 ],
 "Description": [
  null,
  "Описание"
 ],
 "Description:": [
  null,
  "Описание:"
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
 "Edit the vdsm.conf": [
  null,
  "Измените vdsm.conf"
 ],
 "Emulated Machine:": [
  null,
  "Эмулированные машины:"
 ],
 "Enter New VM name": [
  null,
  "Введите новое имя виртуальной машины"
 ],
 "FQDN": [
  null,
  "FQDN"
 ],
 "Fewer than the maximum number of virtual CPUs should be enabled.": [
  null,
  "Меньше, чем максимальное количество виртуальных процессоров должно быть включено."
 ],
 "File": [
  null,
  "Файл"
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
  "Узел"
 ],
 "Host to Maintenance": [
  null,
  "Хост для обслуживания"
 ],
 "Install": [
  null,
  "Установка"
 ],
 "Launch Remote Viewer": [
  null,
  "Запустить средство удаленного просмотра"
 ],
 "Loading ...": [
  null,
  "Загрузка..."
 ],
 "Loading data ...": [
  null,
  "Загрузка данных ..."
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
 "Memory:": [
  null,
  "Память:"
 ],
 "MiB": [
  null,
  "МиБ"
 ],
 "Migrate To:": [
  null,
  "Миграция в:"
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
 "No VM found in oVirt.": [
  null,
  "В vVirt нет VM."
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
 "No network interfaces defined for this VM": [
  null,
  "Сетевые интерфейсы, определенные для этой виртуальной машины"
 ],
 "No oVirt connection": [
  null,
  "Нет подключения oVirt"
 ],
 "No virtual networks": [
  null,
  "Нет виртуальных сетей"
 ],
 "Number of virtual CPUs that gonna be used.": [
  null,
  "Количество виртуальных процессоров, которые будут использоваться."
 ],
 "OK": [
  null,
  "OK"
 ],
 "OS": [
  null,
  "ОС"
 ],
 "OS Type:": [
  null,
  "Тип ОС:"
 ],
 "Ok": [
  null,
  "OK"
 ],
 "Optimized for:": [
  null,
  "Оптимизирован для:"
 ],
 "Overview": [
  null,
  "Обзор"
 ],
 "Please confirm, the host shall be switched to maintenance mode.": [
  null,
  "Пожалуйста, подтвердите, что хост должен быть переключен в режим обслуживания."
 ],
 "Please enter new volume name": [
  null,
  "Введите новое имя тома"
 ],
 "Please enter new volume size": [
  null,
  "Введите новый размер тома"
 ],
 "Please provide fully qualified domain name and port of the oVirt engine.": [
  null,
  "Предоставьте полное доменное имя и порт устройства oVirt."
 ],
 "Please provide valid oVirt engine fully qualified domain name (FQDN) and port (443 by default)": [
  null,
  "Предоставьте действительное полное доменное имя (FQDN) и порт (0) по умолчанию для oVirt."
 ],
 "Please refer to oVirt's $0 for more information about Remote Viewer setup.": [
  null,
  "Пожалуйста, обратитесь к oVirt's $0 для получения дополнительной информации о настройке Remote Viewer."
 ],
 "Please start the virtual machine to access its console.": [
  null,
  "Пожалуйста, запустите виртуальную машину, чтобы получить доступ к ее консоли."
 ],
 "Please wait till VMs list is loaded from the server.": [
  null,
  "Подождите, пока список VMs не будет загружен с сервера."
 ],
 "Please wait till list of templates is loaded from the server.": [
  null,
  "Подождите, пока список шаблонов не будет загружен с сервера."
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
 "Readonly": [
  null,
  "Только чтение"
 ],
 "Reconnect": [
  null,
  "Заново"
 ],
 "Register oVirt": [
  null,
  "Регистрация oVirt"
 ],
 "Registering oVirt to Cockpit": [
  null,
  "Регистрация oVirt в кабину"
 ],
 "Reload": [
  null,
  "Восстановить"
 ],
 "Restart": [
  null,
  "Перезапуск"
 ],
 "Run": [
  null,
  "Запустить"
 ],
 "Run Here": [
  null,
  "Выполнить здесь"
 ],
 "Running Since:": [
  null,
  "Работает с:"
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
 "Start the VM to see disk statistics.": [
  null,
  "Запустите виртуальную машину, чтобы просмотреть статистику диска."
 ],
 "State": [
  null,
  "Состояние"
 ],
 "Stateless": [
  null,
  "Без отслеживания"
 ],
 "Stateless:": [
  null,
  "Stateless:"
 ],
 "Suspend": [
  null,
  "Ждущий режим"
 ],
 "Switch Host to Maintenance": [
  null,
  "Переключить узел на обслуживание"
 ],
 "Target": [
  null,
  "Целевой"
 ],
 "Template": [
  null,
  "Шаблон"
 ],
 "Templates": [
  null,
  "Шаблоны"
 ],
 "Templates of $0 cluster": [
  null,
  "Шаблоны $0 кластер"
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
 "The pool is empty": [
  null,
  "Пул пуст"
 ],
 "This host is managed by a virtualization manager, so creation of new VMs from the host is not possible.": [
  null,
  "Этот хост управляется менеджером виртуализации, поэтому создание новых виртуальных машин с хоста невозможно."
 ],
 "This virtual machine is not managed by oVirt": [
  null,
  "Эта виртуальная машина не управляется oVirt"
 ],
 "Threads per core": [
  null,
  "Потоков на ядро"
 ],
 "Type": [
  null,
  "Тип"
 ],
 "Unplug": [
  null,
  "Отключайте"
 ],
 "Upgrade to a more recent version of libvirt to view disk statistics": [
  null,
  "Переход на более позднюю версию libvirt для просмотра статистики диска"
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
 "VDSM": [
  null,
  "VDSM"
 ],
 "VDSM Service Management": [
  null,
  "Управление службами VDSM"
 ],
 "VM icon": [
  null,
  "Значок VM"
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
 "Version": [
  null,
  "Версия"
 ],
 "Version num": [
  null,
  "Версия num"
 ],
 "Virtual Machines": [
  null,
  "Виртуальные машины"
 ],
 "Virtual Machines of $0 cluster": [
  null,
  "Виртуальные машины $0 кластер"
 ],
 "Volume": [
  null,
  "Громкость"
 ],
 "cores": [
  null,
  "ядра"
 ],
 "disabled": [
  null,
  "отключено"
 ],
 "enabled": [
  null,
  "включено"
 ],
 "no": [
  null,
  "нет"
 ],
 "oVirt Host State:": [
  null,
  "oVirt Host State:"
 ],
 "oVirt Provider installation script failed due to missing arguments.": [
  null,
  "Не удалось установить сценарий установки поставщика OVirt из-за отсутствующих аргументов."
 ],
 "oVirt Provider installation script failed: Can't write to /etc/cockpit/machines-ovirt.config, try as root.": [
  null,
  "Не удалось установить сценарий установки поставщика OVirt: Не удается записать файл /etc/cockpit/machines-ovirt.config, попробуйте выполнить команду root."
 ],
 "oVirt installation script failed with following output: ": [
  null,
  "Не удалось выполнить скрипт установки oVirt с последующим выходом: "
 ],
 "oVirt login in progress": [
  null,
  "Вход в систему oVirt"
 ],
 "qcow2": [
  null,
  "qcow2"
 ],
 "raw": [
  null,
  "raw"
 ],
 "show less": [
  null,
  "показывай меньше"
 ],
 "show more": [
  null,
  "показать больше"
 ],
 "sockets": [
  null,
  "Розетки"
 ],
 "threads": [
  null,
  "потоки"
 ],
 "undefined": [
  null,
  "не определено"
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
 "vCPUs:": [
  null,
  "VCPU будут:"
 ],
 "yes": [
  null,
  "да"
 ]
}));
