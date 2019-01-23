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
  "language": "it",
  "x-generator": "Zanata 4.6.2"
 },
 "$0 Block Device": [
  null,
  "$0 Dispositivo a blocchi"
 ],
 "$0 Chunk Size": [
  null,
  "$0 Dimensione del pezzo"
 ],
 "$0 Disks": [
  null,
  "$0 Dischi"
 ],
 "$0 data + $1 overhead used of $2 ($3)": [
  null,
  "$0 dati + + $1 overhead utilizzato di $2 ($3)"
 ],
 "$0 disk is missing": [
  "$0 disks are missing",
  "Il $0 disco non esiste",
  "Il $0 disco non esiste"
 ],
 "$0 filesystems can not be made larger.": [
  null,
  "$0 non possono essere ingranditi."
 ],
 "$0 filesystems can not be made smaller.": [
  null,
  "$0 non possono essere ridotti."
 ],
 "$0 filesystems can not be resized here.": [
  null,
  "I $0 filesystem non possono essere ridimensionati qui."
 ],
 "$0 is in active use": [
  null,
  "$0 è in uso attivo"
 ],
 "$0 is not available from any repository.": [
  null,
  "$0 non è disponibile in nessun deposito."
 ],
 "$0 of $1": [
  null,
  "$0 di $1"
 ],
 "$0 slots remain": [
  null,
  "$0 le fessure rimangono"
 ],
 "$0 used of $1 ($2 saved)": [
  null,
  "$0 usato di $1 ($2 salvato)"
 ],
 "$0 will be installed.": [
  null,
  "$0 sarà installato."
 ],
 "$0, $1 free": [
  null,
  "$0# $1 libero"
 ],
 "$name (from $host)": [
  null,
  "$name (da $host)"
 ],
 "${size} ${desc}": [
  null,
  "${size} ${desc}"
 ],
 "(default)": [
  null,
  "(predefinito)"
 ],
 "(none)": [
  null,
  "(nessuno)"
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
  "1 giorno"
 ],
 "1 hour": [
  null,
  "1 ora"
 ],
 "1 week": [
  null,
  "1 settimana"
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
  "5 minuti"
 ],
 "512 KiB": [
  null,
  "512 KiB"
 ],
 "6 hours": [
  null,
  "6 ore"
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
  "È necessario un disco."
 ],
 "A spare disk needs to be added first before this disk can be removed.": [
  null,
  "È necessario aggiungere un disco di riserva prima di poterlo rimuovere."
 ],
 "Activate": [
  null,
  "Attiva"
 ],
 "Activating $target": [
  null,
  "Attivazione $target"
 ],
 "Active since": [
  null,
  "Attivo dal"
 ],
 "Add": [
  null,
  "Aggiungi"
 ],
 "Add Disks": [
  null,
  "Aggiungere dischi"
 ],
 "Add Key": [
  null,
  "Aggiungi chiave"
 ],
 "Add iSCSI Portal": [
  null,
  "Aggiungi Portale iSCSI"
 ],
 "Adding physical volume to $target": [
  null,
  "Aggiunta di volume fisico a $target"
 ],
 "Additional packages:": [
  null,
  "Pacchetti aggiuntivi:"
 ],
 "Address": [
  null,
  "Indirizzo"
 ],
 "Address cannot be empty": [
  null,
  "L'indirizzo non può essere vuoto"
 ],
 "Address is not a valid URL": [
  null,
  "L'indirizzo non è un URL valido"
 ],
 "Apply": [
  null,
  "Applica"
 ],
 "At least $0 disks are needed.": [
  null,
  "Sono necessari almeno dei $0 dischi."
 ],
 "At least one disk is needed.": [
  null,
  "È necessario almeno un disco."
 ],
 "Authentication required": [
  null,
  "Autenticazione necessaria"
 ],
 "Available targets on $0": [
  null,
  "Target disponibili su $0"
 ],
 "Backing Device": [
  null,
  "Dispositivo di supporto"
 ],
 "Block": [
  null,
  "Blocco"
 ],
 "Block device for filesystems": [
  null,
  "Dispositivo di blocco per filesystem"
 ],
 "Blocked": [
  null,
  "Bloccato"
 ],
 "Can't delete while unlocked": [
  null,
  "Non può cancellare mentre è sbloccato"
 ],
 "Cancel": [
  null,
  "Annulla"
 ],
 "Change": [
  null,
  "Cambia"
 ],
 "Change iSCSI Initiator Name": [
  null,
  "Cambiare il nome dell'iniziatore iSCSI"
 ],
 "Change passphrase": [
  null,
  "Cambiare la passphrase"
 ],
 "Checking $target": [
  null,
  "Controllo $target"
 ],
 "Checking RAID Device $target": [
  null,
  "Controllo del dispositivo RAID $target"
 ],
 "Checking and Repairing RAID Device $target": [
  null,
  "Controllo e riparazione del dispositivo RAID $target"
 ],
 "Checking installed software": [
  null,
  "Verifica del software installato"
 ],
 "Chunk Size": [
  null,
  "Dimensione chunk"
 ],
 "Cleaning up for $target": [
  null,
  "Pulizia per $target"
 ],
 "Close": [
  null,
  "Chiudi"
 ],
 "Compatible with all systems and devices (MBR)": [
  null,
  "Compatibile con tutti i sistemi e dispositivi (MBR)"
 ],
 "Compatible with modern system and hard disks > 2TB (GPT)": [
  null,
  "Compatibile con sistemi moderni e dischi rigidi > 2TB (GPT)"
 ],
 "Compression": [
  null,
  "Compressione"
 ],
 "Confirm passphrase": [
  null,
  "Conferma la passphrase"
 ],
 "Confirm removal with passphrase": [
  null,
  "Confermare la rimozione con la passphrase"
 ],
 "Content": [
  null,
  "Contenuto"
 ],
 "Create": [
  null,
  "Crea"
 ],
 "Create Logical Volume": [
  null,
  "Creare un volume logico"
 ],
 "Create Partition": [
  null,
  "Crea partizione"
 ],
 "Create RAID Device": [
  null,
  "Creare un dispositivo RAID"
 ],
 "Create Snapshot": [
  null,
  "Crea snapshot"
 ],
 "Create Thin Volume": [
  null,
  "Creare un volume sottile"
 ],
 "Create VDO Device": [
  null,
  "Creare un dispositivo VDO"
 ],
 "Create Volume Group": [
  null,
  "Crea gruppo di volumi"
 ],
 "Create new Logical Volume": [
  null,
  "Creare un nuovo volume logico"
 ],
 "Create partition": [
  null,
  "Creare una partizione"
 ],
 "Create partition on $0": [
  null,
  "Creare una partizione su $0"
 ],
 "Create partition table": [
  null,
  "Creare una tabella delle partizioni"
 ],
 "Creating RAID Device $target": [
  null,
  "Creazione di un dispositivo RAID $target"
 ],
 "Creating filesystem on $target": [
  null,
  "Creazione di filesystem su $target"
 ],
 "Creating logical volume $target": [
  null,
  "Creazione di un volume logico $target"
 ],
 "Creating partition $target": [
  null,
  "Creazione della partizione $target"
 ],
 "Creating snapshot of $target": [
  null,
  "Creazione di un'istantanea di $target"
 ],
 "Creating volume group $target": [
  null,
  "Creazione di un gruppo di volumi $target"
 ],
 "Custom": [
  null,
  "Personalizzata"
 ],
 "Custom (Enter filesystem type)": [
  null,
  "Personalizzato (Inserire il tipo di file system)"
 ],
 "Custom encryption options": [
  null,
  "Opzioni di crittografia personalizzate"
 ],
 "Custom mount option": [
  null,
  "Percorso di montaggio personalizzato"
 ],
 "Custom mount options": [
  null,
  "Opzioni di montaggio personalizzate"
 ],
 "DISK IS FAILING": [
  null,
  "DISCO SI STA GUASTANDO"
 ],
 "Data Used": [
  null,
  "Dati utilizzati"
 ],
 "Deactivate": [
  null,
  "Disattiva"
 ],
 "Deactivating $target": [
  null,
  "Disattivazione $target"
 ],
 "Deduplication": [
  null,
  "Deduplicazione"
 ],
 "Default": [
  null,
  "Predefinito"
 ],
 "Delete": [
  null,
  "Cancella"
 ],
 "Deleting $target": [
  null,
  "Eliminazione $target"
 ],
 "Deleting a RAID device will erase all data on it.": [
  null,
  "L'eliminazione di un dispositivo RAID cancellerà tutti i dati in esso contenuti."
 ],
 "Deleting a VDO device will erase all data on it.": [
  null,
  "L'eliminazione di un dispositivo VDO cancellerà tutti i dati in esso contenuti."
 ],
 "Deleting a logical volume will delete all data in it.": [
  null,
  "L'eliminazione di un volume logico cancellerà tutti i dati in esso contenuti."
 ],
 "Deleting a partition will delete all data in it.": [
  null,
  "L'eliminazione di una partizione cancellerà tutti i dati in essa contenuti."
 ],
 "Deleting a volume group will erase all data on it.": [
  null,
  "L'eliminazione di un gruppo di volumi cancellerà tutti i dati in esso contenuti."
 ],
 "Deleting volume group $target": [
  null,
  "Eliminazione di un gruppo di volumi $target"
 ],
 "Device File": [
  null,
  "File dispositivo"
 ],
 "Device is read-only": [
  null,
  "Il dispositivo è di sola lettura"
 ],
 "Disk": [
  null,
  "Disco"
 ],
 "Disk is OK": [
  null,
  "Il disco è OK"
 ],
 "Disk passphrase": [
  null,
  "Passphrase del disco"
 ],
 "Disks": [
  null,
  "Dischi"
 ],
 "Don't overwrite existing data": [
  null,
  "Non sovrascrivere i dati esistenti"
 ],
 "Downloading $0": [
  null,
  "Download di $0"
 ],
 "Drive": [
  null,
  "Drive"
 ],
 "Drives": [
  null,
  "Drive"
 ],
 "Edit": [
  null,
  "Modifica"
 ],
 "Edit Tang keyserver": [
  null,
  "Modifica Tang keyserver"
 ],
 "Editing a key requires a free slot": [
  null,
  "La modifica di una chiave richiede uno slot libero"
 ],
 "Ejecting $target": [
  null,
  "Espulsione $target"
 ],
 "Emptying $target": [
  null,
  "Svuotamento $target"
 ],
 "Encrypted $0": [
  null,
  "Crittografato $0"
 ],
 "Encrypted EXT4 (LUKS)": [
  null,
  "Crittografato EXT4 (LUKS)"
 ],
 "Encrypted Logical Volume of $0": [
  null,
  "Volume logico criptato di $0"
 ],
 "Encrypted Partition of $0": [
  null,
  "Partizione criptata di $0"
 ],
 "Encrypted XFS (LUKS)": [
  null,
  "XFS criptato (LUKS)"
 ],
 "Encrypted volumes can not be resized here.": [
  null,
  "I volumi criptati non possono essere ridimensionati qui."
 ],
 "Encrypted volumes need to be unlocked before they can be resized.": [
  null,
  "I volumi criptati devono essere sbloccati prima di poter essere ridimensionati."
 ],
 "Encryption": [
  null,
  "Cifratura"
 ],
 "Encryption Options": [
  null,
  "Opzioni di crittografia"
 ],
 "Erase": [
  null,
  "Elimina"
 ],
 "Erasing $target": [
  null,
  "Cancellazione $target"
 ],
 "Error": [
  null,
  "Errore"
 ],
 "Extended Partition": [
  null,
  "Partizione estesa"
 ],
 "FAILED": [
  null,
  "FALLITO"
 ],
 "Filesystem": [
  null,
  "File system"
 ],
 "Filesystem Mounting": [
  null,
  "Montaggio del filesystem"
 ],
 "Filesystem Name": [
  null,
  "Nome del file system"
 ],
 "Filesystem type": [
  null,
  "Tipo di file system"
 ],
 "Filesystems": [
  null,
  "Sistemi di file system"
 ],
 "Force remove passphrase in $0": [
  null,
  "Forza rimuovere la passphrase in $0"
 ],
 "Format": [
  null,
  "Formato"
 ],
 "Format $0": [
  null,
  "Formato $0"
 ],
 "Format Disk $0": [
  null,
  "Formato Disco $0"
 ],
 "Formatting a disk will erase all data on it.": [
  null,
  "La formattazione di un disco cancellerà tutti i dati in esso contenuti."
 ],
 "Formatting a storage device will erase all data on it.": [
  null,
  "La formattazione di un dispositivo di memorizzazione cancella tutti i dati in esso contenuti."
 ],
 "Free": [
  null,
  "Libero"
 ],
 "Free Space": [
  null,
  "Spazio libero"
 ],
 "Free up space in this group: Shrink or delete other logical volumes or add another physical volume.": [
  null,
  "Recuperare spazio in questo gruppo: ridurre o eliminare volumi logici oppure aggiungere un altro volume fisico."
 ],
 "Go to now": [
  null,
  "Vai a ora"
 ],
 "Grow": [
  null,
  "Crescere"
 ],
 "Grow Logical Volume": [
  null,
  "Aumentare il volume logico"
 ],
 "Grow logical size of $0": [
  null,
  "Estendere le dimensioni logiche di $0"
 ],
 "Grow to take all space": [
  null,
  "Crescere per prendere tutto lo spazio"
 ],
 "If tang-show-keys is not available, run the following:": [
  null,
  "Se il tasto tang-show-key non è disponibile, eseguire quanto segue:"
 ],
 "In Sync": [
  null,
  "In Sync"
 ],
 "Inactive volume": [
  null,
  "Volume inattivo"
 ],
 "Index Memory": [
  null,
  "Memoria indice"
 ],
 "Install": [
  null,
  "Installa"
 ],
 "Install NFS Support": [
  null,
  "Installa il supporto NFS"
 ],
 "Install Software": [
  null,
  "Installare il software"
 ],
 "Install VDO support": [
  null,
  "Install il supporto VDO"
 ],
 "Installing $0": [
  null,
  "Installazione di $0"
 ],
 "Invalid username or password": [
  null,
  "Password o nome utente non validi"
 ],
 "Jobs": [
  null,
  "Lavori"
 ],
 "Key slots with unknown types can not be edited here": [
  null,
  "Gli slot per chiavi con tipi sconosciuti non possono essere modificati qui"
 ],
 "Key source": [
  null,
  "Fonte chiave"
 ],
 "Keys": [
  null,
  "Chiavi"
 ],
 "Keyserver": [
  null,
  "Tastiera"
 ],
 "Keyserver address": [
  null,
  "Indirizzo Keyserver"
 ],
 "Keyserver removal may prevent unlocking $0.": [
  null,
  "La rimozione di Keyserver può impedire lo sblocco$0."
 ],
 "Local Mount Point": [
  null,
  "Punto di montaggio locale"
 ],
 "Lock": [
  null,
  "Blocca"
 ],
 "Locking $target": [
  null,
  "Blocco $target"
 ],
 "Logical": [
  null,
  "Logico"
 ],
 "Logical Size": [
  null,
  "Dimensione logica"
 ],
 "Logical Volume": [
  null,
  "Volume logico"
 ],
 "Logical Volume (Snapshot)": [
  null,
  "Volume logico (istantanea)"
 ],
 "Logical Volume of $0": [
  null,
  "Volume logico di $0"
 ],
 "Make sure the key hash from the Tang server matches:": [
  null,
  "Assicurarsi che l'hash chiave del server Tang corrisponda:"
 ],
 "Manually check with SSH: ": [
  null,
  "Controllare manualmente con SSH: "
 ],
 "Marking $target as faulty": [
  null,
  "Marcatura $targetdifettosa"
 ],
 "Member of RAID Device": [
  null,
  "Membro del dispositivo RAID"
 ],
 "Member of RAID Device $0": [
  null,
  "Membro del dispositivo RAID $0"
 ],
 "Metadata Used": [
  null,
  "Metadati utilizzati"
 ],
 "Modifying $target": [
  null,
  "Modificare $target"
 ],
 "Mount": [
  null,
  "Mount"
 ],
 "Mount Options": [
  null,
  "Opzioni di montaggio"
 ],
 "Mount Point": [
  null,
  "Punto di montaggio"
 ],
 "Mount at boot": [
  null,
  "Montaggio all'avvio"
 ],
 "Mount options": [
  null,
  "Opzioni di mount"
 ],
 "Mount point can not be empty": [
  null,
  "Il punto di montaggio non può essere vuoto."
 ],
 "Mount point cannot be empty.": [
  null,
  "Il punto di montaggio non può essere vuoto."
 ],
 "Mount point must start with \"/\".": [
  null,
  "Il punto di montaggio deve iniziare con \"/\"."
 ],
 "Mount read only": [
  null,
  "Montaggio in sola lettura"
 ],
 "Mounted At": [
  null,
  "Montato a"
 ],
 "Mounting": [
  null,
  "Montaggio"
 ],
 "Mounting $target": [
  null,
  "Montaggio $target"
 ],
 "NFS Mount": [
  null,
  "Montaggio NFS"
 ],
 "NFS Mounts": [
  null,
  "Supporti NFS"
 ],
 "NFS Support not installed": [
  null,
  "Supporto NFS non installato"
 ],
 "NTFS - Compatible with most systems": [
  null,
  "NTFS - Compatibile con la maggior parte dei sistemi"
 ],
 "Name": [
  null,
  "Nome"
 ],
 "Name can not be empty.": [
  null,
  "Il nome non può essere vuoto."
 ],
 "Name cannot be empty.": [
  null,
  "Il nome non può essere vuoto."
 ],
 "Name cannot be longer than $0 bytes": [
  null,
  "Il nome non può essere più lungo di $0 byte."
 ],
 "Name cannot be longer than $0 characters": [
  null,
  "Il nome non può essere più lungo di $0 caratteri."
 ],
 "Name cannot be longer than 127 characters.": [
  null,
  "Il nome non può essere più lungo di 127 caratteri."
 ],
 "Name cannot contain the character '$0'.": [
  null,
  "Il nome non può contenere il carattere '$0''."
 ],
 "Name cannot contain whitespace.": [
  null,
  "Il nome non può contenere spazi bianchi."
 ],
 "New NFS Mount": [
  null,
  "Nuovo supporto NFS"
 ],
 "New passphrase": [
  null,
  "Nuova passphrase"
 ],
 "Next": [
  null,
  "Avanti"
 ],
 "No Filesystem": [
  null,
  "Nessun file system"
 ],
 "No Logical Volumes": [
  null,
  "Nessun volume logico"
 ],
 "No NFS mounts set up": [
  null,
  "Nessun supporto NFS configurato"
 ],
 "No available slots": [
  null,
  "Non ci sono slot disponibili"
 ],
 "No disks are available.": [
  null,
  "Nessun disco disponibile"
 ],
 "No drives attached": [
  null,
  "Nessuna unità collegata"
 ],
 "No free key slots": [
  null,
  "Nessuna fessura per le chiavi libere"
 ],
 "No free space": [
  null,
  "Nessuno spazio libero disponibile"
 ],
 "No iSCSI targets set up": [
  null,
  "Non sono stati fissati obiettivi iSCSI"
 ],
 "No keys added": [
  null,
  "Nessuna chiave aggiunta"
 ],
 "No media inserted": [
  null,
  "Nessun supporto inserito"
 ],
 "No partitioning": [
  null,
  "Nessuna suddivisione"
 ],
 "No storage set up as RAID": [
  null,
  "Nessuna memorizzazione impostata come RAID"
 ],
 "No storage set up as VDO": [
  null,
  "Nessuna memorizzazione impostata come VDO"
 ],
 "No volume groups created": [
  null,
  "Nessun gruppo di volumi creato"
 ],
 "Not enough space to grow.": [
  null,
  "Spazio non sufficiente"
 ],
 "Not found": [
  null,
  "Non trovato"
 ],
 "Not mounted": [
  null,
  "Non montato"
 ],
 "Not running": [
  null,
  "Non in esecuzione"
 ],
 "Off": [
  null,
  "Off"
 ],
 "Ok": [
  null,
  "Ok"
 ],
 "Old passphrase": [
  null,
  "Vecchia passphrase"
 ],
 "On": [
  null,
  "On"
 ],
 "Only $0 of $1 are used.": [
  null,
  "$1Vengono utilizzati solo $0di δ."
 ],
 "Operation '$operation' on $target": [
  null,
  "Operazione ' ' ' ' su $target"
 ],
 "Options": [
  null,
  "Opzioni"
 ],
 "Other Devices": [
  null,
  "Altri dispositivi"
 ],
 "Overwrite existing data with zeros": [
  null,
  "Sovrascrivere i dati esistenti con zeri"
 ],
 "PackageKit crashed": [
  null,
  "PackageKit si è interrotto"
 ],
 "Partition": [
  null,
  "Partizione"
 ],
 "Partition of $0": [
  null,
  "Partizione di $0"
 ],
 "Partitioning": [
  null,
  "Partizionamento"
 ],
 "Passphrase": [
  null,
  "Passphrase"
 ],
 "Passphrase cannot be empty": [
  null,
  "La frase non può essere vuota"
 ],
 "Passphrase removal may prevent unlocking $0.": [
  null,
  "La rimozione della passphrase può impedire lo sblocco $0."
 ],
 "Passphrases do not match": [
  null,
  "Le passphrase non corrispondono"
 ],
 "Password": [
  null,
  "Password"
 ],
 "Path on Server": [
  null,
  "Percorso su server"
 ],
 "Path on server cannot be empty.": [
  null,
  "Il percorso sul server non può essere vuoto."
 ],
 "Path on server must start with \"/\".": [
  null,
  "Il percorso sul server deve iniziare con \"/\"."
 ],
 "Physical": [
  null,
  "Fisico"
 ],
 "Physical Volume": [
  null,
  "Volume fisico"
 ],
 "Physical Volumes": [
  null,
  "Volumi fisici"
 ],
 "Physical volume of $0": [
  null,
  "Volume fisico di $0"
 ],
 "Physical volumes can not be resized here.": [
  null,
  "I volumi fisici non possono essere ridimensionati qui."
 ],
 "Please confirm deletion of $0": [
  null,
  "Si prega di confermare la cancellazione di $0"
 ],
 "Please confirm stopping of $0": [
  null,
  "Si prega di confermare l'arresto di $0"
 ],
 "Pool": [
  null,
  "Pool"
 ],
 "Pool for Thin Logical Volumes": [
  null,
  "Piscina per volumi logici sottili"
 ],
 "Pool for Thin Volumes": [
  null,
  "Piscina per volumi sottili"
 ],
 "Pool for thinly provisioned volumes": [
  null,
  "Pool per i volumi scarsamente approvvigionati"
 ],
 "Port": [
  null,
  "Porta"
 ],
 "Process": [
  null,
  "Processi"
 ],
 "Purpose": [
  null,
  "Scopo"
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
  "RAID 0 (Stripe)"
 ],
 "RAID 1": [
  null,
  "RAID 1"
 ],
 "RAID 1 (Mirror)": [
  null,
  "RAID 1 (Mirror)"
 ],
 "RAID 10": [
  null,
  "RAID 10"
 ],
 "RAID 10 (Stripe of Mirrors)": [
  null,
  "RAID 10 (Stripe di Mirror)"
 ],
 "RAID 4": [
  null,
  "RAID 4"
 ],
 "RAID 4 (Dedicated Parity)": [
  null,
  "RAID 4 (Dedicated Parity)"
 ],
 "RAID 5": [
  null,
  "RAID 5"
 ],
 "RAID 5 (Distributed Parity)": [
  null,
  "RAID 5 (Distributed Parity)"
 ],
 "RAID 6": [
  null,
  "RAID 6"
 ],
 "RAID 6 (Double Distributed Parity)": [
  null,
  "RAID 6 (doppia parità distribuita)"
 ],
 "RAID Device": [
  null,
  "Dispositivo RAID"
 ],
 "RAID Device $0": [
  null,
  "Dispositivo RAID $0"
 ],
 "RAID Devices": [
  null,
  "Dispositivi RAID"
 ],
 "RAID Level": [
  null,
  "Livello RAID"
 ],
 "RAID Member": [
  null,
  "Membro RAID"
 ],
 "Reading": [
  null,
  "Lettura"
 ],
 "Reboot": [
  null,
  "Riavvia"
 ],
 "Recovering": [
  null,
  "Recupero"
 ],
 "Recovering RAID Device $target": [
  null,
  "Recupero del dispositivo RAID $target"
 ],
 "Removals:": [
  null,
  "Traslochi:"
 ],
 "Remove": [
  null,
  "Elimina Zona"
 ],
 "Remove $0?": [
  null,
  "Rimuovere $0?"
 ],
 "Remove Tang keyserver": [
  null,
  "Rimuovere Tang keyserver"
 ],
 "Remove device": [
  null,
  "Rimuovere il dispositivo"
 ],
 "Remove passphrase": [
  null,
  "Rimuovere la passphrase"
 ],
 "Remove passphrase in $0?": [
  null,
  "Rimuovere la passphrase in $0?"
 ],
 "Removing $0": [
  null,
  "Rimozione $0"
 ],
 "Removing $target from RAID Device": [
  null,
  "Rimozione $target dal dispositivo RAID"
 ],
 "Removing physical volume from $target": [
  null,
  "Rimozione del volume fisico da $target"
 ],
 "Rename": [
  null,
  "Rinomina"
 ],
 "Rename Logical Volume": [
  null,
  "Rinominare il volume logico"
 ],
 "Rename Volume Group": [
  null,
  "Rinomina gruppo di volumi"
 ],
 "Renaming $target": [
  null,
  "Rinominare $target"
 ],
 "Repairing $target": [
  null,
  "Riparazione $target"
 ],
 "Repeat passphrase": [
  null,
  "Ripetere la passphrase"
 ],
 "Resizing $target": [
  null,
  "Ridimensionamento $target"
 ],
 "Running": [
  null,
  "In esecuzione"
 ],
 "SMART self-test of $target": [
  null,
  "Autotest SMART di $target"
 ],
 "Save": [
  null,
  "Salva"
 ],
 "Saving a new passphrase requires unlocking the disk. Please provide a current disk passphrase.": [
  null,
  "Per salvare una nuova passphrase è necessario sbloccare il disco. Fornire una passphrase attuale del disco."
 ],
 "Securely erasing $target": [
  null,
  "Cancellazione sicura $target"
 ],
 "Server": [
  null,
  "Server"
 ],
 "Server Address": [
  null,
  "Indirizzo del server"
 ],
 "Server address cannot be empty.": [
  null,
  "L'indirizzo del server non può essere vuoto."
 ],
 "Server cannot be empty.": [
  null,
  "Il server non può essere vuoto."
 ],
 "Service": [
  null,
  "Servizio"
 ],
 "Session": [
  null,
  "Sessione"
 ],
 "Setting up loop device $target": [
  null,
  "Impostazione del dispositivo di loop $target"
 ],
 "Shrink": [
  null,
  "Riduci"
 ],
 "Shrink Logical Volume": [
  null,
  "Restringimento del volume logico"
 ],
 "Size": [
  null,
  "Dimensione"
 ],
 "Size cannot be negative": [
  null,
  "La dimensione non può essere negativa"
 ],
 "Size cannot be zero": [
  null,
  "La dimensione non può essere zero"
 ],
 "Size is too large": [
  null,
  "La dimensione è troppo grande"
 ],
 "Size must be a number": [
  null,
  "La dimensione deve essere un numero"
 ],
 "Size must be at least $0": [
  null,
  "La dimensione deve essere almeno $0"
 ],
 "Slot $0": [
  null,
  "Slot $0"
 ],
 "Spare": [
  null,
  "Ricambio"
 ],
 "Start": [
  null,
  "Avvia"
 ],
 "Start Multipath": [
  null,
  "Avvia Multipath"
 ],
 "Starting RAID Device $target": [
  null,
  "Avvio del dispositivo RAID $target"
 ],
 "Starting swapspace $target": [
  null,
  "Avvio dello spazio di swap $target"
 ],
 "Stop": [
  null,
  "Ferma"
 ],
 "Stop Device": [
  null,
  "Ferma device"
 ],
 "Stop and Unmount": [
  null,
  "Ferma e smonta"
 ],
 "Stop and remove": [
  null,
  "Ferma e rimuovi"
 ],
 "Stopping RAID Device $target": [
  null,
  "Arresto del dispositivo RAID $target"
 ],
 "Stopping swapspace $target": [
  null,
  "Arresto dello spazio di swap $target"
 ],
 "Storage": [
  null,
  "Storage"
 ],
 "Storage Logs": [
  null,
  "Log storage"
 ],
 "Storage can not be managed on this system.": [
  null,
  "Il pool di archiviazione Docker non può essere gestito su questo sistema."
 ],
 "Store passphrase": [
  null,
  "Conservare la passphrase"
 ],
 "Stored Passphrase": [
  null,
  "Passphrase memorizzata"
 ],
 "Stored passphrase": [
  null,
  "Passphrase memorizzata"
 ],
 "Support is installed.": [
  null,
  "Il supporto è installato."
 ],
 "Swap": [
  null,
  "Swap"
 ],
 "Synchronizing RAID Device $target": [
  null,
  "Sincronizzazione del dispositivo RAID $target"
 ],
 "Tang keyserver": [
  null,
  "Tang keyserver"
 ],
 "The RAID Array is in a degraded state": [
  null,
  "L'array RAID è in uno stato degradato"
 ],
 "The RAID device must be running in order to add spare disks.": [
  null,
  "Il dispositivo RAID deve essere in funzione per poter aggiungere dischi di riserva."
 ],
 "The RAID device must be running in order to remove disks.": [
  null,
  "Il dispositivo RAID deve essere in funzione per rimuovere i dischi."
 ],
 "The creation of this VDO device did not finish and the device can't be used.": [
  null,
  "La creazione di questo dispositivo VDO non è terminata e il dispositivo non può essere utilizzato."
 ],
 "The currently logged in user is not permitted to see information about keys.": [
  null,
  "L'utente attualmente connesso non è autorizzato a vedere le informazioni sulle chiavi."
 ],
 "The filesystem is in use by login sessions and system services. Proceeding will stop these.": [
  null,
  "Il filesystem è in uso dalle sessioni di login e dai servizi di sistema. Procedendo si fermeranno."
 ],
 "The filesystem is in use by login sessions. Proceeding will stop these.": [
  null,
  "Il filesystem è in uso per le sessioni di login. Procedendo si fermeranno."
 ],
 "The filesystem is in use by system services. Proceeding will stop these.": [
  null,
  "Il filesystem è in uso dai servizi di sistema. Procedendo si fermeranno questi ultimi."
 ],
 "The last disk of a RAID device cannot be removed.": [
  null,
  "L'ultimo disco di un dispositivo RAID non può essere rimosso."
 ],
 "The last key slot can not be removed": [
  null,
  "L'ultima fessura per chiavi non può essere rimossa"
 ],
 "The last physical volume of a volume group cannot be removed.": [
  null,
  "L'ultimo volume fisico di un gruppo di volumi non può essere rimosso."
 ],
 "The user <b>$0</b> is not permitted to manage storage": [
  null,
  "L'utente non <b>$0</b>è autorizzato a gestire l'archiviazione"
 ],
 "There are devices with multiple paths on the system, but the multipath service is not running.": [
  null,
  "Ci sono dispositivi con percorsi multipli sul sistema, ma il servizio multipath non è in esecuzione."
 ],
 "There is not enough free space elsewhere to remove this physical volume. At least $0 more free space is needed.": [
  null,
  "Non c'è abbastanza spazio libero altrove per rimuovere questo volume fisico. È necessario almeno $0più spazio libero."
 ],
 "Thin Logical Volume": [
  null,
  "Volume logico sottile"
 ],
 "This NFS mount is in use and only its options can be changed.": [
  null,
  "Questo supporto NFS è in uso e solo le sue opzioni possono essere modificate."
 ],
 "This VDO device does not use all of its backing device.": [
  null,
  "Questo dispositivo VDO non utilizza tutti i suoi dispositivi di supporto."
 ],
 "This device has filesystems that are currently in use. Proceeding will unmount all filesystems on it.": [
  null,
  "Questo dispositivo ha filesystem che sono attualmente in uso. Procedendo si smonta tutti i filesystem su di esso."
 ],
 "This device is currently used for RAID devices.": [
  null,
  "Questo dispositivo è attualmente utilizzato per dispositivi RAID."
 ],
 "This device is currently used for RAID devices. Proceeding will remove it from its RAID devices.": [
  null,
  "Questo dispositivo è attualmente utilizzato per i dispositivi RAID. Procedendo si rimuoverà dai suoi dispositivi RAID."
 ],
 "This device is currently used for VDO devices.": [
  null,
  "Questo dispositivo è attualmente utilizzato per dispositivi VDO."
 ],
 "This device is currently used for volume groups.": [
  null,
  "Questo dispositivo è attualmente utilizzato per gruppi di volumi."
 ],
 "This device is currently used for volume groups. Proceeding will remove it from its volume groups.": [
  null,
  "Questo dispositivo è attualmente utilizzato per i gruppi di volumi. Procedendo si rimuoverà dai suoi gruppi di volumi."
 ],
 "This disk cannot be removed while the device is recovering.": [
  null,
  "Questo disco non può essere rimosso mentre il dispositivo è in fase di ripristino."
 ],
 "This volume needs to be activated before it can be resized.": [
  null,
  "Questo volume deve essere attivato prima di poter essere ridimensionato."
 ],
 "Total size: $0": [
  null,
  "Dimensione totale: $0"
 ],
 "Trust key": [
  null,
  "Chiave della fiducia"
 ],
 "Type": [
  null,
  "Tipo"
 ],
 "UUID": [
  null,
  "UUID"
 ],
 "Unable to reach server": [
  null,
  "Impossibile raggiungere il server"
 ],
 "Unable to remove mount": [
  null,
  "Impossibile rimuovere il supporto"
 ],
 "Unable to unmount filesystem": [
  null,
  "Impossibile smontare il filesystem"
 ],
 "Unit": [
  null,
  "Unità"
 ],
 "Unknown": [
  null,
  "Sconosciuto"
 ],
 "Unknown ($0)": [
  null,
  "Sconosciuto ($0)"
 ],
 "Unknown host name": [
  null,
  "Nome host sconosciuto"
 ],
 "Unknown type": [
  null,
  "Tipo sconosciuto"
 ],
 "Unlock": [
  null,
  "Sblocca"
 ],
 "Unlock at boot": [
  null,
  "Sbloccare all'avvio"
 ],
 "Unlock read only": [
  null,
  "Sblocca solo lettura"
 ],
 "Unlocking $target": [
  null,
  "Sbloccaggio $target"
 ],
 "Unlocking disk...": [
  null,
  "Sblocco disco....."
 ],
 "Unmount": [
  null,
  "Smonta"
 ],
 "Unmounting $target": [
  null,
  "Smontaggio $target"
 ],
 "Unrecognized Data": [
  null,
  "Dati non riconosciuti"
 ],
 "Unrecognized data can not be made smaller here.": [
  null,
  "I dati non riconosciuti non possono essere ridotti qui."
 ],
 "Unsupported volume": [
  null,
  "Volume non supportato"
 ],
 "Usage": [
  null,
  "Utilizzo"
 ],
 "Use 512 Byte emulation": [
  null,
  "Usa l'emulazione a 512 byte"
 ],
 "Used": [
  null,
  "Usato"
 ],
 "Username": [
  null,
  "Nome utente"
 ],
 "VDO Backing": [
  null,
  "Supporto VDO"
 ],
 "VDO Device": [
  null,
  "Dispositivo VDO"
 ],
 "VDO Device $0": [
  null,
  "Dispositivo VDO $0"
 ],
 "VDO Devices": [
  null,
  "Dispositivi VDO"
 ],
 "VDO backing devices can not be made smaller": [
  null,
  "I dispositivi di supporto VDO non possono essere resi più piccoli"
 ],
 "VDO support not installed": [
  null,
  "Supporto VDO non installato"
 ],
 "VFAT - Compatible with all systems and devices": [
  null,
  "VFAT - Compatibile con tutti i sistemi e dispositivi"
 ],
 "Verify key": [
  null,
  "Verificare la chiave"
 ],
 "Very securely erasing $target": [
  null,
  "Very securely erasing $target"
 ],
 "Volume": [
  null,
  "Volume"
 ],
 "Volume Group": [
  null,
  "Gruppo di volumi"
 ],
 "Volume Group $0": [
  null,
  "Gruppo di volumi $0"
 ],
 "Volume Groups": [
  null,
  "Gruppi di volume"
 ],
 "Waiting for other software management operations to finish": [
  null,
  "In attesa che finiscano le altre operazioni di gestione del software"
 ],
 "What if tang-show-keys is not available?": [
  null,
  "E se tang-show-keys non è disponibile?"
 ],
 "Write-mostly": [
  null,
  "Scrittura-principalmente"
 ],
 "Writing": [
  null,
  "La scrittura"
 ],
 "XFS - Red Hat Enterprise Linux 7 default": [
  null,
  "XFS - Red Hat Enterprise Linux 7 predefinito"
 ],
 "[$0 bytes of binary data]": [
  null,
  "[$0byte di dati binari]"
 ],
 "[binary data]": [
  null,
  "[dati binari]"
 ],
 "[no data]": [
  null,
  "[nessun dato]"
 ],
 "ext4 - Red Hat Enterprise Linux 6 default": [
  null,
  "ext4 - Red Hat Enterprise Linux 6 predefinito"
 ],
 "iSCSI Targets": [
  null,
  "target iSCSI"
 ],
 "key slot $0": [
  null,
  "fessura per chiavi $0"
 ],
 "undefined": [
  null,
  "non definito"
 ],
 "unknown target": [
  null,
  "obiettivo sconosciuto"
 ],
 "unpartitioned space on $0": [
  null,
  "spazio non ripartito su $0"
 ],
 "storage-id-desc\u0004$0 File System": [
  null,
  "$0 File System"
 ],
 "storage-id-desc\u0004Encrypted data": [
  null,
  "Dati crittografati"
 ],
 "storage-id-desc\u0004Other Data": [
  null,
  "Altri dati"
 ],
 "storage-id-desc\u0004Swap Space": [
  null,
  "Spazio di swap"
 ],
 "storage-id-desc\u0004Unrecognized Data": [
  null,
  "Dati non riconosciuti"
 ],
 "storage-id-desc\u0004VDO Backing": [
  null,
  "Supporto VDO"
 ],
 "storage\u0004Drive": [
  null,
  "Drive"
 ],
 "storage\u0004Hard Disk": [
  null,
  "Disco rigido"
 ],
 "storage\u0004Optical Drive": [
  null,
  "Unità ottica"
 ],
 "storage\u0004Removable Drive": [
  null,
  "Unità rimovibile"
 ],
 "storage\u0004Solid-State Disk": [
  null,
  "Disco a stato solido"
 ],
 "format-bytes\u0004bytes": [
  null,
  "byte"
 ]
}));
