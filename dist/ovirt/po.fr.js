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
  "$0 est disponible pour la plupart des systèmes d’exploitation. Pour l’installer, recherchez-le dans le logiciel GNOME ou exécutez les opérations suivantes :"
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
 "All running virtual machines will be turned off.": [
  null,
  "Toutes les machines virtuelles en cours d’exécution seront désactivées."
 ],
 "Always attach": [
  null,
  "Toujours attacher"
 ],
 "Apply": [
  null,
  "Appliquer"
 ],
 "Automatically selected host": [
  null,
  "Hôte sélectionné automatiquement"
 ],
 "Autostart": [
  null,
  "Démarrage automatique"
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
  "Modèle de base :"
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
 "CREATE VM action failed": [
  null,
  "Échec de l’action CREATE VM"
 ],
 "Cache": [
  null,
  ""
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
  "Confirmer l’enregistrement :"
 ],
 "Connect to oVirt Engine": [
  null,
  "Se connectez à oVirt Engine"
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
  "Ctrl+Alt+Del"
 ],
 "Current Allocation": [
  null,
  "Allocation actuelle"
 ],
 "Delete": [
  null,
  "Supprimer"
 ],
 "Delete associated storage files:": [
  null,
  "Supprimer les fichiers de stockage associés :"
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
  ""
 ],
 "Download the MSI from $0": [
  null,
  "Télécharger le MSI depuis $0"
 ],
 "Edit": [
  null,
  "Modifier"
 ],
 "Edit the vdsm.conf": [
  null,
  "Modifier le fichier vdsm.conf"
 ],
 "Emulated Machine": [
  null,
  "Machine émulée"
 ],
 "Enter New VM name": [
  null,
  "Saisir le nom de la nouvelle machine virtuelle"
 ],
 "FORCEOFF action failed: $0": [
  null,
  "L’action FORCEOFF a échoué : $0"
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
 "Hide Performance Options": [
  null,
  ""
 ],
 "Host": [
  null,
  "Hôte"
 ],
 "Host to Maintenance": [
  null,
  "Hôte à la maintenance"
 ],
 "Install": [
  null,
  "Installer"
 ],
 "Interface Type": [
  null,
  "Type d’interface"
 ],
 "Launch Remote Viewer": [
  null,
  "Lancer l’afficheur à distance"
 ],
 "Loading ...": [
  null,
  "Chargement…"
 ],
 "Loading data ...": [
  null,
  "Chargement des données…"
 ],
 "MAC Address": [
  null,
  "Adresse Mac"
 ],
 "MIGRATE action failed": [
  null,
  "L’action MIGRATE a échoué"
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
 "Memory size between 128 MiB and the maximum allocation": [
  null,
  "La taille de la mémoire est entre 128 Mio et l'allocation maximale"
 ],
 "MiB": [
  null,
  "MiB"
 ],
 "Migrate To:": [
  null,
  "Migrer vers :"
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
 "NIC $0 of VM $1 failed to change state": [
  null,
  "Échec du changement d’état du NIC $0 de la VM $1"
 ],
 "Name": [
  null,
  "Nom"
 ],
 "Network Interfaces": [
  null,
  "Interfaces réseau"
 ],
 "Network interface settings could not be saved": [
  null,
  "Les paramètres de l’interface réseau n’ont pas pu être enregistrés"
 ],
 "New Volume Name": [
  null,
  "Nouveau nom de volume"
 ],
 "No Storage Pools available": [
  null,
  ""
 ],
 "No VM found in oVirt.": [
  null,
  "Aucune VM trouvée dans oVirt."
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
 "No network interfaces defined for this VM": [
  null,
  "Aucune interface réseau définie pour cette machine virtuelle"
 ],
 "No oVirt connection": [
  null,
  "Pas de connexion oVirt"
 ],
 "None (Isolated Network)": [
  null,
  "Aucune (réseau isolé)"
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
  "OS Type :"
 ],
 "Ok": [
  null,
  "Ok"
 ],
 "Only editable when the guest is shut off": [
  null,
  "Modifiable uniquement quand l'invité est fermé"
 ],
 "Open": [
  null,
  "Ouvrir"
 ],
 "Optimized for:": [
  null,
  "Optimisé pour :"
 ],
 "Overview": [
  null,
  "Aperçu"
 ],
 "Path": [
  null,
  "Chemin"
 ],
 "Pause": [
  null,
  "Suspendre"
 ],
 "Persistence": [
  null,
  "Persistance"
 ],
 "Please confirm, the host shall be switched to maintenance mode.": [
  null,
  "Veuillez confirmer, l’hôte doit passer en mode de maintenance."
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
  "Veuillez fournir le nom de domaine complet et le port d’oVirt Engine."
 ],
 "Please provide valid oVirt engine fully qualified domain name (FQDN) and port (443 by default)": [
  null,
  "Veuillez indiquer le nom de domaine complet (FQDN) et le port valides d’oVirt Engine (443 par défaut)"
 ],
 "Please refer to oVirt's $0 for more information about Remote Viewer setup.": [
  null,
  "Veuillez vous référer à oVirt $0 pour plus d’informations sur la configuration de l’afficheur à distance."
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
 "Preparing for Maintenance": [
  null,
  "Préparation à la maintenance"
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
 "REBOOT action failed": [
  null,
  "L’action REBOOT a échoué"
 ],
 "REBOOT_VM action failed: %s0": [
  null,
  "L’action REBOOT_VM a échoué : %0"
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
  "Enregistrement d’oVirt dans Cockpit"
 ],
 "Reload": [
  null,
  "Recharger"
 ],
 "Restart": [
  null,
  "Redémarrer"
 ],
 "Resume": [
  null,
  "Reprendre"
 ],
 "Run": [
  null,
  "Exécuter"
 ],
 "Run Here": [
  null,
  "Exécuter ici"
 ],
 "Run when host boots": [
  null,
  "Démarrer quand l’hôte est amorcé"
 ],
 "Running Since:": [
  null,
  "En cours d’exécution depuis :"
 ],
 "SET VCPU SETTINGS action failed": [
  null,
  "L’action SET VCPU SETTINGS a échoué"
 ],
 "SHUTDOWN action failed": [
  null,
  "L’action SHUTDOWN a échoué"
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
  "L’action START a échoué"
 ],
 "START_VM action failed: %s0": [
  null,
  "L’action START_VM a échoué : %0"
 ],
 "SUSPEND action failed": [
  null,
  "L’action SUSPEND a échoué"
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
  ""
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
  "Passer l’hôte à la maintenance"
 ],
 "Switching host to maintenance mode failed. Received error: ": [
  null,
  "La commutation de l’hôte en mode de maintenance a échoué. Erreur reçue :"
 ],
 "Switching host to maintenance mode in progress ...": [
  null,
  "Passage de l’hôte au mode maintenance en cours…"
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
 "The pool is empty": [
  null,
  "La pool est vide"
 ],
 "This host is managed by a virtualization manager, so creation of new VMs from the host is not possible.": [
  null,
  "Cet hôte est géré par un gestionnaire de virtualisation, donc la création de nouvelles machines virtuelles à partir de l’hôte n’est pas possible."
 ],
 "This virtual machine is not managed by oVirt": [
  null,
  "Cette machine virtuelle n’est pas gérée par oVirt"
 ],
 "Threads per core": [
  null,
  "Threads par noyaux"
 ],
 "Type": [
  null,
  "Type"
 ],
 "Type ID": [
  null,
  "ID type"
 ],
 "Unit": [
  null,
  "Unité"
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
 "VCPU settings could not be saved": [
  null,
  "Les paramètres de configuration de VCPU n’ont pas pu être sauvegardés"
 ],
 "VDSM": [
  null,
  "VDSM"
 ],
 "VDSM Service Management": [
  null,
  "VDSM Service Management"
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
 "Vendor": [
  null,
  "Fournisseur"
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
 "WWPN": [
  null,
  "WWPN"
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
 "control-label $0": [
  null,
  "control-label $0"
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
 "host device": [
  null,
  "Périphérique hôte"
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
  "l’installation a échoué"
 ],
 "installing OS": [
  null,
  "l’installation du système"
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
  "État hôte oVirt :"
 ],
 "oVirt Provider installation script failed due to missing arguments.": [
  null,
  "Le script d’installation d’oVirt Provider a échoué en raison d’arguments manquants."
 ],
 "oVirt Provider installation script failed: Can't write to /etc/cockpit/machines-ovirt.config, try as root.": [
  null,
  "Le script d’installation d’oVirt Provider a échoué : impossible d’écrire dans /etc/cockpit/machines-ovirt.config, essayez en tant que root."
 ],
 "oVirt installation script failed with following output: ": [
  null,
  "Le script d’installation d’oVirt a échoué avec la sortie suivante :"
 ],
 "oVirt login in progress": [
  null,
  "Connexion oVirt en cours"
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
 "vhostuser": [
  null,
  "vhostuser"
 ],
 "yes": [
  null,
  "oui"
 ]
}));
