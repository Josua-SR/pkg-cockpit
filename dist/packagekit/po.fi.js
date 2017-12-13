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
  "language": "fi",
  "x-generator": "Zanata 3.9.6"
 },
 "$0 more…": [
  null,
  "$0 lisää…"
 ],
 "$0 update": [
  "$0 updates",
  "$0 päivitys",
  "$0 päivitystä"
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
 "Apply all updates": [
  null,
  "Toteuta kaikki päivitykset"
 ],
 "Apply security updates": [
  null,
  "Toteuta tietoturvapäivitykset"
 ],
 "Applying updates": [
  null,
  "Toteutetaan päivityksiä"
 ],
 "Applying updates failed": [
  null,
  "Päivitystan toteuttaminen epäonnistui"
 ],
 "Automatic Updates": [
  null,
  "Automaattiset päivitykset"
 ],
 "Available Updates": [
  null,
  "Saatavilla olevat päivitykset"
 ],
 "Bugs": [
  null,
  ""
 ],
 "Cancel": [
  null,
  "Peru"
 ],
 "Check for Updates": [
  null,
  "Etsi Päivityksiä"
 ],
 "Cockpit itself will be updated.": [
  null,
  ""
 ],
 "Details": [
  null,
  "Yksityiskohdat"
 ],
 "Downloaded": [
  null,
  "Ladattu"
 ],
 "Downloading": [
  null,
  "Ladataan"
 ],
 "Ignore": [
  null,
  "Ohita"
 ],
 "Initializing...": [
  null,
  ""
 ],
 "Install All Updates": [
  null,
  "Asenna kaikki päivitykset"
 ],
 "Install Security Updates": [
  null,
  "Asenna tietoturvapäivitykset"
 ],
 "Installed": [
  null,
  "Asennettu"
 ],
 "Installing": [
  null,
  "Asennetaan"
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
 "More information…": [
  null,
  ""
 ],
 "Name": [
  null,
  "Nimi"
 ],
 "No updates pending": [
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
 "Package information": [
  null,
  "Paketin tiedot"
 ],
 "PackageKit crashed": [
  null,
  "PackageKit kaatui"
 ],
 "PackageKit is not installed": [
  null,
  "PackageKit ei ole asennettu"
 ],
 "PackageKit reported error code $0": [
  null,
  "PackageKit raportoi virhekoodin $0"
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
  "Käynnistä uudelleen nyt"
 ],
 "Restart Recommended": [
  null,
  ""
 ],
 "Restarting": [
  null,
  ""
 ],
 "Security Update": [
  null,
  "Tietoturvapäivitys"
 ],
 "Set up": [
  null,
  ""
 ],
 "Setting up": [
  null,
  ""
 ],
 "Software Updates": [
  null,
  "Ohjelmistopäivitykset"
 ],
 "Some other program is currently using the package manager, please wait...": [
  null,
  ""
 ],
 "System is up to date": [
  null,
  "Järjestelmä on ajan tasalla"
 ],
 "The following packages were recently updated:": [
  null,
  "Seuraavat paketit päivitettiin äskettäin:"
 ],
 "The following packages were updated $0:": [
  null,
  "Seuraavat paketit päivitettiin $0:"
 ],
 "This system is not registered": [
  null,
  "Tätä järjestelmää ei ole rekisteröity"
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
  "Päivityshistoria"
 ],
 "Update Log": [
  null,
  "Päivitysloki"
 ],
 "Updated": [
  null,
  "Päivitetty"
 ],
 "Updated packages may require a restart to take effect.": [
  null,
  ""
 ],
 "Updates are disabled.": [
  null,
  "Päivitykset on poistettu käytöstä."
 ],
 "Updating": [
  null,
  "Päivitetään"
 ],
 "Verified": [
  null,
  "Vahvistettu"
 ],
 "Verifying": [
  null,
  "Vahvistetaan"
 ],
 "Version": [
  null,
  "Versio"
 ],
 "View Registration Details": [
  null,
  ""
 ],
 "When you get disconnected, the updates will continue in the background. You can reconnect and resume watching the update progress.": [
  null,
  ""
 ],
 "You need to re-subscribe this system.": [
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
  "päivittäin"
 ],
 "on Fridays": [
  null,
  "perjantaisin"
 ],
 "on Mondays": [
  null,
  "maanantaisin"
 ],
 "on Saturdays": [
  null,
  "lauantaisin"
 ],
 "on Sundays": [
  null,
  "sunnuntaisin"
 ],
 "on Thursdays": [
  null,
  "torstaisin"
 ],
 "on Tuesdays": [
  null,
  "tiistaisin"
 ],
 "on Wednesdays": [
  null,
  "keskiviikkoisin"
 ],
 "undefined": [
  null,
  "määrittämätön"
 ]
}));
