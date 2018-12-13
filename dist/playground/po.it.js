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
 "$0 disk is missing": [
  "$0 disks are missing",
  "Il $0 disco non esiste",
  "Il $0 disco non esiste"
 ],
 "Cancel": [
  null,
  "Annulla"
 ],
 "Control": [
  null,
  "Controllo"
 ],
 "Delete '{{ name }}'": [
  null,
  "Cancellare '{{ name }}' "
 ],
 "Empty": [
  null,
  "Vuoto"
 ],
 "Error": [
  null,
  "Errore"
 ],
 "Memory": [
  null,
  "Memoria"
 ],
 "Network": [
  null,
  "Rete"
 ],
 "No matching files found": [
  null,
  "Nessun file corrispondente trovato"
 ],
 "Not Ready": [
  null,
  "Non pronto"
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
 "Path to file": [
  null,
  "Percorso da file"
 ],
 "Ready": [
  null,
  "Ready"
 ],
 "Too many files found": [
  null,
  "Troppi file trovati"
 ],
 "Unavailable": [
  null,
  "Non disponibile"
 ],
 "User": [
  null,
  "Utente"
 ],
 "undefined": [
  null,
  "non definito"
 ],
 "disk-non-rotational\u0004$0 disk is missing": [
  "$0 disks are missing",
  "Il $0 disco non esiste",
  "Il $0 disco non esiste"
 ],
 "key\u0004Control": [
  null,
  "Controllo"
 ],
 "verb\u0004Empty": [
  null,
  "Vuoto"
 ],
 "verb\u0004Ready": [
  null,
  "Pronto"
 ]
}));
