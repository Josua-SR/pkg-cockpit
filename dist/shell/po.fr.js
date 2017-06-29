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
  "x-generator": "Zanata 3.9.6"
 },
 "A compatible version of Cockpit is not installed on {{#strong}}{{host}}{{/strong}}.": [
  null,
  "Une version compatible de Cockpit n''est pas installée sur {{#strong}}{{host}}{{/strong}}."
 ],
 "About Cockpit": [
  null,
  "À propos de Cockpit"
 ],
 "Account Settings": [
  null,
  "Paramètres de compte"
 ],
 "Active Pages": [
  null,
  ""
 ],
 "Add": [
  null,
  "Ajouter"
 ],
 "Add Machine to Dashboard": [
  null,
  "Ajouter une machine au tableau de bord"
 ],
 "Address": [
  null,
  "Adresse"
 ],
 "Authentication": [
  null,
  "Authentification"
 ],
 "Authentication Failed": [
  null,
  ""
 ],
 "Available": [
  null,
  ""
 ],
 "Cancel": [
  null,
  "Annuler"
 ],
 "Cannot connect to an unknown machine": [
  null,
  "Impossible de se connecter à une machine inconnue"
 ],
 "Change Password": [
  null,
  ""
 ],
 "Checking for public keys": [
  null,
  ""
 ],
 "Choose the language to be used in the application": [
  null,
  "Choisir la langue à utiliser dans l'application"
 ],
 "Close": [
  null,
  "Fermer"
 ],
 "Close Selected Pages": [
  null,
  ""
 ],
 "Cockpit could not contact the given host $0. Make sure it has ssh running on port $1, or specify another port in the address.": [
  null,
  "Cockpit ne peut contacter l'hôte indiqué $0. Assurez-vous que ssh est bien en écoute sur le port $1, ou indiquez un autre port dans l'adresse."
 ],
 "Cockpit had an unexpected internal error. <br/><br/>You can try restarting Cockpit by pressing refresh in your browser. The javascript console contains details about this error (<b>Ctrl-Shift-J</b> in most browsers).": [
  null,
  ""
 ],
 "Cockpit is an interactive Linux server admin interface.": [
  null,
  ""
 ],
 "Cockpit is an interactive Linux server admin interface. ": [
  null,
  ""
 ],
 "Cockpit is not installed": [
  null,
  ""
 ],
 "Cockpit was unable to contact {{#strong}}{{host}}{{/strong}}.": [
  null,
  ""
 ],
 "Cockpit was unable to log in to {{#strong}}{{host}}{{/strong}}. {{#can_sync}}You may want to try to {{#sync_link}}synchronize users{{/sync_link}}.{{/can_sync}} For more authentication options and troubleshooting support please upgrade cockpit-ws to a newer version.": [
  null,
  ""
 ],
 "Cockpit was unable to log into {{#strong}}{{host}}{{/strong}}.": [
  null,
  ""
 ],
 "Cockpit was unable to log into {{#strong}}{{host}}{{/strong}}. To use this machine with cockpit you will need to enable one of the following authentication methods in the sshd config on {{#strong}}{{host}}{{/strong}}:": [
  null,
  ""
 ],
 "Cockpit was unable to log into {{#strong}}{{host}}{{/strong}}. You can change your authentication credentials below. {{#can_sync}}You may prefer to {{#sync_link}}synchronize accounts and passwords{{/sync_link}}.{{/can_sync}}": [
  null,
  ""
 ],
 "Color": [
  null,
  ""
 ],
 "Comment": [
  null,
  ""
 ],
 "Confirm": [
  null,
  ""
 ],
 "Connect": [
  null,
  ""
 ],
 "Connecting simultaneously to more than {{ limit }} machines is unsupported.": [
  null,
  ""
 ],
 "Connecting to the machine": [
  null,
  "Connexion à la machine"
 ],
 "Could not contact {{host}}": [
  null,
  ""
 ],
 "Couldn't connect to the machine": [
  null,
  "Impossible de se connecter à la machine"
 ],
 "Details": [
  null,
  ""
 ],
 "Disconnected": [
  null,
  "Déconnecté"
 ],
 "Display Language": [
  null,
  "Langue d'affichage"
 ],
 "Enter IP address or host name": [
  null,
  "Entrez l'adresse IP ou le nom d'hôte"
 ],
 "Entering a different password here means you will need to retype it every time you reconnect to this machine": [
  null,
  ""
 ],
 "Error loading users: {{perm_failed}}": [
  null,
  ""
 ],
 "Failed to add machine: $0": [
  null,
  "Échec lors de l'ajout de la machine : $0"
 ],
 "Failed to change password": [
  null,
  "Échec du changement de mot de passe"
 ],
 "Failed to edit machine: $0": [
  null,
  "Impossible de modifier la machine : $0"
 ],
 "Fingerprint": [
  null,
  ""
 ],
 "In order to synchronize users, you need to log in to {{#strong}}{{host}}{{/strong}}.": [
  null,
  ""
 ],
 "Incorrect Host Key": [
  null,
  ""
 ],
 "Invalid file permissions": [
  null,
  "Permissions sur fichier invalide"
 ],
 "Is sshd running on a different port?": [
  null,
  ""
 ],
 "Kerberos Based SSO": [
  null,
  ""
 ],
 "Kerberos Ticket": [
  null,
  ""
 ],
 "Leave blank to connect to this machine as the currently logged in user{{#user}} ({{user}}){{/user}}. If you enter a different username, that user will always be used connecting to this machine.": [
  null,
  ""
 ],
 "Licensed under:": [
  null,
  ""
 ],
 "Lock to prevent privileged tasks": [
  null,
  ""
 ],
 "Locked": [
  null,
  ""
 ],
 "Log In": [
  null,
  ""
 ],
 "Log Out": [
  null,
  ""
 ],
 "Log in again": [
  null,
  ""
 ],
 "Log in to {{host}}": [
  null,
  ""
 ],
 "Login Password": [
  null,
  ""
 ],
 "Machines": [
  null,
  "Machines"
 ],
 "New Password": [
  null,
  ""
 ],
 "New password was not accepted": [
  null,
  "Refus du nouveau mot de passe"
 ],
 "No such file or directory": [
  null,
  "Fichier ou répertoire introuvable"
 ],
 "Not a valid private key": [
  null,
  "Pas une clé privée"
 ],
 "Off": [
  null,
  "Éteint"
 ],
 "Ok": [
  null,
  ""
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
 "Ooops!": [
  null,
  "Oups !"
 ],
 "Password": [
  null,
  "Mot de passe"
 ],
 "Password not accepted": [
  null,
  "Mot de passe refusé"
 ],
 "Password not usable for privileged tasks or to connect to other machines": [
  null,
  ""
 ],
 "Port": [
  null,
  ""
 ],
 "Privileged tasks not available": [
  null,
  ""
 ],
 "Project website": [
  null,
  ""
 ],
 "Prompting via ssh-add timed out": [
  null,
  "Temps d'attente dépassé sur saisie avec ssh-add"
 ],
 "Prompting via ssh-keygen timed out": [
  null,
  "Temps d'attente dépassé sur saisie via ssh-keygen"
 ],
 "Public Key": [
  null,
  ""
 ],
 "Reconnect": [
  null,
  "Reconnecter"
 ],
 "Reuse my password for privileged tasks and to connect to other machines": [
  null,
  ""
 ],
 "Select": [
  null,
  ""
 ],
 "Select the users that you would like to be synchronized with {{#strong}}{{host}}{{/strong}}": [
  null,
  ""
 ],
 "Synchronize": [
  null,
  ""
 ],
 "Synchronize users": [
  null,
  ""
 ],
 "The IP address or host name cannot contain whitespace.": [
  null,
  "L'adresse IP ou nom d'hôte ne peut pas contenir d'espace."
 ],
 "The authenticity of host {{#strong}}{{host}}{{/strong}} can't be established. Are you sure you want to continue connecting?": [
  null,
  ""
 ],
 "The key of {{#strong}}{{host}}{{/strong}} does not match the key previously in use. Unless this machine was recently replaced, it is likely that someone is trying to attack your connection to this machine.": [
  null,
  ""
 ],
 "The machine is restarting": [
  null,
  "Cette machine redémarre"
 ],
 "The passwords do not match.": [
  null,
  "Les mots de passe ne correspondent pas."
 ],
 "There are currently no active pages": [
  null,
  ""
 ],
 "This machine has already been added.": [
  null,
  "Cette machine a été déjà été ajoutée."
 ],
 "This version of cockpit-ws does not support connecting to a host with an alternate user or port": [
  null,
  "Cette version de cockpit-ws ne prend pas en charge la connexion à un hôte avec un autre utilisateur ou un port différent"
 ],
 "Tip: Make your key password match your login password to automatically authenticate against other systems.": [
  null,
  ""
 ],
 "To try a different port you will need to upgrade cockpit-ws to a newer version.": [
  null,
  ""
 ],
 "Troubleshoot": [
  null,
  ""
 ],
 "Try to reconnect": [
  null,
  ""
 ],
 "Type": [
  null,
  "Type"
 ],
 "Type a password": [
  null,
  ""
 ],
 "Unexpected error": [
  null,
  "Erreur inattendue"
 ],
 "Unknown Host Key": [
  null,
  ""
 ],
 "Unlock Key": [
  null,
  ""
 ],
 "Unlocked": [
  null,
  ""
 ],
 "Update": [
  null,
  ""
 ],
 "Use the following keys to authenticate against other systems": [
  null,
  ""
 ],
 "User name": [
  null,
  ""
 ],
 "Using available credentials": [
  null,
  ""
 ],
 "Version": [
  null,
  "Version"
 ],
 "You are connected to {{#strong}}{{host}}{{/strong}}, however in order to synchronize users, a user with superuser privileges is required.": [
  null,
  ""
 ],
 "You can remove the previously stored key by running the following command": [
  null,
  ""
 ],
 "active": [
  null,
  ""
 ]
}));
