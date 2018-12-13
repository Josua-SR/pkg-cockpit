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
  "x-generator": "Zanata 4.6.2"
 },
 "Access": [
  null,
  "Zugriff"
 ],
 "Account Expiration": [
  null,
  "Kontoablauf"
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
 "Authorized Public SSH Keys": [
  null,
  "Autorisierte öffentliche SSH-Schlüssel"
 ],
 "Back to Accounts": [
  null,
  "Zurück zu den Konten"
 ],
 "Cancel": [
  null,
  "Abbrechen"
 ],
 "Change": [
  null,
  "Ändern"
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
 "Delete Files": [
  null,
  "Dateien löschen"
 ],
 "Failed to load authorized keys.": [
  null,
  "Fehler beim Laden autorisierter Schlüssel."
 ],
 "Force Change": [
  null,
  "Änderung erzwingen"
 ],
 "Force password change": [
  null,
  "Kennwort ändern"
 ],
 "Full Name": [
  null,
  "Vollständiger Name"
 ],
 "Invalid key": [
  null,
  "Ungültiger Schlüssel"
 ],
 "Last Login": [
  null,
  "Letzte Anmeldung"
 ],
 "Local Accounts": [
  null,
  "Lokale Konten"
 ],
 "Lock Account": [
  null,
  "Konto sperren"
 ],
 "Never expire password": [
  null,
  "Passwort niemals verfallen"
 ],
 "Never lock account": [
  null,
  "Sperren Sie niemals Ihr Konto"
 ],
 "New Password": [
  null,
  "Neues Passwort"
 ],
 "Off": [
  null,
  "Aus"
 ],
 "Old Password": [
  null,
  "Altes Passwort"
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
  "Passwort ablaufen"
 ],
 "Paste the contents of your public SSH key file here": [
  null,
  "Fügen Sie hier den Inhalt Ihrer öffentlichen SSH-Schlüsseldatei ein"
 ],
 "Reset": [
  null,
  "Zurücksetzen"
 ],
 "Roles": [
  null,
  "Rollen"
 ],
 "Set": [
  null,
  "Einstellen"
 ],
 "Set Password": [
  null,
  "Passwort setzen"
 ],
 "Terminate Session": [
  null,
  "Sitzung beenden"
 ],
 "There are no authorized public keys for this account.": [
  null,
  "Für dieses Konto existieren keine autorisierten öffentlichen Schlüssel"
 ],
 "Unnamed": [
  null,
  "Unbennant"
 ],
 "User Name": [
  null,
  "Benutzername"
 ],
 "You do not have permission to view the authorized public keys for this account.": [
  null,
  "Sie haben keine Berechtigung, die autorisierten öffentlichen Schlüssel von diesem Konto anzuzeigen."
 ],
 "translatable": [
  null,
  "übersetzbar"
 ]
}));
