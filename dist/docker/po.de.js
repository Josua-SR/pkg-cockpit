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
 " (shared with the OS)": [
  null,
  ""
 ],
 "$0 day": [
  "$0 days",
  "$0 Tag",
  "$0 Tage"
 ],
 "$0 hour": [
  "$0 hours",
  "$0 Stunde",
  "$0 Stunden"
 ],
 "$0 minute": [
  "$0 minutes",
  "$0 Minute",
  "$0 Minuten"
 ],
 "$0 month": [
  "$0 months",
  "$0 Monat",
  "$0 Monate"
 ],
 "$0 shares": [
  null,
  "$0 mal geteilt"
 ],
 "$0 week": [
  "$0 weeks",
  "$0 Woche",
  "$0 Wochen"
 ],
 "$0 year": [
  "$0 years",
  "$0 Jahr",
  "$0 Jahre"
 ],
 "${hip}:${hport} -> $cport": [
  null,
  "${hip}:${hport} -> $cport"
 ],
 "Add Additional Storage": [
  null,
  "Zusätzlichen Speicher hinzufügen"
 ],
 "Add Storage": [
  null,
  "Speicher hinzufügen"
 ],
 "Additional Storage": [
  null,
  ""
 ],
 "Advanced TCA": [
  null,
  ""
 ],
 "All In One": [
  null,
  ""
 ],
 "All data on selected disks will be erased and disks will be added to the storage pool.": [
  null,
  "Die ausgewählten Datenträger werden zum Storage Pool hinzugefügt. Dabei werden sämtliche Daten auf den ausgewählten Datenträgern gelöscht."
 ],
 "Always": [
  null,
  ""
 ],
 "Are you sure you want to delete this image?": [
  null,
  ""
 ],
 "Author": [
  null,
  "Autor"
 ],
 "Blade": [
  null,
  ""
 ],
 "Blade enclosure": [
  null,
  ""
 ],
 "Bus Expansion Chassis": [
  null,
  ""
 ],
 "CPU": [
  null,
  "CPU"
 ],
 "CPU priority": [
  null,
  "CPU Priorität"
 ],
 "CPU usage:": [
  null,
  ""
 ],
 "Can&rsquo;t connect to Docker": [
  null,
  "Verbindung zu Docker kann nicht hergestellt werden"
 ],
 "Cancel": [
  null,
  "Abbrechen"
 ],
 "Change": [
  null,
  ""
 ],
 "Change resource limits": [
  null,
  "Ressourcenlimits anpassen"
 ],
 "Change resources limits": [
  null,
  "Ressourcenlimits anpassen"
 ],
 "Close": [
  null,
  "Schließen"
 ],
 "Combined memory usage": [
  null,
  ""
 ],
 "Combined usage of $0 CPU core": [
  "Combined usage of $0 CPU cores",
  "",
  ""
 ],
 "Command": [
  null,
  "Befehl"
 ],
 "Command can't be empty": [
  null,
  "Befehl darf nicht leer sein."
 ],
 "Command:": [
  null,
  "Befehl:"
 ],
 "Commit": [
  null,
  "Befehl"
 ],
 "Commit Image": [
  null,
  ""
 ],
 "Compact PCI": [
  null,
  ""
 ],
 "Configure storage...": [
  null,
  ""
 ],
 "Connecting to Docker": [
  null,
  "Verbinde zu Docker"
 ],
 "Container": [
  null,
  "Container"
 ],
 "Container Name": [
  null,
  "Container Name"
 ],
 "Container is currently marked as not running, but regular stopping failed.": [
  null,
  "Der Container ist zur Zeit als nicht als in Ausführung gekennzeichnet, das reguläre Anhalten schlug jedoch fehlt."
 ],
 "Container is currently running.": [
  null,
  "Der Container läuft zur Zeit."
 ],
 "Container:": [
  null,
  "Container:"
 ],
 "Containers": [
  null,
  "Container"
 ],
 "Convertible": [
  null,
  ""
 ],
 "Could not add all disks": [
  null,
  ""
 ],
 "Could not reset the storage pool": [
  null,
  "Konnte den Storage Pool nicht zurücksetzen"
 ],
 "Created": [
  null,
  "Erstellt"
 ],
 "Created:": [
  null,
  "Erstellt:"
 ],
 "Default": [
  null,
  "Standard"
 ],
 "Delete": [
  null,
  "Löschen"
 ],
 "Delete $0": [
  null,
  "$0 löschen"
 ],
 "Deleting a container will erase all data in it.": [
  null,
  "Das Löschen eines Containers entfernt alle sich darin befindlichen Daten."
 ],
 "Deleting an image will delete it, but you can probably download it again if you need it later.  Unless this image has never been pushed to a repository, that is, in which case you probably can't download it again.": [
  null,
  ""
 ],
 "Desktop": [
  null,
  ""
 ],
 "Detachable": [
  null,
  ""
 ],
 "Details": [
  null,
  ""
 ],
 "Docker is not installed or activated on the system": [
  null,
  "Docker ist auf Ihrem System entweder nicht installiert oder nicht aktiviert"
 ],
 "Docking Station": [
  null,
  ""
 ],
 "Download": [
  null,
  ""
 ],
 "Drive": [
  null,
  ""
 ],
 "Duplicate alias": [
  null,
  "Alias duplizieren"
 ],
 "Duplicate port": [
  null,
  "Port duplizieren"
 ],
 "Embedded PC": [
  null,
  ""
 ],
 "Entrypoint": [
  null,
  ""
 ],
 "Environment": [
  null,
  ""
 ],
 "Erase containers and reset storage pool": [
  null,
  ""
 ],
 "Error message from Docker:": [
  null,
  "Fehlermeldung von Docker:"
 ],
 "Everything": [
  null,
  ""
 ],
 "Exited $ExitCode": [
  null,
  "Beendet $ExitCode"
 ],
 "Expansion Chassis": [
  null,
  ""
 ],
 "Expose container ports": [
  null,
  ""
 ],
 "Failed to start Docker: $0": [
  null,
  "Start von Docker fehlgeschlagen: $0"
 ],
 "Failed to stop Docker scope: $0": [
  null,
  ""
 ],
 "Force Delete": [
  null,
  "Löschen erzwingen"
 ],
 "Free": [
  null,
  "Verfügbar"
 ],
 "Gateway:": [
  null,
  ""
 ],
 "Get new image": [
  null,
  ""
 ],
 "Hand Held": [
  null,
  ""
 ],
 "Hard Disk": [
  null,
  "Festplatte"
 ],
 "IP Address:": [
  null,
  ""
 ],
 "IP Prefix Length:": [
  null,
  ""
 ],
 "Id": [
  null,
  ""
 ],
 "Id:": [
  null,
  ""
 ],
 "Image": [
  null,
  "Bild"
 ],
 "Image $0": [
  null,
  "Bild $0"
 ],
 "Image Search": [
  null,
  ""
 ],
 "Image:": [
  null,
  ""
 ],
 "Images": [
  null,
  ""
 ],
 "Images and running containers": [
  null,
  ""
 ],
 "Information about the Docker storage pool is not available.": [
  null,
  ""
 ],
 "Invalid port": [
  null,
  "Ungültiger Port"
 ],
 "IoT Gateway": [
  null,
  ""
 ],
 "Laptop": [
  null,
  ""
 ],
 "Link to another container": [
  null,
  ""
 ],
 "Links": [
  null,
  "Links"
 ],
 "Links:": [
  null,
  ""
 ],
 "Local Disks": [
  null,
  "$0 Datenträger"
 ],
 "Low Profile Desktop": [
  null,
  ""
 ],
 "Lunch Box": [
  null,
  ""
 ],
 "MAC Address:": [
  null,
  ""
 ],
 "Main Server Chassis": [
  null,
  ""
 ],
 "Memory": [
  null,
  "Speicher"
 ],
 "Memory limit": [
  null,
  "Speicherlimite"
 ],
 "Memory usage:": [
  null,
  ""
 ],
 "MiB": [
  null,
  ""
 ],
 "Mini PC": [
  null,
  ""
 ],
 "Mini Tower": [
  null,
  ""
 ],
 "Mount container volumes": [
  null,
  ""
 ],
 "Multi-system Chassis": [
  null,
  ""
 ],
 "Name": [
  null,
  "Name"
 ],
 "No": [
  null,
  "Nein"
 ],
 "No additional local storage found.": [
  null,
  ""
 ],
 "No alias specified": [
  null,
  "Kein Alias angegeben"
 ],
 "No container specified": [
  null,
  "Kein Container angegeben"
 ],
 "No containers": [
  null,
  ""
 ],
 "No containers that match the current filter": [
  null,
  ""
 ],
 "No images": [
  null,
  ""
 ],
 "No images that match the current filter": [
  null,
  ""
 ],
 "No results for $0": [
  null,
  ""
 ],
 "No running containers": [
  null,
  ""
 ],
 "No running containers that match the current filter": [
  null,
  ""
 ],
 "Not authorized to access Docker on this system": [
  null,
  "Keine Berechtigung, auf diesem System Docker zu verwenden"
 ],
 "Not found": [
  null,
  "Nicht gefunden"
 ],
 "Notebook": [
  null,
  ""
 ],
 "Off": [
  null,
  "Aus"
 ],
 "Ok": [
  null,
  ""
 ],
 "On": [
  null,
  "Ein"
 ],
 "On Failure": [
  null,
  ""
 ],
 "On failure, retry $0 time": [
  "On failure, retry $0 times",
  "",
  ""
 ],
 "Other": [
  null,
  ""
 ],
 "Overview": [
  null,
  ""
 ],
 "Peripheral Chassis": [
  null,
  ""
 ],
 "Pizza Box": [
  null,
  ""
 ],
 "Please confirm deletion of $0": [
  null,
  "Bitte bestätigen Sie das Löschen von $0"
 ],
 "Please confirm forced deletion of $0": [
  null,
  ""
 ],
 "Please try another term": [
  null,
  ""
 ],
 "Portable": [
  null,
  ""
 ],
 "Ports": [
  null,
  "Ports"
 ],
 "Ports:": [
  null,
  ""
 ],
 "Problems": [
  null,
  ""
 ],
 "RAID Chassis": [
  null,
  ""
 ],
 "Rack Mount Chassis": [
  null,
  ""
 ],
 "ReadOnly": [
  null,
  ""
 ],
 "ReadWrite": [
  null,
  ""
 ],
 "Reboot": [
  null,
  "Neustart"
 ],
 "Reformat and add disks": [
  null,
  ""
 ],
 "Repository": [
  null,
  "Repository"
 ],
 "Reset": [
  null,
  ""
 ],
 "Reset Storage Pool": [
  null,
  ""
 ],
 "Resetting the storage pool will erase all containers and release disks in the pool.": [
  null,
  "Das Zurücksetzen des Storage Pool löscht alle Container und Datenträger im Pool."
 ],
 "Restart": [
  null,
  "Neustarten"
 ],
 "Restart Policy": [
  null,
  ""
 ],
 "Restart Policy:": [
  null,
  ""
 ],
 "Retries:": [
  null,
  ""
 ],
 "Run": [
  null,
  "Läuft"
 ],
 "Run Image": [
  null,
  ""
 ],
 "Sealed-case PC": [
  null,
  ""
 ],
 "Security": [
  null,
  "Sicherheit"
 ],
 "Set container environment variables": [
  null,
  "Umgebungsvariablen für Container setzen"
 ],
 "Show all containers": [
  null,
  "Zeige alle Container an"
 ],
 "Show all images": [
  null,
  ""
 ],
 "Size": [
  null,
  "Größe"
 ],
 "Solid-State Disk": [
  null,
  "Solid-State Datenträger"
 ],
 "Space-saving Computer": [
  null,
  ""
 ],
 "Start": [
  null,
  "Starten"
 ],
 "Start Docker": [
  null,
  "Docker starten"
 ],
 "State": [
  null,
  "Status"
 ],
 "State:": [
  null,
  "Status:"
 ],
 "Stick PC": [
  null,
  ""
 ],
 "Stop": [
  null,
  "Stoppen"
 ],
 "Stopped": [
  null,
  "Angehalten"
 ],
 "Storage": [
  null,
  ""
 ],
 "Storage pool": [
  null,
  ""
 ],
 "Sub Chassis": [
  null,
  ""
 ],
 "Sub Notebook": [
  null,
  ""
 ],
 "TCP": [
  null,
  "TCP"
 ],
 "Tablet": [
  null,
  ""
 ],
 "Tag": [
  null,
  "Tag"
 ],
 "Tags": [
  null,
  ""
 ],
 "The Docker storage pool cannot be managed on this system.": [
  null,
  "Der Docker Storage Pool kann auf diesem System nicht verwaltet werden."
 ],
 "The scan from $time ($type) found no vulnerabilities.": [
  null,
  ""
 ],
 "The scan from $time ($type) was not successful.": [
  null,
  ""
 ],
 "This image does not exist.": [
  null,
  "Dieses Image existiert nicht."
 ],
 "Total": [
  null,
  "Insgesamt"
 ],
 "Tower": [
  null,
  ""
 ],
 "Try again": [
  null,
  "Nochmals versuchen"
 ],
 "Type to filter…": [
  null,
  "Zum Filtern tippen..."
 ],
 "UDP": [
  null,
  "UDP"
 ],
 "Unexpected error": [
  null,
  "Unerwarteter Fehler"
 ],
 "Unknown": [
  null,
  "Unbekannt"
 ],
 "Unless Stopped": [
  null,
  ""
 ],
 "Up since $StartedAt": [
  null,
  "Läuft seit $StartedAt"
 ],
 "Used": [
  null,
  "Benutzt"
 ],
 "Used by Containers": [
  null,
  "Genutzt von Containern"
 ],
 "Volumes": [
  null,
  ""
 ],
 "With terminal": [
  null,
  "Mit Konsole"
 ],
 "You don't have permission to manage the Docker storage pool.": [
  null,
  "Sie haben keine Berechtigung, den Docker Storage Pool zu verwalten."
 ],
 "[$0 bytes of binary data]": [
  null,
  "[$0 bytes Binäredaten]"
 ],
 "[binary data]": [
  null,
  "[Binärdaten]"
 ],
 "[no data]": [
  null,
  "[keine Daten]"
 ],
 "alias": [
  null,
  "Alias"
 ],
 "default": [
  null,
  "Vorgabe"
 ],
 "key": [
  null,
  "Schlüssel"
 ],
 "none": [
  null,
  "kein"
 ],
 "search by name, namespace or description": [
  null,
  "Suche nach Name, Namensraum oder Beschreibung"
 ],
 "select container": [
  null,
  "Container auswählen"
 ],
 "shares": [
  null,
  "Freigaben"
 ],
 "to host path": [
  null,
  ""
 ],
 "to host port": [
  null,
  "An Port"
 ],
 "undefined": [
  null,
  "nicht definiert"
 ],
 "value": [
  null,
  "Wert"
 ],
 "page-title\u0004Containers": [
  null,
  "Container"
 ],
 "page-title\u0004Images": [
  null,
  "Bild"
 ]
}));
