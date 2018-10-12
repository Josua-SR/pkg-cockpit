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
  "$0 est disponible pour la plupart des systèmes d'exploitation. Pour l'installer, recherchez-le dans le logiciel GNOME ou exécutez les opérations suivantes:"
 ],
 "$0 vCPU Details": [
  null,
  "$0 vCPU Détails"
 ],
 "Action": [
  null,
  "action"
 ],
 "Add": [
  null,
  "Ajouter"
 ],
 "Add Disk": [
  null,
  "Ajouter un disque"
 ],
 "Address:": [
  null,
  "Adresse:"
 ],
 "All changes will take effect only after stopping and starting the VM.": [
  null,
  "Toutes les modifications ne prendront effet qu'après l'arrêt et le démarrage de la VM."
 ],
 "All running virtual machines will be turned off.": [
  null,
  "Toutes les machines virtuelles en cours d'exécution seront désactivées."
 ],
 "Apply": [
  null,
  "Appliquer"
 ],
 "Attach permanently": [
  null,
  "Attacher de façon permanente"
 ],
 "Automatically selected host": [
  null,
  "Hôte sélectionné automatiquement"
 ],
 "Autostart:": [
  null,
  "Autostart :"
 ],
 "Available": [
  null,
  "Disponible"
 ],
 "Base Template": [
  null,
  "Modèle de base"
 ],
 "Base template": [
  null,
  "Modèle de base"
 ],
 "Base template:": [
  null,
  "Modèle de base:"
 ],
 "Boot Order:": [
  null,
  "Ordre de démarrage:"
 ],
 "Bus": [
  null,
  "Bus"
 ],
 "CHANGE NETWORK STATE action failed": [
  null,
  "Échec de l'action CHANGE NETWORK STATE"
 ],
 "CPU Type:": [
  null,
  "Type de CPU:"
 ],
 "CREATE VM action failed": [
  null,
  "Échec de l'action CREATE VM"
 ],
 "Cancel": [
  null,
  "Annuler"
 ],
 "Capacity": [
  null,
  "Capacité"
 ],
 "Clicking \"Launch Remote Viewer\" will download a .vv file and launch $0.": [
  null,
  "En cliquant sur \"Launch Remote Viewer\" (lancer ll'afficheur à distance), vous téléchargerez un fichier .vv et le lancerez $0 ."
 ],
 "Cluster": [
  null,
  "Cluster"
 ],
 "Cluster Templates": [
  null,
  "Modèles de cluster"
 ],
 "Cluster Virtual Machines": [
  null,
  "Machines virtuelles de cluster"
 ],
 "Confirm deletion of $0": [
  null,
  "Confirmer la suppression de $0"
 ],
 "Confirm migration": [
  null,
  "Confirmer la migration"
 ],
 "Confirm reload:": [
  null,
  "Confirmer le rechargement :"
 ],
 "Confirm save:": [
  null,
  "Confirmer l'enregistrement :"
 ],
 "Connect to oVirt Engine": [
  null,
  "Se connectez à oVirt Engine"
 ],
 "Connect with any $0 viewer application.": [
  null,
  "Connectez-vous avec n'importe quel $0 application spectateur."
 ],
 "Connect with any SPICE or VNC viewer application.": [
  null,
  "Connectez-vous avec n'importe quelle application SPICE ou au VNC Viewer."
 ],
 "Connecting": [
  null,
  ""
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
 "Create New VM": [
  null,
  "Créer Nouvelle VM"
 ],
 "Create VM": [
  null,
  "Créer VM"
 ],
 "Ctrl+Alt+Del": [
  null,
  ""
 ],
 "Delete": [
  null,
  "Supprimer"
 ],
 "Delete associated storage files:": [
  null,
  "Supprimer les fichiers de stockage associés:"
 ],
 "Description": [
  null,
  "La description"
 ],
 "Description:": [
  null,
  "Description :"
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
 "Disk failed to be attached with following error: ": [
  null,
  "Le disque n'a pas pu être attaché, avec l’erreur suivante :"
 ],
 "Disk failed to be created with following error: ": [
  null,
  "Le disque n’a pas pu être créé, avec l’erreur suivante :"
 ],
 "Disks": [
  null,
  "Disques"
 ],
 "Download the MSI from $0": [
  null,
  "Télécharger le MSI depuis $0"
 ],
 "Edit the vdsm.conf": [
  null,
  "Modifier le fichier vdsm.conf"
 ],
 "Emulated Machine:": [
  null,
  "Machine émulée :"
 ],
 "Enter New VM name": [
  null,
  "Saisir le nom de la nouvelle machine virtuelle"
 ],
 "FQDN": [
  null,
  "FQDN"
 ],
 "Fewer than the maximum number of virtual CPUs should be enabled.": [
  null,
  "On ne doit pas activer un nombre de CPU supérieur au nombre maximum."
 ],
 "File": [
  null,
  "Fichier"
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
 "GET HYPERVISOR MAX VCPU action failed": [
  null,
  "L’action GET HYPERVISOR MAX VCPU a échoué"
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
 "HA": [
  null,
  "HA"
 ],
 "HA:": [
  null,
  "HA :"
 ],
 "Host": [
  null,
  "Hôte"
 ],
 "Host to Maintenance": [
  null,
  "Hôte à la maintenance"
 ],
 "INSTALL VM action failed": [
  null,
  "Échec de l'action INSTALL VM"
 ],
 "Install": [
  null,
  "Installer"
 ],
 "Launch Remote Viewer": [
  null,
  "Lancer l'afficheur à distance"
 ],
 "Loading ...": [
  null,
  "Chargement ..."
 ],
 "Loading data ...": [
  null,
  "Chargement des données ..."
 ],
 "MIGRATE action failed": [
  null,
  "L'action MIGRATE a échoué"
 ],
 "Manual Connection": [
  null,
  "Connexion manuelle"
 ],
 "Maximum number of virtual CPUs allocated for the guest OS, which must be between 1 and $0": [
  null,
  "Nombre maximum de CPU virtuels alloués pour l'OS invité; doit être compris entre 1 et $0."
 ],
 "Memory": [
  null,
  "Mémoire"
 ],
 "Memory:": [
  null,
  "Mémoire:"
 ],
 "MiB": [
  null,
  "MiB"
 ],
 "Migrate To:": [
  null,
  "Migrer vers:"
 ],
 "More Information": [
  null,
  "Plus d'information"
 ],
 "Name": [
  null,
  "Nom"
 ],
 "Networks": [
  null,
  "Réseaux"
 ],
 "New Volume Name": [
  null,
  "Nouveau nom de volume"
 ],
 "No VM found in oVirt.": [
  null,
  "Aucune VM trouvée dans oVirt."
 ],
 "No VM is running or defined on this host": [
  null,
  "Aucune machine virtuelle n'est en cours d'exécution ou définie sur cet hôte"
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
 "No oVirt connection": [
  null,
  "Pas de connexion oVirt"
 ],
 "Number of virtual CPUs that gonna be used.": [
  null,
  "Nombre de CPU qui seront utilisées."
 ],
 "OK": [
  null,
  "OK"
 ],
 "OS": [
  null,
  "OS"
 ],
 "OS Type:": [
  null,
  "OS Type:"
 ],
 "Ok": [
  null,
  "Ok"
 ],
 "Optimized for:": [
  null,
  "Optimisé pour :"
 ],
 "Overview": [
  null,
  "Aperçu"
 ],
 "Please confirm, the host shall be switched to maintenance mode.": [
  null,
  "Veuillez confirmer, l'hôte doit passer en mode de maintenance."
 ],
 "Please enter new volume name": [
  null,
  "Veuillez saisir un nouveau nom de volume"
 ],
 "Please enter new volume size": [
  null,
  "Veuillez saisir une nouvelle taille de volume"
 ],
 "Please provide fully qualified domain name and port of the oVirt engine.": [
  null,
  "Veuillez fournir le nom de domaine complet et le port d'oVirt Engine."
 ],
 "Please provide valid oVirt engine fully qualified domain name (FQDN) and port (443 by default)": [
  null,
  "Veuillez indiquer le nom de domaine complet (FQDN) et le port valides d'oVirt Engine (443 par défaut)"
 ],
 "Please refer to oVirt's $0 for more information about Remote Viewer setup.": [
  null,
  "Veuillez vous référer à oVirt $0 pour plus d'informations sur la configuration de l'afficheur à distance."
 ],
 "Please start the virtual machine to access its console.": [
  null,
  "Veuillez démarrer la machine virtuelle pour accéder à sa console."
 ],
 "Please wait till VMs list is loaded from the server.": [
  null,
  "Veuillez attendre que la liste des machines virtuelles soit chargée depuis le serveur."
 ],
 "Please wait till list of templates is loaded from the server.": [
  null,
  "Veuillez attendre que la liste des modèles soit chargée depuis le serveur."
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
  "Nombre choisi de sockets à exposer à l'invité."
 ],
 "Preparing for Maintenance": [
  null,
  "Préparation à la maintenance"
 ],
 "Protocol": [
  null,
  "Protocole"
 ],
 "REBOOT action failed": [
  null,
  "L'action REBOOT a échoué"
 ],
 "Readonly": [
  null,
  "LectureUniquement"
 ],
 "Reconnect": [
  null,
  "Reconnecter"
 ],
 "Register oVirt": [
  null,
  "Inscription oVirt"
 ],
 "Registering oVirt to Cockpit": [
  null,
  "Enregistrement d'oVirt dans Cockpit"
 ],
 "Reload": [
  null,
  "Recharger"
 ],
 "Restart": [
  null,
  "Redémarrer"
 ],
 "Run": [
  null,
  "Exécuter"
 ],
 "Run Here": [
  null,
  "Exécuter ici"
 ],
 "Running Since:": [
  null,
  "En cours d'exécution depuis :"
 ],
 "SET VCPU SETTINGS action failed": [
  null,
  "L’action SET VCPU SETTINGS a échoué"
 ],
 "SHUTDOWN action failed": [
  null,
  "L'action SHUTDOWN a échoué"
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
 "START action failed": [
  null,
  "L'action START a échoué"
 ],
 "SUSPEND action failed": [
  null,
  "L'action SUSPEND a échoué"
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
  ""
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
 "Start the VM to see disk statistics.": [
  null,
  "Démarrez la VM pour voir les statistiques du disque."
 ],
 "State": [
  null,
  "État"
 ],
 "Stateless": [
  null,
  "Stateless"
 ],
 "Stateless:": [
  null,
  "Stateless :"
 ],
 "Suspend": [
  null,
  "Suspendre"
 ],
 "Switch Host to Maintenance": [
  null,
  "Passer l'hôte à la maintenance"
 ],
 "Switching host to maintenance mode failed. Received error: ": [
  null,
  "La commutation de l'hôte en mode de maintenance a échoué. Erreur reçue:"
 ],
 "Switching host to maintenance mode in progress ...": [
  null,
  "Passage de l'hôte au mode maintenance en cours ..."
 ],
 "System": [
  null,
  "Système"
 ],
 "Target": [
  null,
  "Cible"
 ],
 "Template": [
  null,
  "Modèle"
 ],
 "Templates": [
  null,
  "Modèles"
 ],
 "Templates of $0 cluster": [
  null,
  "Modèles de $0 cluster"
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
  "La VM est en train de s'éteindre (arrêt ou accident n'est pas terminé)."
 ],
 "The VM is paused.": [
  null,
  "La machine virtuelle est en pause."
 ],
 "The VM is running and will be forced off before deletion.": [
  null,
  "La VM est en cours d'exécution et sera forcée avant la suppression."
 ],
 "The VM is running.": [
  null,
  "La VM est en cours d'exécution."
 ],
 "The VM is suspended by guest power management.": [
  null,
  "La machine virtuelle est suspendue par la gestion de l'alimentation de l'invité."
 ],
 "The pool is empty": [
  null,
  "La pool est vide"
 ],
 "This host is managed by a virtualization manager, so creation of new VMs from the host is not possible.": [
  null,
  "Cet hôte est géré par un gestionnaire de virtualisation, donc la création de nouvelles machines virtuelles à partir de l'hôte n'est pas possible."
 ],
 "This virtual machine is not managed by oVirt": [
  null,
  "Cette machine virtuelle n'est pas gérée par oVirt"
 ],
 "Threads per cores": [
  null,
  "Threads par noyaux"
 ],
 "Upgrade to a more recent version of libvirt to view disk statistics": [
  null,
  "Mettre à niveau vers une version plus récente de libvirt pour afficher les statistiques de disque"
 ],
 "Usage": [
  null,
  "Utilisation"
 ],
 "Use Existing": [
  null,
  "Utiliser l'existant"
 ],
 "Used": [
  null,
  "Utilisé"
 ],
 "VDSM": [
  null,
  "VDSM"
 ],
 "VDSM Service Management": [
  null,
  "VDSM Service Management"
 ],
 "VM DELETE (DESTROY) action failed": [
  null,
  ""
 ],
 "VM DELETE (UNDEFINE) action failed": [
  null,
  ""
 ],
 "VM FORCE OFF action failed": [
  null,
  "L'action VM FORCE OFF a échoué"
 ],
 "VM FORCE REBOOT action failed": [
  null,
  "L'action VM FORCE REBOOT a échoué"
 ],
 "VM REBOOT action failed": [
  null,
  "L'action VM REBOOT a échoué"
 ],
 "VM SEND Non-Maskable Interrrupt action failed": [
  null,
  "Échec de l'action d'interruption non masquable VM SEND"
 ],
 "VM SHUT DOWN action failed": [
  null,
  "L'action VM SHUT DOWN a échoué"
 ],
 "VM START action failed": [
  null,
  "L'action VM START a échoué"
 ],
 "VM icon": [
  null,
  "Icône de machine virtuelle"
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
 "Version": [
  null,
  "Version"
 ],
 "Version num": [
  null,
  "Num de version"
 ],
 "Virtual Machines": [
  null,
  "Machines virtuelles"
 ],
 "Virtual Machines of $0 cluster": [
  null,
  "Machines virtuelles de $0 cluster"
 ],
 "Volume": [
  null,
  "Volume"
 ],
 "bridge": [
  null,
  "pont"
 ],
 "cdrom": [
  null,
  "CD ROM"
 ],
 "connecting": [
  null,
  "connexion"
 ],
 "cores": [
  null,
  "noyaux"
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
 "error": [
  null,
  "erreur"
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
 "initializing": [
  null,
  "initialisation"
 ],
 "installation failed": [
  null,
  "l'installation a échoué"
 ],
 "installing OS": [
  null,
  "l'installation du système"
 ],
 "kdumping": [
  null,
  "kdumping"
 ],
 "maintenance": [
  null,
  "maintenance"
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
 "non operational": [
  null,
  "non opérationnel"
 ],
 "non responsive": [
  null,
  "non réactif"
 ],
 "oVirt": [
  null,
  "oVirt"
 ],
 "oVirt Host State:": [
  null,
  "État hôte oVirt:"
 ],
 "oVirt Provider installation script failed due to missing arguments.": [
  null,
  "Le script d'installation d'oVirt Provider a échoué en raison d'arguments manquants."
 ],
 "oVirt Provider installation script failed: Can't write to /etc/cockpit/machines-ovirt.config, try as root.": [
  null,
  "Le script d'installation d'oVirt Provider a échoué : impossible d'écrire dans /etc/cockpit/machines-ovirt.config, essayez en tant que root."
 ],
 "oVirt installation script failed with following output: ": [
  null,
  "Le script d'installation d'oVirt a échoué avec la sortie suivante :"
 ],
 "oVirt login in progress": [
  null,
  "Connexion oVirt en cours"
 ],
 "other": [
  null,
  "autre"
 ],
 "paused": [
  null,
  "mis en pause"
 ],
 "pending approval": [
  null,
  "validation en attente"
 ],
 "qcow2": [
  null,
  "qcow2"
 ],
 "raw": [
  null,
  "raw"
 ],
 "reboot": [
  null,
  "redémarrer"
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
 "sockets": [
  null,
  "sockets"
 ],
 "suspended (PM)": [
  null,
  "suspendu (PM)"
 ],
 "threads": [
  null,
  "threads"
 ],
 "udp": [
  null,
  "UDP"
 ],
 "unassigned": [
  null,
  "non attribué"
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
 "vCPUs:": [
  null,
  "vCPU :"
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
