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
 "Adding key": [
  null,
  "Ajouter une clé"
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
  "Modification"
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
 "Container Administrator": [
  null,
  "Administrateur de conteneur"
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
 "Delete $0": [
  null,
  "Supprimer $0"
 ],
 "Delete Files": [
  null,
  "Supprimer les fichiers"
 ],
 "Error": [
  null,
  "Erreur"
 ],
 "Error saving authorized keys: ": [
  null,
  "Erreur lors de l’enregistrement des clés autorisées :"
 ],
 "Excellent password": [
  null,
  "Excellent mot de passe"
 ],
 "Failed to change password": [
  null,
  "Échec de la modification du mot de passe"
 ],
 "Failed to load authorized keys.": [
  null,
  "Échec du chargement des clés autorisées."
 ],
 "Force Change": [
  null,
  "Forcer la modification"
 ],
 "Force password change": [
  null,
  "Forcer la modification de mot de passe"
 ],
 "Full Name": [
  null,
  "Nom complet"
 ],
 "Image Builder": [
  null,
  "Image Builder"
 ],
 "Invalid expiration date": [
  null,
  "Date d’expiration non valide"
 ],
 "Invalid key": [
  null,
  "Clé non valide"
 ],
 "Invalid number of days": [
  null,
  "Nombre de jours non valide"
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
 "Lock account on $0": [
  null,
  "Verrouiller le compte sur $0"
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
 "New password was not accepted": [
  null,
  "Le nouveau mot de passe n’a pas été accepté"
 ],
 "No real name specified": [
  null,
  "Aucun nom réel n’est renseigné"
 ],
 "No user name specified": [
  null,
  "Aucun nom d’utilisateur n’est renseigné"
 ],
 "Off": [
  null,
  "De"
 ],
 "Old Password": [
  null,
  "Ancien mot de passe"
 ],
 "Old password not accepted": [
  null,
  "Ancien mot de passe non accepté"
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
 "Password is not acceptable": [
  null,
  "Le mot de passe n’est pas acceptable"
 ],
 "Password is too weak": [
  null,
  "Le mot de passe est trop faible"
 ],
 "Password must be changed": [
  null,
  "Le mot de passe doit être changé"
 ],
 "Paste the contents of your public SSH key file here": [
  null,
  "Collez le contenu de votre clé publique SSH ici"
 ],
 "Please specify an expiration date": [
  null,
  "Veuillez spécifier une date d’expiration"
 ],
 "Prompting via passwd timed out": [
  null,
  "L’invite via passwd a expiré"
 ],
 "Require password change every $0 days": [
  null,
  "Exiger un changement de mot de passe tous les $0 jours"
 ],
 "Require password change on $0": [
  null,
  "Exiger un changement de mot de passe sur $0"
 ],
 "Reset": [
  null,
  "Réinitialiser"
 ],
 "Roles": [
  null,
  "Les rôles"
 ],
 "Server Administrator": [
  null,
  "Administrateur de serveur"
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
 "The account '$0' will be forced to change their password on next login": [
  null,
  "Le compte « $0 » sera forcé de changer de mot de passe lors de la prochaine connexion"
 ],
 "The key you provided was not valid.": [
  null,
  "La clé que vous avez fournie n’était pas valide."
 ],
 "The passwords do not match": [
  null,
  "Le mot de passe ne correspond pas"
 ],
 "The user <b>$0</b> is not permitted to modify accounts": [
  null,
  "L’utilisateur <b>$0</b> n’est pas autorisé à modifier les comptes"
 ],
 "The user name can only consist of letters from a-z, digits, dots, dashes and underscores.": [
  null,
  "Le nom d’utilisateur ne peut contenir que des lettres de az, des chiffres, des points, des tirets et des traits de soulignement."
 ],
 "There are no authorized public keys for this account.": [
  null,
  "Il n’y a aucune clé publique autorisée pour ce compte."
 ],
 "This user name already exists": [
  null,
  "Cet identifiant existe déjà"
 ],
 "Unable to delete root account": [
  null,
  "Incapable de supprimer le compte root"
 ],
 "Unable to rename root account": [
  null,
  "Incapable de renommer le compte root"
 ],
 "Unexpected error": [
  null,
  "Erreur inattendue"
 ],
 "Unnamed": [
  null,
  "Anonyme"
 ],
 "User Name": [
  null,
  "Nom d’utilisateur"
 ],
 "Validating key": [
  null,
  "Clé de validation"
 ],
 "You do not have permission to view the authorized public keys for this account.": [
  null,
  "Vous n’êtes pas autorisé à afficher les clés publiques autorisées pour ce compte."
 ],
 "You must wait longer to change your password": [
  null,
  "Vous devez encore attendre avant de changer votre mot de passe"
 ],
 "translatable": [
  null,
  "traduisible"
 ],
 "page-title\u0004Accounts": [
  null,
  "Comptes"
 ]
}));
