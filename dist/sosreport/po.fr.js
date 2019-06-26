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
 "Cancel": [
  null,
  "Annuler"
 ],
 "Close": [
  null,
  "Fermer"
 ],
 "Create Report": [
  null,
  "Créer Rapport"
 ],
 "Create diagnostic report": [
  null,
  "Créer un rapport de diagnostic"
 ],
 "Diagnostic reports": [
  null,
  "Rapports de diagnostic"
 ],
 "Done!": [
  null,
  "Terminé !"
 ],
 "Download report": [
  null,
  "Télécharger le rapport"
 ],
 "Generating report": [
  null,
  "Générer un rapport"
 ],
 "No archive has been created.": [
  null,
  "Aucune archive n’a été créée."
 ],
 "The collected information will be stored locally on the system.": [
  null,
  "Les informations collectées seront stockées localement sur le système."
 ],
 "The generated archive contains data considered sensitive and its content should be reviewed by the originating organization before being passed to any third party.": [
  null,
  "L’archive générée contient des données considérées comme sensibles et son contenu doit être examiné par l’organisation d’origine avant d’être transmis à un tiers."
 ],
 "This tool will collect system configuration and diagnostic information from this system for use with diagnosing problems with the system.": [
  null,
  "Cet outil collecte les informations de configuration et de diagnostic du système à partir de ce système afin de les utiliser pour diagnostiquer les problèmes du système."
 ]
}));
