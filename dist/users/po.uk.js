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
  "x-generator": "Zanata 4.6.2"
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
 "Delete Files": [
  null,
  "Вилучити файли"
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
 "Invalid key": [
  null,
  "Некоректний ключ"
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
 "Off": [
  null,
  "Вимкнено"
 ],
 "Old Password": [
  null,
  "Старий пароль"
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
 "Paste the contents of your public SSH key file here": [
  null,
  "Сюди слід вставити вміст файла вашого відкритого ключа SSH"
 ],
 "Reset": [
  null,
  "Скинути"
 ],
 "Roles": [
  null,
  "Ролі"
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
 "There are no authorized public keys for this account.": [
  null,
  "Для цього облікового запису немає уповноважених відкритих ключів."
 ],
 "Unnamed": [
  null,
  "Без назви"
 ],
 "User Name": [
  null,
  "Ім'я користувача"
 ],
 "You do not have permission to view the authorized public keys for this account.": [
  null,
  "У вас немає прав доступу для перегляду уповноважених відкритих ключів для цього облікового запису."
 ],
 "translatable": [
  null,
  "придатний до перекладу"
 ]
}));
