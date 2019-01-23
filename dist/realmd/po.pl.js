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
 "$0 Only users with local credentials will be able to log into this machine. This may also effect other services as DNS resolution settings and the list of trusted CAs may change.": [
  null,
  "$0 Tylko użytkownicy z lokalnymi danymi uwierzytelniania będą mogli zalogować się do tego komputera. Może to mieć wpływ także na inne usługi, ponieważ ustawienia rozwiązywania DNS i listy zaufanych CA mogą ulec zmianie."
 ],
 "$0 is not available from any repository.": [
  null,
  "$0 nie jest dostępne w żadnym repozytorium."
 ],
 "$0 will be installed.": [
  null,
  "$0 zostanie zainstalowane."
 ],
 "Additional packages:": [
  null,
  "Dodatkowe pakiety:"
 ],
 "Administrator Password": [
  null,
  "Hasło administratora"
 ],
 "Are you sure you want to leave the '$0' domain?": [
  null,
  "Na pewno opuścić domenę „$0”?"
 ],
 "Are you sure you want to leave this domain?": [
  null,
  "Na pewno opuścić tę domenę?"
 ],
 "Authentication": [
  null,
  "Uwierzytelnienie"
 ],
 "Automatic": [
  null,
  "Automatyczne"
 ],
 "Cancel": [
  null,
  "Anuluj"
 ],
 "Checking installed software": [
  null,
  "Sprawdzanie zainstalowanego oprogramowania"
 ],
 "Computer OU": [
  null,
  "OU komputera"
 ],
 "Domain $0 could not be contacted": [
  null,
  "Nie można skontaktować się z domeną $0"
 ],
 "Domain $0 is not supported": [
  null,
  "Domena $0 jest nieobsługiwana"
 ],
 "Domain Address": [
  null,
  "Adres domeny"
 ],
 "Domain Administrator Name": [
  null,
  "Nazwa administratora domeny"
 ],
 "Domain Administrator Password": [
  null,
  "Hasło administratora domeny"
 ],
 "Downloading $0": [
  null,
  "Pobieranie $0"
 ],
 "Host name should not be changed in a domain": [
  null,
  "Gospodarz nie może być pusty"
 ],
 "Install": [
  null,
  "Zainstaluj"
 ],
 "Install Software": [
  null,
  "Zainstaluj oprogramowanie"
 ],
 "Installing $0": [
  null,
  "Instalowanie $0"
 ],
 "Join": [
  null,
  "Dołącz"
 ],
 "Join Domain": [
  null,
  "Dołącz do domeny"
 ],
 "Join a Domain": [
  null,
  "Dołącz do domeny"
 ],
 "Joining this domain is not supported": [
  null,
  "Dołączenie do tej domeny jest nieobsługiwane"
 ],
 "Leave": [
  null,
  "Opuść"
 ],
 "Leave Domain": [
  null,
  "Opuść domenę"
 ],
 "More": [
  null,
  "Więcej"
 ],
 "Next": [
  null,
  "Dalej"
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
 "One Time Password": [
  null,
  "Hasło jednorazowe"
 ],
 "PackageKit crashed": [
  null,
  "Usługa PackageKit uległa awarii"
 ],
 "Removals:": [
  null,
  "Usuwane:"
 ],
 "Removing $0": [
  null,
  "Usuwanie $0"
 ],
 "The user <b>$0</b> is not permitted to modify realms": [
  null,
  "Użytkownik <b>$0</b> nie ma zezwolenia na modyfikowanie obszarów"
 ],
 "This may take a while": [
  null,
  "Może to chwilę zająć"
 ],
 "Total size: $0": [
  null,
  "Całkowity rozmiar: $0"
 ],
 "User Name": [
  null,
  "Nazwa użytkownika"
 ],
 "User Password": [
  null,
  "Hasło użytkownika"
 ],
 "Waiting for other software management operations to finish": [
  null,
  "Oczekiwanie na ukończenie pozostałych działań zarządzania oprogramowaniem"
 ],
 "e.g. \"$0\"": [
  null,
  "np. „$0”"
 ]
}));
