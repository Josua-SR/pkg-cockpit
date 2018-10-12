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
  "x-generator": "Zanata 4.6.2"
 },
 "$0 Block Device": [
  null,
  "$0 Périphérique de bloc"
 ],
 "$0 Chunk Size": [
  null,
  "$0 Taille de bloc"
 ],
 "$0 Disks": [
  null,
  "$0 Disques"
 ],
 "$0 data + $1 overhead used of $2 ($3)": [
  null,
  "$0 données + $1 frais généraux utilisés de $2 ( $3 )"
 ],
 "$0 day": [
  "$0 days",
  "$0 jour",
  "$0 jours"
 ],
 "$0 disk is missing": [
  "$0 disks are missing",
  "$0 disque est manquant",
  "$0 disques sont manquants"
 ],
 "$0 filesystems can not be made larger.": [
  null,
  "$0 les systèmes de fichiers ne peuvent pas être agrandis."
 ],
 "$0 filesystems can not be made smaller.": [
  null,
  "$0 les systèmes de fichiers ne peuvent pas être réduits."
 ],
 "$0 filesystems can not be resized here.": [
  null,
  "$0 Les systèmes de fichiers ne peuvent pas être redimensionnés ici."
 ],
 "$0 hour": [
  "$0 hours",
  "$0 heure",
  "$0 heures"
 ],
 "$0 is in active use": [
  null,
  "$0 est en utilisation active"
 ],
 "$0 is not available from any repository.": [
  null,
  "$0 n'est disponible à partir d'aucun référentiel."
 ],
 "$0 minute": [
  "$0 minutes",
  "$0 minute",
  "$0 minutes"
 ],
 "$0 month": [
  "$0 months",
  "$0 mois",
  "$0 mois"
 ],
 "$0 of $1": [
  null,
  "$0 of $1"
 ],
 "$0 slots remain": [
  null,
  "$0 logements restants"
 ],
 "$0 used of $1 ($2 saved)": [
  null,
  "$0 utilisé de $1 ( $2 enregistré)"
 ],
 "$0 week": [
  "$0 weeks",
  "$0 semaine",
  "$0 semaines"
 ],
 "$0 will be installed.": [
  null,
  "0 $ sera installé."
 ],
 "$0 year": [
  "$0 years",
  "$0 an",
  "$0 ans"
 ],
 "$0, $1 free": [
  null,
  "$0 , $1 disponible"
 ],
 "$name (from $host)": [
  null,
  "$name (de $host )"
 ],
 "${size} ${desc}": [
  null,
  "$ {size} $ {desc}"
 ],
 "(default)": [
  null,
  "(défaut)"
 ],
 "(none)": [
  null,
  "(aucun)"
 ],
 "--": [
  null,
  "--"
 ],
 "1 MiB": [
  null,
  "1 Mio"
 ],
 "1 day": [
  null,
  "Un jour"
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
  "128 KiB"
 ],
 "16 KiB": [
  null,
  "16 KiB"
 ],
 "2 MiB": [
  null,
  "2 Mio"
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
  "5 minutes"
 ],
 "512 KiB": [
  null,
  "512 KiB"
 ],
 "6 hours": [
  null,
  "6 heures"
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
  "Un disque est nécessaire."
 ],
 "A spare disk needs to be added first before this disk can be removed.": [
  null,
  "Un disque de rechange doit être ajouté en premier avant que ce disque puisse être retiré."
 ],
 "Activate": [
  null,
  "Activer"
 ],
 "Activating $target": [
  null,
  "Activation $target"
 ],
 "Active since": [
  null,
  "Actif depuis"
 ],
 "Add": [
  null,
  "Ajouter"
 ],
 "Add Disks": [
  null,
  "Ajouter des disques"
 ],
 "Add Key": [
  null,
  "Ajouter une clé"
 ],
 "Add iSCSI Portal": [
  null,
  "Ajouter un portail iSCSI"
 ],
 "Adding physical volume to $target": [
  null,
  "Ajouter du volume physique à $target"
 ],
 "Additional packages:": [
  null,
  "Paquets supplémentaires :"
 ],
 "Address": [
  null,
  "Adresse"
 ],
 "Address cannot be empty": [
  null,
  "L'adresse ne peut pas être vide"
 ],
 "Address is not a valid URL": [
  null,
  ""
 ],
 "Apply": [
  null,
  "Appliquer"
 ],
 "At least $0 disks are needed.": [
  null,
  "Au moins $0 disques sont nécessaires."
 ],
 "At least one disk is needed.": [
  null,
  "Un disque au moins est nécessaire."
 ],
 "Authentication required": [
  null,
  "Authentification requise"
 ],
 "Available targets on $0": [
  null,
  "Cibles disponibles sur $0"
 ],
 "Backing Device": [
  null,
  "Dispositif de support"
 ],
 "Block": [
  null,
  "Bloc"
 ],
 "Block device for filesystems": [
  null,
  "Bloquer l'appareil pour les systèmes de fichiers"
 ],
 "Blocked": [
  null,
  "Bloqué"
 ],
 "Can't delete while unlocked": [
  null,
  "Impossible de supprimer si déverrouillé"
 ],
 "Cancel": [
  null,
  "Annuler"
 ],
 "Change": [
  null,
  "Changement"
 ],
 "Change iSCSI Initiator Name": [
  null,
  "Modifier le nom de l'initiateur iSCSI"
 ],
 "Change passphrase": [
  null,
  "Modifier la phrase de passe"
 ],
 "Checking $target": [
  null,
  "Vérification $target"
 ],
 "Checking RAID Device $target": [
  null,
  "Vérification du périphérique RAID $target"
 ],
 "Checking and Repairing RAID Device $target": [
  null,
  "Vérification et réparation du périphérique RAID $target"
 ],
 "Checking installed software": [
  null,
  "Vérification des logiciels installés"
 ],
 "Chunk Size": [
  null,
  "Taille de bloc"
 ],
 "Cleaning up for $target": [
  null,
  "Nettoyage pour $target"
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
  "Compatible avec les systèmes modernes et les disques durs> 2 To (GPT)"
 ],
 "Compression": [
  null,
  "Compression"
 ],
 "Confirm passphrase": [
  null,
  "Confirmer la phrase secrète"
 ],
 "Confirm removal with passphrase": [
  null,
  "Confirmer la suppression avec la phrase de passe"
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
  "Créer un volume logique"
 ],
 "Create Partition": [
  null,
  "Créer Partition"
 ],
 "Create RAID Device": [
  null,
  "Créer Périphérique RAID"
 ],
 "Create Snapshot": [
  null,
  "Créer Instantané"
 ],
 "Create Thin Volume": [
  null,
  "Créer Volume dynamique"
 ],
 "Create VDO Device": [
  null,
  "Créer Périphérique VDO"
 ],
 "Create Volume Group": [
  null,
  "Créer Groupe de volumes"
 ],
 "Create new Logical Volume": [
  null,
  "Créer un nouveau volume logique"
 ],
 "Create partition": [
  null,
  "Créer une partition"
 ],
 "Create partition on $0": [
  null,
  "Créer une partition sur $0"
 ],
 "Create partition table": [
  null,
  "Créer une table de partition"
 ],
 "Creating RAID Device $target": [
  null,
  "Création d'un périphérique RAID $target"
 ],
 "Creating filesystem on $target": [
  null,
  "Créer un système de fichiers sur $target"
 ],
 "Creating logical volume $target": [
  null,
  "Création de volume logique $target"
 ],
 "Creating partition $target": [
  null,
  "Créer une partition $target"
 ],
 "Creating snapshot of $target": [
  null,
  "Création d'un instantané de $target"
 ],
 "Creating volume group $target": [
  null,
  "Création d'un groupe de volumes $target"
 ],
 "Custom": [
  null,
  "Personnalisé"
 ],
 "Custom (Enter filesystem type)": [
  null,
  "Personnalisé (saisir le type de système de fichiers)"
 ],
 "Custom encryption options": [
  null,
  "Options de chiffrement personnalisées"
 ],
 "Custom mount option": [
  null,
  "Option de montage personnalisée"
 ],
 "Custom mount options": [
  null,
  "Options de montage personnalisées"
 ],
 "DISK IS FAILING": [
  null,
  "DISQUE EN ÉCHEC"
 ],
 "Data Used": [
  null,
  "Données utilisées"
 ],
 "Deactivate": [
  null,
  "Désactiver"
 ],
 "Deactivating $target": [
  null,
  "Désactiver $target"
 ],
 "Deduplication": [
  null,
  "Déduplication"
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
  "Suppression $target"
 ],
 "Deleting a RAID device will erase all data on it.": [
  null,
  "La suppression d'un périphérique RAID effacera toutes les données qu'il contient."
 ],
 "Deleting a VDO device will erase all data on it.": [
  null,
  "Supprimer un appareil VDO effacera toutes les données qu'il contient."
 ],
 "Deleting a logical volume will delete all data in it.": [
  null,
  "La suppression d'un volume logique supprimera toutes les données qu'il contient."
 ],
 "Deleting a partition will delete all data in it.": [
  null,
  "Supprimer une partition supprimera toutes les données qui s'y trouvent."
 ],
 "Deleting a volume group will erase all data on it.": [
  null,
  "La suppression d'un groupe de volumes effacera toutes les données qu'il contient."
 ],
 "Deleting volume group $target": [
  null,
  "Suppression du groupe de volumes $target"
 ],
 "Device File": [
  null,
  "Fichier de périphérique"
 ],
 "Device is read-only": [
  null,
  "L'appareil est en lecture seule"
 ],
 "Disk": [
  null,
  "Disque"
 ],
 "Disk is OK": [
  null,
  "Le disque est OK"
 ],
 "Disk passphrase": [
  null,
  "Phrase de passe du disque"
 ],
 "Disks": [
  null,
  "Disques"
 ],
 "Don't overwrite existing data": [
  null,
  "Ne pas écraser les données existantes"
 ],
 "Downloading $0": [
  null,
  "Téléchargement $0"
 ],
 "Drive": [
  null,
  "Lecteur"
 ],
 "Drives": [
  null,
  "Lecteur"
 ],
 "Edit": [
  null,
  "Modifier"
 ],
 "Edit Tang keyserver": [
  null,
  "Modifier le serveur de clés Tang"
 ],
 "Editing a key requires a free slot": [
  null,
  "La modification d'une clé nécessite un emplacement libre"
 ],
 "Ejecting $target": [
  null,
  "Éjecter $target"
 ],
 "Emptying $target": [
  null,
  "$target en cours de vidage"
 ],
 "Encrypted $0": [
  null,
  "Chiffré $0"
 ],
 "Encrypted EXT4 (LUKS)": [
  null,
  "EXT4 crypté (LUKS)"
 ],
 "Encrypted Logical Volume of $0": [
  null,
  "Volume logique chiffré de $0"
 ],
 "Encrypted Partition of $0": [
  null,
  "Partition chiffrée de $0"
 ],
 "Encrypted XFS (LUKS)": [
  null,
  "XFS chiffré (LUKS)"
 ],
 "Encrypted volumes can not be resized here.": [
  null,
  "Les volumes chiffrés ne peuvent pas être redimensionnés ici."
 ],
 "Encrypted volumes need to be unlocked before they can be resized.": [
  null,
  "Les volumes chiffrés doivent être déverrouillés avant de pouvoir être redimensionnés."
 ],
 "Encryption": [
  null,
  "Chiffrement"
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
 "FAILED": [
  null,
  "ÉCHOUÉ"
 ],
 "Filesystem": [
  null,
  "Système de fichiers"
 ],
 "Filesystem Mounting": [
  null,
  "Montage du système de fichiers"
 ],
 "Filesystem Name": [
  null,
  "Nom du système de fichiers"
 ],
 "Filesystem type": [
  null,
  "Type de système de fichiers"
 ],
 "Filesystems": [
  null,
  "Systèmes de fichiers"
 ],
 "Force remove passphrase in $0": [
  null,
  "Suppression de la phrase de passe forcée dans $0"
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
  "Le formatage d'un disque effacera toutes les données qu'il contient."
 ],
 "Formatting a storage device will erase all data on it.": [
  null,
  "Le formatage d'un périphérique de stockage effacera toutes les données qu'il contient."
 ],
 "Free": [
  null,
  "Gratuit"
 ],
 "Free Space": [
  null,
  "Espace libre"
 ],
 "Go to now": [
  null,
  "Aller à maintenant"
 ],
 "Grow": [
  null,
  "Augmenter"
 ],
 "Grow Logical Volume": [
  null,
  "Augmenter le volume logique"
 ],
 "Grow logical size of $0": [
  null,
  "Augmenter la taille logique de $0"
 ],
 "Grow to take all space": [
  null,
  "Augmenter en vue de prendre tout l'espace"
 ],
 "If tang-show-keys is not available, run the following:": [
  null,
  "Si tang-show-keys n'est pas disponible, exécutez ce qui suit :"
 ],
 "In Sync": [
  null,
  "En sync"
 ],
 "Inactive volume": [
  null,
  "Volume inactif"
 ],
 "Index Memory": [
  null,
  "Mémoire de l'index"
 ],
 "Install": [
  null,
  "Installer"
 ],
 "Install NFS Support": [
  null,
  "Installer le support NFS"
 ],
 "Install Software": [
  null,
  "Installer le logiciel"
 ],
 "Install VDO support": [
  null,
  "Installer le support VDO"
 ],
 "Installing $0": [
  null,
  "Installation de $0"
 ],
 "Invalid username or password": [
  null,
  "Nom d'utilisateur ou mot de passe non valide"
 ],
 "Jobs": [
  null,
  "Jobs"
 ],
 "Key slots with unknown types can not be edited here": [
  null,
  "Les emplacements de clé de type inconnu ne peuvent pas être édités ici"
 ],
 "Key source": [
  null,
  "Source de la clé"
 ],
 "Keys": [
  null,
  "Clés"
 ],
 "Keyserver": [
  null,
  "Serveur de clés"
 ],
 "Keyserver address": [
  null,
  "Adresse du serveur"
 ],
 "Keyserver removal may prevent unlocking $0.": [
  null,
  "La suppression du serveur de clés peut empêcher le déverrouillage de $0."
 ],
 "Local Mount Point": [
  null,
  "Point de montage local"
 ],
 "Lock": [
  null,
  "Verrouillage"
 ],
 "Locking $target": [
  null,
  "Verrouillage de $target"
 ],
 "Logical": [
  null,
  "Logique"
 ],
 "Logical Size": [
  null,
  "Taille logique"
 ],
 "Logical Volume": [
  null,
  "Volume logique"
 ],
 "Logical Volume (Snapshot)": [
  null,
  "Volume logique (instantané)"
 ],
 "Logical Volume of $0": [
  null,
  "Volume logique de $0"
 ],
 "Make sure the key hash from the Tang server matches:": [
  null,
  "Assurez-vous que le hachage de la clé du serveur Tang corresponde :"
 ],
 "Manually check with SSH: ": [
  null,
  "Vérifier manuellement avec SSH : "
 ],
 "Marking $target as faulty": [
  null,
  "Marquage de $target comme défectueux"
 ],
 "Member of RAID Device": [
  null,
  "Membre de RAID Device"
 ],
 "Member of RAID Device $0": [
  null,
  "Membre de RAID Device $0"
 ],
 "Metadata Used": [
  null,
  "Méta-données utilisées"
 ],
 "Modifying $target": [
  null,
  "Modifier $target"
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
 "Mount at boot": [
  null,
  "Monter au démarrage"
 ],
 "Mount options": [
  null,
  "Options de montage"
 ],
 "Mount point can not be empty": [
  null,
  "Le point de montage ne peut pas être vide"
 ],
 "Mount point cannot be empty.": [
  null,
  "Le point de montage ne peut pas être vide."
 ],
 "Mount point must start with \"/\".": [
  null,
  "Le point de montage doit commencer par \"/\"."
 ],
 "Mount read only": [
  null,
  "Monter en lecture seule"
 ],
 "Mounted At": [
  null,
  "Monté à"
 ],
 "Mounting": [
  null,
  "Montage"
 ],
 "Mounting $target": [
  null,
  "Montage de $target"
 ],
 "NFS Mount": [
  null,
  "Point de montage NFS"
 ],
 "NFS Mounts": [
  null,
  "Points de montage NFS"
 ],
 "NFS Support not installed": [
  null,
  "Support NFS non installé"
 ],
 "NTFS - Compatible with most systems": [
  null,
  "NTFS - Compatible avec la plupart des systèmes"
 ],
 "Name": [
  null,
  "Nom"
 ],
 "Name can not be empty.": [
  null,
  "Le nom ne peut pas être vide."
 ],
 "Name cannot be empty.": [
  null,
  "Le nom ne peut pas être vide."
 ],
 "Name cannot be longer than 127 characters.": [
  null,
  "Le nom ne peut pas dépasser 127 caractères."
 ],
 "Name cannot contain the character '$0'.": [
  null,
  "Le nom ne peut pas contenir le caractère « $0 »."
 ],
 "Name cannot contain whitespace.": [
  null,
  "Le nom ne peut pas contenir d'espace."
 ],
 "New NFS Mount": [
  null,
  "Nouveau point de montage NFS"
 ],
 "New passphrase": [
  null,
  "Nouvelle phrase de passe"
 ],
 "Next": [
  null,
  "Prochain"
 ],
 "No Filesystem": [
  null,
  "Aucun système de fichiers"
 ],
 "No Logical Volumes": [
  null,
  "Pas de volumes logiques"
 ],
 "No NFS mounts set up": [
  null,
  "Aucun point de montage NFS configuré"
 ],
 "No available slots": [
  null,
  "Pas d'emplacements disponibles"
 ],
 "No disks are available.": [
  null,
  "Aucun disque disponible."
 ],
 "No drives attached": [
  null,
  "Aucun lecteur relié"
 ],
 "No free key slots": [
  null,
  "Pas d'emplacements libres pour les clés"
 ],
 "No free space": [
  null,
  "Pas d'espace libre"
 ],
 "No iSCSI targets set up": [
  null,
  "Aucune cible iSCSI configurée"
 ],
 "No keys added": [
  null,
  "Aucune clé n'a été ajoutée"
 ],
 "No media inserted": [
  null,
  "Aucun média inséré"
 ],
 "No partitioning": [
  null,
  "Pas de partitionnement"
 ],
 "No storage set up as RAID": [
  null,
  "Pas de stockage configuré en RAID"
 ],
 "No storage set up as VDO": [
  null,
  "Pas de stockage configuré en VDO"
 ],
 "No volume groups created": [
  null,
  "Aucun groupe de volumes créé"
 ],
 "Not found": [
  null,
  "Non trouvé"
 ],
 "Not mounted": [
  null,
  "Non monté"
 ],
 "Not running": [
  null,
  "Pas en cours d’exécution"
 ],
 "Off": [
  null,
  "De"
 ],
 "Ok": [
  null,
  "Ok"
 ],
 "Old passphrase": [
  null,
  "Ancienne phrase de passe"
 ],
 "On": [
  null,
  "Sur"
 ],
 "Only $0 of $1 are used.": [
  null,
  "Seulement $0 de $1 sont utilisés."
 ],
 "Operation '$operation' on $target": [
  null,
  "Opération ' $operation ' sur $target"
 ],
 "Options": [
  null,
  "Options"
 ],
 "Other Devices": [
  null,
  "Autres périphériques"
 ],
 "Overwrite existing data with zeros": [
  null,
  "Remplacer les données existantes par des zéros"
 ],
 "PackageKit crashed": [
  null,
  "PackageKit crash"
 ],
 "Partition": [
  null,
  "Partition"
 ],
 "Partition of $0": [
  null,
  "Partition de $0"
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
  "La phrase de passe ne peut pas être vide"
 ],
 "Passphrase removal may prevent unlocking $0.": [
  null,
  "La suppression de la phrase de passe peut empêcher le déverrouillage de $0."
 ],
 "Passphrases do not match": [
  null,
  "Les phrases de passe ne correspondent pas"
 ],
 "Password": [
  null,
  "Mot de passe"
 ],
 "Path on Server": [
  null,
  "Chemin sur le serveur"
 ],
 "Path on server cannot be empty.": [
  null,
  "Le chemin sur le serveur ne peut pas être vide."
 ],
 "Path on server must start with \"/\".": [
  null,
  "Le chemin sur le serveur doit commencer par \"/\"."
 ],
 "Physical": [
  null,
  "Physique"
 ],
 "Physical Volume": [
  null,
  "Volume physique"
 ],
 "Physical Volumes": [
  null,
  "Volumes physiques"
 ],
 "Physical volume of $0": [
  null,
  "Volume physique de $0"
 ],
 "Physical volumes can not be resized here.": [
  null,
  "Les volumes physiques ne peuvent pas être redimensionnés ici."
 ],
 "Please confirm deletion of $0": [
  null,
  "Veuillez confirmer la suppression de $0"
 ],
 "Please confirm stopping of $0": [
  null,
  "Veuillez confirmer l'arrêt de $0"
 ],
 "Pool": [
  null,
  "Pool"
 ],
 "Pool for Thin Logical Volumes": [
  null,
  "Pool pour les volumes logiques dynamiques"
 ],
 "Pool for Thin Volumes": [
  null,
  "Pool pour les volumes dynamiques"
 ],
 "Pool for thinly provisioned volumes": [
  null,
  "Pool pour les volumes à provisionnement dynamique"
 ],
 "Port": [
  null,
  "Port"
 ],
 "Process": [
  null,
  "Processus"
 ],
 "Purpose": [
  null,
  "Objectif"
 ],
 "RAID ($0)": [
  null,
  "RAID ( $0 )"
 ],
 "RAID 0": [
  null,
  "RAID 0"
 ],
 "RAID 0 (Stripe)": [
  null,
  "RAID 0 (Bande)"
 ],
 "RAID 1": [
  null,
  "RAID 1"
 ],
 "RAID 1 (Mirror)": [
  null,
  "RAID 1 (Miroir)"
 ],
 "RAID 10": [
  null,
  "RAID 10"
 ],
 "RAID 10 (Stripe of Mirrors)": [
  null,
  "RAID 10 (Bande de miroirs)"
 ],
 "RAID 4": [
  null,
  "RAID 4"
 ],
 "RAID 4 (Dedicated Parity)": [
  null,
  "RAID 4 (Parité dédiée)"
 ],
 "RAID 5": [
  null,
  "RAID 5"
 ],
 "RAID 5 (Distributed Parity)": [
  null,
  "RAID 5 (Parité répartie)"
 ],
 "RAID 6": [
  null,
  "RAID 6"
 ],
 "RAID 6 (Double Distributed Parity)": [
  null,
  "RAID 6 (Double parité répartie)"
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
  "Niveau de RAID"
 ],
 "RAID Member": [
  null,
  "Membre RAID"
 ],
 "Reading": [
  null,
  "Lecture en cours"
 ],
 "Reboot": [
  null,
  "Redémarrer"
 ],
 "Recovering": [
  null,
  "Recouvrement"
 ],
 "Recovering RAID Device $target": [
  null,
  "Recouvrement du périphérique RAID $target"
 ],
 "Removals:": [
  null,
  "Suppressions :"
 ],
 "Remove": [
  null,
  "Retirer"
 ],
 "Remove $0?": [
  null,
  "Supprimer $0"
 ],
 "Remove Tang keyserver": [
  null,
  "Supprimer le serveur de clés Tang"
 ],
 "Remove device": [
  null,
  "Supprimer le périphérique"
 ],
 "Remove passphrase": [
  null,
  "Modifier la phrase de passe"
 ],
 "Remove passphrase in $0?": [
  null,
  "Souhaitez-vous forcer la suppression de la phrase de passe dans $0 ?"
 ],
 "Removing $0": [
  null,
  "Suppression de $0"
 ],
 "Removing $target from RAID Device": [
  null,
  "Supprimer $target du périphérique RAID"
 ],
 "Removing physical volume from $target": [
  null,
  "Suppression du volume physique de $target"
 ],
 "Rename": [
  null,
  "Renommer"
 ],
 "Rename Logical Volume": [
  null,
  "Renommer le volume logique"
 ],
 "Rename Volume Group": [
  null,
  "Renommer le groupe de volumes"
 ],
 "Renaming $target": [
  null,
  "Renommer $target"
 ],
 "Repairing $target": [
  null,
  "Réparer $target"
 ],
 "Repeat passphrase": [
  null,
  "Répéter la phrase de passe"
 ],
 "Resizing $target": [
  null,
  "Redimensionnement $target"
 ],
 "Running": [
  null,
  "En cours"
 ],
 "SMART self-test of $target": [
  null,
  "SMART auto-test de $target"
 ],
 "Save": [
  null,
  "sauvegarder"
 ],
 "Saving a new passphrase requires unlocking the disk. Please provide a current disk passphrase.": [
  null,
  "Pour enregistrer une nouvelle phrase de passe, il faut déverrouiller le disque. Veuillez fournir une phrase de passe courante."
 ],
 "Securely erasing $target": [
  null,
  "Effacer en toute sécurité $target"
 ],
 "Server": [
  null,
  "Serveur"
 ],
 "Server Address": [
  null,
  "Adresse du serveur"
 ],
 "Server address cannot be empty.": [
  null,
  "L'adresse du serveur ne peut pas être vide."
 ],
 "Server cannot be empty.": [
  null,
  "Le serveur ne peut pas être vide."
 ],
 "Service": [
  null,
  "Service"
 ],
 "Session": [
  null,
  "Session"
 ],
 "Setting up loop device $target": [
  null,
  "Configuration du périphérique de boucle $target"
 ],
 "Shrink": [
  null,
  "Réduire"
 ],
 "Shrink Logical Volume": [
  null,
  "Réduire le volume logique"
 ],
 "Size": [
  null,
  "Taille"
 ],
 "Slot $0": [
  null,
  "Emplacement $0"
 ],
 "Spare": [
  null,
  "De rechange"
 ],
 "Start": [
  null,
  "Démarrer"
 ],
 "Start Multipath": [
  null,
  "Démarrer Multipath"
 ],
 "Starting RAID Device $target": [
  null,
  "Démarrage du périphérique RAID $target"
 ],
 "Starting swapspace $target": [
  null,
  "Démarrage de swapspace $target"
 ],
 "Stop": [
  null,
  "Arrêter"
 ],
 "Stop Device": [
  null,
  "Arrêter le périphérique"
 ],
 "Stop and Unmount": [
  null,
  "Arrêter et démonter"
 ],
 "Stop and remove": [
  null,
  "Arrêter et retirer"
 ],
 "Stopping RAID Device $target": [
  null,
  "Arrêt du périphérique RAID $target"
 ],
 "Stopping swapspace $target": [
  null,
  "Arrêt de l'espace d'échange $target"
 ],
 "Storage": [
  null,
  "Stockage"
 ],
 "Storage Logs": [
  null,
  "Journaux de stockage"
 ],
 "Store passphrase": [
  null,
  "Stocker la phrase de passe"
 ],
 "Stored Passphrase": [
  null,
  "Phrase de passe stockée"
 ],
 "Stored passphrase": [
  null,
  "Phrase de passe stockée"
 ],
 "Support is installed.": [
  null,
  "Le support est installé."
 ],
 "Swap": [
  null,
  "Swap"
 ],
 "Synchronizing RAID Device $target": [
  null,
  "Synchronisation du périphérique RAID $target"
 ],
 "Tang keyserver": [
  null,
  "Serveur de clés Tang"
 ],
 "The \"storaged\" API is not available on this system.": [
  null,
  "L'API \"stockée\" n'est pas disponible sur ce système."
 ],
 "The RAID Array is in a degraded state": [
  null,
  "Le RAID Array est dans un état dégradé"
 ],
 "The RAID device must be running in order to add spare disks.": [
  null,
  "Le périphérique RAID doit être en cours d'exécution pour pouvoir ajouter des disques supplémentaires."
 ],
 "The RAID device must be running in order to remove disks.": [
  null,
  "Le périphérique RAID doit être en cours d'exécution pour pouvoir supprimer les disques."
 ],
 "The creation of this VDO device did not finish and the device can't be used.": [
  null,
  "La création de ce périphérique VDO n'est pas terminée et l'appareil ne peut pas être utilisé."
 ],
 "The currently logged in user is not permitted to see information about keys.": [
  null,
  "L'utilisateur actuellement connecté n'est pas autorisé à voir les informations sur les clés."
 ],
 "The filesystem is in use by login sessions and system services.                Proceeding will stop these.": [
  null,
  "Le système de fichiers est utilisé par les sessions en cours et les services système. \nSi vous continuez, vous les interromprez."
 ],
 "The filesystem is in use by login sessions.                Proceeding will stop these.": [
  null,
  "Le système de fichiers est utilisé par les sessions en cours. \n                     Si vous continuez, vous les interromprez."
 ],
 "The filesystem is in use by system services.                Proceeding will stop these.": [
  null,
  "Le système de fichiers est utilisé par les sessions en cours et les services système.                            Si vous continuez, vous les interromprez."
 ],
 "The last disk of a RAID device cannot be removed.": [
  null,
  "Le dernier disque d'un périphérique RAID ne peut pas être supprimé."
 ],
 "The last key slot can not be removed": [
  null,
  "Le dernier logement de clé ne peut pas être retiré"
 ],
 "The last physical volume of a volume group cannot be removed.": [
  null,
  "Le dernier volume physique d'un groupe de volumes ne peut pas être supprimé."
 ],
 "The user <b>$0</b> is not permitted to manage storage": [
  null,
  "L'utilisateur <b>$0</b> n'est pas autorisé à gérer le stockage"
 ],
 "There are devices with multiple paths on the system, but the multipath service is not running.": [
  null,
  "Il y a des périphériques avec plusieurs chemins sur le système, mais le service multipath n'est pas en cours d'exécution."
 ],
 "There is not enough free space elsewhere to remove this physical volume. At least $0 more free space is needed.": [
  null,
  "Il n'y a pas assez d'espace libre ailleurs pour supprimer ce volume physique. Il faut au moins $0 plus d'espace libre."
 ],
 "Thin Logical Volume": [
  null,
  "Volume logique dynamique"
 ],
 "This NFS mount is in use and only its options can be changed.": [
  null,
  "Ce montage NFS est en cours d'utilisation et seules ses options peuvent être modifiées."
 ],
 "This VDO device does not use all of its backing device.": [
  null,
  "Ce périphérique VDO n'utilise pas tout son périphérique de sauvegarde."
 ],
 "This device has filesystems that are currently in use.                Proceeding will unmount all filesystems on it.": [
  null,
  "Cet périphérique possède des systèmes de fichiers actuellement utilisés.      Si vous continuez, cela aura pour effet de démonter tous les systèmes de fichiers sur celui-ci."
 ],
 "This device is currently used for RAID devices.": [
  null,
  "Cet appareil est actuellement utilisé pour les appareils RAID."
 ],
 "This device is currently used for RAID devices.                Proceeding will remove it from its RAID devices.": [
  null,
  "Cet appareil est actuellement utilisé pour les appareils RAID.               Le processus va le retirer de ses périphériques RAID."
 ],
 "This device is currently used for VDO devices.": [
  null,
  "Cet appareil est actuellement utilisé pour les appareils VDO."
 ],
 "This device is currently used for volume groups.": [
  null,
  "Cet appareil est actuellement utilisé pour les groupes de volumes."
 ],
 "This device is currently used for volume groups.                Proceeding will remove it from its volume groups.": [
  null,
  "Cet appareil est actuellement utilisé pour les groupes de volumes.         Le processus l'enlèvera de ses groupes de volumes."
 ],
 "This disk cannot be removed while the device is recovering.": [
  null,
  "Ce disque ne peut pas être retiré pendant le recouvrement du périphérique."
 ],
 "This volume needs to be activated before it can be resized.": [
  null,
  "Ce volume doit être activé avant de pouvoir être redimensionné."
 ],
 "Total size: $0": [
  null,
  "Taille totale : $0"
 ],
 "Trust key": [
  null,
  "Clé de confiance"
 ],
 "Type": [
  null,
  "Type"
 ],
 "UUID": [
  null,
  "UUID"
 ],
 "Unable to reach server": [
  null,
  "Impossible d'atteindre le serveur"
 ],
 "Unable to remove mount": [
  null,
  "Impossible de supprimer le montage"
 ],
 "Unable to unmount filesystem": [
  null,
  "Impossible de démonter le système de fichiers"
 ],
 "Unit": [
  null,
  "Unité"
 ],
 "Unknown": [
  null,
  "Inconnu"
 ],
 "Unknown ($0)": [
  null,
  "Inconnu ( $0 )"
 ],
 "Unknown host name": [
  null,
  "Nom d'hôte inconnu"
 ],
 "Unknown type": [
  null,
  "Type inconnu"
 ],
 "Unlock": [
  null,
  "Déverrouiller"
 ],
 "Unlock at boot": [
  null,
  "Déverrouiller au démarrage"
 ],
 "Unlock read only": [
  null,
  "Déverrouiller en lecture seule"
 ],
 "Unlocking $target": [
  null,
  "Déverrouillage $target"
 ],
 "Unlocking disk...": [
  null,
  "Déverrouillage du disque....."
 ],
 "Unmount": [
  null,
  "Démonter"
 ],
 "Unmounting $target": [
  null,
  "Démonter $target"
 ],
 "Unrecognized Data": [
  null,
  "Données non reconnues"
 ],
 "Unrecognized data can not be made smaller here.": [
  null,
  "Les données non reconnues ne peuvent pas être plus petites ici."
 ],
 "Unsupported volume": [
  null,
  "Volume non pris en charge"
 ],
 "Usage": [
  null,
  "Utilisation"
 ],
 "Use 512 Byte emulation": [
  null,
  "Utiliser l'émulation 512 octets"
 ],
 "Used": [
  null,
  "Utilisé"
 ],
 "Username": [
  null,
  "Nom d'utilisateur"
 ],
 "VDO Backing": [
  null,
  "Support VDO"
 ],
 "VDO Device": [
  null,
  "Dispositif VDO"
 ],
 "VDO Device $0": [
  null,
  "Dispositif VDO $0"
 ],
 "VDO Devices": [
  null,
  "Appareils VDO"
 ],
 "VDO backing devices can not be made smaller": [
  null,
  "Les supports VDO ne peuvent pas être plus petits"
 ],
 "VDO support not installed": [
  null,
  "Support VDO non installé"
 ],
 "VFAT - Compatible with all systems and devices": [
  null,
  "VFAT - Compatible avec tous les systèmes et appareils"
 ],
 "Verify key": [
  null,
  "Vérifier la clé"
 ],
 "Very securely erasing $target": [
  null,
  "Effacement très sécurisé de $target"
 ],
 "Volume": [
  null,
  "Volume"
 ],
 "Volume Group": [
  null,
  "Groupe de volumes"
 ],
 "Volume Group $0": [
  null,
  "Groupe de volumes $0"
 ],
 "Volume Groups": [
  null,
  "Groupes de volumes"
 ],
 "Waiting for other software management operations to finish": [
  null,
  "Attente de la fin des autres opérations de gestion du logiciel"
 ],
 "What if tang-show-keys is not available?": [
  null,
  "Que faire si les touches tang-show ne sont pas disponibles ?"
 ],
 "Write-mostly": [
  null,
  "Écriture - le plus souvent"
 ],
 "Writing": [
  null,
  "Écriture"
 ],
 "XFS - Red Hat Enterprise Linux 7 default": [
  null,
  "XFS - Red Hat Enterprise Linux 7 par défaut"
 ],
 "[$0 bytes of binary data]": [
  null,
  "[ $0 octets de données binaires]"
 ],
 "[binary data]": [
  null,
  "[données binaires]"
 ],
 "[no data]": [
  null,
  "[pas de données]"
 ],
 "ext4 - Red Hat Enterprise Linux 6 default": [
  null,
  "ext4 - Red Hat Enterprise Linux 6 par défaut"
 ],
 "iSCSI Targets": [
  null,
  "Cibles iSCSI"
 ],
 "key slot $0": [
  null,
  "logement de clé $0"
 ],
 "undefined": [
  null,
  "indéfini"
 ],
 "unknown target": [
  null,
  "cible inconnue"
 ],
 "unpartitioned space on $0": [
  null,
  "espace non partitionné sur $0"
 ],
 "storage-id-desc\u0004$0 File System": [
  null,
  "$0 Système de fichiers"
 ],
 "storage-id-desc\u0004Encrypted data": [
  null,
  "Données chiffrées"
 ],
 "storage-id-desc\u0004Other Data": [
  null,
  "Autre informations"
 ],
 "storage-id-desc\u0004Swap Space": [
  null,
  "Espace swap"
 ],
 "storage-id-desc\u0004Unrecognized Data": [
  null,
  "Données non reconnues"
 ],
 "storage-id-desc\u0004VDO Backing": [
  null,
  "Support VDO"
 ],
 "storage\u0004Drive": [
  null,
  "Lecteur"
 ],
 "storage\u0004Hard Disk": [
  null,
  "Disque dur"
 ],
 "storage\u0004Optical Drive": [
  null,
  "Lecteur optique"
 ],
 "storage\u0004Removable Drive": [
  null,
  "Lecteur amovible"
 ],
 "storage\u0004Solid-State Disk": [
  null,
  "Solid-State Disk"
 ],
 "format-bytes\u0004bytes": [
  null,
  "octets"
 ]
}));
