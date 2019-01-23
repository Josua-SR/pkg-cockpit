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

    function transformAngular(data, prev) {
        var key, context, parts, value, result = { };
        for (key in data) {
            if (key === "")
                continue;
            parts = key.split("\u0004");
            value = data[key];
            if (parts[1]) {
                context = parts[0];
                key = parts[1];
            } else {
                context = "$$noContext";
                key = parts[0];
            }
            if (value[0] === null)
                value = value[1];
            else
                value = value.slice(1);
            if (!(key in result))
                result[key] = { };
            result[key][context] = value;
        }
        return angular.extend(prev, result);
    }

    /* Load into angular here */
    if (typeof angular === 'object') {
        try {
            module = angular.module(["gettext"]);
        } catch(ex) { console.log(ex); /* Either no angular or angular-gettext */ };
        if (module) {
            loaded = true;
            module.run(['gettextCatalog', function(gettextCatalog) {
                var lang = data[""]["language"];
                var prev = (gettextCatalog.getCurrentLanguage() == lang) ? gettextCatalog.strings : { };
                gettextCatalog.setStrings(lang, transformAngular(data, prev));
                gettextCatalog.setCurrentLanguage(lang);
            }]);
        }
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
 "$0 Only users with local credentials will be able to log into this machine. This may also effect other services as DNS resolution settings and the list of trusted CAs may change.": [
  null,
  "$0 Nur Benutzer mit lokalen Anmeldeinformationen können sich an diesem Computer anmelden. Dies kann sich auch auf andere Dienste auswirken, da sich die DNS-Auflösungseinstellungen ändern und sich die Liste der vertrauenswürdigen Zertifizierungsstellen ändern kann."
 ],
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
 "Are you sure you want to leave the '$0' domain?": [
  null,
  "Sind Sie sicher, dass Sie das verlassen möchten?$0Domain?"
 ],
 "Are you sure you want to leave this domain?": [
  null,
  "Möchten Sie diese Domain wirklich verlassen?"
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
 "Computer OU": [
  null,
  "Computer OU"
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
  "Host sollte nicht leer sein"
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
 "Leave": [
  null,
  "Verlassen"
 ],
 "Leave Domain": [
  null,
  "Einer Domain beitreten"
 ],
 "More": [
  null,
  "Mehr"
 ],
 "Next": [
  null,
  "Weiter"
 ],
 "Off": [
  null,
  "Aus"
 ],
 "Ok": [
  null,
  "OK"
 ],
 "On": [
  null,
  "Ein"
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
 "Waiting for other software management operations to finish": [
  null,
  "Warten, bis andere Software-Verwaltungsvorgänge abgeschlossen sind"
 ],
 "e.g. \"$0\"": [
  null,
  "z.B. \"$0\""
 ]
}));
