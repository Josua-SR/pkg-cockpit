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
 "Access": [
  null,
  "Accesso"
 ],
 "Account Expiration": [
  null,
  "Scadenza account"
 ],
 "Account not available or cannot be edited.": [
  null,
  "Account non disponibile o non modificabile."
 ],
 "Accounts": [
  null,
  "Account"
 ],
 "Add key": [
  null,
  "Aggiungi chiave"
 ],
 "Add public key": [
  null,
  "Aggiungere la chiave pubblica"
 ],
 "Authorized Public SSH Keys": [
  null,
  "Chiavi SSH pubbliche autorizzate"
 ],
 "Back to Accounts": [
  null,
  "Torna agli account"
 ],
 "Cancel": [
  null,
  "Annulla"
 ],
 "Change": [
  null,
  "Cambia"
 ],
 "Close": [
  null,
  "Chiudi"
 ],
 "Confirm": [
  null,
  "Conferma"
 ],
 "Confirm New Password": [
  null,
  "Conferma nuova password"
 ],
 "Create": [
  null,
  "Crea"
 ],
 "Create New Account": [
  null,
  "Crea un nuovo account"
 ],
 "Delete": [
  null,
  "Cancella"
 ],
 "Delete Files": [
  null,
  "Cancella file"
 ],
 "Failed to load authorized keys.": [
  null,
  "Impossibile caricare le chiavi autorizzate."
 ],
 "Force Change": [
  null,
  "Cambio di forza"
 ],
 "Force password change": [
  null,
  "Forzare la modifica della password"
 ],
 "Full Name": [
  null,
  "Nome completo"
 ],
 "Invalid key": [
  null,
  "Chiave non valida"
 ],
 "Last Login": [
  null,
  "Ultimo accesso"
 ],
 "Local Accounts": [
  null,
  "Conti locali"
 ],
 "Lock Account": [
  null,
  "Blocca account"
 ],
 "Never expire password": [
  null,
  "Non scadere mai la password"
 ],
 "Never lock account": [
  null,
  "Non chiudere mai il conto"
 ],
 "New Password": [
  null,
  "Nuova password"
 ],
 "Off": [
  null,
  "Off"
 ],
 "Old Password": [
  null,
  "Vecchia password"
 ],
 "On": [
  null,
  "On"
 ],
 "Password": [
  null,
  "Password"
 ],
 "Password Expiration": [
  null,
  "Scadenza della password"
 ],
 "Paste the contents of your public SSH key file here": [
  null,
  "Incollare qui il contenuto del file della chiave SSH pubblica"
 ],
 "Reset": [
  null,
  "Azzera"
 ],
 "Roles": [
  null,
  "Ruoli"
 ],
 "Set": [
  null,
  "Set"
 ],
 "Set Password": [
  null,
  "Imposta password"
 ],
 "Terminate Session": [
  null,
  "Terminare la sessione"
 ],
 "There are no authorized public keys for this account.": [
  null,
  "Non ci sono chiavi pubbliche autorizzate per questo account."
 ],
 "Unnamed": [
  null,
  "Senza nome"
 ],
 "User Name": [
  null,
  "Nome utente"
 ],
 "You do not have permission to view the authorized public keys for this account.": [
  null,
  "Non hai il permesso di visualizzare le chiavi pubbliche autorizzate per questo account."
 ],
 "translatable": [
  null,
  "translatable"
 ]
}));
