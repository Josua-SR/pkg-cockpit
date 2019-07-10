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
 "$0 disk is missing": [
  "$0 disks are missing",
  "$0 Festplatte fehlt",
  "$0 Festplatten fehlen"
 ],
 "Cancel": [
  null,
  "Abbrechen"
 ],
 "Control": [
  null,
  "Steuerung"
 ],
 "Empty": [
  null,
  "Leer"
 ],
 "Error": [
  null,
  "Fehler"
 ],
 "Memory": [
  null,
  "Speicher"
 ],
 "Network": [
  null,
  "Netzwerk"
 ],
 "No matching files found": [
  null,
  "Keine passenden Dateien gefunden"
 ],
 "Not Ready": [
  null,
  "Nicht bereit"
 ],
 "Ok": [
  null,
  "OK"
 ],
 "Path to file": [
  null,
  "Pfad zur Datei"
 ],
 "Ready": [
  null,
  "Bereit"
 ],
 "Too many files found": [
  null,
  "Es wurden zu viele Dateien gefunden"
 ],
 "Unavailable": [
  null,
  "Nicht verfügbar"
 ],
 "User": [
  null,
  "Benutzer"
 ],
 "undefined": [
  null,
  "nicht definiert"
 ],
 "disk-non-rotational\u0004$0 disk is missing": [
  "$0 disks are missing",
  "$0 Datenträger fehlt",
  "$0 Datenträger fehlen"
 ],
 "key\u0004Control": [
  null,
  "Strg"
 ],
 "verb\u0004Empty": [
  null,
  "Leeren"
 ],
 "verb\u0004Ready": [
  null,
  "Bereiten"
 ]
}));
