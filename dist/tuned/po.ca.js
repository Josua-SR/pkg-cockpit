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
  "language": "ca",
  "x-generator": "Zanata 4.4.5"
 },
 "Cancel": [
  null,
  "Cancel·la"
 ],
 "Change Performance Profile": [
  null,
  "Canvia el perfil de rendiment"
 ],
 "Change Profile": [
  null,
  "Canvia el perfil"
 ],
 "Communication with tuned has failed": [
  null,
  "Ha fallat la comunicació amb tuned"
 ],
 "Disable tuned": [
  null,
  "Inhabilita tuned"
 ],
 "Failed to disable tuned": [
  null,
  "Ha fallat la inhabilitació de tuned"
 ],
 "Failed to disable tuned profile": [
  null,
  "Ha fallat la inhabilitació del perfil de tuned"
 ],
 "Failed to enable tuned": [
  null,
  "Ha fallat l'habilitació de tuned"
 ],
 "Failed to switch profile": [
  null,
  "Ha fallat el canvi de perfil"
 ],
 "None": [
  null,
  "Cap"
 ],
 "Ok": [
  null,
  "D'acord"
 ],
 "This system is using a custom profile": [
  null,
  "El sistema està utilitzant un perfil personalitzat"
 ],
 "This system is using the recommended profile": [
  null,
  "El sistema està utilitzant el perfil recomanat"
 ],
 "Tuned has failed to start": [
  null,
  "Tuned ha fallat en iniciar-se"
 ],
 "Tuned is not available": [
  null,
  "Tuned no està disponible"
 ],
 "Tuned is not running": [
  null,
  "Tuned no s'està executant"
 ],
 "Tuned is off": [
  null,
  "Tuned no està aturat"
 ],
 "none": [
  null,
  "cap"
 ],
 "recommended": [
  null,
  "recomanat"
 ]
}));
