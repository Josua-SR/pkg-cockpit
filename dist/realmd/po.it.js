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
  "language": "it",
  "x-generator": "Zanata 4.6.2"
 },
 "$0 is not available from any repository.": [
  null,
  "$0 non è disponibile in nessun deposito."
 ],
 "$0 will be installed.": [
  null,
  "$0 sarà installato."
 ],
 "Additional packages:": [
  null,
  "Pacchetti aggiuntivi:"
 ],
 "Administrator Password": [
  null,
  "Password amministratore"
 ],
 "After leaving the domain, only users with local credentials will be able to log into this machine. This may also affect other services as DNS resolution settings and the list of trusted CAs may change.": [
  null,
  ""
 ],
 "Authentication": [
  null,
  "Autenticazione"
 ],
 "Automatic": [
  null,
  "Automatico"
 ],
 "Cancel": [
  null,
  "Annulla"
 ],
 "Checking installed software": [
  null,
  "Verifica del software installato"
 ],
 "Client Software": [
  null,
  ""
 ],
 "Computer OU": [
  null,
  "OU del computer"
 ],
 "Contacted domain": [
  null,
  ""
 ],
 "Domain": [
  null,
  "Dominio"
 ],
 "Domain $0 could not be contacted": [
  null,
  "Il dominio $0 non può essere contattato"
 ],
 "Domain $0 is not supported": [
  null,
  "Il dominio $0 non è supportato"
 ],
 "Domain Address": [
  null,
  "Indirizzo del dominio"
 ],
 "Domain Administrator Name": [
  null,
  "Nome dell'amministratore di dominio"
 ],
 "Domain Administrator Password": [
  null,
  "Password dell'amministratore di dominio"
 ],
 "Downloading $0": [
  null,
  "Download di $0"
 ],
 "Host name should not be changed in a domain": [
  null,
  ""
 ],
 "Install": [
  null,
  "Installa"
 ],
 "Install Software": [
  null,
  "Installare il software"
 ],
 "Installing $0": [
  null,
  "Installazione di $0"
 ],
 "Join": [
  null,
  "Unisci"
 ],
 "Join Domain": [
  null,
  "Unione al dominio"
 ],
 "Join a Domain": [
  null,
  "Join a un dominio"
 ],
 "Joining this domain is not supported": [
  null,
  "L'adesione a questo dominio non è supportata"
 ],
 "Leave Domain": [
  null,
  "Lascia dominio"
 ],
 "Login Format": [
  null,
  ""
 ],
 "More": [
  null,
  "Di più"
 ],
 "Next": [
  null,
  "Avanti"
 ],
 "Off": [
  null,
  "Off"
 ],
 "Ok": [
  null,
  "Ok"
 ],
 "On": [
  null,
  "On"
 ],
 "One Time Password": [
  null,
  "Password unica"
 ],
 "PackageKit crashed": [
  null,
  "PackageKit si è interrotto"
 ],
 "Removals:": [
  null,
  "Traslochi:"
 ],
 "Removing $0": [
  null,
  "Rimozione $0"
 ],
 "Server Software": [
  null,
  ""
 ],
 "The user <b>$0</b> is not permitted to modify realms": [
  null,
  "L'utente non <b>$0</b>è autorizzato a modificare i regni"
 ],
 "This may take a while": [
  null,
  "Attendere prego."
 ],
 "Total size: $0": [
  null,
  "Dimensione totale: $0"
 ],
 "User Name": [
  null,
  "Nome utente"
 ],
 "User Password": [
  null,
  "Password utente"
 ],
 "Validating address": [
  null,
  ""
 ],
 "Waiting for other software management operations to finish": [
  null,
  "In attesa che finiscano le altre operazioni di gestione del software"
 ],
 "e.g. \"$0\"": [
  null,
  "es: \"$0\""
 ]
}));
