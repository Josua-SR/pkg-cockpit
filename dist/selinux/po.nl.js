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
  "language": "nl",
  "x-generator": "Zanata 4.4.5"
 },
 "$0 occurrence": [
  "$1 occurrences",
  "",
  ""
 ],
 "Apply this solution": [
  null,
  "Deze oplossing toepassen"
 ],
 "Applying solution...": [
  null,
  "Oplossing toepassen..."
 ],
 "Audit log": [
  null,
  ""
 ],
 "Connecting to SETroubleshoot daemon...": [
  null,
  ""
 ],
 "Enforce policy:": [
  null,
  ""
 ],
 "Error while deleting alert: $0": [
  null,
  ""
 ],
 "Error while setting SELinux mode: '$0'": [
  null,
  ""
 ],
 "Failed to delete alert: $0": [
  null,
  ""
 ],
 "Install setroubleshoot-server to troubleshoot SELinux events.": [
  null,
  ""
 ],
 "No SELinux alerts.": [
  null,
  ""
 ],
 "Not connected": [
  null,
  ""
 ],
 "Occurred $0": [
  null,
  ""
 ],
 "Occurred between $0 and $1": [
  null,
  ""
 ],
 "Off": [
  null,
  ""
 ],
 "On": [
  null,
  ""
 ],
 "SELinux Access Control Errors": [
  null,
  ""
 ],
 "SELinux Policy": [
  null,
  ""
 ],
 "SELinux Troubleshoot": [
  null,
  ""
 ],
 "SELinux is disabled on the system": [
  null,
  ""
 ],
 "SELinux is disabled on the system.": [
  null,
  ""
 ],
 "SELinux system status is unknown.": [
  null,
  ""
 ],
 "Setting deviates from the configured state and will revert on the next boot.": [
  null,
  ""
 ],
 "Solution applied successfully": [
  null,
  "Oplossing succesvol toegepast"
 ],
 "Solution failed": [
  null,
  "Oplossing mislukt"
 ],
 "Solutions": [
  null,
  "Oplossingen"
 ],
 "The configured state is unknown, it might change on the next boot.": [
  null,
  ""
 ],
 "Unable to apply this solution automatically": [
  null,
  "Kan deze oplossing niet automatisch toepassen"
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
  ""
 ],
 "Waiting for details...": [
  null,
  ""
 ],
 "solution details": [
  null,
  "Oplossing details"
 ]
}));
