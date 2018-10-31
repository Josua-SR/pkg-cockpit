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
nplurals=3; plural=(n==1) ? 0 : (n>=2 && n<=4) ? 1 : 2;
return plural;
},
  "language": "cs",
  "x-generator": "Zanata 4.6.2"
 },
 "$0 occurrence": [
  "$1 occurrences",
  "$0 výskyt",
  "$0 výskyty",
  "$0 výskytů"
 ],
 "Apply this solution": [
  null,
  "Použít toto řešení"
 ],
 "Applying solution...": [
  null,
  "Aplikace řešení…"
 ],
 "Audit log": [
  null,
  "Záznam auditu"
 ],
 "Connecting to SETroubleshoot daemon...": [
  null,
  "Připojování k procesu služby SETroubleshoot…"
 ],
 "Enforce policy:": [
  null,
  "Vynutit zásadu:"
 ],
 "Error while deleting alert: $0": [
  null,
  "Chyba při mazání výstrahy: $0"
 ],
 "Error while setting SELinux mode: '$0'": [
  null,
  "Chyba při nastavování SELinux režimu: „$0“"
 ],
 "Failed to delete alert: $0": [
  null,
  "Nepodařilo se smazat výstrahu: $0"
 ],
 "Install setroubleshoot-server to troubleshoot SELinux events.": [
  null,
  "Nainstalovat setroubleshoot-server pro řešení potíží s SELinux."
 ],
 "No SELinux alerts.": [
  null,
  "Žádné výstrahy SELinux."
 ],
 "Not connected": [
  null,
  "Nepřipojeno"
 ],
 "Occurred $0": [
  null,
  "Vyskytlo se $0"
 ],
 "Occurred between $0 and $1": [
  null,
  "Vyskytlo se mezi $0 a $1"
 ],
 "Off": [
  null,
  "Vypnuto"
 ],
 "On": [
  null,
  "Zapnuto"
 ],
 "SELinux Access Control Errors": [
  null,
  "Chyby řízení přístup SELinux"
 ],
 "SELinux Policy": [
  null,
  "SELinux zásada"
 ],
 "SELinux Troubleshoot": [
  null,
  "Řešení problémů s SELinux"
 ],
 "SELinux is disabled on the system": [
  null,
  "SELinux je na tomto systému vypnutý."
 ],
 "SELinux is disabled on the system.": [
  null,
  "SELinux je na tomto systému vypnutý."
 ],
 "SELinux system status is unknown.": [
  null,
  "Systémový stav SELinux není znám."
 ],
 "Setting deviates from the configured state and will revert on the next boot.": [
  null,
  "Nastavení se odchyluje od nastaveného stavu a bude navráceno při příštím restartu."
 ],
 "Solution applied successfully": [
  null,
  "Řešení úspěšně uplatněno"
 ],
 "Solution failed": [
  null,
  "Řešení se nezdařilo"
 ],
 "Solutions": [
  null,
  "Řešení"
 ],
 "The configured state is unknown, it might change on the next boot.": [
  null,
  "Nastavený stav není znám, může se změnit při příštím startu."
 ],
 "Unable to apply this solution automatically": [
  null,
  "Nedaří se automaticky uplatnit toto řešení"
 ],
 "Unable to get alert details.": [
  null,
  "Nedaří se získat podrobnosti o výstraze."
 ],
 "Unable to get alert: $0": [
  null,
  "Nedaří se získat výstrahu: $0"
 ],
 "Unable to run fix: %0": [
  null,
  "Nedaří se spustit opravu: %0"
 ],
 "Unable to start setroubleshootd": [
  null,
  "Nedaří se spustit setroubleshootd"
 ],
 "Waiting for details...": [
  null,
  "Čeká se na podrobnosti…"
 ],
 "solution details": [
  null,
  "podrobnosti řešení"
 ]
}));
