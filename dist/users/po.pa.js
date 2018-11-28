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
  "language": "pa",
  "x-generator": "Zanata 4.6.2"
 },
 "Access": [
  null,
  "ਪਹੁੰਚ"
 ],
 "Account Expiration": [
  null,
  ""
 ],
 "Account not available or cannot be edited.": [
  null,
  "ਖਾਤਾ ਮੌਜੂਦ ਨਹੀਂ ਹੈ ਜਾਂ ਸੋਧਿਆ ਨਹੀਂ ਜਾ ਸਕਦਾ"
 ],
 "Accounts": [
  null,
  "ਖਾਤੇ"
 ],
 "Add key": [
  null,
  ""
 ],
 "Add public key": [
  null,
  ""
 ],
 "Authorized Public SSH Keys": [
  null,
  ""
 ],
 "Back to Accounts": [
  null,
  ""
 ],
 "Cancel": [
  null,
  ""
 ],
 "Change": [
  null,
  ""
 ],
 "Close": [
  null,
  ""
 ],
 "Confirm": [
  null,
  "ਤਸਦੀਕ ਕਰੋ"
 ],
 "Confirm New Password": [
  null,
  "ਨਵੇਂ ਪਾਸਵਰਡ ਦੀ ਤਸਦੀਕ"
 ],
 "Create": [
  null,
  ""
 ],
 "Create New Account": [
  null,
  "ਨਵਾਂ ਖਾਤਾ ਬਣਾਓ"
 ],
 "Delete": [
  null,
  ""
 ],
 "Delete Files": [
  null,
  "ਫਾਇਲਾਂ ਹਟਾਓ"
 ],
 "Failed to load authorized keys.": [
  null,
  ""
 ],
 "Force Change": [
  null,
  ""
 ],
 "Force password change": [
  null,
  ""
 ],
 "Full Name": [
  null,
  "ਪੂਰਾ ਨਾਂ"
 ],
 "Invalid key": [
  null,
  ""
 ],
 "Last Login": [
  null,
  "ਪਿਛਲਾ ਲਾਗਇਨ"
 ],
 "Local Accounts": [
  null,
  ""
 ],
 "Lock Account": [
  null,
  "ਖਾਤਾ ਲਾਕ ਕਰੋ"
 ],
 "Never expire password": [
  null,
  ""
 ],
 "Never lock account": [
  null,
  ""
 ],
 "New Password": [
  null,
  "ਨਵਾਂ ਪਾਸਵਰਡ"
 ],
 "Off": [
  null,
  ""
 ],
 "Old Password": [
  null,
  "ਪੁਰਾਣਾ ਪਾਸਵਰਡ"
 ],
 "On": [
  null,
  ""
 ],
 "Password": [
  null,
  "ਪਾਸਵਰਡ"
 ],
 "Password Expiration": [
  null,
  ""
 ],
 "Paste the contents of your public SSH key file here": [
  null,
  ""
 ],
 "Reset": [
  null,
  ""
 ],
 "Roles": [
  null,
  "ਰੂਲ"
 ],
 "Set": [
  null,
  ""
 ],
 "Set Password": [
  null,
  ""
 ],
 "Terminate Session": [
  null,
  ""
 ],
 "There are no authorized public keys for this account.": [
  null,
  ""
 ],
 "Unnamed": [
  null,
  ""
 ],
 "User Name": [
  null,
  "ਵਰਤੋਂਕਾਰ ਨਾਂ"
 ],
 "You do not have permission to view the authorized public keys for this account.": [
  null,
  ""
 ],
 "translatable": [
  null,
  ""
 ]
}));
