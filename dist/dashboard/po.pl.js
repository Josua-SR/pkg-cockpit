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
 "1 day": [
  null,
  "1 dzień"
 ],
 "1 hour": [
  null,
  "1 godzina"
 ],
 "1 week": [
  null,
  "1 tydzień"
 ],
 "5 minutes": [
  null,
  "5 minut"
 ],
 "6 hours": [
  null,
  "6 godzin"
 ],
 "A compatible version of Cockpit is not installed on {{#strong}}{{host}}{{/strong}}.": [
  null,
  "Na {{#strong}}{{host}}{{/strong}} nie zainstalowano zgodnej wersji Cockpit."
 ],
 "Add": [
  null,
  "Dodaj"
 ],
 "Add Machine to Dashboard": [
  null,
  "Dodaj komputer do panelu kontrolnego"
 ],
 "Address": [
  null,
  "Adres"
 ],
 "Advanced TCA": [
  null,
  "Zaawansowane TCA"
 ],
 "All In One": [
  null,
  "Zintegrowane"
 ],
 "Authentication": [
  null,
  "Uwierzytelnienie"
 ],
 "Authentication Failed": [
  null,
  "Uwierzytelnienie się nie powiodło"
 ],
 "Available": [
  null,
  "Dostępne"
 ],
 "Avatar": [
  null,
  "Awatar"
 ],
 "Blade": [
  null,
  "Kasetowy"
 ],
 "Blade enclosure": [
  null,
  "Obudowa kasetowa"
 ],
 "Bus Expansion Chassis": [
  null,
  "Obudowa rozszerzenia magistrali"
 ],
 "CPU": [
  null,
  "Procesor"
 ],
 "Can't load image": [
  null,
  "Nie można wczytać obrazu"
 ],
 "Cancel": [
  null,
  "Anuluj"
 ],
 "Checking for public keys": [
  null,
  "Wyszukiwanie kluczy publicznych"
 ],
 "Close": [
  null,
  "Zamknij"
 ],
 "Cockpit could not contact the given host $0. Make sure it has ssh running on port $1, or specify another port in the address.": [
  null,
  "Cockpit nie może skontaktować się z podanym komputerem $0. Proszę się upewnić, że ma on uruchomioną usługę ssh na porcie $1 lub podać inny port w adresie."
 ],
 "Cockpit is not installed": [
  null,
  "Cockpit nie jest zainstalowany"
 ],
 "Cockpit was unable to contact {{#strong}}{{host}}{{/strong}}.": [
  null,
  "Cockpit nie może skontaktować się z {{#strong}}{{host}}{{/strong}}."
 ],
 "Cockpit was unable to log in to {{#strong}}{{host}}{{/strong}}. {{#can_sync}}You may want to try to {{#sync_link}}synchronize users{{/sync_link}}.{{/can_sync}} For more authentication options and troubleshooting support please upgrade cockpit-ws to a newer version.": [
  null,
  "Cockpit nie może zalogować do {{#strong}}{{host}}{{/strong}}. {{#can_sync}}Można spróbować {{#sync_link}}synchronizować użytkowników{{/sync_link}}.{{/can_sync}} Zaktualizowanie cockpit-ws do nowszej wersji udostępni więcej opcji uwierzytelniania i pomocy w rozwiązywaniu problemów."
 ],
 "Cockpit was unable to log into {{#strong}}{{host}}{{/strong}}.": [
  null,
  "Cockpit nie może zalogować się do {{#strong}}{{host}}{{/strong}}."
 ],
 "Cockpit was unable to log into {{#strong}}{{host}}{{/strong}}. To use this machine with cockpit you will need to enable one of the following authentication methods in the sshd config on {{#strong}}{{host}}{{/strong}}:": [
  null,
  "Cockpit nie może zalogować się do {{#strong}}{{host}}{{/strong}}. Aby używać tego komputera za pomocą programu Cockpit, należy włączyć jedną z poniższych metod uwierzytelniania w konfiguracji usługi sshd w {{#strong}}{{host}}{{/strong}}:"
 ],
 "Cockpit was unable to log into {{#strong}}{{host}}{{/strong}}. You can change your authentication credentials below. {{#can_sync}}You may prefer to {{#sync_link}}synchronize accounts and passwords{{/sync_link}}.{{/can_sync}}": [
  null,
  "Cockpit nie może zalogować się do {{#strong}}{{host}}{{/strong}}. Poniżej można zmienić dane uwierzytelniające. {{#can_sync}}Można też {{#sync_link}}synchronizować konta i hasła{{/sync_link}}.{{/can_sync}}"
 ],
 "Color": [
  null,
  "Kolor"
 ],
 "Compact PCI": [
  null,
  "Kompaktowe PCI"
 ],
 "Connect": [
  null,
  "Połącz"
 ],
 "Connecting simultaneously to more than {{ limit }} machines is unsupported.": [
  null,
  "Jednoczesne łączenie z więcej niż {{ limit }} komputerami jest nieobsługiwane."
 ],
 "Connection Error": [
  null,
  "Błąd połączenia"
 ],
 "Convertible": [
  null,
  "2 w jednym"
 ],
 "Could not contact {{host}}": [
  null,
  "Nie można skontaktować się z {{host}}"
 ],
 "Dashboard": [
  null,
  "Panel kontrolny"
 ],
 "Desktop": [
  null,
  "Komputer stacjonarny"
 ],
 "Detachable": [
  null,
  "Odłączalny"
 ],
 "Disk I/O": [
  null,
  "Wejście/wyjście dysku"
 ],
 "Docking Station": [
  null,
  "Stacja dokująca"
 ],
 "Edit Server": [
  null,
  "Modyfikuj serwer"
 ],
 "Embedded PC": [
  null,
  "Komputer osadzony"
 ],
 "Enter IP address or host name": [
  null,
  "Adres IP lub nazwa komputera"
 ],
 "Entering a different password here means you will need to retype it every time you reconnect to this machine": [
  null,
  "Wpisanie tutaj innego hasła oznacza, że będzie wymagane jego wpisanie za każdym połączeniem do tej maszyny"
 ],
 "Error loading users: {{perm_failed}}": [
  null,
  "Błąd podczas wczytywania użytkowników: {{perm_failed}}"
 ],
 "Expansion Chassis": [
  null,
  "Obudowa rozszerzenia"
 ],
 "Failed to add machine: $0": [
  null,
  "Dodanie komputera się nie powiodło: $0"
 ],
 "Failed to change password": [
  null,
  "Zmiana hasła się nie powiodła"
 ],
 "Failed to edit machine: $0": [
  null,
  "Modyfikacja komputera się nie powiodła: $0"
 ],
 "Fingerprint": [
  null,
  "Odcisk"
 ],
 "Go to now": [
  null,
  "Przejdź teraz"
 ],
 "Hand Held": [
  null,
  "Przenośny"
 ],
 "Host Name": [
  null,
  "Nazwa komputera"
 ],
 "In order to synchronize users, you need to log in to {{#strong}}{{host}}{{/strong}}.": [
  null,
  "Aby synchronizować użytkowników, należy się zalogować w {{#strong}}{{host}}{{/strong}}."
 ],
 "Incorrect Host Key": [
  null,
  "Niepoprawny klucz komputera"
 ],
 "Invalid file permissions": [
  null,
  "Nieprawidłowe uprawnienia pliku"
 ],
 "IoT Gateway": [
  null,
  "Brama IoT"
 ],
 "Is sshd running on a different port?": [
  null,
  "Czy sshd jest uruchomione na innym porcie?"
 ],
 "Kerberos Based SSO": [
  null,
  "SSO oparte na Kerberos"
 ],
 "Kerberos Ticket": [
  null,
  "Zgłoszenie Kerberos"
 ],
 "Laptop": [
  null,
  "Laptop"
 ],
 "Leave blank to connect to this machine as the currently logged in user. If you enter a different username, that user will always be used when connecting to this machine.": [
  null,
  "Pozostawienie pustego pola spowoduje łączenie z tą maszyną jako obecnie zalogowany użytkownik. Jeśli zostanie podana inna nazwa użytkownika, to będzie ona zawsze używana podczas łączenia z tą maszyną."
 ],
 "Leave blank to connect to this machine as the currently logged in user{{#default_user}} ({{default_user}}){{/default_user}}. If you enter a different username, that user will always be used connecting to this machine.": [
  null,
  "Pozostawienie pustego pola spowoduje łączenie z tą maszyną jako obecnie zalogowany użytkownik {{#default_user}}({{default_user}}){{/default_user}}. Jeśli zostanie podana inna nazwa użytkownika, to będzie ona zawsze używana podczas łączenia z tą maszyną."
 ],
 "Log In": [
  null,
  "Zaloguj"
 ],
 "Log in to {{host}}": [
  null,
  "Zaloguj do {{host}}"
 ],
 "Login Password": [
  null,
  "Hasło logowania"
 ],
 "Lost connection. Trying to reconnect": [
  null,
  "Utracono połączenie. Próbowanie ponownego połączenia"
 ],
 "Low Profile Desktop": [
  null,
  "Komputer stacjonarny o mniejszym rozmiarze"
 ],
 "Lunch Box": [
  null,
  "Lunch Box"
 ],
 "Main Server Chassis": [
  null,
  "Główna obudowa serwera"
 ],
 "Memory": [
  null,
  "Pamięć"
 ],
 "Mini PC": [
  null,
  "Mini PC"
 ],
 "Mini Tower": [
  null,
  "Mini Tower"
 ],
 "Multi-system Chassis": [
  null,
  "Obudowa dla wielu komputerów"
 ],
 "Network": [
  null,
  "Sieć"
 ],
 "New password was not accepted": [
  null,
  "Nie przyjęto nowego hasła"
 ],
 "No such file or directory": [
  null,
  "Nie ma takiego pliku lub katalogu"
 ],
 "Not a valid private key": [
  null,
  "Nieprawidłowy klucz prywatny"
 ],
 "Notebook": [
  null,
  "Notebook"
 ],
 "Off": [
  null,
  "Wyłączone"
 ],
 "Old password not accepted": [
  null,
  "Nie przyjęto poprzedniego hasła"
 ],
 "On": [
  null,
  "Włączone"
 ],
 "Other": [
  null,
  "Inne"
 ],
 "Password": [
  null,
  "Hasło"
 ],
 "Password not accepted": [
  null,
  "Nie przyjęto hasła"
 ],
 "Peripheral Chassis": [
  null,
  "Obudowa peryferyjna"
 ],
 "Pizza Box": [
  null,
  "Pizza Box"
 ],
 "Port": [
  null,
  "Port"
 ],
 "Portable": [
  null,
  "Przenośne"
 ],
 "Prompting via ssh-add timed out": [
  null,
  "Pytanie przez ssh-add przekroczyło czas oczekiwania"
 ],
 "Prompting via ssh-keygen timed out": [
  null,
  "Pytanie przez ssh-keygen przekroczyło czas oczekiwania"
 ],
 "Public Key": [
  null,
  "Klucz publiczny"
 ],
 "RAID Chassis": [
  null,
  "Obudowa RAID"
 ],
 "Rack Mount Chassis": [
  null,
  "Obudowa do montowania w szafie"
 ],
 "Sealed-case PC": [
  null,
  "Sealed-case PC"
 ],
 "Select the users that you would like to be synchronized with {{#strong}}{{host}}{{/strong}}": [
  null,
  "Proszę wybrać użytkowników do synchronizacji z {{#strong}}{{host}}{{/strong}}"
 ],
 "Servers": [
  null,
  "Serwery"
 ],
 "Set": [
  null,
  "Ustaw"
 ],
 "Space-saving Computer": [
  null,
  "Komputer oszczędzający miejsce"
 ],
 "Stick PC": [
  null,
  "Stick PC"
 ],
 "Sub Chassis": [
  null,
  "Obudowa podrzędna"
 ],
 "Sub Notebook": [
  null,
  "Sub Notebook"
 ],
 "Synchronize": [
  null,
  "Zsynchronizuj"
 ],
 "Synchronize users": [
  null,
  "Zsynchronizuj użytkowników"
 ],
 "Tablet": [
  null,
  "Tablet"
 ],
 "The IP address or host name cannot contain whitespace.": [
  null,
  "Adres IP lub nazwa komputera nie może zawierać spacji."
 ],
 "The authenticity of host {{#strong}}{{host}}{{/strong}} can't be established. Are you sure you want to continue connecting?": [
  null,
  "Nie można ustalić autentyczności komputera {{#strong}}{{host}}{{/strong}}. Na pewno kontynuować łączenie?"
 ],
 "The key of {{#strong}}{{host}}{{/strong}} does not match the key previously in use. Unless this machine was recently replaced, it is likely that someone is trying to attack your connection to this machine.": [
  null,
  "Klucz {{#strong}}{{host}}{{/strong}} nie pasuje do poprzednio używanego klucza. Jeśli ten komputer nie został niedawno wymieniany, może to oznaczać próbę ataku na połączenie z tym komputerem."
 ],
 "The passwords do not match.": [
  null,
  "Hasła się nie zgadzają."
 ],
 "The user <b>$0</b> is not permitted to manage servers": [
  null,
  "Użytkownik <b>$0</b> nie ma zezwolenia na zarządzanie serwerami"
 ],
 "This machine has already been added.": [
  null,
  "Ten komputer został już dodany."
 ],
 "This version of cockpit-ws does not support connecting to a host with an alternate user or port": [
  null,
  "Ta wersja cockpit-ws nie obsługuje łączenia z komputerem z alternatywnym użytkownikiem lub portem"
 ],
 "To try a different port you will need to upgrade cockpit-ws to a newer version.": [
  null,
  "Należy zaktualizować cockpit-ws do nowszej wersji, aby spróbować innego portu."
 ],
 "Tower": [
  null,
  "Tower"
 ],
 "Type a password": [
  null,
  "Proszę wpisać hasło"
 ],
 "Unknown": [
  null,
  "Nieznane"
 ],
 "Unknown Host Key": [
  null,
  "Nieznany klucz komputera"
 ],
 "Update": [
  null,
  "Zaktualizuj"
 ],
 "User": [
  null,
  "Użytkownik"
 ],
 "User name": [
  null,
  "Nazwa użytkownika"
 ],
 "Using available credentials": [
  null,
  "Używanie dostępnych danych uwierzytelniania"
 ],
 "You are connected to {{#strong}}{{host}}{{/strong}}, however in order to synchronize users, a user with superuser privileges is required.": [
  null,
  "Połączono z {{#strong}}{{host}}{{/strong}}, jednakże do synchronizacji użytkowników wymagane są uprawnienia superużytkownika."
 ],
 "You are currently connected directly to this server. You cannot delete it.": [
  null,
  "Obecnie połączono bezpośrednio z tym serwerem. Nie można go usunąć."
 ],
 "You can remove the previously stored key by running the following command": [
  null,
  "Można usunąć poprzednio przechowywany klucz wykonując następujące polecenie"
 ]
}));
