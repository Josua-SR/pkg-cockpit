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
  "x-generator": "Zanata 4.4.5"
 },
 "Applications": [
  null,
  "Aplikacje"
 ],
 "Cancel": [
  null,
  "Anuluj"
 ],
 "Checking for new applications": [
  null,
  "Wyszukiwanie nowych aplikacji"
 ],
 "Close": [
  null,
  "Zamknij"
 ],
 "Error": [
  null,
  "Błąd"
 ],
 "Go to Application": [
  null,
  "Przejdź do aplikacji"
 ],
 "Install": [
  null,
  "Zainstaluj"
 ],
 "Installing": [
  null,
  "Instalowanie"
 ],
 "No applications installed or available": [
  null,
  "Brak zainstalowanych lub dostępnych aplikacji"
 ],
 "No description provided.": [
  null,
  "Nie podano opisu."
 ],
 "No installation package found for this application.": [
  null,
  "Nie odnaleziono pakietu instalacji dla tego programu."
 ],
 "Ok": [
  null,
  "OK"
 ],
 "PackageKit crashed": [
  null,
  "Usługa PackageKit uległa awarii"
 ],
 "Remove": [
  null,
  "Usuń"
 ],
 "Removing": [
  null,
  "Usuwanie"
 ],
 "Unknown Application": [
  null,
  "Nieznana aplikacja"
 ],
 "Waiting for other programs to finish using the package manager...": [
  null,
  "Oczekiwanie, aż inne programy skończą korzystać z menedżera pakietów…"
 ]
}));
