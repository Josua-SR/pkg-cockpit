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
  "x-generator": "Zanata 3.9.6"
 },
 "Access": [
  null,
  "Přístup"
 ],
 "Account Expiration": [
  null,
  "Expirace účtu"
 ],
 "Account not available or cannot be edited.": [
  null,
  "Účet není přístupný nebo není možné jej měnit."
 ],
 "Accounts": [
  null,
  "Účty"
 ],
 "Add key": [
  null,
  "Přidat klíč"
 ],
 "Add public key": [
  null,
  "Přidat veřejný klíč"
 ],
 "Adding key": [
  null,
  "Přidání klíče"
 ],
 "Authorized Public SSH Keys": [
  null,
  "Autorizované veřejné SSH klíče"
 ],
 "Back to Accounts": [
  null,
  "Zpět k účtům"
 ],
 "Cancel": [
  null,
  "Zrušit"
 ],
 "Change": [
  null,
  "Změna"
 ],
 "Close": [
  null,
  "Zavřít"
 ],
 "Confirm": [
  null,
  "Potvrdit"
 ],
 "Confirm New Password": [
  null,
  "Potvrdit nové heslo"
 ],
 "Container Administrator": [
  null,
  ""
 ],
 "Create": [
  null,
  ""
 ],
 "Create New Account": [
  null,
  ""
 ],
 "Delete": [
  null,
  "Smazat"
 ],
 "Delete $0": [
  null,
  ""
 ],
 "Delete Files": [
  null,
  ""
 ],
 "Error": [
  null,
  "Chyba"
 ],
 "Error saving authorized keys: ": [
  null,
  ""
 ],
 "Excellent password": [
  null,
  ""
 ],
 "Failed to change password": [
  null,
  ""
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
  "Celé jméno"
 ],
 "Invalid expiration date": [
  null,
  ""
 ],
 "Invalid key": [
  null,
  ""
 ],
 "Invalid number of days": [
  null,
  ""
 ],
 "Last Login": [
  null,
  ""
 ],
 "Local Accounts": [
  null,
  ""
 ],
 "Lock Account": [
  null,
  ""
 ],
 "Lock account on $0": [
  null,
  ""
 ],
 "Logged In": [
  null,
  ""
 ],
 "Never": [
  null,
  "Nikdy"
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
  ""
 ],
 "New password was not accepted": [
  null,
  ""
 ],
 "No real name specified": [
  null,
  ""
 ],
 "No user name specified": [
  null,
  "Nebylo zadáno jméno uživatele."
 ],
 "Off": [
  null,
  ""
 ],
 "Old Password": [
  null,
  ""
 ],
 "Old password not accepted": [
  null,
  ""
 ],
 "On": [
  null,
  ""
 ],
 "Password": [
  null,
  "Heslo"
 ],
 "Password Expiration": [
  null,
  ""
 ],
 "Password is not acceptable": [
  null,
  ""
 ],
 "Password is too weak": [
  null,
  ""
 ],
 "Password must be changed": [
  null,
  ""
 ],
 "Paste the contents of your public SSH key file here": [
  null,
  ""
 ],
 "Please specify an expiration date": [
  null,
  ""
 ],
 "Prompting via passwd timed out": [
  null,
  ""
 ],
 "Require password change every $0 days": [
  null,
  ""
 ],
 "Require password change on $0": [
  null,
  ""
 ],
 "Reset": [
  null,
  "Reset"
 ],
 "Roles": [
  null,
  ""
 ],
 "Server Administrator": [
  null,
  "Administrátor serveru"
 ],
 "Set": [
  null,
  "Sada"
 ],
 "Set Password": [
  null,
  ""
 ],
 "Terminate Session": [
  null,
  ""
 ],
 "The account '$0' will be forced to change their password on next login": [
  null,
  ""
 ],
 "The key you provided was not valid.": [
  null,
  ""
 ],
 "The passwords do not match": [
  null,
  ""
 ],
 "The user <b>$0</b> is not permitted to modify accounts": [
  null,
  ""
 ],
 "The user name can only consist of letters from a-z, digits, dots, dashes and underscores.": [
  null,
  ""
 ],
 "There are no authorized public keys for this account.": [
  null,
  ""
 ],
 "This user name already exists": [
  null,
  "Toto jméno již existuje"
 ],
 "Unable to delete root account": [
  null,
  ""
 ],
 "Unable to rename root account": [
  null,
  ""
 ],
 "Unexpected error": [
  null,
  ""
 ],
 "Unnamed": [
  null,
  ""
 ],
 "User Name": [
  null,
  "Uživatelské jméno"
 ],
 "Validating key": [
  null,
  "Ověřovací klíč"
 ],
 "You do not have permission to view the authorized public keys for this account.": [
  null,
  ""
 ],
 "page-title\u0004Accounts": [
  null,
  "Účty"
 ]
}));
