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
 "$0 will be installed.": [
  null,
  "$0 kommer att installeras."
 ],
 "Additional packages:": [
  null,
  "Ytterligare paket:"
 ],
 "Administrator Password": [
  null,
  "Administratörslösenord"
 ],
 "After leaving the domain, only users with local credentials will be able to log into this machine. This may also affect other services as DNS resolution settings and the list of trusted CAs may change.": [
  null,
  ""
 ],
 "Authentication": [
  null,
  "Autentisering"
 ],
 "Automatic": [
  null,
  "Automatisk"
 ],
 "Cancel": [
  null,
  "Avbryt"
 ],
 "Checking installed software": [
  null,
  "Kontrollerar installerad programvara"
 ],
 "Client Software": [
  null,
  ""
 ],
 "Computer OU": [
  null,
  "Dator-OU"
 ],
 "Contacted domain": [
  null,
  ""
 ],
 "Domain": [
  null,
  "Domän"
 ],
 "Domain $0 could not be contacted": [
  null,
  "Domänen $0 kunde inte kontaktas"
 ],
 "Domain $0 is not supported": [
  null,
  "Domänen $0 stödjs inte"
 ],
 "Domain Address": [
  null,
  "Domänadress"
 ],
 "Domain Administrator Name": [
  null,
  "Domänadministratörens namn"
 ],
 "Domain Administrator Password": [
  null,
  "Domänadministratörens lösenord"
 ],
 "Downloading $0": [
  null,
  "Hämtar $0"
 ],
 "Host name should not be changed in a domain": [
  null,
  ""
 ],
 "Install": [
  null,
  "Installera"
 ],
 "Install Software": [
  null,
  "Installera programvara"
 ],
 "Installing $0": [
  null,
  "Installerar $0"
 ],
 "Join": [
  null,
  "Gå med"
 ],
 "Join Domain": [
  null,
  "Gå med i domän"
 ],
 "Join a Domain": [
  null,
  "Gå med i en domän"
 ],
 "Joining this domain is not supported": [
  null,
  "Att gå med i denna domän stödjs inte"
 ],
 "Leave Domain": [
  null,
  "Lämna domänen"
 ],
 "Login Format": [
  null,
  ""
 ],
 "More": [
  null,
  "Mera"
 ],
 "Next": [
  null,
  "Nästa"
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
 "One Time Password": [
  null,
  "Engångslösenord"
 ],
 "PackageKit crashed": [
  null,
  "PackageKit kraschade"
 ],
 "Removals:": [
  null,
  "Borttagningar:"
 ],
 "Removing $0": [
  null,
  "Tar bort $0"
 ],
 "Server Software": [
  null,
  ""
 ],
 "The user <b>$0</b> is not permitted to modify realms": [
  null,
  "Användaren <b>$0</b> har inte rättighet att ändra riken"
 ],
 "This may take a while": [
  null,
  "Detta kan ta ett tag"
 ],
 "Total size: $0": [
  null,
  "Total storlek: $0"
 ],
 "User Name": [
  null,
  "Användarnamn"
 ],
 "User Password": [
  null,
  "Användarens lösenord"
 ],
 "Validating address": [
  null,
  ""
 ],
 "Waiting for other software management operations to finish": [
  null,
  "Väntar på att andra programvaruhanteringsåtgärder skall bli klara"
 ],
 "e.g. \"$0\"": [
  null,
  "t.ex. ”$0”"
 ]
}));
