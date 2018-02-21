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
 "$0 update": [
  "$0 updates",
  "$0 actualización.",
  "$0 actualizaciones."
 ],
 "$1 security fix": [
  "$1 security fixes",
  "$1 corrección de seguridad",
  "$1 correcciones de seguridad"
 ],
 ", including $1 security fix": [
  ", including $1 security fixes",
  ", incluyendo la corrección de seguridad $1 ",
  ", incluyendo las correcciones de seguridad $1"
 ],
 "Apply all updates": [
  null,
  "Aplicar todas las actualizaciones"
 ],
 "Apply security updates": [
  null,
  "Aplicar actualizaciones de seguridad"
 ],
 "Applying updates": [
  null,
  "Aplicando actualizaciones"
 ],
 "Applying updates failed": [
  null,
  "Falló aplicar actualizaciones. "
 ],
 "Automatic Updates": [
  null,
  "Actualizaciones Automáticas"
 ],
 "Available Updates": [
  null,
  "Actualizaciones Disponibles"
 ],
 "Bugs:": [
  null,
  "Errores:"
 ],
 "Cancel": [
  null,
  "Cancelar"
 ],
 "Check for Updates": [
  null,
  "Comprobacióin de Actualizaciones"
 ],
 "Cockpit itself will be updated.": [
  null,
  "El nucleo de Cockpit será actualizado"
 ],
 "Details": [
  null,
  "Detalles"
 ],
 "Downloaded": [
  null,
  "Descargado"
 ],
 "Downloading": [
  null,
  "Descargando"
 ],
 "Errata:": [
  null,
  ""
 ],
 "Ignore": [
  null,
  "Ignorar"
 ],
 "Initializing...": [
  null,
  "Inicializando..."
 ],
 "Install All Updates": [
  null,
  "Instalar todas las Actualizaciones"
 ],
 "Install Security Updates": [
  null,
  "Instalar Actualizaciones de Seguridad"
 ],
 "Installed": [
  null,
  "Instalado"
 ],
 "Installing": [
  null,
  "Instalando"
 ],
 "Last checked: $0 ago": [
  null,
  "Ultima revisión: $0 atrás"
 ],
 "Loading available updates failed": [
  null,
  "Fallo la carga de  las actualizaciones disponibles "
 ],
 "Loading available updates, please wait...": [
  null,
  "Leyendo actualizaciones disponibles, por favor espere..."
 ],
 "Name": [
  null,
  "Nombre"
 ],
 "No updates pending": [
  null,
  "No hay actualizaciones pendientes"
 ],
 "Off": [
  null,
  "Apagado"
 ],
 "On": [
  null,
  "Encencido"
 ],
 "Package information": [
  null,
  "Información del paquete"
 ],
 "PackageKit crashed": [
  null,
  "PackageKit roto"
 ],
 "PackageKit is not installed": [
  null,
  "PackageKit no está instalado"
 ],
 "PackageKit reported error code $0": [
  null,
  "PackageKit reportó error con código $0"
 ],
 "Refreshing package information": [
  null,
  "Refrescando información del paquete"
 ],
 "Register…": [
  null,
  "Registro…"
 ],
 "Restart Now": [
  null,
  "Reiniciar Ahora"
 ],
 "Restart Recommended": [
  null,
  "Reinicio Recomendado"
 ],
 "Restarting": [
  null,
  "Reiniciando"
 ],
 "Set up": [
  null,
  ""
 ],
 "Setting up": [
  null,
  ""
 ],
 "Severity": [
  null,
  ""
 ],
 "Severity:": [
  null,
  ""
 ],
 "Software Updates": [
  null,
  "Actualizaciones de Software"
 ],
 "Some other program is currently using the package manager, please wait...": [
  null,
  ""
 ],
 "System is up to date": [
  null,
  ""
 ],
 "The following packages were recently updated:": [
  null,
  ""
 ],
 "The following packages were updated $0:": [
  null,
  ""
 ],
 "This system is not registered": [
  null,
  ""
 ],
 "To get software updates, this system needs to be registered with Red Hat, either using the Red Hat Customer Portal or a local subscription server.": [
  null,
  ""
 ],
 "Unregistered System": [
  null,
  ""
 ],
 "Update History": [
  null,
  ""
 ],
 "Update Log": [
  null,
  ""
 ],
 "Updated": [
  null,
  ""
 ],
 "Updated packages may require a restart to take effect.": [
  null,
  ""
 ],
 "Updates are disabled.": [
  null,
  ""
 ],
 "Updating": [
  null,
  "Actualizando"
 ],
 "Verified": [
  null,
  ""
 ],
 "Verifying": [
  null,
  ""
 ],
 "Version": [
  null,
  "Versión"
 ],
 "View Registration Details": [
  null,
  ""
 ],
 "When you get disconnected, the updates will continue in the background. You can reconnect and resume watching the update progress.": [
  null,
  ""
 ],
 "You need to re-subscribe this system.": [
  null,
  ""
 ],
 "Your server will close the connection soon. You can reconnect after it has restarted.": [
  null,
  ""
 ],
 "and restart the machine automatically.": [
  null,
  ""
 ],
 "at": [
  null,
  ""
 ],
 "every day": [
  null,
  ""
 ],
 "on Fridays": [
  null,
  ""
 ],
 "on Mondays": [
  null,
  ""
 ],
 "on Saturdays": [
  null,
  ""
 ],
 "on Sundays": [
  null,
  ""
 ],
 "on Thursdays": [
  null,
  ""
 ],
 "on Tuesdays": [
  null,
  ""
 ],
 "on Wednesdays": [
  null,
  ""
 ],
 "undefined": [
  null,
  "sin definir"
 ]
}));
