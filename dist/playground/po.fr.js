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
 "$0 disk is missing": [
  "$0 disks are missing",
  "$0 disque est manquant",
  "$0 disques sont manquants"
 ],
 "Cancel": [
  null,
  "Annuler"
 ],
 "Control": [
  null,
  "Contrôle"
 ],
 "Empty": [
  null,
  "Vide"
 ],
 "Error": [
  null,
  "Erreur"
 ],
 "Memory": [
  null,
  "Mémoire"
 ],
 "Network": [
  null,
  "Réseau"
 ],
 "No matching files found": [
  null,
  "Aucun fichier correspondant trouvé"
 ],
 "Not Ready": [
  null,
  "Pas prêt"
 ],
 "Ok": [
  null,
  "Ok"
 ],
 "Path to file": [
  null,
  "Chemin d’accès au fichier"
 ],
 "Ready": [
  null,
  "Prêt"
 ],
 "Too many files found": [
  null,
  "Trop de fichiers trouvés"
 ],
 "Unavailable": [
  null,
  "Non disponible"
 ],
 "User": [
  null,
  "Utilisateur"
 ],
 "undefined": [
  null,
  "indéfini"
 ],
 "disk-non-rotational\u0004$0 disk is missing": [
  "$0 disks are missing",
  "$0 disque est manquant",
  "$0 disques sont manquants"
 ],
 "key\u0004Control": [
  null,
  "Contrôle"
 ],
 "verb\u0004Empty": [
  null,
  "Vide"
 ],
 "verb\u0004Ready": [
  null,
  "Prêt"
 ]
}));
