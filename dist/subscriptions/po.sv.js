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
  "language": "sv",
  "x-generator": "Zanata 4.6.2"
 },
 "'Organization' required to register.": [
  null,
  "“Organisation” krävs för att registrera."
 ],
 "'Organization' required when using activation keys.": [
  null,
  "“Organisation” krävs vid användning av aktiveringsnycklar."
 ],
 "Access denied": [
  null,
  "Åtkomst nekas"
 ],
 "Activation Key": [
  null,
  "Aktiveringsnyckel"
 ],
 "Architecture": [
  null,
  "Arkitektur"
 ],
 "Cancel": [
  null,
  "Avbryt"
 ],
 "Couldn't get system subscription status. Please ensure subscription-manager is installed.": [
  null,
  "Kunde inte få fram systemets prenumerationsstatus.  Se till att subscription-manager är installerad."
 ],
 "Custom URL": [
  null,
  "Anpassad URL"
 ],
 "Default": [
  null,
  "Standard"
 ],
 "Details": [
  null,
  "Detaljer"
 ],
 "Ends": [
  null,
  "Slutar"
 ],
 "Installed products": [
  null,
  "Installerade produkter"
 ],
 "Invalid credentials": [
  null,
  "Felaktiga kreditiv"
 ],
 "Invalid username or password": [
  null,
  "Felaktigt användarnamn eller lösenord"
 ],
 "Login": [
  null,
  "Inloggning"
 ],
 "Login/password or activation key required to register.": [
  null,
  "Inloggning/lösenord eller aktiveringsnyckel krävs för att registrera."
 ],
 "No installed products on the system.": [
  null,
  "Inga installerade produkter på systemet."
 ],
 "Ok": [
  null,
  "Ok"
 ],
 "Organization": [
  null,
  "Organisation"
 ],
 "Password": [
  null,
  "Lösenord"
 ],
 "Product ID": [
  null,
  "Produkt-ID"
 ],
 "Product name": [
  null,
  "Produktnamn"
 ],
 "Proxy": [
  null,
  "Proxy"
 ],
 "Register": [
  null,
  "Registrera"
 ],
 "Register system": [
  null,
  "Registrera system"
 ],
 "Retrieving subscription status...": [
  null,
  "Hämtar prenumerationsstatus …"
 ],
 "Server": [
  null,
  "Server"
 ],
 "Starts": [
  null,
  "Startar"
 ],
 "Status": [
  null,
  "Status"
 ],
 "Status: $0": [
  null,
  "Status: $0"
 ],
 "Status: System isn't registered": [
  null,
  "Status: systemet är inte registrerat"
 ],
 "Subscriptions": [
  null,
  "Prenumerationer"
 ],
 "The current user isn't allowed to access system subscription status.": [
  null,
  "Den aktuella användaren har inte tillåtelse att komma åt systemets prenumerationsstatus."
 ],
 "URL": [
  null,
  "URL"
 ],
 "Unable to connect": [
  null,
  "Kan inte ansluta"
 ],
 "Unregister": [
  null,
  "Avregistrera"
 ],
 "Unregistering system...": [
  null,
  "Avregistrerar systemet …"
 ],
 "Updating": [
  null,
  "Uppdaterar"
 ],
 "Use proxy server": [
  null,
  "Använd en proxyserver"
 ],
 "User": [
  null,
  "Användare"
 ],
 "Version": [
  null,
  "Version"
 ],
 "undefined": [
  null,
  "odefinierad"
 ]
}));
