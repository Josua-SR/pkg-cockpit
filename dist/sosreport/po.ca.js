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
  "language": "ca",
  "x-generator": "Zanata 4.6.2"
 },
 "Cancel": [
  null,
  "Cancel·la"
 ],
 "Close": [
  null,
  "Tanca"
 ],
 "Create Report": [
  null,
  "Crea l'informe"
 ],
 "Create diagnostic report": [
  null,
  "Crea l'informe de diagnòstic"
 ],
 "Diagnostic reports": [
  null,
  "Informes de diagnòstic"
 ],
 "Done!": [
  null,
  "Fet!"
 ],
 "Download report": [
  null,
  "Baixa l'informe"
 ],
 "Generating report": [
  null,
  "S'està generant l'informe"
 ],
 "No archive has been created.": [
  null,
  "No s'ha creat cap arxiu."
 ],
 "The collected information will be stored locally on the system.": [
  null,
  "La informació recopilada s'emmagatzemarà localment al sistema."
 ],
 "The generated archive contains data considered sensitive and its content should be reviewed by the originating organization before being passed to any third party.": [
  null,
  "L'arxiu generat conté dades considerades com a sensibles i el seu contingut s'ha de revisar abans de passar-ho a un tercer."
 ],
 "This tool will collect system configuration and diagnostic information from this system for use with diagnosing problems with the system.": [
  null,
  "Aquesta eina recopilarà la configuració i la informació de diagnòstic d'aquest sistema per a l'ús amb el diagnòstic de problemes amb el sistema."
 ]
}));
