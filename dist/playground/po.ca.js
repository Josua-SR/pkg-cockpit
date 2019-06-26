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
 "$0 disk is missing": [
  "$0 disks are missing",
  "falta $0 disc",
  "falten $0 discs"
 ],
 "Cancel": [
  null,
  "Cancel·la"
 ],
 "Control": [
  null,
  "Control"
 ],
 "Delete '{{ name }}'": [
  null,
  "Suprimeix '{{ name }}'"
 ],
 "Empty": [
  null,
  "Buida"
 ],
 "Error": [
  null,
  "Error"
 ],
 "Memory": [
  null,
  "Memòria"
 ],
 "Network": [
  null,
  "Xarxa"
 ],
 "No matching files found": [
  null,
  "No s'ha trobat cap fitxer que coincideixi"
 ],
 "Not Ready": [
  null,
  "No a punt"
 ],
 "Off": [
  null,
  "Off"
 ],
 "Ok": [
  null,
  "D'acord"
 ],
 "On": [
  null,
  "On"
 ],
 "Path to file": [
  null,
  "Camí al fitxer"
 ],
 "Ready": [
  null,
  "A punt"
 ],
 "Too many files found": [
  null,
  "S'han trobat massa fitxers"
 ],
 "Unavailable": [
  null,
  "No disponible"
 ],
 "User": [
  null,
  "Usuari"
 ],
 "undefined": [
  null,
  "indefinit"
 ],
 "disk-non-rotational\u0004$0 disk is missing": [
  "$0 disks are missing",
  "falta $0 disc",
  "falten $0 discs"
 ],
 "key\u0004Control": [
  null,
  "Control"
 ],
 "verb\u0004Empty": [
  null,
  "Buit"
 ],
 "verb\u0004Ready": [
  null,
  ""
 ]
}));
