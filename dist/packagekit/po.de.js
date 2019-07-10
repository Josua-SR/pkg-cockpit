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
 "$0 Package": [
  "$0 Packages",
  "",
  ""
 ],
 "$0 is not available from any repository.": [
  null,
  "$0 ist in keinem Repository verfügbar."
 ],
 "$0 update": [
  "$0 updates",
  "$0 Aktualisierung",
  "$0 Aktualisierungen"
 ],
 "$0 will be installed.": [
  null,
  "$0 wird installiert."
 ],
 "$1 security fix": [
  "$1 security fixes",
  "$1 Sicherheitsupdate",
  "$1 Sicherheitsupdates"
 ],
 ", including $1 security fix": [
  ", including $1 security fixes",
  ", einschließlich $1 Sicherheitsupdate",
  ", einschließlich $1 Sicherheitsupdates"
 ],
 "Additional packages:": [
  null,
  "Zusatzpakete:"
 ],
 "Apply all updates": [
  null,
  "Wenden Sie alle Updates an"
 ],
 "Apply security updates": [
  null,
  "Anwenden von Sicherheitsupdates"
 ],
 "Applying updates": [
  null,
  "Aktualisierungen anwenden"
 ],
 "Applying updates failed": [
  null,
  "Das Anwenden von Updates ist fehlgeschlagen"
 ],
 "Automatic Updates": [
  null,
  "Automatische Updates"
 ],
 "Available Updates": [
  null,
  "Verfügbare Updates"
 ],
 "Bugs:": [
  null,
  "Bugs:"
 ],
 "Cancel": [
  null,
  "Abbrechen"
 ],
 "Check for Updates": [
  null,
  "Nach Aktualisierungen suchen"
 ],
 "Checking installed software": [
  null,
  "Installierte Software überprüfen"
 ],
 "Details": [
  null,
  "Details"
 ],
 "Downloaded": [
  null,
  "Heruntergeladen"
 ],
 "Downloading": [
  null,
  "Herunterladen"
 ],
 "Downloading $0": [
  null,
  "wird heruntergeladen $0"
 ],
 "Errata:": [
  null,
  "Errata:"
 ],
 "Fridays": [
  null,
  ""
 ],
 "Ignore": [
  null,
  "Ignorieren"
 ],
 "Initializing...": [
  null,
  "Initialisierung ..."
 ],
 "Install": [
  null,
  "Installation"
 ],
 "Install All Updates": [
  null,
  "Installieren Sie alle Updates"
 ],
 "Install Security Updates": [
  null,
  "Installieren Sie Sicherheitsupdates"
 ],
 "Install Software": [
  null,
  "Software installieren"
 ],
 "Installed": [
  null,
  "Installiert"
 ],
 "Installing": [
  null,
  "Installation wird ausgeführt"
 ],
 "Installing $0": [
  null,
  "$0 wird installiert"
 ],
 "Last checked: $0 ago": [
  null,
  "Zuletzt geprüft: $0 vor"
 ],
 "Loading available updates failed": [
  null,
  "Das Laden verfügbarer Updates ist fehlgeschlagen"
 ],
 "Loading available updates, please wait...": [
  null,
  "Verfügbare Updates werden geladen, bitte warten ..."
 ],
 "Mondays": [
  null,
  ""
 ],
 "Name": [
  null,
  "Name"
 ],
 "No updates pending": [
  null,
  "Keine Updates ausstehend"
 ],
 "Ok": [
  null,
  "OK"
 ],
 "Package information": [
  null,
  "Paket informationen"
 ],
 "PackageKit crashed": [
  null,
  "PackageKit ist abgestürzt"
 ],
 "PackageKit is not installed": [
  null,
  "PackageKit ist nicht installiert"
 ],
 "PackageKit reported error code $0": [
  null,
  "PackageKit hat Fehlercode gemeldet $0"
 ],
 "Refreshing package information": [
  null,
  "Paketinformationen aktualisieren"
 ],
 "Register…": [
  null,
  "Registrieren…"
 ],
 "Removals:": [
  null,
  "Umzüge:"
 ],
 "Removing $0": [
  null,
  "Entfernen $0"
 ],
 "Restart Now": [
  null,
  "Jetzt neustarten"
 ],
 "Restart Recommended": [
  null,
  "Neustart empfohlen"
 ],
 "Restarting": [
  null,
  "Neustart"
 ],
 "Saturdays": [
  null,
  ""
 ],
 "Set up": [
  null,
  "Konfiguration"
 ],
 "Setting up": [
  null,
  "Einrichten"
 ],
 "Severity": [
  null,
  "Schweregrad"
 ],
 "Severity:": [
  null,
  "Schwere:"
 ],
 "Software Updates": [
  null,
  "Aktualisierungen"
 ],
 "Some other program is currently using the package manager, please wait...": [
  null,
  "Ein anderes Programm verwendet derzeit den Paketmanager, bitte warten Sie ..."
 ],
 "Sundays": [
  null,
  ""
 ],
 "System is up to date": [
  null,
  "System ist aktualisiert"
 ],
 "This system is not registered": [
  null,
  "Dieses System ist nicht registriert"
 ],
 "This web console will be updated.": [
  null,
  "Diese Webkonsole wird aktualisiert."
 ],
 "Thursdays": [
  null,
  ""
 ],
 "To get software updates, this system needs to be registered with Red Hat, either using the Red Hat Customer Portal or a local subscription server.": [
  null,
  "Um Aktualisierungen zu erhalten, muss dieses System bei Red Hat registriert sein; entweder im Red Hat Customer Portal oder einem lokalen Subscription-Dienst."
 ],
 "Total size: $0": [
  null,
  "Gesamtgröße: $0"
 ],
 "Tuesdays": [
  null,
  ""
 ],
 "Update History": [
  null,
  "Update-Verlauf"
 ],
 "Update Log": [
  null,
  "Aktualisierungsprotokoll"
 ],
 "Updated": [
  null,
  "Aktualisiert"
 ],
 "Updated packages may require a restart to take effect.": [
  null,
  "Aktualisierte Pakete erfordern möglicherweise einen Neustart, um wirksam zu werden."
 ],
 "Updating": [
  null,
  "Aktualisiere"
 ],
 "Verified": [
  null,
  "Verifiziert"
 ],
 "Verifying": [
  null,
  "Überprüfung läuft"
 ],
 "Version": [
  null,
  "Version"
 ],
 "Waiting for other software management operations to finish": [
  null,
  "Warten, bis andere Software-Verwaltungsvorgänge abgeschlossen sind"
 ],
 "Wednesdays": [
  null,
  ""
 ],
 "Your browser will disconnect, but this does not affect the update process. You can reconnect in a few moments to continue watching the progress.": [
  null,
  "Ihr Browser wird die Verbindung trennen, der Update-Vorgang wird dadurch jedoch nicht beeinflusst. Sie können die Verbindung in wenigen Augenblicken wiederherstellen, um den Fortschritt fortzusetzen."
 ],
 "Your server will close the connection soon. You can reconnect after it has restarted.": [
  null,
  "Ihr Server wird die Verbindung bald beenden. Sie können die Verbindung nach dem Neustart wiederherstellen."
 ],
 "and restart the machine automatically.": [
  null,
  "und starten Sie die Maschine automatisch neu."
 ],
 "at": [
  null,
  "um"
 ],
 "bug fix": [
  null,
  "Bug-Fix"
 ],
 "enhancement": [
  null,
  "Verbesserung"
 ],
 "every day": [
  null,
  "jeden Tag"
 ],
 "security": [
  null,
  "Sicherheit"
 ],
 "undefined": [
  null,
  "nicht definiert"
 ]
}));
