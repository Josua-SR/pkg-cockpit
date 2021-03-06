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
 "Applications": [
  null,
  "Program"
 ],
 "Cancel": [
  null,
  "Avbryt"
 ],
 "Checking for new applications": [
  null,
  "Kontrollerar om det finns nya program"
 ],
 "Close": [
  null,
  "Stäng"
 ],
 "Error": [
  null,
  "Fel"
 ],
 "Go to Application": [
  null,
  "Gå till programmet"
 ],
 "Install": [
  null,
  "Installera"
 ],
 "Installing": [
  null,
  "Installerar"
 ],
 "No applications installed or available": [
  null,
  "Inga program installerade eller tillgängliga"
 ],
 "No description provided.": [
  null,
  "Ingen besrkivning tillhandahållen."
 ],
 "No installation package found for this application.": [
  null,
  "Inget installationspaket hittat för detta program."
 ],
 "Ok": [
  null,
  "Ok"
 ],
 "PackageKit crashed": [
  null,
  "PackageKit kraschade"
 ],
 "Remove": [
  null,
  "Ta bort"
 ],
 "Removing": [
  null,
  "Tar bort"
 ],
 "Unknown Application": [
  null,
  "Okänt program"
 ],
 "Waiting for other programs to finish using the package manager...": [
  null,
  "Väntar på att andra program skall sluta använda pekethanteraren …"
 ]
}));
