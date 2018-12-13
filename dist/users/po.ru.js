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
 "Access": [
  null,
  "Доступ"
 ],
 "Account Expiration": [
  null,
  "Срок действия учетной записи"
 ],
 "Account not available or cannot be edited.": [
  null,
  "Учетная запись недоступна или не может быть изменена."
 ],
 "Accounts": [
  null,
  "Счета"
 ],
 "Add key": [
  null,
  "Добавить ключ"
 ],
 "Add public key": [
  null,
  "Добавить открытый ключ"
 ],
 "Authorized Public SSH Keys": [
  null,
  "Авторизованные общедоступные SSH-ключи"
 ],
 "Back to Accounts": [
  null,
  "Вернуться к учетным записям"
 ],
 "Cancel": [
  null,
  "Отмена"
 ],
 "Change": [
  null,
  "Изменить"
 ],
 "Close": [
  null,
  "Закрыть"
 ],
 "Confirm": [
  null,
  "Подтвердить"
 ],
 "Confirm New Password": [
  null,
  "Подтвердите новый пароль"
 ],
 "Create": [
  null,
  "Создать"
 ],
 "Create New Account": [
  null,
  "Создать новый аккаунт"
 ],
 "Delete": [
  null,
  "Удалить"
 ],
 "Delete Files": [
  null,
  "Удалить файлы"
 ],
 "Failed to load authorized keys.": [
  null,
  "Не удалось загрузить авторизованные ключи."
 ],
 "Force Change": [
  null,
  "Изменение силы"
 ],
 "Force password change": [
  null,
  "Заменить пароль"
 ],
 "Full Name": [
  null,
  "Полное имя"
 ],
 "Invalid key": [
  null,
  "Неправильный ключ"
 ],
 "Last Login": [
  null,
  "Последний Войти"
 ],
 "Local Accounts": [
  null,
  "Местные учетные записи"
 ],
 "Lock Account": [
  null,
  "Учетная запись"
 ],
 "Never expire password": [
  null,
  "Никогда не истекает пароль"
 ],
 "Never lock account": [
  null,
  "Никогда не блокировать аккаунт"
 ],
 "New Password": [
  null,
  "новый пароль"
 ],
 "Off": [
  null,
  "Выкл"
 ],
 "Old Password": [
  null,
  "Прежний пароль"
 ],
 "On": [
  null,
  "Вкл"
 ],
 "Password": [
  null,
  "Пароль"
 ],
 "Password Expiration": [
  null,
  "Истечение срока действия пароля"
 ],
 "Paste the contents of your public SSH key file here": [
  null,
  "Вставьте содержимое своего общедоступного ключевого файла SSH здесь."
 ],
 "Reset": [
  null,
  "Сбросить"
 ],
 "Roles": [
  null,
  "Роли"
 ],
 "Set": [
  null,
  "Настроить"
 ],
 "Set Password": [
  null,
  "Установка пароля"
 ],
 "Terminate Session": [
  null,
  "Завершить сеанс"
 ],
 "There are no authorized public keys for this account.": [
  null,
  "Для этой учетной записи нет официальных ключей."
 ],
 "Unnamed": [
  null,
  "Безымянный"
 ],
 "User Name": [
  null,
  "Имя пользователя"
 ],
 "You do not have permission to view the authorized public keys for this account.": [
  null,
  "У вас нет разрешения на просмотр разрешенных открытых ключей для этой учетной записи."
 ],
 "translatable": [
  null,
  "переводимый"
 ]
}));
