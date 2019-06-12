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
 "$0 disk is missing": [
  "$0 disks are missing",
  "$0 диск отсутствует",
  "$0 диска отсутствует",
  "$0 дисков отсутствует"
 ],
 "Cancel": [
  null,
  "Отмена"
 ],
 "Control": [
  null,
  "контроль"
 ],
 "Delete '{{ name }}'": [
  null,
  "Удалять '{{ name }}'"
 ],
 "Empty": [
  null,
  "Пусто"
 ],
 "Error": [
  null,
  "Ошибка"
 ],
 "Memory": [
  null,
  "Память"
 ],
 "Network": [
  null,
  "Сеть"
 ],
 "No matching files found": [
  null,
  "Не найдено совпадающих файлов"
 ],
 "Not Ready": [
  null,
  "Не готов"
 ],
 "Off": [
  null,
  "Выкл"
 ],
 "Ok": [
  null,
  "OK"
 ],
 "On": [
  null,
  "Вкл"
 ],
 "Path to file": [
  null,
  "Путь к файлу"
 ],
 "Ready": [
  null,
  "Готов"
 ],
 "Too many files found": [
  null,
  "Слишком много файлов найдено"
 ],
 "Unavailable": [
  null,
  "Недоступно"
 ],
 "User": [
  null,
  "Пользователь"
 ],
 "undefined": [
  null,
  "не определено"
 ],
 "disk-non-rotational\u0004$0 disk is missing": [
  "$0 disks are missing",
  "$0 диск отсутствует",
  "$0 диска отсутствует",
  "$0 дисков отсутствует"
 ],
 "key\u0004Control": [
  null,
  "контроль"
 ],
 "verb\u0004Empty": [
  null,
  "Пусто"
 ],
 "verb\u0004Ready": [
  null,
  "Готов"
 ]
}));
