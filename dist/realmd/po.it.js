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
  "language": "it",
  "x-generator": "Zanata 4.6.2"
 },
 "$0 Only users with local credentials will be able to log into this machine. This may also effect other services as DNS resolution settings and the list of trusted CAs may change.": [
  null,
  "$0 Solo gli utenti con account locali potranno accedere a questa macchina. Questo comportamento potrebbe essere esteso anche ad altri servizi come le impostazioni di risoluzione del DNS e la lista delle CA certificate potrebbe variare."
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
  ""
 ],
 "Are you sure you want to leave the '$0' domain?": [
  null,
  ""
 ],
 "Are you sure you want to leave this domain?": [
  null,
  ""
 ],
 "Authentication": [
  null,
  "Autenticazione"
 ],
 "Automatic": [
  null,
  "Automatico"
 ],
 "Cancel": [
  null,
  "Annulla"
 ],
 "Checking installed software": [
  null,
  ""
 ],
 "Computer OU": [
  null,
  ""
 ],
 "Domain $0 could not be contacted": [
  null,
  ""
 ],
 "Domain $0 is not supported": [
  null,
  ""
 ],
 "Domain Address": [
  null,
  ""
 ],
 "Domain Administrator Name": [
  null,
  ""
 ],
 "Domain Administrator Password": [
  null,
  ""
 ],
 "Downloading $0": [
  null,
  ""
 ],
 "Install": [
  null,
  "Installa"
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
  "Unisci"
 ],
 "Join Domain": [
  null,
  "Unione al dominio"
 ],
 "Join a Domain": [
  null,
  ""
 ],
 "Joining this domain is not supported": [
  null,
  ""
 ],
 "Leave": [
  null,
  ""
 ],
 "Leave Domain": [
  null,
  ""
 ],
 "More": [
  null,
  ""
 ],
 "Next": [
  null,
  "Avanti"
 ],
 "Off": [
  null,
  "Off"
 ],
 "Ok": [
  null,
  "Ok"
 ],
 "On": [
  null,
  "On"
 ],
 "One Time Password": [
  null,
  ""
 ],
 "PackageKit crashed": [
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
 "The user <b>$0</b> is not permitted to modify realms": [
  null,
  ""
 ],
 "This may take a while": [
  null,
  ""
 ],
 "Total size: $0": [
  null,
  ""
 ],
 "User Name": [
  null,
  ""
 ],
 "User Password": [
  null,
  ""
 ],
 "Waiting for other software management operations to finish": [
  null,
  ""
 ],
 "e.g. \"$0\"": [
  null,
  ""
 ]
}));
