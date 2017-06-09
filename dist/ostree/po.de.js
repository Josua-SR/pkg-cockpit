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
 "$0 key ID": [
  null,
  "$0 Schlüssel-ID"
 ],
 "$0 package": [
  null,
  "$0 Paket"
 ],
 "$0 packages": [
  null,
  "$0 Pakete"
 ],
 "- Add New Repository": [
  null,
  "- Neues Repository hinzufügen"
 ],
 "Add": [
  null,
  "Hinzufügen"
 ],
 "Add Another Key": [
  null,
  "Einen weiteren Schlüssel hinzufügen"
 ],
 "Additions": [
  null,
  ""
 ],
 "Apply": [
  null,
  "Anwenden"
 ],
 "Available": [
  null,
  ""
 ],
 "Begins with '-----BEGIN PGP PUBLIC KEY BLOCK-----'": [
  null,
  "Beginnt mit '-----BEGIN PGP PUBLIC KEY BLOCK-----'"
 ],
 "Cancel": [
  null,
  "Abbrechen"
 ],
 "Change Repository": [
  null,
  "Repository ändern"
 ],
 "Check for Updates": [
  null,
  "Nach Aktualisierungen suchen"
 ],
 "Checking for updates": [
  null,
  "Suche nach Aktualisierungen"
 ],
 "Connecting to OSTree": [
  null,
  "Verbinde zu OSTree"
 ],
 "Couldn't load settings for '$0': $1": [
  null,
  "Benutzerdaten konnten nicht geladen werden"
 ],
 "Currently using:": [
  null,
  ""
 ],
 "Default": [
  null,
  "Standard"
 ],
 "Delete": [
  null,
  "Löschen"
 ],
 "Downgrades": [
  null,
  ""
 ],
 "Error loading remotes: $0": [
  null,
  "Fehler beim Speichern der autorisierten Schlüssel:"
 ],
 "Expired Signature": [
  null,
  ""
 ],
 "Failed": [
  null,
  "Fehlgeschlagen"
 ],
 "Good Signature": [
  null,
  ""
 ],
 "Invalid Signature": [
  null,
  ""
 ],
 "Name": [
  null,
  "Name"
 ],
 "No Deployments": [
  null,
  ""
 ],
 "No OSTree deployments found": [
  null,
  ""
 ],
 "No configuration data found": [
  null,
  "Unbekannte Konfiguration"
 ],
 "No signature avaliable": [
  null,
  ""
 ],
 "Not authorized to update software on this system": [
  null,
  ""
 ],
 "OS $0 not found": [
  null,
  "OS $0 nicht gefunden"
 ],
 "OSTree is not available on this system": [
  null,
  ""
 ],
 "Operating System": [
  null,
  ""
 ],
 "Operating System Updates": [
  null,
  ""
 ],
 "Origin": [
  null,
  ""
 ],
 "Packages": [
  null,
  ""
 ],
 "Please provide a valid URL": [
  null,
  "Bitte geben Sie einen gültigen Namespace an."
 ],
 "Please provide a valid name": [
  null,
  ""
 ],
 "Rebase and Reboot": [
  null,
  ""
 ],
 "Receiving delta parts": [
  null,
  "Empfange Delta-Teile"
 ],
 "Receiving metadata objects": [
  null,
  "Empfange Metadaten-Objekte"
 ],
 "Receiving objects: $0%": [
  null,
  "Empfange Objekte: $0%"
 ],
 "Reconnect": [
  null,
  "Erneut verbinden"
 ],
 "Released": [
  null,
  ""
 ],
 "Removals": [
  null,
  ""
 ],
 "Roll Back and Reboot": [
  null,
  "Rückgängig machen und Neustarten"
 ],
 "Running": [
  null,
  "Läuft"
 ],
 "Scanning metadata": [
  null,
  "Untersuche Metadaten"
 ],
 "Signature": [
  null,
  "Signatur"
 ],
 "Signed by": [
  null,
  "Signiert von"
 ],
 "Software Updates": [
  null,
  "Software Updates"
 ],
 "Status": [
  null,
  "Status"
 ],
 "This deployment contains the same packages as your currently booted system": [
  null,
  ""
 ],
 "Tree": [
  null,
  ""
 ],
 "URL": [
  null,
  "URL"
 ],
 "Unable to communicate with OSTree": [
  null,
  "Kann nicht mit OSTree kommunizieren"
 ],
 "Update and Reboot": [
  null,
  "Aktualisieren und Neustarten"
 ],
 "Updates": [
  null,
  "Aktualisierungen"
 ],
 "Updating": [
  null,
  "Aktualisiere"
 ],
 "Use trusted GPG key": [
  null,
  "Benutze vertrauenswürdigen GPG-Schlüssel"
 ],
 "Version": [
  null,
  "Version"
 ],
 "When": [
  null,
  ""
 ],
 "Writing objects": [
  null,
  "Schreibe Objekte"
 ],
 "at": [
  null,
  ""
 ]
}));
