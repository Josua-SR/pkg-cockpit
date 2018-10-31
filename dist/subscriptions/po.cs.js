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
 "'Organization' required to register.": [
  null,
  "„Organizace“ je k registraci vyžadována."
 ],
 "'Organization' required when using activation keys.": [
  null,
  "„Organizace“ je vyžadována, pokud používáte aktivační klíče."
 ],
 "Access denied": [
  null,
  "Přístup odepřen"
 ],
 "Activation Key": [
  null,
  "Aktivační klíč"
 ],
 "Architecture": [
  null,
  "Architektura"
 ],
 "Cancel": [
  null,
  "Storno"
 ],
 "Couldn't get system subscription status. Please ensure subscription-manager is installed.": [
  null,
  "Nedaří se získat stav předplatného pro systém. Ověřte, že je nainstalovaná správa předplatného."
 ],
 "Custom URL": [
  null,
  "Uživatelsky určená URL adresa"
 ],
 "Default": [
  null,
  "Výchozí"
 ],
 "Details": [
  null,
  "Podrobnosti"
 ],
 "Ends": [
  null,
  "Končí"
 ],
 "Installed products": [
  null,
  "Nainstalované produkty"
 ],
 "Invalid credentials": [
  null,
  "Neplatné přihlašovací údaje"
 ],
 "Invalid username or password": [
  null,
  "Neplatné uživatelské jméno a heslo"
 ],
 "Login": [
  null,
  "Přihlásit"
 ],
 "Login/password or activation key required to register.": [
  null,
  "Pro registraci je zapotřebí uživatelského jména / hesla nebo aktivačního klíče"
 ],
 "No installed products on the system.": [
  null,
  "Na tomto systému nejsou nainstalované žádné produkty."
 ],
 "Ok": [
  null,
  "Ok"
 ],
 "Organization": [
  null,
  "Organizace"
 ],
 "Password": [
  null,
  "Heslo"
 ],
 "Product ID": [
  null,
  "Identif. produktu"
 ],
 "Product name": [
  null,
  "Název produktu"
 ],
 "Proxy": [
  null,
  "Proxy"
 ],
 "Register": [
  null,
  "Zaregistrovat"
 ],
 "Register system": [
  null,
  "Zaregistrovat systém"
 ],
 "Retrieving subscription status...": [
  null,
  "Získává se stav předplatného…"
 ],
 "Server": [
  null,
  "Server"
 ],
 "Starts": [
  null,
  "Začíná"
 ],
 "Status": [
  null,
  "Stav"
 ],
 "Status: $0": [
  null,
  "Stav: $0"
 ],
 "Status: System isn't registered": [
  null,
  "Stav: systém není zaregistrován"
 ],
 "Subscriptions": [
  null,
  "Předplatné"
 ],
 "The current user isn't allowed to access system subscription status.": [
  null,
  "Stávající uživatel není oprávněn přistupovat ke stavu předplatného systému."
 ],
 "URL": [
  null,
  "URL"
 ],
 "Unable to connect": [
  null,
  "Nedaří se připojit"
 ],
 "Unregister": [
  null,
  "Zrušit registraci"
 ],
 "Unregistering system...": [
  null,
  "Ruší se registrace systému…"
 ],
 "Updating": [
  null,
  "Aktualizuje se"
 ],
 "Use proxy server": [
  null,
  "Použít proxy server"
 ],
 "User": [
  null,
  "Uživatel"
 ],
 "Version": [
  null,
  "Verze"
 ],
 "undefined": [
  null,
  "nedefinované"
 ]
}));
