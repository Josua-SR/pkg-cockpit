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
  "language": "fi",
  "x-generator": "Zanata 4.6.2"
 },
 "Cancel": [
  null,
  "Peru"
 ],
 "Close": [
  null,
  "Sulje"
 ],
 "Create Report": [
  null,
  "Luo raportti"
 ],
 "Create diagnostic report": [
  null,
  "Luo diagnostiikkaraportti"
 ],
 "Diagnostic reports": [
  null,
  "Diagnostiikkaraportit"
 ],
 "Done!": [
  null,
  "Valmis!"
 ],
 "Download report": [
  null,
  "Lataa raportti"
 ],
 "Generating report": [
  null,
  "Luodaan raporttia"
 ],
 "No archive has been created.": [
  null,
  ""
 ],
 "The collected information will be stored locally on the system.": [
  null,
  "Kerätyt tiedot tallennetaan paikallisesti järjestelmään."
 ],
 "The generated archive contains data considered sensitive and its content should be reviewed by the originating organization before being passed to any third party.": [
  null,
  ""
 ],
 "This tool will collect system configuration and diagnostic information from this system for use with diagnosing problems with the system.": [
  null,
  ""
 ]
}));
