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
 "$0 occurrence": [
  "$1 occurrences",
  "$0 відповідник",
  "$0 відповідники",
  "$0 відповідників"
 ],
 "Apply this solution": [
  null,
  "Застосувати це рішення"
 ],
 "Applying solution...": [
  null,
  "Застосовуємо рішення…"
 ],
 "Audit log": [
  null,
  "Журнал інспектування"
 ],
 "Connecting to SETroubleshoot daemon...": [
  null,
  "Встановлюємо з’єднання з OSTree"
 ],
 "Enforce policy:": [
  null,
  "Правила примушення:"
 ],
 "Error while deleting alert: $0": [
  null,
  "Помилка під час вилучення нагадування: $0"
 ],
 "Error while setting SELinux mode: '$0'": [
  null,
  "Помилка під час спроби встановити режим SELinux: «$0»"
 ],
 "Failed to delete alert: $0": [
  null,
  "Не вдалося вилучити нагадування: $0"
 ],
 "Install setroubleshoot-server to troubleshoot SELinux events.": [
  null,
  ""
 ],
 "No SELinux alerts.": [
  null,
  "Немає сповіщень SELinux."
 ],
 "Not connected": [
  null,
  "Не з’єднано"
 ],
 "Occurred $0": [
  null,
  "Сталося $0"
 ],
 "Occurred between $0 and $1": [
  null,
  "Сталося між $0 і $1"
 ],
 "Off": [
  null,
  "Вимкнено"
 ],
 "On": [
  null,
  "Увімкнено"
 ],
 "SELinux Access Control Errors": [
  null,
  "Помилка керування доступом SELinux"
 ],
 "SELinux Policy": [
  null,
  "Правила SELinux"
 ],
 "SELinux Troubleshoot": [
  null,
  "Усування вад SELinux"
 ],
 "SELinux is disabled on the system": [
  null,
  "SELinux вимкнено у системі."
 ],
 "SELinux is disabled on the system.": [
  null,
  "SELinux вимкнено у системі."
 ],
 "SELinux system status is unknown.": [
  null,
  "Стан системи SELinux є невідомим."
 ],
 "Setting deviates from the configured state and will revert on the next boot.": [
  null,
  "Параметр не відповідає налаштованому стану, його буде скинуто під час наступного завантаження."
 ],
 "Solution applied successfully": [
  null,
  "Рішення успішно застосовано"
 ],
 "Solution failed": [
  null,
  "Помилка рішення"
 ],
 "Solutions": [
  null,
  "Рішення"
 ],
 "The configured state is unknown, it might change on the next boot.": [
  null,
  "Налаштований стан є невідомим, його може бути змінено під час наступного завантаження."
 ],
 "Unable to apply this solution automatically": [
  null,
  "Не вдалося застосувати це рішення у автоматичному режимі"
 ],
 "Unable to get alert details.": [
  null,
  "Не вдалося отримати параметри нагадувань."
 ],
 "Unable to get alert: $0": [
  null,
  "Не вдалося отримати нагадування: $0"
 ],
 "Unable to run fix: %0": [
  null,
  "Не вдалося виконати fix: %0"
 ],
 "Unable to start setroubleshootd": [
  null,
  "Не вдалося запустити setroubleshootd"
 ],
 "Waiting for details...": [
  null,
  "Очікуємо на подробиці…"
 ],
 "solution details": [
  null,
  "параметри рішення"
 ]
}));
