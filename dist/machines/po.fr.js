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
 "$0 is available for most operating systems. To install it, search for it in GNOME Software or run the following:": [
  null,
  "$0 est disponible pour la plupart des systèmes d’exploitation. Pour l’installer, recherchez-le dans le logiciel GNOME ou exécutez les opérations suivantes:"
 ],
 "Activate": [
  null,
  "Activer"
 ],
 "Add": [
  null,
  "Ajouter"
 ],
 "Add Disk": [
  null,
  "Ajouter un disque"
 ],
 "Address": [
  null,
  "Adresse"
 ],
 "Address:": [
  null,
  "Adresse:"
 ],
 "Always attach": [
  null,
  "Toujours attacher"
 ],
 "Apply": [
  null,
  "Appliquer"
 ],
 "Automatically start libvirt on boot": [
  null,
  "Lancement automatique de libvirt au démarrage"
 ],
 "Autostart": [
  null,
  "Démarrage automatique"
 ],
 "Available": [
  null,
  "Disponible"
 ],
 "Boot Order": [
  null,
  "Ordre d'amorçage"
 ],
 "Bus": [
  null,
  "Bus"
 ],
 "CHANGE NETWORK STATE action failed": [
  null,
  "Échec de l’action CHANGE NETWORK STATE"
 ],
 "CPU Type": [
  null,
  "Type de CPU"
 ],
 "Cancel": [
  null,
  "Annuler"
 ],
 "Capacity": [
  null,
  "Capacité"
 ],
 "Changes will take effect after shutting down the VM": [
  null,
  "Ces modifications prendront effet après la prochaine extinction de la VM"
 ],
 "Clicking \"Launch Remote Viewer\" will download a .vv file and launch $0.": [
  null,
  "En cliquant sur \"Launch Remote Viewer\" (lancer l’afficheur à distance), vous téléchargerez un fichier .vv et le lancerez $0 ."
 ],
 "Connect with any $0 viewer application.": [
  null,
  "Connectez-vous avec n’importe quel $0 application spectateur."
 ],
 "Connect with any SPICE or VNC viewer application.": [
  null,
  "Connectez-vous avec n’importe quelle application SPICE ou au VNC Viewer."
 ],
 "Connecting": [
  null,
  "Connexion en cours"
 ],
 "Connecting to Virtualization Service": [
  null,
  "Connexion au service de virtualisation"
 ],
 "Connection": [
  null,
  "Connexion"
 ],
 "Console Type": [
  null,
  "Type de console"
 ],
 "Consoles": [
  null,
  "Consoles"
 ],
 "Cores per socket": [
  null,
  "Cores par socket"
 ],
 "Create": [
  null,
  "Créer"
 ],
 "Create New": [
  null,
  "Créer Nouveau"
 ],
 "Create Storage Pool": [
  null,
  "Création du pool de stockage"
 ],
 "Create VM": [
  null,
  "Créer VM"
 ],
 "Creation of vm $0 failed": [
  null,
  "La création de la vm $0 a échoué"
 ],
 "Ctrl+Alt+Del": [
  null,
  "Ctrl+Alt+Del"
 ],
 "DHCP Range": [
  null,
  ""
 ],
 "Deactivate": [
  null,
  "Désactiver"
 ],
 "Delete": [
  null,
  "Supprimer"
 ],
 "Delete Content": [
  null,
  ""
 ],
 "Delete Storage Pool $0": [
  null,
  ""
 ],
 "Delete associated storage files:": [
  null,
  "Supprimer les fichiers de stockage associés:"
 ],
 "Delete the Volumes inside this Pool": [
  null,
  ""
 ],
 "Deleting an inactive Storage Pool will only undefine the Pool. Its content will not be deleted.": [
  null,
  ""
 ],
 "Device": [
  null,
  "Périphérique"
 ],
 "Disconnect": [
  null,
  "Déconnecter"
 ],
 "Disconnected": [
  null,
  "Déconnecté"
 ],
 "Disconnected from serial console. Click the Reconnect button.": [
  null,
  "Déconnecté de la console série. Cliquez sur le bouton Reconnecter."
 ],
 "Disk failed to be attached": [
  null,
  "Le disque n’a pas pu être attaché"
 ],
 "Disk failed to be created": [
  null,
  "Le disque n’a pas pu être créé"
 ],
 "Disks": [
  null,
  "Disques"
 ],
 "Download the MSI from $0": [
  null,
  "Télécharger le MSI depuis $0"
 ],
 "Edit": [
  null,
  "Modifier"
 ],
 "Emulated Machine": [
  null,
  "Machine émulée"
 ],
 "Existing Disk Image": [
  null,
  ""
 ],
 "Existing disk image on host's file system": [
  null,
  ""
 ],
 "Fewer than the maximum number of virtual CPUs should be enabled.": [
  null,
  "On ne doit pas activer un nombre de CPU supérieur au nombre maximum."
 ],
 "File": [
  null,
  "Fichier"
 ],
 "Filesystem Directory": [
  null,
  "Répertoire des fichiers système"
 ],
 "Force Restart": [
  null,
  "Redémarrage forcé"
 ],
 "Force Shut Down": [
  null,
  "Arrêt forcé"
 ],
 "Format": [
  null,
  "Formater"
 ],
 "Forwarding mode": [
  null,
  ""
 ],
 "GET HYPERVISOR MAX VCPU action failed": [
  null,
  "L’action GET HYPERVISOR MAX VCPU a échoué"
 ],
 "General": [
  null,
  "Général"
 ],
 "GiB": [
  null,
  "GiB"
 ],
 "Graphics Console (VNC)": [
  null,
  "Console graphique (VNC)"
 ],
 "Graphics Console in Desktop Viewer": [
  null,
  "Console graphique dans la visionneuse de bureau"
 ],
 "Host": [
  null,
  "Hôte"
 ],
 "Host Name": [
  null,
  "Nom d’hôte"
 ],
 "Host should not be empty": [
  null,
  "Le nom d’hôte n’est peut-être pas vide"
 ],
 "INSTALL VM action failed": [
  null,
  "Échec de l’action INSTALL VM"
 ],
 "IPv4 Address": [
  null,
  ""
 ],
 "IPv6 Address": [
  null,
  ""
 ],
 "Immediately Start VM": [
  null,
  "Démarrer immédiatement la VM"
 ],
 "Install": [
  null,
  "Installer"
 ],
 "Installation Source": [
  null,
  "Source d’installation"
 ],
 "Installation Source Type": [
  null,
  "Type de source d’installation"
 ],
 "Installation Source should not be empty": [
  null,
  "La source d’installation ne doit pas être vide"
 ],
 "Interface Type": [
  null,
  ""
 ],
 "Invalid filename": [
  null,
  "Nom de fichier non valide"
 ],
 "Launch Remote Viewer": [
  null,
  "Lancer l’afficheur à distance"
 ],
 "Loading ...": [
  null,
  "Chargement ..."
 ],
 "Local Install Media": [
  null,
  ""
 ],
 "MAC Address": [
  null,
  "Adresse Mac"
 ],
 "Mac Address": [
  null,
  "Adresse MAC"
 ],
 "Manual Connection": [
  null,
  "Connexion manuelle"
 ],
 "Maximum Transmission Unit": [
  null,
  ""
 ],
 "Maximum number of virtual CPUs allocated for the guest OS, which must be between 1 and $0": [
  null,
  "Nombre maximum de CPU virtuels alloués pour l’OS invité; doit être compris entre 1 et $0."
 ],
 "Memory": [
  null,
  "Mémoire"
 ],
 "MiB": [
  null,
  "MiB"
 ],
 "Model": [
  null,
  "Modèle"
 ],
 "Model type": [
  null,
  "Type de modèle"
 ],
 "More Information": [
  null,
  "Plus d’information"
 ],
 "Name": [
  null,
  "Nom"
 ],
 "Name should not be empty": [
  null,
  "Le nom ne doit pas être vide"
 ],
 "Name: ": [
  null,
  ""
 ],
 "Netmask": [
  null,
  ""
 ],
 "Network File System": [
  null,
  "Système de fichiers par réseau (NFS)"
 ],
 "Network Interfaces": [
  null,
  ""
 ],
 "Network interface settings could not be saved": [
  null,
  ""
 ],
 "Networks": [
  null,
  "Réseaux"
 ],
 "New Volume Name": [
  null,
  "Nouveau nom de volume"
 ],
 "No Storage Volumes defined for this Storage Pool": [
  null,
  "Aucun volume de stockage n’a été défini pour ce pool de stockage"
 ],
 "No VM is running or defined on this host": [
  null,
  "Aucune machine virtuelle n’est en cours d’exécution ou définie sur cet hôte"
 ],
 "No boot device found": [
  null,
  "Aucun périphérique de démarrage trouvé"
 ],
 "No console defined for this virtual machine.": [
  null,
  "Aucune console définie pour cette machine virtuelle."
 ],
 "No disks defined for this VM": [
  null,
  "Aucun disque défini pour cette machine virtuelle"
 ],
 "No matching files found": [
  null,
  "Aucun fichier correspondant trouvé"
 ],
 "No network interfaces defined for this VM": [
  null,
  "Aucune interface réseau définie pour cette machine virtuelle"
 ],
 "No network is defined on this host": [
  null,
  ""
 ],
 "No storage pool is defined on this host": [
  null,
  "Aucun pool de stockage n’a été défini sur cet hôte"
 ],
 "No virtual networks": [
  null,
  "Aucun réseau virtuel"
 ],
 "None (Isolated Network)": [
  null,
  ""
 ],
 "OS Vendor": [
  null,
  "Fournisseur d’OS"
 ],
 "One or more selected volumes are used by domains. Detach the disks first to allow volume deletion.": [
  null,
  ""
 ],
 "Open": [
  null,
  ""
 ],
 "Operating System": [
  null,
  "Système d’exploitation"
 ],
 "Overview": [
  null,
  "Aperçu"
 ],
 "Path": [
  null,
  "Chemin"
 ],
 "Path on host's filesystem": [
  null,
  "Chemin d’accès sur le système de fichiers de l’hôte"
 ],
 "Path to ISO file on host's file system": [
  null,
  "Chemin d’accès au fichier ISO sur le système de fichiers de l’hôte"
 ],
 "Path to file": [
  null,
  "Chemin d’accès au fichier"
 ],
 "Persistence": [
  null,
  "Persistance"
 ],
 "Persistent": [
  null,
  "Persistant"
 ],
 "Please enter new volume name": [
  null,
  "Veuillez saisir un nouveau nom de volume"
 ],
 "Please enter new volume size": [
  null,
  "Veuillez saisir une nouvelle taille de volume"
 ],
 "Please start the virtual machine to access its console.": [
  null,
  "Veuillez démarrer la machine virtuelle pour accéder à sa console."
 ],
 "Plug": [
  null,
  "Connecteur"
 ],
 "Pool": [
  null,
  "Pool"
 ],
 "Port": [
  null,
  "Port"
 ],
 "Preferred number of sockets to expose to the guest.": [
  null,
  "Nombre choisi de sockets à exposer à l’invité."
 ],
 "Prefix": [
  null,
  ""
 ],
 "Private": [
  null,
  ""
 ],
 "Protocol": [
  null,
  "Protocole"
 ],
 "QEMU/KVM System connection": [
  null,
  "QEMU/KVM Connexion système"
 ],
 "QEMU/KVM User connection": [
  null,
  "QEMU/KVM Connexion utilisateur"
 ],
 "Readonly": [
  null,
  "LectureUniquement"
 ],
 "Reconnect": [
  null,
  "Reconnecter"
 ],
 "Remote URL": [
  null,
  "URL distante"
 ],
 "Restart": [
  null,
  "Redémarrer"
 ],
 "Run": [
  null,
  "Exécuter"
 ],
 "Run when host boots": [
  null,
  ""
 ],
 "SPICE": [
  null,
  "SPICE"
 ],
 "SPICE Address:": [
  null,
  "Adresse SPICE :"
 ],
 "SPICE Port:": [
  null,
  "Port SPICE :"
 ],
 "SPICE TLS Port:": [
  null,
  "Port SPICE TLS :"
 ],
 "Save": [
  null,
  "sauvegarder"
 ],
 "Send Non-Maskable Interrupt": [
  null,
  "Envoyer une interruption non masquable"
 ],
 "Send key": [
  null,
  "Envoi de la clé"
 ],
 "Serial Console": [
  null,
  "Console série"
 ],
 "Session": [
  null,
  "Session"
 ],
 "Shut Down": [
  null,
  "Fermeture"
 ],
 "Size": [
  null,
  "Taille"
 ],
 "Sockets": [
  null,
  "Sockets"
 ],
 "Source": [
  null,
  "La source"
 ],
 "Source Path": [
  null,
  "Chemin de la source "
 ],
 "Source path should not be empty": [
  null,
  "Le chemin de la source ne doit pas être vide"
 ],
 "Source should start with http, ftp or nfs protocol": [
  null,
  "La source devrait commencer par le protocole http, ftp ou nfs"
 ],
 "Start libvirt": [
  null,
  "Lancer libvirt"
 ],
 "Start pool when host boots": [
  null,
  "Démarrer le pool quand l’hôte est amorcé"
 ],
 "Startup": [
  null,
  "Startup"
 ],
 "State": [
  null,
  "État"
 ],
 "Storage Pool Name": [
  null,
  "Nom du pool de stockage"
 ],
 "Storage Pool failed to be created": [
  null,
  "Le pool de stockage n’a pas pu être créé"
 ],
 "Storage Pool failed to get activated": [
  null,
  ""
 ],
 "Storage Pool failed to get deactivated": [
  null,
  ""
 ],
 "Storage Pools": [
  null,
  "Pools de stockage"
 ],
 "Storage Size": [
  null,
  "Taille de stockage"
 ],
 "Storage Volumes": [
  null,
  "Volumes de stockage"
 ],
 "Storage Volumes could not be deleted": [
  null,
  ""
 ],
 "System": [
  null,
  "Système"
 ],
 "Target Path": [
  null,
  "Chemin cible"
 ],
 "Target path should not be empty": [
  null,
  "Le chemin cible ne doit pas rester vide"
 ],
 "The Storage Pool could not be deleted": [
  null,
  ""
 ],
 "The VM crashed.": [
  null,
  "La VM est plantée."
 ],
 "The VM is down.": [
  null,
  "La VM est éteinte."
 ],
 "The VM is going down.": [
  null,
  "La VM est en baisse."
 ],
 "The VM is idle.": [
  null,
  "La VM est inactive."
 ],
 "The VM is in process of dying (shut down or crash is not completed).": [
  null,
  "La VM est en train de s’éteindre (arrêt ou accident n’est pas terminé)."
 ],
 "The VM is paused.": [
  null,
  "La machine virtuelle est en pause."
 ],
 "The VM is running and will be forced off before deletion.": [
  null,
  "La VM est en cours d’exécution et sera forcée avant la suppression."
 ],
 "The VM is running.": [
  null,
  "La VM est en cours d’exécution."
 ],
 "The VM is suspended by guest power management.": [
  null,
  "La machine virtuelle est suspendue par la gestion de l’alimentation de l’invité."
 ],
 "The directory on the server being exported": [
  null,
  "Le répertoire du serveur à exporter"
 ],
 "The pool is empty": [
  null,
  "La pool est vide"
 ],
 "Threads per core": [
  null,
  "Threads par noyaux"
 ],
 "Too many files found": [
  null,
  "Trop de fichiers trouvés"
 ],
 "Troubleshoot": [
  null,
  "Troubleshoot"
 ],
 "Type": [
  null,
  "Type"
 ],
 "URL": [
  null,
  "URL"
 ],
 "Unique name": [
  null,
  "Nom unique"
 ],
 "Unplug": [
  null,
  "Débrancher"
 ],
 "Usage": [
  null,
  "Utilisation"
 ],
 "Use Existing": [
  null,
  "Utiliser l’existant"
 ],
 "Used": [
  null,
  "Utilisé"
 ],
 "Used by": [
  null,
  ""
 ],
 "VCPU settings could not be saved": [
  null,
  "Les paramètres de configuration de VCPU n’ont pas pu être sauvegardés"
 ],
 "VM CHANGE_NETWORK_STATE action failed": [
  null,
  "VM CHANGE_NETWORK_STATE a échoué"
 ],
 "VM DELETE (DESTROY) action failed": [
  null,
  "VM DELETE (DESTROY) a échoué"
 ],
 "VM DELETE (UNDEFINE) action failed": [
  null,
  "VM DELETE (UNDEFINE) a échoué"
 ],
 "VM DELETE action failed": [
  null,
  "VM DELETE a échoué"
 ],
 "VM DETACH_DISK action failed": [
  null,
  "VM DETACH_DISK a échoué"
 ],
 "VM FORCE OFF action failed": [
  null,
  "L’action VM FORCE OFF a échoué"
 ],
 "VM FORCE REBOOT action failed": [
  null,
  "L’action VM FORCE REBOOT a échoué"
 ],
 "VM REBOOT action failed": [
  null,
  "L’action VM REBOOT a échoué"
 ],
 "VM SEND Non-Maskable Interrrupt action failed": [
  null,
  "Échec de l’action d’interruption non masquable VM SEND"
 ],
 "VM SENDNMI action failed": [
  null,
  "VM SENDNMI a échoué"
 ],
 "VM SHUT DOWN action failed": [
  null,
  "L’action VM SHUT DOWN a échoué"
 ],
 "VM START action failed": [
  null,
  "L’action VM START a échoué"
 ],
 "VNC": [
  null,
  "VNC"
 ],
 "VNC Address:": [
  null,
  "Adresse VNC :"
 ],
 "VNC Port:": [
  null,
  "Port VNC :"
 ],
 "VNC TLS Port:": [
  null,
  "Port VNC TLS :"
 ],
 "Virtual Machines": [
  null,
  "Machines virtuelles"
 ],
 "Virtualization Service (libvirt) is Not Active": [
  null,
  "Le service de virtualisation (libvirt) n’est pas actif"
 ],
 "Virtualization Service is Available": [
  null,
  "Le service de virtualisation est disponible"
 ],
 "Volume": [
  null,
  "Volume"
 ],
 "active": [
  null,
  "actif"
 ],
 "bridge": [
  null,
  "pont"
 ],
 "cdrom": [
  null,
  "CD ROM"
 ],
 "crashed": [
  null,
  "planté"
 ],
 "custom": [
  null,
  "personnalisé"
 ],
 "direct": [
  null,
  "direct"
 ],
 "disabled": [
  null,
  "désactivé"
 ],
 "disk": [
  null,
  "disque"
 ],
 "down": [
  null,
  "arrêté"
 ],
 "dying": [
  null,
  "sur le point ce cesser toute activité"
 ],
 "enabled": [
  null,
  "activée"
 ],
 "ethernet": [
  null,
  "ethernet"
 ],
 "host": [
  null,
  "hôte"
 ],
 "hostdev": [
  null,
  "hostdev"
 ],
 "idle": [
  null,
  "inactif"
 ],
 "inactive": [
  null,
  "inactif"
 ],
 "mcast": [
  null,
  "mcast"
 ],
 "network": [
  null,
  "réseau"
 ],
 "no": [
  null,
  "non"
 ],
 "other": [
  null,
  "autre"
 ],
 "paused": [
  null,
  "mis en pause"
 ],
 "qcow2": [
  null,
  "qcow2"
 ],
 "raw": [
  null,
  "raw"
 ],
 "running": [
  null,
  "en cours"
 ],
 "server": [
  null,
  "serveur"
 ],
 "show less": [
  null,
  "montrer moins"
 ],
 "show more": [
  null,
  "montrer plus"
 ],
 "shut off": [
  null,
  "éteindre"
 ],
 "shutdown": [
  null,
  "fermeture"
 ],
 "suspended (PM)": [
  null,
  "suspendu (PM)"
 ],
 "udp": [
  null,
  "UDP"
 ],
 "undefined": [
  null,
  "indéfini"
 ],
 "up": [
  null,
  "en cours"
 ],
 "user": [
  null,
  "utilisateur"
 ],
 "vCPU Count": [
  null,
  "Nombre de vCPU"
 ],
 "vCPU Maximum": [
  null,
  "vCPU Maximum"
 ],
 "vCPUs": [
  null,
  "vCPU"
 ],
 "vhostuser": [
  null,
  "vhostuser"
 ],
 "yes": [
  null,
  "oui"
 ]
}));
