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
 "Cancel": [
  null,
  "Скасувати"
 ],
 "Change Performance Profile": [
  null,
  "Зміна профілю швидкодії"
 ],
 "Change Profile": [
  null,
  "Змінити профіль"
 ],
 "Communication with tuned has failed": [
  null,
  "Не вдалося обмінятися даними з tuned"
 ],
 "Disable tuned": [
  null,
  "Вимкнути tuned"
 ],
 "Failed to disable tuned": [
  null,
  "Не вдалося вимкнути tuned"
 ],
 "Failed to disable tuned profile": [
  null,
  "Невдалося вимкнути профіль tuned"
 ],
 "Failed to enable tuned": [
  null,
  "Не вдалося увімкнути tuned"
 ],
 "Failed to switch profile": [
  null,
  "Не вдалося перемкнути профіль"
 ],
 "None": [
  null,
  "Немає"
 ],
 "Ok": [
  null,
  "Гаразд"
 ],
 "The user <b>$0</b> is not permitted to change profiles": [
  null,
  "Користувачу <b>$0</b> заборонено змінювати профілі"
 ],
 "This system is using a custom profile": [
  null,
  "Ця система використовує нетиповий профіль"
 ],
 "This system is using the recommended profile": [
  null,
  "Ця система використовує рекомендований профіль"
 ],
 "Tuned has failed to start": [
  null,
  "Tuned не вдалося запустити"
 ],
 "Tuned is not available": [
  null,
  "Tuned недоступна"
 ],
 "Tuned is not running": [
  null,
  "Tuned не запущено"
 ],
 "Tuned is off": [
  null,
  "Tuned вимкнено"
 ],
 "none": [
  null,
  "немає"
 ],
 "recommended": [
  null,
  "найліпший"
 ]
}));
