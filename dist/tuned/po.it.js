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
  "language": "it",
  "x-generator": "Zanata 4.6.2"
 },
 "Cancel": [
  null,
  "Annulla"
 ],
 "Change Performance Profile": [
  null,
  "Modifica del profilo perfomance"
 ],
 "Change Profile": [
  null,
  "Cambia profilo"
 ],
 "Communication with tuned has failed": [
  null,
  "La comunicazione con tuned non è riuscita"
 ],
 "Disable tuned": [
  null,
  "Disabilita sintonizzato"
 ],
 "Failed to disable tuned": [
  null,
  "Non riuscito a disabilitare sintonizzato"
 ],
 "Failed to disable tuned profile": [
  null,
  "Impossibile disabilitare il profilo sintonizzato"
 ],
 "Failed to enable tuned": [
  null,
  "Impossibile abilitare la sintonizzazione"
 ],
 "Failed to switch profile": [
  null,
  "Non è riuscito a commutare il profilo"
 ],
 "None": [
  null,
  "Nessuno"
 ],
 "Ok": [
  null,
  "Ok"
 ],
 "The user <b>$0</b> is not permitted to change profiles": [
  null,
  "L'utente non <b>$0</b>è autorizzato a modificare i profili"
 ],
 "This system is using a custom profile": [
  null,
  "Questo sistema utilizza un profilo personalizzato"
 ],
 "This system is using the recommended profile": [
  null,
  "Questo sistema utilizza il profilo raccomandato"
 ],
 "Tuned has failed to start": [
  null,
  "Tuned non è riuscito ad avviarsi"
 ],
 "Tuned is not available": [
  null,
  "Tuned non è disponibile"
 ],
 "Tuned is not running": [
  null,
  "Tuned non è in esecuzione"
 ],
 "Tuned is off": [
  null,
  "Tuned è disattivato"
 ],
 "none": [
  null,
  "nessuno"
 ],
 "recommended": [
  null,
  "raccomandato"
 ]
}));
