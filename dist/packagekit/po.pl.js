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
 "$0 more…": [
  null,
  ""
 ],
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
  "Dostępne aktualizacje"
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
 "Downloaded": [
  null,
  ""
 ],
 "Downloading": [
  null,
  "Pobieranie"
 ],
 "Ignore": [
  null,
  "Ignorowanie"
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
 "Installed": [
  null,
  ""
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
 "More information…": [
  null,
  ""
 ],
 "Name": [
  null,
  "Nazwa"
 ],
 "No updates pending": [
  null,
  "Brak oczekujących aktualizacji"
 ],
 "Package information": [
  null,
  ""
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
  "Usługa PackageKit zgłosiła kod błędu $0"
 ],
 "Refreshing package information": [
  null,
  "Odświeżanie informacji o pakietach"
 ],
 "Restart Now": [
  null,
  "Uruchom ponownie teraz"
 ],
 "Restart Recommended": [
  null,
  "Ponowne uruchomienie jest zalecane"
 ],
 "Restarting": [
  null,
  "Ponowne uruchamianie"
 ],
 "Security Update": [
  null,
  "Aktualizacja zabezpieczeń"
 ],
 "Set up": [
  null,
  ""
 ],
 "Setting up": [
  null,
  "Ustawianie"
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
 "The following packages were recently updated:": [
  null,
  ""
 ],
 "The following packages were updated $0:": [
  null,
  ""
 ],
 "Update History": [
  null,
  ""
 ],
 "Update Log": [
  null,
  ""
 ],
 "Updated": [
  null,
  ""
 ],
 "Updated packages may require a restart to take effect.": [
  null,
  "Zaktualizowane pakiety mogą wymagać ponownego uruchomienia."
 ],
 "Updating": [
  null,
  "Aktualizowanie"
 ],
 "Verified": [
  null,
  ""
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
 ],
 "Your server will close the connection soon. You can reconnect after it has restarted.": [
  null,
  "Serwer niedługo zamknie połączenie. Można połączyć jeszcze raz po jego ponownym uruchomieniu."
 ]
}));
