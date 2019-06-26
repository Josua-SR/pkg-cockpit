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
  "language": "ru",
  "x-generator": "Zanata 4.6.2"
 },
 "$mtu": [
  null,
  "$mtu"
 ],
 "(Optional)": [
  null,
  "(необязательно)"
 ],
 "(default)": [
  null,
  "(по умолчанию)"
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
  "Проверка связи ARP"
 ],
 "Active": [
  null,
  "Активно"
 ],
 "Active Backup": [
  null,
  "Активное резервирование"
 ],
 "Active zones": [
  null,
  "Активные зоны"
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
  "Добавить $0"
 ],
 "Add Bond": [
  null,
  "Добавить связь"
 ],
 "Add Bridge": [
  null,
  "Добавить мост"
 ],
 "Add Ports": [
  null,
  "Добавить порты"
 ],
 "Add Services": [
  null,
  "Добавить службы"
 ],
 "Add Team": [
  null,
  "Добавить сопряжение"
 ],
 "Add VLAN": [
  null,
  "Добавить VLAN"
 ],
 "Add Zone": [
  null,
  "Добавить зону"
 ],
 "Add ports to the following zones:": [
  null,
  "Добавить порты в следующие зоны:"
 ],
 "Add services to following zones:": [
  null,
  "Добавить службы в следующие зоны:"
 ],
 "Add zone": [
  null,
  "Добавить зону"
 ],
 "Adding <b>$0</b> will break the connection to the server, and will make the administration UI unavailable.": [
  null,
  "Добавление <b>$0</b> приведёт к разрыву соединения с сервером и недоступности интерфейса администратора."
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
 "Allowed Addresses": [
  null,
  "Разрешённые адреса"
 ],
 "Allowed Services": [
  null,
  "Разрешённые службы"
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
  "Автоматически (DHCP)"
 ],
 "Balancer": [
  null,
  "Подсистема балансировки"
 ],
 "Bond": [
  null,
  "Объединение"
 ],
 "Bond Settings": [
  null,
  "Параметры объединения"
 ],
 "Bridge": [
  null,
  "Мост"
 ],
 "Bridge Port Settings": [
  null,
  "Параметры порта моста"
 ],
 "Bridge Settings": [
  null,
  "Параметры моста"
 ],
 "Bridge port": [
  null,
  "Порт моста"
 ],
 "Broadcast": [
  null,
  "Трансляция"
 ],
 "Broken configuration": [
  null,
  "Неверная конфигурация"
 ],
 "Cancel": [
  null,
  "Отмена"
 ],
 "Carrier": [
  null,
  "Несущая частота"
 ],
 "Change the settings": [
  null,
  "Изменение настроек"
 ],
 "Changing the settings will break the connection to the server, and will make the administration UI unavailable.": [
  null,
  "Изменение настроек приведёт к разрыву соединения с сервером и недоступности интерфейса администратора."
 ],
 "Checking IP": [
  null,
  "Проверка IP-адреса"
 ],
 "Close": [
  null,
  "Закрыть"
 ],
 "Comma-separated ports, ranges, and aliases are accepted": [
  null,
  "Допустимы порты, диапазоны и псевдонимы с разделителями-запятыми"
 ],
 "Configure": [
  null,
  "Настроить"
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
  "Подключение будет прервано"
 ],
 "Create it": [
  null,
  "Создать"
 ],
 "Creating this VLAN will break the connection to the server, and will make the administration UI unavailable.": [
  null,
  "Создание этой VLAN приведёт к разрыву соединения с сервером и недоступности интерфейса администратора."
 ],
 "Creating this bond will break the connection to the server, and will make the administration UI unavailable.": [
  null,
  "Создание этого объединения приведёт к разрыву соединения с сервером и недоступности интерфейса администратора."
 ],
 "Creating this bridge will break the connection to the server, and will make the administration UI unavailable.": [
  null,
  "Создание этого моста приведёт к разрыву соединения с сервером и недоступности интерфейса администратора."
 ],
 "Creating this team will break the connection to the server, and will make the administration UI unavailable.": [
  null,
  "Создание этого сопряжения приведёт к разрыву соединения с сервером и недоступности интерфейса администратора."
 ],
 "Custom Ports": [
  null,
  "Настраиваемые порты"
 ],
 "Custom zones": [
  null,
  "Настраиваемые зоны"
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
  "Домены поиска DNS"
 ],
 "DNS Search Domains $val": [
  null,
  "Домены поиска DNS $val"
 ],
 "Deactivating": [
  null,
  "Отключение"
 ],
 "Delete": [
  null,
  "Удалить"
 ],
 "Delete $0": [
  null,
  "Удалить $0"
 ],
 "Deleting <b>$0</b> will break the connection to the server, and will make the administration UI unavailable.": [
  null,
  "Удаление <b>$0</b> приведёт к разрыву соединения с сервером и недоступности интерфейса администратора."
 ],
 "Description": [
  null,
  "Описание"
 ],
 "Details": [
  null,
  "Подробности"
 ],
 "Disabled": [
  null,
  "Отключено"
 ],
 "Enable Service": [
  null,
  "Включить службу"
 ],
 "Entire subnet": [
  null,
  "Адрес всей подсети"
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
 "Example: 22,ssh,8080,5900-5910": [
  null,
  "Пример: 22, ssh, 8080, 5900-5910"
 ],
 "Example: 88,2019,nfs,rsync": [
  null,
  "Пример: 88, 2019, nfs, rsync"
 ],
 "Failed": [
  null,
  "Сбой"
 ],
 "Failed to add port": [
  null,
  ""
 ],
 "Failed to add service": [
  null,
  "Не удалось добавить службу"
 ],
 "Failed to add zone": [
  null,
  "Не удалось добавить зону"
 ],
 "Failed to remove service": [
  null,
  "Не удалось удалить службу"
 ],
 "Filter Services": [
  null,
  "Фильтровать службы"
 ],
 "Firewall": [
  null,
  "Межсетевой экран"
 ],
 "Firewall is not available": [
  null,
  "Межсетевой экран недоступен"
 ],
 "Forward delay $forward_delay": [
  null,
  "Задержка смены состояний $forward_delay"
 ],
 "General": [
  null,
  "Общее"
 ],
 "Go to now": [
  null,
  "Текущий момент"
 ],
 "Hair Pin mode": [
  null,
  "Режим Hairpin"
 ],
 "Hairpin mode": [
  null,
  "Режим Hairpin"
 ],
 "Hello time $hello_time": [
  null,
  "Время приветствия $hello_time"
 ],
 "IP Address": [
  null,
  "IP-адрес"
 ],
 "IP Range": [
  null,
  "Диапазон IP-адресов"
 ],
 "IP Settings": [
  null,
  "Параметры IP"
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
  "Идентификатор $id"
 ],
 "Ignore": [
  null,
  "Игнорировать"
 ],
 "Inactive": [
  null,
  "Неактивно"
 ],
 "Included services": [
  null,
  ""
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
 "Invalid port number": [
  null,
  ""
 ],
 "Invalid prefix $0": [
  null,
  "Недопустимый префикс $0"
 ],
 "Invalid prefix or netmask $0": [
  null,
  "Недопустимый префикс или сетевая маска $0"
 ],
 "Invalid range": [
  null,
  ""
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
  "Максимальное время жизни сообщения $max_age"
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
 "No active zones": [
  null,
  ""
 ],
 "No carrier": [
  null,
  "Нет перевозчика"
 ],
 "No description available": [
  null,
  ""
 ],
 "No open ports": [
  null,
  "Нет открытых портов"
 ],
 "None": [
  null,
  "Нет"
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
  "Родитель"
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
 "Port number and type do not match": [
  null,
  "Номер и тип порта не совпадают"
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
  "Длина префикса или маска сети"
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
 "Range": [
  null,
  ""
 ],
 "Range must be strictly ordered": [
  null,
  ""
 ],
 "Reboot": [
  null,
  "Перезагрузка"
 ],
 "Receiving": [
  null,
  "Приём"
 ],
 "Remove $0": [
  null,
  "Удалить $0"
 ],
 "Remove service": [
  null,
  ""
 ],
 "Remove service from zones": [
  null,
  ""
 ],
 "Removing <b>$0</b> will break the connection to the server, and will make the administration UI unavailable.": [
  null,
  "Удаление <b>$0</b> приведёт к разрыву соединения с сервером и недоступности интерфейса администратора."
 ],
 "Restoring connection": [
  null,
  "Восстановление соединения"
 ],
 "Round Robin": [
  null,
  "Циклический перебор"
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
  "Задержка смены состояний"
 ],
 "STP Hello time": [
  null,
  "Время приветствия"
 ],
 "STP Maximum message age": [
  null,
  "Максимальное время жизни сообщения"
 ],
 "STP Priority": [
  null,
  "Приоритет"
 ],
 "Sending": [
  null,
  "Передача"
 ],
 "Service": [
  null,
  "Служба"
 ],
 "Services": [
  null,
  "Службы"
 ],
 "Set to": [
  null,
  "Установлен в"
 ],
 "Shared": [
  null,
  "Общее"
 ],
 "Sorted from least trusted to most trusted": [
  null,
  ""
 ],
 "Spanning Tree Protocol": [
  null,
  "Протокол связующего дерева"
 ],
 "Spanning Tree Protocol (STP)": [
  null,
  "Протокол покрывающего дерева (STP)"
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
  "Отключение <b>$0</b> приведёт к разрыву соединения с сервером и недоступности интерфейса администратора."
 ],
 "Switching off <b>$0</b> will break the connection to the server, and will make the administration UI unavailable.": [
  null,
  "Отключение <b>$0</b> приведёт к разрыву соединения с сервером и недоступности интерфейса администратора."
 ],
 "Switching on <b>$0</b> will break the connection to the server, and will make the administration UI unavailable.": [
  null,
  "Включение <b>$0</b> приведёт к разрыву соединения с сервером и недоступности интерфейса администратора."
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
 "Trust level": [
  null,
  ""
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
 "Unknown service name": [
  null,
  ""
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
  "Идентификатор VLAN"
 ],
 "VLAN Settings": [
  null,
  "Настройка VLAN"
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
 "Zone": [
  null,
  ""
 ],
 "Zones": [
  null,
  ""
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
 "show less": [
  null,
  "показывай меньше"
 ],
 "show more": [
  null,
  "показать больше"
 ],
 "page-title\u0004Networking": [
  null,
  "Сеть"
 ]
}));
