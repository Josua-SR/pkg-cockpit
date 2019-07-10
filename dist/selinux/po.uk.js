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
 "$0 occurrence": [
  "$1 occurrences",
  "$0 відповідник",
  "$0 відповідники",
  "$0 відповідників"
 ],
 "Ansible Playbook": [
  null,
  ""
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
 "Automation Script": [
  null,
  ""
 ],
 "Close": [
  null,
  "Закрити"
 ],
 "Connecting to SETroubleshoot daemon...": [
  null,
  "Встановлюємо з’єднання із фоновою службою SETroubleshoot…"
 ],
 "Copy to clipboard": [
  null,
  ""
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
  "Встановіть setroubleshoot-server, щоб мати змогу діагностувати причини подій SELinux."
 ],
 "Loading system modifications...": [
  null,
  ""
 ],
 "No SELinux alerts.": [
  null,
  "Немає сповіщень SELinux."
 ],
 "No System Modifications": [
  null,
  ""
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
  "У системі вимкнено SELinux"
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
 "Shell Script": [
  null,
  ""
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
 "System Modifications": [
  null,
  ""
 ],
 "The configured state is unknown, it might change on the next boot.": [
  null,
  "Налаштований стан є невідомим, його може бути змінено під час наступного завантаження."
 ],
 "The logged in user is not permitted to view system modifications": [
  null,
  ""
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
 "View automation script": [
  null,
  ""
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
