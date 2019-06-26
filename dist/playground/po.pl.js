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
nplurals=3; plural=n==1 ? 0 : n%10>=2 && n%10<=4 && (n%100<10 || n%100>=20) ? 1 : 2;
return plural;
},
  "language": "pl",
  "x-generator": "Zanata 4.6.2"
 },
 "$0 disk is missing": [
  "$0 disks are missing",
  "Brak $0 dysku",
  "Brak $0 dysków",
  "Brak $0 dysków"
 ],
 "Cancel": [
  null,
  "Anuluj"
 ],
 "Control": [
  null,
  "Sterowanie"
 ],
 "Empty": [
  null,
  "Puste"
 ],
 "Error": [
  null,
  "Błąd"
 ],
 "Memory": [
  null,
  "Pamięć"
 ],
 "Network": [
  null,
  "Sieć"
 ],
 "No matching files found": [
  null,
  "Nie odnaleziono pasujących plików"
 ],
 "Not Ready": [
  null,
  "Niegotowe"
 ],
 "Off": [
  null,
  "Wyłączone"
 ],
 "Ok": [
  null,
  "OK"
 ],
 "On": [
  null,
  "Włączone"
 ],
 "Path to file": [
  null,
  "Ścieżka do pliku"
 ],
 "Ready": [
  null,
  "Gotowe"
 ],
 "Too many files found": [
  null,
  "Odnaleziono za dużo plików"
 ],
 "Unavailable": [
  null,
  "Niedostępne"
 ],
 "User": [
  null,
  "Użytkownik"
 ],
 "undefined": [
  null,
  "nieokreślone"
 ],
 "disk-non-rotational\u0004$0 disk is missing": [
  "$0 disks are missing",
  "Brak $0 dysku",
  "Brak $0 dysków",
  "Brak $0 dysków"
 ],
 "key\u0004Control": [
  null,
  "Sterowanie"
 ],
 "verb\u0004Empty": [
  null,
  "Puste"
 ],
 "verb\u0004Ready": [
  null,
  "Gotowe"
 ]
}));
