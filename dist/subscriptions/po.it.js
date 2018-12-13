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
 "'Organization' required to register.": [
  null,
  "Organizzazione\" necessaria per la registrazione."
 ],
 "'Organization' required when using activation keys.": [
  null,
  "Organizzazione\" richiesta quando si utilizzano i tasti di attivazione."
 ],
 "Access denied": [
  null,
  "Accesso negato"
 ],
 "Activation Key": [
  null,
  "Chiave di attivazione"
 ],
 "Architecture": [
  null,
  "Architettura"
 ],
 "Cancel": [
  null,
  "Annulla"
 ],
 "Couldn't get system subscription status. Please ensure subscription-manager is installed.": [
  null,
  "Non è stato possibile ottenere lo stato di abbonamento al sistema. Assicurati che il gestore di abbonamento sia installato."
 ],
 "Custom URL": [
  null,
  "URL personalizzata"
 ],
 "Default": [
  null,
  "Predefinito"
 ],
 "Details": [
  null,
  "Dettagli"
 ],
 "Ends": [
  null,
  "Termina"
 ],
 "Installed products": [
  null,
  "Prodotti installati"
 ],
 "Invalid credentials": [
  null,
  "Credenziali non valide"
 ],
 "Invalid username or password": [
  null,
  "Password o nome utente non validi"
 ],
 "Login": [
  null,
  "Accedi"
 ],
 "Login/password or activation key required to register.": [
  null,
  "Login/password o chiave di attivazione richiesta per la registrazione."
 ],
 "No installed products on the system.": [
  null,
  "Nessun prodotto installato sul sistema."
 ],
 "Ok": [
  null,
  "Ok"
 ],
 "Organization": [
  null,
  "Organizzazione"
 ],
 "Password": [
  null,
  "Password"
 ],
 "Product ID": [
  null,
  "ID del prodotto"
 ],
 "Product name": [
  null,
  "Nome prodotto"
 ],
 "Proxy": [
  null,
  "Proxy"
 ],
 "Register": [
  null,
  "Registra"
 ],
 "Register system": [
  null,
  "Sistema di registro"
 ],
 "Retrieving subscription status...": [
  null,
  "Richiamare lo stato dell'abbonamento....."
 ],
 "Server": [
  null,
  "Server"
 ],
 "Starts": [
  null,
  "Inizia"
 ],
 "Status": [
  null,
  "Stato"
 ],
 "Status: $0": [
  null,
  "Stato: $0"
 ],
 "Status: System isn't registered": [
  null,
  "Stato: il sistema non è registrato"
 ],
 "Subscriptions": [
  null,
  "Sottoscrizioni"
 ],
 "The current user isn't allowed to access system subscription status.": [
  null,
  "L'utente corrente non è autorizzato a accedere allo stato della sottoscrizione di sistema."
 ],
 "URL": [
  null,
  "URL"
 ],
 "Unable to connect": [
  null,
  "Impossibile collegarsi"
 ],
 "Unregister": [
  null,
  "Rimuovi-registrazione"
 ],
 "Unregistering system...": [
  null,
  "Sistema di non registrazione....."
 ],
 "Updating": [
  null,
  "Aggiornamento"
 ],
 "Use proxy server": [
  null,
  "Usa server proxy"
 ],
 "User": [
  null,
  "Utente"
 ],
 "Version": [
  null,
  "Versione"
 ],
 "undefined": [
  null,
  "non definito"
 ]
}));
