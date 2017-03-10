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
  "x-generator": "Zanata 3.9.6"
 },
 "$0 day": [
  "$0 days",
  "",
  ""
 ],
 "$0 hour": [
  "$0 hours",
  "",
  ""
 ],
 "$0 minute": [
  "$0 minutes",
  "",
  ""
 ],
 "$0 month": [
  "$0 months",
  "",
  ""
 ],
 "$0 week": [
  "$0 weeks",
  "",
  ""
 ],
 "$0 year": [
  "$0 years",
  "",
  ""
 ],
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
  ""
 ],
 "Add": [
  null,
  "Hinzufügen"
 ],
 "Add Machine to Dashboard": [
  null,
  ""
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
  ""
 ],
 "Available": [
  null,
  ""
 ],
 "Avatar": [
  null,
  ""
 ],
 "CPU": [
  null,
  "CPU"
 ],
 "Cancel": [
  null,
  "Abbrechen"
 ],
 "Checking for public keys": [
  null,
  ""
 ],
 "Close": [
  null,
  "Schliessen"
 ],
 "Cockpit could not contact the given host $0. Make sure it has ssh running on port $1, or specify another port in the address.": [
  null,
  ""
 ],
 "Cockpit is not installed": [
  null,
  ""
 ],
 "Cockpit was unable to contact {{#strong}}{{host}}{{/strong}}.": [
  null,
  ""
 ],
 "Cockpit was unable to log in to {{#strong}}{{host}}{{/strong}}. {{#can_sync}}You may want to try to {{#sync_link}}synchronize users{{/sync_link}}.{{/can_sync}} For more authentication options and troubleshooting support please upgrade cockpit-ws to a newer version.": [
  null,
  ""
 ],
 "Cockpit was unable to log into {{#strong}}{{host}}{{/strong}}.": [
  null,
  ""
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
  ""
 ],
 "Connect": [
  null,
  ""
 ],
 "Connecting simultaneously to more than {{ limit }} machines is unsupported.": [
  null,
  ""
 ],
 "Could not contact {{host}}": [
  null,
  ""
 ],
 "Dashboard": [
  null,
  ""
 ],
 "Disk I/O": [
  null,
  "Datenträger ist OK"
 ],
 "Edit Server": [
  null,
  ""
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
 "Go to now": [
  null,
  "Zu 'Jetzt' gehen"
 ],
 "Host Name": [
  null,
  ""
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
 "Leave blank to connect to this machine as the currently logged in user. If you enter a different username, that user will always be used when connecting to this machine.": [
  null,
  ""
 ],
 "Leave blank to connect to this machine as the currently logged in user{{#user}} ({{user}}){{/user}}. If you enter a different username, that user will always be used connecting to this machine.": [
  null,
  ""
 ],
 "Log In": [
  null,
  ""
 ],
 "Log in to {{host}}": [
  null,
  ""
 ],
 "Login Password": [
  null,
  ""
 ],
 "Lost connection. Trying to reconnect": [
  null,
  "Verbindung verloren. "
 ],
 "Memory": [
  null,
  "Speicher"
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
 "Off": [
  null,
  "Aus"
 ],
 "Old password not accepted": [
  null,
  "Altes Passwort wurde nicht akzeptiert"
 ],
 "On": [
  null,
  "Ein"
 ],
 "Password": [
  null,
  "Passwort"
 ],
 "Password not accepted": [
  null,
  "Passwort wurde nicht akzeptiert"
 ],
 "Port": [
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
 "Select the users that you would like to be synchronized with {{#strong}}{{host}}{{/strong}}": [
  null,
  ""
 ],
 "Servers": [
  null,
  ""
 ],
 "Set": [
  null,
  ""
 ],
 "Synchronize": [
  null,
  ""
 ],
 "Synchronize users": [
  null,
  ""
 ],
 "The IP address or host name cannot contain whitespace.": [
  null,
  "IP Adresse oder Hostname darf keine Leerzeichen enthalten."
 ],
 "The authenticity of host {{#strong}}{{host}}{{/strong}} can't be established. Are you sure you want to continue connecting?": [
  null,
  ""
 ],
 "The key of {{#strong}}{{host}}{{/strong}} does not match the key previously in use. Unless this machine was recently replaced, it is likely that someone is trying to attack your connection to this machine.": [
  null,
  ""
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
  ""
 ],
 "To try a different port you will need to upgrade cockpit-ws to a newer version.": [
  null,
  ""
 ],
 "Type a password": [
  null,
  ""
 ],
 "Unknown Host Key": [
  null,
  ""
 ],
 "Update": [
  null,
  ""
 ],
 "User": [
  null,
  "Benutzer"
 ],
 "User name": [
  null,
  ""
 ],
 "Using available credentials": [
  null,
  ""
 ],
 "You are connected to {{#strong}}{{host}}{{/strong}}, however in order to synchronize users, a user with superuser privileges is required.": [
  null,
  ""
 ],
 "You are currently connected directly to this server. You cannot delete it.": [
  null,
  "Sie sind derzeit direkt mit diesem Server verbunden und können ihn deshalb nicht löschen."
 ],
 "You can remove the previously stored key by running the following command": [
  null,
  ""
 ]
}));
