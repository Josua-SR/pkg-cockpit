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
 "$0 Package": [
  "$0 Packages",
  "$0 pakiet",
  "$0 pakiety",
  "$0 pakietów"
 ],
 "$0 is not available from any repository.": [
  null,
  "$0 nie jest dostępne w żadnym repozytorium."
 ],
 "$0 update": [
  "$0 updates",
  "$0 aktualizacja",
  "$0 aktualizacje",
  "$0 aktualizacji"
 ],
 "$0 will be installed.": [
  null,
  "$0 zostanie zainstalowane."
 ],
 "$1 security fix": [
  "$1 security fixes",
  "$1 poprawka zabezpieczeń",
  "$1 poprawki zabezpieczeń",
  "$1 poprawek zabezpieczeń"
 ],
 ", including $1 security fix": [
  ", including $1 security fixes",
  ", w tym $1 poprawka zabezpieczeń",
  ", w tym $1 poprawki zabezpieczeń",
  ", w tym $1 poprawek zabezpieczeń"
 ],
 "Additional packages:": [
  null,
  "Dodatkowe pakiety:"
 ],
 "Apply all updates": [
  null,
  "Zastosuj wszystkie aktualizacje"
 ],
 "Apply security updates": [
  null,
  "Zastosuj aktualizacje zabezpieczeń"
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
  "Automatyczne aktualizacje"
 ],
 "Available Updates": [
  null,
  "Dostępne aktualizacje"
 ],
 "Bugs:": [
  null,
  "Błędy:"
 ],
 "Cancel": [
  null,
  "Anuluj"
 ],
 "Check for Updates": [
  null,
  "Wyszukaj aktualizacje"
 ],
 "Checking installed software": [
  null,
  "Sprawdzanie zainstalowanego oprogramowania"
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
 "Downloading $0": [
  null,
  "Pobieranie $0"
 ],
 "Errata:": [
  null,
  "Poprawka:"
 ],
 "Fridays": [
  null,
  "piątki"
 ],
 "Ignore": [
  null,
  "Ignorowanie"
 ],
 "Initializing...": [
  null,
  "Inicjowanie…"
 ],
 "Install": [
  null,
  "Zainstaluj"
 ],
 "Install All Updates": [
  null,
  "Zainstaluj wszystkie aktualizacje"
 ],
 "Install Security Updates": [
  null,
  "Zainstaluj aktualizacje zabezpieczeń"
 ],
 "Install Software": [
  null,
  "Zainstaluj oprogramowanie"
 ],
 "Installed": [
  null,
  "Zainstalowano"
 ],
 "Installing": [
  null,
  "Instalowanie"
 ],
 "Installing $0": [
  null,
  "Instalowanie $0"
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
 "Mondays": [
  null,
  "poniedziałki"
 ],
 "Name": [
  null,
  "Nazwa"
 ],
 "No updates pending": [
  null,
  "Brak oczekujących aktualizacji"
 ],
 "Ok": [
  null,
  "OK"
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
 "Removals:": [
  null,
  "Usuwane:"
 ],
 "Removing $0": [
  null,
  "Usuwanie $0"
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
 "Saturdays": [
  null,
  "soboty"
 ],
 "Set up": [
  null,
  "Ustaw"
 ],
 "Setting up": [
  null,
  "Ustawianie"
 ],
 "Severity": [
  null,
  "Ważność"
 ],
 "Severity:": [
  null,
  "Ważność:"
 ],
 "Software Updates": [
  null,
  "Aktualizacje oprogramowania"
 ],
 "Some other program is currently using the package manager, please wait...": [
  null,
  "Inny program obecnie używa menedżera pakietów, proszę czekać…"
 ],
 "Sundays": [
  null,
  "niedziele"
 ],
 "System is up to date": [
  null,
  "System jest aktualny"
 ],
 "This system is not registered": [
  null,
  "Ten system nie jest zarejestrowany"
 ],
 "This web console will be updated.": [
  null,
  "Ta konsola internetowa zostanie zaktualizowana."
 ],
 "Thursdays": [
  null,
  "czwartki"
 ],
 "To get software updates, this system needs to be registered with Red Hat, either using the Red Hat Customer Portal or a local subscription server.": [
  null,
  "Aby otrzymywać aktualizacje oprogramowania, ten system musi zostać zarejestrowany w firmie Red Hat za pomocą serwisu Red Hat Customer Portal lub lokalnego serwera subskrypcji."
 ],
 "Total size: $0": [
  null,
  "Całkowity rozmiar: $0"
 ],
 "Tuesdays": [
  null,
  "wtorki"
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
 "Waiting for other software management operations to finish": [
  null,
  "Oczekiwanie na ukończenie pozostałych działań zarządzania oprogramowaniem"
 ],
 "Wednesdays": [
  null,
  "środy"
 ],
 "Your browser will disconnect, but this does not affect the update process. You can reconnect in a few moments to continue watching the progress.": [
  null,
  "Przeglądarka się rozłączy, ale nie wpłynie to na proces aktualizacji. Można połączyć się ponownie za kilka chwil, aby kontynuować obserwację procesu."
 ],
 "Your server will close the connection soon. You can reconnect after it has restarted.": [
  null,
  "Serwer niedługo zamknie połączenie. Można połączyć jeszcze raz po jego ponownym uruchomieniu."
 ],
 "and restart the machine automatically.": [
  null,
  "i automatycznie uruchom komputer ponownie."
 ],
 "at": [
  null,
  "w"
 ],
 "bug fix": [
  null,
  "poprawka błędu"
 ],
 "enhancement": [
  null,
  "ulepszenie"
 ],
 "every day": [
  null,
  "codziennie"
 ],
 "security": [
  null,
  "bezpieczeństwo"
 ],
 "undefined": [
  null,
  "nieokreślone"
 ]
}));
