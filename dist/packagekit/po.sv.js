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
  "Hämtat"
 ],
 "Downloading": [
  null,
  "Hämtar"
 ],
 "Downloading $0": [
  null,
  "Hämtar $0"
 ],
 "Errata:": [
  null,
  "Errata:"
 ],
 "Ignore": [
  null,
  "Ignorera"
 ],
 "Initializing...": [
  null,
  "Initierar …"
 ],
 "Install": [
  null,
  "Installera"
 ],
 "Install All Updates": [
  null,
  "Installera alla uppdateringar"
 ],
 "Install Security Updates": [
  null,
  "Installera säkerhetsuppdateringar"
 ],
 "Install Software": [
  null,
  "Installera programvara"
 ],
 "Installed": [
  null,
  "Installerad"
 ],
 "Installing": [
  null,
  "Installerar"
 ],
 "Installing $0": [
  null,
  "Installerar $0"
 ],
 "Last checked: $0 ago": [
  null,
  "Senast kontrollerad: $0 sedan"
 ],
 "Loading available updates failed": [
  null,
  "Inläsningen av tillgängliga uppdateringar misslyckades"
 ],
 "Loading available updates, please wait...": [
  null,
  "Läser in tillgängliga uppdateringar, var god dröj …"
 ],
 "Name": [
  null,
  "Namn"
 ],
 "No updates pending": [
  null,
  "Inga väntande uppdateringar"
 ],
 "Off": [
  null,
  "Av"
 ],
 "Ok": [
  null,
  "Ok"
 ],
 "On": [
  null,
  "På"
 ],
 "Package information": [
  null,
  "Paketinformation"
 ],
 "PackageKit is not installed": [
  null,
  "PackageKit är inte installerat"
 ],
 "PackageKit reported error code $0": [
  null,
  "PackageKit rapporterade felkod $0"
 ],
 "Refreshing package information": [
  null,
  "Uppdaterar paketinformation"
 ],
 "Register…": [
  null,
  "Registrera …"
 ],
 "Removals:": [
  null,
  "Borttagningar:"
 ],
 "Removing $0": [
  null,
  "Tar bort $0"
 ],
 "Restart Now": [
  null,
  "Starta om nu"
 ],
 "Restart Recommended": [
  null,
  "Omstart rekommenderas"
 ],
 "Restarting": [
  null,
  "Startar om"
 ],
 "Set up": [
  null,
  "Sätt upp"
 ],
 "Setting up": [
  null,
  "Sätter upp"
 ],
 "Severity": [
  null,
  "Allvarsgrad"
 ],
 "Severity:": [
  null,
  "Allvarsgrad:"
 ],
 "Software Updates": [
  null,
  "Programvaruuppdateringar"
 ],
 "Some other program is currently using the package manager, please wait...": [
  null,
  "Något annat program använder just nu pakethanteraren, var god dröj …"
 ],
 "System is up to date": [
  null,
  "Systemet är uppdaterat"
 ],
 "The following packages were recently updated:": [
  null,
  "Följande paket uppdaterades nyligen:"
 ],
 "The following packages were updated $0:": [
  null,
  "Följande paket uppdaterades $0:"
 ],
 "This system is not registered": [
  null,
  "Detta system är inte registrerat"
 ],
 "This web console will be updated.": [
  null,
  "Denna webbkonsol kommer uppdateras."
 ],
 "To get software updates, this system needs to be registered with Red Hat, either using the Red Hat Customer Portal or a local subscription server.": [
  null,
  "För att få programvaruuppdateringar behöver detta system registreras hos Red Hat, antingen genom att använda Red Hats kundportal eller en lokal prenumerationsserver."
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
  ""
 ],
 "Updated packages may require a restart to take effect.": [
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
 "Waiting for other software management operations to finish": [
  null,
  ""
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
  ""
 ]
}));
