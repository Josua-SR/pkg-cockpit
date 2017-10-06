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
  "x-generator": "Zanata 3.9.6"
 },
 "A compatible version of Cockpit is not installed on {{#strong}}{{host}}{{/strong}}.": [
  null,
  "У {{#strong}}{{host}}{{/strong}} не встановлено сумісної версії Cockpit."
 ],
 "About Cockpit": [
  null,
  "Про Cockpit"
 ],
 "Account Settings": [
  null,
  "Параметри облікового запису"
 ],
 "Active Pages": [
  null,
  "Активні сторінки"
 ],
 "Add": [
  null,
  "Додати"
 ],
 "Add Machine to Dashboard": [
  null,
  "Додати запис комп’ютера на панель"
 ],
 "Add key": [
  null,
  "Додати клавішу"
 ],
 "Address": [
  null,
  "Адреса"
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
 "Cancel": [
  null,
  "Скасувати"
 ],
 "Cannot connect to an unknown machine": [
  null,
  "Неможливо встановити з’єднання із невідомим комп’ютером"
 ],
 "Change Password": [
  null,
  "Змінити пароль"
 ],
 "Checking for public keys": [
  null,
  "Шукаємо відкриті ключі"
 ],
 "Choose the language to be used in the application": [
  null,
  "Виберіть мову перекладу, яку буде використано для інтерфейсу програми"
 ],
 "Close": [
  null,
  "Закрити"
 ],
 "Close Selected Pages": [
  null,
  "Закрити позначені сторінки"
 ],
 "Cockpit could not contact the given host $0. Make sure it has ssh running on port $1, or specify another port in the address.": [
  null,
  "Cockpit не вдалося встановити зв’язок із вказаним вузлом $0. Переконайтеся, що ssh запущено на порту $1 або вкажіть інший порт у адресі."
 ],
 "Cockpit had an unexpected internal error. <br/><br/>You can try restarting Cockpit by pressing refresh in your browser. The javascript console contains details about this error (<b>Ctrl-Shift-J</b> in most browsers).": [
  null,
  "У Cockpit сталася неочікувана внутрішня помилка. <br/><br/>Ви можете спробувати перезапустити Cockpit натисканням кнопки оновлення у вашій програмі для перегляду інтернету. у консолі javascript можна знайти подробиці щодо цієї помилки (<b>Ctrl-Shift-J</b> у більшості програм для перегляду інтернету)."
 ],
 "Cockpit is an interactive Linux server admin interface.": [
  null,
  "Cockpit — інтерактивний інтерфейс адміністратора сервера Linux."
 ],
 "Cockpit is an interactive Linux server admin interface. ": [
  null,
  "Cockpit — інтерактивний інтерфейс адміністратора сервера Linux. "
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
 "Comment": [
  null,
  "Коментар"
 ],
 "Confirm": [
  null,
  "Підтвердити"
 ],
 "Connect": [
  null,
  "З'єднатися"
 ],
 "Connecting simultaneously to more than {{ limit }} machines is unsupported.": [
  null,
  "Підтримки одночасного з’єднання із понад {{ limit }} комп’ютерами не передбачено."
 ],
 "Connecting to the machine": [
  null,
  "Встановлюємо з’єднання із комп’ютером"
 ],
 "Could not contact {{host}}": [
  null,
  "Не вдалося встановити зв’язок із {{host}}"
 ],
 "Couldn't connect to the machine": [
  null,
  "Не вдалося встановити з’єднання із комп’ютером"
 ],
 "Details": [
  null,
  "Подробиці"
 ],
 "Disconnected": [
  null,
  "Роз'єднано"
 ],
 "Display Language": [
  null,
  "Мова перекладу"
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
 "Leave blank to connect to this machine as the currently logged in user{{#default_user}} ({{default_user}}){{/default_user}}. If you enter a different username, that user will always be used connecting to this machine.": [
  null,
  "Не заповнюйте, щоб встановити з’єднання із цією машиною від імені поточного користувача системи{{#default_user}} ({{default_user}}){{/default_user}}. Якщо ви введете ім’я іншого користувача, для встановлення з’єднання із цією машиною завжди використовуватиметься це ім’я."
 ],
 "Licensed under:": [
  null,
  "Умови ліцензування:"
 ],
 "Lock to prevent privileged tasks": [
  null,
  "Заблокувати, щоб запобігти виконанню привілейованих завдань"
 ],
 "Locked": [
  null,
  "Заблоковано"
 ],
 "Log In": [
  null,
  "Увійти"
 ],
 "Log Out": [
  null,
  "Вийти"
 ],
 "Log in again": [
  null,
  "Знову увійти"
 ],
 "Log in to {{host}}": [
  null,
  "Вхід до {{host}}"
 ],
 "Login Password": [
  null,
  "Пароль користувача"
 ],
 "Machines": [
  null,
  "Машини"
 ],
 "New Password": [
  null,
  "Новий пароль"
 ],
 "New password was not accepted": [
  null,
  "Новий пароль не прийнято"
 ],
 "No matching files found": [
  null,
  "Відповідних файлів не знайдено"
 ],
 "No such file or directory": [
  null,
  "Немає такого файла або каталогу"
 ],
 "Not a valid private key": [
  null,
  "Некоректний закритий ключ"
 ],
 "Off": [
  null,
  "Вимкнено"
 ],
 "Ok": [
  null,
  "Гаразд"
 ],
 "Old Password": [
  null,
  "Старий пароль"
 ],
 "Old password not accepted": [
  null,
  "Старий пароль не прийнято"
 ],
 "On": [
  null,
  "Увімкнено"
 ],
 "Ooops!": [
  null,
  "Вибачте!"
 ],
 "Password": [
  null,
  "Пароль"
 ],
 "Password not accepted": [
  null,
  "Пароль не прийнято"
 ],
 "Password not usable for privileged tasks or to connect to other machines": [
  null,
  "Пароль непридатний для виконання для привілейованих завдань та з’єднання з іншими комп’ютерами"
 ],
 "Path to file": [
  null,
  "Шлях до файла"
 ],
 "Port": [
  null,
  "Порт"
 ],
 "Privileged tasks not available": [
  null,
  "Привілейовані завдання недоступні"
 ],
 "Project website": [
  null,
  "Сайт проекту"
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
 "Reconnect": [
  null,
  "Повторно з’єднатися"
 ],
 "Reuse my password for privileged tasks and to connect to other machines": [
  null,
  "Повторно використати ваш пароль для привілейованих завдань та з’єднання з іншими комп’ютерами"
 ],
 "Select": [
  null,
  "Вибрати"
 ],
 "Select the users that you would like to be synchronized with {{#strong}}{{host}}{{/strong}}": [
  null,
  "Виберіть користувачів, записи яких ви б хотіли синхронізувати з {{#strong}}{{host}}{{/strong}}"
 ],
 "Synchronize": [
  null,
  "Синхронізувати"
 ],
 "Synchronize users": [
  null,
  "Синхронізувати користувачів"
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
 "The machine is restarting": [
  null,
  "Комп’ютер перезавантажується"
 ],
 "The passwords do not match.": [
  null,
  "Паролі не збігаються."
 ],
 "There are currently no active pages": [
  null,
  "Зараз активних сторінок немає"
 ],
 "This machine has already been added.": [
  null,
  "Цей комп’ютер вже було додано."
 ],
 "This version of cockpit-ws does not support connecting to a host with an alternate user or port": [
  null,
  "У цій версії cockpit-ws не передбачено підтримки встановлення з’єднання із вузлом від альтернативного користувача або на альтернативному порті."
 ],
 "Tip: Make your key password match your login password to automatically authenticate against other systems.": [
  null,
  "Підказка: для автоматичного розпізнавання на інших системах встановіть однаковий пароль для ключа і для входу до системи."
 ],
 "To try a different port you will need to upgrade cockpit-ws to a newer version.": [
  null,
  "Щоб спробувати інший порт, вам слід оновити cockpit-ws."
 ],
 "Too many files found": [
  null,
  "Знайдено забагато файлів"
 ],
 "Troubleshoot": [
  null,
  "Діагностика проблем"
 ],
 "Try to reconnect": [
  null,
  "Спробувати з’єднатися знову"
 ],
 "Type": [
  null,
  "Тип"
 ],
 "Type a password": [
  null,
  "Введіть пароль"
 ],
 "Unexpected error": [
  null,
  "Неочікувана помилка"
 ],
 "Unknown Host Key": [
  null,
  "Невідомий ключ вузла"
 ],
 "Unlock Key": [
  null,
  "Розблокувати ключ"
 ],
 "Unlocked": [
  null,
  "Розблоковано"
 ],
 "Update": [
  null,
  "Оновити"
 ],
 "Use the following keys to authenticate against other systems": [
  null,
  "Використати вказані нижче ключі для розпізнавання у інших системах"
 ],
 "User name": [
  null,
  "Ім'я користувача"
 ],
 "Using available credentials": [
  null,
  "З використанням доступних реєстраційних даних"
 ],
 "Version": [
  null,
  "Версія"
 ],
 "You are connected to {{#strong}}{{host}}{{/strong}}, however in order to synchronize users, a user with superuser privileges is required.": [
  null,
  "Ви встановлюєте з’єднання із {{#strong}}{{host}}{{/strong}}. Втім, для синхронізації даних користувачів потрібні права доступу адміністративного користувача."
 ],
 "You can remove the previously stored key by running the following command": [
  null,
  "Вилучити раніше збережений ключ можна за допомогою такої команди"
 ],
 "active": [
  null,
  "активний"
 ]
}));
