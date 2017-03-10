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
nplurals=3; plural=n==1 ? 0 : n%10>=2 && n%10<=4 && (n%100<10 || n%100>=20) ? 1 : 2;
return plural;
},
  "language": "pl",
  "x-generator": "Zanata 3.9.6"
 },
 "Administrator Password": [
  null,
  "Hasło administratora"
 ],
 "Authentication": [
  null,
  "Uwierzytelnienie"
 ],
 "Automatic": [
  null,
  "Automatyczne"
 ],
 "Cancel": [
  null,
  "Anuluj"
 ],
 "Cannot join a domain because realmd is not available on this system": [
  null,
  "Nie można dołączyć do domeny, ponieważ usługa realmd nie jest dostępna w systemie"
 ],
 "Computer OU": [
  null,
  "OU komputera"
 ],
 "Domain $0 could not be contacted": [
  null,
  "Nie można skontaktować się z domeną $0"
 ],
 "Domain $0 is not supported": [
  null,
  "Domena $0 jest nieobsługiwana"
 ],
 "Domain Address": [
  null,
  "Adres domeny"
 ],
 "Domain Administrator Name": [
  null,
  "Nazwa administratora domeny"
 ],
 "Domain Administrator Password": [
  null,
  "Hasło administratora domeny"
 ],
 "Join": [
  null,
  "Dołącz"
 ],
 "Join Domain": [
  null,
  "Dołącz do domeny"
 ],
 "Join a Domain": [
  null,
  "Dołącz do domeny"
 ],
 "Joining this domain is not supported": [
  null,
  "Dołączenie do tej domeny jest nieobsługiwane"
 ],
 "Leave": [
  null,
  "Opuść"
 ],
 "Leave Domain": [
  null,
  "Domena"
 ],
 "More": [
  null,
  "Więcej"
 ],
 "Next": [
  null,
  "Dalej"
 ],
 "Off": [
  null,
  "Wyłączone"
 ],
 "On": [
  null,
  "Włączone"
 ],
 "One Time Password": [
  null,
  "Hasło jednorazowe"
 ],
 "The user <b>$0</b> is not permitted to modify realms": [
  null,
  "Użytkownik <b>$0</b> nie ma zezwolenia na modyfikowanie obszarów"
 ],
 "This may take a while": [
  null,
  "Może to chwilę zająć"
 ],
 "User Name": [
  null,
  "Nazwa użytkownika"
 ],
 "User Password": [
  null,
  "Hasło użytkownika"
 ],
 "e.g. \"$0\"": [
  null,
  "np. „$0”"
 ]
}));
