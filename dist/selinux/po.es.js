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
 "$0 occurrence": [
  "$1 occurrences",
  "$1 ocurrencia",
  "$1 ocurrencias"
 ],
 "Apply this solution": [
  null,
  "Aplicar esta solución"
 ],
 "Applying solution...": [
  null,
  "Aplicando solución..."
 ],
 "Audit log": [
  null,
  "Registro de auditoria"
 ],
 "Connecting to SETroubleshoot daemon...": [
  null,
  "Conectando al demonio SETroubleshoot..."
 ],
 "Enforce policy:": [
  null,
  "Aplicar la política:"
 ],
 "Error while deleting alert: $0": [
  null,
  "Error mientras se eliminaba la alerta: $0"
 ],
 "Error while setting SELinux mode: '$0'": [
  null,
  "Error al establecer modo de SELinux:  '$0'"
 ],
 "Failed to delete alert: $0": [
  null,
  "Fallo al eliminar la alerta: $0"
 ],
 "Install setroubleshoot-server to troubleshoot SELinux events.": [
  null,
  "Instale «setroubleshoot-server» para solucionar problemas con sucesos de SELinux."
 ],
 "No SELinux alerts.": [
  null,
  "No hay ninguna alerta de SELinux."
 ],
 "Not connected": [
  null,
  "No conectado"
 ],
 "Occurred $0": [
  null,
  "Ocurrió $0"
 ],
 "Occurred between $0 and $1": [
  null,
  "Ocurrió entre $0 y $1"
 ],
 "Off": [
  null,
  "Apagado"
 ],
 "On": [
  null,
  "Encencido"
 ],
 "SELinux Access Control Errors": [
  null,
  "Errores de control de acceso de SELinux"
 ],
 "SELinux Policy": [
  null,
  "Normativa de SELinux"
 ],
 "SELinux Troubleshoot": [
  null,
  "Solución de problemas de SELinux"
 ],
 "SELinux is disabled on the system": [
  null,
  "Se ha desactivado SELinux en el sistema"
 ],
 "SELinux is disabled on the system.": [
  null,
  "Se ha desactivado SELinux en el sistema."
 ],
 "SELinux system status is unknown.": [
  null,
  "Se desconoce el estado de sistema de SELinux."
 ],
 "Setting deviates from the configured state and will revert on the next boot.": [
  null,
  ""
 ],
 "Solution applied successfully": [
  null,
  ""
 ],
 "Solution failed": [
  null,
  ""
 ],
 "Solutions": [
  null,
  ""
 ],
 "The configured state is unknown, it might change on the next boot.": [
  null,
  ""
 ],
 "Unable to apply this solution automatically": [
  null,
  ""
 ],
 "Unable to get alert details.": [
  null,
  ""
 ],
 "Unable to get alert: $0": [
  null,
  ""
 ],
 "Unable to run fix: %0": [
  null,
  ""
 ],
 "Unable to start setroubleshootd": [
  null,
  "No se pudo iniciar setroubleshootd"
 ],
 "Waiting for details...": [
  null,
  ""
 ],
 "solution details": [
  null,
  "detalles de solución"
 ]
}));
