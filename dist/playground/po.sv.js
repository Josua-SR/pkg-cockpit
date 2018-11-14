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
 "$0 disk is missing": [
  "$0 disks are missing",
  "$0 disk saknas",
  "$0 diskar saknas"
 ],
 "Cancel": [
  null,
  "Avbryt"
 ],
 "Control": [
  null,
  "Styrning"
 ],
 "Delete '{{ name }}'": [
  null,
  "Ta bort”{{ name }}”"
 ],
 "Empty": [
  null,
  "Tom"
 ],
 "Error": [
  null,
  "Fel"
 ],
 "Memory": [
  null,
  "Minne"
 ],
 "Network": [
  null,
  "Nätverk"
 ],
 "No matching files found": [
  null,
  "Inga matchande filer hittade"
 ],
 "Not Ready": [
  null,
  "Inte klar"
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
 "Path to file": [
  null,
  ""
 ],
 "Ready": [
  null,
  "Klar"
 ],
 "Too many files found": [
  null,
  ""
 ],
 "Unavailable": [
  null,
  ""
 ],
 "User": [
  null,
  ""
 ],
 "undefined": [
  null,
  ""
 ],
 "disk-non-rotational\u0004$0 disk is missing": [
  "$0 disks are missing",
  "$0 disk saknas",
  "$0 diskar saknas"
 ],
 "key\u0004Control": [
  null,
  "Styrning"
 ],
 "verb\u0004Empty": [
  null,
  "Töm"
 ],
 "verb\u0004Ready": [
  null,
  "Klar"
 ]
}));
