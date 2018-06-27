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
  "language": "hu",
  "x-generator": "Zanata 4.4.5"
 },
 "Cancel": [
  null,
  ""
 ],
 "Change Performance Profile": [
  null,
  "Teljesítményprofil váltása"
 ],
 "Change Profile": [
  null,
  "Profilváltás"
 ],
 "Communication with tuned has failed": [
  null,
  "Kommunikáció a Tuned alkalmazással meghíúsult"
 ],
 "Disable tuned": [
  null,
  "Tuned kikapcsolása"
 ],
 "Failed to disable tuned": [
  null,
  "Tuned alkalmazás kikapcsolása sikertelen"
 ],
 "Failed to disable tuned profile": [
  null,
  "Tuned alkalmazás profiljának kikapcsolása sikertelen"
 ],
 "Failed to enable tuned": [
  null,
  "Tuned alkalmazás engedélyezése sikertelen"
 ],
 "Failed to switch profile": [
  null,
  "Profilváltás sikertelen"
 ],
 "None": [
  null,
  "Nincs"
 ],
 "Ok": [
  null,
  ""
 ],
 "The user <b>$0</b> is not permitted to change profiles": [
  null,
  ""
 ],
 "This system is using a custom profile": [
  null,
  "Ez a rendszer az egyéni profilt használja"
 ],
 "This system is using the recommended profile": [
  null,
  "Ez a rendszer az ajánlott profilt használja"
 ],
 "Tuned has failed to start": [
  null,
  "Tuned alkalmazás nem indult el"
 ],
 "Tuned is not available": [
  null,
  "Tuned alkalmazás nem elérhető"
 ],
 "Tuned is not running": [
  null,
  "Tuned alkalmazás nem működik"
 ],
 "Tuned is off": [
  null,
  "Tuned alkalmazás kikapcsolva"
 ],
 "none": [
  null,
  ""
 ],
 "recommended": [
  null,
  ""
 ]
}));
