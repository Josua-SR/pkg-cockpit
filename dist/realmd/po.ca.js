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
  "language": "ca",
  "x-generator": "Zanata 3.9.6"
 },
 "$0 Only users with local credentials will be able to log into this machine. This may also effect other services as DNS resolution settings and the list of trusted CAs may change.": [
  null,
  ""
 ],
 "Administrator Password": [
  null,
  "Contrasenya de l'administrador"
 ],
 "Are you sure you want to leave the '$0' domain?": [
  null,
  "Esteu segur que voleu abandonar el domini '$0'?"
 ],
 "Are you sure you want to leave this domain?": [
  null,
  "Esteu segur que voleu abandonar aquest domini?"
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
 "Cannot join a domain because realmd is not available on this system": [
  null,
  "No es pot unir a un domini perquè realmd no està disponible en aquest sistema"
 ],
 "Computer OU": [
  null,
  "OU de l'ordinador"
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
 "Join": [
  null,
  "Uneix-te"
 ],
 "Join Domain": [
  null,
  "Uneix-te al domini"
 ],
 "Join a Domain": [
  null,
  "Uneix-te a un domini"
 ],
 "Joining this domain is not supported": [
  null,
  "La unió a aquest domini no està admesa"
 ],
 "Leave": [
  null,
  "Abandona"
 ],
 "Leave Domain": [
  null,
  "Abandona el domini"
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
 "On": [
  null,
  "On"
 ],
 "One Time Password": [
  null,
  "Contrasenya d'un sol cop"
 ],
 "The user <b>$0</b> is not permitted to modify realms": [
  null,
  "A l'usuari <b>$0</b> no se li permet modificar els reialmes"
 ],
 "This may take a while": [
  null,
  "Això pot trigar una estona"
 ],
 "User Name": [
  null,
  "Nom d'usuari"
 ],
 "User Password": [
  null,
  "Contrasenya d'usuari"
 ],
 "e.g. \"$0\"": [
  null,
  "p. ex. \"$0\""
 ]
}));
