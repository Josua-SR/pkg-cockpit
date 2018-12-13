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
 "1 day": [
  null,
  "Un jour"
 ],
 "1 hour": [
  null,
  "1 heure"
 ],
 "1 week": [
  null,
  "1 semaine"
 ],
 "5 minutes": [
  null,
  "5 minutes"
 ],
 "6 hours": [
  null,
  "6 heures"
 ],
 "A compatible version of Cockpit is not installed on {{#strong}}{{host}}{{/strong}}.": [
  null,
  "Une version compatible de Cockpit n''est pas installée sur {{#strong}}{{host}}{{/strong}}."
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
  "Échec d'authentification"
 ],
 "Available": [
  null,
  "Disponible"
 ],
 "Avatar": [
  null,
  "Avatar"
 ],
 "CPU": [
  null,
  "CPU"
 ],
 "Cancel": [
  null,
  "Annuler"
 ],
 "Checking for public keys": [
  null,
  "Vérification des clés publiques"
 ],
 "Close": [
  null,
  "Fermer"
 ],
 "Cockpit could not contact the given host $0. Make sure it has ssh running on port $1, or specify another port in the address.": [
  null,
  "Le cockpit n'a pas pu contacter l'hôte donné $0 . Assurez-vous que SSH fonctionne sur le port $1 ou spécifiez un autre port dans l'adresse."
 ],
 "Cockpit is not installed": [
  null,
  "Cockpit n'est pas installé"
 ],
 "Cockpit was unable to contact {{#strong}}{{host}}{{/strong}}.": [
  null,
  "Cockpit n'a pas pu contacter {{#strong}}{{host}}{{/strong}}."
 ],
 "Cockpit was unable to log in to {{#strong}}{{host}}{{/strong}}. {{#can_sync}}You may want to try to {{#sync_link}}synchronize users{{/sync_link}}.{{/can_sync}} For more authentication options and troubleshooting support please upgrade cockpit-ws to a newer version.": [
  null,
  "Cockpit n'a pas pu se connecter à {{#strong}}{{host}}{{/ strong}}. {{#can_sync}} Vous pouvez essayer de {{#sync_link}} synchroniser les utilisateurs {{/ sync_link}}. {{/ can_sync}} Pour plus d'options d'authentification et de support de diagnostic de problèmes, mettez à niveau cockpit-ws vers une version plus récente."
 ],
 "Cockpit was unable to log into {{#strong}}{{host}}{{/strong}}.": [
  null,
  "Cockpit n'a pas pu se connecter à {{#strong}}{{host}}{{/ strong}}."
 ],
 "Cockpit was unable to log into {{#strong}}{{host}}{{/strong}}. To use this machine with cockpit you will need to enable one of the following authentication methods in the sshd config on {{#strong}}{{host}}{{/strong}}:": [
  null,
  "Cockpit n'a pas pu se connecter à {{#strong}}{{host}}{{/ strong}}. Pour utiliser cette machine avec cockpit, vous devrez activer l'une des méthodes d'authentification suivantes dans la configuration de sshd sur {{#strong}}{{host}}{{/ strong}} :"
 ],
 "Cockpit was unable to log into {{#strong}}{{host}}{{/strong}}. You can change your authentication credentials below. {{#can_sync}}You may prefer to {{#sync_link}}synchronize accounts and passwords{{/sync_link}}.{{/can_sync}}": [
  null,
  "Cockpit n'a pas pu se connecter à {{#strong}}{{host}}{{/ strong}}. Vous pouvez modifier vos informations d'authentification ci-dessous. {{#can_sync}} Vous pouvez préférer {{#sync_link}} synchroniser les comptes et les mots de passe {{/ sync_link}}.{{/ can_sync}}"
 ],
 "Color": [
  null,
  "Couleur"
 ],
 "Connect": [
  null,
  "Connecter"
 ],
 "Connecting simultaneously to more than {{ limit }} machines is unsupported.": [
  null,
  "La connexion simultanée à plus de {{limit}} machines n'est pas prise en charge."
 ],
 "Could not contact {{host}}": [
  null,
  "Impossible de contacter {{host}}"
 ],
 "Dashboard": [
  null,
  "Tableau de bord"
 ],
 "Disk I/O": [
  null,
  "E / S disque"
 ],
 "Edit Server": [
  null,
  "Modifier le serveur"
 ],
 "Enter IP address or host name": [
  null,
  "Saisir l'adresse IP ou le nom d'hôte"
 ],
 "Entering a different password here means you will need to retype it every time you reconnect to this machine": [
  null,
  "Saisir un mot de passe différent signifie que vous devrez le ressaisir à chaque fois que vous vous reconnectez à cette machine"
 ],
 "Error loading users: {{perm_failed}}": [
  null,
  "Erreur lors du chargement des utilisateurs: {{perm_failed}}"
 ],
 "Failed to add machine: $0": [
  null,
  "Impossible d'ajouter la machine: $0"
 ],
 "Failed to change password": [
  null,
  "Échec de la modification du mot de passe"
 ],
 "Failed to edit machine: $0": [
  null,
  "Échec de la modification de la machine: $0"
 ],
 "Fingerprint": [
  null,
  "Empreinte digitale"
 ],
 "Go to now": [
  null,
  "Aller à maintenant"
 ],
 "Host Name": [
  null,
  "Nom d'hôte"
 ],
 "In order to synchronize users, you need to log in to {{#strong}}{{host}}{{/strong}}.": [
  null,
  "Pour synchroniser les utilisateurs, vous devez vous connecter à {{#strong}}{{host}}{{/strong}}."
 ],
 "Incorrect Host Key": [
  null,
  "Clé hôte incorrecte"
 ],
 "Invalid file permissions": [
  null,
  "Les autorisations de fichier ne sont pas valides"
 ],
 "Is sshd running on a different port?": [
  null,
  "Sshd est-il en cours d'exécution sur un port différent ?"
 ],
 "Kerberos Based SSO": [
  null,
  "SSO basé sur Kerberos"
 ],
 "Kerberos Ticket": [
  null,
  "Ticket Kerberos"
 ],
 "Leave blank to connect to this machine as the currently logged in user. If you enter a different username, that user will always be used when connecting to this machine.": [
  null,
  "Laissez vide pour vous connecter à cette machine en tant qu'utilisateur actuellement connecté. Si vous saisissez un nom d'utilisateur différent, cet utilisateur sera toujours utilisé lors de la connexion à cette machine."
 ],
 "Leave blank to connect to this machine as the currently logged in user{{#default_user}} ({{default_user}}){{/default_user}}. If you enter a different username, that user will always be used connecting to this machine.": [
  null,
  "Laissez vide pour vous connecter à cette machine en tant qu'utilisateur actuellement connecté user{{#default_user}} ({{default_user}}){{/default_user}}.. Si vous saisissez un nom d'utilisateur différent, cet utilisateur sera toujours utilisé pour se connecter à cette machine."
 ],
 "Log In": [
  null,
  "Connexion"
 ],
 "Log in to {{host}}": [
  null,
  "Connectez-vous à {{host}}"
 ],
 "Login Password": [
  null,
  "Mot de passe"
 ],
 "Lost connection. Trying to reconnect": [
  null,
  "Connexion perdue. Essayer de se reconnecter"
 ],
 "Memory": [
  null,
  "Mémoire"
 ],
 "Network": [
  null,
  "Réseau"
 ],
 "New password was not accepted": [
  null,
  "Le nouveau mot de passe n'a pas été accepté"
 ],
 "No such file or directory": [
  null,
  "Aucun fichier ou répertoire de ce nom"
 ],
 "Not a valid private key": [
  null,
  "Clé privée non valide"
 ],
 "Off": [
  null,
  "De"
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
 "Password not accepted": [
  null,
  "Mot de passe non accepté"
 ],
 "Port": [
  null,
  "Port"
 ],
 "Prompting via ssh-add timed out": [
  null,
  "L'invite via ssh-add a expiré"
 ],
 "Prompting via ssh-keygen timed out": [
  null,
  "L'invite via ssh-keygen a expiré"
 ],
 "Public Key": [
  null,
  "Clé publique"
 ],
 "Select the users that you would like to be synchronized with {{#strong}}{{host}}{{/strong}}": [
  null,
  "Sélectionnez les utilisateurs que vous souhaitez synchroniser avec {{#strong}}{{host}}{{/strong}}"
 ],
 "Servers": [
  null,
  "Les serveurs"
 ],
 "Set": [
  null,
  "Ensemble"
 ],
 "Synchronize": [
  null,
  "Synchroniser"
 ],
 "Synchronize users": [
  null,
  "Synchroniser les utilisateurs"
 ],
 "The IP address or host name cannot contain whitespace.": [
  null,
  "L'adresse IP ou le nom d'hôte ne peut pas contenir d'espace."
 ],
 "The authenticity of host {{#strong}}{{host}}{{/strong}} can't be established. Are you sure you want to continue connecting?": [
  null,
  "L'authenticité de l'hôte {{#strong}}{{host}}{{/strong}} ne peut pas être établie. Êtes-vous sûr de vouloir continuer à vous connecter ?"
 ],
 "The key of {{#strong}}{{host}}{{/strong}} does not match the key previously in use. Unless this machine was recently replaced, it is likely that someone is trying to attack your connection to this machine.": [
  null,
  "La clé de {{#strong}}{{host}}{{/strong}} ne correspond pas à la clé précédemment utilisée. À moins que cette machine ait été récemment remplacée, il est probable que quelqu'un tente d'attaquer votre connexion à cette machine."
 ],
 "The passwords do not match.": [
  null,
  "Le mot de passe ne correspond pas."
 ],
 "This machine has already been added.": [
  null,
  "Cette machine a déjà été ajoutée."
 ],
 "This version of cockpit-ws does not support connecting to a host with an alternate user or port": [
  null,
  "Cette version de cockpit-ws ne prend pas en charge la connexion à un hôte avec un autre utilisateur ou port"
 ],
 "To try a different port you will need to upgrade cockpit-ws to a newer version.": [
  null,
  "Pour essayer un port différent, vous devrez mettre à niveau cockpit-ws à une version plus récente."
 ],
 "Type a password": [
  null,
  "Tapez un mot de passe"
 ],
 "Unknown Host Key": [
  null,
  "Clé d'hôte inconnue"
 ],
 "Update": [
  null,
  "Mise à jour"
 ],
 "User": [
  null,
  "Utilisateur"
 ],
 "User name": [
  null,
  "Nom d'utilisateur"
 ],
 "Using available credentials": [
  null,
  "Utilisation des informations d'identification disponibles"
 ],
 "You are connected to {{#strong}}{{host}}{{/strong}}, however in order to synchronize users, a user with superuser privileges is required.": [
  null,
  "Vous êtes connecté à {{#strong}}{{host}}{{/strong}}, mais pour synchroniser les utilisateurs, un utilisateur avec des privilèges de super-utilisateur est requis."
 ]
}));
