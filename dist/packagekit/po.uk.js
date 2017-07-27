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
 "$0 more…": [
  null,
  ""
 ],
 "$0 update": [
  "$0 updates",
  "$0 оновлення",
  "$0 оновлення",
  "$0 оновлень"
 ],
 ", including $1 security fix": [
  ", including $1 security fixes",
  ", включно із $1 виправленням захисту",
  ", включно із $1 виправленнями захисту",
  ", включно із $1 виправленнями захисту"
 ],
 "Applying updates": [
  null,
  "Застосовуємо оновлення"
 ],
 "Applying updates failed": [
  null,
  "Не вдалося застосувати оновлення"
 ],
 "Available Updates": [
  null,
  "Доступні оновлення"
 ],
 "Bugs": [
  null,
  "Вади"
 ],
 "Cancel": [
  null,
  "Скасувати"
 ],
 "Check for updates": [
  null,
  "Перевірити оновлення"
 ],
 "Cockpit itself will be updated.": [
  null,
  "Сам Cockpit буде оновлено."
 ],
 "Details": [
  null,
  "Подробиці"
 ],
 "Downloaded": [
  null,
  ""
 ],
 "Downloading": [
  null,
  "Отримуємо"
 ],
 "Ignore": [
  null,
  "Ігнорувати"
 ],
 "Initializing...": [
  null,
  "Ініціалізація…"
 ],
 "Install all updates": [
  null,
  "Встановити усі оновлення"
 ],
 "Install security updates": [
  null,
  "Встановити оновлення захисту"
 ],
 "Installed": [
  null,
  ""
 ],
 "Installing": [
  null,
  "Встановлення"
 ],
 "Last checked: $0 ago": [
  null,
  "Востаннє перевірено: $0 тому"
 ],
 "Loading available updates failed": [
  null,
  "Не вдалося завантажити список доступних оновлень"
 ],
 "Loading available updates, please wait...": [
  null,
  "Завантажуємо доступні оновлення, зачекайте…"
 ],
 "More information…": [
  null,
  ""
 ],
 "Name": [
  null,
  "Назва"
 ],
 "No updates pending": [
  null,
  "У черзі немає оновлень"
 ],
 "Package information": [
  null,
  ""
 ],
 "PackageKit crashed": [
  null,
  "Аварійне завершення роботи PackageKit"
 ],
 "PackageKit is not installed": [
  null,
  "PackageKit не встановлено"
 ],
 "PackageKit reported error code $0": [
  null,
  "PackageKit повідомлено про помилку із кодом $0"
 ],
 "Refreshing package information": [
  null,
  "Оновлюємо дані щодо пакунків"
 ],
 "Restart Now": [
  null,
  "Перезапустити зараз"
 ],
 "Restart Recommended": [
  null,
  "Рекомендовано перезапустити"
 ],
 "Restarting": [
  null,
  "Перезапускаємо"
 ],
 "Security Update": [
  null,
  "Оновлення захисту"
 ],
 "Set up": [
  null,
  ""
 ],
 "Setting up": [
  null,
  "Налаштовуємо"
 ],
 "Software Updates": [
  null,
  "Оновлення програм"
 ],
 "Some other program is currently using the package manager, please wait...": [
  null,
  "Програмою для керування пакунків користується якась інша програма, будь ласка, зачекайте…"
 ],
 "System is up to date": [
  null,
  "Система не потребує оновлення"
 ],
 "The following packages were recently updated:": [
  null,
  ""
 ],
 "The following packages were updated $0:": [
  null,
  ""
 ],
 "Update History": [
  null,
  ""
 ],
 "Update Log": [
  null,
  ""
 ],
 "Updated": [
  null,
  ""
 ],
 "Updated packages may require a restart to take effect.": [
  null,
  "Використання оновлених пакунків може потребувати перезапуску."
 ],
 "Updating": [
  null,
  "Оновлення"
 ],
 "Verified": [
  null,
  ""
 ],
 "Verifying": [
  null,
  "Перевіряємо"
 ],
 "Version": [
  null,
  "Версія"
 ],
 "When you get disconnected, the updates will continue in the background. You can reconnect and resume watching the update progress.": [
  null,
  "Коли з’єднання буде розірвано, оновлення продовжуватиметься у фоновому режимі. Ви можете повторно встановити з’єднання і відновити спостереження за поступом оновлення."
 ],
 "Your server will close the connection soon. You can reconnect after it has restarted.": [
  null,
  "Невдовзі ваш сервер розірве з’єднання. Ви можете відновити це з’єднання, щойно сервер буде перезапущено."
 ]
}));
