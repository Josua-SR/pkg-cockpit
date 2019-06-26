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
  "Ylläpidon salasana"
 ],
 "After leaving the domain, only users with local credentials will be able to log into this machine. This may also affect other services as DNS resolution settings and the list of trusted CAs may change.": [
  null,
  ""
 ],
 "Authentication": [
  null,
  "Tunnistautuminen"
 ],
 "Automatic": [
  null,
  "Automaattinen"
 ],
 "Cancel": [
  null,
  "Peru"
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
  "Tietokone-OU"
 ],
 "Contacted domain": [
  null,
  ""
 ],
 "Domain": [
  null,
  "Domain"
 ],
 "Domain $0 could not be contacted": [
  null,
  "Domainiin $0 ei saatu yhteyttä"
 ],
 "Domain $0 is not supported": [
  null,
  "Domain $0 ei ole tuettu"
 ],
 "Domain Address": [
  null,
  "Domain-osoite"
 ],
 "Domain Administrator Name": [
  null,
  "Domain-ylläpitäjän nimi"
 ],
 "Domain Administrator Password": [
  null,
  "Domain-ylläpitäjän salasana"
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
  "Asenna"
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
  "Liity"
 ],
 "Join Domain": [
  null,
  "Liity domainiin"
 ],
 "Join a Domain": [
  null,
  "Liity domainiin"
 ],
 "Joining this domain is not supported": [
  null,
  "Liittyminen tähän domainiin ei ole tuettu"
 ],
 "Leave Domain": [
  null,
  "Jätä domain"
 ],
 "Login Format": [
  null,
  ""
 ],
 "More": [
  null,
  ""
 ],
 "Next": [
  null,
  "Seuraava"
 ],
 "Off": [
  null,
  "Pois"
 ],
 "Ok": [
  null,
  "OK"
 ],
 "On": [
  null,
  "Päällä"
 ],
 "One Time Password": [
  null,
  "Kertakäyttöinen salasana"
 ],
 "PackageKit crashed": [
  null,
  "PackageKit kaatui"
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
  "Käyttäjällä <b>$0</b> ei ole oikeutta muokata realmeja"
 ],
 "This may take a while": [
  null,
  "Tässä voi mennä hetki."
 ],
 "Total size: $0": [
  null,
  ""
 ],
 "User Name": [
  null,
  "Käyttäjätunnus"
 ],
 "User Password": [
  null,
  "Salasana"
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
  "esim. \"$0\""
 ]
}));
