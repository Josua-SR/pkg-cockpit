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
  "language": "sv",
  "x-generator": "Zanata 4.6.2"
 },
 "$0 disk is missing": [
  "$0 disks are missing",
  "$0 disk saknas",
  "$0 diskar saknas"
 ],
 "Cancel": [
  null,
  "Avbryt"
 ],
 "Control": [
  null,
  "Styrning"
 ],
 "Delete '{{ name }}'": [
  null,
  "Ta bort”{{ name }}”"
 ],
 "Empty": [
  null,
  "Tom"
 ],
 "Error": [
  null,
  "Fel"
 ],
 "Memory": [
  null,
  "Minne"
 ],
 "Network": [
  null,
  "Nätverk"
 ],
 "No matching files found": [
  null,
  "Inga matchande filer hittade"
 ],
 "Not Ready": [
  null,
  "Inte klar"
 ],
 "Off": [
  null,
  "Av"
 ],
 "Ok": [
  null,
  "Ok"
 ],
 "On": [
  null,
  "På"
 ],
 "Path to file": [
  null,
  "Sökväg till filen"
 ],
 "Ready": [
  null,
  "Klar"
 ],
 "Too many files found": [
  null,
  "För många filer hittade"
 ],
 "Unavailable": [
  null,
  "Otillgänglig"
 ],
 "User": [
  null,
  "Användare"
 ],
 "undefined": [
  null,
  "odefinierad"
 ],
 "disk-non-rotational\u0004$0 disk is missing": [
  "$0 disks are missing",
  "$0 disk saknas",
  "$0 diskar saknas"
 ],
 "key\u0004Control": [
  null,
  "Styrning"
 ],
 "verb\u0004Empty": [
  null,
  "Töm"
 ],
 "verb\u0004Ready": [
  null,
  "Klar"
 ]
}));
