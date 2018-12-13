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
  "language": "de",
  "x-generator": "Zanata 4.6.2"
 },
 "$0 occurrence": [
  "$1 occurrences",
  "$0 Auftreten",
  "$1 Vorkommen"
 ],
 "Apply this solution": [
  null,
  "Wenden Sie diese Lösung an"
 ],
 "Applying solution...": [
  null,
  "Lösung anwenden ..."
 ],
 "Audit log": [
  null,
  "Audit-Protokoll"
 ],
 "Connecting to SETroubleshoot daemon...": [
  null,
  "Verbinde zum SETroubleshoot Daemon..."
 ],
 "Enforce policy:": [
  null,
  "Politik erzwingen:"
 ],
 "Error while deleting alert: $0": [
  null,
  "Fehler beim Löschen der Warnung: $0"
 ],
 "Error while setting SELinux mode: '$0'": [
  null,
  "Fehler beim Einstellen des SELinux-Modus: '$0'"
 ],
 "Failed to delete alert: $0": [
  null,
  "Fehler beim Löschen der Warnung: $0"
 ],
 "Install setroubleshoot-server to troubleshoot SELinux events.": [
  null,
  "Installieren Sie setroubleshoot-server, um SELinux-Ereignisse zu behandeln."
 ],
 "No SELinux alerts.": [
  null,
  "Keine SELinux-Alarme"
 ],
 "Not connected": [
  null,
  "Nicht verbunden"
 ],
 "Occurred $0": [
  null,
  "Aufgetreten $0"
 ],
 "Occurred between $0 and $1": [
  null,
  "Zwischen aufgetreten $0 und $1"
 ],
 "Off": [
  null,
  "Aus"
 ],
 "On": [
  null,
  "Ein"
 ],
 "SELinux Access Control Errors": [
  null,
  "SELinux-Zugriffssteuerungsfehler"
 ],
 "SELinux Policy": [
  null,
  "SELinux-Richtlinie"
 ],
 "SELinux Troubleshoot": [
  null,
  "SELinux-Problembehandlung"
 ],
 "SELinux is disabled on the system": [
  null,
  "SELinux ist auf dem System deaktiviert"
 ],
 "SELinux is disabled on the system.": [
  null,
  "SELinux ist auf dem System deaktiviert"
 ],
 "SELinux system status is unknown.": [
  null,
  "Der Status von SELinux ist unbekannt."
 ],
 "Setting deviates from the configured state and will revert on the next boot.": [
  null,
  "Abweichungen vom konfigurierten Zustand werden beim nächsten Neustart zurückgesetzt."
 ],
 "Solution applied successfully": [
  null,
  "Lösung erfolgreich angewendet"
 ],
 "Solution failed": [
  null,
  "Lösung fehlgeschlagen"
 ],
 "Solutions": [
  null,
  "Lösungen"
 ],
 "The configured state is unknown, it might change on the next boot.": [
  null,
  "Der konfigurierte Zustand ist unbekannt und kann sich beim nächsten Neustart ändern."
 ],
 "Unable to apply this solution automatically": [
  null,
  "Kann diese Lösung nicht automatisiert anwenden"
 ],
 "Unable to get alert details.": [
  null,
  "Alarmdetails können nicht abgerufen werden."
 ],
 "Unable to get alert: $0": [
  null,
  "Alarm kann nicht abgerufen werden: $0"
 ],
 "Unable to run fix: %0": [
  null,
  "Fix kann nicht ausgeführt werden: %0"
 ],
 "Unable to start setroubleshootd": [
  null,
  "Kann setroubleshootd nicht starten"
 ],
 "Waiting for details...": [
  null,
  "Warten auf Details ..."
 ],
 "solution details": [
  null,
  "Lösungsdetails"
 ]
}));
