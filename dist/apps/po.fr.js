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
 "Applications": [
  null,
  "Applications"
 ],
 "Cancel": [
  null,
  "Annuler"
 ],
 "Checking for new applications": [
  null,
  "Vérification de nouvelles applications"
 ],
 "Close": [
  null,
  "Fermer"
 ],
 "Error": [
  null,
  "Erreur"
 ],
 "Go to Application": [
  null,
  "Aller à l’application"
 ],
 "Install": [
  null,
  "Installer"
 ],
 "Installing": [
  null,
  "Installation"
 ],
 "No applications installed or available": [
  null,
  "Aucune application installée ou disponible"
 ],
 "No description provided.": [
  null,
  "Aucune description fournie."
 ],
 "No installation package found for this application.": [
  null,
  "Aucun paquet d’installation n’a été trouvé pour cette application."
 ],
 "Ok": [
  null,
  "Ok"
 ],
 "PackageKit crashed": [
  null,
  "PackageKit crash"
 ],
 "Remove": [
  null,
  "Retirer"
 ],
 "Removing": [
  null,
  "Suppression "
 ],
 "Unknown Application": [
  null,
  "Application inconnue"
 ],
 "Waiting for other programs to finish using the package manager...": [
  null,
  "En attente d’autres programmes pour terminer l’utilisation du gestionnaire de paquets…"
 ]
}));
