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
 "'Organization' required to register.": [
  null,
  "«Установа» потребує реєстрації."
 ],
 "'Organization' required when using activation keys.": [
  null,
  "Слід вказати щось у полі «Установа», якщо використовуються ключі активації."
 ],
 "Access denied": [
  null,
  "Доступ заборонено"
 ],
 "Activation Key": [
  null,
  "Ключ активації"
 ],
 "Architecture": [
  null,
  "Архітектура"
 ],
 "Cancel": [
  null,
  "Скасувати"
 ],
 "Couldn't get system subscription status. Please ensure subscription-manager is installed.": [
  null,
  "Не вдалося отримати дані щодо стану передплати системи. Будь ласка, переконайтеся, що встановлено subscription-manager."
 ],
 "Custom URL": [
  null,
  "Нетипова адреса"
 ],
 "Default": [
  null,
  "Типовий"
 ],
 "Details": [
  null,
  "Подробиці"
 ],
 "Ends": [
  null,
  "Завершується"
 ],
 "Installed products": [
  null,
  "Встановлені продукти"
 ],
 "Invalid credentials": [
  null,
  "Реєстраційні дані вказано з помилками"
 ],
 "Invalid username or password": [
  null,
  "Некоректне ім’я користувача чи пароль"
 ],
 "Login": [
  null,
  "Користувач"
 ],
 "Login/password or activation key required to register.": [
  null,
  "Для реєстрації потрібна пара значень користувач-пароль або ключ активації."
 ],
 "No installed products on the system.": [
  null,
  "У системі немає встановлених продуктів."
 ],
 "Ok": [
  null,
  "Гаразд"
 ],
 "Organization": [
  null,
  "Установа"
 ],
 "Password": [
  null,
  "Пароль"
 ],
 "Product ID": [
  null,
  "Ід. продукту"
 ],
 "Product name": [
  null,
  "Назва продукту"
 ],
 "Proxy": [
  null,
  "Проксі"
 ],
 "Register": [
  null,
  "Зареєструвати"
 ],
 "Register system": [
  null,
  "Зареєструвати систему"
 ],
 "Retrieving subscription status...": [
  null,
  "Отримуємо дані стану передплати…"
 ],
 "Server": [
  null,
  "Сервер"
 ],
 "Starts": [
  null,
  "Починається"
 ],
 "Status": [
  null,
  "Стан"
 ],
 "Status: $0": [
  null,
  "Стан: $0"
 ],
 "Status: System isn't registered": [
  null,
  "Стан: систему не зареєстровано"
 ],
 "Subscriptions": [
  null,
  "Передплати"
 ],
 "The current user isn't allowed to access system subscription status.": [
  null,
  "Поточному користувачу заборонено отримувати доступ до стану передплати системи."
 ],
 "URL": [
  null,
  "Адреса"
 ],
 "Unable to connect": [
  null,
  "Не вдалось з'єднатись"
 ],
 "Unregister": [
  null,
  "Знятись з реєстрації"
 ],
 "Unregistering system...": [
  null,
  "Скасовуємо реєстрацію системи…"
 ],
 "Updating": [
  null,
  "Оновлення"
 ],
 "Use proxy server": [
  null,
  "Використовувати проксі-сервер"
 ],
 "User": [
  null,
  "Користувач"
 ],
 "Version": [
  null,
  "Версія"
 ],
 "undefined": [
  null,
  "не визначено"
 ]
}));
