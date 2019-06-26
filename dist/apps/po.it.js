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
 "Applications": [
  null,
  "Applicazioni"
 ],
 "Cancel": [
  null,
  "Annulla"
 ],
 "Checking for new applications": [
  null,
  "Verifica di nuove applicazioni"
 ],
 "Close": [
  null,
  "Chiudi"
 ],
 "Error": [
  null,
  "Errore"
 ],
 "Go to Application": [
  null,
  "Vai all'applicazione"
 ],
 "Install": [
  null,
  "Installa"
 ],
 "Installing": [
  null,
  "Installazione in corso"
 ],
 "No applications installed or available": [
  null,
  "Nessuna applicazione installata o disponibile"
 ],
 "No description provided.": [
  null,
  "Nessuna descrizione fornita."
 ],
 "No installation package found for this application.": [
  null,
  "Nessun pacchetto di installazione trovato per questa applicazione."
 ],
 "Ok": [
  null,
  "Ok"
 ],
 "PackageKit crashed": [
  null,
  "PackageKit si è interrotto"
 ],
 "Remove": [
  null,
  "Elimina Zona"
 ],
 "Removing": [
  null,
  "Rimozione"
 ],
 "Unknown Application": [
  null,
  "Applicazione sconosciuta"
 ],
 "Waiting for other programs to finish using the package manager...": [
  null,
  "In attesa che altri programmi finiscano di usare il gestore di pacchetti....."
 ]
}));
