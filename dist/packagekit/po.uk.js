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
 "$0 update": [
  "$0 updates",
  "$0 оновлення",
  "$0 оновлення",
  "$0 оновлень"
 ],
 "$1 security fix": [
  "$1 security fixes",
  "$1 виправлення захисту",
  "$1 виправлення захисту",
  "$1 виправлень захисту"
 ],
 ", including $1 security fix": [
  ", including $1 security fixes",
  ", включно із $1 виправленням захисту",
  ", включно із $1 виправленнями захисту",
  ", включно із $1 виправленнями захисту"
 ],
 "Apply all updates": [
  null,
  "Застосувати усі оновлення"
 ],
 "Apply security updates": [
  null,
  "Застосувати оновлення захисту"
 ],
 "Applying updates": [
  null,
  "Застосовуємо оновлення"
 ],
 "Applying updates failed": [
  null,
  "Не вдалося застосувати оновлення"
 ],
 "Automatic Updates": [
  null,
  "Автоматичні оновлення"
 ],
 "Available Updates": [
  null,
  "Доступні оновлення"
 ],
 "Bugs:": [
  null,
  "Вади:"
 ],
 "Cancel": [
  null,
  "Скасувати"
 ],
 "Check for Updates": [
  null,
  "Перевірити наявність оновлень"
 ],
 "Details": [
  null,
  "Подробиці"
 ],
 "Downloaded": [
  null,
  "Отримано"
 ],
 "Downloading": [
  null,
  "Отримуємо"
 ],
 "Errata:": [
  null,
  "Помилки:"
 ],
 "Ignore": [
  null,
  "Ігнорувати"
 ],
 "Initializing...": [
  null,
  "Ініціалізація…"
 ],
 "Install All Updates": [
  null,
  "Встановити усі оновлення"
 ],
 "Install Security Updates": [
  null,
  "Встановити оновлення захисту"
 ],
 "Installed": [
  null,
  "Встановлено"
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
 "Name": [
  null,
  "Назва"
 ],
 "No updates pending": [
  null,
  "У черзі немає оновлень"
 ],
 "Off": [
  null,
  "Вимкнено"
 ],
 "On": [
  null,
  "Увімкнено"
 ],
 "Package information": [
  null,
  "Дані щодо пакунка"
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
 "Register…": [
  null,
  "Зареєструвати…"
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
 "Set up": [
  null,
  "Налаштувати"
 ],
 "Setting up": [
  null,
  "Налаштовуємо"
 ],
 "Severity": [
  null,
  "Важливість"
 ],
 "Severity:": [
  null,
  "Критичність:"
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
  "Нещодавно було оновлено такі пакунки:"
 ],
 "The following packages were updated $0:": [
  null,
  "Оновлено такі пакунки $0:"
 ],
 "This system is not registered": [
  null,
  "Цю систему не зареєстровано"
 ],
 "This web console will be updated.": [
  null,
  "Цю вебконсоль буде оновлено."
 ],
 "To get software updates, this system needs to be registered with Red Hat, either using the Red Hat Customer Portal or a local subscription server.": [
  null,
  "Щоб отримувати оновлення програмного забезпечення, цю систему слід зареєструвати у Red Hat або за допомогою порталу клієнтів Red Hat, або за допомогою локального сервера передплати."
 ],
 "Unregistered System": [
  null,
  "Незареєстрована система"
 ],
 "Update History": [
  null,
  "Історія оновлень"
 ],
 "Update Log": [
  null,
  "Журнал оновлень"
 ],
 "Updated": [
  null,
  "Оновлено"
 ],
 "Updated packages may require a restart to take effect.": [
  null,
  "Використання оновлених пакунків може потребувати перезапуску."
 ],
 "Updates are disabled.": [
  null,
  "Оновлення вимкнено."
 ],
 "Updating": [
  null,
  "Оновлення"
 ],
 "Verified": [
  null,
  "Перевірено"
 ],
 "Verifying": [
  null,
  "Перевіряємо"
 ],
 "Version": [
  null,
  "Версія"
 ],
 "View Registration Details": [
  null,
  "Переглянути параметри реєстрації"
 ],
 "You need to re-subscribe this system.": [
  null,
  "Вам слід поновити передплату для цієї системи."
 ],
 "Your browser will disconnect, but this does not affect the update process. You can reconnect in a few moments to continue watching the progress.": [
  null,
  "Ваша програма для перегляду інтернету від'єднається, але це не вплине на процес оновлення. Ви зможете з'єднатися знову за декілька секунд, щоб продовжити спостереження за поступом."
 ],
 "Your server will close the connection soon. You can reconnect after it has restarted.": [
  null,
  "Невдовзі ваш сервер розірве з’єднання. Ви можете відновити це з’єднання, щойно сервер буде перезапущено."
 ],
 "and restart the machine automatically.": [
  null,
  "і перезапуск системи автоматично."
 ],
 "at": [
  null,
  "на"
 ],
 "every day": [
  null,
  "кожного дня"
 ],
 "on Fridays": [
  null,
  "по п'ятницях"
 ],
 "on Mondays": [
  null,
  "по понеділках"
 ],
 "on Saturdays": [
  null,
  "по суботах"
 ],
 "on Sundays": [
  null,
  "по неділях"
 ],
 "on Thursdays": [
  null,
  "по четвергах"
 ],
 "on Tuesdays": [
  null,
  "по вівторках"
 ],
 "on Wednesdays": [
  null,
  "по середах"
 ],
 "undefined": [
  null,
  "не визначено"
 ]
}));
