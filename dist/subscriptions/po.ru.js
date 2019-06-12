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
 "'Organization' required to register.": [
  null,
  "Название организации, необходимое для регистрации."
 ],
 "'Organization' required when using activation keys.": [
  null,
  "Название организации, необходимое при использовании ключей активации."
 ],
 "Access denied": [
  null,
  "Доступ запрещен"
 ],
 "Activation Key": [
  null,
  "Ключ активации"
 ],
 "Architecture": [
  null,
  "Архитектура"
 ],
 "Cancel": [
  null,
  "Отмена"
 ],
 "Couldn't get system subscription status. Please ensure subscription-manager is installed.": [
  null,
  "Не удалось получить статус системной подписки. Убедитесь, что подписчик-менеджер установлен."
 ],
 "Custom URL": [
  null,
  "Настраиваемый URL-адрес"
 ],
 "Default": [
  null,
  "По умолчанию"
 ],
 "Details": [
  null,
  "Подробности"
 ],
 "Ends": [
  null,
  "Заканчивается"
 ],
 "Installed products": [
  null,
  "Установленные продукты"
 ],
 "Invalid credentials": [
  null,
  "Недопустимые учетные данные"
 ],
 "Invalid username or password": [
  null,
  "Неверное имя пользователя или пароль"
 ],
 "Login": [
  null,
  "Вход"
 ],
 "Login/password or activation key required to register.": [
  null,
  "Имя/пароль пользователя или ключ активации, необходимые для регистрации."
 ],
 "No installed products on the system.": [
  null,
  "Нет установленных продуктов в системе."
 ],
 "Ok": [
  null,
  "OK"
 ],
 "Organization": [
  null,
  "Организация"
 ],
 "Password": [
  null,
  "Пароль"
 ],
 "Product ID": [
  null,
  "Идентификатор продукта"
 ],
 "Product name": [
  null,
  "Название продукта"
 ],
 "Proxy": [
  null,
  "Прокси"
 ],
 "Register": [
  null,
  "Регистрация"
 ],
 "Register system": [
  null,
  "Система регистрации"
 ],
 "Retrieving subscription status...": [
  null,
  "Получение статуса подписки ..."
 ],
 "Server": [
  null,
  "Сервер"
 ],
 "Starts": [
  null,
  "Начало"
 ],
 "Status": [
  null,
  "Состояние"
 ],
 "Status: $0": [
  null,
  "Статус: $0"
 ],
 "Status: System isn't registered": [
  null,
  "Статус: система не зарегистрирована"
 ],
 "Subscriptions": [
  null,
  "Подписки"
 ],
 "The current user isn't allowed to access system subscription status.": [
  null,
  "Текущему пользователю не разрешен доступ к системному состоянию подписки."
 ],
 "URL": [
  null,
  "Ссылка (URL)"
 ],
 "Unable to connect": [
  null,
  "Не удалось подключиться"
 ],
 "Unregister": [
  null,
  "Удалить регистрацию"
 ],
 "Unregistering system...": [
  null,
  "Незарегистрированная система ..."
 ],
 "Updating": [
  null,
  "обновление"
 ],
 "Use proxy server": [
  null,
  "Использовать прокси-сервер"
 ],
 "User": [
  null,
  "Пользователь"
 ],
 "Version": [
  null,
  "Версия"
 ],
 "undefined": [
  null,
  "не определено"
 ]
}));
