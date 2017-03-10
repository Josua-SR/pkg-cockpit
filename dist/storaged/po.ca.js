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
  "language": "ca",
  "x-generator": "Zanata 3.9.6"
 },
 "$0 Block Device": [
  null,
  "Dispositiu de blocs $0"
 ],
 "$0 Chunk Size": [
  null,
  "$0 de mida del tros"
 ],
 "$0 Disks": [
  null,
  "$0 discs"
 ],
 "$0 day": [
  "$0 days",
  "",
  ""
 ],
 "$0 disk is missing": [
  "$0 disks are missing",
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
  "$0 de $1"
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
 "$0, $1 free": [
  null,
  "$0 amb $1 lliures"
 ],
 "$name (from $host)": [
  null,
  "$name (de $host)"
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
  "1 MiB"
 ],
 "1 day": [
  null,
  "1 dia"
 ],
 "1 hour": [
  null,
  "1 hora"
 ],
 "1 week": [
  null,
  "1 setmana"
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
  "5 minuts"
 ],
 "512 KiB": [
  null,
  "512 KiB"
 ],
 "6 hours": [
  null,
  "6 hores"
 ],
 "64 KiB": [
  null,
  "64 KiB"
 ],
 "8 KiB": [
  null,
  "8 KiB"
 ],
 "<span>Encrypted $0</span>": [
  null,
  "<span>Xifrat $0</span>"
 ],
 "<span>Encrypted Logical Volume of $0</span>": [
  null,
  "<span>Volum lògic xifrat de $0</span>"
 ],
 "<span>Encrypted Partition of $0</span>": [
  null,
  "<span>Partició xifrada de $0</span>"
 ],
 "<span>Logical Volume of $0</span>": [
  null,
  "<span>Volum lògic de $0</span>"
 ],
 "<span>Partition of $0</span>": [
  null,
  "<span>Partició de $0</span>"
 ],
 "Activate": [
  null,
  "Activa"
 ],
 "Activating $target": [
  null,
  "S'està activant $target"
 ],
 "Add": [
  null,
  "Afegeix"
 ],
 "Add Disks": [
  null,
  "Afegeix discs"
 ],
 "Add iSCSI Portal": [
  null,
  "Afegeix un portal iSCSI"
 ],
 "Adding physical volume to $target": [
  null,
  "S'està afegint el volum físic a $target"
 ],
 "Address": [
  null,
  "Adreça"
 ],
 "Apply": [
  null,
  "Aplica"
 ],
 "At least $0 disks are needed.": [
  null,
  "Com a mínim es necessiten $0 discs."
 ],
 "At least one disk is needed.": [
  null,
  "Com a mínim es necessita un disc."
 ],
 "Authentication required": [
  null,
  ""
 ],
 "Available targets on $0": [
  null,
  "Objectius disponibles en $0"
 ],
 "Block Device": [
  null,
  "Dispositiu de blocs"
 ],
 "Block device for filesystems": [
  null,
  ""
 ],
 "Blocked": [
  null,
  "Bloquejat"
 ],
 "Can't delete while unlocked": [
  null,
  ""
 ],
 "Cancel": [
  null,
  "Cancel·la"
 ],
 "Change": [
  null,
  "Canvia"
 ],
 "Change iSCSI Initiator Name": [
  null,
  "Canvia el nom d'iniciador iSCSI"
 ],
 "Checking RAID Device $target": [
  null,
  ""
 ],
 "Checking and Repairing RAID Device $target": [
  null,
  ""
 ],
 "Chunk Size": [
  null,
  "Mida del tros"
 ],
 "Cleaning up for $target": [
  null,
  "Neteja de $target"
 ],
 "Close": [
  null,
  "Tanca"
 ],
 "Compatible with all systems and devices (MBR)": [
  null,
  "Compatible amb tots els sistemes i dispositius (MBR)"
 ],
 "Compatible with modern system and hard disks > 2TB (GPT)": [
  null,
  "Compatible amb els sistemes moderns i els discs durs > 2TB (GPT)"
 ],
 "Confirm passphrase": [
  null,
  "Confirmació de la contrasenya"
 ],
 "Content": [
  null,
  "Contingut"
 ],
 "Create": [
  null,
  "Crea"
 ],
 "Create Logical Volume": [
  null,
  ""
 ],
 "Create Partition": [
  null,
  "Crea una partició"
 ],
 "Create RAID Device": [
  null,
  "Crea un dispositiu RAID"
 ],
 "Create Snapshot": [
  null,
  "Crea una instantània"
 ],
 "Create Thin Volume": [
  null,
  "Crea un volum disgregat"
 ],
 "Create Volume Group": [
  null,
  "Crea un grup de volums"
 ],
 "Create new Logical Volume": [
  null,
  ""
 ],
 "Create partition": [
  null,
  "Crea una partició"
 ],
 "Create partition on $0": [
  null,
  "Crea una partició a $0"
 ],
 "Create partition table": [
  null,
  "Crea la taula de particions"
 ],
 "Creating RAID Device $target": [
  null,
  "S'està creant el dispositiu RAID $target"
 ],
 "Creating filesystem on $target": [
  null,
  "S'està creat el sistema de fitxers a $target"
 ],
 "Creating logical volume $target": [
  null,
  "S'està creant el volum lògic $target"
 ],
 "Creating partition $target": [
  null,
  "S'està creant la partició $target"
 ],
 "Creating snapshot of $target": [
  null,
  "S'està creant una instantània de $target"
 ],
 "Creating volume group $target": [
  null,
  "S'està creant el grup de volums $target"
 ],
 "Custom": [
  null,
  "Personalitzat"
 ],
 "Custom (Enter filesystem type)": [
  null,
  "Personalitzat (introduïu el tipus del sistema de fitxers)"
 ],
 "DISK IS FAILING": [
  null,
  "EL DISC ESTÀ FALLANT"
 ],
 "Data Used": [
  null,
  ""
 ],
 "Deactivate": [
  null,
  "Desactiva"
 ],
 "Deactivating $target": [
  null,
  "S'està desactivant $target"
 ],
 "Default": [
  null,
  "Predeterminat"
 ],
 "Delete": [
  null,
  "Suprimeix"
 ],
 "Deleting $target": [
  null,
  "S'està suprimint $target"
 ],
 "Deleting a RAID device will erase all data on it.": [
  null,
  "La supressió d'un dispositiu RAID n'esborrarà totes les dades."
 ],
 "Deleting a logical volume will delete all data in it.": [
  null,
  "La supressió d'un volum lògic n'esborrarà totes les dades."
 ],
 "Deleting a partition will delete all data in it.": [
  null,
  "La supressió d'una partició n'esborrarà totes les dades."
 ],
 "Deleting a volume group will erase all data on it.": [
  null,
  "La supressió d'un grup de volums n'esborrarà totes les dades."
 ],
 "Deleting volume group $target": [
  null,
  "S'està suprimint el grup de volums $target"
 ],
 "Device $0 is a member of RAID Array $1": [
  null,
  "El dispositiu $0 és un membre de la matriu RAID $1"
 ],
 "Device $0 is a physical volume of $1": [
  null,
  "El dispositiu $0 és un volum físic de $1"
 ],
 "Device $0 is mounted on $1": [
  null,
  "El dispositiu $0 està muntat a $1"
 ],
 "Device is read-only": [
  null,
  ""
 ],
 "Disk is OK": [
  null,
  "El disc està bé"
 ],
 "Disks": [
  null,
  "Discs"
 ],
 "Don't overwrite existing data": [
  null,
  "No sobreescriguis les dades existents"
 ],
 "Drive": [
  null,
  "Unitat"
 ],
 "Drives": [
  null,
  "Unitats"
 ],
 "Edit": [
  null,
  ""
 ],
 "Ejecting $target": [
  null,
  "S'està expulsant $target"
 ],
 "Emptying $target": [
  null,
  "S'està buidant $target"
 ],
 "Encrypted EXT4 (LUKS)": [
  null,
  "EXT4 xifrat (LUKS)"
 ],
 "Encrypted XFS (LUKS)": [
  null,
  "XFS xifrat (LUKS)"
 ],
 "Encryption": [
  null,
  ""
 ],
 "Encryption Options": [
  null,
  "Opcions de xifrat"
 ],
 "Erase": [
  null,
  "Esborra"
 ],
 "Erasing $target": [
  null,
  "S'està esborrant $target"
 ],
 "Error": [
  null,
  "Error"
 ],
 "Extended Partition": [
  null,
  "Partició estesa"
 ],
 "FAILED": [
  null,
  "FALLAT"
 ],
 "Filesystem": [
  null,
  "Sistema de fitxers"
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
  "Tipus de sistema de fitxers"
 ],
 "Filesystems": [
  null,
  "Sistemes de fitxers"
 ],
 "Format": [
  null,
  "Formata"
 ],
 "Format $0": [
  null,
  "Formata $0"
 ],
 "Format Disk $0": [
  null,
  "Formata el disc $0"
 ],
 "Formatting a disk will erase all data on it.": [
  null,
  "La formatació d'un disc eliminarà totes les dades contingudes."
 ],
 "Formatting a storage device will erase all data on it.": [
  null,
  "La formatació d'un dispositiu d'emmagatzematge eliminarà totes les dades contingudes."
 ],
 "Free": [
  null,
  "Lliure"
 ],
 "Free Space": [
  null,
  ""
 ],
 "Go to now": [
  null,
  "Vés a ara"
 ],
 "In Sync": [
  null,
  "En sincronització"
 ],
 "Inactive volume": [
  null,
  ""
 ],
 "Invalid username or password": [
  null,
  "El nom d'usuari o la contrasenya no són vàlids"
 ],
 "Jobs": [
  null,
  "Treballs"
 ],
 "Lock": [
  null,
  "Bloqueja"
 ],
 "Locking $target": [
  null,
  "S'està bloquejant $target"
 ],
 "Logical Volume": [
  null,
  "Volum lògic"
 ],
 "Logical Volume (Snapshot)": [
  null,
  "Volum lògic (instantània)"
 ],
 "Marking $target as faulty": [
  null,
  "S'està ficant $target com a defectuós"
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
  "S'està modificant $target"
 ],
 "Mount": [
  null,
  "Munta"
 ],
 "Mount Options": [
  null,
  "Opcions de muntatge"
 ],
 "Mount Point": [
  null,
  "Punt de muntatge"
 ],
 "Mounted At": [
  null,
  ""
 ],
 "Mounting": [
  null,
  "Muntatge"
 ],
 "Mounting $target": [
  null,
  "S'està muntat $target"
 ],
 "NTFS - Compatible with most systems": [
  null,
  "NTFS - Compatible amb la majoria dels sistemes"
 ],
 "Name": [
  null,
  "Nom"
 ],
 "Name cannot be empty.": [
  null,
  ""
 ],
 "Name cannot be longer than 127 characters.": [
  null,
  ""
 ],
 "Name cannot contain the character '$0'.": [
  null,
  ""
 ],
 "Name cannot contain whitespace.": [
  null,
  "El nom no pot contenir l'espai en blanc."
 ],
 "Next": [
  null,
  "Següent"
 ],
 "No Filesystem": [
  null,
  "Sense sistema de fitxers"
 ],
 "No Logical Volumes": [
  null,
  ""
 ],
 "No drives attached": [
  null,
  "Sense unitats connectades"
 ],
 "No free space": [
  null,
  ""
 ],
 "No iSCSI targets set up": [
  null,
  "Sense destinacions iSCSI preparades"
 ],
 "No media inserted": [
  null,
  "Sense mitjans inserits"
 ],
 "No partitioning": [
  null,
  "Sense particionatge"
 ],
 "No storage set up as RAID": [
  null,
  "Cap emmagatgematge preparat com a RAID"
 ],
 "No volume groups created": [
  null,
  "Cap grup de volums creat"
 ],
 "Not found": [
  null,
  "No s'ha trobat"
 ],
 "Not running": [
  null,
  "No s'està executant"
 ],
 "Off": [
  null,
  "Apagat"
 ],
 "On": [
  null,
  "Engegat"
 ],
 "Operation '$operation' on $target": [
  null,
  "L'operació '$operation' en $target"
 ],
 "Options": [
  null,
  "Opcions"
 ],
 "Other Devices": [
  null,
  "Altres dispositius"
 ],
 "Overwrite existing data with zeros": [
  null,
  "Sobreescriu les dades existents amb zeros"
 ],
 "Partition": [
  null,
  "Partició"
 ],
 "Partitioning": [
  null,
  "Particionatge"
 ],
 "Passphrase": [
  null,
  "Contrasenya"
 ],
 "Passphrase cannot be empty": [
  null,
  ""
 ],
 "Passphrases do not match": [
  null,
  "Les contrasenyes no coincideixen"
 ],
 "Password": [
  null,
  "Contrasenya"
 ],
 "Physical Volume": [
  null,
  ""
 ],
 "Physical Volumes": [
  null,
  "Volums físics"
 ],
 "Physical volume of $0": [
  null,
  ""
 ],
 "Please confirm deletion of $0": [
  null,
  "Si us plau, confirmeu la supressió de $0"
 ],
 "Pool": [
  null,
  ""
 ],
 "Pool for Thin Logical Volumes": [
  null,
  "Agrupació per als volums lògics disgregats"
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
  "Port"
 ],
 "Purpose": [
  null,
  ""
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
  "RAID 0 (segmentació)"
 ],
 "RAID 1": [
  null,
  "RAID 1"
 ],
 "RAID 1 (Mirror)": [
  null,
  "RAID 1 (rèplica)"
 ],
 "RAID 10": [
  null,
  "RAID 10"
 ],
 "RAID 10 (Stripe of Mirrors)": [
  null,
  "RAID 10 (segmentació de rèpliques)"
 ],
 "RAID 4": [
  null,
  "RAID 4"
 ],
 "RAID 4 (Dedicated Parity)": [
  null,
  "RAID 4 (paritat dedicada)"
 ],
 "RAID 5": [
  null,
  "RAID 5"
 ],
 "RAID 5 (Distributed Parity)": [
  null,
  "RAID 5 (paritat distribuïda)"
 ],
 "RAID 6": [
  null,
  "RAID 6"
 ],
 "RAID 6 (Double Distributed Parity)": [
  null,
  "RAID 5 (doble paritat distribuïda)"
 ],
 "RAID Device": [
  null,
  "Dispositiu RAID"
 ],
 "RAID Device $0": [
  null,
  "Dispositiu RAID $0"
 ],
 "RAID Devices": [
  null,
  "Dispositius RAID"
 ],
 "RAID Level": [
  null,
  "Nivell RAID"
 ],
 "RAID Member": [
  null,
  ""
 ],
 "Reading": [
  null,
  "Lectura"
 ],
 "Reboot": [
  null,
  "Rearrencada"
 ],
 "Recovering": [
  null,
  "Recuperació"
 ],
 "Recovering RAID Device $target": [
  null,
  ""
 ],
 "Removing $target from RAID Device": [
  null,
  "S'està eliminant $target  del dispositiu RAID"
 ],
 "Removing physical volume from $target": [
  null,
  "S'està eliminant el volum físic de $target"
 ],
 "Rename": [
  null,
  "Reanomena"
 ],
 "Rename Logical Volume": [
  null,
  ""
 ],
 "Rename Volume Group": [
  null,
  "Reanomena un grup de volums"
 ],
 "Renaming $target": [
  null,
  "S'està reanomenant $target"
 ],
 "Resize": [
  null,
  "Redimensiona"
 ],
 "Resize Filesystem": [
  null,
  "Redimensiona el sistema de fitxers"
 ],
 "Resize Logical Volume": [
  null,
  "Redimensiona el volum lògic"
 ],
 "Resizing $target": [
  null,
  "S'està redimensionant $target"
 ],
 "Running": [
  null,
  "En execució"
 ],
 "SMART self-test of $target": [
  null,
  "Autotest SMART de $target."
 ],
 "Securely erasing $target": [
  null,
  "S'està eliminant de forma segura $target"
 ],
 "Server Address": [
  null,
  "Adreça del servidor"
 ],
 "Server address cannot be empty.": [
  null,
  ""
 ],
 "Setting up loop device $target": [
  null,
  "S'està preparant el dispositiu de bucles $target"
 ],
 "Size": [
  null,
  "Mida"
 ],
 "Size cannot be negative": [
  null,
  ""
 ],
 "Size cannot be zero": [
  null,
  ""
 ],
 "Size is too large": [
  null,
  ""
 ],
 "Size must be a number": [
  null,
  ""
 ],
 "Spare": [
  null,
  "Recanvi"
 ],
 "Start": [
  null,
  "Inicia"
 ],
 "Start Multipath": [
  null,
  "Inicia el multicamí"
 ],
 "Start Scrubbing": [
  null,
  "Inicia el tractament de neteja"
 ],
 "Starting RAID Device $target": [
  null,
  "S'està iniciant el dispositiu RAID $target"
 ],
 "Starting swapspace $target": [
  null,
  "S'està iniciant l'espai d'intercanvi $target"
 ],
 "Stop": [
  null,
  "Atura"
 ],
 "Stop Scrubbing": [
  null,
  "Atura el tractament de neteja"
 ],
 "Stopping RAID Device $target": [
  null,
  "S'està aturant el dispositiu RAID $target"
 ],
 "Stopping swapspace $target": [
  null,
  "S'està aturant l'espai d'intercanvi $target"
 ],
 "Storage": [
  null,
  "Emmagatzematge"
 ],
 "Storage Log": [
  null,
  "Registre de l'emmagatzematge"
 ],
 "Storage Logs": [
  null,
  "Registres de l'emmagatzematge"
 ],
 "Store passphrase": [
  null,
  "Emmagatzema la contrasenya"
 ],
 "Stored Passphrase": [
  null,
  "Contrasenya emmagatzemada"
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
  "Objectius"
 ],
 "The \"storaged\" API is not available on this system.": [
  null,
  "L'API «storaged» no està disponible en aquest sistema."
 ],
 "The RAID Array is in a degraded state": [
  null,
  ""
 ],
 "The last physical volume of a volume group cannot be removed.": [
  null,
  ""
 ],
 "The user <b>$0</b> is not permitted to manage storage": [
  null,
  "A l'usuari <b>$0</b> no se li permet gestionar l'emmagatzematge"
 ],
 "There are devices with multiple paths on the system, but the multipath service is not running.": [
  null,
  ""
 ],
 "There is not enough free space elsewhere to remove this physical volume.  At least $0 more free space is needed.": [
  null,
  ""
 ],
 "Thin Logical Volume": [
  null,
  "Volums lògics disgregats"
 ],
 "This logical volume cannot be made smaller.": [
  null,
  ""
 ],
 "Type": [
  null,
  "Tipus"
 ],
 "UUID": [
  null,
  ""
 ],
 "Unable to reach server": [
  null,
  "No es pot arribar al servidor"
 ],
 "Unknown": [
  null,
  "Desconegut"
 ],
 "Unknown ($0)": [
  null,
  "Desconegut ($0)"
 ],
 "Unknown host name": [
  null,
  "Nom d'amfitrió desconegut"
 ],
 "Unlock": [
  null,
  "Desbloqueja"
 ],
 "Unlocking $target": [
  null,
  "S'està desbloquejant $target"
 ],
 "Unmount": [
  null,
  "Desmunta"
 ],
 "Unmounting $target": [
  null,
  "S'està desmuntat $target"
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
  "Utilitzat"
 ],
 "Username": [
  null,
  ""
 ],
 "VFAT - Compatible with all systems and devices": [
  null,
  "VFAT - Compatible amb tots els sistemes i dispositius"
 ],
 "Very securely erasing $target": [
  null,
  "S'està eliminant de forma molt segura $target"
 ],
 "Volume": [
  null,
  "Volum"
 ],
 "Volume Group": [
  null,
  "Grup de volums"
 ],
 "Volume Group $0": [
  null,
  "Grup de volums $0"
 ],
 "Volume Groups": [
  null,
  "Grups de volums"
 ],
 "Write-mostly": [
  null,
  "Escriptura-majoritària"
 ],
 "Writing": [
  null,
  "Escriptura"
 ],
 "XFS - Red Hat Enterprise Linux 7 default": [
  null,
  "XFS - per defecte Red Hat Enterprise Linux 7"
 ],
 "[$0 bytes of binary data]": [
  null,
  "[$0 bytes de dades binàries]"
 ],
 "[binary data]": [
  null,
  "[dades binàries]"
 ],
 "[no data]": [
  null,
  "[sense dades]"
 ],
 "ext4 - Red Hat Enterprise Linux 6 default": [
  null,
  "ext4 - per defecte a Red Hat Enterprise Linux 6"
 ],
 "iSCSI Targets": [
  null,
  "Destinacions iSCSI"
 ],
 "unknown target": [
  null,
  "objectiu desconegut"
 ],
 "storage-id-desc\u0004$0 File System": [
  null,
  "sistema de fitxers $0"
 ],
 "storage-id-desc\u0004Encrypted data": [
  null,
  ""
 ],
 "storage-id-desc\u0004Other Data": [
  null,
  "Altres dades"
 ],
 "storage-id-desc\u0004Swap Space": [
  null,
  "espai d'intercanvi"
 ],
 "storage-id-desc\u0004Unrecognized Data": [
  null,
  "Dades no reconegudes"
 ],
 "storage\u0004Assessment": [
  null,
  "Avaluació"
 ],
 "storage\u0004Bitmap": [
  null,
  "Mapa de bits"
 ],
 "storage\u0004Capacity": [
  null,
  "Capacitat"
 ],
 "storage\u0004Device": [
  null,
  "Dispositiu"
 ],
 "storage\u0004Device File": [
  null,
  "Fitxer de dispositiu"
 ],
 "storage\u0004Drive": [
  null,
  "Unitat"
 ],
 "storage\u0004Firmware Version": [
  null,
  "Versió de microprogramari"
 ],
 "storage\u0004Hard Disk": [
  null,
  "Disc dur"
 ],
 "storage\u0004Model": [
  null,
  "Model"
 ],
 "storage\u0004Multipathed Devices": [
  null,
  "Dispositius amb multicamí"
 ],
 "storage\u0004Optical Drive": [
  null,
  "Unitat òptica"
 ],
 "storage\u0004RAID Level": [
  null,
  "Nivell RAID"
 ],
 "storage\u0004Removable Drive": [
  null,
  "Disc extraïble"
 ],
 "storage\u0004Serial Number": [
  null,
  "Número de sèrie"
 ],
 "storage\u0004Solid-State Disk": [
  null,
  "Disc d'estat sòlid"
 ],
 "storage\u0004State": [
  null,
  "Estat"
 ],
 "storage\u0004UUID": [
  null,
  "UUID"
 ],
 "storage\u0004World Wide Name": [
  null,
  "WWN (World Wide Name)"
 ],
 "format-bytes\u0004bytes": [
  null,
  "bytes"
 ]
}));
