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
nplurals=3; plural=(n==1) ? 0 : (n>=2 && n<=4) ? 1 : 2;
return plural;
},
  "language": "cs",
  "x-generator": "Zanata 4.6.2"
 },
 "Cancel": [
  null,
  "Storno"
 ],
 "Close": [
  null,
  "Zavřít"
 ],
 "Create Report": [
  null,
  "Vytvořit výkaz"
 ],
 "Create diagnostic report": [
  null,
  "Vytvořit diagnostické hlášení"
 ],
 "Diagnostic reports": [
  null,
  "Diagnostická hlášení"
 ],
 "Done!": [
  null,
  "Hotovo!"
 ],
 "Download report": [
  null,
  "Stáhnout si výkaz"
 ],
 "Generating report": [
  null,
  "Vytváření výkazu"
 ],
 "No archive has been created.": [
  null,
  "Nebyl vytvořen žádný archiv."
 ],
 "The collected information will be stored locally on the system.": [
  null,
  "Shromážděné informace budou uloženy lokálně na systému."
 ],
 "The generated archive contains data considered sensitive and its content should be reviewed by the originating organization before being passed to any third party.": [
  null,
  "Vytvořený archiv obsahuje data považovaná za citlivá a jeho obsah by měl být zrevidován organizací, ze které pochází předtím, než bude předán jakékoli třetí straně."
 ],
 "This tool will collect system configuration and diagnostic information from this system for use with diagnosing problems with the system.": [
  null,
  "Tento nástroj shromáždí informace o nastavení systému a diagnostice pro použití při analýze problémů se systémem."
 ]
}));
