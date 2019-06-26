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
 "After leaving the domain, only users with local credentials will be able to log into this machine. This may also affect other services as DNS resolution settings and the list of trusted CAs may change.": [
  null,
  "Une fois le domaine quitté. Seuls les utilisateurs disposant d’identifiants locaux pourront se connecter à cette machine. Cela peut également affecter d’autres services en tant que paramètres de résolution DNS et la liste des autorités de certification approuvées peut changer."
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
 "Client Software": [
  null,
  "Logiciel client"
 ],
 "Computer OU": [
  null,
  "Ordinateur OU"
 ],
 "Contacted domain": [
  null,
  "Domaine contacté"
 ],
 "Domain": [
  null,
  "Domaine"
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
  "Rejoindre ce domaine n’est pas pris en charge"
 ],
 "Leave Domain": [
  null,
  "Quitter le domaine"
 ],
 "Login Format": [
  null,
  "Format de connexion"
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
 "Server Software": [
  null,
  "Logiciels du serveur"
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
 "Validating address": [
  null,
  "Validation de l’adresse"
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
