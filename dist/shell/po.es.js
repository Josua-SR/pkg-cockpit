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
  "language": "es",
  "x-generator": "Zanata 3.9.6"
 },
 "A compatible version of Cockpit is not installed on {{#strong}}{{host}}{{/strong}}.": [
  null,
  "Una versión compatible de Cockpit no está instalada en {{#strong}}{{host}}{{/strong}}."
 ],
 "About Cockpit": [
  null,
  "Acerca de Cockpit"
 ],
 "Account Settings": [
  null,
  "Configuración de la cuenta"
 ],
 "Add": [
  null,
  "Agregar"
 ],
 "Add Machine to Dashboard": [
  null,
  "Agregar Máquina al Tablero de Mandos"
 ],
 "Address": [
  null,
  "Dirección"
 ],
 "Authentication": [
  null,
  "Autenticación"
 ],
 "Authentication Failed": [
  null,
  "Autenticación fallida"
 ],
 "Available": [
  null,
  "Disponible"
 ],
 "Cancel": [
  null,
  "Cancelar"
 ],
 "Cannot connect to an unknown machine": [
  null,
  "No se puede conectar a una máquina desconocida"
 ],
 "Change Password": [
  null,
  "Cambie la Contraseña"
 ],
 "Checking for public keys": [
  null,
  "Chequeando llaves públicas"
 ],
 "Choose the language to be used in the application": [
  null,
  "Seleccione el idioma del idioma a utilizar en la aplicación"
 ],
 "Close": [
  null,
  "Cerrar"
 ],
 "Cockpit could not contact the given host $0. Make sure it has ssh running on port $1, or specify another port in the address.": [
  null,
  "Cockpit no pudo contactar al servidor $0. Asegúrese que el servidor esta corriendo ssh en el puerto $1, o especifique otro puerto en la dirección."
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
  "Cockpit no esta instalado"
 ],
 "Cockpit was unable to contact {{#strong}}{{host}}{{/strong}}.": [
  null,
  "Cockpit no fue capaz de contactar {{#strong}}{{host}}{{/strong}}."
 ],
 "Cockpit was unable to log in to {{#strong}}{{host}}{{/strong}}. {{#can_sync}}You may want to try to {{#sync_link}}synchronize users{{/sync_link}}.{{/can_sync}} For more authentication options and troubleshooting support please upgrade cockpit-ws to a newer version.": [
  null,
  ""
 ],
 "Cockpit was unable to log into {{#strong}}{{host}}{{/strong}}.": [
  null,
  "Cockpit fue incapaz de iniciar session en {{#strong}}{{host}}{{/strong}}."
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
  "Comentario"
 ],
 "Confirm": [
  null,
  "Confirmar"
 ],
 "Connect": [
  null,
  "Conectar"
 ],
 "Connecting simultaneously to more than {{ limit }} machines is unsupported.": [
  null,
  "Conectarse simultáneamente a más de {{ limit }} máquinas no está soportado."
 ],
 "Connecting to the machine": [
  null,
  "Conectándose a la máquina"
 ],
 "Could not contact {{host}}": [
  null,
  "No se puedo contactar {{host}}"
 ],
 "Couldn't connect to the machine": [
  null,
  "No se pudo conectar a la máquina"
 ],
 "Details": [
  null,
  "Detalles"
 ],
 "Disconnected": [
  null,
  "Desconectado"
 ],
 "Display Language": [
  null,
  "Mostrar Idioma"
 ],
 "Enter IP address or host name": [
  null,
  "Ingrese la dirección IP o el nombre del host"
 ],
 "Entering a different password here means you will need to retype it every time you reconnect to this machine": [
  null,
  ""
 ],
 "Error loading users: {{perm_failed}}": [
  null,
  "Error cargando usuarios: {{perm_failed}}"
 ],
 "Failed to add machine: $0": [
  null,
  "Fallo al agregar maquina: $0"
 ],
 "Failed to change password": [
  null,
  "Error al cambiar contraseña"
 ],
 "Failed to edit machine: $0": [
  null,
  "Fallo al editar maquina: $0"
 ],
 "Fingerprint": [
  null,
  "Fingerprint"
 ],
 "In order to synchronize users, you need to log in to {{#strong}}{{host}}{{/strong}}.": [
  null,
  ""
 ],
 "Incorrect Host Key": [
  null,
  "Llave de Host Incorrecta"
 ],
 "Invalid file permissions": [
  null,
  "Permisos de archivo invalidos"
 ],
 "Is sshd running on a different port?": [
  null,
  "¿sshd está corriendo en un puerto diferente?"
 ],
 "Kerberos Based SSO": [
  null,
  "SSO Basado en Kerberos"
 ],
 "Kerberos Ticket": [
  null,
  "Tiquete Kerberos"
 ],
 "Leave blank to connect to this machine as the currently logged in user{{#user}} ({{user}}){{/user}}. If you enter a different username, that user will always be used connecting to this machine.": [
  null,
  ""
 ],
 "Licensed under:": [
  null,
  ""
 ],
 "Log In": [
  null,
  "Iniciar sesión"
 ],
 "Log in again": [
  null,
  ""
 ],
 "Log in to {{host}}": [
  null,
  "Iniciar sesión en {{host}}"
 ],
 "Log out": [
  null,
  "Cerrar sesión"
 ],
 "Login Password": [
  null,
  "Contraseña de inicio de sesión"
 ],
 "Machines": [
  null,
  "Maquinas"
 ],
 "New Password": [
  null,
  "Nueva contraseña"
 ],
 "New password was not accepted": [
  null,
  "Nueva contraseña no fue aceptada"
 ],
 "No such file or directory": [
  null,
  "No existe el archivo o directorio"
 ],
 "Not a valid private key": [
  null,
  "No es llave privada valida."
 ],
 "Off": [
  null,
  "Apagado"
 ],
 "Old Password": [
  null,
  "Contraseña vieja"
 ],
 "Old password not accepted": [
  null,
  "Contraseña antigua no aceptada"
 ],
 "On": [
  null,
  "Encencido"
 ],
 "Ooops!": [
  null,
  "Ooops!"
 ],
 "Password": [
  null,
  "Contraseña"
 ],
 "Password not accepted": [
  null,
  "Contraseña no aceptada"
 ],
 "Port": [
  null,
  "Puerto"
 ],
 "Project website": [
  null,
  ""
 ],
 "Prompting via ssh-add timed out": [
  null,
  "Expiro el tiempo de espera vía ssh."
 ],
 "Prompting via ssh-keygen timed out": [
  null,
  "Iniciando a través de ssh-keygen tiempo de espera agotado"
 ],
 "Public Key": [
  null,
  "Llave pública"
 ],
 "Reconnect": [
  null,
  "Reconectarse"
 ],
 "Select": [
  null,
  ""
 ],
 "Select the users that you would like to be synchronized with {{#strong}}{{host}}{{/strong}}": [
  null,
  "Seleccione el usuario con el que le gustaría sincronizar  {{#strong}}{{host}}{{/strong}}"
 ],
 "Synchronize": [
  null,
  "Sincronizar"
 ],
 "Synchronize users": [
  null,
  "Sincronizar usuarios"
 ],
 "The IP address or host name cannot contain whitespace.": [
  null,
  "La dirección IP o el nombre de dominio no puede tener espacios en blanco"
 ],
 "The authenticity of host {{#strong}}{{host}}{{/strong}} can't be established. Are you sure you want to continue connecting?": [
  null,
  "La autenticidad del host {{#strong}}{{host}}{{/strong}} no se ha podido establecer.¿Está seguro que desea continuar con la conexión?"
 ],
 "The key of {{#strong}}{{host}}{{/strong}} does not match the key previously in use. Unless this machine was recently replaced, it is likely that someone is trying to attack your connection to this machine.": [
  null,
  "La llave de {{#strong}}{{host}}{{/strong}} no coincide con la llave que se ha usado previamente. A menos que esta máquina haya sido reemplazada recientemente, es posible que alguien este tratando de atacar tu conexión a esta máquina."
 ],
 "The machine is restarting": [
  null,
  "La máquina se está reiniciando"
 ],
 "The passwords do not match.": [
  null,
  "Las contraseñas no coinciden."
 ],
 "This machine has already been added.": [
  null,
  "Esta maquina ya ha sido agregada"
 ],
 "This version of cockpit-ws does not support connecting to a host with an alternate user or port": [
  null,
  "Esta versión de cockpit-ws no soporta conexiones a un servidor con un usuario o puerto alterno"
 ],
 "Tip: Make your key password match your login password to automatically authenticate against other systems.": [
  null,
  "Use la siguiente llave para autenticarse en otros sistemas"
 ],
 "To try a different port you will need to upgrade cockpit-ws to a newer version.": [
  null,
  "Para tratar un puerto diferente usted va a necesitar actualizar cockpit-ws a una nueva versión."
 ],
 "Tools": [
  null,
  ""
 ],
 "Troubleshoot": [
  null,
  "Soporte"
 ],
 "Try to reconnect": [
  null,
  ""
 ],
 "Type": [
  null,
  "Tipo"
 ],
 "Type a password": [
  null,
  "Introduzca una contraseña"
 ],
 "Unexpected error": [
  null,
  "Error inesperado"
 ],
 "Unknown Host Key": [
  null,
  "Host Key desconocido"
 ],
 "Unlock Key": [
  null,
  "Llave de Desbloqueo"
 ],
 "Update": [
  null,
  "Actualizar"
 ],
 "Use my password for privileged tasks and to connect to other machines": [
  null,
  "Utiliza mi contraseña para tareas privilegiadas y para conectarse a otras máquinas"
 ],
 "Use the following keys to authenticate against other systems": [
  null,
  "Use la siguiente llave para autenticarse en otros sistemas"
 ],
 "User name": [
  null,
  "Nombre de usuario"
 ],
 "Using available credentials": [
  null,
  "Usando credenciales disponibles"
 ],
 "Version": [
  null,
  "Versión"
 ],
 "You are connected to {{#strong}}{{host}}{{/strong}}, however in order to synchronize users, a user with superuser privileges is required.": [
  null,
  "Usted esta conectado a {{#strong}}{{host}}{{/strong}}, sin embargo para sincronizar usuarios, es requerido un usuario con privilegios de súper usuario."
 ],
 "You can remove the previously stored key by running the following command": [
  null,
  "Usted puede remover la llave almacenada previamente al correr el siguiente comando"
 ]
}));
