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
 "'Organization' required to register.": [
  null,
  "Se necesita «Organización» para efectuar el registro."
 ],
 "'Organization' required when using activation keys.": [
  null,
  "Se necesita «Organización» al utilizar claves de activación."
 ],
 "Access denied": [
  null,
  "Acceso denegado"
 ],
 "Activation Key": [
  null,
  "Clave de activación"
 ],
 "Architecture": [
  null,
  "Arquitectura"
 ],
 "Cancel": [
  null,
  "Cancelar"
 ],
 "Couldn't get system subscription status. Please ensure subscription-manager is installed.": [
  null,
  "No podría obtener el estado del sistema de suscripción. Por favor asegura que el gestor de suscripción está instalado."
 ],
 "Custom URL": [
  null,
  "URL personal"
 ],
 "Default": [
  null,
  "Predeterminado"
 ],
 "Details": [
  null,
  "Detalles"
 ],
 "Ends": [
  null,
  "Finales"
 ],
 "Installed products": [
  null,
  "Productos instalados"
 ],
 "Invalid credentials": [
  null,
  "Las credenciales no son válidas"
 ],
 "Invalid username or password": [
  null,
  "Nombre de usuario o contraseña invalidos"
 ],
 "Login": [
  null,
  "Ingresar"
 ],
 "Login/password or activation key required to register.": [
  null,
  "Para registrarse es necesario un usuario y contraseña o una clave de activación."
 ],
 "No installed products on the system.": [
  null,
  "No hay ningún producto instalado en el sistema."
 ],
 "Ok": [
  null,
  "Aceptar"
 ],
 "Organization": [
  null,
  "Organización"
 ],
 "Password": [
  null,
  "Contraseña"
 ],
 "Product ID": [
  null,
  "ID del Producto"
 ],
 "Product name": [
  null,
  "Nombre del Producto"
 ],
 "Proxy": [
  null,
  "Proxy"
 ],
 "Register": [
  null,
  "Registrar"
 ],
 "Register system": [
  null,
  "Registrar sistema"
 ],
 "Retrieving subscription status...": [
  null,
  "Obteniendo el estado de la suscripción…"
 ],
 "Server": [
  null,
  "Servidor"
 ],
 "Starts": [
  null,
  "Inicios"
 ],
 "Status": [
  null,
  "Estado"
 ],
 "Status: $0": [
  null,
  "Estado: $0"
 ],
 "Status: System isn't registered": [
  null,
  "Estado: El sistema no está registrado"
 ],
 "Subscriptions": [
  null,
  "Suscripciones"
 ],
 "The current user isn't allowed to access system subscription status.": [
  null,
  "El usuario actual no tiene permitido acceder al estado de suscripción al sistema."
 ],
 "URL": [
  null,
  "URL"
 ],
 "Unable to connect": [
  null,
  "Incapaz de conectar"
 ],
 "Unregister": [
  null,
  "No registrado"
 ],
 "Unregistering system...": [
  null,
  "Des-registrando sistema..."
 ],
 "Updating": [
  null,
  "Actualizando"
 ],
 "Use proxy server": [
  null,
  "Usar servidor proxy"
 ],
 "User": [
  null,
  "Usuario"
 ],
 "Version": [
  null,
  "Versión"
 ],
 "undefined": [
  null,
  "sin definir"
 ]
}));
