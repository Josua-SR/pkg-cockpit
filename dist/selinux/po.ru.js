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
  "language": "ru",
  "x-generator": "Zanata 4.6.2"
 },
 "$0 occurrence": [
  "$1 occurrences",
  "$0 вхождение",
  "$1 вхождений",
  "$1 вхождений"
 ],
 "Apply this solution": [
  null,
  "Применить это решение"
 ],
 "Applying solution...": [
  null,
  "Применение решения..."
 ],
 "Audit log": [
  null,
  "Журнал аудита"
 ],
 "Connecting to SETroubleshoot daemon...": [
  null,
  "Подключение к демону SETroubleshoot..."
 ],
 "Enforce policy:": [
  null,
  "Применить политику:"
 ],
 "Error while deleting alert: $0": [
  null,
  "Ошибка при удалении оповещения: $0"
 ],
 "Error while setting SELinux mode: '$0'": [
  null,
  "Ошибка при установке режима SELinux: «$0»"
 ],
 "Failed to delete alert: $0": [
  null,
  "Не удалось удалить оповещение: $0"
 ],
 "Install setroubleshoot-server to troubleshoot SELinux events.": [
  null,
  "Установите setroubleshoot-server для устранения неполадок в SELinux."
 ],
 "No SELinux alerts.": [
  null,
  "Оповещения SELinux отсутствуют."
 ],
 "Not connected": [
  null,
  "Не подключен"
 ],
 "Occurred $0": [
  null,
  "Происходило $0"
 ],
 "Occurred between $0 and $1": [
  null,
  "Произошло между $0 а также $1"
 ],
 "SELinux Access Control Errors": [
  null,
  "Ошибки контроля доступа SELinux"
 ],
 "SELinux Policy": [
  null,
  "Политика SELinux"
 ],
 "SELinux Troubleshoot": [
  null,
  "SELinux Устранение неполадок"
 ],
 "SELinux is disabled on the system": [
  null,
  "SELinux отключён в системе"
 ],
 "SELinux is disabled on the system.": [
  null,
  "SELinux отключён в системе."
 ],
 "SELinux system status is unknown.": [
  null,
  "Состояние системы SELinux неизвестно."
 ],
 "Setting deviates from the configured state and will revert on the next boot.": [
  null,
  "Настройка отклоняется от настроенного состояния и будет возвращаться при следующей загрузке."
 ],
 "Solution applied successfully": [
  null,
  "Решение успешно применено"
 ],
 "Solution failed": [
  null,
  "Не удалось решить проблему"
 ],
 "Solutions": [
  null,
  "Решения"
 ],
 "The configured state is unknown, it might change on the next boot.": [
  null,
  "Конфигурированное состояние неизвестно, оно может измениться при следующей загрузке."
 ],
 "Unable to apply this solution automatically": [
  null,
  "Невозможно применить это решение автоматически"
 ],
 "Unable to get alert details.": [
  null,
  "Не удалось получить сведения об оповещении."
 ],
 "Unable to get alert: $0": [
  null,
  "Не удалось получить оповещение: $0"
 ],
 "Unable to run fix: %0": [
  null,
  "Не удалось запустить исправление: %0"
 ],
 "Unable to start setroubleshootd": [
  null,
  "Не удалось запустить setroubleshootd"
 ],
 "Waiting for details...": [
  null,
  "В ожидании подробностей ..."
 ],
 "solution details": [
  null,
  "детали решения"
 ]
}));
