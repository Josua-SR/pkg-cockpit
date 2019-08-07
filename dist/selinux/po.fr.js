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
 "$0 occurrence": [
  "$1 occurrences",
  "$0 occurrence",
  "$0 occurrences"
 ],
 "Ansible Playbook": [
  null,
  "Ansible Playbook"
 ],
 "Apply this solution": [
  null,
  "Appliquez cette solution"
 ],
 "Applying solution...": [
  null,
  "Application de la solution…"
 ],
 "Audit log": [
  null,
  "Journal d’audit"
 ],
 "Automation Script": [
  null,
  "Script d'automation"
 ],
 "Close": [
  null,
  "Fermer"
 ],
 "Connecting to SETroubleshoot daemon...": [
  null,
  "Connexion au démon SETroubleshoot…"
 ],
 "Copy to clipboard": [
  null,
  "Copier sur presse-papier"
 ],
 "Enforcing": [
  null,
  "Faire exécuter"
 ],
 "Error running semanage to discover system modifications": [
  null,
  "Erreur d'exécution de semanage pour découvrir les modifications du système"
 ],
 "Error while deleting alert: $0": [
  null,
  "Erreur lors de la suppression de l’alerte : $0"
 ],
 "Error while setting SELinux mode: '$0'": [
  null,
  "Erreur lors du réglage du mode SELinux: $0"
 ],
 "Failed to delete alert: $0": [
  null,
  "Échec de la suppression de l’alerte : $0"
 ],
 "Install setroubleshoot-server to troubleshoot SELinux events.": [
  null,
  "Installez setroubleshoot-server pour dépanner les événements SELinux."
 ],
 "Loading system modifications...": [
  null,
  "Chargement des modifications système…"
 ],
 "No SELinux alerts.": [
  null,
  "Pas d’alertes SELinux."
 ],
 "No System Modifications": [
  null,
  "Aucune modification système"
 ],
 "Not connected": [
  null,
  "Pas connecté"
 ],
 "Occurred $0": [
  null,
  "S’est produit à $0"
 ],
 "Occurred between $0 and $1": [
  null,
  "S’est produit entre $0 et $1"
 ],
 "Permissive": [
  null,
  "Permissif"
 ],
 "SELinux Access Control Errors": [
  null,
  "Erreurs de contrôle d’accès SELinux"
 ],
 "SELinux Policy": [
  null,
  "Politique de SELinux"
 ],
 "SELinux Troubleshoot": [
  null,
  "SELinux Troubleshoot"
 ],
 "SELinux is disabled on the system": [
  null,
  "SELinux est désactivé sur le système"
 ],
 "SELinux is disabled on the system.": [
  null,
  "SELinux est désactivé sur le système."
 ],
 "SELinux system status is unknown.": [
  null,
  "L’état du système SELinux est inconnu."
 ],
 "Setting deviates from the configured state and will revert on the next boot.": [
  null,
  "La configuration s’écarte de l’état configuré de départ et reviendra à cet état au prochain démarrage."
 ],
 "Shell Script": [
  null,
  "Script d'interpréteur de commande"
 ],
 "Solution applied successfully": [
  null,
  "Solution appliquée avec succès"
 ],
 "Solution failed": [
  null,
  "La solution a échoué"
 ],
 "Solutions": [
  null,
  "Solutions"
 ],
 "System Modifications": [
  null,
  "Modifications système"
 ],
 "The configured state is unknown, it might change on the next boot.": [
  null,
  "L’état configuré est inconnu, il peut changer au démarrage suivant."
 ],
 "The logged in user is not permitted to view system modifications": [
  null,
  "L’utilisateur actuellement connecté n’est pas autorisé à voir les modifications système"
 ],
 "Unable to apply this solution automatically": [
  null,
  "Cette solution n’a pas pu être appliquée automatiquement"
 ],
 "Unable to get alert details.": [
  null,
  "Incapable d’obtenir les détails de l’alerte."
 ],
 "Unable to get alert: $0": [
  null,
  "Incapable d’obtenir l’alerte : $0"
 ],
 "Unable to run fix: %0": [
  null,
  "Incapable d’exécuter le correctif : %0"
 ],
 "Unable to start setroubleshootd": [
  null,
  "Incapable de démarrer setroubleshootd"
 ],
 "View automation script": [
  null,
  "Afficher le script d'automation"
 ],
 "Waiting for details...": [
  null,
  "En attente de détails…"
 ],
 "solution details": [
  null,
  "détails de la solution"
 ]
}));
