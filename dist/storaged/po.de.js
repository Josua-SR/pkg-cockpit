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
 "$0 Block Device": [
  null,
  "$0 blockorientiertes Gerät"
 ],
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
 "$0 of $1": [
  null,
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
 "$name (from $host)": [
  null,
  "$name (von $host)"
 ],
 "(default)": [
  null,
  ""
 ],
 "(none)": [
  null,
  ""
 ],
 "1 MiB": [
  null,
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
 "128 KiB": [
  null,
  ""
 ],
 "16 KiB": [
  null,
  ""
 ],
 "2 MiB": [
  null,
  ""
 ],
 "32 KiB": [
  null,
  ""
 ],
 "4 KiB": [
  null,
  ""
 ],
 "5 minutes": [
  null,
  "5 Minuten"
 ],
 "512 KiB": [
  null,
  ""
 ],
 "6 hours": [
  null,
  "6 Stunden"
 ],
 "64 KiB": [
  null,
  ""
 ],
 "8 KiB": [
  null,
  ""
 ],
 "<span>Encrypted $0</span>": [
  null,
  ""
 ],
 "<span>Encrypted Logical Volume of $0</span>": [
  null,
  "<span>Verschlüsselter logischer Datenträger von $0</span>"
 ],
 "<span>Encrypted Partition of $0</span>": [
  null,
  ""
 ],
 "<span>Logical Volume of $0</span>": [
  null,
  ""
 ],
 "<span>Partition of $0</span>": [
  null,
  ""
 ],
 "Activate": [
  null,
  "Aktivieren"
 ],
 "Activating $target": [
  null,
  "Aktiviere $target"
 ],
 "Add": [
  null,
  "Hinzufügen"
 ],
 "Add iSCSI Portal": [
  null,
  ""
 ],
 "Adding physical volume to $target": [
  null,
  "Füge physikalischen Datenträger zu $target hinzu"
 ],
 "Address": [
  null,
  "Adresse"
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
  ""
 ],
 "Available targets on $0": [
  null,
  ""
 ],
 "Block Device": [
  null,
  ""
 ],
 "Block device for filesystems": [
  null,
  ""
 ],
 "Can't delete while unlocked": [
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
 "Change iSCSI Initiator Name": [
  null,
  ""
 ],
 "Checking RAID Device $target": [
  null,
  "Erzeuge RAID-Gerät $target"
 ],
 "Checking and Repairing RAID Device $target": [
  null,
  "Erzeuge RAID-Gerät $target"
 ],
 "Chunk Size": [
  null,
  "Happengröße"
 ],
 "Cleaning up for $target": [
  null,
  "$target wird aufgeräumt"
 ],
 "Close": [
  null,
  "Schliessen"
 ],
 "Compatible with all systems and devices (MBR)": [
  null,
  "Kompatibel mit allen Systemen und Geräten (MBR)"
 ],
 "Compatible with modern system and hard disks > 2TB (GPT)": [
  null,
  "Kompatibel mit modernen Systemen und Festplatten > 2TB (GPT)"
 ],
 "Confirm passphrase": [
  null,
  "Passphrase wiederholen"
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
  ""
 ],
 "Create Partition": [
  null,
  "Partition erzeugen"
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
  ""
 ],
 "Create Volume Group": [
  null,
  "Datenträgerverbund erstellen"
 ],
 "Create new Logical Volume": [
  null,
  ""
 ],
 "Create partition": [
  null,
  "Partition erzeugen"
 ],
 "Create partition on $0": [
  null,
  "Partition auf $0 erzeugen"
 ],
 "Create partition table": [
  null,
  ""
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
 "Custom (Enter filesystem type)": [
  null,
  "Benutzerdefiniert (Geben Sie den Dateisystemtyp an)"
 ],
 "DISK IS FAILING": [
  null,
  "Datenträger ist FEHLERHAFT"
 ],
 "Data Used": [
  null,
  ""
 ],
 "Deactivate": [
  null,
  "Deaktivieren"
 ],
 "Deactivating $target": [
  null,
  "Deaktiviere $target"
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
 "Deleting a logical volume will delete all data in it.": [
  null,
  ""
 ],
 "Deleting a partition will delete all data in it.": [
  null,
  ""
 ],
 "Deleting volume group $target": [
  null,
  "Lösche Datenträgerverbund ätarget"
 ],
 "Device $0 is a member of RAID Array $1": [
  null,
  "Gerät $0 ist Mitglied des RAID Arrays $1"
 ],
 "Device $0 is a physical volume of $1": [
  null,
  "Gerät $0 ist ein physischer Datenträger von $1"
 ],
 "Device $0 is mounted on $1": [
  null,
  "Gerät $0 ist eingehängt auf $1"
 ],
 "Device is read-only": [
  null,
  ""
 ],
 "Disk is OK": [
  null,
  "Datenträger ist OK"
 ],
 "Disks": [
  null,
  "Datenträger"
 ],
 "Don't overwrite existing data": [
  null,
  "Vorhandene Daten nicht überschreiben"
 ],
 "Drive": [
  null,
  ""
 ],
 "Drives": [
  null,
  ""
 ],
 "Edit": [
  null,
  ""
 ],
 "Ejecting $target": [
  null,
  ""
 ],
 "Emptying $target": [
  null,
  "Leere $target"
 ],
 "Encrypted EXT4 (LUKS)": [
  null,
  "Verschlüsseltes EXT4 (LUKS)"
 ],
 "Encrypted XFS (LUKS)": [
  null,
  "Verschlüsseltes XFS (LUKS)"
 ],
 "Encryption": [
  null,
  ""
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
 "Filesystem": [
  null,
  "Dateisystem"
 ],
 "Filesystem Mounting": [
  null,
  ""
 ],
 "Filesystem Name": [
  null,
  ""
 ],
 "Filesystem type": [
  null,
  "Dateisystemtyp"
 ],
 "Filesystems": [
  null,
  ""
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
  ""
 ],
 "Go to now": [
  null,
  "Zu 'Jetzt' gehen"
 ],
 "Inactive volume": [
  null,
  ""
 ],
 "Invalid username or password": [
  null,
  ""
 ],
 "Jobs": [
  null,
  ""
 ],
 "Lock": [
  null,
  "Schließen"
 ],
 "Locking $target": [
  null,
  ""
 ],
 "Logical Volume": [
  null,
  "Logischer Datenträger"
 ],
 "Logical Volume (Snapshot)": [
  null,
  ""
 ],
 "Marking $target as faulty": [
  null,
  "Markiere $target als fehlerhaft"
 ],
 "Member of RAID Device": [
  null,
  ""
 ],
 "Member of RAID Device $0": [
  null,
  ""
 ],
 "Metadata Used": [
  null,
  ""
 ],
 "Modifying $target": [
  null,
  ""
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
 "Mounted At": [
  null,
  ""
 ],
 "Mounting": [
  null,
  "Einhängen"
 ],
 "Mounting $target": [
  null,
  "$target wird eingehängt"
 ],
 "NTFS - Compatible with most systems": [
  null,
  "NTFS - Kompatibel mit den meisten Systemen"
 ],
 "Name": [
  null,
  "Name"
 ],
 "Name cannot be empty.": [
  null,
  "Name darf nicht leer sein."
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
  ""
 ],
 "No drives attached": [
  null,
  ""
 ],
 "No free space": [
  null,
  ""
 ],
 "No iSCSI targets set up": [
  null,
  ""
 ],
 "No media inserted": [
  null,
  ""
 ],
 "No partitioning": [
  null,
  "Keine Partitionierung"
 ],
 "No storage set up as RAID": [
  null,
  ""
 ],
 "No volume groups created": [
  null,
  "Keine Datenträgerverbünde erzeugt"
 ],
 "Off": [
  null,
  "Aus"
 ],
 "On": [
  null,
  "Ein"
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
 "Partition": [
  null,
  "Partition"
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
 "Passphrases do not match": [
  null,
  "Passphrasen stimmen nicht überein."
 ],
 "Password": [
  null,
  "Passwort"
 ],
 "Physical Volume": [
  null,
  ""
 ],
 "Physical Volumes": [
  null,
  ""
 ],
 "Physical volume of $0": [
  null,
  ""
 ],
 "Please confirm deletion of $0": [
  null,
  "Bitte bestätigen Sie das Löschen von $0"
 ],
 "Pool": [
  null,
  ""
 ],
 "Pool for Thin Logical Volumes": [
  null,
  "Pool für Thin Logical Volumes"
 ],
 "Pool for Thin Volumes": [
  null,
  ""
 ],
 "Pool for thinly provisioned volumes": [
  null,
  ""
 ],
 "Port": [
  null,
  ""
 ],
 "Purpose": [
  null,
  ""
 ],
 "RAID 0 (Stripe)": [
  null,
  "RAID 0 (Gestreift)"
 ],
 "RAID 1 (Mirror)": [
  null,
  "RAID 1 (Gespiegelt)"
 ],
 "RAID 10 (Stripe of Mirrors)": [
  null,
  "RID 10 (Gestreifte Spiegel)"
 ],
 "RAID 4 (Dedicated Parity)": [
  null,
  "RAID 4 (Dedizierte Parität)"
 ],
 "RAID 5 (Distributed Parity)": [
  null,
  "RAID 5 (Verteilte Parität)"
 ],
 "RAID 6 (Double Distributed Parity)": [
  null,
  "RAID 6 (Doppelt Verteilte Parität)"
 ],
 "RAID Device": [
  null,
  ""
 ],
 "RAID Device $0": [
  null,
  "RAID-Gerät $0"
 ],
 "RAID Devices": [
  null,
  ""
 ],
 "RAID Level": [
  null,
  "RAID Ebene"
 ],
 "RAID Member": [
  null,
  ""
 ],
 "Reading": [
  null,
  ""
 ],
 "Reboot": [
  null,
  "Neustart"
 ],
 "Recovering RAID Device $target": [
  null,
  "Stoppe RAID-Gerät $target"
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
  ""
 ],
 "Renaming $target": [
  null,
  "$target wird umbenannt"
 ],
 "Resize": [
  null,
  "Größe ändern"
 ],
 "Resize Filesystem": [
  null,
  "Größe des Dateisystems ändern"
 ],
 "Resize Logical Volume": [
  null,
  "Größe eines logischen Datenträgers ändern"
 ],
 "Resizing $target": [
  null,
  "Größenänderung von $target"
 ],
 "SMART self-test of $target": [
  null,
  ""
 ],
 "Securely erasing $target": [
  null,
  "$target wird sicher gelöscht"
 ],
 "Server Address": [
  null,
  ""
 ],
 "Server address cannot be empty.": [
  null,
  "Name darf nicht leer sein."
 ],
 "Setting up loop device $target": [
  null,
  ""
 ],
 "Size": [
  null,
  "Größe"
 ],
 "Size cannot be negative": [
  null,
  "Name darf nicht leer sein."
 ],
 "Size cannot be zero": [
  null,
  "Name darf nicht leer sein."
 ],
 "Size is too large": [
  null,
  ""
 ],
 "Size must be a number": [
  null,
  ""
 ],
 "Start": [
  null,
  "Starten"
 ],
 "Start Multipath": [
  null,
  ""
 ],
 "Starting RAID Device $target": [
  null,
  "Starte RAID-Gerät $target"
 ],
 "Starting swapspace $target": [
  null,
  ""
 ],
 "Stop": [
  null,
  "Stoppen"
 ],
 "Stopping RAID Device $target": [
  null,
  "Stoppe RAID-Gerät $target"
 ],
 "Stopping swapspace $target": [
  null,
  ""
 ],
 "Storage": [
  null,
  ""
 ],
 "Storage Log": [
  null,
  ""
 ],
 "Storage Logs": [
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
  ""
 ],
 "Swap": [
  null,
  ""
 ],
 "Synchronizing RAID Device $target": [
  null,
  ""
 ],
 "Targets": [
  null,
  ""
 ],
 "The \"storaged\" API is not available on this system.": [
  null,
  ""
 ],
 "The RAID Array is in a degraded state": [
  null,
  ""
 ],
 "The user <b>$0</b> is not permitted to manage storage": [
  null,
  "Der Benutzer <b>$0</b> hat keine Rechte, Speicher zu verwalten."
 ],
 "There are devices with multiple paths on the system, but the multipath service is not running.": [
  null,
  ""
 ],
 "Thin Logical Volume": [
  null,
  ""
 ],
 "This logical volume cannot be made smaller.": [
  null,
  ""
 ],
 "Type": [
  null,
  "Typ"
 ],
 "UUID": [
  null,
  ""
 ],
 "Unable to reach server": [
  null,
  ""
 ],
 "Unknown": [
  null,
  "Unbekannt"
 ],
 "Unknown host name": [
  null,
  ""
 ],
 "Unlock": [
  null,
  "Öffnen"
 ],
 "Unlocking $target": [
  null,
  ""
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
  ""
 ],
 "Unsupported volume": [
  null,
  ""
 ],
 "Usage": [
  null,
  ""
 ],
 "Used": [
  null,
  "Benutzt"
 ],
 "Username": [
  null,
  ""
 ],
 "VFAT - Compatible with all systems and devices": [
  null,
  "VFAT - Kompatibel mit allen System und Geräten"
 ],
 "Very securely erasing $target": [
  null,
  "$target wird sehr sicher gelöscht"
 ],
 "Volume": [
  null,
  ""
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
 "Writing": [
  null,
  ""
 ],
 "XFS - Red Hat Enterprise Linux 7 default": [
  null,
  "XFS - Red Hat Enterprise Linux 7 default"
 ],
 "[$0 bytes of binary data]": [
  null,
  ""
 ],
 "[binary data]": [
  null,
  ""
 ],
 "[no data]": [
  null,
  ""
 ],
 "ext4 - Red Hat Enterprise Linux 6 default": [
  null,
  "ext4 - Red Hat Enterprise Linux 6 default"
 ],
 "iSCSI Targets": [
  null,
  ""
 ],
 "unknown target": [
  null,
  "Unbekanntes Ziel"
 ],
 "storage-id-desc\u0004$0 File System": [
  null,
  "$0 Dateisystem"
 ],
 "storage-id-desc\u0004Encrypted data": [
  null,
  ""
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
 "storage\u0004Assessment": [
  null,
  "Beurteilung"
 ],
 "storage\u0004Bitmap": [
  null,
  "Bitmap"
 ],
 "storage\u0004Capacity": [
  null,
  "Kapazität"
 ],
 "storage\u0004Device": [
  null,
  "Gerät"
 ],
 "storage\u0004Device File": [
  null,
  "Gerätedatei"
 ],
 "storage\u0004Drive": [
  null,
  "Speichergerät"
 ],
 "storage\u0004Firmware Version": [
  null,
  "Firmware Version"
 ],
 "storage\u0004Hard Disk": [
  null,
  "Festplatte"
 ],
 "storage\u0004Model": [
  null,
  "Modell"
 ],
 "storage\u0004Multipathed Devices": [
  null,
  "Andere Geräte"
 ],
 "storage\u0004Optical Drive": [
  null,
  "Optisches Speichergerät"
 ],
 "storage\u0004RAID Level": [
  null,
  "RAID Ebene"
 ],
 "storage\u0004Removable Drive": [
  null,
  "Entfernbares Speichergerät"
 ],
 "storage\u0004Serial Number": [
  null,
  "Seriennummer"
 ],
 "storage\u0004Solid-State Disk": [
  null,
  "Solid-State Datenträger"
 ],
 "storage\u0004State": [
  null,
  "Status"
 ],
 "storage\u0004UUID": [
  null,
  "UUID"
 ],
 "storage\u0004World Wide Name": [
  null,
  "Weltweiter Name"
 ],
 "format-bytes\u0004bytes": [
  null,
  "Bytes"
 ]
}));
