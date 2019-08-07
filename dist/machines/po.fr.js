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
nplurals=2; plural=(n > 1);
return plural;
},
  "language": "fr",
  "x-generator": "Zanata 4.6.2"
 },
 "$0 Network": [
  null,
  "Réseau $0"
 ],
 "$0 is available for most operating systems. To install it, search for it in GNOME Software or run the following:": [
  null,
  "$0 est disponible pour la plupart des systèmes d’exploitation. Pour l’installer, recherchez-le dans le logiciel GNOME ou exécutez les opérations suivantes :"
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
 "Additional": [
  null,
  "Additionnel"
 ],
 "Address": [
  null,
  "Adresse"
 ],
 "Address:": [
  null,
  "Adresse :"
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
  "Ordre d’amorçage"
 ],
 "Boot order settings could not be saved": [
  null,
  "Les paramètres d’ordre du démarrage n’ont pas pu être enregistrés"
 ],
 "Bus": [
  null,
  "Bus"
 ],
 "CPU Type": [
  null,
  "Type de CPU"
 ],
 "Cache": [
  null,
  "Cache"
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
 "Confirm deletion of the Virtual Network": [
  null,
  "Confirmer la suppression du Réseau virtuel"
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
 "Creation of VM $0 failed": [
  null,
  "La création de la VM $0 a échoué"
 ],
 "Ctrl+Alt+Del": [
  null,
  "Ctrl+Alt+Del"
 ],
 "Current Allocation": [
  null,
  "Allocation actuelle"
 ],
 "DHCP Range": [
  null,
  "Plage DHCP"
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
  "Supprimer le contenu"
 ],
 "Delete Network $0": [
  null,
  "Supprimer le réseau $0"
 ],
 "Delete Storage Pool $0": [
  null,
  "Supprimer le pool de stockage $0"
 ],
 "Delete associated storage files:": [
  null,
  "Supprimer les fichiers de stockage associés :"
 ],
 "Delete the Volumes inside this Pool": [
  null,
  "Supprimer les volumes de ce pool"
 ],
 "Deleting an inactive Storage Pool will only undefine the Pool. Its content will not be deleted.": [
  null,
  "Supprimer un pool de stockage inactif va seulement déprogrammer le pool. Son contenu sera pas supprimé."
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
 "Disk $0 fail to get detached from VM $1": [
  null,
  "Échec du détachement du disque $0 de la VM $1"
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
 "Disks cannot be removed from $0 VMs": [
  null,
  "Les disques n'ont pu être retirés de $0 VMs"
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
  "Image disque existante"
 ],
 "Existing disk image on host's file system": [
  null,
  "Image disque existante sur le système de fichiers de l’hôte"
 ],
 "Failed to fetch the IP addresses of the interfaces present in $0": [
  null,
  "Impossible de récupérer les adresses IP des interfaces présentes dans $0"
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
  "Mode de redirection"
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
 "Hide Performance Options": [
  null,
  "Masquer les options de performance"
 ],
 "Host": [
  null,
  "Hôte"
 ],
 "Host Device": [
  null,
  "Périphérique hôte"
 ],
 "Host Name": [
  null,
  "Nom d’hôte"
 ],
 "Host should not be empty": [
  null,
  "Le nom d’hôte n’est peut-être pas vide"
 ],
 "IP Address": [
  null,
  "Adresse IP"
 ],
 "IPv4 Address": [
  null,
  "Adresse IPv4"
 ],
 "IPv6 Address": [
  null,
  "Adresse IPv6"
 ],
 "Immediately Start VM": [
  null,
  "Démarrer immédiatement la VM"
 ],
 "In most configurations, macvtap does not work for host to guest network communication.": [
  null,
  "Dans la plupart des configurations, macvtap ne fonctionne pas pour les communications en réseau entre hôte et invité."
 ],
 "Initiator": [
  null,
  "Initiateur"
 ],
 "Initiator IQN should not be empty": [
  null,
  "L'initiateur IQN ne doit pas rester vide"
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
  "Type d’interface"
 ],
 "Invalid filename": [
  null,
  "Nom de fichier non valide"
 ],
 "Isolated Network": [
  null,
  "Réseau isolé"
 ],
 "Launch Remote Viewer": [
  null,
  "Lancer l’afficheur à distance"
 ],
 "Loading ...": [
  null,
  "Chargement…"
 ],
 "Local Install Media": [
  null,
  "Média d’installation local"
 ],
 "MAC Address": [
  null,
  "Adresse Mac"
 ],
 "Mac": [
  null,
  "Mac"
 ],
 "Mac Address": [
  null,
  "Adresse MAC"
 ],
 "Manual Connection": [
  null,
  "Connexion manuelle"
 ],
 "Maximum Allocation": [
  null,
  "Allocation maximale"
 ],
 "Maximum Transmission Unit": [
  null,
  "Unité maximale de transmission (MTU)"
 ],
 "Maximum memory could not be saved": [
  null,
  "La mémoire maximale n'a pas pu être sauvegardée"
 ],
 "Maximum number of virtual CPUs allocated for the guest OS, which must be between 1 and $0": [
  null,
  "Nombre maximum de CPU virtuels alloués pour l’OS invité; doit être compris entre 1 et $0."
 ],
 "Memory": [
  null,
  "Mémoire"
 ],
 "Memory could not be saved": [
  null,
  "La mémoire n'a pas pu être sauvegardée"
 ],
 "Memory must not be 0": [
  null,
  "La mémoire ne doit pas être 0"
 ],
 "Memory size between 128 MiB and the maximum allocation": [
  null,
  "La taille de la mémoire est entre 128 Mio et l'allocation maximale"
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
 "NAT to $0": [
  null,
  "NAT vers $0"
 ],
 "NIC $0 of VM $1 failed to change state": [
  null,
  "Échec du changement d’état du NIC $0 de la VM $1"
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
  "Nom :"
 ],
 "Netmask": [
  null,
  "Masque réseau"
 ],
 "Network $0 failed to get activated": [
  null,
  "Échec de l’activation du réseau $0"
 ],
 "Network $0 failed to get deactivated": [
  null,
  "Échec de la désactivation du réseau $0"
 ],
 "Network Boot (PXE)": [
  null,
  "Démarrage réseau (PXE)"
 ],
 "Network Boot is available only when using System connection": [
  null,
  ""
 ],
 "Network File System": [
  null,
  "Système de fichiers par réseau (NFS)"
 ],
 "Network Interfaces": [
  null,
  "Interfaces réseau"
 ],
 "Network Selection does not support PXE.": [
  null,
  "Le réseau sélectionné ne prend pas en charge le PXE."
 ],
 "Network interface settings could not be saved": [
  null,
  "Les paramètres de l’interface réseau n’ont pas pu être enregistrés"
 ],
 "Networks": [
  null,
  "Réseaux"
 ],
 "New Volume Name": [
  null,
  "Nouveau nom de volume"
 ],
 "No Storage Pools available": [
  null,
  "Aucun pool de stockage disponible"
 ],
 "No Storage Volumes defined for this Storage Pool": [
  null,
  "Aucun volume de stockage n’a été défini pour ce pool de stockage"
 ],
 "No VM is running or defined on this host": [
  null,
  "Aucune machine virtuelle n’est en cours d’exécution ou définie sur cet hôte"
 ],
 "No Virtual Networks": [
  null,
  "Aucun réseau virtuel"
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
  "Aucun réseau n’est défini sur cet hôte"
 ],
 "No networks available": [
  null,
  "Aucun réseau disponible"
 ],
 "No storage pool is defined on this host": [
  null,
  "Aucun pool de stockage n’a été défini sur cet hôte"
 ],
 "None (Isolated Network)": [
  null,
  "Aucune (réseau isolé)"
 ],
 "OS Vendor": [
  null,
  "Fournisseur d’OS"
 ],
 "One or more selected volumes are used by domains. Detach the disks first to allow volume deletion.": [
  null,
  "Un ou plusieurs modules sélectionnés sont utiliés par les domaines. Détachez d’abords les disques pour permettre la suppression du volume."
 ],
 "Only editable when the guest is shut off": [
  null,
  "Modifiable uniquement quand l'invité est fermé"
 ],
 "Open": [
  null,
  "Ouvrir"
 ],
 "Operating System": [
  null,
  "Système d’exploitation"
 ],
 "Operation is in progress": [
  null,
  "Opération en cours"
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
 "Pause": [
  null,
  "Suspendre"
 ],
 "Persistence": [
  null,
  "Persistance"
 ],
 "Persistent": [
  null,
  "Persistant"
 ],
 "Physical Disk Device": [
  null,
  "Périphérique de disque physique"
 ],
 "Physical disk device on host": [
  null,
  "Périphérique de disque physique sur l'hôte"
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
  "Préfixe"
 ],
 "Private": [
  null,
  "Privé"
 ],
 "Product": [
  null,
  "Produit"
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
 "Resume": [
  null,
  "Reprendre"
 ],
 "Route to $0": [
  null,
  "Routage vers $0"
 ],
 "Routed Network": [
  null,
  "Réseau routé"
 ],
 "Run": [
  null,
  "Exécuter"
 ],
 "Run when host boots": [
  null,
  "Démarrer quand l’hôte est amorcé"
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
 "Show Performance Options": [
  null,
  "Afficher les options de performance"
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
 "Source Format": [
  null,
  "Format de la source"
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
 "Storage": [
  null,
  "Stockage"
 ],
 "Storage Pool $0 failed to get activated": [
  null,
  "Échec de l’activation du pool de stockage $0"
 ],
 "Storage Pool $0 failed to get deactivated": [
  null,
  "Échec de la désactivation du pool de stockage $0"
 ],
 "Storage Pool Name": [
  null,
  "Nom du pool de stockage"
 ],
 "Storage Pool failed to be created": [
  null,
  "Le pool de stockage n’a pas pu être créé"
 ],
 "Storage Pools": [
  null,
  "Pools de stockage"
 ],
 "Storage Volumes": [
  null,
  "Volumes de stockage"
 ],
 "Storage Volumes could not be deleted": [
  null,
  "Les volumes de stockage n’ont pas pu être supprimés"
 ],
 "System": [
  null,
  "Système"
 ],
 "Target": [
  null,
  "Cible"
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
  "Le pool de stockage n’a pas pu être supprimé"
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
 "The network could not be deleted": [
  null,
  "Le réseau n'a pas pu être supprimé"
 ],
 "The pool is empty": [
  null,
  "La pool est vide"
 ],
 "The selected Operating System has minimum memory requirement of $0 $1": [
  null,
  "Le système d'exécution sélectionné a un besoin en mémoire minimum de $0 $1"
 ],
 "This pool type does not support Storage Volume creation": [
  null,
  "Ce type de pool ne prend pas en charge la création de Volumes de stockage"
 ],
 "This volume is already used by another VM.": [
  null,
  "Ce volume est déjà utilisé par une autre VM."
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
 "Type ID": [
  null,
  "ID type"
 ],
 "URL": [
  null,
  "URL"
 ],
 "Unique name": [
  null,
  "Nom unique"
 ],
 "Unit": [
  null,
  "Unité"
 ],
 "Unknown": [
  null,
  "Inconnu"
 ],
 "Unplug": [
  null,
  "Débrancher"
 ],
 "Up to $0 $1 available in the default location": [
  null,
  "Jusqu'à $0 $1 disponibles à l'emplacement par défaut"
 ],
 "Up to $0 $1 available on the host": [
  null,
  "Jusqu'à $0 $1 disponibles sur l'hôte"
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
  "Utilisé par"
 ],
 "VCPU settings could not be saved": [
  null,
  "Les paramètres de configuration de VCPU n’ont pas pu être sauvegardés"
 ],
 "VM $0 failed to Reboot": [
  null,
  "Échec du redémarrage de la VM $0"
 ],
 "VM $0 failed to force Reboot": [
  null,
  "Échec du redémarrage forcé de la VM $0"
 ],
 "VM $0 failed to force shutdown": [
  null,
  "Échec de l’arrêt forcé de la VM $0"
 ],
 "VM $0 failed to get deleted": [
  null,
  "Échec de la suppression de la VM $0"
 ],
 "VM $0 failed to get installed": [
  null,
  "Échec de l’installation de la VM $0"
 ],
 "VM $0 failed to pause": [
  null,
  "Échec de la mise en pause de la VM $0"
 ],
 "VM $0 failed to resume": [
  null,
  "Échec de la reprise de la VM $0"
 ],
 "VM $0 failed to send NMI": [
  null,
  "Échec de l’envoi NMI de la VM $0"
 ],
 "VM $0 failed to shutdown": [
  null,
  "Échec de l’arrêt de la VM $0"
 ],
 "VM $0 failed to start": [
  null,
  "Échec du démarrage de la VM $0"
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
 "Vendor": [
  null,
  "Fournisseur"
 ],
 "Virtual Machines": [
  null,
  "Machines virtuelles"
 ],
 "Virtual Network": [
  null,
  "Réseau virtuel"
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
 "WWPN": [
  null,
  "WWPN"
 ],
 "You need to select the most closely matching OS vendor and Operating System": [
  null,
  "Vous devez sélectionner le fournisseur de SE et le Système d'exploitation qui correspondent le mieux"
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
 "control-label $0": [
  null,
  "control-label $0"
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
 "host device": [
  null,
  "Périphérique hôte"
 ],
 "hostdev": [
  null,
  "hostdev"
 ],
 "iSCSI Initiator IQN": [
  null,
  "iSCSI Initiator IQN"
 ],
 "iSCSI Target": [
  null,
  "Cible iSCSI"
 ],
 "iSCSI direct Target": [
  null,
  "Cible directe iSCSI"
 ],
 "iSCSI target IQN": [
  null,
  "Cible iSCSI IQN"
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
 "redirected device": [
  null,
  "périphérique redirigé"
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
 "virt-install package needs to be installed on the system in order to create new VMs": [
  null,
  "Le paquet virt-install doit être installé sur le système pour pour pouvoir créer les nouvelles VM"
 ],
 "yes": [
  null,
  "oui"
 ]
}));
