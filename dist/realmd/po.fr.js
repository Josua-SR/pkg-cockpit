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
 "$0 Only users with local credentials will be able to log into this machine. This may also effect other services as DNS resolution settings and the list of trusted CAs may change.": [
  null,
  "$0 Seuls les utilisateurs disposant d’informations d’identification locales pourront se connecter à cette machine. Cela peut également affecter d’autres services en tant que paramètres de résolution DNS et la liste des autorités de certification approuvées peut changer."
 ],
 "$0 is not available from any repository.": [
  null,
  "$0 n’est disponible à partir d’aucun référentiel."
 ],
 "$0 will be installed.": [
  null,
  "0 $ sera installé."
 ],
 "Additional packages:": [
  null,
  "Paquets supplémentaires :"
 ],
 "Administrator Password": [
  null,
  "Mot de passe administrateur"
 ],
 "Are you sure you want to leave the '$0' domain?": [
  null,
  "Êtes-vous certain de vouloir quitter le domaine « $0 » ?"
 ],
 "Are you sure you want to leave this domain?": [
  null,
  "Êtes-vous sûr de vouloir quitter ce domaine?"
 ],
 "Authentication": [
  null,
  "Authentification"
 ],
 "Automatic": [
  null,
  "Automatique"
 ],
 "Cancel": [
  null,
  "Annuler"
 ],
 "Checking installed software": [
  null,
  "Vérification des logiciels installés"
 ],
 "Computer OU": [
  null,
  "Ordinateur OU"
 ],
 "Domain $0 could not be contacted": [
  null,
  "Le domaine $0 n’a pas pu être contacté"
 ],
 "Domain $0 is not supported": [
  null,
  "Le domaine $0 n’est pas pris en charge"
 ],
 "Domain Address": [
  null,
  "Adresse de domaine"
 ],
 "Domain Administrator Name": [
  null,
  "Nom de l’administrateur du domaine"
 ],
 "Domain Administrator Password": [
  null,
  "Mot de passe administrateur du domaine"
 ],
 "Downloading $0": [
  null,
  "Téléchargement $0"
 ],
 "Host name should not be changed in a domain": [
  null,
  "Le nom de l’hôte ne devrait pas être changé dans un domaine"
 ],
 "Install": [
  null,
  "Installer"
 ],
 "Install Software": [
  null,
  "Installer le logiciel"
 ],
 "Installing $0": [
  null,
  "Installation de $0"
 ],
 "Join": [
  null,
  "Joindre"
 ],
 "Join Domain": [
  null,
  "Joindre un domaine"
 ],
 "Join a Domain": [
  null,
  "Rejoignez un domaine"
 ],
 "Joining this domain is not supported": [
  null,
  "Rejoindre ce domaine n’est pas supporté"
 ],
 "Leave": [
  null,
  "Quitter"
 ],
 "Leave Domain": [
  null,
  "Quitter le domaine"
 ],
 "More": [
  null,
  "Plus"
 ],
 "Next": [
  null,
  "Prochain"
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
 "One Time Password": [
  null,
  "Mot de passe à usage unique"
 ],
 "PackageKit crashed": [
  null,
  "PackageKit crash"
 ],
 "Removals:": [
  null,
  "Suppressions :"
 ],
 "Removing $0": [
  null,
  "Suppression de $0"
 ],
 "The user <b>$0</b> is not permitted to modify realms": [
  null,
  "L’utilisateur <b>$0</b> n’est pas autorisé à modifier les domaines"
 ],
 "This may take a while": [
  null,
  "Cela peut prendre un peu de temps"
 ],
 "Total size: $0": [
  null,
  "Taille totale : $0"
 ],
 "User Name": [
  null,
  "Nom d’utilisateur"
 ],
 "User Password": [
  null,
  "Mot de passe de l’utilisateur"
 ],
 "Waiting for other software management operations to finish": [
  null,
  "Attente de la fin des autres opérations de gestion du logiciel"
 ],
 "e.g. \"$0\"": [
  null,
  "par ex. \"$0\""
 ]
}));
