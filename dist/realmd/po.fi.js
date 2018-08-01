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
  "x-generator": "Zanata 4.5.0"
 },
 "$0 Only users with local credentials will be able to log into this machine. This may also effect other services as DNS resolution settings and the list of trusted CAs may change.": [
  null,
  "$0 Vain paikalliset käyttäjät voivat kirjautua tälle koneelle. Tämä voi myös vaikuttaa muihin palveluihin, sillä DNS-määrityksen asetukset ja luotettujen CA:den lista voivat muuttua. "
 ],
 "$0 is not available from any repository.": [
  null,
  ""
 ],
 "$0 will be installed.": [
  null,
  ""
 ],
 "Additional packages:": [
  null,
  ""
 ],
 "Administrator Password": [
  null,
  "Ylläpidon salasana"
 ],
 "Are you sure you want to leave the '$0' domain?": [
  null,
  "Oletko varma, että haluat poistua '$0' -domainista?"
 ],
 "Are you sure you want to leave this domain?": [
  null,
  "Oletko varma, että haluat poistua tästä domainista?"
 ],
 "Authentication": [
  null,
  "Tunnistautuminen"
 ],
 "Automatic": [
  null,
  "Automaattinen"
 ],
 "Cancel": [
  null,
  "Peru"
 ],
 "Cannot join a domain because realmd is not available on this system": [
  null,
  ""
 ],
 "Checking installed software": [
  null,
  ""
 ],
 "Computer OU": [
  null,
  "Tietokone-OU"
 ],
 "Domain $0 could not be contacted": [
  null,
  "Domainiin $0 ei saatu yhteyttä"
 ],
 "Domain $0 is not supported": [
  null,
  "Domain $0 ei ole tuettu"
 ],
 "Domain Address": [
  null,
  "Domain-osoite"
 ],
 "Domain Administrator Name": [
  null,
  "Domain-ylläpitäjän nimi"
 ],
 "Domain Administrator Password": [
  null,
  "Domain-ylläpitäjän salasana"
 ],
 "Downloading $0": [
  null,
  ""
 ],
 "Install": [
  null,
  "Asenna"
 ],
 "Install Software": [
  null,
  ""
 ],
 "Installing $0": [
  null,
  ""
 ],
 "Join": [
  null,
  "Liity"
 ],
 "Join Domain": [
  null,
  "Liity domainiin"
 ],
 "Join a Domain": [
  null,
  "Liity domainiin"
 ],
 "Joining this domain is not supported": [
  null,
  "Liittyminen tähän domainiin ei ole tuettu"
 ],
 "Leave": [
  null,
  "Jätä"
 ],
 "Leave Domain": [
  null,
  "Jätä domain"
 ],
 "More": [
  null,
  ""
 ],
 "Next": [
  null,
  "Seuraava"
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
 "One Time Password": [
  null,
  "Kertakäyttöinen salasana"
 ],
 "PackageKit crashed": [
  null,
  "PackageKit kaatui"
 ],
 "Removals:": [
  null,
  ""
 ],
 "Removing $0": [
  null,
  ""
 ],
 "The user <b>$0</b> is not permitted to modify realms": [
  null,
  "Käyttäjällä <b>$0</b> ei ole oikeutta muokata realmeja"
 ],
 "This may take a while": [
  null,
  "Tässä voi mennä hetki."
 ],
 "Total size: $0": [
  null,
  ""
 ],
 "User Name": [
  null,
  "Käyttäjätunnus"
 ],
 "User Password": [
  null,
  "Salasana"
 ],
 "Waiting for other software management operations to finish": [
  null,
  ""
 ],
 "e.g. \"$0\"": [
  null,
  "esim. \"$0\""
 ]
}));
