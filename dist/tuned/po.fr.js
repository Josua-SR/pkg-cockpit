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
 "Change Performance Profile": [
  null,
  "Modifier le profil de performance"
 ],
 "Change Profile": [
  null,
  "Modifier le profil"
 ],
 "Communication with tuned has failed": [
  null,
  "La communication avec tuned a échoué"
 ],
 "Disable tuned": [
  null,
  "Désactiver tuned"
 ],
 "Failed to disable tuned": [
  null,
  "Échec de la désactivation de tuned"
 ],
 "Failed to disable tuned profile": [
  null,
  "Échec de la désactivation du profil tuned"
 ],
 "Failed to enable tuned": [
  null,
  "Échec de l’activation de tuned"
 ],
 "Failed to switch profile": [
  null,
  "Échec du changement de profil"
 ],
 "None": [
  null,
  "Aucun"
 ],
 "Ok": [
  null,
  "Ok"
 ],
 "The user <b>$0</b> is not permitted to change profiles": [
  null,
  "L’utilisateur <b>$0</b> n’a pas le droit de modifier les profils"
 ],
 "This system is using a custom profile": [
  null,
  "Ce système utilise un profil personnalisé"
 ],
 "This system is using the recommended profile": [
  null,
  "Ce système utilise le profil recommandé"
 ],
 "Tuned has failed to start": [
  null,
  "Tuned n’a pas pu démarrer"
 ],
 "Tuned is not available": [
  null,
  "Tuned n’est pas disponible"
 ],
 "Tuned is not running": [
  null,
  "Tuned ne fonctionne pas"
 ],
 "Tuned is off": [
  null,
  "Tuned est désactivé"
 ],
 "none": [
  null,
  "aucun"
 ],
 "recommended": [
  null,
  "conseillé"
 ]
}));
