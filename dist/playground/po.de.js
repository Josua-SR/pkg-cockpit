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
  "language": "de",
  "x-generator": "Zanata 3.9.6"
 },
 "$0 day": [
  "$0 days",
  "",
  ""
 ],
 "$0 disk is missing": [
  "$0 disks are missing",
  "$0 Festplatte fehlt",
  "$0 Festplatten fehlen"
 ],
 "$0 hour": [
  "$0 hours",
  "",
  ""
 ],
 "$0 minute": [
  "$0 minutes",
  "",
  ""
 ],
 "$0 month": [
  "$0 months",
  "",
  ""
 ],
 "$0 week": [
  "$0 weeks",
  "",
  ""
 ],
 "$0 year": [
  "$0 years",
  "",
  ""
 ],
 "Cancel": [
  null,
  "Abbrechen"
 ],
 "Control": [
  null,
  "Steuerung"
 ],
 "Delete '{{ name }}'": [
  null,
  "'{{ name }}' löschen"
 ],
 "Empty": [
  null,
  "Leer"
 ],
 "Error": [
  null,
  "Fehler"
 ],
 "Memory": [
  null,
  "Speicher"
 ],
 "Network": [
  null,
  "Netzwerk"
 ],
 "Not Ready": [
  null,
  "Nicht bereit"
 ],
 "Off": [
  null,
  "Aus"
 ],
 "Ok": [
  null,
  ""
 ],
 "On": [
  null,
  "Ein"
 ],
 "Ready": [
  null,
  "Bereit"
 ],
 "Unavailable": [
  null,
  "Nicht verfügbar"
 ],
 "User": [
  null,
  "Benutzer"
 ],
 "undefined": [
  null,
  ""
 ],
 "disk-non-rotational\u0004$0 disk is missing": [
  "$0 disks are missing",
  "$0 Datenträger fehlt",
  "$0 Datenträger fehlen"
 ],
 "key\u0004Control": [
  null,
  "Strg"
 ],
 "verb\u0004Empty": [
  null,
  "Leeren"
 ],
 "verb\u0004Ready": [
  null,
  "Bereiten"
 ]
}));
