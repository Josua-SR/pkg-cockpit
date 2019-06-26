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
 "Cancel": [
  null,
  "Avbryt"
 ],
 "Change Performance Profile": [
  null,
  "Ändra prestandaprofil"
 ],
 "Change Profile": [
  null,
  "Ändra profil"
 ],
 "Communication with tuned has failed": [
  null,
  "Kommunikationen med tuned har misslyckats"
 ],
 "Disable tuned": [
  null,
  "Avaktivera tuned"
 ],
 "Failed to disable tuned": [
  null,
  "Misslyckades att avaktivera tuned"
 ],
 "Failed to disable tuned profile": [
  null,
  "Misslyckades avaktivera en tuned-profil"
 ],
 "Failed to enable tuned": [
  null,
  "Misslyckades att aktivera tuned"
 ],
 "Failed to switch profile": [
  null,
  "Misslyckades att byta profil"
 ],
 "None": [
  null,
  "Inga"
 ],
 "Ok": [
  null,
  "Ok"
 ],
 "The user <b>$0</b> is not permitted to change profiles": [
  null,
  "Användaren <b>$0</b> har inte rättighet att ändra profiler"
 ],
 "This system is using a custom profile": [
  null,
  "Detta system använder en anpassad profil"
 ],
 "This system is using the recommended profile": [
  null,
  "Detta system använder den rekommenderade profilen"
 ],
 "Tuned has failed to start": [
  null,
  "Tuned har misslyckats med att starta"
 ],
 "Tuned is not available": [
  null,
  "Tuned är inte tillgänglig"
 ],
 "Tuned is not running": [
  null,
  "Tuned kör inte"
 ],
 "Tuned is off": [
  null,
  "Tuned är avslagen"
 ],
 "none": [
  null,
  "ingen"
 ],
 "recommended": [
  null,
  "rekommenderad"
 ]
}));
