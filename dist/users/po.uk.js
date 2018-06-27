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
 "Access": [
  null,
  "Доступ"
 ],
 "Account Expiration": [
  null,
  "Строк дії облікового запису"
 ],
 "Account not available or cannot be edited.": [
  null,
  "Обліковий запис недоступний або його не можна редагувати."
 ],
 "Accounts": [
  null,
  "Облікові записи"
 ],
 "Add key": [
  null,
  "Додати клавішу"
 ],
 "Add public key": [
  null,
  "Додати відкритий ключ"
 ],
 "Adding key": [
  null,
  "Додавання ключа"
 ],
 "Authorized Public SSH Keys": [
  null,
  "Уповноважені відкриті ключі SSH"
 ],
 "Back to Accounts": [
  null,
  "Назад до облікових записів"
 ],
 "Cancel": [
  null,
  "Скасувати"
 ],
 "Change": [
  null,
  "Змінити"
 ],
 "Close": [
  null,
  "Закрити"
 ],
 "Confirm": [
  null,
  "Підтвердити"
 ],
 "Confirm New Password": [
  null,
  "Підтвердження нового пароля"
 ],
 "Container Administrator": [
  null,
  "Адміністратор контейнера"
 ],
 "Create": [
  null,
  "Створити"
 ],
 "Create New Account": [
  null,
  "Створити новий рахунок"
 ],
 "Delete": [
  null,
  "Вилучити"
 ],
 "Delete $0": [
  null,
  "Вилучити $0"
 ],
 "Delete Files": [
  null,
  "Вилучити файли"
 ],
 "Error": [
  null,
  "Помилка"
 ],
 "Error saving authorized keys: ": [
  null,
  "Помилка під час спроби зберегти уповноважені ключі: "
 ],
 "Excellent password": [
  null,
  "Чудовий пароль"
 ],
 "Failed to change password": [
  null,
  "Не вдалося змінити пароль"
 ],
 "Failed to load authorized keys.": [
  null,
  "Не вдалося завантажити уповноважені ключі."
 ],
 "Force Change": [
  null,
  "Примусова зміна"
 ],
 "Force password change": [
  null,
  "Примусова зміна пароля"
 ],
 "Full Name": [
  null,
  "Повне ім'я"
 ],
 "Image Builder": [
  null,
  ""
 ],
 "Invalid expiration date": [
  null,
  "Некоректна дата строку завершення дії"
 ],
 "Invalid key": [
  null,
  "Некоректний ключ"
 ],
 "Invalid number of days": [
  null,
  "Некоректна кількість днів"
 ],
 "Last Login": [
  null,
  "Останній вхід"
 ],
 "Local Accounts": [
  null,
  "Локальні облікові записи"
 ],
 "Lock Account": [
  null,
  "Заблокувати обліковий запис"
 ],
 "Lock account on $0": [
  null,
  "Заблокувати обліковий запис $0"
 ],
 "Logged In": [
  null,
  "Вхід"
 ],
 "Never": [
  null,
  "Ніколи"
 ],
 "Never expire password": [
  null,
  "Необмежений строк дії пароля"
 ],
 "Never lock account": [
  null,
  "Ніколи не блокувати обліковий запис"
 ],
 "New Password": [
  null,
  "Новий пароль"
 ],
 "New password was not accepted": [
  null,
  "Новий пароль не прийнято"
 ],
 "No real name specified": [
  null,
  "Не вказано справжнього імені"
 ],
 "No user name specified": [
  null,
  "Не вказано імені користувача"
 ],
 "Off": [
  null,
  "Вимкнено"
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
 "Password": [
  null,
  "Пароль"
 ],
 "Password Expiration": [
  null,
  "Строк дії пароля"
 ],
 "Password is not acceptable": [
  null,
  "Пароль є неприйнятним"
 ],
 "Password is too weak": [
  null,
  "Пароль є надто простим"
 ],
 "Password must be changed": [
  null,
  "Пароль має бути змінено"
 ],
 "Paste the contents of your public SSH key file here": [
  null,
  "Сюди слід вставити вміст файла вашого відкритого ключа SSH"
 ],
 "Please specify an expiration date": [
  null,
  "Будь ласка, вкажіть кінцеву дату строку дії"
 ],
 "Prompting via passwd timed out": [
  null,
  "Час очікування відповіді на запит за допомогою passwd вичерпано"
 ],
 "Require password change every $0 days": [
  null,
  "Вимагати зміну пароля кожні $0 днів"
 ],
 "Require password change on $0": [
  null,
  "Вимагати зміну пароля $0"
 ],
 "Reset": [
  null,
  "Скинути"
 ],
 "Roles": [
  null,
  "Ролі"
 ],
 "Server Administrator": [
  null,
  "Адміністратор сервера"
 ],
 "Set": [
  null,
  "Встановити"
 ],
 "Set Password": [
  null,
  "Встановити пароль"
 ],
 "Terminate Session": [
  null,
  "Перервати сеанс"
 ],
 "The account '$0' will be forced to change their password on next login": [
  null,
  "Обліковий запис «$0» має примусово змінити пароль під час наступного входу"
 ],
 "The key you provided was not valid.": [
  null,
  "Наданий вами ключ є некоректним."
 ],
 "The passwords do not match": [
  null,
  "Паролі не збігаються"
 ],
 "The user <b>$0</b> is not permitted to modify accounts": [
  null,
  "Користувачу <b>$0</b> заборонено змінювати облікові записи"
 ],
 "The user name can only consist of letters from a-z, digits, dots, dashes and underscores.": [
  null,
  "Ім’я користувача може складатися лише із літер a-z, цифр, крапок, дефісів та символів підкреслювання."
 ],
 "There are no authorized public keys for this account.": [
  null,
  "Для цього облікового запису немає уповноважених відкритих ключів."
 ],
 "This user name already exists": [
  null,
  "Запис користувача із таким іменем уже існує"
 ],
 "Unable to delete root account": [
  null,
  "Неможливо вилучити обліковий запис root"
 ],
 "Unable to rename root account": [
  null,
  "Неможливо перейменувати обліковий запис root"
 ],
 "Unexpected error": [
  null,
  "Неочікувана помилка"
 ],
 "Unnamed": [
  null,
  "Без назви"
 ],
 "User Name": [
  null,
  "Ім'я користувача"
 ],
 "Validating key": [
  null,
  "Перевірка ключа"
 ],
 "You do not have permission to view the authorized public keys for this account.": [
  null,
  "У вас немає прав доступу для перегляду уповноважених відкритих ключів для цього облікового запису."
 ],
 "translatable": [
  null,
  ""
 ],
 "page-title\u0004Accounts": [
  null,
  "Облікові записи"
 ]
}));
