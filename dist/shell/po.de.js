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
nplurals=2; plural=(n != 1);
return plural;
},
  "language": "de",
  "x-generator": "Zanata 4.6.0"
 },
 "A compatible version of Cockpit is not installed on {{#strong}}{{host}}{{/strong}}.": [
  null,
  "Auf {{#strong}}{{host}}{{/strong}} ist keine kompatible Version von Cockpit installiert."
 ],
 "About Cockpit": [
  null,
  "Über Cockpit"
 ],
 "Account Settings": [
  null,
  "Kontoeinstellungen"
 ],
 "Active Pages": [
  null,
  ""
 ],
 "Add": [
  null,
  "Hinzufügen"
 ],
 "Add Machine to Dashboard": [
  null,
  "Maschine zum Dashboard hinzufügen"
 ],
 "Add key": [
  null,
  "Schlüssel hinzufügen"
 ],
 "Address": [
  null,
  "Adresse"
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
  ""
 ],
 "Cancel": [
  null,
  "Abbrechen"
 ],
 "Cannot connect to an unknown machine": [
  null,
  "Kann nicht zu einer unbekannten Maschine verbinden"
 ],
 "Change Password": [
  null,
  "Passwort ändern"
 ],
 "Checking for public keys": [
  null,
  ""
 ],
 "Choose the language to be used in the application": [
  null,
  "Wählen Sie die in der Applikation zu verwendende Sprache"
 ],
 "Close": [
  null,
  "Schließen"
 ],
 "Close Selected Pages": [
  null,
  ""
 ],
 "Cockpit could not contact the given host $0. Make sure it has ssh running on port $1, or specify another port in the address.": [
  null,
  "Cockpit konnte den angegebenen Host $0 nicht erreichen. Stellen Sie sicher, dass SSH auf Port $1 läuft oder geben Sie einen anderen Port in der Adresse an."
 ],
 "Cockpit had an unexpected internal error. <br/><br/>You can try restarting Cockpit by pressing refresh in your browser. The javascript console contains details about this error (<b>Ctrl-Shift-J</b> in most browsers).": [
  null,
  "Es trat ein unerwarteter interner Fehler auf. <br/><br/>Sie können Versuchen, Cockpit durch Aktualisieren der Seite neu zu starten. Die Javascript Konsole enthält Details zum Fehler (<b>Strg-Umschalt-J</b> in den meisten Browsern)."
 ],
 "Cockpit is an interactive Linux server admin interface.": [
  null,
  "Cockpit ist ein interaktives Administrationsinterface für Linux Server.\n            "
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
  ""
 ],
 "Cockpit was unable to log into {{#strong}}{{host}}{{/strong}}.": [
  null,
  "Cockpit konnte sich bei {{#strong}}{{host}}{{/strong}} nicht einloggen."
 ],
 "Cockpit was unable to log into {{#strong}}{{host}}{{/strong}}. To use this machine with cockpit you will need to enable one of the following authentication methods in the sshd config on {{#strong}}{{host}}{{/strong}}:": [
  null,
  ""
 ],
 "Cockpit was unable to log into {{#strong}}{{host}}{{/strong}}. You can change your authentication credentials below. {{#can_sync}}You may prefer to {{#sync_link}}synchronize accounts and passwords{{/sync_link}}.{{/can_sync}}": [
  null,
  ""
 ],
 "Color": [
  null,
  "Farbe"
 ],
 "Comment": [
  null,
  "Kommentar"
 ],
 "Confirm": [
  null,
  "Bestätigen"
 ],
 "Connect": [
  null,
  "Verbinden"
 ],
 "Connecting simultaneously to more than {{ limit }} machines is unsupported.": [
  null,
  "Das gleichzeitige Verbinden zu mehr als  {{ limit }} Maschinen wird nicht unterstützt."
 ],
 "Connecting to the machine": [
  null,
  "Verbindung zur Maschine wird hergestellt"
 ],
 "Could not contact {{host}}": [
  null,
  "Konnte Host {{host}} nicht erreichen"
 ],
 "Couldn't connect to the machine": [
  null,
  "Verbindung zur Maschine konnte nicht hergstellt werden"
 ],
 "Details": [
  null,
  ""
 ],
 "Disconnected": [
  null,
  "Getrennt"
 ],
 "Display Language": [
  null,
  "Anzeigesprache"
 ],
 "Enter IP address or host name": [
  null,
  "Geben Sie die IP Adresse oder den Hostnamen an"
 ],
 "Entering a different password here means you will need to retype it every time you reconnect to this machine": [
  null,
  ""
 ],
 "Error loading users: {{perm_failed}}": [
  null,
  ""
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
  ""
 ],
 "Host": [
  null,
  "Host"
 ],
 "In order to synchronize users, you need to log in to {{#strong}}{{host}}{{/strong}}.": [
  null,
  ""
 ],
 "Incorrect Host Key": [
  null,
  ""
 ],
 "Invalid file permissions": [
  null,
  "Ungültige Dateiberechtigungen"
 ],
 "Is sshd running on a different port?": [
  null,
  ""
 ],
 "Kerberos Based SSO": [
  null,
  ""
 ],
 "Kerberos Ticket": [
  null,
  ""
 ],
 "Leave blank to connect to this machine as the currently logged in user{{#default_user}} ({{default_user}}){{/default_user}}. If you enter a different username, that user will always be used connecting to this machine.": [
  null,
  ""
 ],
 "Licensed under:": [
  null,
  ""
 ],
 "Log In": [
  null,
  "Anmelden"
 ],
 "Log Out": [
  null,
  "Abmelden"
 ],
 "Log in again": [
  null,
  "Erneut anmelden"
 ],
 "Log in to {{host}}": [
  null,
  "Anmelden auf {{host}}"
 ],
 "Login Password": [
  null,
  ""
 ],
 "Login has escalated admin privileges": [
  null,
  "Anmeldung hat Administrator-Rechte"
 ],
 "Machines": [
  null,
  "Maschinen"
 ],
 "New Password": [
  null,
  "Neues Passwort"
 ],
 "New password was not accepted": [
  null,
  "Das neue Passwort wurde nicht akzeptiert"
 ],
 "No matching files found": [
  null,
  ""
 ],
 "No such file or directory": [
  null,
  "Datei oder Verzeichnis nicht vorhanden"
 ],
 "Not a valid private key": [
  null,
  "Ungültiger privater Schlüssel"
 ],
 "Off": [
  null,
  "Aus"
 ],
 "Ok": [
  null,
  ""
 ],
 "Old Password": [
  null,
  "Altes Passwort"
 ],
 "Old password not accepted": [
  null,
  "Altes Passwort wurde nicht akzeptiert"
 ],
 "On": [
  null,
  "Ein"
 ],
 "Ooops!": [
  null,
  "Ooops!"
 ],
 "Password": [
  null,
  "Passwort"
 ],
 "Password not accepted": [
  null,
  "Passwort wurde nicht akzeptiert"
 ],
 "Password not usable for privileged tasks or to connect to other machines": [
  null,
  ""
 ],
 "Path to file": [
  null,
  ""
 ],
 "Port": [
  null,
  ""
 ],
 "Privileged": [
  null,
  "Privilegiert"
 ],
 "Project website": [
  null,
  ""
 ],
 "Prompting via ssh-add timed out": [
  null,
  ""
 ],
 "Prompting via ssh-keygen timed out": [
  null,
  ""
 ],
 "Public Key": [
  null,
  ""
 ],
 "Reconnect": [
  null,
  "Erneut verbinden"
 ],
 "Reuse my password for privileged tasks and to connect to other machines": [
  null,
  "Mein Passwort für Administrator-Aufgaben und zum Verbinden zu anderen Maschinen verwenden"
 ],
 "Select": [
  null,
  ""
 ],
 "Select the users that you would like to be synchronized with {{#strong}}{{host}}{{/strong}}": [
  null,
  "Wählen Sie die Nutzer aus, die mit {{#strong}}{{host}}{{/strong}} synchronisiert werden sollen"
 ],
 "Synchronize": [
  null,
  "Synchronisieren"
 ],
 "Synchronize users": [
  null,
  "Benutzer synchronisieren"
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
 "The machine is restarting": [
  null,
  "Die Maschine startet neu"
 ],
 "The passwords do not match.": [
  null,
  "Die Passwörter stimmen nicht überein."
 ],
 "There are currently no active pages": [
  null,
  ""
 ],
 "This machine has already been added.": [
  null,
  "Diese Maschine wurde bereits hinzugefügt"
 ],
 "This version of cockpit-ws does not support connecting to a host with an alternate user or port": [
  null,
  "Das Verbinden zu einem Host mit alternativen Benutzernamen oder auf anderen Ports wird von dieser Version von cockpit-ws nicht unterstützt"
 ],
 "Tip: Make your key password match your login password to automatically authenticate against other systems.": [
  null,
  "Tipp: Wenn Ihr Schlüsselpasswort mit Ihrem Login-Passwort übereinstimmt, können Sie sich an anderen Systemen automatisiert anmelden."
 ],
 "To try a different port you will need to upgrade cockpit-ws to a newer version.": [
  null,
  "Um einen anderen Port zu benutzen müssen Sie cockpit-ws aktualisieren."
 ],
 "Too many files found": [
  null,
  ""
 ],
 "Troubleshoot": [
  null,
  "Fehlersuche"
 ],
 "Try to reconnect": [
  null,
  "Versuche neu zu verbinden"
 ],
 "Type": [
  null,
  "Typ"
 ],
 "Type a password": [
  null,
  "Geben Sie ein Passwort ein"
 ],
 "Unexpected error": [
  null,
  "Unerwarteter Fehler"
 ],
 "Unknown Host Key": [
  null,
  "Unbekannter Host-Schlüssel"
 ],
 "Unlock Key": [
  null,
  ""
 ],
 "Update": [
  null,
  "Update"
 ],
 "Use the following keys to authenticate against other systems": [
  null,
  "Benutze die folgenen Schlüssel zur Authentifizierung an anderen Systemen"
 ],
 "User name": [
  null,
  "Benutzername"
 ],
 "Using available credentials": [
  null,
  "Benutze verfügbare Zugangsdaten"
 ],
 "Version": [
  null,
  "Version"
 ],
 "You are connected to {{#strong}}{{host}}{{/strong}}, however in order to synchronize users, a user with superuser privileges is required.": [
  null,
  "Sie sind mit {{#strong}}{{host}}{{/strong}} verbunden, zum Synchronisieren von Nutzern sind jedoch Administratorrechte erforderlich."
 ],
 "You can remove the previously stored key by running the following command": [
  null,
  "Sie können den zuvor gespeicherten Schlüssel mit dem folgenden Befehl entfernen"
 ],
 "active": [
  null,
  "Aktiv"
 ]
}));
