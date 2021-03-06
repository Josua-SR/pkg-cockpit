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
nplurals=2; plural=(n != 1);
return plural;
},
  "language": "ca",
  "x-generator": "Zanata 4.6.2"
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
 "Add key": [
  null,
  "Afegeix una clau"
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
  "Tanca les pàgines seleccionades"
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
  "Idioma de visualització"
 ],
 "Enter IP address or host name": [
  null,
  "Introduïu l'adreça IP o el nom d'amfitrió"
 ],
 "Entering a different password here means you will need to retype it every time you reconnect to this machine": [
  null,
  ""
 ],
 "Error loading users: {{perm_failed}}": [
  null,
  "Error en carregar els usuaris: {{perm_failed}}"
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
  "Ha fallat l'edició de la màquina: $0"
 ],
 "Fingerprint": [
  null,
  "Empremta"
 ],
 "Host": [
  null,
  "Amfitrió"
 ],
 "In order to synchronize users, you need to log in to {{#strong}}{{host}}{{/strong}}.": [
  null,
  "Per sincronitzar els usuaris, cal que inicieu la sessió a {{#strong}}{{host}}{{/strong}}."
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
 "Leave blank to connect to this machine as the currently logged in user{{#default_user}} ({{default_user}}){{/default_user}}. If you enter a different username, that user will always be used connecting to this machine.": [
  null,
  "Deixeu-ho en blanc per connectar a aquesta màquina amb l'usuari{{#default_user}} ({{default_user}}){{/default_user}}, que ha iniciat actualment la sessió. Si introduïu un altre nom d'usuari, sempre s'utilitzarà aquest usuari quan es connecti a aquesta màquina."
 ],
 "Licensed under:": [
  null,
  "Llicenciat sota:"
 ],
 "Log In": [
  null,
  "Inicia la sessió"
 ],
 "Log Out": [
  null,
  "Tanca la sessió"
 ],
 "Log in again": [
  null,
  "Torna a iniciar la sessió"
 ],
 "Log in to {{host}}": [
  null,
  "Inicia la sessió a {{host}}"
 ],
 "Login Password": [
  null,
  "Contrasenya d'inici de sessió"
 ],
 "Login has escalated admin privileges": [
  null,
  ""
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
  "D'acord"
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
 "Privileged": [
  null,
  ""
 ],
 "Project website": [
  null,
  "Lloc web del projecte"
 ],
 "Prompting via ssh-add timed out": [
  null,
  "Per mitjà del temps d'espera de ssh-add"
 ],
 "Prompting via ssh-keygen timed out": [
  null,
  "Per mitjà del temps d'espera de ssh-keygen"
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
  "Reutilitza la meva contrasenya per a les tasques privilegiades i per connectar a altres màquines"
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
  "Actualment no hi ha pàgines actives"
 ],
 "This machine has already been added.": [
  null,
  "La màquina ja ha estat afegida."
 ],
 "This version of cockpit-ws does not support connecting to a host with an alternate user or port": [
  null,
  "Aquesta versió de cockpit-ws no és compatible amb la connexió a un amfitrió amb un usuari o port alternatius"
 ],
 "Tip: Make your key password match your login password to automatically authenticate against other systems.": [
  null,
  "Consell: feu que la contrasenya de la clau coincideixi amb la vostra contrasenya d'inici de sessió per autenticar automàticament contra altres sistemes."
 ],
 "To try a different port you will need to upgrade cockpit-ws to a newer version.": [
  null,
  "Per provar un port diferent, haureu d'actualitzar cockpit-ws a una versió més recent."
 ],
 "Too many files found": [
  null,
  "S'han trobat massa fitxers"
 ],
 "Troubleshoot": [
  null,
  "Soluciona el problema"
 ],
 "Try to reconnect": [
  null,
  "Intenta tornar a connectar"
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
 "active": [
  null,
  "actiu"
 ]
}));
