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
 "$mtu": [
  null,
  "$mtu"
 ],
 "(Optional)": [
  null,
  "(Необов’язково)"
 ],
 "(default)": [
  null,
  "(типовий)"
 ],
 "1 day": [
  null,
  "1 день"
 ],
 "1 hour": [
  null,
  "1 година"
 ],
 "1 week": [
  null,
  "1 тиждень"
 ],
 "5 minutes": [
  null,
  "5 хвилин"
 ],
 "6 hours": [
  null,
  "6 годин"
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
  "Стеження за ARP"
 ],
 "ARP Ping": [
  null,
  "Луна-імпульс ARP"
 ],
 "Active": [
  null,
  "Активний"
 ],
 "Active Backup": [
  null,
  "Активне резервування"
 ],
 "Active zones": [
  null,
  "Активні зони"
 ],
 "Adaptive load balancing": [
  null,
  "Адаптивне урівноваження навантаження"
 ],
 "Adaptive transmit load balancing": [
  null,
  "Адаптивне урівноваження навантаження за передаванням"
 ],
 "Add $0": [
  null,
  "Додати $0"
 ],
 "Add Bond": [
  null,
  "Додати зв’язок"
 ],
 "Add Bridge": [
  null,
  "Додати місток"
 ],
 "Add Ports": [
  null,
  "Додати порти"
 ],
 "Add Services": [
  null,
  "Додавання служб"
 ],
 "Add Team": [
  null,
  "Додати команду"
 ],
 "Add VLAN": [
  null,
  "Додати VLAN"
 ],
 "Add Zone": [
  null,
  "Додати зону"
 ],
 "Add ports to the following zones:": [
  null,
  "Додати порти до таких записів зон:"
 ],
 "Add services to following zones:": [
  null,
  "Додати служби до таких зон:"
 ],
 "Add zone": [
  null,
  "Додати зону"
 ],
 "Adding <b>$0</b> will break the connection to the server, and will make the administration UI unavailable.": [
  null,
  "Додавання <b>$0</b> призведе до розірвання з’єднання із сервером і зробить адміністративний інтерфейс користувача недоступним."
 ],
 "Adding custom ports will reload firewalld. A reload will result in the loss of any runtime-only configuration!": [
  null,
  "Додавання нетипових портів призведе до перезавантаження firewalld. Це перезавантаження спричинить втрату усіх налаштувань окремого сеансу роботи!"
 ],
 "Additional DNS $val": [
  null,
  "Додатковий DNS $val"
 ],
 "Additional DNS Search Domains $val": [
  null,
  "Додаткові домени пошуку DNS $val"
 ],
 "Additional address $val": [
  null,
  "Додаткова адреса $val"
 ],
 "Address $val": [
  null,
  "Адреса $val"
 ],
 "Addresses": [
  null,
  "Адреси"
 ],
 "Allowed Addresses": [
  null,
  "Дозволені адреси"
 ],
 "Allowed Services": [
  null,
  "Дозволені служби"
 ],
 "Apply": [
  null,
  "Застосувати"
 ],
 "Authenticating": [
  null,
  "Автентифікація"
 ],
 "Automatic": [
  null,
  "Автоматично"
 ],
 "Automatic (DHCP only)": [
  null,
  "Автоматично (лише DHCP)"
 ],
 "Automatic (DHCP)": [
  null,
  "Автоматично (DHCP)"
 ],
 "Balancer": [
  null,
  "Балансир"
 ],
 "Bond": [
  null,
  "Прив’язка"
 ],
 "Bond Settings": [
  null,
  "Параметри зв’язку"
 ],
 "Bridge": [
  null,
  "Міст"
 ],
 "Bridge Port Settings": [
  null,
  "Параметри порту містка"
 ],
 "Bridge Settings": [
  null,
  "Параметри містка"
 ],
 "Bridge port": [
  null,
  "Порт містка"
 ],
 "Broadcast": [
  null,
  "Трансляція"
 ],
 "Broken configuration": [
  null,
  "Помилки у налаштуваннях"
 ],
 "Cancel": [
  null,
  "Скасувати"
 ],
 "Carrier": [
  null,
  "Носій сигналу"
 ],
 "Change the settings": [
  null,
  "Змінити параметри"
 ],
 "Changing the settings will break the connection to the server, and will make the administration UI unavailable.": [
  null,
  "Зміна параметрів призведе до розірвання з’єднання із сервером і зробить адміністративний інтерфейс користувача недоступним."
 ],
 "Checking IP": [
  null,
  "Перевіряємо IP"
 ],
 "Close": [
  null,
  "Закрити"
 ],
 "Comma-separated ports, ranges, and aliases are accepted": [
  null,
  "Відокремлені комами порти, діапазони і альтернативні назви прийнято"
 ],
 "Configure": [
  null,
  "Налаштувати"
 ],
 "Configuring": [
  null,
  "Налаштовування"
 ],
 "Configuring IP": [
  null,
  "Налаштовуємо IP"
 ],
 "Connect automatically": [
  null,
  "З’єднуватися автоматично"
 ],
 "Connection will be lost": [
  null,
  "З’єднання буде розірвано"
 ],
 "Create it": [
  null,
  "Створити"
 ],
 "Creating this VLAN will break the connection to the server, and will make the administration UI unavailable.": [
  null,
  "Створення цієї VLAN  призведе до розірвання з’єднання із сервером і зробить адміністративний інтерфейс користувача недоступним."
 ],
 "Creating this bond will break the connection to the server, and will make the administration UI unavailable.": [
  null,
  "Створення цього зв’язку призведе до розірвання з’єднання із сервером і зробить адміністративний інтерфейс користувача недоступним."
 ],
 "Creating this bridge will break the connection to the server, and will make the administration UI unavailable.": [
  null,
  "Створення цього містка призведе до розірвання з’єднання із сервером і зробить адміністративний інтерфейс користувача недоступним."
 ],
 "Creating this team will break the connection to the server, and will make the administration UI unavailable.": [
  null,
  "Створення цієї команди призведе до розірвання з’єднання із сервером і зробить адміністративний інтерфейс користувача недоступним."
 ],
 "Custom Ports": [
  null,
  "Нетипові порти"
 ],
 "Custom zones": [
  null,
  "Нетипові зони"
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
  "Домени пошуку DNS"
 ],
 "DNS Search Domains $val": [
  null,
  "Домени пошуку DNS $val"
 ],
 "Deactivating": [
  null,
  "Деактивація"
 ],
 "Delete": [
  null,
  "Вилучити"
 ],
 "Delete $0": [
  null,
  "Вилучити $0"
 ],
 "Deleting <b>$0</b> will break the connection to the server, and will make the administration UI unavailable.": [
  null,
  "Вилучення <b>$0</b> призведе до розірвання з’єднання із сервером і зробить адміністративний інтерфейс користувача недоступним."
 ],
 "Description": [
  null,
  "Опис"
 ],
 "Details": [
  null,
  "Подробиці"
 ],
 "Disabled": [
  null,
  "Вимкнено"
 ],
 "Enable Service": [
  null,
  "Увімкнути службу"
 ],
 "Entire subnet": [
  null,
  "Уся підмережа"
 ],
 "Ethernet MAC": [
  null,
  "MAC Ethernet"
 ],
 "Ethernet MTU": [
  null,
  "MTU Ethernet"
 ],
 "Ethtool": [
  null,
  "Ethtool"
 ],
 "Example: 22,ssh,8080,5900-5910": [
  null,
  "Приклад: 22,ssh,8080,5900-5910"
 ],
 "Example: 88,2019,nfs,rsync": [
  null,
  "Приклад: 88,2019,nfs,rsync"
 ],
 "Failed": [
  null,
  "Помилка"
 ],
 "Failed to add port": [
  null,
  "Не вдалося додати порт"
 ],
 "Failed to add service": [
  null,
  "Не вдалося додати службу"
 ],
 "Failed to add zone": [
  null,
  "Не вдалося додати зону"
 ],
 "Failed to remove service": [
  null,
  "Не вдалося вилучити службу"
 ],
 "Filter Services": [
  null,
  "Фільтрувати служби"
 ],
 "Firewall": [
  null,
  "Брандмауер"
 ],
 "Firewall is not available": [
  null,
  "Брандмауер недоступний"
 ],
 "Forward delay $forward_delay": [
  null,
  "Затримка переспрямування $forward_delay"
 ],
 "General": [
  null,
  "Загальний"
 ],
 "Go to now": [
  null,
  "Перейти зараз"
 ],
 "Hair Pin mode": [
  null,
  "Режим початкової зони"
 ],
 "Hairpin mode": [
  null,
  "Режим початкової зони (hairpin)"
 ],
 "Hello time $hello_time": [
  null,
  "Час вітання $hello_time"
 ],
 "IP Address": [
  null,
  "IP-адреса"
 ],
 "IP Range": [
  null,
  "Діапазон IP"
 ],
 "IP Settings": [
  null,
  "Параметри IP"
 ],
 "IPv4": [
  null,
  "IPv4"
 ],
 "IPv4 Settings": [
  null,
  "Параметри IPv4"
 ],
 "IPv6": [
  null,
  "IPv6"
 ],
 "IPv6 Settings": [
  null,
  "Параметри IPv6"
 ],
 "Id $id": [
  null,
  "Ід. $id"
 ],
 "Ignore": [
  null,
  "Ігнорувати"
 ],
 "Inactive": [
  null,
  "Неактивний"
 ],
 "Included services": [
  null,
  "Включені служби"
 ],
 "Interfaces": [
  null,
  "Інтерфейси"
 ],
 "Invalid address $0": [
  null,
  "Некоректна адреса $0"
 ],
 "Invalid metric $0": [
  null,
  "Некоректна метрика $0"
 ],
 "Invalid port number": [
  null,
  "Некоректний номер порту"
 ],
 "Invalid prefix $0": [
  null,
  "Некоректний префікс $0"
 ],
 "Invalid prefix or netmask $0": [
  null,
  "Некоректний префікс або маска мережі $0"
 ],
 "Invalid range": [
  null,
  "Некоректний діапазон"
 ],
 "Keep connection": [
  null,
  "Підтримувати з’єднання"
 ],
 "LACP Key": [
  null,
  "Ключ LACP"
 ],
 "Link Monitoring": [
  null,
  "Спостереження за зв’язком"
 ],
 "Link Watch": [
  null,
  "Спостереження за посиланнями"
 ],
 "Link down delay": [
  null,
  "Затримка розірвання зв’язку"
 ],
 "Link local": [
  null,
  "Пов’язати локальний"
 ],
 "Link up delay": [
  null,
  "Затримка встановлення зв’язку"
 ],
 "Load Balancing": [
  null,
  "Збалансовування навантаження"
 ],
 "MAC": [
  null,
  "MAC"
 ],
 "MII (Recommended)": [
  null,
  "MII (рекомендоване)"
 ],
 "MTU": [
  null,
  "MTU"
 ],
 "MTU must be a positive number": [
  null,
  "MTU має бути додатнім числом"
 ],
 "Manual": [
  null,
  "Вручну"
 ],
 "Master": [
  null,
  "Основний"
 ],
 "Maximum message age $max_age": [
  null,
  "Максимальний вік повідомлення $max_age"
 ],
 "Mode": [
  null,
  "Режим"
 ],
 "Monitoring Interval": [
  null,
  "Інтервал оновлення"
 ],
 "Monitoring Targets": [
  null,
  "Спостерігаємо за цілями"
 ],
 "NSNA Ping": [
  null,
  "Луна-імпульс NSNA"
 ],
 "Name": [
  null,
  "Назва"
 ],
 "Network devices and graphs require NetworkManager.": [
  null,
  "Для отримання списку пристроїв мережі та графіків слід встановити NetworkManager."
 ],
 "NetworkManager is not running.": [
  null,
  "NetworkManager не запущено."
 ],
 "Networking": [
  null,
  "Робота у мережі"
 ],
 "Networking Logs": [
  null,
  "Журнали роботи у мережі"
 ],
 "No": [
  null,
  "Ні"
 ],
 "No active zones": [
  null,
  "Немає активних зон"
 ],
 "No carrier": [
  null,
  "Немає сигналу"
 ],
 "No description available": [
  null,
  "Немає опису"
 ],
 "No open ports": [
  null,
  "Немає відкрити портів"
 ],
 "None": [
  null,
  "Немає"
 ],
 "Not available": [
  null,
  "Недоступний"
 ],
 "Parent": [
  null,
  "Батьківський"
 ],
 "Parent $parent": [
  null,
  "Батьківський $parent"
 ],
 "Part of ": [
  null,
  "Є частиною "
 ],
 "Passive": [
  null,
  "Неактивний"
 ],
 "Path cost": [
  null,
  "Вартість маршруту"
 ],
 "Path cost $path_cost": [
  null,
  "Вартість шляху $path_cost"
 ],
 "Permanent": [
  null,
  "Постійний"
 ],
 "Ping Interval": [
  null,
  "Проміжок між імпульсами"
 ],
 "Ping Target": [
  null,
  "Ціль тестування луною"
 ],
 "Please install the $0 package": [
  null,
  "Будь ласка, встановіть пакунок $0"
 ],
 "Port number and type do not match": [
  null,
  "Номер порту і тип не є сумісними"
 ],
 "Ports": [
  null,
  "Порти"
 ],
 "Prefix length": [
  null,
  "Довжина префікса"
 ],
 "Prefix length or Netmask": [
  null,
  "Довжина префікса або маска мережі"
 ],
 "Preparing": [
  null,
  "Приготування"
 ],
 "Preserve": [
  null,
  "Зберегти"
 ],
 "Primary": [
  null,
  "Основний"
 ],
 "Priority": [
  null,
  "Пріоритетність"
 ],
 "Priority $priority": [
  null,
  "Пріоритетність $priority"
 ],
 "Random": [
  null,
  "Випадковий"
 ],
 "Range": [
  null,
  "Діапазон"
 ],
 "Range must be strictly ordered": [
  null,
  "Діапазон має бути строго упорядковано"
 ],
 "Reboot": [
  null,
  "Перезавантажити"
 ],
 "Receiving": [
  null,
  "Отримання"
 ],
 "Remove $0": [
  null,
  "Вилучити $0"
 ],
 "Remove service": [
  null,
  "Вилучити службу"
 ],
 "Remove service from zones": [
  null,
  "Вилучити службу з зон"
 ],
 "Removing <b>$0</b> will break the connection to the server, and will make the administration UI unavailable.": [
  null,
  "Вилучення <b>$0</b> призведе до розірвання з’єднання із сервером і зробить адміністративний інтерфейс користувача недоступним."
 ],
 "Restoring connection": [
  null,
  "Відновлюємо з’єднання"
 ],
 "Round Robin": [
  null,
  "Циклічне"
 ],
 "Routes": [
  null,
  "Маршрути"
 ],
 "Runner": [
  null,
  "Засіб для запуску"
 ],
 "STP Forward delay": [
  null,
  "Затримка переспрямування STP"
 ],
 "STP Hello time": [
  null,
  "Час вітання STP"
 ],
 "STP Maximum message age": [
  null,
  "Максимальний вік повідомлення STP"
 ],
 "STP Priority": [
  null,
  "Пріоритет STP"
 ],
 "Sending": [
  null,
  "Надсилання"
 ],
 "Service": [
  null,
  "Служба"
 ],
 "Services": [
  null,
  "Служби"
 ],
 "Set to": [
  null,
  "Встановити значення"
 ],
 "Shared": [
  null,
  "Спільний"
 ],
 "Sorted from least trusted to most trusted": [
  null,
  "Упорядковано від найменшої до найбільшої довіри"
 ],
 "Spanning Tree Protocol": [
  null,
  "Протокол пересування ієрархією"
 ],
 "Spanning Tree Protocol (STP)": [
  null,
  "Протокол пересування ієрархією (STP)"
 ],
 "Stable": [
  null,
  "Стабільний"
 ],
 "Start Service": [
  null,
  "Запустити службу"
 ],
 "Status": [
  null,
  "Стан"
 ],
 "Sticky": [
  null,
  "Липкий"
 ],
 "Switch off $0": [
  null,
  "Вимкнути $0"
 ],
 "Switch on $0": [
  null,
  "Увімкнути $0"
 ],
 "Switching off <b>$0</b>  will break the connection to the server, and will make the administration UI unavailable.": [
  null,
  "Вимикання <b>$0</b> призведе до розірвання з’єднання із сервером і зробить адміністративний інтерфейс користувача недоступним."
 ],
 "Switching off <b>$0</b> will break the connection to the server, and will make the administration UI unavailable.": [
  null,
  "Вимикання <b>$0</b> призведе до розірвання з’єднання із сервером і зробить адміністративний інтерфейс користувача недоступним."
 ],
 "Switching on <b>$0</b> will break the connection to the server, and will make the administration UI unavailable.": [
  null,
  "Вмикання <b>$0</b> призведе до розірвання з’єднання із сервером і зробить адміністративний інтерфейс користувача недоступним."
 ],
 "TCP": [
  null,
  "TCP"
 ],
 "Team": [
  null,
  "Команда"
 ],
 "Team Port": [
  null,
  "Порт команди"
 ],
 "Team Port Settings": [
  null,
  "Параметри порту команди"
 ],
 "Team Settings": [
  null,
  "Параметри команди"
 ],
 "Testing connection": [
  null,
  "Перевіряємо з’єднання"
 ],
 "The user <b>$0</b> is not permitted to modify network settings": [
  null,
  "Користувачу <b>$0</b> заборонено змінювати параметри роботи мережі"
 ],
 "This device cannot be managed here.": [
  null,
  "Тут не можна керувати цим пристроєм."
 ],
 "Trust level": [
  null,
  "Рівень довіри"
 ],
 "UDP": [
  null,
  "UDP"
 ],
 "Unexpected error": [
  null,
  "Неочікувана помилка"
 ],
 "Unknown": [
  null,
  "Невідомий"
 ],
 "Unknown \"$0\"": [
  null,
  "Невідомий «$0»"
 ],
 "Unknown configuration": [
  null,
  "Невідомі налаштування"
 ],
 "Unknown service name": [
  null,
  "Невідома назва служби"
 ],
 "Unmanaged Interfaces": [
  null,
  "Некеровані інтерфейси"
 ],
 "VLAN": [
  null,
  "VLAN"
 ],
 "VLAN Id": [
  null,
  "Ід. VLAN"
 ],
 "VLAN Settings": [
  null,
  "Параметри VLAN"
 ],
 "Waiting": [
  null,
  "Очікування"
 ],
 "XOR": [
  null,
  "XOR"
 ],
 "Yes": [
  null,
  "Так"
 ],
 "You are not authorized to modify the firewall.": [
  null,
  "Вас не уповноважено на внесення змін до брандмауера."
 ],
 "Zone": [
  null,
  "Зона"
 ],
 "Zones": [
  null,
  "Зони"
 ],
 "[$0 bytes of binary data]": [
  null,
  "[$0 байтів двійкових даних]"
 ],
 "[binary data]": [
  null,
  "[двійкові дані]"
 ],
 "[no data]": [
  null,
  "[немає даних]"
 ],
 "show less": [
  null,
  "показати менше"
 ],
 "show more": [
  null,
  "показати більше"
 ],
 "page-title\u0004Networking": [
  null,
  "Робота у мережі"
 ]
}));
