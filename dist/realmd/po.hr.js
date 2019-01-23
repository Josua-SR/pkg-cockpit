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
nplurals=3; plural=(n%10==1 && n%100!=11 ? 0 : n%10>=2 && n%10<=4 && (n%100<10 || n%100>=20) ? 1 : 2);
return plural;
},
  "language": "hr",
  "x-generator": "Zanata 4.6.2"
 },
 "$0 Only users with local credentials will be able to log into this machine. This may also effect other services as DNS resolution settings and the list of trusted CAs may change.": [
  null,
  ""
 ],
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
  "Administrativna Lozinka"
 ],
 "Are you sure you want to leave the '$0' domain?": [
  null,
  ""
 ],
 "Are you sure you want to leave this domain?": [
  null,
  ""
 ],
 "Authentication": [
  null,
  "Autentifikacija"
 ],
 "Automatic": [
  null,
  "Automatski"
 ],
 "Cancel": [
  null,
  "Odustani"
 ],
 "Checking installed software": [
  null,
  ""
 ],
 "Computer OU": [
  null,
  ""
 ],
 "Domain $0 could not be contacted": [
  null,
  "Domenu $0 nije moguće kontaktirati"
 ],
 "Domain $0 is not supported": [
  null,
  ""
 ],
 "Domain Address": [
  null,
  "Domenska Adresa"
 ],
 "Domain Administrator Name": [
  null,
  "Naziv Domenskog Administratora"
 ],
 "Domain Administrator Password": [
  null,
  "Lozinka Domenskog Administratora"
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
  ""
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
  "Pridruživanje"
 ],
 "Join Domain": [
  null,
  "Pridruživanje domeni"
 ],
 "Join a Domain": [
  null,
  "Pridruživanje domeni"
 ],
 "Joining this domain is not supported": [
  null,
  ""
 ],
 "Leave": [
  null,
  "Napusti"
 ],
 "Leave Domain": [
  null,
  "Pridruživanje domeni"
 ],
 "More": [
  null,
  "Više"
 ],
 "Next": [
  null,
  "Sljedeće"
 ],
 "Off": [
  null,
  "Isključi"
 ],
 "Ok": [
  null,
  ""
 ],
 "On": [
  null,
  "Uključi"
 ],
 "One Time Password": [
  null,
  "Jednokratna Lozinka"
 ],
 "PackageKit crashed": [
  null,
  ""
 ],
 "Removals:": [
  null,
  ""
 ],
 "Removing $0": [
  null,
  ""
 ],
 "The user <b>$0</b> is not permitted to modify realms": [
  null,
  "Korisniku <b>$0</b> nije dozvoljeno da preinači oblasti"
 ],
 "This may take a while": [
  null,
  "Ovo bi moglo potrajati"
 ],
 "Total size: $0": [
  null,
  ""
 ],
 "User Name": [
  null,
  "Korisničko ime"
 ],
 "User Password": [
  null,
  "Korisnička Lozinka"
 ],
 "Waiting for other software management operations to finish": [
  null,
  ""
 ],
 "e.g. \"$0\"": [
  null,
  "npr. \"$0\""
 ]
}));
