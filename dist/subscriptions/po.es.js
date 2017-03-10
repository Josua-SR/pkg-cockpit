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
 "'Organization' required to register.": [
  null,
  "'Organización' requerida para registrar."
 ],
 "'Organization' required when using activation keys.": [
  null,
  "'Organización' requerida cuando se usan claves de activación."
 ],
 "Access denied": [
  null,
  ""
 ],
 "Activation Key": [
  null,
  ""
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
  ""
 ],
 "Custom URL": [
  null,
  ""
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
  ""
 ],
 "Installed products": [
  null,
  ""
 ],
 "Invalid credentials": [
  null,
  ""
 ],
 "Invalid username or password": [
  null,
  "Nombre de usuario o contraseña invalidos"
 ],
 "Login": [
  null,
  ""
 ],
 "Login/password or activation key required to register.": [
  null,
  ""
 ],
 "No installed products on the system.": [
  null,
  ""
 ],
 "Ok": [
  null,
  ""
 ],
 "Organization": [
  null,
  ""
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
  ""
 ],
 "Register": [
  null,
  ""
 ],
 "Register system": [
  null,
  "Registrar sistema"
 ],
 "Retrieving subscription status...": [
  null,
  ""
 ],
 "Server": [
  null,
  ""
 ],
 "Starts": [
  null,
  ""
 ],
 "Status": [
  null,
  "Estado"
 ],
 "Status: $0": [
  null,
  ""
 ],
 "Status: System isn't registered": [
  null,
  ""
 ],
 "Subscriptions": [
  null,
  "Suscripciones"
 ],
 "The current user isn't allowed to access system subscription status.": [
  null,
  ""
 ],
 "URL": [
  null,
  ""
 ],
 "Unable to connect": [
  null,
  ""
 ],
 "Unregister": [
  null,
  ""
 ],
 "Unregistering system...": [
  null,
  ""
 ],
 "Updating": [
  null,
  "Actualizando"
 ],
 "Use proxy server": [
  null,
  ""
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
  ""
 ]
}));
