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
  "x-generator": "Zanata 3.9.6"
 },
 "Administrator Password": [
  null,
  "Passwort des Administrators"
 ],
 "Authentication": [
  null,
  "Authentifizierung"
 ],
 "Automatic": [
  null,
  "Automatisch"
 ],
 "Cancel": [
  null,
  "Abbrechen"
 ],
 "Cannot join a domain because realmd is not available on this system": [
  null,
  "Es konnte keiner Domain beigetreten werden, da realmd auf diesem System nicht verfügbar ist."
 ],
 "Computer OU": [
  null,
  "Computer OU"
 ],
 "Domain $0 could not be contacted": [
  null,
  "Die Domain $0 konnte nicht kontaktiert werden"
 ],
 "Domain $0 is not supported": [
  null,
  ""
 ],
 "Domain Address": [
  null,
  "Domänenadressen"
 ],
 "Domain Administrator Name": [
  null,
  "Name des Domain-Administrators"
 ],
 "Domain Administrator Password": [
  null,
  "Passwort des Domain-Administrators"
 ],
 "Join": [
  null,
  "Beitreten"
 ],
 "Join Domain": [
  null,
  "Einer Domain beitreten"
 ],
 "Join a Domain": [
  null,
  "Einer Domain beitreten"
 ],
 "Joining this domain is not supported": [
  null,
  ""
 ],
 "Leave": [
  null,
  "Verlassen"
 ],
 "Leave Domain": [
  null,
  "Einer Domain beitreten"
 ],
 "More": [
  null,
  "Mehr"
 ],
 "Next": [
  null,
  "Weiter"
 ],
 "Off": [
  null,
  "Aus"
 ],
 "On": [
  null,
  "Ein"
 ],
 "One Time Password": [
  null,
  "Einmalpasswort"
 ],
 "The user <b>$0</b> is not permitted to modify realms": [
  null,
  "Der Benutzer <b>$0</b> hat keine Rechte, Bereiche zu änden."
 ],
 "This may take a while": [
  null,
  "Dies kann eine Weile dauern"
 ],
 "User Name": [
  null,
  "Benutzername"
 ],
 "User Password": [
  null,
  "Benutzerpasswort"
 ],
 "e.g. \"$0\"": [
  null,
  "z.B. \"$0\""
 ]
}));
