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
 "$0 key ID": [
  null,
  "Identyfikator klucza $0"
 ],
 "$0 package": [
  null,
  "$0 pakiet"
 ],
 "$0 packages": [
  null,
  "$0 pakiety"
 ],
 "- Add New Repository": [
  null,
  "— Dodaj nowe repozytorium"
 ],
 "Add": [
  null,
  "Dodaj"
 ],
 "Add Another Key": [
  null,
  "Dodaj inny klucz"
 ],
 "Additions": [
  null,
  "Dodane"
 ],
 "Apply": [
  null,
  "Zastosuj"
 ],
 "Available": [
  null,
  "Dostępne"
 ],
 "Begins with '-----BEGIN PGP PUBLIC KEY BLOCK-----'": [
  null,
  "Zaczyna się od „-----BEGIN PGP PUBLIC KEY BLOCK-----”"
 ],
 "Cancel": [
  null,
  "Anuluj"
 ],
 "Change Repository": [
  null,
  "Zmień repozytorium"
 ],
 "Check for Updates": [
  null,
  "Wyszukaj aktualizacje"
 ],
 "Checking for updates": [
  null,
  "Wyszukiwanie aktualizacji"
 ],
 "Connecting to OSTree": [
  null,
  "Łączenie z OSTree"
 ],
 "Couldn't load settings for '$0': $1": [
  null,
  "Nie można wczytać ustawień dla „$0”: $1"
 ],
 "Currently using:": [
  null,
  "Obecnie używane:"
 ],
 "Default": [
  null,
  "Domyślne"
 ],
 "Delete": [
  null,
  "Usuń"
 ],
 "Downgrades": [
  null,
  "Zainstalowane w starszej wersji"
 ],
 "Error loading remotes: $0": [
  null,
  "Błąd podczas wczytywania repozytoriów: $0"
 ],
 "Expired Signature": [
  null,
  "Podpis wygasł"
 ],
 "Failed": [
  null,
  "Niepowodzenie"
 ],
 "Good Signature": [
  null,
  "Dobry podpis"
 ],
 "Invalid Signature": [
  null,
  "Nieprawidłowy podpis"
 ],
 "Name": [
  null,
  "Nazwa"
 ],
 "No Deployments": [
  null,
  "Brak wdrożeń"
 ],
 "No OSTree deployments found": [
  null,
  "Nie odnaleziono wdrożeń OSTree"
 ],
 "No configuration data found": [
  null,
  "Nie odnaleziono danych konfiguracji"
 ],
 "No signature avaliable": [
  null,
  "Brak dostępnych podpisów"
 ],
 "Not authorized to update software on this system": [
  null,
  "Brak upoważnienia do aktualizowania oprogramowania w tym systemie"
 ],
 "OS $0 not found": [
  null,
  "Nie odnaleziono systemu operacyjnego $0"
 ],
 "OSTree is not available on this system": [
  null,
  "OSTree jest niedostępne w tym systemie"
 ],
 "Operating System": [
  null,
  "System operacyjny"
 ],
 "Operating System Updates": [
  null,
  "Aktualizacje systemu operacyjnego"
 ],
 "Origin": [
  null,
  "Pochodzenie"
 ],
 "Packages": [
  null,
  "Pakiety"
 ],
 "Please provide a valid URL": [
  null,
  "Proszę podać prawidłowy adres URL"
 ],
 "Please provide a valid name": [
  null,
  "Proszę podać prawidłową nazwę"
 ],
 "Rebase and Reboot": [
  null,
  "Zaktualizuj i uruchom ponownie"
 ],
 "Receiving delta parts": [
  null,
  "Pobieranie części delta"
 ],
 "Receiving metadata objects": [
  null,
  "Pobieranie obiektów metadanych"
 ],
 "Receiving objects: $0%": [
  null,
  "Pobieranie obiektów: $0%"
 ],
 "Reconnect": [
  null,
  "Połącz ponownie"
 ],
 "Released": [
  null,
  "Wydano"
 ],
 "Removals": [
  null,
  "Usunięte"
 ],
 "Roll Back and Reboot": [
  null,
  "Przywróć i uruchom ponownie"
 ],
 "Running": [
  null,
  "Działające"
 ],
 "Scanning metadata": [
  null,
  "Skanowanie metadanych"
 ],
 "Signature": [
  null,
  "Podpis"
 ],
 "Signed by": [
  null,
  "Podpisane przez"
 ],
 "Software Updates": [
  null,
  "Aktualizacje oprogramowania"
 ],
 "Status": [
  null,
  "Stan"
 ],
 "This deployment contains the same packages as your currently booted system": [
  null,
  "To wdrożenie zawiera takie same pakiety, co obecnie uruchomiony system"
 ],
 "Tree": [
  null,
  "Drzewo"
 ],
 "URL": [
  null,
  "Adres URL"
 ],
 "Unable to communicate with OSTree": [
  null,
  "Nie można komunikować się OSTree"
 ],
 "Update and Reboot": [
  null,
  "Zaktualizuj i uruchom ponownie"
 ],
 "Updates": [
  null,
  "Zaktualizowane"
 ],
 "Updating": [
  null,
  "Aktualizowanie"
 ],
 "Use trusted GPG key": [
  null,
  "Użycie zaufanego klucza GPG"
 ],
 "Version": [
  null,
  "Wersja"
 ],
 "When": [
  null,
  "Kiedy"
 ],
 "Writing objects": [
  null,
  "Zapisywanie obiektów"
 ],
 "at": [
  null,
  "w"
 ]
}));
