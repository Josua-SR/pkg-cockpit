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
 "Change Performance Profile": [
  null,
  "Změnit profil výkonu"
 ],
 "Change Profile": [
  null,
  "Změnit profil"
 ],
 "Communication with tuned has failed": [
  null,
  "Komunikace s procesem služby tuned se nezdařila"
 ],
 "Disable tuned": [
  null,
  "Vypnout proces služby tuned"
 ],
 "Failed to disable tuned": [
  null,
  "Nepodařilo se zakázat proces služby tuned"
 ],
 "Failed to disable tuned profile": [
  null,
  "Nepodařilo se vypnout profil tuned"
 ],
 "Failed to enable tuned": [
  null,
  "Nepodařilo se zapnout tuned"
 ],
 "Failed to switch profile": [
  null,
  "Nepodařilo se přepnout profil"
 ],
 "None": [
  null,
  "Žádný"
 ],
 "Ok": [
  null,
  "Ok"
 ],
 "The user <b>$0</b> is not permitted to change profiles": [
  null,
  "Uživatel <b>$0</b> není oprávněn měnit profily"
 ],
 "This system is using a custom profile": [
  null,
  "Tento systém používá uživatelsky určený profil"
 ],
 "This system is using the recommended profile": [
  null,
  "Tento systém používá doporučený profil"
 ],
 "Tuned has failed to start": [
  null,
  "Spuštění procesu služby tuned se nezdařilo"
 ],
 "Tuned is not available": [
  null,
  "Tuned není k dispozici"
 ],
 "Tuned is not running": [
  null,
  "Tuned není spuštěné"
 ],
 "Tuned is off": [
  null,
  "Tuned je vypnuté"
 ],
 "none": [
  null,
  "nic"
 ],
 "recommended": [
  null,
  "doporučeno"
 ]
}));
