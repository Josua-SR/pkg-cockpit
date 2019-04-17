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
  "x-generator": "Zanata 4.6.2"
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
 "$0 data + $1 overhead used of $2 ($3)": [
  null,
  ""
 ],
 "$0 disk is missing": [
  "$0 disks are missing",
  "falta $0 disc",
  "falten $0 discs"
 ],
 "$0 filesystems can not be made larger.": [
  null,
  ""
 ],
 "$0 filesystems can not be made smaller.": [
  null,
  ""
 ],
 "$0 filesystems can not be resized here.": [
  null,
  ""
 ],
 "$0 is in active use": [
  null,
  ""
 ],
 "$0 is not available from any repository.": [
  null,
  ""
 ],
 "$0 of $1": [
  null,
  "$0 de $1"
 ],
 "$0 slots remain": [
  null,
  ""
 ],
 "$0 used of $1 ($2 saved)": [
  null,
  "$0 utilitzats de $1 ($2 estalviat)"
 ],
 "$0 will be installed.": [
  null,
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
 "${size} ${desc}": [
  null,
  "${desc} de ${size}"
 ],
 "(default)": [
  null,
  "(predeterminat)"
 ],
 "(none)": [
  null,
  "(sense)"
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
 "A disk is needed.": [
  null,
  "Es necessita un disc."
 ],
 "A spare disk needs to be added first before this disk can be removed.": [
  null,
  ""
 ],
 "Activate": [
  null,
  "Activa"
 ],
 "Activating $target": [
  null,
  "S'està activant $target"
 ],
 "Active since": [
  null,
  ""
 ],
 "Add": [
  null,
  "Afegeix"
 ],
 "Add Disks": [
  null,
  "Afegeix discs"
 ],
 "Add Key": [
  null,
  ""
 ],
 "Add iSCSI Portal": [
  null,
  "Afegeix un portal iSCSI"
 ],
 "Adding physical volume to $target": [
  null,
  "S'està afegint el volum físic a $target"
 ],
 "Additional packages:": [
  null,
  ""
 ],
 "Address": [
  null,
  "Adreça"
 ],
 "Address cannot be empty": [
  null,
  ""
 ],
 "Address is not a valid URL": [
  null,
  ""
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
  "Autenticació requerida"
 ],
 "Available targets on $0": [
  null,
  "Objectius disponibles en $0"
 ],
 "Backing Device": [
  null,
  ""
 ],
 "Block": [
  null,
  "Bloc"
 ],
 "Block device for filesystems": [
  null,
  "Dispositiu de blocs per al sistema de fitxers"
 ],
 "Blocked": [
  null,
  "Bloquejat"
 ],
 "Can't delete while unlocked": [
  null,
  "No es pot suprimir mentre estigui desbloquejat"
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
 "Change passphrase": [
  null,
  ""
 ],
 "Checking $target": [
  null,
  ""
 ],
 "Checking RAID Device $target": [
  null,
  ""
 ],
 "Checking and Repairing RAID Device $target": [
  null,
  ""
 ],
 "Checking installed software": [
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
 "Compression": [
  null,
  "Compressió"
 ],
 "Confirm passphrase": [
  null,
  "Confirmació de la contrasenya"
 ],
 "Confirm removal with passphrase": [
  null,
  ""
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
  "Crea un volum lògic"
 ],
 "Create Partition": [
  null,
  "Crea una partició"
 ],
 "Create Partition Table": [
  null,
  ""
 ],
 "Create Partition on $0": [
  null,
  "Crea la partició a $0"
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
 "Create VDO Device": [
  null,
  "Crea un dispositiu VDO"
 ],
 "Create Volume Group": [
  null,
  "Crea un grup de volums"
 ],
 "Create new Logical Volume": [
  null,
  "Crea un volum lògic nou"
 ],
 "Creating RAID Device $target": [
  null,
  "S'està creant el dispositiu RAID $target"
 ],
 "Creating filesystem on $target": [
  null,
  "S'està creant el sistema de fitxers a $target"
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
 "Custom encryption options": [
  null,
  "Opcions personalitzades de xifrat"
 ],
 "Custom mount options": [
  null,
  "Opcions personalitzades de muntatge"
 ],
 "DISK IS FAILING": [
  null,
  "EL DISC ESTÀ FALLANT"
 ],
 "Data Used": [
  null,
  "Dades utilitzades"
 ],
 "Deactivate": [
  null,
  "Desactiva"
 ],
 "Deactivating $target": [
  null,
  "S'està desactivant $target"
 ],
 "Deduplication": [
  null,
  "Deduplicació"
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
 "Deleting a VDO device will erase all data on it.": [
  null,
  "Si suprimiu un dispositiu VDO, s'esborraran totes les dades."
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
 "Device File": [
  null,
  "Fitxer de dispositiu"
 ],
 "Device is read-only": [
  null,
  "El dispositiu és de només lectura"
 ],
 "Disk": [
  null,
  "Disc"
 ],
 "Disk is OK": [
  null,
  "El disc està bé"
 ],
 "Disk passphrase": [
  null,
  ""
 ],
 "Disks": [
  null,
  "Discs"
 ],
 "Don't overwrite existing data": [
  null,
  "No sobreescriguis les dades existents"
 ],
 "Downloading $0": [
  null,
  ""
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
  "Edita"
 ],
 "Edit Tang keyserver": [
  null,
  ""
 ],
 "Editing a key requires a free slot": [
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
 "Encrypted $0": [
  null,
  "$0 xifrat"
 ],
 "Encrypted EXT4 (LUKS)": [
  null,
  "EXT4 xifrat (LUKS)"
 ],
 "Encrypted Logical Volume of $0": [
  null,
  "Volum lògic xifrat de $0"
 ],
 "Encrypted Partition of $0": [
  null,
  "Partició xifrada de $0"
 ],
 "Encrypted XFS (LUKS)": [
  null,
  "XFS xifrat (LUKS)"
 ],
 "Encrypted volumes can not be resized here.": [
  null,
  ""
 ],
 "Encrypted volumes need to be unlocked before they can be resized.": [
  null,
  ""
 ],
 "Encryption": [
  null,
  "Xifratge"
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
  "Muntatge del sistema de fitxers"
 ],
 "Filesystem Name": [
  null,
  "Nom del sistema de fitxers"
 ],
 "Filesystem type": [
  null,
  "Tipus de sistema de fitxers"
 ],
 "Filesystems": [
  null,
  "Sistemes de fitxers"
 ],
 "For legacy applications only. Reduces performance.": [
  null,
  ""
 ],
 "Force remove passphrase in $0": [
  null,
  ""
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
  "Espai lliure"
 ],
 "Free up space in this group: Shrink or delete other logical volumes or add another physical volume.": [
  null,
  ""
 ],
 "Go to now": [
  null,
  "Vés a ara"
 ],
 "Grow": [
  null,
  "Fes créixer"
 ],
 "Grow Content": [
  null,
  ""
 ],
 "Grow Logical Volume": [
  null,
  ""
 ],
 "Grow logical size of $0": [
  null,
  "Fes créixer la mida lògica de $0"
 ],
 "Grow to take all space": [
  null,
  "Fes créixer per agafar tot l'espai"
 ],
 "If tang-show-keys is not available, run the following:": [
  null,
  ""
 ],
 "In Sync": [
  null,
  "En sincronització"
 ],
 "Inactive volume": [
  null,
  "Volum inactiu"
 ],
 "Index Memory": [
  null,
  ""
 ],
 "Install": [
  null,
  "Instal·la"
 ],
 "Install NFS Support": [
  null,
  ""
 ],
 "Install Software": [
  null,
  ""
 ],
 "Install VDO support": [
  null,
  ""
 ],
 "Installing $0": [
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
 "Key slots with unknown types can not be edited here": [
  null,
  ""
 ],
 "Key source": [
  null,
  ""
 ],
 "Keys": [
  null,
  ""
 ],
 "Keyserver": [
  null,
  ""
 ],
 "Keyserver address": [
  null,
  ""
 ],
 "Keyserver removal may prevent unlocking $0.": [
  null,
  ""
 ],
 "Local Mount Point": [
  null,
  "Punt de muntatge local"
 ],
 "Lock": [
  null,
  "Bloqueja"
 ],
 "Locking $target": [
  null,
  "S'està bloquejant $target"
 ],
 "Logical": [
  null,
  "Lògica"
 ],
 "Logical Size": [
  null,
  "Mida lògica"
 ],
 "Logical Volume": [
  null,
  "Volum lògic"
 ],
 "Logical Volume (Snapshot)": [
  null,
  "Volum lògic (instantània)"
 ],
 "Logical Volume of $0": [
  null,
  "Volum lògic de $0"
 ],
 "Make sure the key hash from the Tang server matches:": [
  null,
  ""
 ],
 "Manually check with SSH: ": [
  null,
  ""
 ],
 "Marking $target as faulty": [
  null,
  "S'està ficant $target com a defectuós"
 ],
 "Member of RAID Device": [
  null,
  "Membre del dispositiu RAID"
 ],
 "Member of RAID Device $0": [
  null,
  "Membre del dispositiu RAID $0"
 ],
 "Metadata Used": [
  null,
  "Metadades utilitzades"
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
 "Mount at boot": [
  null,
  "Munta a l'arrencada"
 ],
 "Mount point can not be empty": [
  null,
  "El punt de muntatge no pot estar en blanc"
 ],
 "Mount point cannot be empty.": [
  null,
  "El punt de muntatge no pot estar en blanc."
 ],
 "Mount point must start with \"/\".": [
  null,
  "El punt de muntatge ha de començar amb «/»."
 ],
 "Mount read only": [
  null,
  "Munta només de lectura"
 ],
 "Mounted At": [
  null,
  "Muntat a"
 ],
 "Mounting": [
  null,
  "Muntatge"
 ],
 "Mounting $target": [
  null,
  "S'està muntat $target"
 ],
 "NFS Mount": [
  null,
  "Muntatge NFS"
 ],
 "NFS Mounts": [
  null,
  "Muntatges NFS"
 ],
 "NFS Support not installed": [
  null,
  ""
 ],
 "Name": [
  null,
  "Nom"
 ],
 "Name can not be empty.": [
  null,
  "El nom no pot estar en blanc."
 ],
 "Name cannot be empty.": [
  null,
  "El nom no pot estar en blanc."
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
  "El nom no pot ser superior als 127 caràcters."
 ],
 "Name cannot contain the character '$0'.": [
  null,
  "El nom no pot contenir el caràcter «$0»."
 ],
 "Name cannot contain whitespace.": [
  null,
  "El nom no pot contenir l'espai en blanc."
 ],
 "New NFS Mount": [
  null,
  "Muntatge NFS nou"
 ],
 "New passphrase": [
  null,
  ""
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
  "Sense volums lògics"
 ],
 "No NFS mounts set up": [
  null,
  "Cap emmagatzematge NFS preparat"
 ],
 "No available slots": [
  null,
  ""
 ],
 "No disks are available.": [
  null,
  "No hi ha disponible cap disc."
 ],
 "No drives attached": [
  null,
  "Sense unitats connectades"
 ],
 "No free key slots": [
  null,
  ""
 ],
 "No free space": [
  null,
  "Sense espai lliure"
 ],
 "No iSCSI targets set up": [
  null,
  "Cap destinació iSCSI preparada"
 ],
 "No keys added": [
  null,
  ""
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
  "Cap emmagatzematge preparat com a RAID"
 ],
 "No storage set up as VDO": [
  null,
  "Cap emmagatzematge preparat com a VDO"
 ],
 "No volume groups created": [
  null,
  "Cap grup de volums creat"
 ],
 "Not enough space to grow.": [
  null,
  ""
 ],
 "Not found": [
  null,
  "No s'ha trobat"
 ],
 "Not mounted": [
  null,
  "No muntat"
 ],
 "Not running": [
  null,
  "No s'està executant"
 ],
 "Off": [
  null,
  "Off"
 ],
 "Ok": [
  null,
  "D'acord"
 ],
 "Old passphrase": [
  null,
  ""
 ],
 "On": [
  null,
  "On"
 ],
 "Only $0 of $1 are used.": [
  null,
  "Només s'utilitzen $0 de $1."
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
 "PackageKit crashed": [
  null,
  "PackageKit s'ha estavellat."
 ],
 "Partition": [
  null,
  "Partició"
 ],
 "Partition of $0": [
  null,
  "Partició de $0"
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
  "La contrasenya no pot estar en blanc"
 ],
 "Passphrase removal may prevent unlocking $0.": [
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
 "Path on Server": [
  null,
  "Camí al servidor"
 ],
 "Path on server cannot be empty.": [
  null,
  "El camí al servidor no pot estar en blanc."
 ],
 "Path on server must start with \"/\".": [
  null,
  "El camí al servidor ha de començar amb «/»."
 ],
 "Physical": [
  null,
  ""
 ],
 "Physical Volume": [
  null,
  "Volum físic"
 ],
 "Physical Volumes": [
  null,
  "Volums físics"
 ],
 "Physical volume of $0": [
  null,
  "Volum físic de $0"
 ],
 "Physical volumes can not be resized here.": [
  null,
  ""
 ],
 "Please confirm deletion of $0": [
  null,
  "Si us plau, confirmeu la supressió de $0"
 ],
 "Please confirm stopping of $0": [
  null,
  "Confirmeu l'aturada de $0"
 ],
 "Pool": [
  null,
  "Agrupació"
 ],
 "Pool for Thin Logical Volumes": [
  null,
  "Agrupació per als volums lògics disgregats"
 ],
 "Pool for Thin Volumes": [
  null,
  "Agrupació per als volums disgregats"
 ],
 "Pool for thinly provisioned volumes": [
  null,
  ""
 ],
 "Port": [
  null,
  "Port"
 ],
 "Process": [
  null,
  "Procés"
 ],
 "Purpose": [
  null,
  "Propòsit"
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
  "Membre RAID"
 ],
 "Reading": [
  null,
  "Lectura"
 ],
 "Reboot": [
  null,
  "Rearrencada"
 ],
 "Recommended default": [
  null,
  ""
 ],
 "Recovering": [
  null,
  "Recuperació"
 ],
 "Recovering RAID Device $target": [
  null,
  ""
 ],
 "Removals:": [
  null,
  ""
 ],
 "Remove": [
  null,
  "Suprimeix"
 ],
 "Remove $0?": [
  null,
  ""
 ],
 "Remove Tang keyserver": [
  null,
  ""
 ],
 "Remove device": [
  null,
  "Treu el dispositiu"
 ],
 "Remove passphrase": [
  null,
  ""
 ],
 "Remove passphrase in $0?": [
  null,
  ""
 ],
 "Removing $0": [
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
  "Reanomena el volum lògic"
 ],
 "Rename Volume Group": [
  null,
  "Reanomena un grup de volums"
 ],
 "Renaming $target": [
  null,
  "S'està reanomenant $target"
 ],
 "Repairing $target": [
  null,
  ""
 ],
 "Repeat passphrase": [
  null,
  ""
 ],
 "Resizing $target": [
  null,
  "S'està redimensionant $target"
 ],
 "Resizing an encrypted filesystem requires unlocking the disk. Please provide a current disk passphrase.": [
  null,
  ""
 ],
 "Running": [
  null,
  "En execució"
 ],
 "SMART self-test of $target": [
  null,
  "Autotest SMART de $target."
 ],
 "Save": [
  null,
  "Desa"
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
  ""
 ],
 "Securely erasing $target": [
  null,
  "S'està eliminant de forma segura $target"
 ],
 "Server": [
  null,
  "Servidor"
 ],
 "Server Address": [
  null,
  "Adreça del servidor"
 ],
 "Server address cannot be empty.": [
  null,
  "L'adreça del servidor no pot estar en blanc."
 ],
 "Server cannot be empty.": [
  null,
  "El servidor no pot estar en blanc."
 ],
 "Service": [
  null,
  "Servei"
 ],
 "Session": [
  null,
  "Sessió"
 ],
 "Setting up loop device $target": [
  null,
  "S'està preparant el dispositiu de bucles $target"
 ],
 "Shrink": [
  null,
  ""
 ],
 "Shrink Logical Volume": [
  null,
  ""
 ],
 "Shrink Volume": [
  null,
  ""
 ],
 "Size": [
  null,
  "Mida"
 ],
 "Size cannot be negative": [
  null,
  "La mida no pot ser negativa"
 ],
 "Size cannot be zero": [
  null,
  "La mida no pot ser zero"
 ],
 "Size is too large": [
  null,
  "La mida és massa gran"
 ],
 "Size must be a number": [
  null,
  "La mida ha de ser un número"
 ],
 "Size must be at least $0": [
  null,
  "La mida com a mínim ha de ser $0"
 ],
 "Slot $0": [
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
 "Stop Device": [
  null,
  "Atura el dispositiu"
 ],
 "Stop and Unmount": [
  null,
  "Atura i desmunta"
 ],
 "Stop and remove": [
  null,
  "Atura i treu"
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
 "Storage Logs": [
  null,
  "Registres de l'emmagatzematge"
 ],
 "Storage can not be managed on this system.": [
  null,
  ""
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
  "Contrasenya emmagatzemada"
 ],
 "Support is installed.": [
  null,
  ""
 ],
 "Swap": [
  null,
  "Intercanvi"
 ],
 "Synchronizing RAID Device $target": [
  null,
  "Sincronització del dispositiu RAID $target"
 ],
 "Tang keyserver": [
  null,
  ""
 ],
 "The RAID Array is in a degraded state": [
  null,
  ""
 ],
 "The RAID device must be running in order to add spare disks.": [
  null,
  ""
 ],
 "The RAID device must be running in order to remove disks.": [
  null,
  ""
 ],
 "The creation of this VDO device did not finish and the device can't be used.": [
  null,
  "No s'ha finalitzat la creació d'aquest dispositiu VDO i no es pot utilitzar aquest dispositiu."
 ],
 "The currently logged in user is not permitted to see information about keys.": [
  null,
  ""
 ],
 "The filesystem is in use by login sessions and system services. Proceeding will stop these.": [
  null,
  ""
 ],
 "The filesystem is in use by login sessions. Proceeding will stop these.": [
  null,
  ""
 ],
 "The filesystem is in use by system services. Proceeding will stop these.": [
  null,
  ""
 ],
 "The last disk of a RAID device cannot be removed.": [
  null,
  "No es pot treure l'últim disc d'un dispositiu RAID."
 ],
 "The last key slot can not be removed": [
  null,
  ""
 ],
 "The last physical volume of a volume group cannot be removed.": [
  null,
  "No es pot treure l'últim volum físic d'un grup de volums."
 ],
 "The user <b>$0</b> is not permitted to manage storage": [
  null,
  "A l'usuari <b>$0</b> no se li permet gestionar l'emmagatzematge"
 ],
 "There are devices with multiple paths on the system, but the multipath service is not running.": [
  null,
  "Hi ha dispositius amb diversos camins al sistema, però no s'està executant el servei multipath."
 ],
 "There is not enough free space elsewhere to remove this physical volume. At least $0 more free space is needed.": [
  null,
  "No hi ha prou espai lliure als altres llocs per suprimir aquest volum físic. Es necessiten almenys $0 més d'espai lliure."
 ],
 "Thin Logical Volume": [
  null,
  "Volums lògics disgregats"
 ],
 "This NFS mount is in use and only its options can be changed.": [
  null,
  ""
 ],
 "This VDO device does not use all of its backing device.": [
  null,
  ""
 ],
 "This device has filesystems that are currently in use. Proceeding will unmount all filesystems on it.": [
  null,
  ""
 ],
 "This device is currently used for RAID devices.": [
  null,
  "Aquest dispositiu s'utilitza actualment amb dispositius RAID."
 ],
 "This device is currently used for RAID devices. Proceeding will remove it from its RAID devices.": [
  null,
  ""
 ],
 "This device is currently used for VDO devices.": [
  null,
  "Aquest dispositiu s'utilitza actualment per als dispositiu VDO."
 ],
 "This device is currently used for volume groups.": [
  null,
  "Aquest dispositiu s'utilitza actualment amb grups de volums."
 ],
 "This device is currently used for volume groups. Proceeding will remove it from its volume groups.": [
  null,
  ""
 ],
 "This disk cannot be removed while the device is recovering.": [
  null,
  "Aquest disc no es pot treure quan s'està recuperant el dispositiu."
 ],
 "This logical volume is not completely used by its content.": [
  null,
  ""
 ],
 "This volume needs to be activated before it can be resized.": [
  null,
  ""
 ],
 "Total size: $0": [
  null,
  ""
 ],
 "Trust key": [
  null,
  ""
 ],
 "Type": [
  null,
  "Tipus"
 ],
 "UUID": [
  null,
  "UUID"
 ],
 "Unable to reach server": [
  null,
  "No es pot arribar al servidor"
 ],
 "Unable to remove mount": [
  null,
  "No es pot treure el punt de muntatge"
 ],
 "Unable to unmount filesystem": [
  null,
  "No es pot desmuntar el sistema de fitxers"
 ],
 "Unit": [
  null,
  ""
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
 "Unknown type": [
  null,
  ""
 ],
 "Unlock": [
  null,
  "Desbloqueja"
 ],
 "Unlock at boot": [
  null,
  "Desbloqueja a l'arrencada"
 ],
 "Unlock read only": [
  null,
  "Desbloqueja només lectura"
 ],
 "Unlocking $target": [
  null,
  "S'està desbloquejant $target"
 ],
 "Unlocking disk...": [
  null,
  ""
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
  "Dades no reconegudes"
 ],
 "Unrecognized data can not be made smaller here.": [
  null,
  ""
 ],
 "Unsupported volume": [
  null,
  "Volum no admès"
 ],
 "Usage": [
  null,
  "Ús"
 ],
 "Use 512 Byte emulation": [
  null,
  ""
 ],
 "Used": [
  null,
  "Utilitzat"
 ],
 "Username": [
  null,
  "Nom d'usuari"
 ],
 "VDO Backing": [
  null,
  ""
 ],
 "VDO Device": [
  null,
  "Dispositiu VDO"
 ],
 "VDO Device $0": [
  null,
  "Dispositiu VDO $0"
 ],
 "VDO Devices": [
  null,
  "Dispositius VDO"
 ],
 "VDO backing devices can not be made smaller": [
  null,
  ""
 ],
 "VDO support not installed": [
  null,
  ""
 ],
 "Verify key": [
  null,
  ""
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
 "Volume size is $0. Content size is $1.": [
  null,
  ""
 ],
 "Waiting for other software management operations to finish": [
  null,
  ""
 ],
 "Warning": [
  null,
  ""
 ],
 "What if tang-show-keys is not available?": [
  null,
  ""
 ],
 "Write-mostly": [
  null,
  "Escriptura-majoritària"
 ],
 "Writing": [
  null,
  "Escriptura"
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
 "iSCSI Targets": [
  null,
  "Destinacions iSCSI"
 ],
 "key slot $0": [
  null,
  ""
 ],
 "undefined": [
  null,
  "indefinit"
 ],
 "unknown target": [
  null,
  "objectiu desconegut"
 ],
 "unpartitioned space on $0": [
  null,
  "espai sense particionar a $0"
 ],
 "storage-id-desc\u0004$0 File System": [
  null,
  "Sistema de fitxers $0"
 ],
 "storage-id-desc\u0004Encrypted data": [
  null,
  "Dades xifrades"
 ],
 "storage-id-desc\u0004Other Data": [
  null,
  "Altres dades"
 ],
 "storage-id-desc\u0004Swap Space": [
  null,
  "Espai d'intercanvi"
 ],
 "storage-id-desc\u0004Unrecognized Data": [
  null,
  "Dades no reconegudes"
 ],
 "storage-id-desc\u0004VDO Backing": [
  null,
  ""
 ],
 "storage\u0004Drive": [
  null,
  "Unitat"
 ],
 "storage\u0004Hard Disk": [
  null,
  "Disc dur"
 ],
 "storage\u0004Optical Drive": [
  null,
  "Unitat òptica"
 ],
 "storage\u0004Removable Drive": [
  null,
  "Disc extraïble"
 ],
 "storage\u0004Solid-State Disk": [
  null,
  "Disc d'estat sòlid"
 ],
 "format-bytes\u0004bytes": [
  null,
  "bytes"
 ]
}));
