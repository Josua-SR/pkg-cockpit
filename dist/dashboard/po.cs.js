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
 "1 day": [
  null,
  "1 den"
 ],
 "1 hour": [
  null,
  "1 hodina"
 ],
 "1 week": [
  null,
  "1 týden"
 ],
 "5 minutes": [
  null,
  "5 minut"
 ],
 "6 hours": [
  null,
  "6 hodin"
 ],
 "A compatible version of Cockpit is not installed on {{#strong}}{{host}}{{/strong}}.": [
  null,
  "Na {{#strong}}{{host}}{{/strong}} není nainstalovaná kompatibilní verze Cockpit."
 ],
 "Absent": [
  null,
  "Chybí"
 ],
 "Add": [
  null,
  "Přidat"
 ],
 "Add Machine to Dashboard": [
  null,
  "Přidat stroj na přehled"
 ],
 "Address": [
  null,
  "Adresa"
 ],
 "Advanced TCA": [
  null,
  "Pokročilé TCA"
 ],
 "All In One": [
  null,
  "Vše v jednom"
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
 "Avatar": [
  null,
  "Avatar"
 ],
 "Blade": [
  null,
  "Blade server"
 ],
 "Blade enclosure": [
  null,
  "Skříň se šachtami pro blade servery"
 ],
 "Bus Expansion Chassis": [
  null,
  "Skříň rozšíření sběrnice"
 ],
 "CPU": [
  null,
  "Procesor"
 ],
 "Can't load image": [
  null,
  "Obraz se nedaří smazat"
 ],
 "Cancel": [
  null,
  "Storno"
 ],
 "Checking for public keys": [
  null,
  "Hledají se veřejné klíče"
 ],
 "Close": [
  null,
  "Zavřít"
 ],
 "Cockpit could not contact the given host $0. Make sure it has ssh running on port $1, or specify another port in the address.": [
  null,
  "Cockpit se nepodařilo kontaktovat uvedený stroj $0. Ověřte, že je ssh spuštěno na portu $1 nebo v jeho adrese zadejte jiný port."
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
 "Compact PCI": [
  null,
  "Compact PCI"
 ],
 "Connect": [
  null,
  "Připojit"
 ],
 "Connecting simultaneously to more than {{ limit }} machines is unsupported.": [
  null,
  "Souběžné spojení s více než {{ limit }} stroji není podporováno."
 ],
 "Connection Error": [
  null,
  "Chyba připojení"
 ],
 "Convertible": [
  null,
  "Počítač 2v1"
 ],
 "Could not contact {{host}}": [
  null,
  "Nedaří se kontaktovat {{host}}"
 ],
 "Dashboard": [
  null,
  "Přehled"
 ],
 "Desktop": [
  null,
  "Desktop"
 ],
 "Detachable": [
  null,
  "Odpojitelné"
 ],
 "Disk I/O": [
  null,
  "Diskový vst/výst."
 ],
 "Docking Station": [
  null,
  "Dokovací stanice"
 ],
 "Dual Rank": [
  null,
  "Dual Rank"
 ],
 "Edit Server": [
  null,
  "Upravit server"
 ],
 "Embedded PC": [
  null,
  "Jednodeskový počítač"
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
 "Expansion Chassis": [
  null,
  "Rozšiřující šasi"
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
 "Go to now": [
  null,
  "Přejít na nyní"
 ],
 "Hand Held": [
  null,
  "Pro držení v rukou"
 ],
 "Host Name": [
  null,
  "Název počítače"
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
 "IoT Gateway": [
  null,
  "Brána Internetu věcí (IoT)"
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
 "Laptop": [
  null,
  "Notebook"
 ],
 "Leave blank to connect to this machine as the currently logged in user. If you enter a different username, that user will always be used when connecting to this machine.": [
  null,
  "Nevyplňujte pro připojení se k tomuto stroji jako právě přihlášený uživatel. Pokud zadáte jiné uživatelské jméno, takový uživatel bude vždy použit při připojování k tomuto stroji."
 ],
 "Leave blank to connect to this machine as the currently logged in user{{#default_user}} ({{default_user}}){{/default_user}}. If you enter a different username, that user will always be used connecting to this machine.": [
  null,
  "Nevyplňujte pro připojení k tomuto stroji jako právě přihlášený uživatel{{#default_user}} ({{default_user}}){{/default_user}}. Pokud zadáte jiné uživatelské jméno, tento uživatel bude vždy použit při připojování k tomuto stroji."
 ],
 "Log In": [
  null,
  "Přihlásit"
 ],
 "Log in to {{host}}": [
  null,
  "Přihlásit na {{host}}"
 ],
 "Login Password": [
  null,
  "Přihlašovací heslo"
 ],
 "Lost connection. Trying to reconnect": [
  null,
  "Spojení ztraceno. Pokus o opětovné připojení"
 ],
 "Low Profile Desktop": [
  null,
  "Nízký desktop"
 ],
 "Lunch Box": [
  null,
  "Kufříkový počítač"
 ],
 "Main Server Chassis": [
  null,
  "Hlavní skříň serveru"
 ],
 "Memory": [
  null,
  "Paměť"
 ],
 "Mini PC": [
  null,
  "Mini PC"
 ],
 "Mini Tower": [
  null,
  "Mini věž"
 ],
 "Multi-system Chassis": [
  null,
  "Skříň pro více systémů"
 ],
 "Network": [
  null,
  "Síť"
 ],
 "New password was not accepted": [
  null,
  "Nové heslo nebylo přijato"
 ],
 "No such file or directory": [
  null,
  "Žádný takový soubor nebo složka"
 ],
 "Not a valid private key": [
  null,
  "Není platná soukromá část klíče"
 ],
 "Notebook": [
  null,
  "Notebook"
 ],
 "Old password not accepted": [
  null,
  "Původní heslo nebylo přijato"
 ],
 "Other": [
  null,
  "Ostatní"
 ],
 "Password": [
  null,
  "Heslo"
 ],
 "Password not accepted": [
  null,
  "Heslo nebylo přijato"
 ],
 "Peripheral Chassis": [
  null,
  "Skříň periferií"
 ],
 "Pizza Box": [
  null,
  "Velikost „krabice od pizzy“"
 ],
 "Port": [
  null,
  "Port"
 ],
 "Portable": [
  null,
  "Přenosný"
 ],
 "Present": [
  null,
  "Přítomno"
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
 "RAID Chassis": [
  null,
  "RAID skříň"
 ],
 "Rack Mount Chassis": [
  null,
  "Skříň do stojanu"
 ],
 "Sealed-case PC": [
  null,
  "Počítač se zapečetěnou skříní"
 ],
 "Select the users that you would like to be synchronized with {{#strong}}{{host}}{{/strong}}": [
  null,
  "Vyberte uživatele které chcete synchronizovat s {{#strong}}{{host}}{{/strong}}"
 ],
 "Servers": [
  null,
  "Servery"
 ],
 "Set": [
  null,
  "Nastavit"
 ],
 "Single Rank": [
  null,
  "Single Rank"
 ],
 "Space-saving Computer": [
  null,
  "Prostorově úsporný počítač"
 ],
 "Stick PC": [
  null,
  "Počítač v klíčence"
 ],
 "Sub Chassis": [
  null,
  "Dílčí skříň"
 ],
 "Sub Notebook": [
  null,
  "Zmenšený notebook"
 ],
 "Synchronize": [
  null,
  "Synchronizovat"
 ],
 "Synchronize users": [
  null,
  "Synchronizovat uživatele"
 ],
 "Tablet": [
  null,
  "Tablet"
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
 "The passwords do not match.": [
  null,
  "Zadání hesla se neshodují."
 ],
 "The user <b>$0</b> is not permitted to manage servers": [
  null,
  "Uživatel <b>$0</b> není oprávněn spravovat servery"
 ],
 "This machine has already been added.": [
  null,
  "Tento stroj už byl přidán."
 ],
 "This version of cockpit-ws does not support connecting to a host with an alternate user or port": [
  null,
  "Tato verze cockpit-ws nepodporuje připojování ke stroji pomocí alternativního uživatele nebo portu"
 ],
 "To try a different port you will need to upgrade cockpit-ws to a newer version.": [
  null,
  "Pro vyzkoušení jiného portu bude třeba přejít na novější verzi cockpit-ws."
 ],
 "Tower": [
  null,
  "Věž"
 ],
 "Type a password": [
  null,
  "Zadejte heslo"
 ],
 "Unknown": [
  null,
  "Neznámé"
 ],
 "Unknown Host Key": [
  null,
  "Neznámý klíč stroje"
 ],
 "Update": [
  null,
  "Aktualizovat"
 ],
 "User": [
  null,
  "Uživatel"
 ],
 "User name": [
  null,
  "Uživatelské jméno"
 ],
 "Using available credentials": [
  null,
  "Pomocí přihlašovacích údajů, které jsou k dispozici"
 ],
 "You are connected to {{#strong}}{{host}}{{/strong}}, however in order to synchronize users, a user with superuser privileges is required.": [
  null,
  "Jste sice připojení k {{#strong}}{{host}}{{/strong}}, nicméně pro synchronizaci uživatelských účtů je zapotřebí uživatele s oprávněním pro správu systému."
 ],
 "You are currently connected directly to this server. You cannot delete it.": [
  null,
  "V tuto chvíli jste připojení přímo na tento server. Nemůžete ho proto smazat."
 ]
}));
