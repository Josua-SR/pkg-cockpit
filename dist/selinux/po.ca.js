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
  "x-generator": "Zanata 3.9.6"
 },
 "$0 occurrence": [
  "$1 occurrences",
  "$0 ocurrència",
  "$0 ocurrències"
 ],
 "Apply this solution": [
  null,
  "Aplica aquesta solució"
 ],
 "Applying solution...": [
  null,
  "S'està aplicant la solució..."
 ],
 "Audit log": [
  null,
  "Registre d'auditoria"
 ],
 "Connecting to SETroubleshoot daemon...": [
  null,
  "S'està connectant al dimoni de SETroubleshoot..."
 ],
 "Enforce policy:": [
  null,
  "Aplica la política:"
 ],
 "Error while deleting alert: $0": [
  null,
  "Error mentre se suprimia l'alerta: $0"
 ],
 "Error while setting SELinux mode: '$0'": [
  null,
  "Error mentre s'establia el mode de SELinux: '$0'"
 ],
 "Failed to delete alert: $0": [
  null,
  "Ha fallat la supressió de l'alerta: $0"
 ],
 "Install setroubleshoot-server to troubleshoot SELinux events.": [
  null,
  "Instal·leu setroubleshoot-server per resoldre els esdeveniments de SELinux."
 ],
 "No SELinux alerts.": [
  null,
  "Sense alertes de SELinux."
 ],
 "Not connected": [
  null,
  "No connectat"
 ],
 "Occurred $0": [
  null,
  ""
 ],
 "Occurred between $0 and $1": [
  null,
  "S'ha produït entre $0 i $1"
 ],
 "Off": [
  null,
  "Off"
 ],
 "On": [
  null,
  "On"
 ],
 "SELinux Access Control Errors": [
  null,
  "Errors de control d'accés de SELinux"
 ],
 "SELinux Policy": [
  null,
  "Política de SELinux"
 ],
 "SELinux Troubleshoot": [
  null,
  "Solució de problema de SELinux"
 ],
 "SELinux is disabled on the system": [
  null,
  "SELinux no està inhabilitat al sistema"
 ],
 "SELinux is disabled on the system.": [
  null,
  "SELinux no està inhabilitat al sistema."
 ],
 "SELinux system status is unknown.": [
  null,
  "Es desconeix l'estat del sistema SELinux."
 ],
 "Setting deviates from the configured state and will revert on the next boot.": [
  null,
  ""
 ],
 "Solution applied successfully": [
  null,
  "S'ha aplicat la solució amb èxit"
 ],
 "Solution failed": [
  null,
  "Ha fallat la solució"
 ],
 "Solutions": [
  null,
  "Solucions"
 ],
 "The configured state is unknown, it might change on the next boot.": [
  null,
  ""
 ],
 "Unable to apply this solution automatically": [
  null,
  "No es pot aplicar automàticament aquesta solució"
 ],
 "Unable to get alert details.": [
  null,
  "No es poden obtenir els detalls de l'alerta."
 ],
 "Unable to get alert: $0": [
  null,
  "No es pot obtenir l'alerta: $0"
 ],
 "Unable to run fix: %0": [
  null,
  "No es pot executar la correcció: %0"
 ],
 "Unable to start setroubleshootd": [
  null,
  "No es pot iniciar setroubleshootd"
 ],
 "Waiting for details...": [
  null,
  "S'estan esperant els detalls..."
 ],
 "solution details": [
  null,
  "detalls de la solució"
 ]
}));
