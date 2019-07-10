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
 "$0 Block Device": [
  null,
  "$0 blockorientiertes Gerät"
 ],
 "$0 Chunk Size": [
  null,
  "$0 Chunk Size"
 ],
 "$0 Disks": [
  null,
  "$0 Datenträger"
 ],
 "$0 data + $1 overhead used of $2 ($3)": [
  null,
  "$0 data + $1 Overhead verwendet von $2 ($3)"
 ],
 "$0 disk is missing": [
  "$0 disks are missing",
  "$0 Festplatte fehlt",
  "$0 Festplatten fehlen"
 ],
 "$0 filesystems can not be made larger.": [
  null,
  "$0 Dateisysteme können nicht größer gemacht werden."
 ],
 "$0 filesystems can not be made smaller.": [
  null,
  "$0 Dateisysteme können nicht kleiner gemacht werden."
 ],
 "$0 filesystems can not be resized here.": [
  null,
  "$0 Dateisysteme können hier nicht skaliert werden."
 ],
 "$0 is in active use": [
  null,
  "$0 wird aktiv verwendet"
 ],
 "$0 is not available from any repository.": [
  null,
  "$0 ist in keinem Repository verfügbar."
 ],
 "$0 of $1": [
  null,
  "$0 von $1"
 ],
 "$0 slots remain": [
  null,
  "$0 Slots verbleibend"
 ],
 "$0 used of $1 ($2 saved)": [
  null,
  "$0 verwendet von $1 ($2 gespeichert)"
 ],
 "$0 will be installed.": [
  null,
  "$0 wird installiert."
 ],
 "$0, $1 free": [
  null,
  "$0, $1 frei"
 ],
 "$name (from $host)": [
  null,
  "$name (von $host)"
 ],
 "${size} ${desc}": [
  null,
  "${size} ${desc}"
 ],
 "(default)": [
  null,
  "(Vorgabe)"
 ],
 "(none)": [
  null,
  "(keine)"
 ],
 "--": [
  null,
  "--"
 ],
 "1 MiB": [
  null,
  "1 MiB"
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
 "128 KiB": [
  null,
  "128 KiB"
 ],
 "16 KiB": [
  null,
  "16 KiB"
 ],
 "2 MiB": [
  null,
  "2 MiB"
 ],
 "32 KiB": [
  null,
  "32 KiB"
 ],
 "4 KiB": [
  null,
  "4 KiB"
 ],
 "5 minutes": [
  null,
  "5 Minuten"
 ],
 "512 KiB": [
  null,
  "512 KiB"
 ],
 "6 hours": [
  null,
  "6 Stunden"
 ],
 "64 KiB": [
  null,
  "64 KiB"
 ],
 "8 KiB": [
  null,
  "8 KiB"
 ],
 "A disk is needed.": [
  null,
  "Eine Diskette wird benötigt."
 ],
 "A spare disk needs to be added first before this disk can be removed.": [
  null,
  "Eine Ersatzfestplatte muss zuerst hinzugefügt werden, bevor diese entfernt werden kann."
 ],
 "Activate": [
  null,
  "Aktivieren"
 ],
 "Activating $target": [
  null,
  "Aktiviere $target"
 ],
 "Active since": [
  null,
  "Aktiv seit"
 ],
 "Add": [
  null,
  "Hinzufügen"
 ],
 "Add Disks": [
  null,
  "Datenträger hinzufügen"
 ],
 "Add Key": [
  null,
  "Schlüssel hinzufügen"
 ],
 "Add iSCSI Portal": [
  null,
  "Fügen Sie das iSCSI-Portal hinzu"
 ],
 "Adding physical volume to $target": [
  null,
  "Füge physikalischen Datenträger zu $target hinzu"
 ],
 "Additional packages:": [
  null,
  "Zusatzpakete:"
 ],
 "Address": [
  null,
  "Adresse"
 ],
 "Address cannot be empty": [
  null,
  "Adresse darf nicht leer sein"
 ],
 "Address is not a valid URL": [
  null,
  "Adresse ist keine gültige URL"
 ],
 "Apply": [
  null,
  "Anwenden"
 ],
 "At least $0 disks are needed.": [
  null,
  "Mindestens $0 Datenträger sind nötig."
 ],
 "At least one disk is needed.": [
  null,
  "Mindestens ein Datenträger ist nötig."
 ],
 "Authentication required": [
  null,
  "Authentifikation erforderlich"
 ],
 "Available targets on $0": [
  null,
  "Verfügbare Ziele am $0"
 ],
 "Backing Device": [
  null,
  "Sicherungsgerät"
 ],
 "Block": [
  null,
  "Block"
 ],
 "Block device for filesystems": [
  null,
  "Gerät für Dateisysteme blockieren"
 ],
 "Blocked": [
  null,
  "Gesperrt"
 ],
 "Can't delete while unlocked": [
  null,
  "Kann nicht gelöscht werden, während Sie nicht gesperrt sind"
 ],
 "Cancel": [
  null,
  "Abbrechen"
 ],
 "Change": [
  null,
  "Ändern"
 ],
 "Change iSCSI Initiator Name": [
  null,
  "Ändern Sie den Namen des iSCSI-Initiators"
 ],
 "Change passphrase": [
  null,
  "Passwort ändern"
 ],
 "Checking $target": [
  null,
  "Überprüfung $target"
 ],
 "Checking RAID Device $target": [
  null,
  "Erzeuge RAID-Gerät $target"
 ],
 "Checking and Repairing RAID Device $target": [
  null,
  "Überprüfe und repariere RAID-Gerät $target"
 ],
 "Checking installed software": [
  null,
  "Installierte Software überprüfen"
 ],
 "Chunk Size": [
  null,
  "Datenblock Grösse"
 ],
 "Cleaning up for $target": [
  null,
  "$target wird aufgeräumt"
 ],
 "Close": [
  null,
  "Schließen"
 ],
 "Compatible with all systems and devices (MBR)": [
  null,
  "Kompatibel mit allen Systemen und Geräten (MBR)"
 ],
 "Compatible with modern system and hard disks > 2TB (GPT)": [
  null,
  "Kompatibel mit modernen Systemen und Festplatten > 2TB (GPT)"
 ],
 "Compression": [
  null,
  "Komprimierung"
 ],
 "Confirm": [
  null,
  "Bestätigen"
 ],
 "Confirm removal with passphrase": [
  null,
  "Bestätigen Sie das Entfernen mit der Passphrase"
 ],
 "Content": [
  null,
  "Inhalt"
 ],
 "Create": [
  null,
  "Erstellen"
 ],
 "Create Logical Volume": [
  null,
  "Logischen Datenträger erstellen"
 ],
 "Create Partition": [
  null,
  "Partition erzeugen"
 ],
 "Create Partition Table": [
  null,
  "Partitionstabelle anlegen"
 ],
 "Create Partition on $0": [
  null,
  "Partition auf $0 anlegen"
 ],
 "Create RAID Device": [
  null,
  "RAID-Gerät erzeugen"
 ],
 "Create Snapshot": [
  null,
  "Snapshot erzeugen"
 ],
 "Create Thin Volume": [
  null,
  "Thin Volume erstellen"
 ],
 "Create VDO Device": [
  null,
  "Erstellen Sie ein VDO-Gerät"
 ],
 "Create Volume Group": [
  null,
  "Datenträgerverbund erstellen"
 ],
 "Create new Logical Volume": [
  null,
  "Logischen Datenträger erstellen"
 ],
 "Creating RAID Device $target": [
  null,
  "Erzeuge RAID-Gerät $target"
 ],
 "Creating filesystem on $target": [
  null,
  "Dateisystem auf $0 wird erzeugt"
 ],
 "Creating logical volume $target": [
  null,
  "Erzeuge logischen Datenträger $target"
 ],
 "Creating partition $target": [
  null,
  "Erzeuge Partition $target"
 ],
 "Creating snapshot of $target": [
  null,
  "Erzeuge Snapshot von $target"
 ],
 "Creating volume group $target": [
  null,
  "Erzeuge Datenträgerverbund $target"
 ],
 "Custom": [
  null,
  "Benutzerdefiniert"
 ],
 "Custom encryption options": [
  null,
  "Benutzerdefinierte Verschlüsselungsoptionen"
 ],
 "Custom mount options": [
  null,
  "Kundenspezifische Montageoptionen"
 ],
 "DISK IS FAILING": [
  null,
  "Datenträger ist FEHLERHAFT"
 ],
 "Data Used": [
  null,
  "Verwendete Daten"
 ],
 "Deactivate": [
  null,
  "Deaktivieren"
 ],
 "Deactivating $target": [
  null,
  "Deaktiviere $target"
 ],
 "Deduplication": [
  null,
  "Deduplizierung"
 ],
 "Default": [
  null,
  "Standard"
 ],
 "Delete": [
  null,
  "Löschen"
 ],
 "Deleting $target": [
  null,
  "Lösche $target"
 ],
 "Deleting a RAID device will erase all data on it.": [
  null,
  "Das Löschen eines RAID-Gerätes löscht alle darauf vorhandenen Daten."
 ],
 "Deleting a VDO device will erase all data on it.": [
  null,
  "Durch das Löschen eines VDO-Geräts werden alle darauf befindlichen Daten gelöscht."
 ],
 "Deleting a logical volume will delete all data in it.": [
  null,
  "Beim Löschen eines logischen Datenträgers werden alle darin enthaltenen Daten gelöscht."
 ],
 "Deleting a partition will delete all data in it.": [
  null,
  "Beim Löschen einer Partition werden alle darin enthaltenen Daten gelöscht."
 ],
 "Deleting a volume group will erase all data on it.": [
  null,
  "Das Löschen eines Datenträgerverbunds löscht alle sich darin befindenden Daten."
 ],
 "Deleting volume group $target": [
  null,
  "Lösche Datenträgerverbund ätarget"
 ],
 "Device File": [
  null,
  "Gerätedatei"
 ],
 "Device is read-only": [
  null,
  "Gerät ist schreibgeschützt"
 ],
 "Disk": [
  null,
  "Festplatte"
 ],
 "Disk is OK": [
  null,
  "Datenträger ist OK"
 ],
 "Disk passphrase": [
  null,
  "Disk-Passphrase"
 ],
 "Disks": [
  null,
  "Datenträger"
 ],
 "Don't overwrite existing data": [
  null,
  "Vorhandene Daten nicht überschreiben"
 ],
 "Downloading $0": [
  null,
  "wird heruntergeladen $0"
 ],
 "Drive": [
  null,
  "Speichergerät"
 ],
 "Drives": [
  null,
  "Laufwerke"
 ],
 "Edit": [
  null,
  "Bearbeiten"
 ],
 "Edit Tang keyserver": [
  null,
  "Tang-Keyserver bearbeiten"
 ],
 "Editing a key requires a free slot": [
  null,
  "Das Bearbeiten eines Schlüssels erfordert einen freien Steckplatz"
 ],
 "Ejecting $target": [
  null,
  "Auswerfen $target"
 ],
 "Emptying $target": [
  null,
  "Leere $target"
 ],
 "Encrypt data": [
  null,
  ""
 ],
 "Encrypted $0": [
  null,
  "Verschlüsselt $0"
 ],
 "Encrypted Logical Volume of $0": [
  null,
  "Verschlüsselter logischer Datenträger von $0"
 ],
 "Encrypted Partition of $0": [
  null,
  "Verschlüsselte Partition von $0"
 ],
 "Encrypted volumes can not be resized here.": [
  null,
  "Verschlüsselte Volumes können hier nicht skaliert werden."
 ],
 "Encrypted volumes need to be unlocked before they can be resized.": [
  null,
  "Verschlüsselte Volumes müssen entsperrt werden, bevor ihre Größe geändert werden kann."
 ],
 "Encryption": [
  null,
  "Verschlüsselung"
 ],
 "Encryption Options": [
  null,
  "Verschlüsselungsoptionen"
 ],
 "Erase": [
  null,
  "Säubern"
 ],
 "Erasing $target": [
  null,
  "$target wird gelöscht"
 ],
 "Error": [
  null,
  "Fehler"
 ],
 "Extended Partition": [
  null,
  "Erweiterte Partition"
 ],
 "FAILED": [
  null,
  "KAPUTT"
 ],
 "Filesystem": [
  null,
  "Dateisystem"
 ],
 "Filesystem Mounting": [
  null,
  "Dateisystem einhängen"
 ],
 "Filesystem Name": [
  null,
  "Dateisystemname"
 ],
 "Filesystems": [
  null,
  "Dateisysteme"
 ],
 "For legacy applications only. Reduces performance.": [
  null,
  ""
 ],
 "Force remove passphrase in $0": [
  null,
  "Entfernen der Passphrase erzwingen $0"
 ],
 "Format": [
  null,
  "Formatieren"
 ],
 "Format $0": [
  null,
  "$0 formatieren"
 ],
 "Format Disk $0": [
  null,
  "Datenträger $0 formatieren"
 ],
 "Formatting a disk will erase all data on it.": [
  null,
  "Das Formatieren eines Datenträgers löscht alle darauf vorhandenen Daten."
 ],
 "Formatting a storage device will erase all data on it.": [
  null,
  "Das Formatieren eines Speichergeräts löscht alle darauf vorhandenen Daten."
 ],
 "Free": [
  null,
  "Verfügbar"
 ],
 "Free Space": [
  null,
  "Freiraum"
 ],
 "Free up space in this group: Shrink or delete other logical volumes or add another physical volume.": [
  null,
  ""
 ],
 "Go to now": [
  null,
  "Zu 'Jetzt' gehen"
 ],
 "Grow": [
  null,
  "Wachsen"
 ],
 "Grow Content": [
  null,
  ""
 ],
 "Grow Logical Volume": [
  null,
  "Logisches Volumen erhöhen"
 ],
 "Grow logical size of $0": [
  null,
  "Vergrößern Sie die logische Größe von $0"
 ],
 "Grow to take all space": [
  null,
  "Wachsen Sie, um den gesamten Raum einzunehmen"
 ],
 "If tang-show-keys is not available, run the following:": [
  null,
  "Wenn Tang-Show-Keys nicht verfügbar sind, führen Sie Folgendes aus:"
 ],
 "In Sync": [
  null,
  "Synchron"
 ],
 "Inactive volume": [
  null,
  "Inaktives Volumen"
 ],
 "Index Memory": [
  null,
  "Indexspeicher"
 ],
 "Install": [
  null,
  "Installation"
 ],
 "Install NFS Support": [
  null,
  "Installieren Sie die NFS-Unterstützung"
 ],
 "Install Software": [
  null,
  "Software installieren"
 ],
 "Install VDO support": [
  null,
  "Installieren Sie die VDO-Unterstützung"
 ],
 "Installing $0": [
  null,
  "$0 wird installiert"
 ],
 "Invalid username or password": [
  null,
  "Benutzername oder Passwort ungültig"
 ],
 "Jobs": [
  null,
  "Jobs"
 ],
 "Key slots with unknown types can not be edited here": [
  null,
  "Schlüsselplätze mit unbekannten Typen können hier nicht bearbeitet werden"
 ],
 "Key source": [
  null,
  "Schlüsselquelle"
 ],
 "Keys": [
  null,
  "Schlüssel"
 ],
 "Keyserver": [
  null,
  "Keyserver"
 ],
 "Keyserver address": [
  null,
  "Keyserver-Adresse"
 ],
 "Keyserver removal may prevent unlocking $0.": [
  null,
  "Das Entfernen des Keyservers verhindert möglicherweise das Entsperren $0."
 ],
 "Loading...": [
  null,
  "Lade..."
 ],
 "Local Mount Point": [
  null,
  "Local Mount Point"
 ],
 "Lock": [
  null,
  "Schließen"
 ],
 "Locking $target": [
  null,
  "Sperren $target"
 ],
 "Logical": [
  null,
  "Logisch"
 ],
 "Logical Size": [
  null,
  "Logische Größe"
 ],
 "Logical Volume": [
  null,
  "Logischer Datenträger"
 ],
 "Logical Volume (Snapshot)": [
  null,
  "Logisches Volume (Momentaufnahme)"
 ],
 "Logical Volume of $0": [
  null,
  "Logisches Volumen von $0"
 ],
 "Make sure the key hash from the Tang server matches:": [
  null,
  "Stellen Sie sicher, dass der Schlüsselhash vom Tang-Server übereinstimmt:"
 ],
 "Manually check with SSH: ": [
  null,
  "Manuell mit SSH prüfen: "
 ],
 "Marking $target as faulty": [
  null,
  "Markiere $target als fehlerhaft"
 ],
 "Member of RAID Device": [
  null,
  "Mitglied des RAID-Geräts"
 ],
 "Member of RAID Device $0": [
  null,
  "Mitglied des RAID-Geräts $0"
 ],
 "Metadata Used": [
  null,
  "Verwendete Metadaten"
 ],
 "Modifying $target": [
  null,
  "Ändern $target"
 ],
 "Mount": [
  null,
  "Einhängen"
 ],
 "Mount Options": [
  null,
  "Einhängoptionen"
 ],
 "Mount Point": [
  null,
  "Einhängestelle"
 ],
 "Mount at boot": [
  null,
  "Am Kofferraum montieren"
 ],
 "Mount point can not be empty": [
  null,
  "Einhängepunkt darf nicht leer sein"
 ],
 "Mount point cannot be empty.": [
  null,
  "Einhängepunkt darf nicht leer sein."
 ],
 "Mount point must start with \"/\".": [
  null,
  "Einhängepunkt muss mit \"/\" beginnen."
 ],
 "Mount read only": [
  null,
  "Mount nur lesen"
 ],
 "Mounted At": [
  null,
  "Montiert bei"
 ],
 "Mounting": [
  null,
  "Einhängen"
 ],
 "Mounting $target": [
  null,
  "$target wird eingehängt"
 ],
 "NFS Mount": [
  null,
  "NFS-Mount"
 ],
 "NFS Mounts": [
  null,
  "NFS-Mounts"
 ],
 "NFS Support not installed": [
  null,
  "NFS-Unterstützung nicht installiert"
 ],
 "Name": [
  null,
  "Name"
 ],
 "Name can not be empty.": [
  null,
  "Name darf nicht leer sein."
 ],
 "Name cannot be empty.": [
  null,
  "Name darf nicht leer sein."
 ],
 "Name cannot be longer than $0 bytes": [
  null,
  ""
 ],
 "Name cannot be longer than $0 characters": [
  null,
  ""
 ],
 "Name cannot be longer than 127 characters.": [
  null,
  "Der Name darf nicht mehr als 127 Zeichen enthalten."
 ],
 "Name cannot contain the character '$0'.": [
  null,
  "Der Name darf nicht das Zeichen '$0' enthalten."
 ],
 "Name cannot contain whitespace.": [
  null,
  "Der Name darf keine Leerzeichen enthalten."
 ],
 "New NFS Mount": [
  null,
  "Neuer NFS-Mount"
 ],
 "New passphrase": [
  null,
  "Neue Passphrase"
 ],
 "Next": [
  null,
  "Weiter"
 ],
 "No Filesystem": [
  null,
  "Kein Dateisystem"
 ],
 "No Logical Volumes": [
  null,
  "Keine logischen Volumes"
 ],
 "No NFS mounts set up": [
  null,
  "Es sind keine NFS-Mounts eingerichtet"
 ],
 "No available slots": [
  null,
  "Keine verfügbaren Slots"
 ],
 "No disks are available.": [
  null,
  "Es sind keine Festplatten verfügbar."
 ],
 "No drives attached": [
  null,
  "Keine Laufwerke angeschlossen"
 ],
 "No free key slots": [
  null,
  "Keine freien Schlüsselplätze"
 ],
 "No free space": [
  null,
  "Kein freier Platz"
 ],
 "No iSCSI targets set up": [
  null,
  "Es sind keine iSCSI-Ziele eingerichtet"
 ],
 "No keys added": [
  null,
  "Keine Schlüssel hinzugefügt"
 ],
 "No media inserted": [
  null,
  "Keine Medien eingelegt"
 ],
 "No partitioning": [
  null,
  "Keine Partitionierung"
 ],
 "No storage set up as RAID": [
  null,
  "Kein Speicher als RAID eingerichtet"
 ],
 "No storage set up as VDO": [
  null,
  "Kein Speicher als VDO eingerichtet"
 ],
 "No volume groups created": [
  null,
  "Keine Datenträgerverbünde erzeugt"
 ],
 "Not enough space to grow.": [
  null,
  ""
 ],
 "Not found": [
  null,
  "Nicht gefunden"
 ],
 "Not mounted": [
  null,
  "Nicht montiert"
 ],
 "Not running": [
  null,
  "Läuft nicht"
 ],
 "Ok": [
  null,
  "OK"
 ],
 "Old passphrase": [
  null,
  "Alte Passphrase"
 ],
 "Only $0 of $1 are used.": [
  null,
  "Nur $0 von $1 werden verwendet."
 ],
 "Operation '$operation' on $target": [
  null,
  "Operation '$operation' auf $target"
 ],
 "Options": [
  null,
  "Einstellungen"
 ],
 "Other Devices": [
  null,
  "Andere Geräte"
 ],
 "Overwrite existing data with zeros": [
  null,
  "Vorhandene Daten mit Nullen überschreiben"
 ],
 "PackageKit crashed": [
  null,
  "PackageKit ist abgestürzt"
 ],
 "Partition": [
  null,
  "Partition"
 ],
 "Partition of $0": [
  null,
  "Partition von $0"
 ],
 "Partitioning": [
  null,
  "Partitionierung"
 ],
 "Passphrase": [
  null,
  "Passwort"
 ],
 "Passphrase cannot be empty": [
  null,
  "Passphrase darf nicht leer sein"
 ],
 "Passphrase removal may prevent unlocking $0.": [
  null,
  "Das Entfernen der Passphrase verhindert möglicherweise das Entsperren $0."
 ],
 "Passphrases do not match": [
  null,
  "Passphrasen stimmen nicht überein."
 ],
 "Password": [
  null,
  "Passwort"
 ],
 "Path on Server": [
  null,
  "Pfad auf dem Server"
 ],
 "Path on server cannot be empty.": [
  null,
  "Pfad auf dem Server darf nicht leer sein."
 ],
 "Path on server must start with \"/\".": [
  null,
  "Pfad auf dem Server muss mit \"/\" beginnen."
 ],
 "Physical": [
  null,
  "Physisch"
 ],
 "Physical Volume": [
  null,
  "Physisches Volumen"
 ],
 "Physical Volumes": [
  null,
  "Physikalische Volumen"
 ],
 "Physical volume of $0": [
  null,
  "Körperliches Volumen von $0"
 ],
 "Physical volumes can not be resized here.": [
  null,
  "Physische Datenträger können hier nicht geändert werden."
 ],
 "Please confirm deletion of $0": [
  null,
  "Bitte bestätigen Sie das Löschen von $0"
 ],
 "Please confirm stopping of $0": [
  null,
  "Bitte bestätigen Sie das Stoppen von $0"
 ],
 "Pool": [
  null,
  "Pool"
 ],
 "Pool for Thin Logical Volumes": [
  null,
  "Pool für Thin Logical Volumes"
 ],
 "Pool for Thin Volumes": [
  null,
  "Pool für dünne Mengen"
 ],
 "Pool for thinly provisioned volumes": [
  null,
  "Pool für dünn bereitgestellte Datenträger"
 ],
 "Port": [
  null,
  "Port"
 ],
 "Process": [
  null,
  "Prozess"
 ],
 "Purpose": [
  null,
  "Verwendungszweck"
 ],
 "RAID ($0)": [
  null,
  "RAID ($0)"
 ],
 "RAID 0": [
  null,
  "RAID 0"
 ],
 "RAID 0 (Stripe)": [
  null,
  "RAID 0 (Gestreift)"
 ],
 "RAID 1": [
  null,
  "RAID 1"
 ],
 "RAID 1 (Mirror)": [
  null,
  "RAID 1 (Gespiegelt)"
 ],
 "RAID 10": [
  null,
  "RAID 10"
 ],
 "RAID 10 (Stripe of Mirrors)": [
  null,
  "RID 10 (Gestreifte Spiegel)"
 ],
 "RAID 4": [
  null,
  "RAID 4"
 ],
 "RAID 4 (Dedicated Parity)": [
  null,
  "RAID 4 (Dedizierte Parität)"
 ],
 "RAID 5": [
  null,
  "RAID 5"
 ],
 "RAID 5 (Distributed Parity)": [
  null,
  "RAID 5 (Verteilte Parität)"
 ],
 "RAID 6": [
  null,
  "RAID 6"
 ],
 "RAID 6 (Double Distributed Parity)": [
  null,
  "RAID 6 (Doppelt Verteilte Parität)"
 ],
 "RAID Device": [
  null,
  "RAID-Gerät"
 ],
 "RAID Device $0": [
  null,
  "RAID-Gerät $0"
 ],
 "RAID Devices": [
  null,
  "RAID-Geräte"
 ],
 "RAID Level": [
  null,
  "RAID Ebene"
 ],
 "RAID Member": [
  null,
  "RAID-Mitglied"
 ],
 "Reading": [
  null,
  "lesen"
 ],
 "Reboot": [
  null,
  "Neustart"
 ],
 "Recommended default": [
  null,
  ""
 ],
 "Recovering": [
  null,
  "Am Erholen"
 ],
 "Recovering RAID Device $target": [
  null,
  "Stoppe RAID-Gerät $target"
 ],
 "Removals:": [
  null,
  "Umzüge:"
 ],
 "Remove": [
  null,
  "Entfernen"
 ],
 "Remove $0?": [
  null,
  "Löschen $0?"
 ],
 "Remove Tang keyserver": [
  null,
  "Entfernen Sie den Tang-Keyserver"
 ],
 "Remove device": [
  null,
  "Gerät entfernen"
 ],
 "Remove passphrase": [
  null,
  "Passphrase entfernen"
 ],
 "Remove passphrase in $0?": [
  null,
  "Passphrase entfernen in $0?"
 ],
 "Removing $0": [
  null,
  "Entfernen $0"
 ],
 "Removing $target from RAID Device": [
  null,
  "Entferne $target vom RAID-Gerät"
 ],
 "Removing physical volume from $target": [
  null,
  "Entferne physikalischen Datenträger von $target"
 ],
 "Rename": [
  null,
  "Umbenennen"
 ],
 "Rename Logical Volume": [
  null,
  "Logischen Datenträger umbenennen"
 ],
 "Rename Volume Group": [
  null,
  "Datenträgerverbund umbennen"
 ],
 "Renaming $target": [
  null,
  "$target wird umbenannt"
 ],
 "Repairing $target": [
  null,
  "Reparieren $target"
 ],
 "Repeat passphrase": [
  null,
  "Passphrase wiederholen"
 ],
 "Resizing $target": [
  null,
  "Größenänderung von $target"
 ],
 "Resizing an encrypted filesystem requires unlocking the disk. Please provide a current disk passphrase.": [
  null,
  ""
 ],
 "Running": [
  null,
  "Läuft"
 ],
 "SMART self-test of $target": [
  null,
  "SMART-Selbsttest von $target"
 ],
 "Save": [
  null,
  "Speichern"
 ],
 "Save space by compressing individual blocks with LZ4": [
  null,
  ""
 ],
 "Save space by storing identical data blocks just once": [
  null,
  ""
 ],
 "Saving a new passphrase requires unlocking the disk. Please provide a current disk passphrase.": [
  null,
  "Das Speichern einer neuen Passphrase erfordert das Entsperren der Festplatte. Bitte geben Sie eine aktuelle Disk-Passphrase an."
 ],
 "Securely erasing $target": [
  null,
  "$target wird sicher gelöscht"
 ],
 "Server": [
  null,
  "Server"
 ],
 "Server Address": [
  null,
  "Serveradresse"
 ],
 "Server address cannot be empty.": [
  null,
  "Serveradresse darf nicht leer sein."
 ],
 "Server cannot be empty.": [
  null,
  "Server darf nicht leer sein"
 ],
 "Service": [
  null,
  "Dienst"
 ],
 "Session": [
  null,
  "Sitzung"
 ],
 "Setting up loop device $target": [
  null,
  "Richte Loop Device $target ein"
 ],
 "Show all": [
  null,
  ""
 ],
 "Show all $0 drives": [
  null,
  "Zeige alle $0 Laufwerke"
 ],
 "Shrink": [
  null,
  "Verkleinern"
 ],
 "Shrink Logical Volume": [
  null,
  "Logisches Volumen verkleinern"
 ],
 "Shrink Volume": [
  null,
  ""
 ],
 "Size": [
  null,
  "Größe"
 ],
 "Size cannot be negative": [
  null,
  "Größe darf nicht negativ sein"
 ],
 "Size cannot be zero": [
  null,
  "Größe darf nicht Null sein"
 ],
 "Size is too large": [
  null,
  "Größe zu groß"
 ],
 "Size must be a number": [
  null,
  "Größe muss eine Zahl sein"
 ],
 "Size must be at least $0": [
  null,
  "Größe muss mindestens sein $0"
 ],
 "Slot $0": [
  null,
  "Slot $0"
 ],
 "Spare": [
  null,
  "Ersatz"
 ],
 "Start": [
  null,
  "Starten"
 ],
 "Start Multipath": [
  null,
  "Multipath starten"
 ],
 "Starting RAID Device $target": [
  null,
  "Starte RAID-Gerät $target"
 ],
 "Starting swapspace $target": [
  null,
  "Swapspace wird gestartet $target"
 ],
 "Stop": [
  null,
  "Stoppen"
 ],
 "Stop Device": [
  null,
  "Gerät anhalten"
 ],
 "Stop and Unmount": [
  null,
  "Stoppen und demontieren"
 ],
 "Stop and remove": [
  null,
  "Stoppen und entfernen"
 ],
 "Stopping RAID Device $target": [
  null,
  "Stoppe RAID-Gerät $target"
 ],
 "Stopping swapspace $target": [
  null,
  "Swapspace wird angehalten $target"
 ],
 "Storage": [
  null,
  "Speicher"
 ],
 "Storage Logs": [
  null,
  "Speicherprotokolle"
 ],
 "Storage can not be managed on this system.": [
  null,
  ""
 ],
 "Store passphrase": [
  null,
  "Passphrase speichern"
 ],
 "Stored Passphrase": [
  null,
  "Gespeichertes Passwort"
 ],
 "Stored passphrase": [
  null,
  "Gespeichertes Passwort"
 ],
 "Support is installed.": [
  null,
  "Support ist installiert."
 ],
 "Swap": [
  null,
  "Auslagerungsspeicher "
 ],
 "Synchronizing RAID Device $target": [
  null,
  "Synchronisiere RAID-Gerät $target"
 ],
 "Tang keyserver": [
  null,
  "Tang Keyserver"
 ],
 "The RAID Array is in a degraded state": [
  null,
  "Das RAID-Array befindet sich in einem degradierten Zustand"
 ],
 "The RAID device must be running in order to add spare disks.": [
  null,
  "Das RAID-Gerät muss aktiv sein, um Ersatzfestplatten hinzufügen zu können."
 ],
 "The RAID device must be running in order to remove disks.": [
  null,
  "Das RAID-Gerät muss aktiv sein, um Festplatten entfernen zu können."
 ],
 "The creation of this VDO device did not finish and the device can't be used.": [
  null,
  "Die Erstellung dieses VDO-Geräts wurde nicht abgeschlossen und das Gerät kann nicht verwendet werden."
 ],
 "The currently logged in user is not permitted to see information about keys.": [
  null,
  "Der aktuell angemeldete Benutzer kann keine Informationen zu Schlüsseln anzeigen."
 ],
 "The filesystem is in use by login sessions and system services. Proceeding will stop these.": [
  null,
  "Das Dateisystem wird von Anmeldesitzungen und Systemdiensten verwendet. Durch Fortfahren werden diese gestoppt."
 ],
 "The filesystem is in use by login sessions. Proceeding will stop these.": [
  null,
  "Das Dateisystem wird von Anmeldesitzungen verwendet. Durch Fortfahren werden diese gestoppt."
 ],
 "The filesystem is in use by system services. Proceeding will stop these.": [
  null,
  "Das Dateisystem wird von Systemdiensten verwendet. Durch Fortfahren werden diese gestoppt."
 ],
 "The last disk of a RAID device cannot be removed.": [
  null,
  "Die letzte Festplatte eines RAID-Geräts kann nicht entfernt werden."
 ],
 "The last key slot can not be removed": [
  null,
  "Der letzte Schlüsselschlitz kann nicht entfernt werden"
 ],
 "The last physical volume of a volume group cannot be removed.": [
  null,
  "Der letzte physische Datenträger einer Datenträgergruppe kann nicht entfernt werden."
 ],
 "The user <b>$0</b> is not permitted to manage storage": [
  null,
  "Der Benutzer <b>$0</b> hat keine Rechte, Speicher zu verwalten."
 ],
 "There are devices with multiple paths on the system, but the multipath service is not running.": [
  null,
  "Es gibt Geräte mit mehreren Pfaden im System, der Multipath-Dienst wird jedoch nicht ausgeführt."
 ],
 "There is not enough free space elsewhere to remove this physical volume. At least $0 more free space is needed.": [
  null,
  "An anderer Stelle ist nicht genügend freier Speicherplatz vorhanden, um diesen physischen Datenträger zu entfernen. Wenigstens $0 es wird mehr Freiraum benötigt."
 ],
 "Thin Logical Volume": [
  null,
  "Dünnes logisches Volumen"
 ],
 "This NFS mount is in use and only its options can be changed.": [
  null,
  "Dieser NFS-Mount wird verwendet und nur die Optionen können geändert werden."
 ],
 "This VDO device does not use all of its backing device.": [
  null,
  "Dieses VDO-Gerät verwendet nicht alle seine Hintergrundgeräte."
 ],
 "This device has filesystems that are currently in use. Proceeding will unmount all filesystems on it.": [
  null,
  "Dieses Gerät verfügt über Dateisysteme, die derzeit verwendet werden. Wenn Sie fortfahren, werden alle darauf befindlichen Dateisysteme deaktiviert."
 ],
 "This device is currently used for RAID devices.": [
  null,
  "Dieses Gerät wird derzeit für RAID-Geräte verwendet."
 ],
 "This device is currently used for RAID devices. Proceeding will remove it from its RAID devices.": [
  null,
  "Dieses Gerät wird derzeit für RAID-Geräte verwendet. Wenn Sie fortfahren, wird es von den RAID-Geräten entfernt."
 ],
 "This device is currently used for VDO devices.": [
  null,
  "Dieses Gerät wird derzeit für VDO-Geräte verwendet."
 ],
 "This device is currently used for volume groups.": [
  null,
  "Dieses Gerät wird derzeit für Volume-Gruppen verwendet."
 ],
 "This device is currently used for volume groups. Proceeding will remove it from its volume groups.": [
  null,
  "Dieses Gerät wird derzeit für Volume-Gruppen verwendet. Wenn Sie fortfahren, wird es aus den Volume-Gruppen entfernt."
 ],
 "This disk cannot be removed while the device is recovering.": [
  null,
  "Diese Diskette kann nicht entfernt werden, während das Gerät wiederhergestellt wird."
 ],
 "This logical volume is not completely used by its content.": [
  null,
  ""
 ],
 "This volume needs to be activated before it can be resized.": [
  null,
  "Dieses Volume muss aktiviert werden, bevor die Größe geändert werden kann."
 ],
 "Total size: $0": [
  null,
  "Gesamtgröße: $0"
 ],
 "Trust key": [
  null,
  "Schlüssel vertrauen"
 ],
 "Type": [
  null,
  "Typ"
 ],
 "UUID": [
  null,
  "UUID"
 ],
 "Unable to reach server": [
  null,
  "Kann Server nicht erreichen"
 ],
 "Unable to remove mount": [
  null,
  "Mount kann nicht entfernt werden"
 ],
 "Unable to unmount filesystem": [
  null,
  "Das Aufhängen des Dateisystems ist nicht möglich"
 ],
 "Unit": [
  null,
  "Einheit"
 ],
 "Unknown": [
  null,
  "Unbekannt"
 ],
 "Unknown ($0)": [
  null,
  "Unbekannt ($0)"
 ],
 "Unknown host name": [
  null,
  "Unbekannter Host-Name"
 ],
 "Unknown type": [
  null,
  "Unbekannter Typ"
 ],
 "Unlock": [
  null,
  "Öffnen"
 ],
 "Unlock at boot": [
  null,
  "Beim Booten entsperren"
 ],
 "Unlock read only": [
  null,
  "Schreibgeschützt entsperren"
 ],
 "Unlocking $target": [
  null,
  "Entsperren $target"
 ],
 "Unlocking disk...": [
  null,
  "Festplatte wird entsperrt ..."
 ],
 "Unmount": [
  null,
  "Aushängen"
 ],
 "Unmounting $target": [
  null,
  "$target wird ausgehängt"
 ],
 "Unrecognized Data": [
  null,
  "Unerkannte Daten"
 ],
 "Unrecognized data can not be made smaller here.": [
  null,
  "Nicht erkannte Daten können hier nicht verkleinert werden."
 ],
 "Unsupported volume": [
  null,
  "Nicht unterstützter Datenträger"
 ],
 "Usage": [
  null,
  "Verbrauch"
 ],
 "Use 512 Byte emulation": [
  null,
  "Verwenden Sie eine 512-Byte-Emulation"
 ],
 "Used": [
  null,
  "Benutzt"
 ],
 "Username": [
  null,
  "Benutzername"
 ],
 "VDO Backing": [
  null,
  "VDO-Unterstützung"
 ],
 "VDO Device": [
  null,
  "VDO-Gerät"
 ],
 "VDO Device $0": [
  null,
  "VDO-Gerät $0"
 ],
 "VDO Devices": [
  null,
  "VDO-Geräte"
 ],
 "VDO backing devices can not be made smaller": [
  null,
  "VDO-Sicherungsgeräte können nicht kleiner gemacht werden"
 ],
 "VDO support not installed": [
  null,
  "VDO-Unterstützung nicht installiert"
 ],
 "Verify key": [
  null,
  "Schlüssel überprüfen"
 ],
 "Very securely erasing $target": [
  null,
  "$target wird sehr sicher gelöscht"
 ],
 "Volume": [
  null,
  "Lautstärke"
 ],
 "Volume Group": [
  null,
  "Datenträgerverbund"
 ],
 "Volume Group $0": [
  null,
  "Datenträgerverbund $0"
 ],
 "Volume Groups": [
  null,
  "Datenträgerverbünde"
 ],
 "Volume size is $0. Content size is $1.": [
  null,
  ""
 ],
 "Waiting for other software management operations to finish": [
  null,
  "Warten, bis andere Software-Verwaltungsvorgänge abgeschlossen sind"
 ],
 "What if tang-show-keys is not available?": [
  null,
  "Was ist, wenn Tang-Show-Keys nicht verfügbar sind?"
 ],
 "Write-mostly": [
  null,
  "Hauptsächlich Schreiben"
 ],
 "Writing": [
  null,
  "Schreiben"
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
 "iSCSI Targets": [
  null,
  "iSCSI Targets"
 ],
 "key slot $0": [
  null,
  "Schlüsselschlitz $0"
 ],
 "undefined": [
  null,
  "nicht definiert"
 ],
 "unknown target": [
  null,
  "Unbekanntes Ziel"
 ],
 "unpartitioned space on $0": [
  null,
  "nicht partitionierter Speicherplatz auf $0"
 ],
 "storage-id-desc\u0004$0 File System": [
  null,
  "$0 Dateisystem"
 ],
 "storage-id-desc\u0004Encrypted data": [
  null,
  "Verschlüsselte Daten"
 ],
 "storage-id-desc\u0004Other Data": [
  null,
  "Andere Daten"
 ],
 "storage-id-desc\u0004Swap Space": [
  null,
  "Auslagerungsspeicher"
 ],
 "storage-id-desc\u0004Unrecognized Data": [
  null,
  "Unerkannte Daten"
 ],
 "storage-id-desc\u0004VDO Backing": [
  null,
  "VDO-Unterstützung"
 ],
 "storage\u0004Drive": [
  null,
  "Speichergerät"
 ],
 "storage\u0004Hard Disk": [
  null,
  "Festplatte"
 ],
 "storage\u0004Optical Drive": [
  null,
  "Optisches Speichergerät"
 ],
 "storage\u0004Removable Drive": [
  null,
  "Entfernbares Speichergerät"
 ],
 "storage\u0004Solid-State Disk": [
  null,
  "Solid-State Datenträger"
 ],
 "format-bytes\u0004bytes": [
  null,
  "Bytes"
 ]
}));
