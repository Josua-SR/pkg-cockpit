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
 "Adding key": [
  null,
  "Dodawanie klucza"
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
 "Container Administrator": [
  null,
  "Administrator kontenera"
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
 "Delete $0": [
  null,
  "Usuń $0"
 ],
 "Delete Files": [
  null,
  "Usuń pliki"
 ],
 "Error": [
  null,
  "Błąd"
 ],
 "Error saving authorized keys: ": [
  null,
  "Błąd podczas zapisywania upoważnionych kluczy: "
 ],
 "Excellent password": [
  null,
  "Doskonałe hasło"
 ],
 "Failed to change password": [
  null,
  "Zmiana hasła się nie powiodła"
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
 "Image Builder": [
  null,
  "Budowanie obrazu"
 ],
 "Invalid expiration date": [
  null,
  "Nieprawidłowa data wygaśnięcia"
 ],
 "Invalid key": [
  null,
  "Nieprawidłowy klucz"
 ],
 "Invalid number of days": [
  null,
  "Nieprawidłowa liczba dni"
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
 "Lock account on $0": [
  null,
  "Zablokowanie konta w dniu $0"
 ],
 "Logged In": [
  null,
  "Zalogowano"
 ],
 "Never": [
  null,
  "Nigdy"
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
 "New password was not accepted": [
  null,
  "Nie przyjęto nowego hasła"
 ],
 "No real name specified": [
  null,
  "Nie podano nazwy obszaru"
 ],
 "No user name specified": [
  null,
  "Nie podano nazwy użytkownika"
 ],
 "Off": [
  null,
  "Wyłączone"
 ],
 "Old Password": [
  null,
  "Poprzednie hasło"
 ],
 "Old password not accepted": [
  null,
  "Nie przyjęto poprzedniego hasła"
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
 "Password is not acceptable": [
  null,
  "Hasło jest do przyjęcia"
 ],
 "Password is too weak": [
  null,
  "Hasło jest za słabe"
 ],
 "Password must be changed": [
  null,
  "Należy zmienić hasło"
 ],
 "Paste the contents of your public SSH key file here": [
  null,
  "Proszę tutaj wkleić zawartość pliku publicznego klucza SSH"
 ],
 "Please specify an expiration date": [
  null,
  "Proszę podać datę wygaśnięcia"
 ],
 "Prompting via passwd timed out": [
  null,
  "Pytanie przez passwd przekroczyło czas oczekiwania"
 ],
 "Require password change every $0 days": [
  null,
  "Wymaganie zmiany hasła co $0 dni"
 ],
 "Require password change on $0": [
  null,
  "Wymaganie zmiany hasła w dniu $0"
 ],
 "Reset": [
  null,
  "Przywróć"
 ],
 "Roles": [
  null,
  "Role"
 ],
 "Server Administrator": [
  null,
  "Administrator serwera"
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
 "The account '$0' will be forced to change their password on next login": [
  null,
  "Konto „$0” będzie zmuszone do zmiany hasła podczas następnego logowania"
 ],
 "The key you provided was not valid.": [
  null,
  "Podany klucz jest nieprawidłowy."
 ],
 "The passwords do not match": [
  null,
  "Hasła się nie zgadzają"
 ],
 "The user <b>$0</b> is not permitted to modify accounts": [
  null,
  "Użytkownik <b>$0</b> nie ma zezwolenia na modyfikowanie kont"
 ],
 "The user name can only consist of letters from a-z, digits, dots, dashes and underscores.": [
  null,
  "Nazwa użytkownika może składać się tylko z liter od A do Z, cyfr, kropek, myślników i podkreślników."
 ],
 "There are no authorized public keys for this account.": [
  null,
  "Brak upoważnionych publicznych kluczy dla tego konta."
 ],
 "This user name already exists": [
  null,
  "Ta nazwa użytkownika już istnieje"
 ],
 "Unable to delete root account": [
  null,
  "Nie można usunąć konta roota"
 ],
 "Unable to rename root account": [
  null,
  "Nie można zmienić nazwy konta roota"
 ],
 "Unexpected error": [
  null,
  "Nieoczekiwany błąd"
 ],
 "Unnamed": [
  null,
  "Bez nazwy"
 ],
 "User Name": [
  null,
  "Nazwa użytkownika"
 ],
 "Validating key": [
  null,
  "Sprawdzanie poprawności klucza"
 ],
 "You do not have permission to view the authorized public keys for this account.": [
  null,
  "Brak uprawnienia do wyświetlania upoważnionych publicznych kluczy dla tego konta."
 ],
 "translatable": [
  null,
  "można tłumaczyć"
 ],
 "page-title\u0004Accounts": [
  null,
  "Konta"
 ]
}));
