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
 "Applications": [
  null,
  "Aplicacions"
 ],
 "Cancel": [
  null,
  "Cancel·la"
 ],
 "Checking for new applications": [
  null,
  "Comprovació per si hi ha aplicacions noves"
 ],
 "Close": [
  null,
  "Tanca"
 ],
 "Error": [
  null,
  "Error"
 ],
 "Go to Application": [
  null,
  "Vés a l'aplicació"
 ],
 "Install": [
  null,
  "Instal·la"
 ],
 "Installing": [
  null,
  "S'està instal·lant"
 ],
 "No applications installed or available": [
  null,
  "No hi ha cap aplicació instal·lada o disponible"
 ],
 "No description provided.": [
  null,
  "No s'ha proporcionat cap descripció."
 ],
 "No installation package found for this application.": [
  null,
  "No s'ha trobat cap paquet d'instal·lació per a aquesta aplicació."
 ],
 "Ok": [
  null,
  "D'acord"
 ],
 "PackageKit crashed": [
  null,
  "PackageKit s'ha estavellat."
 ],
 "Remove": [
  null,
  "Suprimeix"
 ],
 "Removing": [
  null,
  ""
 ],
 "Unknown Application": [
  null,
  "Aplicació desconeguda"
 ],
 "Waiting for other programs to finish using the package manager...": [
  null,
  ""
 ]
}));
