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
 "$0 is not available from any repository.": [
  null,
  ""
 ],
 "$0 update": [
  "$0 updates",
  "$0 Aktualisierung",
  "$0 Aktualisierungen"
 ],
 "$0 will be installed.": [
  null,
  "$0 wird installiert."
 ],
 "$1 security fix": [
  "$1 security fixes",
  "",
  ""
 ],
 ", including $1 security fix": [
  ", including $1 security fixes",
  "",
  ""
 ],
 "Additional packages:": [
  null,
  ""
 ],
 "Apply all updates": [
  null,
  ""
 ],
 "Apply security updates": [
  null,
  ""
 ],
 "Applying updates": [
  null,
  ""
 ],
 "Applying updates failed": [
  null,
  ""
 ],
 "Automatic Updates": [
  null,
  ""
 ],
 "Available Updates": [
  null,
  ""
 ],
 "Bugs:": [
  null,
  "Bugs:"
 ],
 "Cancel": [
  null,
  "Abbrechen"
 ],
 "Check for Updates": [
  null,
  "Nach Aktualisierungen suchen"
 ],
 "Checking installed software": [
  null,
  ""
 ],
 "Details": [
  null,
  "Details"
 ],
 "Downloaded": [
  null,
  ""
 ],
 "Downloading": [
  null,
  "Herunterladen"
 ],
 "Downloading $0": [
  null,
  ""
 ],
 "Errata:": [
  null,
  "Errata:"
 ],
 "Ignore": [
  null,
  "Ignorieren"
 ],
 "Initializing...": [
  null,
  ""
 ],
 "Install": [
  null,
  "Installation"
 ],
 "Install All Updates": [
  null,
  ""
 ],
 "Install Security Updates": [
  null,
  ""
 ],
 "Install Software": [
  null,
  ""
 ],
 "Installed": [
  null,
  "Installiert"
 ],
 "Installing": [
  null,
  "Installation wird ausgeführt"
 ],
 "Installing $0": [
  null,
  ""
 ],
 "Last checked: $0 ago": [
  null,
  ""
 ],
 "Loading available updates failed": [
  null,
  ""
 ],
 "Loading available updates, please wait...": [
  null,
  ""
 ],
 "Name": [
  null,
  "Name"
 ],
 "No updates pending": [
  null,
  ""
 ],
 "Off": [
  null,
  "Aus"
 ],
 "Ok": [
  null,
  "OK"
 ],
 "On": [
  null,
  "Ein"
 ],
 "Package information": [
  null,
  ""
 ],
 "PackageKit crashed": [
  null,
  ""
 ],
 "PackageKit is not installed": [
  null,
  ""
 ],
 "PackageKit reported error code $0": [
  null,
  ""
 ],
 "Refreshing package information": [
  null,
  ""
 ],
 "Register…": [
  null,
  ""
 ],
 "Removals:": [
  null,
  ""
 ],
 "Removing $0": [
  null,
  ""
 ],
 "Restart Now": [
  null,
  ""
 ],
 "Restart Recommended": [
  null,
  ""
 ],
 "Restarting": [
  null,
  ""
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
  "Schweregrad"
 ],
 "Severity:": [
  null,
  ""
 ],
 "Software Updates": [
  null,
  "Aktualisierungen"
 ],
 "Some other program is currently using the package manager, please wait...": [
  null,
  ""
 ],
 "System is up to date": [
  null,
  "System ist aktualisiert"
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
 "This web console will be updated.": [
  null,
  ""
 ],
 "To get software updates, this system needs to be registered with Red Hat, either using the Red Hat Customer Portal or a local subscription server.": [
  null,
  "Um Aktualisierungen zu erhalten, muss dieses System bei Red Hat registriert sein; entweder im Red Hat Customer Portal oder einem lokalen Subscription-Dienst."
 ],
 "Total size: $0": [
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
  "Aktualisiert"
 ],
 "Updated packages may require a restart to take effect.": [
  null,
  ""
 ],
 "Updating": [
  null,
  "Aktualisiere"
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
  "Version"
 ],
 "Waiting for other software management operations to finish": [
  null,
  ""
 ],
 "Your browser will disconnect, but this does not affect the update process. You can reconnect in a few moments to continue watching the progress.": [
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
  "um"
 ],
 "bug fix": [
  null,
  ""
 ],
 "enhancement": [
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
 "security": [
  null,
  ""
 ],
 "undefined": [
  null,
  "nicht definiert"
 ]
}));
