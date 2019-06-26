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
 "$0 disk is missing": [
  "$0 disks are missing",
  "$0 disk chybí",
  "$0 disky chybí",
  "$0 disků chybí"
 ],
 "Cancel": [
  null,
  "Storno"
 ],
 "Control": [
  null,
  "Ovládání"
 ],
 "Empty": [
  null,
  "Prázdný"
 ],
 "Error": [
  null,
  "Chyba"
 ],
 "Memory": [
  null,
  "Paměť"
 ],
 "Network": [
  null,
  "Síť"
 ],
 "No matching files found": [
  null,
  "Nenalezeny žádné odpovídající soubory"
 ],
 "Not Ready": [
  null,
  "Nepřipraveno"
 ],
 "Off": [
  null,
  "Vypnuto"
 ],
 "Ok": [
  null,
  "Ok"
 ],
 "On": [
  null,
  "Zapnuto"
 ],
 "Path to file": [
  null,
  "Popis umístění serveru"
 ],
 "Ready": [
  null,
  "Připraveno"
 ],
 "Too many files found": [
  null,
  "Nalezeno příliš mnoho souborů"
 ],
 "Unavailable": [
  null,
  "Nedostupné"
 ],
 "User": [
  null,
  "Uživatel"
 ],
 "undefined": [
  null,
  "nedefinované"
 ],
 "disk-non-rotational\u0004$0 disk is missing": [
  "$0 disks are missing",
  "$0 disk chybí",
  "$0 disky chybí",
  "$0 disků chybí"
 ],
 "key\u0004Control": [
  null,
  "Ovládání"
 ],
 "verb\u0004Empty": [
  null,
  "Prázdný"
 ],
 "verb\u0004Ready": [
  null,
  "Připraveno"
 ]
}));
