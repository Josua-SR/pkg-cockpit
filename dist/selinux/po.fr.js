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
 "$0 occurrence": [
  "$1 occurrences",
  "$0 occurrence",
  "$0 occurrences"
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
 "Connecting to SETroubleshoot daemon...": [
  null,
  "Connexion au démon SETroubleshoot…"
 ],
 "Enforce policy:": [
  null,
  "Appliquer la stratégie :"
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
 "No SELinux alerts.": [
  null,
  "Pas d’alertes SELinux."
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
 "Off": [
  null,
  "De"
 ],
 "On": [
  null,
  "Sur"
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
 "The configured state is unknown, it might change on the next boot.": [
  null,
  "L’état configuré est inconnu, il peut changer au démarrage suivant."
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
 "Waiting for details...": [
  null,
  "En attente de détails…"
 ],
 "solution details": [
  null,
  "détails de la solution"
 ]
}));
