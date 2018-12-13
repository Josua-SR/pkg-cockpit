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
  "x-generator": "Zanata 4.6.2"
 },
 "Applications": [
  null,
  "Anwendungen"
 ],
 "Cancel": [
  null,
  "Abbrechen"
 ],
 "Checking for new applications": [
  null,
  "Nach neuen Anwendungen suchen"
 ],
 "Close": [
  null,
  "Schließen"
 ],
 "Error": [
  null,
  "Fehler"
 ],
 "Go to Application": [
  null,
  "Gehe zur Anwendung"
 ],
 "Install": [
  null,
  "Installation"
 ],
 "Installing": [
  null,
  "Installation wird ausgeführt"
 ],
 "No applications installed or available": [
  null,
  "Keine Anwendungen installiert oder verfügbar"
 ],
 "No description provided.": [
  null,
  "Keine Beschreibung angegeben."
 ],
 "No installation package found for this application.": [
  null,
  "Kein Installationspaket für diese Anwendung gefunden."
 ],
 "Ok": [
  null,
  "OK"
 ],
 "Remove": [
  null,
  "Entfernen"
 ],
 "Removing": [
  null,
  "Entfernen"
 ],
 "Unknown Application": [
  null,
  "Unbekannte Anwendung"
 ],
 "Waiting for other programs to finish using the package manager...": [
  null,
  "Warten, bis andere Programme mit dem Paketmanager fertig sind ..."
 ]
}));
