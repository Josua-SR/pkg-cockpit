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
 "$0 disk is missing": [
  "$0 disks are missing",
  "Не вистачає $0 диска",
  "Не вистачає $0 дисків",
  "Не вистачає $0 дисків"
 ],
 "Cancel": [
  null,
  "Скасувати"
 ],
 "Control": [
  null,
  "Керування"
 ],
 "Empty": [
  null,
  "Порожній"
 ],
 "Error": [
  null,
  "Помилка"
 ],
 "Memory": [
  null,
  "Пам'ять"
 ],
 "Network": [
  null,
  "Мережа"
 ],
 "No matching files found": [
  null,
  "Відповідних файлів не знайдено"
 ],
 "Not Ready": [
  null,
  "Не готовий"
 ],
 "Off": [
  null,
  "Вимкнено"
 ],
 "Ok": [
  null,
  "Гаразд"
 ],
 "On": [
  null,
  "Увімкнено"
 ],
 "Path to file": [
  null,
  "Шлях до файла"
 ],
 "Ready": [
  null,
  "Готовий"
 ],
 "Too many files found": [
  null,
  "Знайдено забагато файлів"
 ],
 "Unavailable": [
  null,
  "Недоступний"
 ],
 "User": [
  null,
  "Користувач"
 ],
 "undefined": [
  null,
  "не визначено"
 ],
 "disk-non-rotational\u0004$0 disk is missing": [
  "$0 disks are missing",
  "Не вистачає $0 диска",
  "Не вистачає $0 дисків",
  "Не вистачає $0 дисків"
 ],
 "key\u0004Control": [
  null,
  "Ctrl"
 ],
 "verb\u0004Empty": [
  null,
  "Спорожнити"
 ],
 "verb\u0004Ready": [
  null,
  "Готово"
 ]
}));
