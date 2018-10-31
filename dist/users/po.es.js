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
 "Delete Files": [
  null,
  "Borrar Ficheros"
 ],
 "Error saving authorized keys: ": [
  null,
  "Error al guardar llaves autorizadas:"
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
 "Invalid key": [
  null,
  "Llave inválida"
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
 "Off": [
  null,
  "Apagado"
 ],
 "Old Password": [
  null,
  "Contraseña vieja"
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
 "Paste the contents of your public SSH key file here": [
  null,
  "Pegue aquí el contenido de su archivo de clave SSH pública"
 ],
 "Reset": [
  null,
  "Reiniciar"
 ],
 "Roles": [
  null,
  "Roles"
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
 "The key you provided was not valid.": [
  null,
  "La llave que envió no era valida."
 ],
 "There are no authorized public keys for this account.": [
  null,
  "No hay llaves públicas autorizadas para esta cuenta."
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
  "traducible"
 ]
}));
