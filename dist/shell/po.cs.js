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
nplurals=3; plural=(n==1) ? 0 : (n>=2 && n<=4) ? 1 : 2;
return plural;
},
  "language": "cs",
  "x-generator": "Zanata 4.6.2"
 },
 "A compatible version of Cockpit is not installed on {{#strong}}{{host}}{{/strong}}.": [
  null,
  "Na {{#strong}}{{host}}{{/strong}} není nainstalovaná kompatibilní verze Cockpit."
 ],
 "About Cockpit": [
  null,
  "O Cockpit"
 ],
 "Account Settings": [
  null,
  "Nastavení účtu"
 ],
 "Active Pages": [
  null,
  "Aktivní stránky"
 ],
 "Add": [
  null,
  "Přidat"
 ],
 "Add Machine to Dashboard": [
  null,
  "Přidat stroj na přehled"
 ],
 "Add key": [
  null,
  "Přidat klíč"
 ],
 "Address": [
  null,
  "Adresa"
 ],
 "Authentication": [
  null,
  "Ověření"
 ],
 "Authentication Failed": [
  null,
  "Ověření se nezdařilo"
 ],
 "Available": [
  null,
  "Dostupný"
 ],
 "Cancel": [
  null,
  "Storno"
 ],
 "Cannot connect to an unknown machine": [
  null,
  "Nelze se připojit k neznámému stroji"
 ],
 "Change Password": [
  null,
  "Změnit heslo"
 ],
 "Checking for public keys": [
  null,
  "Hledají se veřejné klíče"
 ],
 "Choose the language to be used in the application": [
  null,
  "Vyberte jazyk aplikace"
 ],
 "Close": [
  null,
  "Zavřít"
 ],
 "Close Selected Pages": [
  null,
  "Zavřít vybrané stránky"
 ],
 "Cockpit could not contact the given host $0. Make sure it has ssh running on port $1, or specify another port in the address.": [
  null,
  "Cockpit se nepodařilo kontaktovat uvedený stroj $0. Ověřte, že je ssh spuštěno na portu $1 nebo v jeho adrese zadejte jiný port."
 ],
 "Cockpit had an unexpected internal error. <br/><br/>You can try restarting Cockpit by pressing refresh in your browser. The javascript console contains details about this error (<b>Ctrl-Shift-J</b> in most browsers).": [
  null,
  "V Cockpit nastala neočekávaná vnitřní chyba. <br/><br/>Můžete zkusit Cockpit restartovat kliknutím na opětovné načtení stránky ve svém prohlížeči. Podrobnější informace o této chybě jsou vypsány v javascript konzoli (<b>Ctrl-Shift-J</b> ve většině prohlížečů)."
 ],
 "Cockpit is an interactive Linux server admin interface.": [
  null,
  "Cockpit je interaktivní rozhraní pro správu linuxového serveru."
 ],
 "Cockpit is not installed": [
  null,
  "Cockpit není nainstalován"
 ],
 "Cockpit was unable to contact {{#strong}}{{host}}{{/strong}}.": [
  null,
  "Cockpit se nepodařilo spojit s {{#strong}}{{host}}{{/strong}}."
 ],
 "Cockpit was unable to log in to {{#strong}}{{host}}{{/strong}}. {{#can_sync}}You may want to try to {{#sync_link}}synchronize users{{/sync_link}}.{{/can_sync}} For more authentication options and troubleshooting support please upgrade cockpit-ws to a newer version.": [
  null,
  "Cockpit se nepodařilo přihlásit k {{#strong}}{{host}}{{/strong}}. {{#can_sync}}Můžete vyzkoušet {{#sync_link}}synchronizovat uživatele{{/sync_link}}.{{/can_sync}} Pro více možností ověřování a podporu řešení problémů přejděte na novější verzi součásti cockpit-ws."
 ],
 "Cockpit was unable to log into {{#strong}}{{host}}{{/strong}}.": [
  null,
  "Cockpit se nepodařilo přihlásit k {{#strong}}{{host}}{{/strong}}."
 ],
 "Cockpit was unable to log into {{#strong}}{{host}}{{/strong}}. To use this machine with cockpit you will need to enable one of the following authentication methods in the sshd config on {{#strong}}{{host}}{{/strong}}:": [
  null,
  "Cockpit se nepodařilo přihlásit k {{#strong}}{{host}}{{/strong}}. Aby bylo možné tento stroj používat s cockpit je třeba zapnout následující metody ověřování v  nastavení sshd na {{#strong}}{{host}}{{/strong}}:"
 ],
 "Cockpit was unable to log into {{#strong}}{{host}}{{/strong}}. You can change your authentication credentials below. {{#can_sync}}You may prefer to {{#sync_link}}synchronize accounts and passwords{{/sync_link}}.{{/can_sync}}": [
  null,
  "Cockpit se nepodařilo přihlásit k {{#strong}}{{host}}{{/strong}}. Své přihlašovací údaje můžete změnit níže. {{#can_sync}}Namísto toho můžete chtít {{#sync_link}}synchronizovat účty a hesla{{/sync_link}}.{{/can_sync}}"
 ],
 "Color": [
  null,
  "Barva"
 ],
 "Comment": [
  null,
  "Komentář"
 ],
 "Confirm": [
  null,
  "Potvrdit"
 ],
 "Connect": [
  null,
  "Připojit"
 ],
 "Connecting simultaneously to more than {{ limit }} machines is unsupported.": [
  null,
  "Souběžné spojení s více než {{ limit }} stroji není podporováno."
 ],
 "Connecting to the machine": [
  null,
  "Připojování ke stroji"
 ],
 "Could not contact {{host}}": [
  null,
  "Nedaří se kontaktovat {{host}}"
 ],
 "Couldn't connect to the machine": [
  null,
  "Nedaří se připojit ke stroji"
 ],
 "Details": [
  null,
  "Podrobnosti"
 ],
 "Disconnected": [
  null,
  "Odpojeno"
 ],
 "Display Language": [
  null,
  "Jazyk zobrazení"
 ],
 "Enter IP address or host name": [
  null,
  "Zadejte IP adresu nebo název stroje"
 ],
 "Entering a different password here means you will need to retype it every time you reconnect to this machine": [
  null,
  "Zadání jiného hesla zde znamená, že ho bude třeba zadávat pokaždé znovu při připojování k tomuto stroji"
 ],
 "Error loading users: {{perm_failed}}": [
  null,
  "Chyba při načítání uživatelů: {{perm_failed}}"
 ],
 "Failed to add machine: $0": [
  null,
  "Nepodařilo se přidat stroj: $0"
 ],
 "Failed to change password": [
  null,
  "Nepodařilo se změnit heslo"
 ],
 "Failed to edit machine: $0": [
  null,
  "Nepodařilo se  upravit stroj: $0"
 ],
 "Fingerprint": [
  null,
  "Otisk"
 ],
 "Host": [
  null,
  "Počítač"
 ],
 "In order to synchronize users, you need to log in to {{#strong}}{{host}}{{/strong}}.": [
  null,
  "Pro synchronizaci uživatelů je třeba se přihlásit k {{#strong}}{{host}}{{/strong}}."
 ],
 "Incorrect Host Key": [
  null,
  "Nesprávný klíč stroje"
 ],
 "Invalid file permissions": [
  null,
  "Neplatná souborová práva"
 ],
 "Is sshd running on a different port?": [
  null,
  "Není sshd spuštěný na jiném portu?"
 ],
 "Kerberos Based SSO": [
  null,
  "Sjednocené přihlašování (SSO), založené na Kerberos"
 ],
 "Kerberos Ticket": [
  null,
  "Kerberos tiket"
 ],
 "Leave blank to connect to this machine as the currently logged in user{{#default_user}} ({{default_user}}){{/default_user}}. If you enter a different username, that user will always be used connecting to this machine.": [
  null,
  "Nevyplňujte pro připojení k tomuto stroji jako právě přihlášený uživatel{{#default_user}} ({{default_user}}){{/default_user}}. Pokud zadáte jiné uživatelské jméno, tento uživatel bude vždy použit při připojování k tomuto stroji."
 ],
 "Licensed under:": [
  null,
  "Licencováno pod:"
 ],
 "Log In": [
  null,
  "Přihlásit"
 ],
 "Log Out": [
  null,
  "Odhlásit"
 ],
 "Log in again": [
  null,
  "Znovu se přihlásit"
 ],
 "Log in to {{host}}": [
  null,
  "Přihlásit na {{host}}"
 ],
 "Login Password": [
  null,
  "Přihlašovací heslo"
 ],
 "Login has escalated admin privileges": [
  null,
  "Přihlášení má oprávnění povýšené na úroveň pro správu"
 ],
 "Machines": [
  null,
  "Stroje"
 ],
 "New Password": [
  null,
  "Nové heslo"
 ],
 "New password was not accepted": [
  null,
  "Nové heslo nebylo přijato"
 ],
 "No matching files found": [
  null,
  "Nenalezeny žádné odpovídající soubory"
 ],
 "No such file or directory": [
  null,
  "Žádný takový soubor nebo složka"
 ],
 "Not a valid private key": [
  null,
  "Není platná soukromá část klíče"
 ],
 "Off": [
  null,
  "Vypnuto"
 ],
 "Ok": [
  null,
  "Ok"
 ],
 "Old Password": [
  null,
  "Původní heslo"
 ],
 "Old password not accepted": [
  null,
  "Původní heslo nebylo přijato"
 ],
 "On": [
  null,
  "Zapnuto"
 ],
 "Ooops!": [
  null,
  "Jejda!"
 ],
 "Password": [
  null,
  "Heslo"
 ],
 "Password not accepted": [
  null,
  "Heslo nebylo přijato"
 ],
 "Password not usable for privileged tasks or to connect to other machines": [
  null,
  "Heslo není použitelné pro privilegované úlohy nebo pro připojování se k ostatním strojům"
 ],
 "Path to file": [
  null,
  "Popis umístění serveru"
 ],
 "Port": [
  null,
  "Port"
 ],
 "Privileged": [
  null,
  "Privilegované"
 ],
 "Project website": [
  null,
  "Webové stránky projektu"
 ],
 "Prompting via ssh-add timed out": [
  null,
  "Časový limit výzvy prostřednictvím ssh-add překročen"
 ],
 "Prompting via ssh-keygen timed out": [
  null,
  "Časový limit výzvy prostřednictvím ssh-keygen překročen"
 ],
 "Public Key": [
  null,
  "Veřejná část klíče"
 ],
 "Reconnect": [
  null,
  "Znovu připojit"
 ],
 "Reuse my password for privileged tasks and to connect to other machines": [
  null,
  "Použít mé heslo i pro privilegované úlohy a připojování k dalším strojům"
 ],
 "Select": [
  null,
  "Vybrat"
 ],
 "Select the users that you would like to be synchronized with {{#strong}}{{host}}{{/strong}}": [
  null,
  "Vyberte uživatele které chcete synchronizovat s {{#strong}}{{host}}{{/strong}}"
 ],
 "Synchronize": [
  null,
  "Synchronizovat"
 ],
 "Synchronize users": [
  null,
  "Synchronizovat uživatele"
 ],
 "The IP address or host name cannot contain whitespace.": [
  null,
  "IP adresa nebo název stroje nemůže obsahovat prázdný znak."
 ],
 "The authenticity of host {{#strong}}{{host}}{{/strong}} can't be established. Are you sure you want to continue connecting?": [
  null,
  "Nepodvrženost totožnosti stroje {{#strong}}{{host}}{{/strong}} se nedaří ověřit. Opravdu chcete pokračovat v připojování?"
 ],
 "The key of {{#strong}}{{host}}{{/strong}} does not match the key previously in use. Unless this machine was recently replaced, it is likely that someone is trying to attack your connection to this machine.": [
  null,
  "Klíč {{#strong}}{{host}}{{/strong}} neodpovídá dříve používanému klíči. Pokud tento stroj nebyl nedávno nahrazen, je pravděpodobné, že se někdo pokouší zaútočit na vaše spojení s tímto strojem."
 ],
 "The machine is restarting": [
  null,
  "Stroj se restartuje"
 ],
 "The passwords do not match.": [
  null,
  "Zadání hesla se neshodují."
 ],
 "There are currently no active pages": [
  null,
  "V tuto chvíli zde nejsou žádné aktivní stránky"
 ],
 "This machine has already been added.": [
  null,
  "Tento stroj už byl přidán."
 ],
 "This version of cockpit-ws does not support connecting to a host with an alternate user or port": [
  null,
  "Tato verze cockpit-ws nepodporuje připojování ke stroji pomocí alternativního uživatele nebo portu"
 ],
 "Tip: Make your key password match your login password to automatically authenticate against other systems.": [
  null,
  "Tip: Nastavte si heslo ke klíči stejné jako pro přihlašování a budete se vůči ostatním systémům ověřovat automaticky."
 ],
 "To try a different port you will need to upgrade cockpit-ws to a newer version.": [
  null,
  "Pro vyzkoušení jiného portu bude třeba přejít na novější verzi cockpit-ws."
 ],
 "Too many files found": [
  null,
  "Nalezeno příliš mnoho souborů"
 ],
 "Troubleshoot": [
  null,
  "Řešit potíže"
 ],
 "Try to reconnect": [
  null,
  "Pokusit se znovu spojit"
 ],
 "Type": [
  null,
  "Typ"
 ],
 "Type a password": [
  null,
  "Zadejte heslo"
 ],
 "Unexpected error": [
  null,
  "Neočekávaná chyba"
 ],
 "Unknown Host Key": [
  null,
  "Neznámý klíč stroje"
 ],
 "Unlock Key": [
  null,
  "Odemknout klíč"
 ],
 "Update": [
  null,
  "Aktualizovat"
 ],
 "Use the following keys to authenticate against other systems": [
  null,
  "Pro ověřování vůči ostatním systémům použít následující klíče"
 ],
 "User name": [
  null,
  "Uživatelské jméno"
 ],
 "Using available credentials": [
  null,
  "Pomocí přihlašovacích údajů, které jsou k dispozici"
 ],
 "Version": [
  null,
  "Verze"
 ],
 "You are connected to {{#strong}}{{host}}{{/strong}}, however in order to synchronize users, a user with superuser privileges is required.": [
  null,
  "Jste sice připojení k {{#strong}}{{host}}{{/strong}}, nicméně pro synchronizaci uživatelských účtů je zapotřebí uživatele s oprávněním pro správu systému."
 ],
 "active": [
  null,
  "aktivní"
 ]
}));
