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
 "Applications": [
  null,
  "Aplikace"
 ],
 "Cancel": [
  null,
  "Storno"
 ],
 "Checking for new applications": [
  null,
  "Hledají se nové aplikace"
 ],
 "Close": [
  null,
  "Zavřít"
 ],
 "Error": [
  null,
  "Chyba"
 ],
 "Go to Application": [
  null,
  "Přejít na aplikaci"
 ],
 "Install": [
  null,
  "Nainstalovat"
 ],
 "Installing": [
  null,
  "Instaluje se"
 ],
 "No applications installed or available": [
  null,
  "Nejsou nainstalované ani dostupné žádné aplikace"
 ],
 "No description provided.": [
  null,
  "Není poskytnut žádný popis."
 ],
 "No installation package found for this application.": [
  null,
  "Pro tuto aplikaci nebyl nalezen žádný instalační balíček."
 ],
 "Ok": [
  null,
  "Ok"
 ],
 "PackageKit crashed": [
  null,
  "PackageKit zhavaroval"
 ],
 "Remove": [
  null,
  "Odebrat"
 ],
 "Removing": [
  null,
  "Odebírá se"
 ],
 "Unknown Application": [
  null,
  "Neznámá aplikace"
 ],
 "Waiting for other programs to finish using the package manager...": [
  null,
  "Čeká se až ostatní programy dokončí použití správy balíčků…"
 ]
}));
