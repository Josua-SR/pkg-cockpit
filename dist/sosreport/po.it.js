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
  "language": "it",
  "x-generator": "Zanata 4.6.2"
 },
 "Cancel": [
  null,
  "Annulla"
 ],
 "Close": [
  null,
  "Chiudi"
 ],
 "Create Report": [
  null,
  "Crea report"
 ],
 "Create diagnostic report": [
  null,
  "Crea un rapporto diagnostico"
 ],
 "Diagnostic reports": [
  null,
  "Rapporti diagnostici"
 ],
 "Done!": [
  null,
  "Fatto!"
 ],
 "Download report": [
  null,
  "Download report"
 ],
 "Generating report": [
  null,
  "Generazione di report"
 ],
 "No archive has been created.": [
  null,
  "Non è stato creato alcun archivio."
 ],
 "The collected information will be stored locally on the system.": [
  null,
  "Le informazioni raccolte saranno memorizzate localmente sul sistema."
 ],
 "The generated archive contains data considered sensitive and its content should be reviewed by the originating organization before being passed to any third party.": [
  null,
  "L'archivio generato contiene dati considerati sensibili e il suo contenuto deve essere esaminato dall'organizzazione di origine prima di essere trasmesso a terzi."
 ],
 "This tool will collect system configuration and diagnostic information from this system for use with diagnosing problems with the system.": [
  null,
  "Questo strumento raccoglierà informazioni di configurazione del sistema e informazioni diagnostiche da questo sistema per l'uso con la diagnosi dei problemi con il sistema."
 ]
}));
