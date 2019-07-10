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
nplurals=2; plural=(n != 1);
return plural;
},
  "language": "de",
  "x-generator": "Zanata 4.6.2"
 },
 "1 day": [
  null,
  "1 Tag"
 ],
 "1 hour": [
  null,
  "1 Stunde"
 ],
 "1 week": [
  null,
  "1 Woche"
 ],
 "5 minutes": [
  null,
  "5 Minuten"
 ],
 "6 hours": [
  null,
  "6 Stunden"
 ],
 "A compatible version of Cockpit is not installed on {{#strong}}{{host}}{{/strong}}.": [
  null,
  "Auf {{#strong}}{{host}}{{/strong}} ist keine kompatible Version von Cockpit installiert."
 ],
 "Add": [
  null,
  "Hinzufügen"
 ],
 "Add Machine to Dashboard": [
  null,
  "Maschine zum Dashboard hinzufügen"
 ],
 "Address": [
  null,
  "Adresse"
 ],
 "Advanced TCA": [
  null,
  "Fortgeschrittenes TCA"
 ],
 "All In One": [
  null,
  "Alles in einem"
 ],
 "Authentication": [
  null,
  "Authentifizierung"
 ],
 "Authentication Failed": [
  null,
  "Authentifizierung fehlgeschlagen"
 ],
 "Available": [
  null,
  "Verfügbar"
 ],
 "Avatar": [
  null,
  "Avatar"
 ],
 "Blade": [
  null,
  "Klinge"
 ],
 "Blade enclosure": [
  null,
  "Klingengehäuse"
 ],
 "Bus Expansion Chassis": [
  null,
  "Bus-Erweiterungsgehäuse"
 ],
 "CPU": [
  null,
  "CPU"
 ],
 "Can't load image": [
  null,
  "Bild kann nicht geladen werden"
 ],
 "Cancel": [
  null,
  "Abbrechen"
 ],
 "Checking for public keys": [
  null,
  "Auf öffentliche Schlüssel überprüfen"
 ],
 "Close": [
  null,
  "Schließen"
 ],
 "Cockpit could not contact the given host $0. Make sure it has ssh running on port $1, or specify another port in the address.": [
  null,
  "Cockpit konnte den angegebenen Host $0 nicht erreichen. Stellen Sie sicher, dass SSH auf Port $1 läuft oder geben Sie einen anderen Port in der Adresse an."
 ],
 "Cockpit is not installed": [
  null,
  "Cockpit ist nicht installiert"
 ],
 "Cockpit was unable to contact {{#strong}}{{host}}{{/strong}}.": [
  null,
  "Cockpit konnte den Host {{#strong}}{{host}}{{/strong}} nicht erreichen."
 ],
 "Cockpit was unable to log in to {{#strong}}{{host}}{{/strong}}. {{#can_sync}}You may want to try to {{#sync_link}}synchronize users{{/sync_link}}.{{/can_sync}} For more authentication options and troubleshooting support please upgrade cockpit-ws to a newer version.": [
  null,
  "Cockpit konnte sich nicht anmelden {{#strong}}{{host}}{{/strong}}. {{#can_sync}}Möglicherweise möchten Sie es versuchen {{#sync_link}}Benutzer synchronisieren{{/sync_link}}.{{/can_sync}} Für weitere Authentifizierungsoptionen und Unterstützung bei der Fehlerbehebung aktualisieren Sie bitte Cockpit-ws auf eine neuere Version."
 ],
 "Cockpit was unable to log into {{#strong}}{{host}}{{/strong}}.": [
  null,
  "Cockpit konnte sich bei {{#strong}}{{host}}{{/strong}} nicht einloggen."
 ],
 "Cockpit was unable to log into {{#strong}}{{host}}{{/strong}}. To use this machine with cockpit you will need to enable one of the following authentication methods in the sshd config on {{#strong}}{{host}}{{/strong}}:": [
  null,
  "Cockpit konnte sich nicht anmelden {{#strong}}{{host}}{{/strong}}. Um dieses Gerät mit Cockpit zu verwenden, müssen Sie in der sshd-Konfiguration eine der folgenden Authentifizierungsmethoden aktivieren {{#strong}}{{host}}{{/strong}}:"
 ],
 "Cockpit was unable to log into {{#strong}}{{host}}{{/strong}}. You can change your authentication credentials below. {{#can_sync}}You may prefer to {{#sync_link}}synchronize accounts and passwords{{/sync_link}}.{{/can_sync}}": [
  null,
  "Cockpit konnte sich nicht anmelden {{#strong}}{{host}}{{/strong}}. Sie können Ihre Authentifizierungsinformationen unten ändern. {{#can_sync}}Sie können es vorziehen {{#sync_link}}Konten und Passwörter synchronisieren{{/sync_link}}.{{/can_sync}}"
 ],
 "Color": [
  null,
  "Farbe"
 ],
 "Compact PCI": [
  null,
  "Kompakte PCI"
 ],
 "Connect": [
  null,
  "Verbinden"
 ],
 "Connecting simultaneously to more than {{ limit }} machines is unsupported.": [
  null,
  "Das gleichzeitige Verbinden zu mehr als  {{ limit }} Maschinen wird nicht unterstützt."
 ],
 "Connection Error": [
  null,
  "Fehler bei der Verbindung"
 ],
 "Convertible": [
  null,
  "Convertible"
 ],
 "Could not contact {{host}}": [
  null,
  "Konnte Host {{host}} nicht erreichen"
 ],
 "Dashboard": [
  null,
  "Dashboard"
 ],
 "Desktop": [
  null,
  "Desktop"
 ],
 "Detachable": [
  null,
  "Abnehmbar"
 ],
 "Disk I/O": [
  null,
  "Festplatten-E/A"
 ],
 "Docking Station": [
  null,
  "Dockingstation"
 ],
 "Edit Server": [
  null,
  "Server bearbeiten"
 ],
 "Embedded PC": [
  null,
  "Eingebetteter PC"
 ],
 "Enter IP address or host name": [
  null,
  "Geben Sie die IP Adresse oder den Hostnamen an"
 ],
 "Entering a different password here means you will need to retype it every time you reconnect to this machine": [
  null,
  "Wenn Sie hier ein anderes Passwort eingeben, müssen Sie es jedes Mal erneut eingeben, wenn Sie sich erneut mit diesem System verbinden"
 ],
 "Error loading users: {{perm_failed}}": [
  null,
  "Fehler beim Laden von Benutzern: {{perm_failed}}"
 ],
 "Expansion Chassis": [
  null,
  "Erweiterungsgehäuse"
 ],
 "Failed to add machine: $0": [
  null,
  "Maschine konnte nicht hinzugefügt werden: $0"
 ],
 "Failed to change password": [
  null,
  "Passwort konnte nicht geändert werden"
 ],
 "Failed to edit machine: $0": [
  null,
  "Maschine konnte nicht editiert werden: $0"
 ],
 "Fingerprint": [
  null,
  "Fingerabdruck"
 ],
 "Go to now": [
  null,
  "Zu 'Jetzt' gehen"
 ],
 "Hand Held": [
  null,
  "Hand gehalten"
 ],
 "Host Name": [
  null,
  "Rechnername"
 ],
 "In order to synchronize users, you need to log in to {{#strong}}{{host}}{{/strong}}.": [
  null,
  "Um Benutzer zu synchronisieren, müssen Sie sich bei anmelden {{#strong}}{{host}}{{/strong}}."
 ],
 "Incorrect Host Key": [
  null,
  "Falscher Host-Schlüssel"
 ],
 "Invalid file permissions": [
  null,
  "Ungültige Dateiberechtigungen"
 ],
 "IoT Gateway": [
  null,
  "IoT-Gateway"
 ],
 "Is sshd running on a different port?": [
  null,
  "Läuft sshd auf einem anderen Port?"
 ],
 "Kerberos Based SSO": [
  null,
  "Kerberos-basiertes SSO"
 ],
 "Kerberos Ticket": [
  null,
  "Kerberos Ticket"
 ],
 "Laptop": [
  null,
  "Laptop"
 ],
 "Leave blank to connect to this machine as the currently logged in user. If you enter a different username, that user will always be used when connecting to this machine.": [
  null,
  "Lassen Sie das Feld leer, um sich als aktuell angemeldeter Benutzer mit diesem System zu verbinden. Wenn Sie einen anderen Benutzernamen eingeben, wird dieser Benutzer immer verwendet, wenn Sie eine Verbindung zu diesem System herstellen."
 ],
 "Leave blank to connect to this machine as the currently logged in user{{#default_user}} ({{default_user}}){{/default_user}}. If you enter a different username, that user will always be used connecting to this machine.": [
  null,
  "Lassen Sie das Feld leer, um sich als aktuell angemeldeter Benutzer mit diesem System zu verbinden{{#default_user}} ({{default_user}}){{/default_user}}. Wenn Sie einen anderen Benutzernamen eingeben, wird dieser Benutzer immer für die Verbindung zu diesem System verwendet."
 ],
 "Log In": [
  null,
  "Anmelden"
 ],
 "Log in to {{host}}": [
  null,
  "Anmelden auf {{host}}"
 ],
 "Login Password": [
  null,
  "Passwort"
 ],
 "Lost connection. Trying to reconnect": [
  null,
  "Verbindung verloren. "
 ],
 "Low Profile Desktop": [
  null,
  "Low-Profile-Desktop"
 ],
 "Lunch Box": [
  null,
  "Brotdose"
 ],
 "Main Server Chassis": [
  null,
  "Hauptservergehäuse"
 ],
 "Memory": [
  null,
  "Speicher"
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
  "Multi-System-Chassis"
 ],
 "Network": [
  null,
  "Netzwerk"
 ],
 "New password was not accepted": [
  null,
  "Das neue Passwort wurde nicht akzeptiert"
 ],
 "No such file or directory": [
  null,
  "Datei oder Verzeichnis nicht vorhanden"
 ],
 "Not a valid private key": [
  null,
  "Ungültiger privater Schlüssel"
 ],
 "Notebook": [
  null,
  "Notizbuch"
 ],
 "Old password not accepted": [
  null,
  "Altes Passwort wurde nicht akzeptiert"
 ],
 "Other": [
  null,
  "Weitere"
 ],
 "Password": [
  null,
  "Passwort"
 ],
 "Password not accepted": [
  null,
  "Passwort wurde nicht akzeptiert"
 ],
 "Peripheral Chassis": [
  null,
  "Peripheriechassis"
 ],
 "Pizza Box": [
  null,
  "Pizza-Box"
 ],
 "Port": [
  null,
  "Port"
 ],
 "Portable": [
  null,
  "tragbar"
 ],
 "Prompting via ssh-add timed out": [
  null,
  "Die Aufforderung über ssh-add ist abgelaufen"
 ],
 "Prompting via ssh-keygen timed out": [
  null,
  "Die Aufforderung über ssh-keygen ist abgelaufen"
 ],
 "Public Key": [
  null,
  "Öffentlicher Schlüssel"
 ],
 "RAID Chassis": [
  null,
  "RAID-Chassis"
 ],
 "Rack Mount Chassis": [
  null,
  "Rack-Einbaugehäuse"
 ],
 "Sealed-case PC": [
  null,
  "PC mit versiegeltem Gehäuse"
 ],
 "Select the users that you would like to be synchronized with {{#strong}}{{host}}{{/strong}}": [
  null,
  "Wählen Sie die Nutzer aus, die mit {{#strong}}{{host}}{{/strong}} synchronisiert werden sollen"
 ],
 "Servers": [
  null,
  "Server"
 ],
 "Set": [
  null,
  "Einstellen"
 ],
 "Space-saving Computer": [
  null,
  "Platzsparender Computer"
 ],
 "Stick PC": [
  null,
  "Stick PC"
 ],
 "Sub Chassis": [
  null,
  "Sub-Chassis"
 ],
 "Sub Notebook": [
  null,
  "Subnotizbuch"
 ],
 "Synchronize": [
  null,
  "Synchronisieren"
 ],
 "Synchronize users": [
  null,
  "Benutzer synchronisieren"
 ],
 "Tablet": [
  null,
  "Tablett"
 ],
 "The IP address or host name cannot contain whitespace.": [
  null,
  "IP Adresse oder Hostname darf keine Leerzeichen enthalten."
 ],
 "The authenticity of host {{#strong}}{{host}}{{/strong}} can't be established. Are you sure you want to continue connecting?": [
  null,
  "Die Authentizität von Host {{#strong}}{{host}}{{/strong}} kann nicht bestätigt werden. Sind Sie sicher, dass Sie fortfahren wollen?"
 ],
 "The key of {{#strong}}{{host}}{{/strong}} does not match the key previously in use. Unless this machine was recently replaced, it is likely that someone is trying to attack your connection to this machine.": [
  null,
  "Der Schlüssel von {{#strong}}{{host}}{{/strong}} stimmt nicht mit dem zuletzt benutzten Schlüssel überein. Falls die Maschine nicht kürzlich ausgetauscht wurde, ist ein Angriff auf die Verbindung zur Maschine sehr wahrscheinlich."
 ],
 "The passwords do not match.": [
  null,
  "Die Passwörter stimmen nicht überein."
 ],
 "The user <b>$0</b> is not permitted to manage servers": [
  null,
  "Der Benutzer <b>$0</b> hat keine Rechte, um Server zu administrieren"
 ],
 "This machine has already been added.": [
  null,
  "Diese Maschine wurde bereits hinzugefügt"
 ],
 "This version of cockpit-ws does not support connecting to a host with an alternate user or port": [
  null,
  "Das Verbinden zu einem Host mit alternativen Benutzernamen oder auf anderen Ports wird von dieser Version von cockpit-ws nicht unterstützt"
 ],
 "To try a different port you will need to upgrade cockpit-ws to a newer version.": [
  null,
  "Um einen anderen Port zu benutzen müssen Sie cockpit-ws aktualisieren."
 ],
 "Tower": [
  null,
  "Turm"
 ],
 "Type a password": [
  null,
  "Geben Sie ein Passwort ein"
 ],
 "Unknown": [
  null,
  "Unbekannt"
 ],
 "Unknown Host Key": [
  null,
  "Unbekannter Host-Schlüssel"
 ],
 "Update": [
  null,
  "Update"
 ],
 "User": [
  null,
  "Benutzer"
 ],
 "User name": [
  null,
  "Benutzername"
 ],
 "Using available credentials": [
  null,
  "Benutze verfügbare Zugangsdaten"
 ],
 "You are connected to {{#strong}}{{host}}{{/strong}}, however in order to synchronize users, a user with superuser privileges is required.": [
  null,
  "Sie sind mit {{#strong}}{{host}}{{/strong}} verbunden, zum Synchronisieren von Nutzern sind jedoch Administratorrechte erforderlich."
 ],
 "You are currently connected directly to this server. You cannot delete it.": [
  null,
  "Sie sind derzeit direkt mit diesem Server verbunden und können ihn deshalb nicht löschen."
 ]
}));
