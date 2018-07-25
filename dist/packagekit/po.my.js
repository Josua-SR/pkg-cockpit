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
nplurals=1; plural=0;
return plural;
},
  "language": "my",
  "x-generator": "Zanata 4.5.0"
 },
 "$0 update": [
  "$0 updates",
  ""
 ],
 "$1 security fix": [
  "$1 security fixes",
  ""
 ],
 ", including $1 security fix": [
  ", including $1 security fixes",
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
  ""
 ],
 "Cancel": [
  null,
  ""
 ],
 "Check for Updates": [
  null,
  ""
 ],
 "Details": [
  null,
  ""
 ],
 "Downloaded": [
  null,
  ""
 ],
 "Downloading": [
  null,
  ""
 ],
 "Errata:": [
  null,
  ""
 ],
 "Ignore": [
  null,
  ""
 ],
 "Initializing...": [
  null,
  ""
 ],
 "Install All Updates": [
  null,
  ""
 ],
 "Install Security Updates": [
  null,
  ""
 ],
 "Installed": [
  null,
  ""
 ],
 "Installing": [
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
  "အမည်"
 ],
 "No updates pending": [
  null,
  ""
 ],
 "Off": [
  null,
  "ဖွင့်"
 ],
 "On": [
  null,
  "ပိတ်"
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
  ""
 ],
 "Severity:": [
  null,
  ""
 ],
 "Software Updates": [
  null,
  ""
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
 "This web console will be updated.": [
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
  ""
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
  ""
 ],
 "View Registration Details": [
  null,
  ""
 ],
 "You need to re-subscribe this system.": [
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
  ""
 ]
}));
