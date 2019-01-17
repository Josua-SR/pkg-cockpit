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
 "Adding key": [
  null,
  "Добавление ключа"
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
 "Container Administrator": [
  null,
  "Администратор контейнера"
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
 "Delete $0": [
  null,
  "удалять $0"
 ],
 "Delete Files": [
  null,
  "Удалить файлы"
 ],
 "Error": [
  null,
  "Ошибка"
 ],
 "Error saving authorized keys: ": [
  null,
  "Ошибка сохранения авторизованных ключей: "
 ],
 "Excellent password": [
  null,
  "Отличный пароль"
 ],
 "Failed to change password": [
  null,
  "Не удалось изменить пароль"
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
 "Image Builder": [
  null,
  "Image Builder"
 ],
 "Invalid expiration date": [
  null,
  "Недопустимая дата истечения срока действия"
 ],
 "Invalid key": [
  null,
  "Неправильный ключ"
 ],
 "Invalid number of days": [
  null,
  "Недопустимое количество дней"
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
 "Lock account on $0": [
  null,
  "Блокировать учетную запись $0"
 ],
 "Logged In": [
  null,
  "Записан"
 ],
 "Never": [
  null,
  "Никогда"
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
 "New password was not accepted": [
  null,
  "Новый пароль не был принят"
 ],
 "No real name specified": [
  null,
  "Не указано настоящее имя"
 ],
 "No user name specified": [
  null,
  "Не указано имя пользователя"
 ],
 "Off": [
  null,
  "Выкл"
 ],
 "Old Password": [
  null,
  "Прежний пароль"
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
 "Password Expiration": [
  null,
  "Истечение срока действия пароля"
 ],
 "Password is not acceptable": [
  null,
  "Пароль не приемлем"
 ],
 "Password is too weak": [
  null,
  "Пароль слишком слабый"
 ],
 "Password must be changed": [
  null,
  "Пароль должен быть изменен"
 ],
 "Paste the contents of your public SSH key file here": [
  null,
  "Вставьте содержимое своего общедоступного ключевого файла SSH здесь."
 ],
 "Please specify an expiration date": [
  null,
  "Укажите срок действия"
 ],
 "Prompting via passwd timed out": [
  null,
  "Вызов с помощью passwd"
 ],
 "Require password change every $0 days": [
  null,
  "Требовать изменение пароля каждый $0 дней"
 ],
 "Require password change on $0": [
  null,
  "Требовать изменения пароля $0"
 ],
 "Reset": [
  null,
  "Сбросить"
 ],
 "Roles": [
  null,
  "Роли"
 ],
 "Server Administrator": [
  null,
  "Администратор сервера"
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
 "The account '$0' will be forced to change their password on next login": [
  null,
  "Счет '$0'будет вынужден изменить свой пароль при следующем входе в систему"
 ],
 "The key you provided was not valid.": [
  null,
  "Указанный ключ недействителен."
 ],
 "The passwords do not match": [
  null,
  "пароли не совпадают"
 ],
 "The user <b>$0</b> is not permitted to modify accounts": [
  null,
  "Пользователь <b>$0</b> не разрешено изменять учетные записи"
 ],
 "The user name can only consist of letters from a-z, digits, dots, dashes and underscores.": [
  null,
  "Имя пользователя может состоять только из букв из az, цифр, точек, тире и символов подчеркивания."
 ],
 "There are no authorized public keys for this account.": [
  null,
  "Для этой учетной записи нет официальных ключей."
 ],
 "This user name already exists": [
  null,
  "Такое имя пользователя уже существует"
 ],
 "Unable to delete root account": [
  null,
  "Не удалось удалить учетную запись root"
 ],
 "Unable to rename root account": [
  null,
  "Не удалось переименовать учетную запись root"
 ],
 "Unexpected error": [
  null,
  "Непредвиденная ошибка"
 ],
 "Unnamed": [
  null,
  "Безымянный"
 ],
 "User Name": [
  null,
  "Имя пользователя"
 ],
 "Validating key": [
  null,
  "Контрольный ключ"
 ],
 "You do not have permission to view the authorized public keys for this account.": [
  null,
  "У вас нет разрешения на просмотр разрешенных открытых ключей для этой учетной записи."
 ],
 "You must wait longer to change your password": [
  null,
  "Вы должны подождать дольше, чтобы сменить пароль"
 ],
 "translatable": [
  null,
  "переводимый"
 ],
 "page-title\u0004Accounts": [
  null,
  "Счета"
 ]
}));
