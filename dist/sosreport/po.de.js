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
 "Close": [
  null,
  "Schließen"
 ],
 "Create Report": [
  null,
  "Bericht erzeugen"
 ],
 "Create diagnostic report": [
  null,
  "Diagnosebericht erstellen"
 ],
 "Diagnostic reports": [
  null,
  "Diagnoseberichte"
 ],
 "Done!": [
  null,
  "Fertig!"
 ],
 "Download report": [
  null,
  "Bericht herunterladen"
 ],
 "Generating report": [
  null,
  "Bericht erstellen"
 ],
 "No archive has been created.": [
  null,
  "Es wurde kein Archiv erstellt."
 ],
 "The collected information will be stored locally on the system.": [
  null,
  "Die gesammelten Informationen werden lokal auf dem System gespeichert."
 ],
 "The generated archive contains data considered sensitive and its content should be reviewed by the originating organization before being passed to any third party.": [
  null,
  "Das erzeugte Archiv enthält Daten, die als vertraulich betrachtet werden. Der Inhalt sollte von der ursprünglichen Organisation geprüft werden, bevor sie an Dritte weitergegeben wird."
 ],
 "This tool will collect system configuration and diagnostic information from this system for use with diagnosing problems with the system.": [
  null,
  "Dieses Tool erfasst Systemkonfigurations- und Diagnoseinformationen von diesem System, um Probleme mit dem System zu diagnostizieren."
 ]
}));
