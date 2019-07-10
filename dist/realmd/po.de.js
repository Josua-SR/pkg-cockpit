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
  "language": "de",
  "x-generator": "Zanata 4.6.2"
 },
 "$0 is not available from any repository.": [
  null,
  "$0 ist in keinem Repository verfügbar."
 ],
 "$0 will be installed.": [
  null,
  "$0 wird installiert."
 ],
 "Additional packages:": [
  null,
  "Zusatzpakete:"
 ],
 "Administrator Password": [
  null,
  "Passwort des Administrators"
 ],
 "After leaving the domain, only users with local credentials will be able to log into this machine. This may also affect other services as DNS resolution settings and the list of trusted CAs may change.": [
  null,
  "Nach dem Verlassen der Domain können sich nur noch Nutzer mit lokalen Zugängen an dieser Maschine anmelden. Dies betrifft auch andere Dienste wie z.B. die DNS Auflösungs Einstellungen und die Liste der vertrauenswürdigen CAs könnte sich ändern."
 ],
 "Authentication": [
  null,
  "Authentifizierung"
 ],
 "Automatic": [
  null,
  "Automatisch"
 ],
 "Cancel": [
  null,
  "Abbrechen"
 ],
 "Checking installed software": [
  null,
  "Installierte Software überprüfen"
 ],
 "Client Software": [
  null,
  ""
 ],
 "Computer OU": [
  null,
  "Computer OU"
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
  "Die Domain $0 konnte nicht kontaktiert werden"
 ],
 "Domain $0 is not supported": [
  null,
  "Domain $0 wird nicht unterstützt"
 ],
 "Domain Address": [
  null,
  "Domänenadressen"
 ],
 "Domain Administrator Name": [
  null,
  "Name des Domain-Administrators"
 ],
 "Domain Administrator Password": [
  null,
  "Passwort des Domain-Administrators"
 ],
 "Downloading $0": [
  null,
  "wird heruntergeladen $0"
 ],
 "Host name should not be changed in a domain": [
  null,
  ""
 ],
 "Install": [
  null,
  "Installation"
 ],
 "Install Software": [
  null,
  "Software installieren"
 ],
 "Installing $0": [
  null,
  "$0 wird installiert"
 ],
 "Join": [
  null,
  "Beitreten"
 ],
 "Join Domain": [
  null,
  "Einer Domain beitreten"
 ],
 "Join a Domain": [
  null,
  "Einer Domain beitreten"
 ],
 "Joining this domain is not supported": [
  null,
  "Der Beitritt zu dieser Domain wird nicht unterstützt"
 ],
 "Leave Domain": [
  null,
  "Einer Domain beitreten"
 ],
 "Login Format": [
  null,
  ""
 ],
 "More": [
  null,
  "Mehr"
 ],
 "Next": [
  null,
  "Weiter"
 ],
 "Ok": [
  null,
  "OK"
 ],
 "One Time Password": [
  null,
  "Einmalpasswort"
 ],
 "PackageKit crashed": [
  null,
  "PackageKit ist abgestürzt"
 ],
 "Removals:": [
  null,
  "Umzüge:"
 ],
 "Removing $0": [
  null,
  "Entfernen $0"
 ],
 "Server Software": [
  null,
  ""
 ],
 "The user <b>$0</b> is not permitted to modify realms": [
  null,
  "Der Benutzer <b>$0</b> hat keine Rechte, Bereiche zu änden."
 ],
 "This may take a while": [
  null,
  "Dies kann eine Weile dauern"
 ],
 "Total size: $0": [
  null,
  "Gesamtgröße: $0"
 ],
 "User Name": [
  null,
  "Benutzername"
 ],
 "User Password": [
  null,
  "Benutzerpasswort"
 ],
 "Validating address": [
  null,
  ""
 ],
 "Waiting for other software management operations to finish": [
  null,
  "Warten, bis andere Software-Verwaltungsvorgänge abgeschlossen sind"
 ],
 "e.g. \"$0\"": [
  null,
  "z.B. \"$0\""
 ]
}));
