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
  "language": "de",
  "x-generator": "Zanata 4.6.0"
 },
 "'Organization' required to register.": [
  null,
  ""
 ],
 "'Organization' required when using activation keys.": [
  null,
  ""
 ],
 "Access denied": [
  null,
  "Zugriff verweigert"
 ],
 "Activation Key": [
  null,
  "Aktivierungsschlüssel"
 ],
 "Architecture": [
  null,
  ""
 ],
 "Cancel": [
  null,
  "Abbrechen"
 ],
 "Couldn't get system subscription status. Please ensure subscription-manager is installed.": [
  null,
  ""
 ],
 "Custom URL": [
  null,
  "Benutzerdefinierte URL"
 ],
 "Default": [
  null,
  "Standard"
 ],
 "Details": [
  null,
  ""
 ],
 "Ends": [
  null,
  ""
 ],
 "Installed products": [
  null,
  ""
 ],
 "Invalid credentials": [
  null,
  "Ungültiger Port"
 ],
 "Invalid username or password": [
  null,
  ""
 ],
 "Login": [
  null,
  ""
 ],
 "Login/password or activation key required to register.": [
  null,
  ""
 ],
 "No installed products on the system.": [
  null,
  "Docker ist auf Ihrem System entweder nicht installiert oder nicht aktiviert"
 ],
 "Ok": [
  null,
  ""
 ],
 "Organization": [
  null,
  "Übersetzung"
 ],
 "Password": [
  null,
  "Passwort"
 ],
 "Product ID": [
  null,
  ""
 ],
 "Product name": [
  null,
  ""
 ],
 "Proxy": [
  null,
  ""
 ],
 "Register": [
  null,
  ""
 ],
 "Register system": [
  null,
  ""
 ],
 "Retrieving subscription status...": [
  null,
  ""
 ],
 "Server": [
  null,
  "Server"
 ],
 "Starts": [
  null,
  "Startet"
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
  "Status: System ist nicht registriert"
 ],
 "Subscriptions": [
  null,
  ""
 ],
 "The current user isn't allowed to access system subscription status.": [
  null,
  "Der aktuelle Nutzer ist nicht berechtigt auf den Status der Subscriptions zuzugreifen."
 ],
 "URL": [
  null,
  "URL"
 ],
 "Unable to connect": [
  null,
  "Kann keine Verbindung herstellen"
 ],
 "Unregister": [
  null,
  ""
 ],
 "Unregistering system...": [
  null,
  "Deregistriere System..."
 ],
 "Updating": [
  null,
  "Aktualisiere"
 ],
 "Use proxy server": [
  null,
  "Benutze Proxy-Server"
 ],
 "User": [
  null,
  "Benutzer"
 ],
 "Version": [
  null,
  "Version"
 ],
 "undefined": [
  null,
  "nicht definiert"
 ]
}));
