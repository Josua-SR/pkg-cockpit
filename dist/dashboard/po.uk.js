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
  "language": "uk",
  "x-generator": "Zanata 4.4.5"
 },
 "$0 day": [
  "$0 days",
  "$0 день",
  "$0 дні",
  "$0 днів"
 ],
 "$0 hour": [
  "$0 hours",
  "$0 година",
  "$0 години",
  "$0 годин"
 ],
 "$0 minute": [
  "$0 minutes",
  "$0 хвилина",
  "$0 хвилини",
  "$0 хвилин"
 ],
 "$0 month": [
  "$0 months",
  "$0 місяць",
  "$0 місяці",
  "$0 місяців"
 ],
 "$0 week": [
  "$0 weeks",
  "$0 тиждень",
  "$0 тижні",
  "$0 тижнів"
 ],
 "$0 year": [
  "$0 years",
  "$0 рік",
  "$0 роки",
  "$0 років"
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
 "A compatible version of Cockpit is not installed on {{#strong}}{{host}}{{/strong}}.": [
  null,
  "У {{#strong}}{{host}}{{/strong}} не встановлено сумісної версії Cockpit."
 ],
 "Add": [
  null,
  "Додати"
 ],
 "Add Machine to Dashboard": [
  null,
  "Додати запис комп’ютера на панель"
 ],
 "Address": [
  null,
  "Адреса"
 ],
 "Advanced TCA": [
  null,
  "Розширене TCA"
 ],
 "All In One": [
  null,
  "Усе-в-одному"
 ],
 "Authentication": [
  null,
  "Розпізнавання"
 ],
 "Authentication Failed": [
  null,
  "Не вдалося пройти розпізнавання"
 ],
 "Available": [
  null,
  "Доступні"
 ],
 "Avatar": [
  null,
  "Аватар"
 ],
 "Blade": [
  null,
  "Blade"
 ],
 "Blade enclosure": [
  null,
  "Обгортка Blade"
 ],
 "Bus Expansion Chassis": [
  null,
  "Апаратний блок розширення каналу"
 ],
 "CPU": [
  null,
  "Процесор"
 ],
 "Can't load image": [
  null,
  "Не вдалося завантажити образ"
 ],
 "Cancel": [
  null,
  "Скасувати"
 ],
 "Checking for public keys": [
  null,
  "Шукаємо відкриті ключі"
 ],
 "Close": [
  null,
  "Закрити"
 ],
 "Cockpit could not contact the given host $0. Make sure it has ssh running on port $1, or specify another port in the address.": [
  null,
  "Cockpit не вдалося встановити зв’язок із вказаним вузлом $0. Переконайтеся, що ssh запущено на порту $1 або вкажіть інший порт у адресі."
 ],
 "Cockpit is not installed": [
  null,
  "Cockpit не встановлено"
 ],
 "Cockpit was unable to contact {{#strong}}{{host}}{{/strong}}.": [
  null,
  "Cockpit не вдалося встановити зв’язок ізt {{#strong}}{{host}}{{/strong}}."
 ],
 "Cockpit was unable to log in to {{#strong}}{{host}}{{/strong}}. {{#can_sync}}You may want to try to {{#sync_link}}synchronize users{{/sync_link}}.{{/can_sync}} For more authentication options and troubleshooting support please upgrade cockpit-ws to a newer version.": [
  null,
  "Cockpit не вдалося увійти до {{#strong}}{{host}}{{/strong}}. {{#can_sync}}Вам варто спробувати {{#sync_link}}синхронізувати користувачів{{/sync_link}}.{{/can_sync}} Щоб отримати доступ до ширшого спектра способів розпізнавання та до підтримки діагностики помилок, будь ласка, оновіть cockpit-ws."
 ],
 "Cockpit was unable to log into {{#strong}}{{host}}{{/strong}}.": [
  null,
  "Cockpit не вдалося увійти до {{#strong}}{{host}}{{/strong}}."
 ],
 "Cockpit was unable to log into {{#strong}}{{host}}{{/strong}}. To use this machine with cockpit you will need to enable one of the following authentication methods in the sshd config on {{#strong}}{{host}}{{/strong}}:": [
  null,
  "Cockpit не вдалося увійти до {{#strong}}{{host}}{{/strong}}. Щоб користуватися цим комп’ютером за допомогою cockpit, вам слід увімкнути вказані нижче способи розпізнавання у налаштуваннях sshd на {{#strong}}{{host}}{{/strong}}:"
 ],
 "Cockpit was unable to log into {{#strong}}{{host}}{{/strong}}. You can change your authentication credentials below. {{#can_sync}}You may prefer to {{#sync_link}}synchronize accounts and passwords{{/sync_link}}.{{/can_sync}}": [
  null,
  "Cockpit не вдалося увійти до {{#strong}}{{host}}{{/strong}}. Ви можете змінити ваші реєстраційні дані для розпізнавання нижче. {{#can_sync}}Можливо, варто надати перевагу {{#sync_link}}синхронізації облікових записів і паролів{{/sync_link}}.{{/can_sync}}"
 ],
 "Color": [
  null,
  "Колір"
 ],
 "Compact PCI": [
  null,
  "Компактний PCI"
 ],
 "Connect": [
  null,
  "З'єднатися"
 ],
 "Connecting simultaneously to more than {{ limit }} machines is unsupported.": [
  null,
  "Підтримки одночасного з’єднання із понад {{ limit }} комп’ютерами не передбачено."
 ],
 "Connection Error": [
  null,
  "Помилка з'єднання"
 ],
 "Convertible": [
  null,
  "Змінюваний"
 ],
 "Could not contact {{host}}": [
  null,
  "Не вдалося встановити зв’язок із {{host}}"
 ],
 "Dashboard": [
  null,
  "Панель приладів"
 ],
 "Desktop": [
  null,
  "Робоча станція"
 ],
 "Detachable": [
  null,
  "Змінний"
 ],
 "Disk I/O": [
  null,
  "Дисковий ввід/вивід"
 ],
 "Docking Station": [
  null,
  "Станція заряджання"
 ],
 "Edit Server": [
  null,
  "Змінити сервер"
 ],
 "Embedded PC": [
  null,
  "Вбудований ПК"
 ],
 "Enter IP address or host name": [
  null,
  "Введіть IP-адресу або назву вузла"
 ],
 "Entering a different password here means you will need to retype it every time you reconnect to this machine": [
  null,
  "Введення іншого пароля у це поле означатиме, що вам доведеться повторно вводити його кожного разу, коли ви повторно встановлюватимете з’єднання із цією машиною."
 ],
 "Error loading users: {{perm_failed}}": [
  null,
  "Помилка під час завантаження списку користувачів: {{perm_failed}}"
 ],
 "Expansion Chassis": [
  null,
  "Апаратний блок розширення"
 ],
 "Failed to add machine: $0": [
  null,
  "Не вдалося додати комп’ютер: $0"
 ],
 "Failed to change password": [
  null,
  "Не вдалося змінити пароль"
 ],
 "Failed to edit machine: $0": [
  null,
  "Не вдалося змінити запис комп’ютера: $0"
 ],
 "Fingerprint": [
  null,
  "Відбиток"
 ],
 "Go to now": [
  null,
  "Перейти зараз"
 ],
 "Hand Held": [
  null,
  "Портативний"
 ],
 "Host Name": [
  null,
  "Назва вузла"
 ],
 "In order to synchronize users, you need to log in to {{#strong}}{{host}}{{/strong}}.": [
  null,
  "Для синхронізації параметрів користувачів, слід увійти до {{#strong}}{{host}}{{/strong}}. "
 ],
 "Incorrect Host Key": [
  null,
  "Неправильний ключ вузла"
 ],
 "Invalid file permissions": [
  null,
  "Некоректні права доступу до файла"
 ],
 "IoT Gateway": [
  null,
  "Шлюз IoT"
 ],
 "Is sshd running on a different port?": [
  null,
  "sshd працює на іншому порті?"
 ],
 "Kerberos Based SSO": [
  null,
  "SSO на основі Kerberos"
 ],
 "Kerberos Ticket": [
  null,
  "Квиток Kerberos"
 ],
 "Laptop": [
  null,
  "Переносний ПК"
 ],
 "Leave blank to connect to this machine as the currently logged in user. If you enter a different username, that user will always be used when connecting to this machine.": [
  null,
  "Не заповнюйте, щоб встановити з’єднання із цією машиною від імені поточного користувача системи. Якщо ви введете ім’я іншого користувача, для встановлення з’єднання із цією машиною завжди використовуватиметься це ім’я."
 ],
 "Leave blank to connect to this machine as the currently logged in user{{#default_user}} ({{default_user}}){{/default_user}}. If you enter a different username, that user will always be used connecting to this machine.": [
  null,
  "Не заповнюйте, щоб встановити з’єднання із цією машиною від імені поточного користувача системи{{#default_user}} ({{default_user}}){{/default_user}}. Якщо ви введете ім’я іншого користувача, для встановлення з’єднання із цією машиною завжди використовуватиметься це ім’я."
 ],
 "Log In": [
  null,
  "Увійти"
 ],
 "Log in to {{host}}": [
  null,
  "Вхід до {{host}}"
 ],
 "Login Password": [
  null,
  "Пароль користувача"
 ],
 "Lost connection. Trying to reconnect": [
  null,
  "З’єднання розірвано. Намагаємося його повторно встановити"
 ],
 "Low Profile Desktop": [
  null,
  "Низькопрофільна робоча станція"
 ],
 "Lunch Box": [
  null,
  "Пусковий комп'ютер"
 ],
 "Main Server Chassis": [
  null,
  "Апаратний блок основного сервера"
 ],
 "Memory": [
  null,
  "Пам'ять"
 ],
 "Mini PC": [
  null,
  "Міні-ПК"
 ],
 "Mini Tower": [
  null,
  "Міні-башточка"
 ],
 "Multi-system Chassis": [
  null,
  "Багатосистемний апаратний блок"
 ],
 "Network": [
  null,
  "Мережа"
 ],
 "New password was not accepted": [
  null,
  "Новий пароль не прийнято"
 ],
 "No such file or directory": [
  null,
  "Немає такого файла або каталогу"
 ],
 "Not a valid private key": [
  null,
  "Некоректний закритий ключ"
 ],
 "Notebook": [
  null,
  "Ноутбук"
 ],
 "Off": [
  null,
  "Вимкнено"
 ],
 "Old password not accepted": [
  null,
  "Старий пароль не прийнято"
 ],
 "On": [
  null,
  "Увімкнено"
 ],
 "Other": [
  null,
  "Інше"
 ],
 "Password": [
  null,
  "Пароль"
 ],
 "Password not accepted": [
  null,
  "Пароль не прийнято"
 ],
 "Peripheral Chassis": [
  null,
  "Периферійний апаратний блок"
 ],
 "Pizza Box": [
  null,
  "З коробку для піци"
 ],
 "Port": [
  null,
  "Порт"
 ],
 "Portable": [
  null,
  "Портативний"
 ],
 "Prompting via ssh-add timed out": [
  null,
  "Час очікування відповіді на запит за допомогою ssh-add вичерпано"
 ],
 "Prompting via ssh-keygen timed out": [
  null,
  "Час очікування відповіді на запит за допомогою ssh-keygen вичерпано"
 ],
 "Public Key": [
  null,
  "Відкритий ключ"
 ],
 "RAID Chassis": [
  null,
  "Апаратний блок RAID"
 ],
 "Rack Mount Chassis": [
  null,
  "Апаратний блок монтування стійок"
 ],
 "Sealed-case PC": [
  null,
  "ПК з опломбованим корпусом"
 ],
 "Select the users that you would like to be synchronized with {{#strong}}{{host}}{{/strong}}": [
  null,
  "Виберіть користувачів, записи яких ви б хотіли синхронізувати з {{#strong}}{{host}}{{/strong}}"
 ],
 "Servers": [
  null,
  "Сервери"
 ],
 "Set": [
  null,
  "Встановити"
 ],
 "Space-saving Computer": [
  null,
  "Компактний комп'ютер"
 ],
 "Stick PC": [
  null,
  "Паличковий ПК"
 ],
 "Sub Chassis": [
  null,
  "Підблок"
 ],
 "Sub Notebook": [
  null,
  "Підноутбук"
 ],
 "Synchronize": [
  null,
  "Синхронізувати"
 ],
 "Synchronize users": [
  null,
  "Синхронізувати користувачів"
 ],
 "Tablet": [
  null,
  "Планшет"
 ],
 "The IP address or host name cannot contain whitespace.": [
  null,
  "У IP-адресі або назві вузла не повинно бути пробілів."
 ],
 "The authenticity of host {{#strong}}{{host}}{{/strong}} can't be established. Are you sure you want to continue connecting?": [
  null,
  "Не вдалося встановити ідентичність вузла {{#strong}}{{host}}{{/strong}}. Ви справді хочете продовжити спробу встановити з’єднання?"
 ],
 "The key of {{#strong}}{{host}}{{/strong}} does not match the key previously in use. Unless this machine was recently replaced, it is likely that someone is trying to attack your connection to this machine.": [
  null,
  "Ключ {{#strong}}{{host}}{{/strong}} не відповідає раніше використаному ключу. Якщо нещодавно ніхто не міняв цього комп’ютера, ймовірною причиною є спроба атаки на ваше з’єднання із цим комп’ютером."
 ],
 "The passwords do not match.": [
  null,
  "Паролі не збігаються."
 ],
 "The user <b>$0</b> is not permitted to manage servers": [
  null,
  "Користувачу <b>$0</b> заборонено керувати серверами"
 ],
 "This machine has already been added.": [
  null,
  "Цей комп’ютер вже було додано."
 ],
 "This version of cockpit-ws does not support connecting to a host with an alternate user or port": [
  null,
  "У цій версії cockpit-ws не передбачено підтримки встановлення з’єднання із вузлом від альтернативного користувача або на альтернативному порті."
 ],
 "To try a different port you will need to upgrade cockpit-ws to a newer version.": [
  null,
  "Щоб спробувати інший порт, вам слід оновити cockpit-ws."
 ],
 "Tower": [
  null,
  "Башточка"
 ],
 "Type a password": [
  null,
  "Введіть пароль"
 ],
 "Unknown": [
  null,
  "Невідомий"
 ],
 "Unknown Host Key": [
  null,
  "Невідомий ключ вузла"
 ],
 "Update": [
  null,
  "Оновити"
 ],
 "User": [
  null,
  "Користувач"
 ],
 "User name": [
  null,
  "Ім'я користувача"
 ],
 "Using available credentials": [
  null,
  "З використанням доступних реєстраційних даних"
 ],
 "You are connected to {{#strong}}{{host}}{{/strong}}, however in order to synchronize users, a user with superuser privileges is required.": [
  null,
  "Ви встановлюєте з’єднання із {{#strong}}{{host}}{{/strong}}. Втім, для синхронізації даних користувачів потрібні права доступу адміністративного користувача."
 ],
 "You are currently connected directly to this server. You cannot delete it.": [
  null,
  "Зараз ваш комп’ютер безпосередньо з’єднано із цим сервером. Ви не можете його вилучити."
 ],
 "You can remove the previously stored key by running the following command": [
  null,
  "Вилучити раніше збережений ключ можна за допомогою такої команди"
 ]
}));
