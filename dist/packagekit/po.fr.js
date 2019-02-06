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
 "$0 is not available from any repository.": [
  null,
  "$0 n’est disponible à partir d’aucun référentiel."
 ],
 "$0 update": [
  "$0 updates",
  "$0 mis à jour",
  "$0 mis à jour"
 ],
 "$0 will be installed.": [
  null,
  "0 $ sera installé."
 ],
 "$1 security fix": [
  "$1 security fixes",
  "$1 correctif de sécurité",
  "$1 correctifs de sécurité"
 ],
 ", including $1 security fix": [
  ", including $1 security fixes",
  ", y compris $1 correctif de sécurité",
  ", y compris $1 correctifs de sécurité"
 ],
 "Additional packages:": [
  null,
  "Paquets supplémentaires :"
 ],
 "Apply all updates": [
  null,
  "Appliquer toutes les mises à jour"
 ],
 "Apply security updates": [
  null,
  "Appliquez des mises à jour de sécurité"
 ],
 "Applying updates": [
  null,
  "Appliquer les mises à jour"
 ],
 "Applying updates failed": [
  null,
  "L’application des mises à jour a échoué"
 ],
 "Automatic Updates": [
  null,
  "Mises à jour automatiques"
 ],
 "Available Updates": [
  null,
  "Mises à jour disponibles"
 ],
 "Bugs:": [
  null,
  "Bogues:"
 ],
 "Cancel": [
  null,
  "Annuler"
 ],
 "Check for Updates": [
  null,
  "Vérifier les mises à jour"
 ],
 "Checking installed software": [
  null,
  "Vérification des logiciels installés"
 ],
 "Details": [
  null,
  "Détails"
 ],
 "Downloaded": [
  null,
  "Téléchargé"
 ],
 "Downloading": [
  null,
  "Téléchargement"
 ],
 "Downloading $0": [
  null,
  "Téléchargement $0"
 ],
 "Errata:": [
  null,
  "Errata:"
 ],
 "Ignore": [
  null,
  "Ignorer"
 ],
 "Initializing...": [
  null,
  "Initialisation ..."
 ],
 "Install": [
  null,
  "Installer"
 ],
 "Install All Updates": [
  null,
  "Installer toutes les mises à jour"
 ],
 "Install Security Updates": [
  null,
  "Installer les mises à jour de sécurité"
 ],
 "Install Software": [
  null,
  "Installer le logiciel"
 ],
 "Installed": [
  null,
  "installée"
 ],
 "Installing": [
  null,
  "Installation"
 ],
 "Installing $0": [
  null,
  "Installation de $0"
 ],
 "Last checked: $0 ago": [
  null,
  "Dernière vérification: il y a $0"
 ],
 "Loading available updates failed": [
  null,
  "Le chargement des mises à jour disponibles a échoué"
 ],
 "Loading available updates, please wait...": [
  null,
  "Le chargement des mises à jour disponibles est en cours, veuillez patienter ..."
 ],
 "Name": [
  null,
  "Nom"
 ],
 "No updates pending": [
  null,
  "Aucune mise à jour en attente"
 ],
 "Off": [
  null,
  "De"
 ],
 "Ok": [
  null,
  "Ok"
 ],
 "On": [
  null,
  "Sur"
 ],
 "Package information": [
  null,
  "Informations sur le paquet"
 ],
 "PackageKit crashed": [
  null,
  "PackageKit crash"
 ],
 "PackageKit is not installed": [
  null,
  "PackageKit non installé"
 ],
 "PackageKit reported error code $0": [
  null,
  "PackageKit a signalé le code d’erreur $0"
 ],
 "Refreshing package information": [
  null,
  "Rafraîchissement des informations sur le paquet"
 ],
 "Register…": [
  null,
  "Enregistrement…"
 ],
 "Removals:": [
  null,
  "Suppressions :"
 ],
 "Removing $0": [
  null,
  "Suppression de $0"
 ],
 "Restart Now": [
  null,
  "Redémarrer maintenant"
 ],
 "Restart Recommended": [
  null,
  "Redémarrage conseillé"
 ],
 "Restarting": [
  null,
  "Redémarrage"
 ],
 "Set up": [
  null,
  "Installation"
 ],
 "Setting up": [
  null,
  "Mise en place"
 ],
 "Severity": [
  null,
  "Gravité"
 ],
 "Severity:": [
  null,
  "Gravité :"
 ],
 "Software Updates": [
  null,
  "Mises à jour de logiciel"
 ],
 "Some other program is currently using the package manager, please wait...": [
  null,
  "Un autre programme utilise actuellement le gestionnaire de paquets, veuillez patienter ..."
 ],
 "System is up to date": [
  null,
  "Le système est à jour"
 ],
 "The following packages were recently updated:": [
  null,
  "Les paquets suivants ont été récemment mis à jour :"
 ],
 "The following packages were updated $0:": [
  null,
  "Les paquets suivants ont été mis à jour $0 :"
 ],
 "This system is not registered": [
  null,
  "Ce système n’est pas enregistré"
 ],
 "This web console will be updated.": [
  null,
  "Cette console web sera mise à jour."
 ],
 "To get software updates, this system needs to be registered with Red Hat, either using the Red Hat Customer Portal or a local subscription server.": [
  null,
  "Pour obtenir des mises à jour logicielles, ce système doit être enregistré auprès de Red Hat, en utilisant le portail client Red Hat ou un serveur d’abonnement local."
 ],
 "Total size: $0": [
  null,
  "Taille totale : $0"
 ],
 "Update History": [
  null,
  "Mise à jour historique"
 ],
 "Update Log": [
  null,
  "Mise à jour de la journalisation"
 ],
 "Updated": [
  null,
  "Actualisé"
 ],
 "Updated packages may require a restart to take effect.": [
  null,
  "Les packages mis à jour peuvent nécessiter un redémarrage pour prendre effet."
 ],
 "Updating": [
  null,
  "Mise à jour en cours"
 ],
 "Verified": [
  null,
  "Vérifié"
 ],
 "Verifying": [
  null,
  "Vérification"
 ],
 "Version": [
  null,
  "Version"
 ],
 "Waiting for other software management operations to finish": [
  null,
  "Attente de la fin des autres opérations de gestion du logiciel"
 ],
 "Your browser will disconnect, but this does not affect the update process. You can reconnect in a few moments to continue watching the progress.": [
  null,
  "Votre navigateur se déconnectera, mais cela n’affectera pas le processus de mise à jour, vous pourrez vous reconnecter dans quelques instants pour continuer à suivre la progression."
 ],
 "Your server will close the connection soon. You can reconnect after it has restarted.": [
  null,
  "Votre serveur fermera la connexion bientôt. Vous pouvez vous reconnecter après le redémarrage."
 ],
 "and restart the machine automatically.": [
  null,
  "et redémarrez la machine automatiquement."
 ],
 "at": [
  null,
  "à"
 ],
 "bug fix": [
  null,
  "Correctif de bogue"
 ],
 "enhancement": [
  null,
  "amélioration"
 ],
 "every day": [
  null,
  "tous les jours"
 ],
 "on Fridays": [
  null,
  "les vendredis"
 ],
 "on Mondays": [
  null,
  "les lundis"
 ],
 "on Saturdays": [
  null,
  "les samedis"
 ],
 "on Sundays": [
  null,
  "les dimanches"
 ],
 "on Thursdays": [
  null,
  "les jeudis"
 ],
 "on Tuesdays": [
  null,
  "les mardis"
 ],
 "on Wednesdays": [
  null,
  "les mercredis"
 ],
 "security": [
  null,
  "sécurité"
 ],
 "undefined": [
  null,
  "indéfini"
 ]
}));
