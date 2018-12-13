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
  "Совместимая версия Cockpit не установлена ​​на {{#strong}}{{host}}{{/strong}}"
 ],
 "Add": [
  null,
  "Добавить"
 ],
 "Add Machine to Dashboard": [
  null,
  "Добавить машину в панель инструментов"
 ],
 "Address": [
  null,
  "Адрес"
 ],
 "Authentication": [
  null,
  "Проверка доступа"
 ],
 "Authentication Failed": [
  null,
  "Ошибка аутентификации"
 ],
 "Available": [
  null,
  "Доступно"
 ],
 "Avatar": [
  null,
  "Аватар"
 ],
 "CPU": [
  null,
  "ЦП"
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
  "Кабина не могла связаться с данным хостом $0Убедитесь, что ssh работает на порту $1, или указать другой порт в адресе."
 ],
 "Cockpit is not installed": [
  null,
  "Кабина не установлена"
 ],
 "Cockpit was unable to contact {{#strong}}{{host}}{{/strong}}.": [
  null,
  "Кабина не смогла связаться {{#strong}}{{host}}{{/strong}}"
 ],
 "Cockpit was unable to log in to {{#strong}}{{host}}{{/strong}}. {{#can_sync}}You may want to try to {{#sync_link}}synchronize users{{/sync_link}}.{{/can_sync}} For more authentication options and troubleshooting support please upgrade cockpit-ws to a newer version.": [
  null,
  "Cockpit не смог войти в систему {{#strong}}{{host}}{{/strong}} {{#can_sync}}Вы можете попытаться {{#sync_link}}синхронизировать пользователей{{/sync_link}}{{/can_sync}} Для получения дополнительных параметров проверки подлинности и устранения неполадок обновите версию кабины экипажа до более новой версии."
 ],
 "Cockpit was unable to log into {{#strong}}{{host}}{{/strong}}.": [
  null,
  "Кабина не смогла войти в {{#strong}}{{host}}{{/strong}}"
 ],
 "Cockpit was unable to log into {{#strong}}{{host}}{{/strong}}. To use this machine with cockpit you will need to enable one of the following authentication methods in the sshd config on {{#strong}}{{host}}{{/strong}}:": [
  null,
  "Кабина не смогла войти в {{#strong}}{{host}}{{/strong}}Чтобы использовать эту машину с кабиной, вам необходимо включить один из следующих методов проверки подлинности в конфигурации sshd {{#strong}}{{host}}{{/strong}}:"
 ],
 "Cockpit was unable to log into {{#strong}}{{host}}{{/strong}}. You can change your authentication credentials below. {{#can_sync}}You may prefer to {{#sync_link}}synchronize accounts and passwords{{/sync_link}}.{{/can_sync}}": [
  null,
  "Кабина не смогла войти в {{#strong}}{{host}}{{/strong}}Вы можете изменить учетные данные для проверки подлинности ниже. {{#can_sync}}Вы можете предпочесть {{#sync_link}}синхронизировать учетные записи и пароли{{/sync_link}}{{/can_sync}}"
 ],
 "Color": [
  null,
  "Цвет"
 ],
 "Connect": [
  null,
  "Подключаться"
 ],
 "Connecting simultaneously to more than {{ limit }} machines is unsupported.": [
  null,
  "Одновременное подключение к {{ limit }} машины не поддерживаются."
 ],
 "Could not contact {{host}}": [
  null,
  "Не удалось связаться {{host}}"
 ],
 "Dashboard": [
  null,
  "Обзор"
 ],
 "Disk I/O": [
  null,
  "Дисковый ввод-вывод"
 ],
 "Edit Server": [
  null,
  "Изменить сервер"
 ],
 "Enter IP address or host name": [
  null,
  "Введите IP-адрес или имя хоста"
 ],
 "Entering a different password here means you will need to retype it every time you reconnect to this machine": [
  null,
  "Ввод другого пароля здесь означает, что вам нужно будет перепечатывать его каждый раз, когда вы снова подключаетесь к этой машине"
 ],
 "Error loading users: {{perm_failed}}": [
  null,
  "Ошибка при загрузке пользователей: {{perm_failed}}"
 ],
 "Failed to add machine: $0": [
  null,
  "Не удалось добавить машину: $0"
 ],
 "Failed to change password": [
  null,
  "Не удалось изменить пароль"
 ],
 "Failed to edit machine: $0": [
  null,
  "Не удалось изменить машину: $0"
 ],
 "Fingerprint": [
  null,
  "Отпечаток"
 ],
 "Go to now": [
  null,
  "Перейдите к"
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
  "Логин Пароль"
 ],
 "Lost connection. Trying to reconnect": [
  null,
  "Потерянное соединение. Попытка повторного подключения"
 ],
 "Memory": [
  null,
  "Память"
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
 "Password": [
  null,
  "Пароль"
 ],
 "Password not accepted": [
  null,
  "Пароль не принимается"
 ],
 "Port": [
  null,
  "Порт"
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
 "The passwords do not match.": [
  null,
  "Пароли не совпадают."
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
 "Type a password": [
  null,
  "Введите пароль"
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
 ]
}));
