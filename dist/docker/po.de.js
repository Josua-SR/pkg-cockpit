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
 " (shared with the OS)": [
  null,
  " (gemeinsam mit dem Betriebssystem freigegeben)"
 ],
 "$0 shares": [
  null,
  "$0 mal geteilt"
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
  "Zusätzlicher Speicher"
 ],
 "Advanced TCA": [
  null,
  "Fortgeschrittenes TCA"
 ],
 "All In One": [
  null,
  "Alles in einem"
 ],
 "All data on selected disks will be erased and disks will be added to the storage pool.": [
  null,
  "Die ausgewählten Datenträger werden zum Storage Pool hinzugefügt. Dabei werden sämtliche Daten auf den ausgewählten Datenträgern gelöscht."
 ],
 "Always": [
  null,
  "Immer"
 ],
 "Author": [
  null,
  "Autor"
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
 "CPU priority": [
  null,
  "CPU Priorität"
 ],
 "CPU usage:": [
  null,
  "CPU auslastung:"
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
  "Ändern"
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
  "Kombinierte Speichernutzung"
 ],
 "Combined usage of $0 CPU core": [
  "Combined usage of $0 CPU cores",
  "Kombinierte Verwendung von $0 CPU-Kern",
  "Kombinierte Verwendung von $0 CPU-Kernen"
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
  "Festschreiben"
 ],
 "Commit Image": [
  null,
  "Commit Image"
 ],
 "Compact PCI": [
  null,
  "Kompakte PCI"
 ],
 "Configure storage...": [
  null,
  "Speicher konfigurieren ..."
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
  "Convertible"
 ],
 "Could not add all disks": [
  null,
  "Es konnten nicht alle Festplatten hinzugefügt werden"
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
 "Deleting a container will erase all data in it.": [
  null,
  "Das Löschen eines Containers entfernt alle sich darin befindlichen Daten."
 ],
 "Desktop": [
  null,
  "Desktop"
 ],
 "Detachable": [
  null,
  "Abnehmbar"
 ],
 "Details": [
  null,
  "Details"
 ],
 "Docker is not installed or activated on the system": [
  null,
  "Docker ist auf Ihrem System entweder nicht installiert oder nicht aktiviert"
 ],
 "Docking Station": [
  null,
  "Dockingstation"
 ],
 "Download": [
  null,
  "Herunterladen"
 ],
 "Drive": [
  null,
  "Speichergerät"
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
  "Eingebetteter PC"
 ],
 "Entrypoint": [
  null,
  "Einsprungpunkt"
 ],
 "Environment": [
  null,
  "Umgebung"
 ],
 "Erase containers and reset storage pool": [
  null,
  "Container löschen und Speicherpool zurücksetzen"
 ],
 "Error message from Docker:": [
  null,
  "Fehlermeldung von Docker:"
 ],
 "Everything": [
  null,
  "Alles"
 ],
 "Exited $ExitCode": [
  null,
  "Beendet $ExitCode"
 ],
 "Expansion Chassis": [
  null,
  "Erweiterungsgehäuse"
 ],
 "Expose container ports": [
  null,
  "Legen Sie Containerports frei"
 ],
 "Failed to start Docker: $0": [
  null,
  "Start von Docker fehlgeschlagen: $0"
 ],
 "Failed to stop Docker scope: $0": [
  null,
  "Docker-Bereich konnte nicht angehalten werden: $0"
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
  "Gateway:"
 ],
 "Get new image": [
  null,
  "Holen Sie sich ein neues Bild"
 ],
 "Hand Held": [
  null,
  "Hand gehalten"
 ],
 "Hard Disk": [
  null,
  "Festplatte"
 ],
 "IP Address:": [
  null,
  "IP-Adresse:"
 ],
 "IP Prefix Length:": [
  null,
  "IP-Präfixlänge:"
 ],
 "Id": [
  null,
  "ID"
 ],
 "Id:": [
  null,
  "Id:"
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
  "Bildersuche"
 ],
 "Image:": [
  null,
  "Bild:"
 ],
 "Images": [
  null,
  "Abbilder"
 ],
 "Images and running containers": [
  null,
  "Bilder und laufende Container"
 ],
 "Information about the Docker storage pool is not available.": [
  null,
  "Informationen zum Docker-Speicherpool sind nicht verfügbar."
 ],
 "Invalid port": [
  null,
  "Ungültiger Port"
 ],
 "IoT Gateway": [
  null,
  "IoT-Gateway"
 ],
 "Laptop": [
  null,
  "Laptop"
 ],
 "Link to another container": [
  null,
  "Verbindung zu einem anderen Container"
 ],
 "Links": [
  null,
  "Links"
 ],
 "Links:": [
  null,
  "Links:"
 ],
 "Local Disks": [
  null,
  "$0 Datenträger"
 ],
 "Low Profile Desktop": [
  null,
  "Low-Profile-Desktop"
 ],
 "Lunch Box": [
  null,
  "Brotdose"
 ],
 "MAC Address:": [
  null,
  "MAC-Adresse:"
 ],
 "Main Server Chassis": [
  null,
  "Hauptservergehäuse"
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
  "Speichernutzung:"
 ],
 "MiB": [
  null,
  "MiB"
 ],
 "Mini PC": [
  null,
  "Mini PC"
 ],
 "Mini Tower": [
  null,
  "Mini Tower"
 ],
 "Mount container volumes": [
  null,
  "Mounten Sie Container-Volumes"
 ],
 "Multi-system Chassis": [
  null,
  "Multi-System-Chassis"
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
  "Es wurde kein zusätzlicher lokaler Speicher gefunden."
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
  "Keine behälter"
 ],
 "No containers that match the current filter": [
  null,
  "Keine Container, die dem aktuellen Filter entsprechen"
 ],
 "No images": [
  null,
  "Keine Bilder"
 ],
 "No images that match the current filter": [
  null,
  "Keine Bilder, die dem aktuellen Filter entsprechen"
 ],
 "No results for $0": [
  null,
  "Keine Ergebnisse für $0"
 ],
 "No running containers": [
  null,
  "Keine laufenden Container"
 ],
 "No running containers that match the current filter": [
  null,
  "Keine laufenden Container, die dem aktuellen Filter entsprechen"
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
  "Notizbuch"
 ],
 "Ok": [
  null,
  "OK"
 ],
 "On Failure": [
  null,
  "Bei einem Ausfall"
 ],
 "On failure, retry $0 time": [
  "On failure, retry $0 times",
  "Bei einem Fehlschlag versuchen Sie es erneut $0 Zeit",
  "Bei einem Fehlschlag versuchen Sie es erneut $0 mal"
 ],
 "Other": [
  null,
  "Weitere"
 ],
 "Overview": [
  null,
  "Überblick"
 ],
 "Peripheral Chassis": [
  null,
  "Peripheriechassis"
 ],
 "Pizza Box": [
  null,
  "Pizza-Box"
 ],
 "Please confirm deletion of $0": [
  null,
  "Bitte bestätigen Sie das Löschen von $0"
 ],
 "Please confirm forced deletion of $0": [
  null,
  "Bitte bestätigen Sie das erzwungene Löschen von $0"
 ],
 "Please try another term": [
  null,
  "Bitte versuchen Sie es mit einem anderen Begriff"
 ],
 "Portable": [
  null,
  "tragbar"
 ],
 "Ports": [
  null,
  "Ports"
 ],
 "Ports:": [
  null,
  "Häfen:"
 ],
 "Problems": [
  null,
  "Probleme"
 ],
 "RAID Chassis": [
  null,
  "RAID-Chassis"
 ],
 "Rack Mount Chassis": [
  null,
  "Rack-Einbaugehäuse"
 ],
 "ReadOnly": [
  null,
  "ReadOnly"
 ],
 "ReadWrite": [
  null,
  "ReadWrite"
 ],
 "Reboot": [
  null,
  "Neustart"
 ],
 "Reformat and add disks": [
  null,
  "Datenträger neu formatieren und hinzufügen"
 ],
 "Repository": [
  null,
  "Repository"
 ],
 "Reset": [
  null,
  "Zurücksetzen"
 ],
 "Reset Storage Pool": [
  null,
  "Setzen Sie den Speicherpool zurück"
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
  "Starten Sie die Richtlinie neu"
 ],
 "Restart Policy:": [
  null,
  "Neustartrichtlinie:"
 ],
 "Retries:": [
  null,
  "Wiederholungen:"
 ],
 "Run": [
  null,
  "Ausführen"
 ],
 "Run Image": [
  null,
  "Bild ausführen"
 ],
 "Sealed-case PC": [
  null,
  "PC mit versiegeltem Gehäuse"
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
  "Alle Bilder anzeigen"
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
  "Platzsparender Computer"
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
  "Stick PC"
 ],
 "Stop": [
  null,
  "Stoppen"
 ],
 "Stop and delete": [
  null,
  "Stoppen und löschen"
 ],
 "Stopped": [
  null,
  "Angehalten"
 ],
 "Storage": [
  null,
  "Speicher"
 ],
 "Storage pool": [
  null,
  "Storage Pool"
 ],
 "Sub Chassis": [
  null,
  "Sub-Chassis"
 ],
 "Sub Notebook": [
  null,
  "Subnotizbuch"
 ],
 "TCP": [
  null,
  "TCP"
 ],
 "Tablet": [
  null,
  "Tablett"
 ],
 "Tag": [
  null,
  "Tag"
 ],
 "Tags": [
  null,
  "Tags"
 ],
 "The Docker storage pool cannot be managed on this system.": [
  null,
  "Der Docker Storage Pool kann auf diesem System nicht verwaltet werden."
 ],
 "The following containers depend on this image and will become unusable.": [
  null,
  "Die folgenden Container hängen von diesem Image ab und werden unbrauchbar."
 ],
 "The scan from $time ($type) found no vulnerabilities.": [
  null,
  "Der Scan von $time ($type) keine Schwachstellen gefunden."
 ],
 "The scan from $time ($type) was not successful.": [
  null,
  "Der Scan von $time ($type) war nicht erfolgreich."
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
  "Turm"
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
  "Wenn nicht gestoppt"
 ],
 "Up since $0": [
  null,
  "Up seit $0"
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
  "Datenträger"
 ],
 "Volumes:": [
  null,
  "Volumen:"
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
  "zum Host-Pfad"
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
  "value"
 ],
 "page-title\u0004Containers": [
  null,
  "Container"
 ],
 "page-title\u0004Images": [
  null,
  "Abbilder"
 ]
}));
