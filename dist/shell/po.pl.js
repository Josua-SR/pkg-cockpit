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
 "A compatible version of Cockpit is not installed on {{#strong}}{{host}}{{/strong}}.": [
  null,
  "Na {{#strong}}{{host}}{{/strong}} nie zainstalowano zgodnej wersji Cockpit."
 ],
 "About Cockpit": [
  null,
  "O programie Cockpit"
 ],
 "Account Settings": [
  null,
  "Ustawienia konta"
 ],
 "Active Pages": [
  null,
  "Aktywne strony"
 ],
 "Add": [
  null,
  "Dodaj"
 ],
 "Add Machine to Dashboard": [
  null,
  "Dodaj komputer do panelu kontrolnego"
 ],
 "Add key": [
  null,
  "Dodaj klucz"
 ],
 "Address": [
  null,
  "Adres"
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
 "Cancel": [
  null,
  "Anuluj"
 ],
 "Cannot connect to an unknown machine": [
  null,
  "Nie można połączyć z nieznanym komputerem"
 ],
 "Change Password": [
  null,
  "Zmień hasło"
 ],
 "Checking for public keys": [
  null,
  "Wyszukiwanie kluczy publicznych"
 ],
 "Choose the language to be used in the application": [
  null,
  "Proszę wybrać język używany w aplikacji"
 ],
 "Close": [
  null,
  "Zamknij"
 ],
 "Close Selected Pages": [
  null,
  "Zamknij zaznaczone strony"
 ],
 "Cockpit could not contact the given host $0. Make sure it has ssh running on port $1, or specify another port in the address.": [
  null,
  "Cockpit nie może skontaktować się z podanym komputerem $0. Proszę się upewnić, że ma on uruchomioną usługę ssh na porcie $1 lub podać inny port w adresie."
 ],
 "Cockpit had an unexpected internal error. <br/><br/>You can try restarting Cockpit by pressing refresh in your browser. The javascript console contains details about this error (<b>Ctrl-Shift-J</b> in most browsers).": [
  null,
  "Wystąpił nieoczekiwany wewnętrzny błąd w programie Cockpit. <br/><br/>Można spróbować ponownie uruchomić program Cockpit przez odświeżenie strony w przeglądarce. Konsola języka JavaScript zawiera informacje o tym błędzie (<b>Ctrl-Shift-J</b> w większości przeglądarek)."
 ],
 "Cockpit is an interactive Linux server admin interface.": [
  null,
  "Cockpit to interaktywny interfejs do administrowania serwerami Linux."
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
 "Comment": [
  null,
  "Komentarz"
 ],
 "Confirm": [
  null,
  "Potwierdź"
 ],
 "Connect": [
  null,
  "Połącz"
 ],
 "Connecting simultaneously to more than {{ limit }} machines is unsupported.": [
  null,
  "Jednoczesne łączenie z więcej niż {{ limit }} komputerami jest nieobsługiwane."
 ],
 "Connecting to the machine": [
  null,
  "Łączenie z komputerem"
 ],
 "Could not contact {{host}}": [
  null,
  "Nie można skontaktować się z {{host}}"
 ],
 "Couldn't connect to the machine": [
  null,
  "Nie można połączyć z komputerem"
 ],
 "Details": [
  null,
  "Szczegóły"
 ],
 "Disconnected": [
  null,
  "Rozłączono"
 ],
 "Display Language": [
  null,
  "Język"
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
 "Host": [
  null,
  "Gospodarz"
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
 "Leave blank to connect to this machine as the currently logged in user{{#default_user}} ({{default_user}}){{/default_user}}. If you enter a different username, that user will always be used connecting to this machine.": [
  null,
  "Pozostawienie pustego pola spowoduje łączenie z tą maszyną jako obecnie zalogowany użytkownik {{#default_user}}({{default_user}}){{/default_user}}. Jeśli zostanie podana inna nazwa użytkownika, to będzie ona zawsze używana podczas łączenia z tą maszyną."
 ],
 "Licensed under:": [
  null,
  "Na warunkach licencji:"
 ],
 "Log In": [
  null,
  "Zaloguj"
 ],
 "Log Out": [
  null,
  "Wyloguj"
 ],
 "Log in again": [
  null,
  "Zaloguj ponownie"
 ],
 "Log in to {{host}}": [
  null,
  "Zaloguj do {{host}}"
 ],
 "Login Password": [
  null,
  "Hasło logowania"
 ],
 "Login has escalated admin privileges": [
  null,
  "Login uzyskał uprawnienia administratora"
 ],
 "Machines": [
  null,
  "Komputery"
 ],
 "New Password": [
  null,
  "Nowe hasło"
 ],
 "New password was not accepted": [
  null,
  "Nie przyjęto nowego hasła"
 ],
 "No matching files found": [
  null,
  "Nie odnaleziono pasujących plików"
 ],
 "No such file or directory": [
  null,
  "Nie ma takiego pliku lub katalogu"
 ],
 "Not a valid private key": [
  null,
  "Nieprawidłowy klucz prywatny"
 ],
 "Ok": [
  null,
  "OK"
 ],
 "Old Password": [
  null,
  "Poprzednie hasło"
 ],
 "Old password not accepted": [
  null,
  "Nie przyjęto poprzedniego hasła"
 ],
 "Ooops!": [
  null,
  "Ups!"
 ],
 "Password": [
  null,
  "Hasło"
 ],
 "Password not accepted": [
  null,
  "Nie przyjęto hasła"
 ],
 "Password not usable for privileged tasks or to connect to other machines": [
  null,
  "Hasło nieodpowiednie dla zadań wymagających uprawnień lub do łączenia z innymi komputerami"
 ],
 "Path to file": [
  null,
  "Ścieżka do pliku"
 ],
 "Port": [
  null,
  "Port"
 ],
 "Privileged": [
  null,
  "Uprawnione"
 ],
 "Project website": [
  null,
  "Strona projektu"
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
 "Reconnect": [
  null,
  "Połącz ponownie"
 ],
 "Reuse my password for privileged tasks and to connect to other machines": [
  null,
  "Użycie istniejącego hasła do zadań wymagających uprawnień i łączenia z innymi komputerami"
 ],
 "Select": [
  null,
  "Wybierz"
 ],
 "Select the users that you would like to be synchronized with {{#strong}}{{host}}{{/strong}}": [
  null,
  "Proszę wybrać użytkowników do synchronizacji z {{#strong}}{{host}}{{/strong}}"
 ],
 "Synchronize": [
  null,
  "Zsynchronizuj"
 ],
 "Synchronize users": [
  null,
  "Zsynchronizuj użytkowników"
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
 "The machine is restarting": [
  null,
  "Komputer jest ponownie uruchamiany"
 ],
 "The passwords do not match.": [
  null,
  "Hasła się nie zgadzają."
 ],
 "There are currently no active pages": [
  null,
  "Obecnie nie ma aktywnych stron"
 ],
 "This machine has already been added.": [
  null,
  "Ten komputer został już dodany."
 ],
 "This version of cockpit-ws does not support connecting to a host with an alternate user or port": [
  null,
  "Ta wersja cockpit-ws nie obsługuje łączenia z komputerem z alternatywnym użytkownikiem lub portem"
 ],
 "Tip: Make your key password match your login password to automatically authenticate against other systems.": [
  null,
  "Wskazówka: ustawienie hasła klucza na takie samo, jak hasło logowania automatycznie uwierzytelni w innych systemach."
 ],
 "To try a different port you will need to upgrade cockpit-ws to a newer version.": [
  null,
  "Należy zaktualizować cockpit-ws do nowszej wersji, aby spróbować innego portu."
 ],
 "Too many files found": [
  null,
  "Odnaleziono za dużo plików"
 ],
 "Troubleshoot": [
  null,
  "Rozwiązywanie problemów"
 ],
 "Try to reconnect": [
  null,
  "Spróbuj połączyć ponownie"
 ],
 "Type": [
  null,
  "Typ"
 ],
 "Type a password": [
  null,
  "Proszę wpisać hasło"
 ],
 "Unexpected error": [
  null,
  "Nieoczekiwany błąd"
 ],
 "Unknown Host Key": [
  null,
  "Nieznany klucz komputera"
 ],
 "Unlock Key": [
  null,
  "Odblokuj klucz"
 ],
 "Update": [
  null,
  "Zaktualizuj"
 ],
 "Use the following keys to authenticate against other systems": [
  null,
  "Użycie poniższych kluczy do uwierzytelniania w innych systemach"
 ],
 "User name": [
  null,
  "Nazwa użytkownika"
 ],
 "Using available credentials": [
  null,
  "Używanie dostępnych danych uwierzytelniania"
 ],
 "Version": [
  null,
  "Wersja"
 ],
 "You are connected to {{#strong}}{{host}}{{/strong}}, however in order to synchronize users, a user with superuser privileges is required.": [
  null,
  "Połączono z {{#strong}}{{host}}{{/strong}}, jednakże do synchronizacji użytkowników wymagane są uprawnienia superużytkownika."
 ],
 "active": [
  null,
  "aktywne"
 ]
}));
