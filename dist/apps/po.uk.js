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
  "x-generator": "Zanata 4.4.5"
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
