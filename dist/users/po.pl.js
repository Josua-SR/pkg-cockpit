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
 "Access": [
  null,
  "Dostęp"
 ],
 "Account Expiration": [
  null,
  "Wygasanie konta"
 ],
 "Account not available or cannot be edited.": [
  null,
  "Konto jest niedostępne lub nie może być modyfikowane."
 ],
 "Accounts": [
  null,
  "Konta"
 ],
 "Add key": [
  null,
  "Dodaj klucz"
 ],
 "Add public key": [
  null,
  "Dodaj klucz publiczny"
 ],
 "Authorized Public SSH Keys": [
  null,
  "Upoważnione publiczne klucze SSH"
 ],
 "Back to Accounts": [
  null,
  "Wróć do kont"
 ],
 "Cancel": [
  null,
  "Anuluj"
 ],
 "Change": [
  null,
  "Zmień"
 ],
 "Close": [
  null,
  "Zamknij"
 ],
 "Confirm": [
  null,
  "Potwierdź"
 ],
 "Confirm New Password": [
  null,
  "Potwierdź nowe hasło"
 ],
 "Create": [
  null,
  "Utwórz"
 ],
 "Create New Account": [
  null,
  "Utwórz nowe konto"
 ],
 "Delete": [
  null,
  "Usuń"
 ],
 "Delete Files": [
  null,
  "Usuń pliki"
 ],
 "Failed to load authorized keys.": [
  null,
  "Wczytanie upoważnionych kluczy się nie powiodło."
 ],
 "Force Change": [
  null,
  "Wymuś zmianę"
 ],
 "Force password change": [
  null,
  "Wymuszenie zmiany hasła"
 ],
 "Full Name": [
  null,
  "Imię i nazwisko"
 ],
 "Invalid key": [
  null,
  "Nieprawidłowy klucz"
 ],
 "Last Login": [
  null,
  "Ostatnie logowanie"
 ],
 "Local Accounts": [
  null,
  "Lokalne konta"
 ],
 "Lock Account": [
  null,
  "Zablokuj konto"
 ],
 "Never expire password": [
  null,
  "Bez wygasania hasła"
 ],
 "Never lock account": [
  null,
  "Bez blokowania konta"
 ],
 "New Password": [
  null,
  "Nowe hasło"
 ],
 "Off": [
  null,
  "Wyłączone"
 ],
 "Old Password": [
  null,
  "Poprzednie hasło"
 ],
 "On": [
  null,
  "Włączone"
 ],
 "Password": [
  null,
  "Hasło"
 ],
 "Password Expiration": [
  null,
  "Wygasanie hasła"
 ],
 "Paste the contents of your public SSH key file here": [
  null,
  "Proszę tutaj wkleić zawartość pliku publicznego klucza SSH"
 ],
 "Reset": [
  null,
  "Przywróć"
 ],
 "Roles": [
  null,
  "Role"
 ],
 "Set": [
  null,
  "Ustaw"
 ],
 "Set Password": [
  null,
  "Ustaw hasło"
 ],
 "Terminate Session": [
  null,
  "Zakończ sesję"
 ],
 "There are no authorized public keys for this account.": [
  null,
  "Brak upoważnionych publicznych kluczy dla tego konta."
 ],
 "Unnamed": [
  null,
  "Bez nazwy"
 ],
 "User Name": [
  null,
  "Nazwa użytkownika"
 ],
 "You do not have permission to view the authorized public keys for this account.": [
  null,
  "Brak uprawnienia do wyświetlania upoważnionych publicznych kluczy dla tego konta."
 ],
 "translatable": [
  null,
  "można tłumaczyć"
 ]
}));
