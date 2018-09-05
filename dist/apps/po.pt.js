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
  "language": "pt",
  "x-generator": "Zanata 4.6.0"
 },
 "Applications": [
  null,
  ""
 ],
 "Cancel": [
  null,
  ""
 ],
 "Checking for new applications": [
  null,
  ""
 ],
 "Close": [
  null,
  ""
 ],
 "Error": [
  null,
  ""
 ],
 "Go to Application": [
  null,
  ""
 ],
 "Install": [
  null,
  ""
 ],
 "Installing": [
  null,
  ""
 ],
 "No applications installed or available": [
  null,
  ""
 ],
 "No description provided.": [
  null,
  ""
 ],
 "No installation package found for this application.": [
  null,
  ""
 ],
 "Ok": [
  null,
  ""
 ],
 "PackageKit crashed": [
  null,
  ""
 ],
 "Remove": [
  null,
  ""
 ],
 "Removing": [
  null,
  ""
 ],
 "Unknown Application": [
  null,
  ""
 ],
 "Waiting for other programs to finish using the package manager...": [
  null,
  ""
 ]
}));
