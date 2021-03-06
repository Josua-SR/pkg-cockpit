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
 "$0 Package": [
  "$0 Packages",
  "",
  "",
  ""
 ],
 "$0 is not available from any repository.": [
  null,
  "$0 недоступен из какого-либо репозитория."
 ],
 "$0 update": [
  "$0 updates",
  "$0 Обновить",
  "$0 обновления",
  "$0 обновления"
 ],
 "$0 will be installed.": [
  null,
  "$0 будет установлен."
 ],
 "$1 security fix": [
  "$1 security fixes",
  "$1 исправление безопасности",
  "$1 исправления безопасности",
  "$1 исправления безопасности"
 ],
 ", including $1 security fix": [
  ", including $1 security fixes",
  ", в том числе $1 исправление безопасности",
  ", в том числе $1 исправления безопасности",
  ", в том числе $1 исправлений безопасности"
 ],
 "Additional packages:": [
  null,
  "Дополнительные пакеты:"
 ],
 "Apply all updates": [
  null,
  "Применить все обновления"
 ],
 "Apply security updates": [
  null,
  "Применить обновления безопасности"
 ],
 "Applying updates": [
  null,
  "Применение обновлений"
 ],
 "Applying updates failed": [
  null,
  "Не удалось применить обновления"
 ],
 "Automatic Updates": [
  null,
  "Автоматическое обновление"
 ],
 "Available Updates": [
  null,
  "Доступные обновления"
 ],
 "Bugs:": [
  null,
  "Ошибки:"
 ],
 "Cancel": [
  null,
  "Отмена"
 ],
 "Check for Updates": [
  null,
  "Проверить наличие обновлений"
 ],
 "Checking installed software": [
  null,
  "Проверка установленного программного обеспечения"
 ],
 "Details": [
  null,
  "Подробности"
 ],
 "Downloaded": [
  null,
  "Загружено"
 ],
 "Downloading": [
  null,
  "Загрузка"
 ],
 "Downloading $0": [
  null,
  "Загрузка $0"
 ],
 "Errata:": [
  null,
  "Опечатки:"
 ],
 "Fridays": [
  null,
  "По пятницам"
 ],
 "Ignore": [
  null,
  "Игнорировать"
 ],
 "Initializing...": [
  null,
  "Инициализация ..."
 ],
 "Install": [
  null,
  "Установка"
 ],
 "Install All Updates": [
  null,
  "Установить все обновления"
 ],
 "Install Security Updates": [
  null,
  "Установка обновлений безопасности"
 ],
 "Install Software": [
  null,
  "Установить программное обеспечение"
 ],
 "Installed": [
  null,
  "Установлен"
 ],
 "Installing": [
  null,
  "Установка"
 ],
 "Installing $0": [
  null,
  "Установка $0"
 ],
 "Last checked: $0 ago": [
  null,
  "Последний раз проверено: $0 тому назад"
 ],
 "Loading available updates failed": [
  null,
  "Загрузка доступных обновлений не удалась"
 ],
 "Loading available updates, please wait...": [
  null,
  "Загружайте доступные обновления, подождите ..."
 ],
 "Mondays": [
  null,
  "По понедельникам"
 ],
 "Name": [
  null,
  "Имя"
 ],
 "No updates pending": [
  null,
  "Нет ожидающих обновления"
 ],
 "Ok": [
  null,
  "OK"
 ],
 "Package information": [
  null,
  "Информация о пакете"
 ],
 "PackageKit crashed": [
  null,
  "Пакет PackageKit разбился"
 ],
 "PackageKit is not installed": [
  null,
  "PackageKit не установлен"
 ],
 "PackageKit reported error code $0": [
  null,
  "PackageKit сообщил код ошибки $0"
 ],
 "Refreshing package information": [
  null,
  "Обновление информации о пакете"
 ],
 "Register…": [
  null,
  "Регистр…"
 ],
 "Removals:": [
  null,
  "Удаления:"
 ],
 "Removing $0": [
  null,
  "Удаление $0"
 ],
 "Restart Now": [
  null,
  "Перезагрузить сейчас"
 ],
 "Restart Recommended": [
  null,
  "Рекомендуется перезапустить"
 ],
 "Restarting": [
  null,
  "Перезапуск"
 ],
 "Saturdays": [
  null,
  "По субботам"
 ],
 "Set up": [
  null,
  "Настроить"
 ],
 "Setting up": [
  null,
  "Настройка"
 ],
 "Severity": [
  null,
  "Приоритет"
 ],
 "Severity:": [
  null,
  "Строгость:"
 ],
 "Software Updates": [
  null,
  "Программные обновления"
 ],
 "Some other program is currently using the package manager, please wait...": [
  null,
  "Некоторые другие программы в настоящее время используют диспетчер пакетов, пожалуйста, подождите ..."
 ],
 "Sundays": [
  null,
  "По воскресеньям"
 ],
 "System is up to date": [
  null,
  "Система не нуждается в обновлении"
 ],
 "This system is not registered": [
  null,
  "Эта система не зарегистрирована"
 ],
 "This web console will be updated.": [
  null,
  "Эта веб-консоль будет обновлена."
 ],
 "Thursdays": [
  null,
  "По четвергам"
 ],
 "To get software updates, this system needs to be registered with Red Hat, either using the Red Hat Customer Portal or a local subscription server.": [
  null,
  "Чтобы получать обновления программного обеспечения, эту систему необходимо зарегистрировать в Red Hat, используя либо клиентский портал Red Hat, либо локальный сервер подписки."
 ],
 "Total size: $0": [
  null,
  "Общий размер: $0"
 ],
 "Tuesdays": [
  null,
  "По вторникам"
 ],
 "Update History": [
  null,
  "История обновлений"
 ],
 "Update Log": [
  null,
  "Журнал обновлений"
 ],
 "Updated": [
  null,
  "Обновлено"
 ],
 "Updated packages may require a restart to take effect.": [
  null,
  "Обновленные пакеты могут потребовать перезагрузки."
 ],
 "Updating": [
  null,
  "обновление"
 ],
 "Verified": [
  null,
  "проверенный"
 ],
 "Verifying": [
  null,
  "Проверка"
 ],
 "Version": [
  null,
  "Версия"
 ],
 "Waiting for other software management operations to finish": [
  null,
  "Ожидание выполнения других операций управления программным обеспечением"
 ],
 "Wednesdays": [
  null,
  "По средам"
 ],
 "Your browser will disconnect, but this does not affect the update process. You can reconnect in a few moments to continue watching the progress.": [
  null,
  "Ваш браузер отключится, но это не повлияет на процесс обновления. Вы можете повторно подключиться через несколько секунд, чтобы продолжить просмотр прогресса."
 ],
 "Your server will close the connection soon. You can reconnect after it has restarted.": [
  null,
  "Скоро ваш сервер закроет соединение. После перезапуска вы можете снова подключиться."
 ],
 "and restart the machine automatically.": [
  null,
  "и перезагрузите машину автоматически."
 ],
 "at": [
  null,
  "в"
 ],
 "bug fix": [
  null,
  "Исправлена ​​ошибка"
 ],
 "enhancement": [
  null,
  "улучшение"
 ],
 "every day": [
  null,
  "каждый день"
 ],
 "security": [
  null,
  "безопасность"
 ],
 "undefined": [
  null,
  "не определено"
 ]
}));
