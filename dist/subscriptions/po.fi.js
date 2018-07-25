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
  "language": "fi",
  "x-generator": "Zanata 4.5.0"
 },
 "'Organization' required to register.": [
  null,
  "'Organisaatio' vaaditaan rekisteröintiä varten."
 ],
 "'Organization' required when using activation keys.": [
  null,
  "'Organisaatio' vaaditaan aktivointiavaimia käytettäessä."
 ],
 "Access denied": [
  null,
  "Pääsy evätty"
 ],
 "Activation Key": [
  null,
  "Aktivointiavain"
 ],
 "Architecture": [
  null,
  "Arkkitehtuuri"
 ],
 "Cancel": [
  null,
  "Peru"
 ],
 "Couldn't get system subscription status. Please ensure subscription-manager is installed.": [
  null,
  "Ei voitu hakea järjestelmän tilauksen statusta. Varmista, että subscription-manager on asennettu."
 ],
 "Custom URL": [
  null,
  "Mukautettu URL"
 ],
 "Default": [
  null,
  "Oletus"
 ],
 "Details": [
  null,
  "Yksityiskohdat"
 ],
 "Ends": [
  null,
  ""
 ],
 "Installed products": [
  null,
  "Asennetut tuotteet"
 ],
 "Invalid credentials": [
  null,
  "Virheelliset tunnistautumistiedot"
 ],
 "Invalid username or password": [
  null,
  "Virheellinen käyttäjätunnus tai salasana"
 ],
 "Login": [
  null,
  "Kirjaudu sisään"
 ],
 "Login/password or activation key required to register.": [
  null,
  ""
 ],
 "No installed products on the system.": [
  null,
  ""
 ],
 "Ok": [
  null,
  "OK"
 ],
 "Organization": [
  null,
  "Organisaatio"
 ],
 "Password": [
  null,
  "Salasana"
 ],
 "Product ID": [
  null,
  "Tuotteen ID"
 ],
 "Product name": [
  null,
  "Tuotteen nimi"
 ],
 "Proxy": [
  null,
  ""
 ],
 "Register": [
  null,
  "Rekisteröi"
 ],
 "Register system": [
  null,
  "Rekisteröi järjestelmä"
 ],
 "Retrieving subscription status...": [
  null,
  "Noudetaan tilauksen tilaa..."
 ],
 "Server": [
  null,
  "Palvelin"
 ],
 "Starts": [
  null,
  ""
 ],
 "Status": [
  null,
  "Tila"
 ],
 "Status: $0": [
  null,
  "Tila: $0"
 ],
 "Status: System isn't registered": [
  null,
  "Tila: Järjestelmä ei  ole rekisteröity"
 ],
 "Subscriptions": [
  null,
  "Tilaukset"
 ],
 "The current user isn't allowed to access system subscription status.": [
  null,
  ""
 ],
 "URL": [
  null,
  "URL"
 ],
 "Unable to connect": [
  null,
  "Yhteyden muodostaminen epäonnistui"
 ],
 "Unregister": [
  null,
  ""
 ],
 "Unregistering system...": [
  null,
  ""
 ],
 "Updating": [
  null,
  "Päivitetään"
 ],
 "Use proxy server": [
  null,
  "Käytä proxy-serveriä"
 ],
 "User": [
  null,
  "Käyttäjä"
 ],
 "Version": [
  null,
  "Versio"
 ],
 "undefined": [
  null,
  "määrittämätön"
 ]
}));
