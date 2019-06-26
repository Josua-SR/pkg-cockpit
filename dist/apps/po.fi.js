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
  "language": "fi",
  "x-generator": "Zanata 4.6.2"
 },
 "Applications": [
  null,
  "Sovellukset"
 ],
 "Cancel": [
  null,
  "Peru"
 ],
 "Checking for new applications": [
  null,
  "Etsitään uusia sovelluksia"
 ],
 "Close": [
  null,
  "Sulje"
 ],
 "Error": [
  null,
  "Virhe"
 ],
 "Go to Application": [
  null,
  "Siirry sovellukseen"
 ],
 "Install": [
  null,
  "Asenna"
 ],
 "Installing": [
  null,
  "Asennetaan"
 ],
 "No applications installed or available": [
  null,
  "Ei sovelluksia asennettuna tai saatavilla"
 ],
 "No description provided.": [
  null,
  "Kuvausta ei annettu."
 ],
 "No installation package found for this application.": [
  null,
  ""
 ],
 "Ok": [
  null,
  "OK"
 ],
 "PackageKit crashed": [
  null,
  "PackageKit kaatui"
 ],
 "Remove": [
  null,
  "Poista"
 ],
 "Removing": [
  null,
  "Poistetaan"
 ],
 "Unknown Application": [
  null,
  "Tuntematon sovellus"
 ],
 "Waiting for other programs to finish using the package manager...": [
  null,
  ""
 ]
}));
