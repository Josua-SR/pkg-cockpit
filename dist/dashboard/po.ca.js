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
  "x-generator": "Zanata 4.6.2"
 },
 "$0 day": [
  "$0 days",
  "$0 dia",
  "$0 dies"
 ],
 "$0 hour": [
  "$0 hours",
  "$0 hora",
  "$0 hores"
 ],
 "$0 minute": [
  "$0 minutes",
  "$0 minut",
  "$0 minuts"
 ],
 "$0 month": [
  "$0 months",
  "$0 mes",
  "$0 mesos"
 ],
 "$0 week": [
  "$0 weeks",
  "$0 setmana",
  "$0 setmanes"
 ],
 "$0 year": [
  "$0 years",
  "$0 any",
  "$0 anys"
 ],
 "1 day": [
  null,
  "1 dia"
 ],
 "1 hour": [
  null,
  "1 hora"
 ],
 "1 week": [
  null,
  "1 setmana"
 ],
 "5 minutes": [
  null,
  "5 minuts"
 ],
 "6 hours": [
  null,
  "6 hores"
 ],
 "A compatible version of Cockpit is not installed on {{#strong}}{{host}}{{/strong}}.": [
  null,
  "Una versió compatible de Cockpit no està instal·lada a {{#strong}}{{host}}{{/strong}}."
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
 "Advanced TCA": [
  null,
  ""
 ],
 "All In One": [
  null,
  "Tot en un"
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
 "Avatar": [
  null,
  "Avatar"
 ],
 "Blade": [
  null,
  ""
 ],
 "Blade enclosure": [
  null,
  ""
 ],
 "Bus Expansion Chassis": [
  null,
  ""
 ],
 "CPU": [
  null,
  "CPU"
 ],
 "Can't load image": [
  null,
  "No es pot carregar la imatge"
 ],
 "Cancel": [
  null,
  "Cancel·la"
 ],
 "Checking for public keys": [
  null,
  "S'està comprovant si hi ha claus públiques"
 ],
 "Close": [
  null,
  "Tanca"
 ],
 "Cockpit could not contact the given host $0. Make sure it has ssh running on port $1, or specify another port in the address.": [
  null,
  ""
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
 "Compact PCI": [
  null,
  "PCI compacte"
 ],
 "Connect": [
  null,
  "Connecta"
 ],
 "Connecting simultaneously to more than {{ limit }} machines is unsupported.": [
  null,
  ""
 ],
 "Connection Error": [
  null,
  "Error de connexió"
 ],
 "Convertible": [
  null,
  "Convertible"
 ],
 "Could not contact {{host}}": [
  null,
  "No s'ha pogut contactar amb {{host}}"
 ],
 "Dashboard": [
  null,
  "Tauler de control"
 ],
 "Desktop": [
  null,
  "Escriptori"
 ],
 "Detachable": [
  null,
  ""
 ],
 "Disk I/O": [
  null,
  "E/S de disc"
 ],
 "Docking Station": [
  null,
  ""
 ],
 "Edit Server": [
  null,
  "Edit el servidor"
 ],
 "Embedded PC": [
  null,
  ""
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
 "Expansion Chassis": [
  null,
  ""
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
 "Go to now": [
  null,
  "Vés a ara"
 ],
 "Hand Held": [
  null,
  ""
 ],
 "Host Name": [
  null,
  "Nom d'amfitrió"
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
 "IoT Gateway": [
  null,
  ""
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
 "Laptop": [
  null,
  ""
 ],
 "Leave blank to connect to this machine as the currently logged in user. If you enter a different username, that user will always be used when connecting to this machine.": [
  null,
  "Deixeu-ho en blanc per connectar a aquesta màquina amb l'usuari que ha iniciat la sessió actualment. Si introduïu un altre nom d'usuari, sempre s'utilitzarà aquest usuari quan es connecti a aquesta màquina."
 ],
 "Leave blank to connect to this machine as the currently logged in user{{#default_user}} ({{default_user}}){{/default_user}}. If you enter a different username, that user will always be used connecting to this machine.": [
  null,
  "Deixeu-ho en blanc per connectar a aquesta màquina amb l'usuari{{#default_user}} ({{default_user}}){{/default_user}}, que ha iniciat actualment la sessió. Si introduïu un altre nom d'usuari, sempre s'utilitzarà aquest usuari quan es connecti a aquesta màquina."
 ],
 "Log In": [
  null,
  "Inicia la sessió"
 ],
 "Log in to {{host}}": [
  null,
  "Inicia la sessió a {{host}}"
 ],
 "Login Password": [
  null,
  "Contrasenya d'inici de sessió"
 ],
 "Lost connection. Trying to reconnect": [
  null,
  "S'ha perdut la connexió. S'intenta connectar de nou"
 ],
 "Low Profile Desktop": [
  null,
  ""
 ],
 "Lunch Box": [
  null,
  ""
 ],
 "Main Server Chassis": [
  null,
  ""
 ],
 "Memory": [
  null,
  "Memòria"
 ],
 "Mini PC": [
  null,
  "Mini PC"
 ],
 "Mini Tower": [
  null,
  "Mini torre"
 ],
 "Multi-system Chassis": [
  null,
  ""
 ],
 "Network": [
  null,
  "Xarxa"
 ],
 "New password was not accepted": [
  null,
  "No s'ha acceptat la nova contrasenya"
 ],
 "No such file or directory": [
  null,
  "No existeix el fitxer o el directori"
 ],
 "Not a valid private key": [
  null,
  "No és una clau privada vàlida"
 ],
 "Notebook": [
  null,
  ""
 ],
 "Off": [
  null,
  "Off"
 ],
 "Old password not accepted": [
  null,
  "Contrasenya antiga no acceptada"
 ],
 "On": [
  null,
  "On"
 ],
 "Other": [
  null,
  "Altres"
 ],
 "Password": [
  null,
  "Contrasenya"
 ],
 "Password not accepted": [
  null,
  "Contrasenya no acceptada"
 ],
 "Peripheral Chassis": [
  null,
  ""
 ],
 "Pizza Box": [
  null,
  ""
 ],
 "Port": [
  null,
  "Port"
 ],
 "Portable": [
  null,
  "Portable"
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
 "RAID Chassis": [
  null,
  ""
 ],
 "Rack Mount Chassis": [
  null,
  ""
 ],
 "Sealed-case PC": [
  null,
  ""
 ],
 "Select the users that you would like to be synchronized with {{#strong}}{{host}}{{/strong}}": [
  null,
  "Seleccioneu els usuaris que vulgueu que estiguin sincronitzats amb {{#strong}}{{host}}{{/strong}}"
 ],
 "Servers": [
  null,
  "Servidors"
 ],
 "Set": [
  null,
  "Estableix"
 ],
 "Space-saving Computer": [
  null,
  ""
 ],
 "Stick PC": [
  null,
  ""
 ],
 "Sub Chassis": [
  null,
  ""
 ],
 "Sub Notebook": [
  null,
  ""
 ],
 "Synchronize": [
  null,
  "Sincronitza"
 ],
 "Synchronize users": [
  null,
  "Sincronitza els usuaris"
 ],
 "Tablet": [
  null,
  "Tauleta"
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
 "The passwords do not match.": [
  null,
  "Les contrasenyes no coincideixen."
 ],
 "The user <b>$0</b> is not permitted to manage servers": [
  null,
  "A l'usuari <b>$0</b> no se li permet gestionar els servidors"
 ],
 "This machine has already been added.": [
  null,
  "La màquina ja ha estat afegida."
 ],
 "This version of cockpit-ws does not support connecting to a host with an alternate user or port": [
  null,
  "Aquesta versió de cockpit-ws no és compatible amb la connexió a un amfitrió amb un usuari o port alternatius"
 ],
 "To try a different port you will need to upgrade cockpit-ws to a newer version.": [
  null,
  "Per provar un port diferent, haureu d'actualitzar cockpit-ws a una versió més recent."
 ],
 "Tower": [
  null,
  "Torre"
 ],
 "Type a password": [
  null,
  "Teclegeu una contrasenya"
 ],
 "Unknown": [
  null,
  "Desconegut"
 ],
 "Unknown Host Key": [
  null,
  "Clau desconeguda d'amfitrió"
 ],
 "Update": [
  null,
  "Actualitza"
 ],
 "User": [
  null,
  "Usuari"
 ],
 "User name": [
  null,
  "Nom d'usuari"
 ],
 "Using available credentials": [
  null,
  "S'estan utilitzant les credencials disponibles"
 ],
 "You are connected to {{#strong}}{{host}}{{/strong}}, however in order to synchronize users, a user with superuser privileges is required.": [
  null,
  ""
 ],
 "You are currently connected directly to this server. You cannot delete it.": [
  null,
  "Actualment esteu connectat directament a aquest servidor. No el podeu suprimir."
 ],
 "You can remove the previously stored key by running the following command": [
  null,
  "Podeu suprimir la clau prèviament emmagatzemada amb l'execució de la següent ordre"
 ]
}));
