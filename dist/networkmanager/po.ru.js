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
 "$mtu": [
  null,
  "$mtu"
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
 "5 minutes": [
  null,
  "5 минут"
 ],
 "6 hours": [
  null,
  "6 часов"
 ],
 "802.3ad": [
  null,
  "802.3ad"
 ],
 "802.3ad LACP": [
  null,
  "802.3ad LACP"
 ],
 "ARP": [
  null,
  "ARP"
 ],
 "ARP Monitoring": [
  null,
  "Мониторинг ARP"
 ],
 "ARP Ping": [
  null,
  "ARP Ping"
 ],
 "Active": [
  null,
  "Активно"
 ],
 "Active Backup": [
  null,
  "Активный и запасные"
 ],
 "Adaptive load balancing": [
  null,
  "Адаптивная балансировка нагрузки"
 ],
 "Adaptive transmit load balancing": [
  null,
  "Адаптивная балансировка нагрузки передачи"
 ],
 "Add $0": [
  null,
  "добавлять $0"
 ],
 "Add Bond": [
  null,
  "Добавить облигацию"
 ],
 "Add Bridge": [
  null,
  "Добавить мост"
 ],
 "Add Services": [
  null,
  "Добавить услуги"
 ],
 "Add Services…": [
  null,
  "Добавить услуги ..."
 ],
 "Add Team": [
  null,
  "Добавить команду"
 ],
 "Add VLAN": [
  null,
  "Добавить VLAN"
 ],
 "Adding <b>$0</b> will break the connection to the server, and will make the administration UI unavailable.": [
  null,
  "Добавление <b>$0</b> будет разорвать соединение с сервером и сделает пользовательский интерфейс администрирования недоступным."
 ],
 "Additional DNS $val": [
  null,
  "Дополнительный DNS $val"
 ],
 "Additional DNS Search Domains $val": [
  null,
  "Дополнительные домены поиска DNS $val"
 ],
 "Additional address $val": [
  null,
  "Дополнительный адрес $val"
 ],
 "Address $val": [
  null,
  "Адрес $val"
 ],
 "Addresses": [
  null,
  "Адреса"
 ],
 "Allowed Services": [
  null,
  "Разрешенные услуги"
 ],
 "Apply": [
  null,
  "Применить"
 ],
 "Authenticating": [
  null,
  "Проверка подлинности"
 ],
 "Automatic": [
  null,
  "Автоматически"
 ],
 "Automatic (DHCP only)": [
  null,
  "Автоматически (только DHCP)"
 ],
 "Automatic (DHCP)": [
  null,
  "Автоматический (DHCP)"
 ],
 "Balancer": [
  null,
  "балансер"
 ],
 "Bond": [
  null,
  "Агрегация"
 ],
 "Bond Settings": [
  null,
  "Настройки связи"
 ],
 "Bridge": [
  null,
  "Мост"
 ],
 "Bridge Port Settings": [
  null,
  "Настройки порта моста"
 ],
 "Bridge Settings": [
  null,
  "Настройки моста"
 ],
 "Bridge port": [
  null,
  "Порт моста"
 ],
 "Broadcast": [
  null,
  "Рассылка"
 ],
 "Broken configuration": [
  null,
  "Сломанная конфигурация"
 ],
 "Cancel": [
  null,
  "Отмена"
 ],
 "Carrier": [
  null,
  "Перевозчик"
 ],
 "Change the settings": [
  null,
  "Изменение настроек"
 ],
 "Changing the settings will break the connection to the server, and will make the administration UI unavailable.": [
  null,
  "Изменение настроек приведет к поломке соединения с сервером и сделает пользовательский интерфейс администрирования недоступным."
 ],
 "Checking IP": [
  null,
  "Проверка IP-адреса"
 ],
 "Close": [
  null,
  "Закрыть"
 ],
 "Configure": [
  null,
  "Настройка"
 ],
 "Configuring": [
  null,
  "Настройка"
 ],
 "Configuring IP": [
  null,
  "Настройка IP-адреса"
 ],
 "Connect automatically": [
  null,
  "Подключаться автоматически"
 ],
 "Connection will be lost": [
  null,
  "Соединение будет потеряно"
 ],
 "Create it": [
  null,
  "Создать это"
 ],
 "Creating this VLAN will break the connection to the server, and will make the administration UI unavailable.": [
  null,
  "Создание этой VLAN приведет к поломке соединения с сервером и сделает пользовательский интерфейс администрирования недоступным."
 ],
 "Creating this bond will break the connection to the server, and will make the administration UI unavailable.": [
  null,
  "Создание этой связи приведет к поломке соединения с сервером и сделает пользовательский интерфейс администрирования недоступным."
 ],
 "Creating this bridge will break the connection to the server, and will make the administration UI unavailable.": [
  null,
  "Создание этого моста приведет к поломке соединения с сервером и сделает пользовательский интерфейс администрирования недоступным."
 ],
 "Creating this team will break the connection to the server, and will make the administration UI unavailable.": [
  null,
  "Создание этой команды нарушит соединение с сервером и сделает пользовательский интерфейс администрирования недоступным."
 ],
 "DNS": [
  null,
  "DNS"
 ],
 "DNS $val": [
  null,
  "DNS $val"
 ],
 "DNS Search Domains": [
  null,
  "DNS Search Domains"
 ],
 "DNS Search Domains $val": [
  null,
  "DNS Search Domains $val"
 ],
 "Deactivating": [
  null,
  "деактивация"
 ],
 "Delete": [
  null,
  "Удалить"
 ],
 "Delete $0": [
  null,
  "удалять $0"
 ],
 "Deleting <b>$0</b> will break the connection to the server, and will make the administration UI unavailable.": [
  null,
  "Удаление <b>$0</b> будет разорвать соединение с сервером и сделает пользовательский интерфейс администрирования недоступным."
 ],
 "Details": [
  null,
  "Подробности"
 ],
 "Disabled": [
  null,
  "Выключено"
 ],
 "Enable Service": [
  null,
  "Включить службу"
 ],
 "Ethernet MAC": [
  null,
  "Ethernet MAC"
 ],
 "Ethernet MTU": [
  null,
  "Ethernet MTU"
 ],
 "Ethtool": [
  null,
  "Ethtool"
 ],
 "Failed": [
  null,
  "Сбой"
 ],
 "Filter Services": [
  null,
  "Услуги фильтра"
 ],
 "Firewall": [
  null,
  "Межсетевой экран"
 ],
 "Firewall is not available": [
  null,
  "Брандмауэр недоступен"
 ],
 "Forward delay $forward_delay": [
  null,
  "Задержка вперед $forward_delay"
 ],
 "General": [
  null,
  "Общие"
 ],
 "Go to now": [
  null,
  "Перейдите к"
 ],
 "Hair Pin mode": [
  null,
  "Режим Pin Pin"
 ],
 "Hairpin mode": [
  null,
  "Режим разворота пакетов"
 ],
 "Hello time $hello_time": [
  null,
  "Привет, время $hello_время"
 ],
 "IP Address": [
  null,
  "IP"
 ],
 "IP Settings": [
  null,
  "Настройки IP"
 ],
 "IPv4": [
  null,
  "IPv4"
 ],
 "IPv4 Settings": [
  null,
  "Параметры IPv4"
 ],
 "IPv6": [
  null,
  "IPv6"
 ],
 "IPv6 Settings": [
  null,
  "Параметры IPv6"
 ],
 "Id $id": [
  null,
  "Я бы $id"
 ],
 "Ignore": [
  null,
  "Пропустить"
 ],
 "Inactive": [
  null,
  "Не активно"
 ],
 "Interfaces": [
  null,
  "Интерфейсы"
 ],
 "Invalid address $0": [
  null,
  "Недействительный адрес $0"
 ],
 "Invalid metric $0": [
  null,
  "Недопустимый показатель $0"
 ],
 "Invalid prefix $0": [
  null,
  "Недопустимый префикс $0"
 ],
 "Invalid prefix or netmask $0": [
  null,
  "Недопустимый префикс или сетевая маска $0"
 ],
 "Keep connection": [
  null,
  "Поддерживать соединение"
 ],
 "LACP Key": [
  null,
  "Ключ LACP"
 ],
 "Link Monitoring": [
  null,
  "Мониторинг ссылок"
 ],
 "Link Watch": [
  null,
  "Просмотр ссылок"
 ],
 "Link down delay": [
  null,
  "Задержка разрыва соединения"
 ],
 "Link local": [
  null,
  "Ссылка локальная"
 ],
 "Link up delay": [
  null,
  "Задержка установки соединения"
 ],
 "Load Balancing": [
  null,
  "Балансировки нагрузки"
 ],
 "MAC": [
  null,
  "MAC"
 ],
 "MII (Recommended)": [
  null,
  "MII (рекомендуется)"
 ],
 "MTU": [
  null,
  "MTU"
 ],
 "MTU must be a positive number": [
  null,
  "MTU должно быть положительным числом"
 ],
 "Manual": [
  null,
  "Вручную"
 ],
 "Master": [
  null,
  "Мастер"
 ],
 "Maximum message age $max_age": [
  null,
  "Максимальный возраст сообщения $max_возраст"
 ],
 "Members": [
  null,
  "члены"
 ],
 "Mode": [
  null,
  "Режим"
 ],
 "Monitoring Interval": [
  null,
  "Интервал мониторинга"
 ],
 "Monitoring Targets": [
  null,
  "Цели мониторинга"
 ],
 "NSNA Ping": [
  null,
  "NSNA Ping"
 ],
 "Name": [
  null,
  "Имя"
 ],
 "Network devices and graphs require NetworkManager.": [
  null,
  "Для сетевых устройств и графиков требуется NetworkManager."
 ],
 "NetworkManager is not running.": [
  null,
  "NetworkManager не работает."
 ],
 "Networking": [
  null,
  "Сеть"
 ],
 "Networking Logs": [
  null,
  "Сетевые журналы"
 ],
 "No": [
  null,
  "Нет"
 ],
 "No carrier": [
  null,
  "Нет перевозчика"
 ],
 "No open ports": [
  null,
  "Нет открытых портов"
 ],
 "Not available": [
  null,
  "Недоступно"
 ],
 "Off": [
  null,
  "Выкл"
 ],
 "On": [
  null,
  "Вкл"
 ],
 "Parent": [
  null,
  "Родительский"
 ],
 "Parent $parent": [
  null,
  "родитель $parent"
 ],
 "Part of ": [
  null,
  "Часть "
 ],
 "Passive": [
  null,
  "пассивный"
 ],
 "Path cost": [
  null,
  "Стоимость пути"
 ],
 "Path cost $path_cost": [
  null,
  "Стоимость пути $path_Стоимость"
 ],
 "Permanent": [
  null,
  "Постоянная"
 ],
 "Ping Interval": [
  null,
  "Интервал Ping"
 ],
 "Ping Target": [
  null,
  "Ping Target"
 ],
 "Please install the $0 package": [
  null,
  "Пожалуйста, установите $0 пакет"
 ],
 "Ports": [
  null,
  "Порты"
 ],
 "Prefix length": [
  null,
  "Длина префикса"
 ],
 "Prefix length or Netmask": [
  null,
  "Длина префикса или сетевая маска"
 ],
 "Preparing": [
  null,
  "Идёт подготовка"
 ],
 "Preserve": [
  null,
  "Не изменять"
 ],
 "Primary": [
  null,
  "Основной"
 ],
 "Priority": [
  null,
  "Приоритет"
 ],
 "Priority $priority": [
  null,
  "приоритет $priority"
 ],
 "Random": [
  null,
  "Случайный"
 ],
 "Reboot": [
  null,
  "Перезагрузить"
 ],
 "Receiving": [
  null,
  "Приём"
 ],
 "Remove $0": [
  null,
  "Удалить $0"
 ],
 "Removing <b>$0</b> will break the connection to the server, and will make the administration UI unavailable.": [
  null,
  "Удаление <b>$0</b> будет разорвать соединение с сервером и сделает пользовательский интерфейс администрирования недоступным."
 ],
 "Restoring connection": [
  null,
  "Восстановление соединения"
 ],
 "Round Robin": [
  null,
  "По-круговой"
 ],
 "Routes": [
  null,
  "Маршруты"
 ],
 "Runner": [
  null,
  "полоз"
 ],
 "STP Forward delay": [
  null,
  "STP Forward delay"
 ],
 "STP Hello time": [
  null,
  "Время приветствия STP"
 ],
 "STP Maximum message age": [
  null,
  "STP Максимальный возраст сообщения"
 ],
 "STP Priority": [
  null,
  "Приоритет STP"
 ],
 "Sending": [
  null,
  "Отправка"
 ],
 "Service": [
  null,
  "Служба"
 ],
 "Set to": [
  null,
  "Установлен в"
 ],
 "Shared": [
  null,
  "Общее"
 ],
 "Spanning Tree Protocol": [
  null,
  "Протокол связующего дерева"
 ],
 "Spanning Tree Protocol (STP)": [
  null,
  "Протокол связующего дерева (STP)"
 ],
 "Stable": [
  null,
  "Стабильный"
 ],
 "Start Service": [
  null,
  "Начало службы"
 ],
 "Status": [
  null,
  "Состояние"
 ],
 "Sticky": [
  null,
  "липкий"
 ],
 "Switch off $0": [
  null,
  "Выключить $0"
 ],
 "Switch on $0": [
  null,
  "Включить $0"
 ],
 "Switching off <b>$0</b>  will break the connection to the server, and will make the administration UI unavailable.": [
  null,
  "Выключение <b>$0</b>  будет разорвать соединение с сервером и сделает пользовательский интерфейс администрирования недоступным."
 ],
 "Switching off <b>$0</b> will break the connection to the server, and will make the administration UI unavailable.": [
  null,
  "Выключение <b>$0</b> будет разорвать соединение с сервером и сделает пользовательский интерфейс администрирования недоступным."
 ],
 "Switching on <b>$0</b> will break the connection to the server, and will make the administration UI unavailable.": [
  null,
  "Включение <b>$0</b> будет разорвать соединение с сервером и сделает пользовательский интерфейс администрирования недоступным."
 ],
 "TCP": [
  null,
  "TCP"
 ],
 "Team": [
  null,
  "Группа"
 ],
 "Team Port": [
  null,
  "Порт агрегации (team)"
 ],
 "Team Port Settings": [
  null,
  "Настройки командного порта"
 ],
 "Team Settings": [
  null,
  "Настройки команды"
 ],
 "Testing connection": [
  null,
  "Тестирование соединения"
 ],
 "The user <b>$0</b> is not permitted to modify network settings": [
  null,
  "Пользователь <b>$0</b> не разрешено изменять настройки сети"
 ],
 "This device cannot be managed here.": [
  null,
  "Здесь невозможно управлять этим устройством."
 ],
 "UDP": [
  null,
  "UDP"
 ],
 "Unexpected error": [
  null,
  "Непредвиденная ошибка"
 ],
 "Unknown": [
  null,
  "Неизвестно"
 ],
 "Unknown \"$0\"": [
  null,
  "Неизвестный \"$0\""
 ],
 "Unknown configuration": [
  null,
  "Неизвестная конфигурация"
 ],
 "Unmanaged Interfaces": [
  null,
  "Неуправляемые интерфейсы"
 ],
 "VLAN": [
  null,
  "VLAN"
 ],
 "VLAN Id": [
  null,
  "VLAN Id"
 ],
 "VLAN Settings": [
  null,
  "Настройки VLAN"
 ],
 "Waiting": [
  null,
  "Ожидание"
 ],
 "XOR": [
  null,
  "XOR"
 ],
 "Yes": [
  null,
  "Да"
 ],
 "You are not authorized to modify the firewall.": [
  null,
  "У вас нет прав на изменение брандмауэра."
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
 ],
 "page-title\u0004Networking": [
  null,
  "Сеть"
 ]
}));
