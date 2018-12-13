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
 "Cancel": [
  null,
  "Avbryt"
 ],
 "Close": [
  null,
  "Stäng"
 ],
 "Create Report": [
  null,
  "Skapa en rapport"
 ],
 "Create diagnostic report": [
  null,
  "Skapa en diagnostisk rapport"
 ],
 "Diagnostic reports": [
  null,
  "Diagnostikrapporter"
 ],
 "Done!": [
  null,
  "Klar!"
 ],
 "Download report": [
  null,
  "Hämta en rapport"
 ],
 "Generating report": [
  null,
  "Genererar en rapport"
 ],
 "No archive has been created.": [
  null,
  "Inget arkiv har skapats."
 ],
 "The collected information will be stored locally on the system.": [
  null,
  "Den insamlade informationen kommer lagras lokalt på systemet."
 ],
 "The generated archive contains data considered sensitive and its content should be reviewed by the originating organization before being passed to any third party.": [
  null,
  "Det genererade arkivet innehåller data som betraktas som känsligt och dess innehåll bör granskas av ursprungsorganisationen innan den skickas till någon tredje part."
 ],
 "This tool will collect system configuration and diagnostic information from this system for use with diagnosing problems with the system.": [
  null,
  "Detta verktyg kommer samla in systemkonfiguration och diagnostisk information från systemet för att användas vid diagnostisering av problem med systemet."
 ]
}));
