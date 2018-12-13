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
 "Access": [
  null,
  "Přístup"
 ],
 "Account Expiration": [
  null,
  "Skončení platnosti účtu"
 ],
 "Account not available or cannot be edited.": [
  null,
  "Účet není k dispozici nebo ho není možné měnit."
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
  "Přidat veřejnou část klíče"
 ],
 "Authorized Public SSH Keys": [
  null,
  "Pověřené veřejné SSH klíče"
 ],
 "Back to Accounts": [
  null,
  "Zpět k účtům"
 ],
 "Cancel": [
  null,
  "Storno"
 ],
 "Change": [
  null,
  "Změnit"
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
 "Create": [
  null,
  "Vytvořit"
 ],
 "Create New Account": [
  null,
  "Vytvořit nový účet"
 ],
 "Delete": [
  null,
  "Smazat"
 ],
 "Delete Files": [
  null,
  "Smazat soubory"
 ],
 "Failed to load authorized keys.": [
  null,
  "Nepodařilo se nahrát ověřovací klíče."
 ],
 "Force Change": [
  null,
  "Vynutit změnu"
 ],
 "Force password change": [
  null,
  "Vynutit změnu hesla"
 ],
 "Full Name": [
  null,
  "Celé jméno"
 ],
 "Invalid key": [
  null,
  "Neplatný klíč"
 ],
 "Last Login": [
  null,
  "Poslední přihlášení"
 ],
 "Local Accounts": [
  null,
  "Místní účty"
 ],
 "Lock Account": [
  null,
  "Uzamknout účet"
 ],
 "Never expire password": [
  null,
  "Heslo platí napořád"
 ],
 "Never lock account": [
  null,
  "Účet nikdy nezamykat"
 ],
 "New Password": [
  null,
  "Nové heslo"
 ],
 "Off": [
  null,
  "Vypnuto"
 ],
 "Old Password": [
  null,
  "Původní heslo"
 ],
 "On": [
  null,
  "Zapnuto"
 ],
 "Password": [
  null,
  "Heslo"
 ],
 "Password Expiration": [
  null,
  "Skončení platnosti hesla"
 ],
 "Paste the contents of your public SSH key file here": [
  null,
  "Sem vložte obsah veřejné části svého ssh klíče"
 ],
 "Reset": [
  null,
  "Reset"
 ],
 "Roles": [
  null,
  "Role"
 ],
 "Set": [
  null,
  "Nastavit"
 ],
 "Set Password": [
  null,
  "Nastavit heslo"
 ],
 "Terminate Session": [
  null,
  "Ukončit sezení"
 ],
 "There are no authorized public keys for this account.": [
  null,
  "Pro tento účet nejsou žádné pověřené klíče."
 ],
 "Unnamed": [
  null,
  "Bez názvu"
 ],
 "User Name": [
  null,
  "Uživatelské jméno"
 ],
 "You do not have permission to view the authorized public keys for this account.": [
  null,
  "Nemáte oprávnění zobrazovat pověřené klíče pro tento účet."
 ],
 "translatable": [
  null,
  "přeložitelné"
 ]
}));
