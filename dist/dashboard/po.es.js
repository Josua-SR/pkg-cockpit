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
 "$0 day": [
  "$0 days",
  "$0 día",
  "$0 días"
 ],
 "$0 hour": [
  "$0 hours",
  "$0 horas",
  "$0 horas"
 ],
 "$0 minute": [
  "$0 minutes",
  "$0 minuto",
  "$0 minutos"
 ],
 "$0 month": [
  "$0 months",
  "$0 mes",
  "$0 meses"
 ],
 "$0 week": [
  "$0 weeks",
  "$0 semana",
  "$0 semanas"
 ],
 "$0 year": [
  "$0 years",
  "$0 año",
  "$0 años"
 ],
 "1 day": [
  null,
  "1 día"
 ],
 "1 hour": [
  null,
  "1 hora"
 ],
 "1 week": [
  null,
  "1 semana"
 ],
 "5 minutes": [
  null,
  "5 minutos"
 ],
 "6 hours": [
  null,
  "6 horas"
 ],
 "A compatible version of Cockpit is not installed on {{#strong}}{{host}}{{/strong}}.": [
  null,
  "No se ha instalado una versión compatible de Cockpit en {{#strong}}{{host}}{{/strong}}."
 ],
 "Add": [
  null,
  "Añadir"
 ],
 "Add Machine to Dashboard": [
  null,
  "Añadir máquina al tablero"
 ],
 "Address": [
  null,
  "Dirección"
 ],
 "Advanced TCA": [
  null,
  "TCA avanzado"
 ],
 "All In One": [
  null,
  "Todo En Uno"
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
 "Avatar": [
  null,
  "Avatar"
 ],
 "Blade": [
  null,
  "Espada"
 ],
 "Blade enclosure": [
  null,
  "Recinto de la espada"
 ],
 "Bus Expansion Chassis": [
  null,
  "Chasis de Expansión de Bus"
 ],
 "CPU": [
  null,
  "CPU"
 ],
 "Can't load image": [
  null,
  "No puede cargar imagen"
 ],
 "Cancel": [
  null,
  "Cancelar"
 ],
 "Checking for public keys": [
  null,
  "Chequeando llaves públicas"
 ],
 "Close": [
  null,
  "Cerrar"
 ],
 "Cockpit could not contact the given host $0. Make sure it has ssh running on port $1, or specify another port in the address.": [
  null,
  "Cockpit no pudo contactar al servidor $0. Asegúrese que el servidor esta corriendo ssh en el puerto $1, o especifique otro puerto en la dirección."
 ],
 "Cockpit is not installed": [
  null,
  "Cockpit no está instalado"
 ],
 "Cockpit was unable to contact {{#strong}}{{host}}{{/strong}}.": [
  null,
  "Cockpit no pudo ponerse en contacto con {{#strong}}{{host}}{{/strong}}."
 ],
 "Cockpit was unable to log in to {{#strong}}{{host}}{{/strong}}. {{#can_sync}}You may want to try to {{#sync_link}}synchronize users{{/sync_link}}.{{/can_sync}} For more authentication options and troubleshooting support please upgrade cockpit-ws to a newer version.": [
  null,
  "Cockpit no pudo ingresar en {{#strong}}{{host}}{{/strong}}. {{#can_sync}}Puede que desee probar a {{#sync_link}}sincronizar usuarios{{/sync_link}}.{{/can_sync}} Para obtener más opciones de autenticación y asistencia para solucionar problemas, actualice cockpit-ws a una versión más reciente."
 ],
 "Cockpit was unable to log into {{#strong}}{{host}}{{/strong}}.": [
  null,
  "Cockpit no pudo ingresar en {{#strong}}{{host}}{{/strong}}."
 ],
 "Cockpit was unable to log into {{#strong}}{{host}}{{/strong}}. To use this machine with cockpit you will need to enable one of the following authentication methods in the sshd config on {{#strong}}{{host}}{{/strong}}:": [
  null,
  "Cockpit no pudo ingresar en {{#strong}}{{host}}{{/strong}}. Para usar está máquina con Cockpit, necesitará activar uno de los métodos de autenticación siguientes en la configuración de sshd {{#strong}}{{host}}{{/strong}}:"
 ],
 "Cockpit was unable to log into {{#strong}}{{host}}{{/strong}}. You can change your authentication credentials below. {{#can_sync}}You may prefer to {{#sync_link}}synchronize accounts and passwords{{/sync_link}}.{{/can_sync}}": [
  null,
  "Cockpit no pudo ingresar en {{#strong}}{{host}}{{/strong}}. Puede cambiar sus credenciales de autenticación más abajo. {{#can_sync}}Puede que desee {{#sync_link}}sincronizar cuentas y contraseñas{{/sync_link}}.{{/can_sync}}"
 ],
 "Color": [
  null,
  "Color"
 ],
 "Compact PCI": [
  null,
  "PCI Compacto"
 ],
 "Connect": [
  null,
  "Conectar"
 ],
 "Connecting simultaneously to more than {{ limit }} machines is unsupported.": [
  null,
  "Conectarse simultáneamente a más de {{ limit }} máquinas no está soportado."
 ],
 "Convertible": [
  null,
  "Convertible"
 ],
 "Could not contact {{host}}": [
  null,
  "No se puedo contactar {{host}}"
 ],
 "Dashboard": [
  null,
  "Tablero"
 ],
 "Desktop": [
  null,
  "Escritorio"
 ],
 "Detachable": [
  null,
  "Desmontable"
 ],
 "Disk I/O": [
  null,
  "Disco I/O"
 ],
 "Docking Station": [
  null,
  "Estación de Acoplamiento"
 ],
 "Edit Server": [
  null,
  "Editar Servidor"
 ],
 "Embedded PC": [
  null,
  ""
 ],
 "Enter IP address or host name": [
  null,
  "Ingrese la dirección IP o el nombre del host"
 ],
 "Entering a different password here means you will need to retype it every time you reconnect to this machine": [
  null,
  "Introducir una contraseña diferente aquí significa que necesitará volver a teclear cada vez que vuelva a esa máquina"
 ],
 "Error loading users: {{perm_failed}}": [
  null,
  "Error cargando usuarios: {{perm_failed}}"
 ],
 "Expansion Chassis": [
  null,
  ""
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
 "Go to now": [
  null,
  "Ir a ahora"
 ],
 "Hand Held": [
  null,
  ""
 ],
 "Host Name": [
  null,
  "Nombre de Host"
 ],
 "In order to synchronize users, you need to log in to {{#strong}}{{host}}{{/strong}}.": [
  null,
  "Con el objetivo de sincronizar usuarios, necesita acceder a {{#strong}}{{host}}{{/strong}}."
 ],
 "Incorrect Host Key": [
  null,
  "Llave de Host Incorrecta"
 ],
 "Invalid file permissions": [
  null,
  "Permisos de archivo invalidos"
 ],
 "IoT Gateway": [
  null,
  ""
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
 "Laptop": [
  null,
  ""
 ],
 "Leave blank to connect to this machine as the currently logged in user. If you enter a different username, that user will always be used when connecting to this machine.": [
  null,
  "Déjelo vacío para conectar con este equipo como el usuario cuya sesión está iniciada actualmente. Si proporciona un nombre de usuario distinto, siempre se utilizará ese usuario cuando se conecte con esta máquina."
 ],
 "Leave blank to connect to this machine as the currently logged in user{{#default_user}} ({{default_user}}){{/default_user}}. If you enter a different username, that user will always be used connecting to this machine.": [
  null,
  "Déjelo en blanco para conectarse a esta máquina como el usuario actualmente conectado {{#default_user}} ({{default_user}}){{/default_user}}. Si usted introduce un nombre de usuario diferente, se usará siempre ese usuario para conectarse a esta máquina."
 ],
 "Log In": [
  null,
  "Iniciar sesión"
 ],
 "Log in to {{host}}": [
  null,
  "Iniciar sesión en {{host}}"
 ],
 "Login Password": [
  null,
  "Contraseña de inicio de sesión"
 ],
 "Lost connection. Trying to reconnect": [
  null,
  "Conexión perdida. Intentando conectarse nuevamente"
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
  "Memoria"
 ],
 "Mini PC": [
  null,
  ""
 ],
 "Mini Tower": [
  null,
  ""
 ],
 "Multi-system Chassis": [
  null,
  ""
 ],
 "Network": [
  null,
  "Red"
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
 "Notebook": [
  null,
  ""
 ],
 "Off": [
  null,
  "Apagado"
 ],
 "Old password not accepted": [
  null,
  "Contraseña antigua no aceptada"
 ],
 "On": [
  null,
  "Encencido"
 ],
 "Other": [
  null,
  ""
 ],
 "Password": [
  null,
  "Contraseña"
 ],
 "Password not accepted": [
  null,
  "Contraseña no aceptada"
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
  "Puerto"
 ],
 "Portable": [
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
  "Seleccione el usuario con el que le gustaría sincronizar  {{#strong}}{{host}}{{/strong}}"
 ],
 "Servers": [
  null,
  "Servidores"
 ],
 "Set": [
  null,
  "Establecer"
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
  "Sincronizar"
 ],
 "Synchronize users": [
  null,
  "Sincronizar usuarios"
 ],
 "Tablet": [
  null,
  ""
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
 "The passwords do not match.": [
  null,
  "Las contraseñas no coinciden."
 ],
 "The user <b>$0</b> is not permitted to manage servers": [
  null,
  "El usuario <b>$0</b> no está autorizado para administrar servidores"
 ],
 "This machine has already been added.": [
  null,
  "Esta maquina ya ha sido agregada"
 ],
 "This version of cockpit-ws does not support connecting to a host with an alternate user or port": [
  null,
  "Esta versión de cockpit-ws no soporta conexiones a un servidor con un usuario o puerto alterno"
 ],
 "To try a different port you will need to upgrade cockpit-ws to a newer version.": [
  null,
  "Para tratar un puerto diferente usted va a necesitar actualizar cockpit-ws a una nueva versión."
 ],
 "Tower": [
  null,
  ""
 ],
 "Type a password": [
  null,
  "Introduzca una contraseña"
 ],
 "Unknown": [
  null,
  "Desconocido"
 ],
 "Unknown Host Key": [
  null,
  "Host Key desconocido"
 ],
 "Update": [
  null,
  "Actualizar"
 ],
 "User": [
  null,
  "Usuario"
 ],
 "User name": [
  null,
  "Nombre de usuario"
 ],
 "Using available credentials": [
  null,
  "Usando credenciales disponibles"
 ],
 "You are connected to {{#strong}}{{host}}{{/strong}}, however in order to synchronize users, a user with superuser privileges is required.": [
  null,
  "Usted esta conectado a {{#strong}}{{host}}{{/strong}}, sin embargo para sincronizar usuarios, es requerido un usuario con privilegios de súper usuario."
 ],
 "You are currently connected directly to this server. You cannot delete it.": [
  null,
  "Actualmente estás conectado directamente a este servidor. No puedes eliminarlo."
 ],
 "You can remove the previously stored key by running the following command": [
  null,
  "Puede quitar la clave almacenada anteriormente si ejecuta esta orden"
 ]
}));
