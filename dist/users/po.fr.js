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
 "Access": [
  null,
  "Accès"
 ],
 "Account Expiration": [
  null,
  "Expiration du compte"
 ],
 "Account not available or cannot be edited.": [
  null,
  "Compte non disponible ou ne peut pas être modifié."
 ],
 "Accounts": [
  null,
  "Comptes"
 ],
 "Add key": [
  null,
  "Ajouter une clé"
 ],
 "Add public key": [
  null,
  "Ajouter une clé publique"
 ],
 "Authorized Public SSH Keys": [
  null,
  "Clés SSH publiques autorisées"
 ],
 "Back to Accounts": [
  null,
  "Retour aux comptes"
 ],
 "Cancel": [
  null,
  "Annuler"
 ],
 "Change": [
  null,
  "Changement"
 ],
 "Close": [
  null,
  "Fermer"
 ],
 "Confirm": [
  null,
  "Confirmer"
 ],
 "Confirm New Password": [
  null,
  "Confirmer le nouveau mot de passe"
 ],
 "Create": [
  null,
  "Créer"
 ],
 "Create New Account": [
  null,
  "Créer un nouveau compte"
 ],
 "Delete": [
  null,
  "Supprimer"
 ],
 "Delete Files": [
  null,
  "Supprimer les fichiers"
 ],
 "Failed to load authorized keys.": [
  null,
  "Impossible de charger les clés autorisées."
 ],
 "Force Change": [
  null,
  "Changement forcé"
 ],
 "Force password change": [
  null,
  "Changement de mot de passe forcé"
 ],
 "Full Name": [
  null,
  "Nom complet"
 ],
 "Invalid key": [
  null,
  "Clé non valide"
 ],
 "Last Login": [
  null,
  "Dernière connexion"
 ],
 "Local Accounts": [
  null,
  "Comptes locaux"
 ],
 "Lock Account": [
  null,
  "Verrouiller le compte"
 ],
 "Never expire password": [
  null,
  "Ne jamais faire expirer le mot de passe"
 ],
 "Never lock account": [
  null,
  "Ne jamais verrouiller le compte"
 ],
 "New Password": [
  null,
  "Nouveau mot de passe"
 ],
 "Off": [
  null,
  "De"
 ],
 "Old Password": [
  null,
  "Ancien mot de passe"
 ],
 "On": [
  null,
  "Sur"
 ],
 "Password": [
  null,
  "Mot de passe"
 ],
 "Password Expiration": [
  null,
  "Expiration du mot de passe"
 ],
 "Paste the contents of your public SSH key file here": [
  null,
  "Collez le contenu de votre clé publique SSH ici"
 ],
 "Reset": [
  null,
  "Réinitialiser"
 ],
 "Roles": [
  null,
  "Les rôles"
 ],
 "Set": [
  null,
  "Ensemble"
 ],
 "Set Password": [
  null,
  "Définir le mot"
 ],
 "Terminate Session": [
  null,
  "Terminer la session"
 ],
 "There are no authorized public keys for this account.": [
  null,
  "Il n'y a aucune clé publique autorisée pour ce compte."
 ],
 "Unnamed": [
  null,
  "Anonyme"
 ],
 "User Name": [
  null,
  "Nom d'utilisateur"
 ],
 "You do not have permission to view the authorized public keys for this account.": [
  null,
  "Vous n'êtes pas autorisé à afficher les clés publiques autorisées pour ce compte."
 ],
 "translatable": [
  null,
  "traduisible"
 ]
}));
