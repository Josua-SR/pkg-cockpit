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
  "x-generator": "Zanata 4.4.5"
 },
 "Access": [
  null,
  "Accès"
 ],
 "Account Expiration": [
  null,
  ""
 ],
 "Account not available or cannot be edited.": [
  null,
  "Compte non disponible ou ne peut être édité."
 ],
 "Accounts": [
  null,
  "Comptes"
 ],
 "Add key": [
  null,
  ""
 ],
 "Add public key": [
  null,
  ""
 ],
 "Adding key": [
  null,
  "Ajout de la clé"
 ],
 "Authorized Public SSH Keys": [
  null,
  ""
 ],
 "Back to Accounts": [
  null,
  ""
 ],
 "Cancel": [
  null,
  "Annuler"
 ],
 "Change": [
  null,
  ""
 ],
 "Close": [
  null,
  "Fermer"
 ],
 "Confirm": [
  null,
  ""
 ],
 "Confirm New Password": [
  null,
  ""
 ],
 "Container Administrator": [
  null,
  "Administrateur de conteneurs"
 ],
 "Create": [
  null,
  "Créer"
 ],
 "Create New Account": [
  null,
  ""
 ],
 "Delete": [
  null,
  "Supprimer"
 ],
 "Delete $0": [
  null,
  "Supprimer $0"
 ],
 "Delete Files": [
  null,
  ""
 ],
 "Error": [
  null,
  "Erreur"
 ],
 "Error saving authorized keys: ": [
  null,
  "Erreur pendant l'enregistrement du fichier authorized_keys :"
 ],
 "Excellent password": [
  null,
  "Mot de passe excellent"
 ],
 "Failed to change password": [
  null,
  "Échec du changement de mot de passe"
 ],
 "Failed to load authorized keys.": [
  null,
  ""
 ],
 "Force Change": [
  null,
  ""
 ],
 "Force password change": [
  null,
  ""
 ],
 "Full Name": [
  null,
  ""
 ],
 "Image Builder": [
  null,
  ""
 ],
 "Invalid expiration date": [
  null,
  ""
 ],
 "Invalid key": [
  null,
  ""
 ],
 "Invalid number of days": [
  null,
  ""
 ],
 "Last Login": [
  null,
  ""
 ],
 "Local Accounts": [
  null,
  ""
 ],
 "Lock Account": [
  null,
  ""
 ],
 "Lock account on $0": [
  null,
  ""
 ],
 "Logged In": [
  null,
  "Connecté"
 ],
 "Never": [
  null,
  "Jamais"
 ],
 "Never expire password": [
  null,
  ""
 ],
 "Never lock account": [
  null,
  ""
 ],
 "New Password": [
  null,
  ""
 ],
 "New password was not accepted": [
  null,
  "Refus du nouveau mot de passe"
 ],
 "No real name specified": [
  null,
  "Aucun nom réel indiqué."
 ],
 "No user name specified": [
  null,
  "Aucun nom d'utilisateur indiqué."
 ],
 "Off": [
  null,
  "Éteint"
 ],
 "Old Password": [
  null,
  ""
 ],
 "Old password not accepted": [
  null,
  "Refus de l'ancien mot de passe "
 ],
 "On": [
  null,
  "Allumé"
 ],
 "Password": [
  null,
  "Mot de passe"
 ],
 "Password Expiration": [
  null,
  ""
 ],
 "Password is not acceptable": [
  null,
  "Le mot de passe n'est pas acceptable"
 ],
 "Password is too weak": [
  null,
  "Le mot de passe est trop faible"
 ],
 "Password must be changed": [
  null,
  ""
 ],
 "Paste the contents of your public SSH key file here": [
  null,
  ""
 ],
 "Please specify an expiration date": [
  null,
  ""
 ],
 "Prompting via passwd timed out": [
  null,
  "Temps d'attente dépassé sur saisie avec passwd"
 ],
 "Require password change every $0 days": [
  null,
  ""
 ],
 "Require password change on $0": [
  null,
  ""
 ],
 "Reset": [
  null,
  ""
 ],
 "Roles": [
  null,
  ""
 ],
 "Server Administrator": [
  null,
  "Administrateur de serveurs"
 ],
 "Set": [
  null,
  ""
 ],
 "Set Password": [
  null,
  ""
 ],
 "Terminate Session": [
  null,
  ""
 ],
 "The account '$0' will be forced to change their password on next login": [
  null,
  ""
 ],
 "The key you provided was not valid.": [
  null,
  "La clé fournie est invalide."
 ],
 "The passwords do not match": [
  null,
  "Les mots de passe ne correspondent pas."
 ],
 "The user <b>$0</b> is not permitted to modify accounts": [
  null,
  "L'utilisateur <b>$0</b> n'a pas le droit de modifier les comptes"
 ],
 "The user name can only consist of letters from a-z, digits, dots, dashes and underscores.": [
  null,
  ""
 ],
 "There are no authorized public keys for this account.": [
  null,
  ""
 ],
 "This user name already exists": [
  null,
  ""
 ],
 "Unable to delete root account": [
  null,
  "Impossible de supprimer le compte root"
 ],
 "Unable to rename root account": [
  null,
  "Impossible de renommer le compte root"
 ],
 "Unexpected error": [
  null,
  "Erreur inattendue"
 ],
 "Unnamed": [
  null,
  ""
 ],
 "User Name": [
  null,
  "Nom d'utilisateur"
 ],
 "Validating key": [
  null,
  "Validation de la clé"
 ],
 "You do not have permission to view the authorized public keys for this account.": [
  null,
  ""
 ],
 "translatable": [
  null,
  ""
 ],
 "page-title\u0004Accounts": [
  null,
  "Comptes"
 ]
}));
