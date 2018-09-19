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
nplurals=3; plural=(n==1) ? 0 : (n>=2 && n<=4) ? 1 : 2;
return plural;
},
  "language": "cs",
  "x-generator": "Zanata 4.6.2"
 },
 "$0 day": [
  "$0 days",
  "$0 den",
  "$0 dny",
  "$0 dnů"
 ],
 "$0 disk is missing": [
  "$0 disks are missing",
  "$0 disk chybí",
  "$0 disky chybí",
  "$0 disků chybí"
 ],
 "$0 hour": [
  "$0 hours",
  "$0 hodina",
  "$0 hodiny",
  "$0 hodin"
 ],
 "$0 minute": [
  "$0 minutes",
  "$0 minuta",
  "$0 minuty",
  "$0 minut"
 ],
 "$0 month": [
  "$0 months",
  "$0 měsíc",
  "$0 měsíce",
  "$0 měsíců"
 ],
 "$0 week": [
  "$0 weeks",
  "$0 týden",
  "$0 týdny",
  "$0 týdnů"
 ],
 "$0 year": [
  "$0 years",
  "$0 rok",
  "$0 roky",
  "$0 roků"
 ],
 "Cancel": [
  null,
  "Zrušit"
 ],
 "Control": [
  null,
  ""
 ],
 "Delete '{{ name }}'": [
  null,
  ""
 ],
 "Empty": [
  null,
  "Prázdný"
 ],
 "Error": [
  null,
  "Chyba"
 ],
 "Memory": [
  null,
  "Paměť"
 ],
 "Network": [
  null,
  "Síť"
 ],
 "No matching files found": [
  null,
  ""
 ],
 "Not Ready": [
  null,
  ""
 ],
 "Off": [
  null,
  ""
 ],
 "Ok": [
  null,
  "Ok"
 ],
 "On": [
  null,
  ""
 ],
 "Path to file": [
  null,
  ""
 ],
 "Ready": [
  null,
  ""
 ],
 "Too many files found": [
  null,
  ""
 ],
 "Unavailable": [
  null,
  "Nedostupné"
 ],
 "User": [
  null,
  "Uživatel"
 ],
 "undefined": [
  null,
  ""
 ],
 "disk-non-rotational\u0004$0 disk is missing": [
  "$0 disks are missing",
  "$0 disk chybí",
  "$0 disky chybí",
  "$0 disků chybí"
 ],
 "key\u0004Control": [
  null,
  ""
 ],
 "verb\u0004Empty": [
  null,
  "Prázdný"
 ],
 "verb\u0004Ready": [
  null,
  ""
 ]
}));
