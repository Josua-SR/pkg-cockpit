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
nplurals=2; plural=(n != 1);
return plural;
},
  "language": "fi",
  "x-generator": "Zanata 4.6.2"
 },
 "$0 disk is missing": [
  "$0 disks are missing",
  "$0 levyä ei löydy",
  "$0 levyjä ei löydy"
 ],
 "Cancel": [
  null,
  "Peru"
 ],
 "Control": [
  null,
  "Hallinta"
 ],
 "Delete '{{ name }}'": [
  null,
  "Poista '{{ name }}'"
 ],
 "Empty": [
  null,
  "Tyhjä"
 ],
 "Error": [
  null,
  "Virhe"
 ],
 "Memory": [
  null,
  "Muisti"
 ],
 "Network": [
  null,
  "Verkko"
 ],
 "No matching files found": [
  null,
  "Vastaavia tiedostoja ei löytynyt."
 ],
 "Not Ready": [
  null,
  "Ei valmiina"
 ],
 "Off": [
  null,
  "Pois"
 ],
 "Ok": [
  null,
  "OK"
 ],
 "On": [
  null,
  "Päällä"
 ],
 "Path to file": [
  null,
  ""
 ],
 "Ready": [
  null,
  "Valmis"
 ],
 "Too many files found": [
  null,
  "Löytyi liian monta tiedostoa"
 ],
 "Unavailable": [
  null,
  "Ei käytettävissä"
 ],
 "User": [
  null,
  "Käyttäjä"
 ],
 "undefined": [
  null,
  "määrittämätön"
 ],
 "disk-non-rotational\u0004$0 disk is missing": [
  "$0 disks are missing",
  "$0 levyä ei löydy",
  "$0 levyjä ei löydy"
 ],
 "key\u0004Control": [
  null,
  "Hallinta"
 ],
 "verb\u0004Empty": [
  null,
  "Tyhjä"
 ],
 "verb\u0004Ready": [
  null,
  "Valmis"
 ]
}));
