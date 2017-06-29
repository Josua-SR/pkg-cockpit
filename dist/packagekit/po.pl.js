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
 "$0 update": [
  "$0 updates",
  "$0 aktualizacja",
  "$0 aktualizacje",
  "$0 aktualizacji"
 ],
 ", including $1 security fix": [
  ", including $1 security fixes",
  ", w tym $1 poprawka zabezpieczeń",
  ", w tym $1 poprawki zabezpieczeń",
  ", w tym $1 poprawek zabezpieczeń"
 ],
 "Applying updates": [
  null,
  "Zastosowywanie aktualizacji"
 ],
 "Applying updates failed": [
  null,
  "Zastosowanie aktualizacji się nie powiodło"
 ],
 "Available Updates": [
  null,
  ""
 ],
 "Bugs": [
  null,
  "Błędy"
 ],
 "Cancel": [
  null,
  "Anuluj"
 ],
 "Check for updates": [
  null,
  "Wyszukaj aktualizacje"
 ],
 "Cockpit itself will be updated.": [
  null,
  "Cockpit zostanie zaktualizowany."
 ],
 "Details": [
  null,
  "Szczegóły"
 ],
 "Downloading": [
  null,
  "Pobieranie"
 ],
 "Initializing...": [
  null,
  "Inicjowanie…"
 ],
 "Install all updates": [
  null,
  "Zainstaluj wszystkie aktualizacje"
 ],
 "Install security updates": [
  null,
  "Zainstaluj aktualizacje zabezpieczeń"
 ],
 "Installing": [
  null,
  "Instalowanie"
 ],
 "Last checked: $0 ago": [
  null,
  "Ostatnio wyszukano: $0 temu"
 ],
 "Loading available updates failed": [
  null,
  "Wczytanie dostępnych aktualizacji się nie powiodło"
 ],
 "Loading available updates, please wait...": [
  null,
  "Wczytywanie dostępnych aktualizacji, proszę czekać…"
 ],
 "Name": [
  null,
  "Nazwa"
 ],
 "No updates pending": [
  null,
  "Brak oczekujących aktualizacji"
 ],
 "PackageKit crashed": [
  null,
  "Usługa PackageKit uległa awarii"
 ],
 "PackageKit is not installed": [
  null,
  "Usługa PackageKit nie jest zainstalowana"
 ],
 "PackageKit reported error code $0": [
  null,
  ""
 ],
 "Refreshing package information": [
  null,
  ""
 ],
 "Security Update": [
  null,
  "Aktualizacja zabezpieczeń"
 ],
 "Setting up": [
  null,
  ""
 ],
 "Software Updates": [
  null,
  "Aktualizacje oprogramowania"
 ],
 "Some other program is currently using the package manager, please wait...": [
  null,
  "Inny program obecnie używa menedżera pakietów, proszę czekać…"
 ],
 "System is up to date": [
  null,
  "System jest aktualny"
 ],
 "Updating": [
  null,
  "Aktualizowanie"
 ],
 "Verifying": [
  null,
  "Sprawdzanie poprawności"
 ],
 "Version": [
  null,
  "Wersja"
 ],
 "When you get disconnected, the updates will continue in the background. You can reconnect and resume watching the update progress.": [
  null,
  "Po rozłączeniu aktualizacje będą kontynuowane w tle. Można połączyć ponownie i wznowić obserwowanie postępu aktualizacji."
 ]
}));
