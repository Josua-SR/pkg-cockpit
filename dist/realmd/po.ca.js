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
 "$0 is not available from any repository.": [
  null,
  ""
 ],
 "$0 will be installed.": [
  null,
  ""
 ],
 "Additional packages:": [
  null,
  ""
 ],
 "Administrator Password": [
  null,
  "Contrasenya de l'administrador"
 ],
 "After leaving the domain, only users with local credentials will be able to log into this machine. This may also affect other services as DNS resolution settings and the list of trusted CAs may change.": [
  null,
  ""
 ],
 "Authentication": [
  null,
  "Autenticació"
 ],
 "Automatic": [
  null,
  "Automàtic"
 ],
 "Cancel": [
  null,
  "Cancel·la"
 ],
 "Checking installed software": [
  null,
  ""
 ],
 "Client Software": [
  null,
  ""
 ],
 "Computer OU": [
  null,
  "OU de l'ordinador"
 ],
 "Contacted domain": [
  null,
  ""
 ],
 "Domain": [
  null,
  "Domini"
 ],
 "Domain $0 could not be contacted": [
  null,
  "No s'ha pogut contactar amb el domini $0"
 ],
 "Domain $0 is not supported": [
  null,
  "El domini $0 no és compatible"
 ],
 "Domain Address": [
  null,
  "Adreça del domini"
 ],
 "Domain Administrator Name": [
  null,
  "Nom de l'administrador del domini"
 ],
 "Domain Administrator Password": [
  null,
  "Contrasenya de l'administrador del domini"
 ],
 "Downloading $0": [
  null,
  ""
 ],
 "Host name should not be changed in a domain": [
  null,
  ""
 ],
 "Install": [
  null,
  "Instal·la"
 ],
 "Install Software": [
  null,
  ""
 ],
 "Installing $0": [
  null,
  ""
 ],
 "Join": [
  null,
  "Uneix-te"
 ],
 "Join Domain": [
  null,
  "Uneix-te a un domini"
 ],
 "Join a Domain": [
  null,
  "Uneix-te a un domini"
 ],
 "Joining this domain is not supported": [
  null,
  "La unió a aquest domini no està admesa"
 ],
 "Leave Domain": [
  null,
  "Abandona el domini"
 ],
 "Login Format": [
  null,
  ""
 ],
 "More": [
  null,
  "Més"
 ],
 "Next": [
  null,
  "Següent"
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
 "One Time Password": [
  null,
  "Contrasenya d'un sol cop"
 ],
 "PackageKit crashed": [
  null,
  "PackageKit s'ha estavellat."
 ],
 "Removals:": [
  null,
  ""
 ],
 "Removing $0": [
  null,
  ""
 ],
 "Server Software": [
  null,
  ""
 ],
 "The user <b>$0</b> is not permitted to modify realms": [
  null,
  "A l'usuari <b>$0</b> no se li permet modificar els reialmes"
 ],
 "This may take a while": [
  null,
  "Això pot trigar una estona"
 ],
 "Total size: $0": [
  null,
  ""
 ],
 "User Name": [
  null,
  "Nom d'usuari"
 ],
 "User Password": [
  null,
  "Contrasenya d'usuari"
 ],
 "Validating address": [
  null,
  ""
 ],
 "Waiting for other software management operations to finish": [
  null,
  ""
 ],
 "e.g. \"$0\"": [
  null,
  "p. ex. \"$0\""
 ]
}));
