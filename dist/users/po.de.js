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
 "Image Builder": [
  null,
  "Image Builder"
 ],
 "Invalid expiration date": [
  null,
  "Ungültiges Ablaufdatum"
 ],
 "Invalid key": [
  null,
  "Ungültiger Schlüssel"
 ],
 "Invalid number of days": [
  null,
  "Ungültige Anzahl von Tagen"
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
 "Lock account on $0": [
  null,
  "Konto sperren auf $0"
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
 "Old Password": [
  null,
  "Altes Passwort"
 ],
 "Old password not accepted": [
  null,
  "Altes Passwort wurde nicht akzeptiert"
 ],
 "Password": [
  null,
  "Passwort"
 ],
 "Password Expiration": [
  null,
  "Passwort ablaufen"
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
  "Passwort muss geändert werden"
 ],
 "Paste the contents of your public SSH key file here": [
  null,
  "Fügen Sie hier den Inhalt Ihrer öffentlichen SSH-Schlüsseldatei ein"
 ],
 "Please specify an expiration date": [
  null,
  "Bitte geben Sie ein Ablaufdatum an"
 ],
 "Prompting via passwd timed out": [
  null,
  "Die Aufforderung über passwd ist abgelaufen"
 ],
 "Require password change every $0 days": [
  null,
  "Erfordert jedes Mal ein Passwort $0 Tage"
 ],
 "Require password change on $0": [
  null,
  "Kennwortänderung an erforderlich $0"
 ],
 "Reset": [
  null,
  "Zurücksetzen"
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
 "The account '$0' will be forced to change their password on next login": [
  null,
  "Das Konto '$0'wird gezwungen sein Passwort bei der nächsten Anmeldung zu ändern"
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
 "You must wait longer to change your password": [
  null,
  "Sie müssen länger warten, um Ihr Passwort zu ändern"
 ],
 "translatable": [
  null,
  "übersetzbar"
 ],
 "page-title\u0004Accounts": [
  null,
  "Konten"
 ]
}));
