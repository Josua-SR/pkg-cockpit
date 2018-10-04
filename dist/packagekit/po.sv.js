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
 "$0 is not available from any repository.": [
  null,
  "$0 är inte tillgängligt från något förråd."
 ],
 "$0 update": [
  "$0 updates",
  "$0 uppdatering",
  "$0 uppdateringar"
 ],
 "$0 will be installed.": [
  null,
  "$0 kommer att installeras."
 ],
 "$1 security fix": [
  "$1 security fixes",
  "$1 säkerhetsfix",
  "$1 säkerhetsfixar"
 ],
 ", including $1 security fix": [
  ", including $1 security fixes",
  ", inklusive $1 säkerhetsfix",
  ", inklusive $1 säkerhetsfixar"
 ],
 "Additional packages:": [
  null,
  "Ytterligare paket:"
 ],
 "Apply all updates": [
  null,
  "Lägg på alla uppdateringar"
 ],
 "Apply security updates": [
  null,
  "Lägg på säkerhetsuppdateringar"
 ],
 "Applying updates": [
  null,
  "Lägger på uppdateringar"
 ],
 "Applying updates failed": [
  null,
  "Att lägga på uppdateringar misslyckades"
 ],
 "Automatic Updates": [
  null,
  "Automatiska uppdateringar"
 ],
 "Available Updates": [
  null,
  "Tillgängliga uppdateringar"
 ],
 "Bugs:": [
  null,
  "Fel:"
 ],
 "Cancel": [
  null,
  "Avbryt"
 ],
 "Check for Updates": [
  null,
  "Kontrollera om det finns uppdateringar"
 ],
 "Checking installed software": [
  null,
  "Kontrollerar installerad programvara"
 ],
 "Details": [
  null,
  "Detaljer"
 ],
 "Downloaded": [
  null,
  ""
 ],
 "Downloading": [
  null,
  ""
 ],
 "Downloading $0": [
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
 "Install": [
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
 "Install Software": [
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
  ""
 ],
 "No updates pending": [
  null,
  ""
 ],
 "Off": [
  null,
  ""
 ],
 "Ok": [
  null,
  ""
 ],
 "On": [
  null,
  ""
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
 "Total size: $0": [
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
 "Waiting for other software management operations to finish": [
  null,
  ""
 ],
 "You need to re-subscribe this system.": [
  null,
  "Du behöver prenumerera om detta system."
 ],
 "Your browser will disconnect, but this does not affect the update process. You can reconnect in a few moments to continue watching the progress.": [
  null,
  "Din webbläsare kommer kopplas ifrån, men detta påverkar inte uppdateringsprocessen.  Du kan återansluta om några ögonblick för att fortsätta följa förloppet."
 ],
 "Your server will close the connection soon. You can reconnect after it has restarted.": [
  null,
  "Din server kommer stänga förbindelsen snart.  Du kan återansluta efter att den har startat om."
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