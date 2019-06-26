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
 "Applications": [
  null,
  "Приложения"
 ],
 "Cancel": [
  null,
  "Отмена"
 ],
 "Checking for new applications": [
  null,
  "Проверка наличия новых приложений"
 ],
 "Close": [
  null,
  "Закрыть"
 ],
 "Error": [
  null,
  "Ошибка"
 ],
 "Go to Application": [
  null,
  "Перейти к приложению"
 ],
 "Install": [
  null,
  "Установка"
 ],
 "Installing": [
  null,
  "Установка"
 ],
 "No applications installed or available": [
  null,
  "Нет приложений, установленных или доступных"
 ],
 "No description provided.": [
  null,
  "Нет описания."
 ],
 "No installation package found for this application.": [
  null,
  "Пакет установки для этого приложения не установлен."
 ],
 "Ok": [
  null,
  "OK"
 ],
 "PackageKit crashed": [
  null,
  "Пакет PackageKit разбился"
 ],
 "Remove": [
  null,
  "Удалить зону"
 ],
 "Removing": [
  null,
  "Удаление"
 ],
 "Unknown Application": [
  null,
  "Неизвестное приложение"
 ],
 "Waiting for other programs to finish using the package manager...": [
  null,
  "Ожидание завершения других программ с помощью диспетчера пакетов ..."
 ]
}));
