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
  "x-generator": "Zanata 4.6.2"
 },
 "$0 is not available from any repository.": [
  null,
  ""
 ],
 "$0 update": [
  "$0 updates",
  "$0 päivitys",
  "$0 päivitystä"
 ],
 "$0 will be installed.": [
  null,
  ""
 ],
 "$1 security fix": [
  "$1 security fixes",
  "$1 turvallisuuspäivitys",
  "$1 turvallisuuspäivitykset"
 ],
 ", including $1 security fix": [
  ", including $1 security fixes",
  ", mukaan lukien $1 turvallisuuspäivitys",
  ", mukaan lukien $1 turvallisuuspäivitykset"
 ],
 "Additional packages:": [
  null,
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
  "Päivitysten toteuttaminen epäonnistui"
 ],
 "Automatic Updates": [
  null,
  "Automaattiset päivitykset"
 ],
 "Available Updates": [
  null,
  "Saatavilla olevat päivitykset"
 ],
 "Bugs:": [
  null,
  ""
 ],
 "Cancel": [
  null,
  "Peru"
 ],
 "Check for Updates": [
  null,
  "Etsi päivityksiä"
 ],
 "Checking installed software": [
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
  "Ohita"
 ],
 "Initializing...": [
  null,
  ""
 ],
 "Install": [
  null,
  "Asenna"
 ],
 "Install All Updates": [
  null,
  "Asenna kaikki päivitykset"
 ],
 "Install Security Updates": [
  null,
  "Asenna tietoturvapäivitykset"
 ],
 "Install Software": [
  null,
  ""
 ],
 "Installed": [
  null,
  "Asennettu"
 ],
 "Installing": [
  null,
  "Asennetaan"
 ],
 "Installing $0": [
  null,
  ""
 ],
 "Last checked: $0 ago": [
  null,
  "Viimeksi tarkistettu: $0 sitten"
 ],
 "Loading available updates failed": [
  null,
  "Saatavilla olevien päivitysten lataus epäonnistui"
 ],
 "Loading available updates, please wait...": [
  null,
  "Ladataan saatavilla olevat päivitykset, odota hetki..."
 ],
 "Name": [
  null,
  "Nimi"
 ],
 "No updates pending": [
  null,
  "Ei odottavia päivityksiä"
 ],
 "Off": [
  null,
  "Pois"
 ],
 "Ok": [
  null,
  "OK"
 ],
 "On": [
  null,
  "Päällä"
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
  "Päivitetään pakettitietoja"
 ],
 "Register…": [
  null,
  "Rekisteröi…"
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
  "Käynnistä uudelleen nyt"
 ],
 "Restart Recommended": [
  null,
  "Uudelleenkäynnistystä suositellaan"
 ],
 "Restarting": [
  null,
  "Käynnistetään uudelleen"
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
  "Päivitetyt paketit saattavat vaatia uudelleenkäynnistyksen, jotta muutokset tulevat voimaan."
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
 "security": [
  null,
  "$1 turvallisuuspäivitys"
 ],
 "undefined": [
  null,
  "määrittämätön"
 ]
}));
