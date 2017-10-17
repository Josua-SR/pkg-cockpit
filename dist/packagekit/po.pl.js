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
  "$0 więcej…"
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
 "Apply all updates": [
  null,
  ""
 ],
 "Apply security updates": [
  null,
  ""
 ],
 "Applying updates": [
  null,
  "Zastosowywanie aktualizacji"
 ],
 "Applying updates failed": [
  null,
  "Zastosowanie aktualizacji się nie powiodło"
 ],
 "Automatic Updates": [
  null,
  ""
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
 "Check for Updates": [
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
  "Pobrano"
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
 "Install All Updates": [
  null,
  "Zainstaluj wszystkie aktualizacje"
 ],
 "Install Security Updates": [
  null,
  "Zainstaluj aktualizacje zabezpieczeń"
 ],
 "Installed": [
  null,
  "Zainstalowano"
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
  "Więcej informacji…"
 ],
 "Name": [
  null,
  "Nazwa"
 ],
 "No updates pending": [
  null,
  "Brak oczekujących aktualizacji"
 ],
 "Off": [
  null,
  "Wyłączone"
 ],
 "On": [
  null,
  "Włączone"
 ],
 "Package information": [
  null,
  "Informacje o pakiecie"
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
 "Register…": [
  null,
  "Zarejestruj…"
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
  "Ustaw"
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
  "Poniższe pakiety zostały niedawno zaktualizowane:"
 ],
 "The following packages were updated $0:": [
  null,
  "Poniższe pakiety zostały zaktualizowane $0:"
 ],
 "This system is not registered": [
  null,
  "Ten system nie jest zarejestrowany"
 ],
 "To get software updates, this system needs to be registered with Red Hat, either using the Red Hat Customer Portal or a local subscription server.": [
  null,
  "Aby otrzymywać aktualizacje oprogramowania, ten system musi zostać zarejestrowany w firmie Red Hat za pomocą serwisu Red Hat Customer Portal lub lokalnego serwera subskrypcji."
 ],
 "Unregistered System": [
  null,
  "Niezarejestrowany system"
 ],
 "Update History": [
  null,
  "Historia aktualizacji"
 ],
 "Update Log": [
  null,
  "Dziennik aktualizacji"
 ],
 "Updated": [
  null,
  "Zaktualizowano"
 ],
 "Updated packages may require a restart to take effect.": [
  null,
  "Zaktualizowane pakiety mogą wymagać ponownego uruchomienia."
 ],
 "Updates are disabled.": [
  null,
  "Aktualizacje są wyłączone."
 ],
 "Updating": [
  null,
  "Aktualizowanie"
 ],
 "Verified": [
  null,
  "Sprawdzono poprawność"
 ],
 "Verifying": [
  null,
  "Sprawdzanie poprawności"
 ],
 "Version": [
  null,
  "Wersja"
 ],
 "View Registration Details": [
  null,
  "Wyświetl informacje o rejestracji"
 ],
 "When you get disconnected, the updates will continue in the background. You can reconnect and resume watching the update progress.": [
  null,
  "Po rozłączeniu aktualizacje będą kontynuowane w tle. Można połączyć ponownie i wznowić obserwowanie postępu aktualizacji."
 ],
 "You need to re-subscribe this system.": [
  null,
  "Należy ponownie subskrybować ten system."
 ],
 "Your server will close the connection soon. You can reconnect after it has restarted.": [
  null,
  "Serwer niedługo zamknie połączenie. Można połączyć jeszcze raz po jego ponownym uruchomieniu."
 ],
 "and restart the machine automatically.": [
  null,
  ""
 ],
 "at": [
  null,
  "w"
 ],
 "every day": [
  null,
  ""
 ],
 "on Fridays": [
  null,
  ""
 ],
 "on Mondays": [
  null,
  ""
 ],
 "on Saturdays": [
  null,
  ""
 ],
 "on Sundays": [
  null,
  ""
 ],
 "on Thursdays": [
  null,
  ""
 ],
 "on Tuesdays": [
  null,
  ""
 ],
 "on Wednesdays": [
  null,
  ""
 ],
 "undefined": [
  null,
  "nieokreślone"
 ]
}));
