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
  "x-generator": "Zanata 4.6.0"
 },
 "Cancel": [
  null,
  "Peru"
 ],
 "Change Performance Profile": [
  null,
  "Vaihda suorituskyvyn profiili"
 ],
 "Change Profile": [
  null,
  "Vaihda profiili"
 ],
 "Communication with tuned has failed": [
  null,
  "Yhteydenpito tuned kanssa epäonnistui"
 ],
 "Disable tuned": [
  null,
  "Poista tuned käytöstä"
 ],
 "Failed to disable tuned": [
  null,
  "Ei voitu poistaa tuned käytöstä"
 ],
 "Failed to disable tuned profile": [
  null,
  "Ei voitu poistaa tuned-profiilia käytöstä"
 ],
 "Failed to enable tuned": [
  null,
  "Ei voitu ottaa tuned käyttöön"
 ],
 "Failed to switch profile": [
  null,
  "Ei voitu vaihtaa profiilia"
 ],
 "None": [
  null,
  ""
 ],
 "Ok": [
  null,
  "OK"
 ],
 "The user <b>$0</b> is not permitted to change profiles": [
  null,
  ""
 ],
 "This system is using a custom profile": [
  null,
  "Tämä järjestelmä käyttää mukautettua profiilia"
 ],
 "This system is using the recommended profile": [
  null,
  "Tämä järjestelmä käyttää suositeltua profiilia"
 ],
 "Tuned has failed to start": [
  null,
  ""
 ],
 "Tuned is not available": [
  null,
  ""
 ],
 "Tuned is not running": [
  null,
  "Tuned ei ole käynnissä"
 ],
 "Tuned is off": [
  null,
  ""
 ],
 "none": [
  null,
  "Ei mitään"
 ],
 "recommended": [
  null,
  "suositeltu"
 ]
}));
