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
  "x-generator": "Zanata 4.6.2"
 },
 "Cancel": [
  null,
  "Anuluj"
 ],
 "Close": [
  null,
  "Zamknij"
 ],
 "Create Report": [
  null,
  "Utwórz raport"
 ],
 "Create diagnostic report": [
  null,
  "Utwórz raport diagnostyczny"
 ],
 "Diagnostic reports": [
  null,
  "Raporty diagnostyczne"
 ],
 "Done!": [
  null,
  "Gotowe."
 ],
 "Download report": [
  null,
  "Pobierz raport"
 ],
 "Generating report": [
  null,
  "Tworzenie raportu"
 ],
 "No archive has been created.": [
  null,
  "Nie utworzono archiwum."
 ],
 "The collected information will be stored locally on the system.": [
  null,
  "Zebrane informacje będą przechowywane lokalnie w systemie."
 ],
 "The generated archive contains data considered sensitive and its content should be reviewed by the originating organization before being passed to any third party.": [
  null,
  "Utworzone archiwum zawiera dane uważane za prywatne, więc jego zawartość powinna zostać przejrzana przez pierwotną organizację, zanim zostanie ono przekazane jakiejkolwiek stronie trzeciej."
 ],
 "This tool will collect system configuration and diagnostic information from this system for use with diagnosing problems with the system.": [
  null,
  "To narzędzie zbierze konfigurację systemu i informacje diagnostyczne z tego systemu do użycia w diagnozowaniu problemów z systemem."
 ]
}));
