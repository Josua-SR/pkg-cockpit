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
nplurals=3; plural=(n==1) ? 0 : (n>=2 && n<=4) ? 1 : 2;
return plural;
},
  "language": "cs",
  "x-generator": "Zanata 4.6.2"
 },
 "$0 Only users with local credentials will be able to log into this machine. This may also effect other services as DNS resolution settings and the list of trusted CAs may change.": [
  null,
  "$0 K tomuto stroji se budou moci přihlásit pouze uživatelé s účty přímo na něm (lokální). Toto může mít vliv také na ostatní služby jako je nastavení DNS překladu a může být odlišný seznam certifikátů cert. autorit."
 ],
 "$0 is not available from any repository.": [
  null,
  "$0 není k dispozici z žádného z repozitářů."
 ],
 "$0 will be installed.": [
  null,
  "$0 bude nainstalováno."
 ],
 "Additional packages:": [
  null,
  "Další balíčky:"
 ],
 "Administrator Password": [
  null,
  "Heslo správce"
 ],
 "Are you sure you want to leave the '$0' domain?": [
  null,
  "Opravdu chcete doménu „$0“ opustit?"
 ],
 "Are you sure you want to leave this domain?": [
  null,
  "Opravdu chcete tuto doménu opustit?"
 ],
 "Authentication": [
  null,
  "Ověření"
 ],
 "Automatic": [
  null,
  "Automaticky"
 ],
 "Cancel": [
  null,
  "Storno"
 ],
 "Checking installed software": [
  null,
  "Zjišťuje se nainstalovaný sofware"
 ],
 "Computer OU": [
  null,
  "Organizační jednotka počítače"
 ],
 "Domain $0 could not be contacted": [
  null,
  "Doménu $0 se nedaří kontaktovat"
 ],
 "Domain $0 is not supported": [
  null,
  "Doména $0 není podporována"
 ],
 "Domain Address": [
  null,
  "Adresa domény"
 ],
 "Domain Administrator Name": [
  null,
  "Uživatelské jméno správce domény"
 ],
 "Domain Administrator Password": [
  null,
  "Heslo správce domény"
 ],
 "Downloading $0": [
  null,
  "Stahuje se $0"
 ],
 "Install": [
  null,
  "Nainstalovat"
 ],
 "Install Software": [
  null,
  "Nainstalovat software"
 ],
 "Installing $0": [
  null,
  "Instaluje se $0"
 ],
 "Join": [
  null,
  "Spojit"
 ],
 "Join Domain": [
  null,
  "Připojit se k doméně"
 ],
 "Join a Domain": [
  null,
  "Připojit se k doméně"
 ],
 "Joining this domain is not supported": [
  null,
  "Připojení se do této domény není podporováno"
 ],
 "Leave": [
  null,
  "Opustit"
 ],
 "Leave Domain": [
  null,
  "Opustit doménu"
 ],
 "More": [
  null,
  "Další"
 ],
 "Next": [
  null,
  "Další"
 ],
 "Off": [
  null,
  "Vypnuto"
 ],
 "Ok": [
  null,
  "Ok"
 ],
 "On": [
  null,
  "Zapnuto"
 ],
 "One Time Password": [
  null,
  "Jednorázové heslo"
 ],
 "PackageKit crashed": [
  null,
  "PackageKit zhavaroval"
 ],
 "Removals:": [
  null,
  "Odebrání:"
 ],
 "Removing $0": [
  null,
  "Odebírá se $0"
 ],
 "The user <b>$0</b> is not permitted to modify realms": [
  null,
  "Uživatel <b>$0</b> není oprávněn upravovat oblasti"
 ],
 "This may take a while": [
  null,
  "Toto může chvíli trvat"
 ],
 "Total size: $0": [
  null,
  "Celková velikost: $0"
 ],
 "User Name": [
  null,
  "Uživatelské jméno"
 ],
 "User Password": [
  null,
  "Heslo uživatele"
 ],
 "Waiting for other software management operations to finish": [
  null,
  "Čeká se na dokončení ostatních operací správy balíčků"
 ],
 "e.g. \"$0\"": [
  null,
  "např. „$0“"
 ]
}));
