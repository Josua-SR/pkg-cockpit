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
  "x-generator": "Zanata 4.4.5"
 },
 "$0 Only users with local credentials will be able to log into this machine. This may also effect other services as DNS resolution settings and the list of trusted CAs may change.": [
  null,
  "$0 Sólo usuarios con credenciales locales serán capacs de acceder a esta máquina. Esto puede afectar también a otros servicios como los ajustes de la resolución DNS y la lista de CA de confianza puede cambiar."
 ],
 "Administrator Password": [
  null,
  "Contraseña de Administrador"
 ],
 "Are you sure you want to leave the '$0' domain?": [
  null,
  "¿Está seguro que quiere abandonar el dominio '$0'?"
 ],
 "Are you sure you want to leave this domain?": [
  null,
  "¿Está seguro que quiere abandonar el dominio?"
 ],
 "Authentication": [
  null,
  "Autenticación"
 ],
 "Automatic": [
  null,
  "Automático"
 ],
 "Cancel": [
  null,
  "Cancelar"
 ],
 "Cannot join a domain because realmd is not available on this system": [
  null,
  "No es posible unirse al dominio debido a que realmd no está disponible en este sistema"
 ],
 "Computer OU": [
  null,
  "Computadora OU"
 ],
 "Domain $0 could not be contacted": [
  null,
  "Dominio $0 no puede ser contactado"
 ],
 "Domain $0 is not supported": [
  null,
  "Dominio $0 no esta soportado"
 ],
 "Domain Address": [
  null,
  "Dirección de Dominio"
 ],
 "Domain Administrator Name": [
  null,
  "Nombre del Administrador de Dominio"
 ],
 "Domain Administrator Password": [
  null,
  "Contraseña del Administrador de Dominio"
 ],
 "Join": [
  null,
  "Unirse"
 ],
 "Join Domain": [
  null,
  "Unirse a Dominio"
 ],
 "Join a Domain": [
  null,
  "Unirse a un dominio"
 ],
 "Joining this domain is not supported": [
  null,
  "Unirse a este dominio no esta soportado"
 ],
 "Leave": [
  null,
  "Abandonar"
 ],
 "Leave Domain": [
  null,
  "Abandonar el dominio"
 ],
 "More": [
  null,
  "Más"
 ],
 "Next": [
  null,
  "Siguiente"
 ],
 "Off": [
  null,
  "Apagado"
 ],
 "On": [
  null,
  "Encencido"
 ],
 "One Time Password": [
  null,
  "Contraseña de un solo uso"
 ],
 "The user <b>$0</b> is not permitted to modify realms": [
  null,
  "El usuario <b>$0</b> no está autorizado a modificar dominios"
 ],
 "This may take a while": [
  null,
  "Esto podría tomar un momento"
 ],
 "User Name": [
  null,
  "Nombre de usuario"
 ],
 "User Password": [
  null,
  "Contraseña de usuario"
 ],
 "e.g. \"$0\"": [
  null,
  "p. ej., «$0»"
 ]
}));
