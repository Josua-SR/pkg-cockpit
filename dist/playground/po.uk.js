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
  "x-generator": "Zanata 4.6.2"
 },
 "$0 day": [
  "$0 days",
  "$0 день",
  "$0 дні",
  "$0 днів"
 ],
 "$0 disk is missing": [
  "$0 disks are missing",
  "Не вистачає $0 диска",
  "Не вистачає $0 дисків",
  "Не вистачає $0 дисків"
 ],
 "$0 hour": [
  "$0 hours",
  "$0 година",
  "$0 години",
  "$0 годин"
 ],
 "$0 minute": [
  "$0 minutes",
  "$0 хвилина",
  "$0 хвилини",
  "$0 хвилин"
 ],
 "$0 month": [
  "$0 months",
  "$0 місяць",
  "$0 місяці",
  "$0 місяців"
 ],
 "$0 week": [
  "$0 weeks",
  "$0 тиждень",
  "$0 тижні",
  "$0 тижнів"
 ],
 "$0 year": [
  "$0 years",
  "$0 рік",
  "$0 роки",
  "$0 років"
 ],
 "Cancel": [
  null,
  "Скасувати"
 ],
 "Control": [
  null,
  "Керування"
 ],
 "Delete '{{ name }}'": [
  null,
  "Вилучити «{{ name }}»"
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
