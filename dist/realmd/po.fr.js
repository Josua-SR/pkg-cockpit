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
nplurals=2; plural=(n > 1);
return plural;
},
  "language": "fr",
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
  "Mot de passe de l'administrateur"
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
  "Authentification"
 ],
 "Automatic": [
  null,
  "Automatique"
 ],
 "Cancel": [
  null,
  "Annuler"
 ],
 "Checking installed software": [
  null,
  ""
 ],
 "Computer OU": [
  null,
  "OU Computer"
 ],
 "Domain $0 could not be contacted": [
  null,
  "Le domaine $0 ne peut être contacté"
 ],
 "Domain $0 is not supported": [
  null,
  ""
 ],
 "Domain Address": [
  null,
  "Adresse de domaine"
 ],
 "Domain Administrator Name": [
  null,
  "Nom de l'administrateur du domaine"
 ],
 "Domain Administrator Password": [
  null,
  "Mot de passe de l'administrateur du domaine"
 ],
 "Downloading $0": [
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
  "Rejoindre"
 ],
 "Join Domain": [
  null,
  "Rejoindre le domaine"
 ],
 "Join a Domain": [
  null,
  "Rejoindre le domaine"
 ],
 "Joining this domain is not supported": [
  null,
  ""
 ],
 "Leave": [
  null,
  "Quitter"
 ],
 "Leave Domain": [
  null,
  "Rejoindre le domaine"
 ],
 "More": [
  null,
  "Plus"
 ],
 "Next": [
  null,
  "Suivant"
 ],
 "Off": [
  null,
  "Éteint"
 ],
 "Ok": [
  null,
  ""
 ],
 "On": [
  null,
  "Allumé"
 ],
 "One Time Password": [
  null,
  "Mot de passe à usage unique"
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
  "L'utilisateur <b>$0</b> n'a pas le droit de modifier les domaines"
 ],
 "This may take a while": [
  null,
  "Cela peut prendre un certain temps"
 ],
 "Total size: $0": [
  null,
  ""
 ],
 "User Name": [
  null,
  "Nom d'utilisateur"
 ],
 "User Password": [
  null,
  "Mot de passe utilisateur"
 ],
 "Waiting for other software management operations to finish": [
  null,
  ""
 ],
 "e.g. \"$0\"": [
  null,
  "ie. « $0 »"
 ]
}));
