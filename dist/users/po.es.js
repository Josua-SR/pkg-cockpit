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
  "x-generator": "Zanata 4.6.2"
 },
 "Access": [
  null,
  "Acceder"
 ],
 "Account Expiration": [
  null,
  "Expiración de la cuenta"
 ],
 "Account not available or cannot be edited.": [
  null,
  "La cuenta no está disponible o no se puede modificar."
 ],
 "Accounts": [
  null,
  "Cuentas"
 ],
 "Add key": [
  null,
  "Añadir clave"
 ],
 "Add public key": [
  null,
  "Añadir clave pública"
 ],
 "Adding key": [
  null,
  "Añadiendo clave"
 ],
 "Authorized Public SSH Keys": [
  null,
  "Llaves SSH Públicas Autorizadas"
 ],
 "Back to Accounts": [
  null,
  "Regreso a las Cuentas"
 ],
 "Cancel": [
  null,
  "Cancelar"
 ],
 "Change": [
  null,
  "Cambiar"
 ],
 "Close": [
  null,
  "Cerrar"
 ],
 "Confirm": [
  null,
  "Confirmar"
 ],
 "Confirm New Password": [
  null,
  "Confirmar Nueva Contraseña"
 ],
 "Container Administrator": [
  null,
  "Administrador del Contenedor"
 ],
 "Create": [
  null,
  "Crear"
 ],
 "Create New Account": [
  null,
  "Crear nueva Cuenta"
 ],
 "Delete": [
  null,
  "Eliminar"
 ],
 "Delete $0": [
  null,
  "Eliminar $0"
 ],
 "Delete Files": [
  null,
  "Borrar Ficheros"
 ],
 "Error": [
  null,
  "Error"
 ],
 "Error saving authorized keys: ": [
  null,
  "Error al guardar llaves autorizadas:"
 ],
 "Excellent password": [
  null,
  "Contraseña excelente "
 ],
 "Failed to change password": [
  null,
  "Error al cambiar contraseña"
 ],
 "Failed to load authorized keys.": [
  null,
  "Fallo al cargar llaves autorizadas."
 ],
 "Force Change": [
  null,
  "Cambio forzado"
 ],
 "Force password change": [
  null,
  "Cambio de clave forzado"
 ],
 "Full Name": [
  null,
  "Nombre Completo"
 ],
 "Image Builder": [
  null,
  ""
 ],
 "Invalid expiration date": [
  null,
  "Fecha de expiración invalida"
 ],
 "Invalid key": [
  null,
  "Llave inválida"
 ],
 "Invalid number of days": [
  null,
  "Numero de días incorrecto."
 ],
 "Last Login": [
  null,
  "Último inicio de sesión"
 ],
 "Local Accounts": [
  null,
  "Cuentas Locales"
 ],
 "Lock Account": [
  null,
  "Bloquear Cuenta"
 ],
 "Lock account on $0": [
  null,
  "Cuenta bloqueada en $0"
 ],
 "Logged In": [
  null,
  "Sesión iniciada"
 ],
 "Never": [
  null,
  "Nunca"
 ],
 "Never expire password": [
  null,
  "La clave nunca expira"
 ],
 "Never lock account": [
  null,
  "Cuenta nunca bloqueada"
 ],
 "New Password": [
  null,
  "Nueva contraseña"
 ],
 "New password was not accepted": [
  null,
  "Nueva contraseña no fue aceptada"
 ],
 "No real name specified": [
  null,
  "Nombre real no especificado"
 ],
 "No user name specified": [
  null,
  "Nombre de usuario no especificado"
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
 "Password": [
  null,
  "Contraseña"
 ],
 "Password Expiration": [
  null,
  "Expiración de Contraseña"
 ],
 "Password is not acceptable": [
  null,
  "La contraseña no es aceptable"
 ],
 "Password is too weak": [
  null,
  "La contraseña en muy débil"
 ],
 "Password must be changed": [
  null,
  "Se debe cambiar la contraseña"
 ],
 "Paste the contents of your public SSH key file here": [
  null,
  "Pegue aquí el contenido de su archivo de clave SSH pública"
 ],
 "Please specify an expiration date": [
  null,
  "Por favor especifique una fecha de expiración"
 ],
 "Prompting via passwd timed out": [
  null,
  "Iniciando a través de passwd tiempo de espera agotado"
 ],
 "Require password change every $0 days": [
  null,
  "Se requiere que la contraseña cambie cada $0 días"
 ],
 "Require password change on $0": [
  null,
  "Se requiere que la contraseña se cambie en $0"
 ],
 "Reset": [
  null,
  "Reiniciar"
 ],
 "Roles": [
  null,
  "Roles"
 ],
 "Server Administrator": [
  null,
  "Administrador del Servidor"
 ],
 "Set": [
  null,
  "Establecer"
 ],
 "Set Password": [
  null,
  "Establecer contraseña"
 ],
 "Terminate Session": [
  null,
  "Terminar sesión"
 ],
 "The account '$0' will be forced to change their password on next login": [
  null,
  "Se forzará a la cuenta '$0' a cambiar su contraseña en el próximo acceso"
 ],
 "The key you provided was not valid.": [
  null,
  "La llave que envió no era valida."
 ],
 "The passwords do not match": [
  null,
  "Las contraseñas no coinciden."
 ],
 "The user <b>$0</b> is not permitted to modify accounts": [
  null,
  "El usuario <b>$0</b> no tiene permisos para modificar cuentas"
 ],
 "The user name can only consist of letters from a-z, digits, dots, dashes and underscores.": [
  null,
  "El nombre de usuario sólo puede consistir de letras (a-z), dígitos, puntos, guiones y guiones bajos."
 ],
 "There are no authorized public keys for this account.": [
  null,
  "No hay llaves públicas autorizadas para esta cuenta."
 ],
 "This user name already exists": [
  null,
  "El usuario ya existe"
 ],
 "Unable to delete root account": [
  null,
  "No es posible eliminar la cuenta root"
 ],
 "Unable to rename root account": [
  null,
  "No es posible renombrar la cuenta root."
 ],
 "Unexpected error": [
  null,
  "Error inesperado"
 ],
 "Unnamed": [
  null,
  "Sin nombre"
 ],
 "User Name": [
  null,
  "Nombre de usuario"
 ],
 "Validating key": [
  null,
  "Validando llave"
 ],
 "You do not have permission to view the authorized public keys for this account.": [
  null,
  "No tiene permiso para ver las llaves públicas autorizadas para esta cuenta."
 ],
 "translatable": [
  null,
  ""
 ],
 "page-title\u0004Accounts": [
  null,
  "Cuentas"
 ]
}));
