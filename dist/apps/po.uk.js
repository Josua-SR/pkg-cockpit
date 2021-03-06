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
 "Applications": [
  null,
  "Програми"
 ],
 "Cancel": [
  null,
  "Скасувати"
 ],
 "Checking for new applications": [
  null,
  "Шукаємо нові програми"
 ],
 "Close": [
  null,
  "Закрити"
 ],
 "Error": [
  null,
  "Помилка"
 ],
 "Go to Application": [
  null,
  "Перейти до програми"
 ],
 "Install": [
  null,
  "Встановити"
 ],
 "Installing": [
  null,
  "Встановлення"
 ],
 "No applications installed or available": [
  null,
  "Немає встановлених або доступних програм"
 ],
 "No description provided.": [
  null,
  "Опису не надано."
 ],
 "No installation package found for this application.": [
  null,
  "Для цієї програми не знайдено пакунка для встановлення."
 ],
 "Ok": [
  null,
  "Гаразд"
 ],
 "PackageKit crashed": [
  null,
  "Аварійне завершення роботи PackageKit"
 ],
 "Remove": [
  null,
  "Вилучити"
 ],
 "Removing": [
  null,
  "Вилучаємо"
 ],
 "Unknown Application": [
  null,
  "Невідома програма"
 ],
 "Waiting for other programs to finish using the package manager...": [
  null,
  "Очікуємо на завершення роботи з програмою для керування пакунками інших програм…"
 ]
}));
