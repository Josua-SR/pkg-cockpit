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
 "Access": [
  null,
  "Zugriff"
 ],
 "Account Expiration": [
  null,
  ""
 ],
 "Account not available or cannot be edited.": [
  null,
  "Konto nicht verfügbar oder Änderungen nicht möglich."
 ],
 "Accounts": [
  null,
  "Konten"
 ],
 "Add key": [
  null,
  "Schlüssel hinzufügen"
 ],
 "Add public key": [
  null,
  "Öffentlichen Schlüssel hinzufügen"
 ],
 "Adding key": [
  null,
  "Schlüssel wird hinzugefügt"
 ],
 "Authorized Public SSH Keys": [
  null,
  "Autorisierte öffentliche SSH-Schlüssel"
 ],
 "Back to Accounts": [
  null,
  ""
 ],
 "Cancel": [
  null,
  "Abbrechen"
 ],
 "Change": [
  null,
  ""
 ],
 "Close": [
  null,
  "Schließen"
 ],
 "Confirm": [
  null,
  "Bestätigen"
 ],
 "Confirm New Password": [
  null,
  "Neues Passwort wiederholen"
 ],
 "Container Administrator": [
  null,
  "Container Administrator"
 ],
 "Create": [
  null,
  "Erstellen"
 ],
 "Create New Account": [
  null,
  "Neues Konto anlegen"
 ],
 "Delete": [
  null,
  "Löschen"
 ],
 "Delete $0": [
  null,
  "$0 löschen"
 ],
 "Delete Files": [
  null,
  "Dateien löschen"
 ],
 "Error": [
  null,
  "Fehler"
 ],
 "Error saving authorized keys: ": [
  null,
  "Fehler beim Speichern der autorisierten Schlüssel:"
 ],
 "Excellent password": [
  null,
  "Perfektes Passwort!"
 ],
 "Failed to change password": [
  null,
  "Passwort konnte nicht geändert werden"
 ],
 "Failed to load authorized keys.": [
  null,
  ""
 ],
 "Force Change": [
  null,
  ""
 ],
 "Force password change": [
  null,
  ""
 ],
 "Full Name": [
  null,
  ""
 ],
 "Image Builder": [
  null,
  ""
 ],
 "Invalid expiration date": [
  null,
  ""
 ],
 "Invalid key": [
  null,
  "Ungültiger Schlüssel"
 ],
 "Invalid number of days": [
  null,
  ""
 ],
 "Last Login": [
  null,
  ""
 ],
 "Local Accounts": [
  null,
  ""
 ],
 "Lock Account": [
  null,
  "Konto sperren"
 ],
 "Lock account on $0": [
  null,
  ""
 ],
 "Logged In": [
  null,
  "Angemeldet"
 ],
 "Never": [
  null,
  "Nie"
 ],
 "Never expire password": [
  null,
  ""
 ],
 "Never lock account": [
  null,
  ""
 ],
 "New Password": [
  null,
  "Neues Passwort"
 ],
 "New password was not accepted": [
  null,
  "Das neue Passwort wurde nicht akzeptiert"
 ],
 "No real name specified": [
  null,
  "Es wurde kein echter Name angegeben"
 ],
 "No user name specified": [
  null,
  "Es wurde kein Benutzername angegeben."
 ],
 "Off": [
  null,
  "Aus"
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
 "Password": [
  null,
  "Passwort"
 ],
 "Password Expiration": [
  null,
  ""
 ],
 "Password is not acceptable": [
  null,
  "Das Passwort kann nicht akzeptiert werden"
 ],
 "Password is too weak": [
  null,
  "Das gewählte Passwort ist zu schwach"
 ],
 "Password must be changed": [
  null,
  ""
 ],
 "Paste the contents of your public SSH key file here": [
  null,
  ""
 ],
 "Please specify an expiration date": [
  null,
  ""
 ],
 "Prompting via passwd timed out": [
  null,
  ""
 ],
 "Require password change every $0 days": [
  null,
  ""
 ],
 "Require password change on $0": [
  null,
  ""
 ],
 "Reset": [
  null,
  ""
 ],
 "Roles": [
  null,
  "Rollen"
 ],
 "Server Administrator": [
  null,
  "Server Administrator"
 ],
 "Set": [
  null,
  ""
 ],
 "Set Password": [
  null,
  "Passwort setzen"
 ],
 "Terminate Session": [
  null,
  "Sitzung beenden"
 ],
 "The account '$0' will be forced to change their password on next login": [
  null,
  ""
 ],
 "The key you provided was not valid.": [
  null,
  "Der von Ihnen angegebene Schlüssel ist ungültig."
 ],
 "The passwords do not match": [
  null,
  "Die Passwörter stimmen nicht überein"
 ],
 "The user <b>$0</b> is not permitted to modify accounts": [
  null,
  "Der Benutzer <b>$0</b> hat keine Rechte, Konten zu verändern"
 ],
 "The user name can only consist of letters from a-z, digits, dots, dashes and underscores.": [
  null,
  "Der Benutzername darf nur aus Buchstaben, Zahlen, Punkten, Binde- und Unterstrichen bestehen."
 ],
 "There are no authorized public keys for this account.": [
  null,
  "Für dieses Konto existieren keine autorisierten öffentlichen Schlüssel"
 ],
 "This user name already exists": [
  null,
  "Dieser Benutzername existiert bereits"
 ],
 "Unable to delete root account": [
  null,
  "Root-Konto konnte nicht gelöscht werden"
 ],
 "Unable to rename root account": [
  null,
  "Root-Konto konnte nicht umbenannt werden"
 ],
 "Unexpected error": [
  null,
  "Unerwarteter Fehler"
 ],
 "Unnamed": [
  null,
  "Unbennant"
 ],
 "User Name": [
  null,
  "Benutzername"
 ],
 "Validating key": [
  null,
  "Schlüssel wird überprüft"
 ],
 "You do not have permission to view the authorized public keys for this account.": [
  null,
  "Sie haben keine Berechtigung, die autorisierten öffentlichen Schlüssel von diesem Konto anzuzeigen."
 ],
 "translatable": [
  null,
  ""
 ],
 "page-title\u0004Accounts": [
  null,
  "Konten"
 ]
}));
