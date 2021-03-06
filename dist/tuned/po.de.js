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
 "Cancel": [
  null,
  "Abbrechen"
 ],
 "Change Performance Profile": [
  null,
  "Leistungsprofil ändern"
 ],
 "Change Profile": [
  null,
  "Profil ändern"
 ],
 "Communication with tuned has failed": [
  null,
  "Kommunikation mit tuned schlug fehl"
 ],
 "Disable tuned": [
  null,
  "Tuned deaktivieren"
 ],
 "Failed to disable tuned": [
  null,
  "Fehler beim Deaktivieren"
 ],
 "Failed to disable tuned profile": [
  null,
  "Das abgestimmte Profil konnte nicht deaktiviert werden"
 ],
 "Failed to enable tuned": [
  null,
  "Tuned konnte nicht aktiviert werden"
 ],
 "Failed to switch profile": [
  null,
  "Profil konnte nicht gewechselt werden"
 ],
 "None": [
  null,
  "Kein"
 ],
 "Ok": [
  null,
  "OK"
 ],
 "The user <b>$0</b> is not permitted to change profiles": [
  null,
  "Der Benutzer <b>$0</b> darf das Profil nicht ändern"
 ],
 "This system is using a custom profile": [
  null,
  "Dieses System benutzt ein benutzerdefiniertes Profil"
 ],
 "This system is using the recommended profile": [
  null,
  "Dieses System benutzt das empfohlene Profil"
 ],
 "Tuned has failed to start": [
  null,
  "Tuned konnte nicht gestartet werden"
 ],
 "Tuned is not available": [
  null,
  "Tuned ist nicht verfügbar"
 ],
 "Tuned is not running": [
  null,
  "Tuned läuft nicht"
 ],
 "Tuned is off": [
  null,
  "Tuned ist ausgeschaltet"
 ],
 "none": [
  null,
  "kein"
 ],
 "recommended": [
  null,
  "MII (empfohlen)"
 ]
}));
