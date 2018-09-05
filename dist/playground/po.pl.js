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
  "x-generator": "Zanata 4.6.0"
 },
 "$0 day": [
  "$0 days",
  "$0 dzień",
  "$0 dni",
  "$0 dni"
 ],
 "$0 disk is missing": [
  "$0 disks are missing",
  "Brak $0 dysku",
  "Brak $0 dysków",
  "Brak $0 dysków"
 ],
 "$0 hour": [
  "$0 hours",
  "$0 godzina",
  "$0 godziny",
  "$0 godzin"
 ],
 "$0 minute": [
  "$0 minutes",
  "$0 minuta",
  "$0 minuty",
  "$0 minut"
 ],
 "$0 month": [
  "$0 months",
  "$0 miesiąc",
  "$0 miesiące",
  "$0 miesięcy"
 ],
 "$0 week": [
  "$0 weeks",
  "$0 tydzień",
  "$0 tygodnie",
  "$0 tygodni"
 ],
 "$0 year": [
  "$0 years",
  "$0 rok",
  "$0 lata",
  "$0 lat"
 ],
 "Cancel": [
  null,
  "Anuluj"
 ],
 "Control": [
  null,
  "Sterowanie"
 ],
 "Delete '{{ name }}'": [
  null,
  "Usuń „{{ name }}”"
 ],
 "Empty": [
  null,
  "Puste"
 ],
 "Error": [
  null,
  "Błąd"
 ],
 "Memory": [
  null,
  "Pamięć"
 ],
 "Network": [
  null,
  "Sieć"
 ],
 "No matching files found": [
  null,
  "Nie odnaleziono pasujących plików"
 ],
 "Not Ready": [
  null,
  "Niegotowe"
 ],
 "Off": [
  null,
  "Wyłączone"
 ],
 "Ok": [
  null,
  "OK"
 ],
 "On": [
  null,
  "Włączone"
 ],
 "Path to file": [
  null,
  "Ścieżka do pliku"
 ],
 "Ready": [
  null,
  "Gotowe"
 ],
 "Too many files found": [
  null,
  "Odnaleziono za dużo plików"
 ],
 "Unavailable": [
  null,
  "Niedostępne"
 ],
 "User": [
  null,
  "Użytkownik"
 ],
 "undefined": [
  null,
  "nieokreślone"
 ],
 "disk-non-rotational\u0004$0 disk is missing": [
  "$0 disks are missing",
  "Brak $0 dysku",
  "Brak $0 dysków",
  "Brak $0 dysków"
 ],
 "key\u0004Control": [
  null,
  "Sterowanie"
 ],
 "verb\u0004Empty": [
  null,
  "Puste"
 ],
 "verb\u0004Ready": [
  null,
  "Gotowe"
 ]
}));
