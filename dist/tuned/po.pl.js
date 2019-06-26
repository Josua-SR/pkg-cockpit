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
 "Cancel": [
  null,
  "Anuluj"
 ],
 "Change Performance Profile": [
  null,
  "Zmień profil wydajności"
 ],
 "Change Profile": [
  null,
  "Zmień profil"
 ],
 "Communication with tuned has failed": [
  null,
  "Komunikacja z tuned się nie powiodła"
 ],
 "Disable tuned": [
  null,
  "Wyłącz tuned"
 ],
 "Failed to disable tuned": [
  null,
  "Wyłączenie tuned się nie powiodło"
 ],
 "Failed to disable tuned profile": [
  null,
  "Wyłączenie profilu tuned się nie powiodło"
 ],
 "Failed to enable tuned": [
  null,
  "Włączenie tuned się nie powiodło"
 ],
 "Failed to switch profile": [
  null,
  "Przełączenie profilu się nie powiodło"
 ],
 "None": [
  null,
  "Brak"
 ],
 "Ok": [
  null,
  "OK"
 ],
 "The user <b>$0</b> is not permitted to change profiles": [
  null,
  "Użytkownik <b>$0</b> nie ma zezwolenia na zmianę profili"
 ],
 "This system is using a custom profile": [
  null,
  "Ten system używa niestandardowego profilu"
 ],
 "This system is using the recommended profile": [
  null,
  "Ten system używa zalecanego profilu"
 ],
 "Tuned has failed to start": [
  null,
  "Uruchomienie tuned się nie powiodło"
 ],
 "Tuned is not available": [
  null,
  "tuned jest niedostępne"
 ],
 "Tuned is not running": [
  null,
  "tuned nie jest uruchomione"
 ],
 "Tuned is off": [
  null,
  "tuned jest wyłączone"
 ],
 "none": [
  null,
  "brak"
 ],
 "recommended": [
  null,
  "zalecane"
 ]
}));
