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
 "A compatible version of Cockpit is not installed on {{#strong}}{{host}}{{/strong}}.": [
  null,
  "Совместимая версия Cockpit не установлена ​​на {{#strong}}{{host}}{{/strong}}."
 ],
 "Add": [
  null,
  "Добавить"
 ],
 "Add Machine to Dashboard": [
  null,
  "Добавление компьютера на информационную панель"
 ],
 "Address": [
  null,
  "Адрес"
 ],
 "Advanced TCA": [
  null,
  "Расширенный TCA"
 ],
 "All In One": [
  null,
  "Всё в одном"
 ],
 "Authentication": [
  null,
  "Проверка подлинности"
 ],
 "Authentication Failed": [
  null,
  "Ошибка проверки подлинности"
 ],
 "Available": [
  null,
  "Доступно"
 ],
 "Avatar": [
  null,
  "Аватар"
 ],
 "Blade": [
  null,
  "Блейд-сервер"
 ],
 "Blade enclosure": [
  null,
  "Корзина"
 ],
 "Bus Expansion Chassis": [
  null,
  "Корпус расширения шины"
 ],
 "CPU": [
  null,
  "ЦП"
 ],
 "Can't load image": [
  null,
  "Не удаётся загрузить образ"
 ],
 "Cancel": [
  null,
  "Отмена"
 ],
 "Checking for public keys": [
  null,
  "Проверка открытых ключей"
 ],
 "Close": [
  null,
  "Закрыть"
 ],
 "Cockpit could not contact the given host $0. Make sure it has ssh running on port $1, or specify another port in the address.": [
  null,
  "Не удалось установить связь между Cockpit и заданным узлом $0. Убедитесь, что на порте $1 работает SSH, или укажите другой порт в адресе."
 ],
 "Cockpit is not installed": [
  null,
  "Cockpit не установлен"
 ],
 "Cockpit was unable to contact {{#strong}}{{host}}{{/strong}}.": [
  null,
  "Не удалось установить связь между Cockpit и {{#strong}}{{host}}{{/strong}}."
 ],
 "Cockpit was unable to log in to {{#strong}}{{host}}{{/strong}}. {{#can_sync}}You may want to try to {{#sync_link}}synchronize users{{/sync_link}}.{{/can_sync}} For more authentication options and troubleshooting support please upgrade cockpit-ws to a newer version.": [
  null,
  "Не удалось выполнить вход в {{#strong}}{{host}}{{/strong}} с помощью Cockpit. {{#can_sync}}Вы можете попытаться {{#sync_link}}синхронизировать пользователей{{/sync_link}}.{{/can_sync}} Для получения дополнительных параметров проверки подлинности и устранения неполадок обновите cockpit-ws до новой версии."
 ],
 "Cockpit was unable to log into {{#strong}}{{host}}{{/strong}}.": [
  null,
  "Не удалось выполнить вход в {{#strong}}{{host}}{{/strong}} с помощью Cockpit."
 ],
 "Cockpit was unable to log into {{#strong}}{{host}}{{/strong}}. To use this machine with cockpit you will need to enable one of the following authentication methods in the sshd config on {{#strong}}{{host}}{{/strong}}:": [
  null,
  "Не удалось выполнить вход в {{#strong}}{{host}}{{/strong}} с помощью Cockpit. Для использования Cockpit на этом компьютере вам необходимо включить один из следующих методов проверки подлинности в конфигурации SSHD на {{#strong}}{{host}}{{/strong}}:"
 ],
 "Cockpit was unable to log into {{#strong}}{{host}}{{/strong}}. You can change your authentication credentials below. {{#can_sync}}You may prefer to {{#sync_link}}synchronize accounts and passwords{{/sync_link}}.{{/can_sync}}": [
  null,
  "Не удалось выполнить вход в {{#strong}}{{host}}{{/strong}} с помощью Cockpit. Вы можете изменить учётные данные для проверки подлинности ниже. {{#can_sync}}Возможно, вы предпочтёте {{#sync_link}}синхронизировать учётные записи и пароли{{/sync_link}}.{{/can_sync}}"
 ],
 "Color": [
  null,
  "Цвет"
 ],
 "Compact PCI": [
  null,
  "CompactPCI"
 ],
 "Connect": [
  null,
  "Подключиться"
 ],
 "Connecting simultaneously to more than {{ limit }} machines is unsupported.": [
  null,
  "Одновременное подключение к количеству компьютеров, превышающему {{ limit }}, не поддерживается."
 ],
 "Connection Error": [
  null,
  "Ошибка подключения"
 ],
 "Convertible": [
  null,
  "Компьютер-трансформер"
 ],
 "Could not contact {{host}}": [
  null,
  "Не удалось связаться с {{host}}"
 ],
 "Dashboard": [
  null,
  "Панель мониторинга"
 ],
 "Desktop": [
  null,
  "Настольный компьютер"
 ],
 "Detachable": [
  null,
  "Съёмный компьютер"
 ],
 "Disk I/O": [
  null,
  "Дисковый ввод-вывод"
 ],
 "Docking Station": [
  null,
  "Док-станция"
 ],
 "Edit Server": [
  null,
  "Изменение сервера"
 ],
 "Embedded PC": [
  null,
  "Встраиваемый компьютер"
 ],
 "Enter IP address or host name": [
  null,
  "Введите IP-адрес или имя узла"
 ],
 "Entering a different password here means you will need to retype it every time you reconnect to this machine": [
  null,
  "Ввод другого пароля здесь приведёт к тому, что вам придётся вводить его заново при каждом подключении к этому компьютеру"
 ],
 "Error loading users: {{perm_failed}}": [
  null,
  "Произошла ошибка при загрузке пользователей: {{perm_failed}}"
 ],
 "Expansion Chassis": [
  null,
  "Шасси расширения"
 ],
 "Failed to add machine: $0": [
  null,
  "Не удалось добавить компьютер: $0"
 ],
 "Failed to change password": [
  null,
  "Не удалось изменить пароль"
 ],
 "Failed to edit machine: $0": [
  null,
  "Не удалось изменить компьютер: $0"
 ],
 "Fingerprint": [
  null,
  "Отпечаток"
 ],
 "Go to now": [
  null,
  "Текущий момент"
 ],
 "Hand Held": [
  null,
  "Карманный компьютер"
 ],
 "Host Name": [
  null,
  "Имя узла"
 ],
 "In order to synchronize users, you need to log in to {{#strong}}{{host}}{{/strong}}.": [
  null,
  "Чтобы синхронизировать пользователей, вам необходимо войти в систему {{#strong}}{{host}}{{/strong}}"
 ],
 "Incorrect Host Key": [
  null,
  "Неверный ключ хоста"
 ],
 "Invalid file permissions": [
  null,
  "Недопустимые разрешения файлов"
 ],
 "IoT Gateway": [
  null,
  "IoT Gateway"
 ],
 "Is sshd running on a different port?": [
  null,
  "Работает ли sshd на другом порту?"
 ],
 "Kerberos Based SSO": [
  null,
  "SSO на основе Kerberos"
 ],
 "Kerberos Ticket": [
  null,
  "Билеты на Kerberos"
 ],
 "Laptop": [
  null,
  "портативный компьютер"
 ],
 "Leave blank to connect to this machine as the currently logged in user. If you enter a different username, that user will always be used when connecting to this machine.": [
  null,
  "Оставьте пустым, чтобы подключиться к этому аппарату в качестве текущего пользователя. Если вы вводите другое имя пользователя, этот пользователь всегда будет использоваться при подключении к этой машине."
 ],
 "Leave blank to connect to this machine as the currently logged in user{{#default_user}} ({{default_user}}){{/default_user}}. If you enter a different username, that user will always be used connecting to this machine.": [
  null,
  "Оставьте пустым, чтобы подключиться к этому аппарату в качестве текущего пользователя{{#default_user}} ({{default_user}}){{/default_user}}Если вы вводите другое имя пользователя, этот пользователь всегда будет использовать подключение к этой машине."
 ],
 "Log In": [
  null,
  "Вход"
 ],
 "Log in to {{host}}": [
  null,
  "Войти в {{host}}"
 ],
 "Login Password": [
  null,
  "Пароль для входа"
 ],
 "Lost connection. Trying to reconnect": [
  null,
  "Потерянное соединение. Попытка повторного подключения"
 ],
 "Low Profile Desktop": [
  null,
  "Низкий профиль рабочего стола"
 ],
 "Lunch Box": [
  null,
  "Коробка для ланча"
 ],
 "Main Server Chassis": [
  null,
  "Основной серверный корпус"
 ],
 "Memory": [
  null,
  "Память"
 ],
 "Mini PC": [
  null,
  "Мини-ПК"
 ],
 "Mini Tower": [
  null,
  "Мини-башня"
 ],
 "Multi-system Chassis": [
  null,
  "Многосистемное шасси"
 ],
 "Network": [
  null,
  "Сеть"
 ],
 "New password was not accepted": [
  null,
  "Новый пароль не был принят"
 ],
 "No such file or directory": [
  null,
  "Данный файл или каталог отсутствует"
 ],
 "Not a valid private key": [
  null,
  "Недействительный закрытый ключ"
 ],
 "Notebook": [
  null,
  "Ноутбук"
 ],
 "Off": [
  null,
  "Выкл"
 ],
 "Old password not accepted": [
  null,
  "Старый пароль не принимается"
 ],
 "On": [
  null,
  "Вкл"
 ],
 "Other": [
  null,
  "Другие"
 ],
 "Password": [
  null,
  "Пароль"
 ],
 "Password not accepted": [
  null,
  "Пароль не принимается"
 ],
 "Peripheral Chassis": [
  null,
  "Периферийное шасси"
 ],
 "Pizza Box": [
  null,
  "Коробка для пиццы"
 ],
 "Port": [
  null,
  "Порт"
 ],
 "Portable": [
  null,
  "Портативный"
 ],
 "Prompting via ssh-add timed out": [
  null,
  "Вызов через ssh-add"
 ],
 "Prompting via ssh-keygen timed out": [
  null,
  "Вызов с помощью ssh-keygen"
 ],
 "Public Key": [
  null,
  "Открытый ключ"
 ],
 "RAID Chassis": [
  null,
  "Шасси RAID"
 ],
 "Rack Mount Chassis": [
  null,
  "Корпус для монтажа в стойку"
 ],
 "Sealed-case PC": [
  null,
  "Компьютер с герметичным корпусом"
 ],
 "Select the users that you would like to be synchronized with {{#strong}}{{host}}{{/strong}}": [
  null,
  "Выберите пользователей, с которыми вы хотите синхронизировать {{#strong}}{{host}}{{/strong}}"
 ],
 "Servers": [
  null,
  "Серверы"
 ],
 "Set": [
  null,
  "Настроить"
 ],
 "Space-saving Computer": [
  null,
  "Компактный компьютер"
 ],
 "Stick PC": [
  null,
  "Stick PC"
 ],
 "Sub Chassis": [
  null,
  "Sub Chassis"
 ],
 "Sub Notebook": [
  null,
  "Sub Notebook"
 ],
 "Synchronize": [
  null,
  "Синхронизировать"
 ],
 "Synchronize users": [
  null,
  "Синхронизация пользователей"
 ],
 "Tablet": [
  null,
  "Планшет"
 ],
 "The IP address or host name cannot contain whitespace.": [
  null,
  "IP-адрес или имя хоста не могут содержать пробелы."
 ],
 "The authenticity of host {{#strong}}{{host}}{{/strong}} can't be established. Are you sure you want to continue connecting?": [
  null,
  "Подлинность хоста {{#strong}}{{host}}{{/strong}} не может быть установлена. Вы действительно хотите продолжить соединение?"
 ],
 "The key of {{#strong}}{{host}}{{/strong}} does not match the key previously in use. Unless this machine was recently replaced, it is likely that someone is trying to attack your connection to this machine.": [
  null,
  "Ключ {{#strong}}{{host}}{{/strong}} не соответствует ранее используемому ключу. Если эта машина не была заменена недавно, вполне вероятно, что кто-то пытается атаковать ваше соединение с этой машиной."
 ],
 "The passwords do not match.": [
  null,
  "Пароли не совпадают."
 ],
 "The user <b>$0</b> is not permitted to manage servers": [
  null,
  "Пользователь <b>$0</b> не разрешено управлять серверами"
 ],
 "This machine has already been added.": [
  null,
  "Эта машина уже добавлена."
 ],
 "This version of cockpit-ws does not support connecting to a host with an alternate user or port": [
  null,
  "Эта версия cockpit-ws не поддерживает подключение к хосту с другим пользователем или портом"
 ],
 "To try a different port you will need to upgrade cockpit-ws to a newer version.": [
  null,
  "Чтобы попробовать другой порт, вам нужно обновить кокпит-ws до более новой версии."
 ],
 "Tower": [
  null,
  "башня"
 ],
 "Type a password": [
  null,
  "Введите пароль"
 ],
 "Unknown": [
  null,
  "Неизвестно"
 ],
 "Unknown Host Key": [
  null,
  "Неизвестный ключ хоста"
 ],
 "Update": [
  null,
  "Обновить"
 ],
 "User": [
  null,
  "Пользователь"
 ],
 "User name": [
  null,
  "Пользователь"
 ],
 "Using available credentials": [
  null,
  "Использование доступных учетных данных"
 ],
 "You are connected to {{#strong}}{{host}}{{/strong}}, however in order to synchronize users, a user with superuser privileges is required.": [
  null,
  "Вы подключены к {{#strong}}{{host}}{{/strong}}, однако для синхронизации пользователей требуется пользователь с привилегиями суперпользователя."
 ],
 "You are currently connected directly to this server. You cannot delete it.": [
  null,
  "Вы в настоящий момент подключены непосредственно к этому серверу. Вы не можете удалить его."
 ]
}));
