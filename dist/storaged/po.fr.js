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
nplurals=2; plural=(n > 1);
return plural;
},
  "language": "fr",
  "x-generator": "Zanata 3.9.6"
 },
 "$0 Block Device": [
  null,
  ""
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
  ""
 ],
 "1 day": [
  null,
  "1 jour"
 ],
 "1 hour": [
  null,
  "1 heure"
 ],
 "1 week": [
  null,
  "1 semaine"
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
  "5 minutes"
 ],
 "512 KiB": [
  null,
  ""
 ],
 "6 hours": [
  null,
  "6 heures"
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
  "<span>$0 chiffré(e)</span>"
 ],
 "<span>Encrypted Logical Volume of $0</span>": [
  null,
  ""
 ],
 "<span>Encrypted Partition of $0</span>": [
  null,
  "<span>Partition chiffrée de $0</span>"
 ],
 "<span>Logical Volume of $0</span>": [
  null,
  "<span>Volume logique de $0</span>"
 ],
 "<span>Partition of $0</span>": [
  null,
  "<span>Partition de $0</span>"
 ],
 "Activate": [
  null,
  "Activer"
 ],
 "Activating $target": [
  null,
  ""
 ],
 "Add": [
  null,
  "Ajouter"
 ],
 "Add iSCSI Portal": [
  null,
  ""
 ],
 "Adding physical volume to $target": [
  null,
  ""
 ],
 "Address": [
  null,
  "Adresse"
 ],
 "Apply": [
  null,
  "Appliquer"
 ],
 "At least $0 disks are needed.": [
  null,
  ""
 ],
 "At least one disk is needed.": [
  null,
  "Au moins un disque est nécessaire."
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
  "Annuler"
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
  ""
 ],
 "Checking and Repairing RAID Device $target": [
  null,
  ""
 ],
 "Chunk Size": [
  null,
  "Taille de bloc"
 ],
 "Cleaning up for $target": [
  null,
  ""
 ],
 "Close": [
  null,
  "Fermer"
 ],
 "Compatible with all systems and devices (MBR)": [
  null,
  "Compatible avec tous les systèmes et périphériques (MBR)"
 ],
 "Compatible with modern system and hard disks > 2TB (GPT)": [
  null,
  "Compatible avec les systèmes modernes et disques durs de taille > 2 Tio (GPT)"
 ],
 "Confirm passphrase": [
  null,
  "Confirmer la phrase de passe"
 ],
 "Content": [
  null,
  "Contenu"
 ],
 "Create": [
  null,
  "Créer"
 ],
 "Create Logical Volume": [
  null,
  ""
 ],
 "Create Partition": [
  null,
  "Créer la partition"
 ],
 "Create RAID Device": [
  null,
  "Créer un périphérique RAID"
 ],
 "Create Snapshot": [
  null,
  "Créer un instantané"
 ],
 "Create Thin Volume": [
  null,
  ""
 ],
 "Create Volume Group": [
  null,
  "Créer un groupe de volumes"
 ],
 "Create new Logical Volume": [
  null,
  ""
 ],
 "Create partition": [
  null,
  "Créer la partition"
 ],
 "Create partition on $0": [
  null,
  "Créer une partition sur $0"
 ],
 "Create partition table": [
  null,
  ""
 ],
 "Creating RAID Device $target": [
  null,
  ""
 ],
 "Creating filesystem on $target": [
  null,
  "Création du système de fichier sur $target"
 ],
 "Creating logical volume $target": [
  null,
  ""
 ],
 "Creating partition $target": [
  null,
  "Création de la partition sur $target"
 ],
 "Creating snapshot of $target": [
  null,
  ""
 ],
 "Creating volume group $target": [
  null,
  ""
 ],
 "Custom": [
  null,
  "Personnalisé"
 ],
 "Custom (Enter filesystem type)": [
  null,
  "Personnalisé (indiquer le type de système de fichiers)"
 ],
 "DISK IS FAILING": [
  null,
  ""
 ],
 "Data Used": [
  null,
  ""
 ],
 "Deactivate": [
  null,
  "Désactiver"
 ],
 "Deactivating $target": [
  null,
  ""
 ],
 "Default": [
  null,
  "Par défaut"
 ],
 "Delete": [
  null,
  "Supprimer"
 ],
 "Deleting $target": [
  null,
  "Suppression de $target"
 ],
 "Deleting a logical volume will delete all data in it.": [
  null,
  "Supprimer un volume logique en effacera toutes les données qu'il contient."
 ],
 "Deleting a partition will delete all data in it.": [
  null,
  "Supprimer une partition en effacera toutes les données qu'elle contient."
 ],
 "Deleting volume group $target": [
  null,
  ""
 ],
 "Device $0 is a member of RAID Array $1": [
  null,
  "Le périphérique $0 est membre de la grappe RAID $1"
 ],
 "Device $0 is a physical volume of $1": [
  null,
  "Le périphérique $0 est un volume physique de $1"
 ],
 "Device $0 is mounted on $1": [
  null,
  "Le périphérique $0 est monté sur $1"
 ],
 "Device is read-only": [
  null,
  ""
 ],
 "Disk is OK": [
  null,
  "Le disque est OK"
 ],
 "Disks": [
  null,
  "Disques"
 ],
 "Don't overwrite existing data": [
  null,
  "Ne pas écraser les données existantes"
 ],
 "Drive": [
  null,
  "Disque"
 ],
 "Drives": [
  null,
  "Disques"
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
  ""
 ],
 "Encrypted EXT4 (LUKS)": [
  null,
  "EXT4 chiffré (LUKS)"
 ],
 "Encrypted XFS (LUKS)": [
  null,
  "XFS chiffré (LUKS)"
 ],
 "Encryption": [
  null,
  ""
 ],
 "Encryption Options": [
  null,
  "Options de chiffrement"
 ],
 "Erase": [
  null,
  "Effacer"
 ],
 "Erasing $target": [
  null,
  "Effacement de $target"
 ],
 "Error": [
  null,
  "Erreur"
 ],
 "Extended Partition": [
  null,
  "Partition étendue"
 ],
 "Filesystem": [
  null,
  ""
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
  "Type de système de fichiers"
 ],
 "Filesystems": [
  null,
  "Systèmes de fichiers"
 ],
 "Format": [
  null,
  "Formater"
 ],
 "Format $0": [
  null,
  "Formater $0"
 ],
 "Format Disk $0": [
  null,
  "Formater le disque $0"
 ],
 "Formatting a disk will erase all data on it.": [
  null,
  "Formater un disque en effacera toutes les données qu'il contient."
 ],
 "Formatting a storage device will erase all data on it.": [
  null,
  "Formater un périphérique de stockage en effacera toutes les données qu'il contient."
 ],
 "Free": [
  null,
  "Disponible"
 ],
 "Free Space": [
  null,
  ""
 ],
 "Go to now": [
  null,
  "Aller à maintenant"
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
  "Tâches"
 ],
 "Lock": [
  null,
  "Verrouiller"
 ],
 "Locking $target": [
  null,
  ""
 ],
 "Logical Volume": [
  null,
  "Volume logique"
 ],
 "Logical Volume (Snapshot)": [
  null,
  "Volume logique (instantané)"
 ],
 "Marking $target as faulty": [
  null,
  ""
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
  "Monter"
 ],
 "Mount Options": [
  null,
  "Options de montage"
 ],
 "Mount Point": [
  null,
  "Point de montage"
 ],
 "Mounted At": [
  null,
  ""
 ],
 "Mounting": [
  null,
  "Montage"
 ],
 "Mounting $target": [
  null,
  "Montage de $target"
 ],
 "NTFS - Compatible with most systems": [
  null,
  "NTFS - Compatible avec la plupart des systèmes"
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
  ""
 ],
 "Next": [
  null,
  "Suivant"
 ],
 "No Filesystem": [
  null,
  "Aucun système de fichiers"
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
  "Aucun média inséré"
 ],
 "No partitioning": [
  null,
  "Aucun partitionnement"
 ],
 "No storage set up as RAID": [
  null,
  ""
 ],
 "No volume groups created": [
  null,
  ""
 ],
 "Off": [
  null,
  "Éteint"
 ],
 "On": [
  null,
  "Allumé"
 ],
 "Operation '$operation' on $target": [
  null,
  ""
 ],
 "Options": [
  null,
  "Options"
 ],
 "Other Devices": [
  null,
  "Autres Périphériques"
 ],
 "Overwrite existing data with zeros": [
  null,
  "Écraser les données existantes avec des zéros"
 ],
 "Partition": [
  null,
  "Partition"
 ],
 "Partitioning": [
  null,
  "Partitionnement"
 ],
 "Passphrase": [
  null,
  "Phrase de passe"
 ],
 "Passphrase cannot be empty": [
  null,
  ""
 ],
 "Passphrases do not match": [
  null,
  "Les phrases de passe ne correspondent pas."
 ],
 "Password": [
  null,
  "Mot de passe"
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
  "Confirmer la suppression de $0"
 ],
 "Pool": [
  null,
  ""
 ],
 "Pool for Thin Logical Volumes": [
  null,
  ""
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
  "RAID 0 (Réparti par bande)"
 ],
 "RAID 1 (Mirror)": [
  null,
  "RAID 1 (Miroir)"
 ],
 "RAID 10 (Stripe of Mirrors)": [
  null,
  ""
 ],
 "RAID 4 (Dedicated Parity)": [
  null,
  "RAID 4 (Parité Dédié)"
 ],
 "RAID 5 (Distributed Parity)": [
  null,
  "RAID 5 (Parité Distribué)"
 ],
 "RAID 6 (Double Distributed Parity)": [
  null,
  "RAID 6 (Parité Doublement Distribué)"
 ],
 "RAID Device": [
  null,
  "Périphérique RAID"
 ],
 "RAID Device $0": [
  null,
  "Périphérique RAID $0"
 ],
 "RAID Devices": [
  null,
  "Périphériques RAID"
 ],
 "RAID Level": [
  null,
  "Niveau RAID"
 ],
 "RAID Member": [
  null,
  ""
 ],
 "Reading": [
  null,
  "Lecture"
 ],
 "Reboot": [
  null,
  "Redémarrer"
 ],
 "Recovering RAID Device $target": [
  null,
  ""
 ],
 "Removing $target from RAID Device": [
  null,
  ""
 ],
 "Removing physical volume from $target": [
  null,
  ""
 ],
 "Rename": [
  null,
  "Renommer"
 ],
 "Rename Logical Volume": [
  null,
  ""
 ],
 "Renaming $target": [
  null,
  ""
 ],
 "Resize": [
  null,
  "Redimensionner"
 ],
 "Resize Filesystem": [
  null,
  "Redimensionner un système de fichiers"
 ],
 "Resize Logical Volume": [
  null,
  "Redimensionner un volume logique"
 ],
 "Resizing $target": [
  null,
  ""
 ],
 "SMART self-test of $target": [
  null,
  ""
 ],
 "Securely erasing $target": [
  null,
  ""
 ],
 "Server Address": [
  null,
  ""
 ],
 "Server address cannot be empty.": [
  null,
  ""
 ],
 "Setting up loop device $target": [
  null,
  ""
 ],
 "Size": [
  null,
  "Taille"
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
 "Start": [
  null,
  "Démarrer"
 ],
 "Start Multipath": [
  null,
  ""
 ],
 "Starting RAID Device $target": [
  null,
  ""
 ],
 "Starting swapspace $target": [
  null,
  ""
 ],
 "Stop": [
  null,
  "Arrêter"
 ],
 "Stopping RAID Device $target": [
  null,
  ""
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
  "Logs de stockage"
 ],
 "Store passphrase": [
  null,
  "Enregistrer la phrase de passe"
 ],
 "Stored Passphrase": [
  null,
  "Phrase de passe enregistrée"
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
  ""
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
  "Type"
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
  "Inconnu"
 ],
 "Unknown host name": [
  null,
  ""
 ],
 "Unlock": [
  null,
  "Déverrouiller"
 ],
 "Unlocking $target": [
  null,
  ""
 ],
 "Unmount": [
  null,
  "Démonter"
 ],
 "Unmounting $target": [
  null,
  "Démontage de $target"
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
  "Utilisé(e)"
 ],
 "Username": [
  null,
  ""
 ],
 "VFAT - Compatible with all systems and devices": [
  null,
  "VFAT - Compatible avec tous les systèmes et appareils"
 ],
 "Very securely erasing $target": [
  null,
  ""
 ],
 "Volume": [
  null,
  ""
 ],
 "Volume Group": [
  null,
  ""
 ],
 "Volume Group $0": [
  null,
  "Groupe de volumes $0"
 ],
 "Volume Groups": [
  null,
  "Groupes de volumes"
 ],
 "Writing": [
  null,
  "Ecriture"
 ],
 "XFS - Red Hat Enterprise Linux 7 default": [
  null,
  "XFS - Système de fichier par défaut de Red Hat Enterprise Linux 7"
 ],
 "[$0 bytes of binary data]": [
  null,
  "[$0 octets de données binaires]"
 ],
 "[binary data]": [
  null,
  "[données binaires]"
 ],
 "[no data]": [
  null,
  "[aucune donnée]"
 ],
 "ext4 - Red Hat Enterprise Linux 6 default": [
  null,
  "ext4 - Système de fichier par défaut de Red Hat Enterprise Linux 6"
 ],
 "iSCSI Targets": [
  null,
  ""
 ],
 "unknown target": [
  null,
  ""
 ],
 "storage-id-desc\u0004$0 File System": [
  null,
  "Système de fichier $0"
 ],
 "storage-id-desc\u0004Encrypted data": [
  null,
  ""
 ],
 "storage-id-desc\u0004Other Data": [
  null,
  "Autres données"
 ],
 "storage-id-desc\u0004Swap Space": [
  null,
  "Espace d'échange"
 ],
 "storage-id-desc\u0004Unrecognized Data": [
  null,
  "Données non reconnues"
 ],
 "storage\u0004Assessment": [
  null,
  ""
 ],
 "storage\u0004Bitmap": [
  null,
  ""
 ],
 "storage\u0004Capacity": [
  null,
  "Capacité"
 ],
 "storage\u0004Device": [
  null,
  "Périphérique"
 ],
 "storage\u0004Device File": [
  null,
  ""
 ],
 "storage\u0004Drive": [
  null,
  ""
 ],
 "storage\u0004Firmware Version": [
  null,
  ""
 ],
 "storage\u0004Hard Disk": [
  null,
  "Disque dur"
 ],
 "storage\u0004Model": [
  null,
  ""
 ],
 "storage\u0004Multipathed Devices": [
  null,
  ""
 ],
 "storage\u0004Optical Drive": [
  null,
  "Lecteur optique"
 ],
 "storage\u0004RAID Level": [
  null,
  ""
 ],
 "storage\u0004Removable Drive": [
  null,
  "Périphérique amovible"
 ],
 "storage\u0004Serial Number": [
  null,
  "Numéro de série"
 ],
 "storage\u0004Solid-State Disk": [
  null,
  "Disque SSD"
 ],
 "storage\u0004State": [
  null,
  ""
 ],
 "storage\u0004UUID": [
  null,
  ""
 ],
 "storage\u0004World Wide Name": [
  null,
  ""
 ],
 "format-bytes\u0004bytes": [
  null,
  "octets"
 ]
}));
