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
 "Apply": [
  null,
  "Appliquer"
 ],
 "Cancel": [
  null,
  "Annuler"
 ],
 "Compress crash dumps to save space": [
  null,
  "Compresser les vidages sur incident pour économiser de l’espace"
 ],
 "Compression": [
  null,
  "Compression"
 ],
 "Crash dump location": [
  null,
  "Emplacement de vidage"
 ],
 "Crash system": [
  null,
  "Système de crash"
 ],
 "Directory": [
  null,
  "Répertoire"
 ],
 "Directory $0 isn't writable or doesn't exist.": [
  null,
  "Le répertoire $0 n’est pas accessible en écriture ou n’existe pas."
 ],
 "Kdump service not installed. Please ensure package kexec-tools is installed.": [
  null,
  "Le service Kdump n’est pas installé. Veuillez vous assurer que le paquet kexec-tools est installé."
 ],
 "Kernel Dump": [
  null,
  "Kernel Dump"
 ],
 "Loading...": [
  null,
  "Chargement…"
 ],
 "Local Filesystem": [
  null,
  "Système de fichiers local"
 ],
 "Location": [
  null,
  "Emplacement"
 ],
 "More details": [
  null,
  "Plus de détails"
 ],
 "Mount": [
  null,
  "Monter"
 ],
 "No configuration found": [
  null,
  "Aucune configuration trouvée"
 ],
 "No memory reserved. Append a crashkernel option to the kernel command line (e.g. in /etc/default/grub) to reserve memory at boot time. Example: crashkernel=512M": [
  null,
  "Pas de mémoire réservée. Ajoutez une option crashkernel à la ligne de commande du noyau (par exemple dans /etc/default/grub) pour réserver de la mémoire au démarrage. Exemple : crashkernel = 512M"
 ],
 "None": [
  null,
  "Aucun"
 ],
 "Ok": [
  null,
  "Ok"
 ],
 "On a mounted device": [
  null,
  "Sur un périphérique monté"
 ],
 "Raw to a device": [
  null,
  "Raw à un appareil"
 ],
 "Reading...": [
  null,
  "Lecture en cours…"
 ],
 "Remote over NFS": [
  null,
  "À distance sur NFS"
 ],
 "Remote over SSH": [
  null,
  "À distance sur SSH"
 ],
 "Reserved memory": [
  null,
  "Mémoire réservée"
 ],
 "Server": [
  null,
  "Serveur"
 ],
 "Service has an error": [
  null,
  "Le service a une erreur"
 ],
 "Service is running": [
  null,
  "Le service est en cours d’exécution"
 ],
 "Service is starting": [
  null,
  "Le service s’arrête"
 ],
 "Service is stopped": [
  null,
  "Le service est arrêté"
 ],
 "Service is stopping": [
  null,
  "Le service s’arrête"
 ],
 "Test Configuration": [
  null,
  "Configuration du test"
 ],
 "Test is only available while the kdump service is running.": [
  null,
  "Le test n’est disponible que lorsque le service kdump est en cours d’exécution."
 ],
 "Test kdump settings": [
  null,
  "Tester les paramètres de kdump"
 ],
 "This will test kdump settings by crashing the kernel and thereby the system. Depending on the settings, the system may not automatically reboot and the process may take a while.": [
  null,
  "Ceci testera les paramètres de kdump en plantant le noyau et ainsi le système. Selon les paramètres, le système peut ne pas redémarrer automatiquement et le processus peut prendre un certain temps."
 ],
 "This will test the kdump configuration by crashing the kernel.": [
  null,
  "Cela testera la configuration de kdump en plantant le noyau."
 ],
 "Unable to apply settings: $0": [
  null,
  "Les paramètres n’ont pas pu être appliés : $0"
 ],
 "invalid: multiple targets defined": [
  null,
  "invalide : plusieurs cibles définies"
 ],
 "kdump status": [
  null,
  "statut kdump"
 ],
 "locally in $0": [
  null,
  "localement dans $0"
 ],
 "nfs dump target isn't formated as server:path": [
  null,
  "la cible nfs dump n’a pas été formatée sous la forme server : path"
 ],
 "ssh key": [
  null,
  "clé ssh"
 ],
 "ssh key isn't a path": [
  null,
  "la clé ssh n’est pas un chemin d’accès"
 ],
 "ssh server is empty": [
  null,
  "le serveur ssh n’est pas vide"
 ],
 "undefined": [
  null,
  "indéfini"
 ]
}));
