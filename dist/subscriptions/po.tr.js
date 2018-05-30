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
nplurals=2; plural=(n>1);
return plural;
},
  "language": "tr",
  "x-generator": "Zanata 4.4.5"
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
  ""
 ],
 "Activation Key": [
  null,
  ""
 ],
 "Architecture": [
  null,
  ""
 ],
 "Cancel": [
  null,
  "İptal"
 ],
 "Couldn't get system subscription status. Please ensure subscription-manager is installed.": [
  null,
  ""
 ],
 "Custom URL": [
  null,
  ""
 ],
 "Default": [
  null,
  "Ön tanımlı"
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
  ""
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
  ""
 ],
 "Ok": [
  null,
  ""
 ],
 "Organization": [
  null,
  ""
 ],
 "Password": [
  null,
  "Parola"
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
  "Servis"
 ],
 "Starts": [
  null,
  ""
 ],
 "Status": [
  null,
  "Durum"
 ],
 "Status: $0": [
  null,
  ""
 ],
 "Status: System isn't registered": [
  null,
  ""
 ],
 "Subscriptions": [
  null,
  ""
 ],
 "The current user isn't allowed to access system subscription status.": [
  null,
  ""
 ],
 "URL": [
  null,
  ""
 ],
 "Unable to connect": [
  null,
  ""
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
  ""
 ],
 "Use proxy server": [
  null,
  ""
 ],
 "User": [
  null,
  "Kullanıcı"
 ],
 "Version": [
  null,
  "Sürüm"
 ],
 "undefined": [
  null,
  ""
 ]
}));
