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
nplurals=2; plural=(n != 1);
return plural;
},
  "language": "ca",
  "x-generator": "Zanata 3.9.6"
 },
 "A compatible version of Cockpit is not installed on {{#strong}}{{host}}{{/strong}}.": [
  null,
  "Una versió compatible de Cockpit no està instal·lada a {{#strong}}{{host}}{{/strong}}."
 ],
 "About Cockpit": [
  null,
  "Quant a Cockpit"
 ],
 "Account Settings": [
  null,
  "Ajusts dels comptes"
 ],
 "Active Pages": [
  null,
  "Pàgines actives"
 ],
 "Add": [
  null,
  "Afegeix"
 ],
 "Add Machine to Dashboard": [
  null,
  "Afegeix la màquina al tauler de control"
 ],
 "Address": [
  null,
  "Adreça"
 ],
 "Authentication": [
  null,
  "Autenticació"
 ],
 "Authentication Failed": [
  null,
  "L'autenticació ha fallat"
 ],
 "Available": [
  null,
  "Disponible"
 ],
 "Cancel": [
  null,
  "Cancel·la"
 ],
 "Cannot connect to an unknown machine": [
  null,
  "No es pot connectar a una màquina desconeguda"
 ],
 "Change Password": [
  null,
  "Canvia la contrasenya"
 ],
 "Checking for public keys": [
  null,
  "S'està comprovant si hi ha claus públiques"
 ],
 "Choose the language to be used in the application": [
  null,
  "Seleccioneu l'idioma per utilitzar amb l'aplicació"
 ],
 "Close": [
  null,
  "Tanca"
 ],
 "Close Selected Pages": [
  null,
  ""
 ],
 "Cockpit could not contact the given host $0. Make sure it has ssh running on port $1, or specify another port in the address.": [
  null,
  ""
 ],
 "Cockpit had an unexpected internal error. <br/><br/>You can try restarting Cockpit by pressing refresh in your browser. The javascript console contains details about this error (<b>Ctrl-Shift-J</b> in most browsers).": [
  null,
  ""
 ],
 "Cockpit is an interactive Linux server admin interface.": [
  null,
  "Cockpit és una interfície interactiva d'administració del servidor Linux."
 ],
 "Cockpit is an interactive Linux server admin interface. ": [
  null,
  "Cockpit és una interfície interactiva d'administració del servidor Linux."
 ],
 "Cockpit is not installed": [
  null,
  "Cockpit no està instal·lat"
 ],
 "Cockpit was unable to contact {{#strong}}{{host}}{{/strong}}.": [
  null,
  "Cockpit no ha pogut contactar amb {{#strong}}{{host}}{{/strong}}."
 ],
 "Cockpit was unable to log in to {{#strong}}{{host}}{{/strong}}. {{#can_sync}}You may want to try to {{#sync_link}}synchronize users{{/sync_link}}.{{/can_sync}} For more authentication options and troubleshooting support please upgrade cockpit-ws to a newer version.": [
  null,
  ""
 ],
 "Cockpit was unable to log into {{#strong}}{{host}}{{/strong}}.": [
  null,
  "Cockpit no ha pogut iniciar la sessió a {{#strong}}{{host}}{{/strong}}."
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
  "Color"
 ],
 "Comment": [
  null,
  "Comentari"
 ],
 "Confirm": [
  null,
  "Confirmació"
 ],
 "Connect": [
  null,
  "Connecta"
 ],
 "Connecting simultaneously to more than {{ limit }} machines is unsupported.": [
  null,
  ""
 ],
 "Connecting to the machine": [
  null,
  "S'està connectant a la màquina"
 ],
 "Could not contact {{host}}": [
  null,
  "No s'ha pogut contactar amb {{host}}"
 ],
 "Couldn't connect to the machine": [
  null,
  "No s'ha pogut connectar a la màquina"
 ],
 "Details": [
  null,
  "Detalls"
 ],
 "Disconnected": [
  null,
  "Desconnectat"
 ],
 "Display Language": [
  null,
  "Idioma de la visualització"
 ],
 "Enter IP address or host name": [
  null,
  "Introduïu l'adreça IP o el nom de l'amfitrió"
 ],
 "Entering a different password here means you will need to retype it every time you reconnect to this machine": [
  null,
  ""
 ],
 "Error loading users: {{perm_failed}}": [
  null,
  "S'ha produït un error en carregar els usuaris: {{perm_failed}}"
 ],
 "Failed to add machine: $0": [
  null,
  "No s'ha pogut afegir la màquina: $0"
 ],
 "Failed to change password": [
  null,
  "Ha fallat el canvi de contrasenya"
 ],
 "Failed to edit machine: $0": [
  null,
  "No s'ha pogut editar la màquina: $0"
 ],
 "Fingerprint": [
  null,
  "Empremta"
 ],
 "In order to synchronize users, you need to log in to {{#strong}}{{host}}{{/strong}}.": [
  null,
  ""
 ],
 "Incorrect Host Key": [
  null,
  "Clau d'amfitrió incorrecta"
 ],
 "Invalid file permissions": [
  null,
  "Permisos de fitxer no vàlids"
 ],
 "Is sshd running on a different port?": [
  null,
  "S'està executant sshd en un port diferent?"
 ],
 "Kerberos Based SSO": [
  null,
  ""
 ],
 "Kerberos Ticket": [
  null,
  "Tiquet de Kerberos"
 ],
 "Leave blank to connect to this machine as the currently logged in user{{#user}} ({{user}}){{/user}}. If you enter a different username, that user will always be used connecting to this machine.": [
  null,
  ""
 ],
 "Licensed under:": [
  null,
  "Llicenciat sota:"
 ],
 "Lock to prevent privileged tasks": [
  null,
  ""
 ],
 "Locked": [
  null,
  "Bloquejat"
 ],
 "Log In": [
  null,
  "Inici de la sessió"
 ],
 "Log Out": [
  null,
  "Tanca la sessió"
 ],
 "Log in again": [
  null,
  ""
 ],
 "Log in to {{host}}": [
  null,
  "Inicia la sessió a {{host}}"
 ],
 "Login Password": [
  null,
  "Contrasenya d'inici de sessió"
 ],
 "Machines": [
  null,
  "Màquines"
 ],
 "New Password": [
  null,
  "Contrasenya nova"
 ],
 "New password was not accepted": [
  null,
  "No s'ha acceptat la nova contrasenya"
 ],
 "No matching files found": [
  null,
  "No s'ha trobat cap fitxer que coincideixi"
 ],
 "No such file or directory": [
  null,
  "No existeix el fitxer o el directori"
 ],
 "Not a valid private key": [
  null,
  "No és una clau privada vàlida"
 ],
 "Off": [
  null,
  "Off"
 ],
 "Ok": [
  null,
  ""
 ],
 "Old Password": [
  null,
  "Contrasenya antiga"
 ],
 "Old password not accepted": [
  null,
  "Contrasenya antiga no acceptada"
 ],
 "On": [
  null,
  "On"
 ],
 "Ooops!": [
  null,
  "Ooops!"
 ],
 "Password": [
  null,
  "Contrasenya"
 ],
 "Password not accepted": [
  null,
  "Contrasenya no acceptada"
 ],
 "Password not usable for privileged tasks or to connect to other machines": [
  null,
  ""
 ],
 "Path to file": [
  null,
  "Camí al fitxer"
 ],
 "Port": [
  null,
  "Port"
 ],
 "Privileged tasks not available": [
  null,
  ""
 ],
 "Project website": [
  null,
  "Lloc web del projecte"
 ],
 "Prompting via ssh-add timed out": [
  null,
  ""
 ],
 "Prompting via ssh-keygen timed out": [
  null,
  ""
 ],
 "Public Key": [
  null,
  "Clau pública"
 ],
 "Reconnect": [
  null,
  "Torna a connectar"
 ],
 "Reuse my password for privileged tasks and to connect to other machines": [
  null,
  "Torna a utilitzar la meva contrasenya per a tasques privilegiades i connecta't a altres màquines"
 ],
 "Select": [
  null,
  "Selecciona"
 ],
 "Select the users that you would like to be synchronized with {{#strong}}{{host}}{{/strong}}": [
  null,
  "Seleccioneu els usuaris que vulgueu que estiguin sincronitzats amb {{#strong}}{{host}}{{/strong}}"
 ],
 "Synchronize": [
  null,
  "Sincronitza"
 ],
 "Synchronize users": [
  null,
  "Sincronitza els usuaris"
 ],
 "The IP address or host name cannot contain whitespace.": [
  null,
  "L'adreça IP o el nom d'amfitrió no poden contenir espais en blanc."
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
  "La màquina s'està reiniciant"
 ],
 "The passwords do not match.": [
  null,
  "Les contrasenyes no coincideixen."
 ],
 "There are currently no active pages": [
  null,
  ""
 ],
 "This machine has already been added.": [
  null,
  "La màquina ja ha estat afegida."
 ],
 "This version of cockpit-ws does not support connecting to a host with an alternate user or port": [
  null,
  "Aquesta versió decockpit-ws no és compatible amb la connexió a un amfitrió amb un usuari o port alternatius"
 ],
 "Tip: Make your key password match your login password to automatically authenticate against other systems.": [
  null,
  ""
 ],
 "To try a different port you will need to upgrade cockpit-ws to a newer version.": [
  null,
  ""
 ],
 "Too many files found": [
  null,
  ""
 ],
 "Troubleshoot": [
  null,
  "Soluciona el problema"
 ],
 "Try to reconnect": [
  null,
  ""
 ],
 "Type": [
  null,
  "Tipus"
 ],
 "Type a password": [
  null,
  "Teclegeu una contrasenya"
 ],
 "Unexpected error": [
  null,
  "Error inesperat"
 ],
 "Unknown Host Key": [
  null,
  "Clau desconeguda d'amfitrió"
 ],
 "Unlock Key": [
  null,
  "Clau de desbloqueig"
 ],
 "Unlocked": [
  null,
  "Desbloquejat"
 ],
 "Update": [
  null,
  "Actualitza"
 ],
 "Use the following keys to authenticate against other systems": [
  null,
  "Utilitza les següents claus per autenticar contra altres sistemes"
 ],
 "User name": [
  null,
  "Nom d'usuari"
 ],
 "Using available credentials": [
  null,
  "S'estan utilitzant les credencials disponibles"
 ],
 "Version": [
  null,
  "Versió"
 ],
 "You are connected to {{#strong}}{{host}}{{/strong}}, however in order to synchronize users, a user with superuser privileges is required.": [
  null,
  ""
 ],
 "You can remove the previously stored key by running the following command": [
  null,
  "Podeu suprimir la clau prèviament emmagatzemada amb l'execució de la següent ordre"
 ],
 "active": [
  null,
  "actiu"
 ]
}));
