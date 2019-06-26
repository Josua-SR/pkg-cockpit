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
 "A compatible version of Cockpit is not installed on {{#strong}}{{host}}{{/strong}}.": [
  null,
  "Совместимая версия Cockpit не установлена ​​на {{#strong}}{{host}}{{/strong}}."
 ],
 "About Cockpit": [
  null,
  "О Cockpit"
 ],
 "Account Settings": [
  null,
  "Параметры учётной записи"
 ],
 "Active Pages": [
  null,
  "Активные страницы"
 ],
 "Add": [
  null,
  "Добавить"
 ],
 "Add Machine to Dashboard": [
  null,
  "Добавление компьютера на информационную панель"
 ],
 "Add key": [
  null,
  "Добавить ключ"
 ],
 "Address": [
  null,
  "Адрес"
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
 "Cancel": [
  null,
  "Отмена"
 ],
 "Cannot connect to an unknown machine": [
  null,
  "Не удаётся подключиться к неизвестному компьютеру"
 ],
 "Change Password": [
  null,
  "Изменить пароль"
 ],
 "Checking for public keys": [
  null,
  "Проверка открытых ключей"
 ],
 "Choose the language to be used in the application": [
  null,
  "Выберите язык, который будет использоваться в приложении"
 ],
 "Close": [
  null,
  "Закрыть"
 ],
 "Close Selected Pages": [
  null,
  "Закрыть выделенные страницы"
 ],
 "Cockpit could not contact the given host $0. Make sure it has ssh running on port $1, or specify another port in the address.": [
  null,
  "Не удалось установить связь между Cockpit и заданным узлом $0. Убедитесь, что на порте $1 работает SSH, или укажите другой порт в адресе."
 ],
 "Cockpit had an unexpected internal error. <br/><br/>You can try restarting Cockpit by pressing refresh in your browser. The javascript console contains details about this error (<b>Ctrl-Shift-J</b> in most browsers).": [
  null,
  "Неожиданная внутренняя ошибка Cockpit. <br/><br/>Вы можете попробовать перезапустить Cockpit, нажав кнопку «Обновить» в вашем браузере. Консоль javascript содержит сведения об этой ошибке (<b>Ctrl-Shift-J</b> в большинстве браузеров)."
 ],
 "Cockpit is an interactive Linux server admin interface.": [
  null,
  "Cockpit — это интерактивный интерфейс администратора серверов Linux."
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
 "Comment": [
  null,
  "Комментарий"
 ],
 "Confirm": [
  null,
  "Подтверждение"
 ],
 "Connect": [
  null,
  "Подключиться"
 ],
 "Connecting simultaneously to more than {{ limit }} machines is unsupported.": [
  null,
  "Одновременное подключение к количеству компьютеров, превышающему {{ limit }}, не поддерживается."
 ],
 "Connecting to the machine": [
  null,
  "Подключение к компьютеру"
 ],
 "Could not contact {{host}}": [
  null,
  "Не удалось связаться с {{host}}"
 ],
 "Couldn't connect to the machine": [
  null,
  "Не удалось подключиться к компьютеру"
 ],
 "Details": [
  null,
  "Подробности"
 ],
 "Disconnected": [
  null,
  "Отключено"
 ],
 "Display Language": [
  null,
  "Язык интерфейса"
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
 "Host": [
  null,
  "Узел"
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
 "Leave blank to connect to this machine as the currently logged in user{{#default_user}} ({{default_user}}){{/default_user}}. If you enter a different username, that user will always be used connecting to this machine.": [
  null,
  "Оставьте пустым, чтобы подключиться к этому аппарату в качестве текущего пользователя{{#default_user}} ({{default_user}}){{/default_user}}Если вы вводите другое имя пользователя, этот пользователь всегда будет использовать подключение к этой машине."
 ],
 "Licensed under:": [
  null,
  "Лицензия:"
 ],
 "Log In": [
  null,
  "Вход"
 ],
 "Log Out": [
  null,
  "Выход"
 ],
 "Log in again": [
  null,
  "Вход снова"
 ],
 "Log in to {{host}}": [
  null,
  "Войти в {{host}}"
 ],
 "Login Password": [
  null,
  "Пароль для входа"
 ],
 "Login has escalated admin privileges": [
  null,
  "Вход имеет повышенные привилегии администратора"
 ],
 "Machines": [
  null,
  "Машины"
 ],
 "New Password": [
  null,
  "Новый пароль"
 ],
 "New password was not accepted": [
  null,
  "Новый пароль не был принят"
 ],
 "No matching files found": [
  null,
  "Не найдено совпадающих файлов"
 ],
 "No such file or directory": [
  null,
  "Данный файл или каталог отсутствует"
 ],
 "Not a valid private key": [
  null,
  "Недействительный закрытый ключ"
 ],
 "Off": [
  null,
  "Выкл"
 ],
 "Ok": [
  null,
  "OK"
 ],
 "Old Password": [
  null,
  "Старый пароль"
 ],
 "Old password not accepted": [
  null,
  "Старый пароль не принимается"
 ],
 "On": [
  null,
  "Вкл"
 ],
 "Ooops!": [
  null,
  "По электронной почте Ой!"
 ],
 "Password": [
  null,
  "Пароль"
 ],
 "Password not accepted": [
  null,
  "Пароль не принимается"
 ],
 "Password not usable for privileged tasks or to connect to other machines": [
  null,
  "Пароль не используется для привилегированных задач или для подключения к другим машинам"
 ],
 "Path to file": [
  null,
  "Путь к файлу"
 ],
 "Port": [
  null,
  "Порт"
 ],
 "Privileged": [
  null,
  "привилегированный"
 ],
 "Project website": [
  null,
  "Веб-сайт проекта"
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
 "Reconnect": [
  null,
  "Заново"
 ],
 "Reuse my password for privileged tasks and to connect to other machines": [
  null,
  "Повторное использование моего пароля для привилегированных задач и подключение к другим машинам"
 ],
 "Select": [
  null,
  "Выбрать"
 ],
 "Select the users that you would like to be synchronized with {{#strong}}{{host}}{{/strong}}": [
  null,
  "Выберите пользователей, с которыми вы хотите синхронизировать {{#strong}}{{host}}{{/strong}}"
 ],
 "Synchronize": [
  null,
  "Синхронизировать"
 ],
 "Synchronize users": [
  null,
  "Синхронизация пользователей"
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
 "The machine is restarting": [
  null,
  "Аппарат перезапускается"
 ],
 "The passwords do not match.": [
  null,
  "Пароли не совпадают."
 ],
 "There are currently no active pages": [
  null,
  "Сейчас нет активных страниц"
 ],
 "This machine has already been added.": [
  null,
  "Эта машина уже добавлена."
 ],
 "This version of cockpit-ws does not support connecting to a host with an alternate user or port": [
  null,
  "Эта версия cockpit-ws не поддерживает подключение к хосту с другим пользователем или портом"
 ],
 "Tip: Make your key password match your login password to automatically authenticate against other systems.": [
  null,
  "Совет. Сделайте свой ключевой пароль в соответствии с вашим паролем для входа в систему для автоматической аутентификации с другими системами."
 ],
 "To try a different port you will need to upgrade cockpit-ws to a newer version.": [
  null,
  "Чтобы попробовать другой порт, вам нужно обновить кокпит-ws до более новой версии."
 ],
 "Too many files found": [
  null,
  "Слишком много файлов найдено"
 ],
 "Troubleshoot": [
  null,
  "Диагностика"
 ],
 "Try to reconnect": [
  null,
  "Попробуйте снова подключиться"
 ],
 "Type": [
  null,
  "Тип"
 ],
 "Type a password": [
  null,
  "Введите пароль"
 ],
 "Unexpected error": [
  null,
  "Непредвиденная ошибка"
 ],
 "Unknown Host Key": [
  null,
  "Неизвестный ключ хоста"
 ],
 "Unlock Key": [
  null,
  "Разблокировать ключ"
 ],
 "Update": [
  null,
  "Обновить"
 ],
 "Use the following keys to authenticate against other systems": [
  null,
  "Используйте следующие ключи для аутентификации с другими системами"
 ],
 "User name": [
  null,
  "Пользователь"
 ],
 "Using available credentials": [
  null,
  "Использование доступных учетных данных"
 ],
 "Version": [
  null,
  "Версия"
 ],
 "You are connected to {{#strong}}{{host}}{{/strong}}, however in order to synchronize users, a user with superuser privileges is required.": [
  null,
  "Вы подключены к {{#strong}}{{host}}{{/strong}}, однако для синхронизации пользователей требуется пользователь с привилегиями суперпользователя."
 ],
 "active": [
  null,
  "Активно"
 ]
}));
