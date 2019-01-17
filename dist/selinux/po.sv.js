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
  "language": "sv",
  "x-generator": "Zanata 4.6.2"
 },
 "$0 occurrence": [
  "$1 occurrences",
  "$0 förekomst",
  "$0 förekomster"
 ],
 "Apply this solution": [
  null,
  "Lägg på denna lösning"
 ],
 "Applying solution...": [
  null,
  "Lägger på lösning …"
 ],
 "Audit log": [
  null,
  "Granskningslogg"
 ],
 "Connecting to SETroubleshoot daemon...": [
  null,
  "Anslut till SETroubleshoot-demonen …"
 ],
 "Enforce policy:": [
  null,
  "Tvingande policy:"
 ],
 "Error while deleting alert: $0": [
  null,
  "Fel när larmet togs bort: $0"
 ],
 "Error while setting SELinux mode: '$0'": [
  null,
  "Fel när SELinux-läge ställdes in: ”$0”"
 ],
 "Failed to delete alert: $0": [
  null,
  "Misslyckades att radera larmet: $0"
 ],
 "Install setroubleshoot-server to troubleshoot SELinux events.": [
  null,
  "Installera setroubleshoot-server för att felsöka SELinux-händelser."
 ],
 "No SELinux alerts.": [
  null,
  "Inga SELinux-larm."
 ],
 "Not connected": [
  null,
  "Inte ansluten"
 ],
 "Occurred $0": [
  null,
  "Hände $0"
 ],
 "Occurred between $0 and $1": [
  null,
  "Hände mellan $0 och $1"
 ],
 "Off": [
  null,
  "Av"
 ],
 "On": [
  null,
  "På"
 ],
 "SELinux Access Control Errors": [
  null,
  "SELinux-fel vid åtkomstkontroller"
 ],
 "SELinux Policy": [
  null,
  "SELinux-policy"
 ],
 "SELinux Troubleshoot": [
  null,
  "SELinux-felsökning"
 ],
 "SELinux is disabled on the system": [
  null,
  "SELinux är avaktiverat på systemet"
 ],
 "SELinux is disabled on the system.": [
  null,
  "SELinux är avaktiverat på systemet."
 ],
 "SELinux system status is unknown.": [
  null,
  "SELinux systemstatus är okänd."
 ],
 "Setting deviates from the configured state and will revert on the next boot.": [
  null,
  "Inställningarna avviker från det konfigurerade tillståndet och kommer återgå vid nästa uppstart."
 ],
 "Solution applied successfully": [
  null,
  "Lösningen verkställd"
 ],
 "Solution failed": [
  null,
  "Lösningen misslyckades"
 ],
 "Solutions": [
  null,
  "Lösningar"
 ],
 "The configured state is unknown, it might change on the next boot.": [
  null,
  "Det konfigurerade tillståndet är okänt, det kan ändra sig vid nästa uppstart."
 ],
 "Unable to apply this solution automatically": [
  null,
  "Kan inte verkställa denna lösning automatiskt"
 ],
 "Unable to get alert details.": [
  null,
  "Kan inte ta bort larmdetaljer."
 ],
 "Unable to get alert: $0": [
  null,
  "Kan inte hämta larmet: $0"
 ],
 "Unable to run fix: %0": [
  null,
  "Kan inte köra fixen: %0"
 ],
 "Unable to start setroubleshootd": [
  null,
  "Kan inte starta setroubleshootd"
 ],
 "Waiting for details...": [
  null,
  "Väntar på detaljer …"
 ],
 "solution details": [
  null,
  "lösningsdetaljer"
 ]
}));
