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
nplurals=3; plural=n==1 ? 0 : n%10>=2 && n%10<=4 && (n%100<10 || n%100>=20) ? 1 : 2;
return plural;
},
  "language": "pl",
  "x-generator": "Zanata 3.9.6"
 },
 "Cancel": [
  null,
  "Anuluj"
 ],
 "Change Performance Profile": [
  null,
  "Zmień profil wydajności"
 ],
 "Change Profile": [
  null,
  "Zmień profil"
 ],
 "Communication with tuned has failed": [
  null,
  "Komunikacja z tuned się nie powiodła"
 ],
 "Disable tuned": [
  null,
  "Wyłącz tuned"
 ],
 "Failed to disable tuned": [
  null,
  "Wyłączenie tuned się nie powiodło"
 ],
 "Failed to disable tuned profile": [
  null,
  "Wyłączenie profilu tuned się nie powiodło"
 ],
 "Failed to enable tuned": [
  null,
  "Włączenie tuned się nie powiodło"
 ],
 "Failed to switch profile": [
  null,
  "Przełączenie profilu się nie powiodło"
 ],
 "None": [
  null,
  "Brak"
 ],
 "Ok": [
  null,
  "OK"
 ],
 "This system is using a custom profile": [
  null,
  "Ten system używa niestandardowego profilu"
 ],
 "This system is using the recommended profile": [
  null,
  "Ten system używa zalecanego profilu"
 ],
 "Tuned has failed to start": [
  null,
  "Uruchomienie tuned się nie powiodło"
 ],
 "Tuned is not available": [
  null,
  "tuned jest niedostępne"
 ],
 "Tuned is not running": [
  null,
  "tuned nie jest uruchomione"
 ],
 "Tuned is off": [
  null,
  "tuned jest wyłączone"
 ],
 "none": [
  null,
  "brak"
 ],
 "recommended": [
  null,
  "zalecane"
 ]
}));
