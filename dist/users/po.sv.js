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
 "Access": [
  null,
  "Åtkomst"
 ],
 "Account Expiration": [
  null,
  "Utgång av konto"
 ],
 "Account not available or cannot be edited.": [
  null,
  "Kontot är inte tillgängligt eller kan inte redigeras."
 ],
 "Accounts": [
  null,
  "Konton"
 ],
 "Add key": [
  null,
  "Lägg till nyckel"
 ],
 "Add public key": [
  null,
  "Lägg till publik nyckel"
 ],
 "Authorized Public SSH Keys": [
  null,
  "Auktoriserade publika SSH-nycklar"
 ],
 "Back to Accounts": [
  null,
  "Tilllbaka till konton"
 ],
 "Cancel": [
  null,
  "Avbryt"
 ],
 "Change": [
  null,
  "Ändra"
 ],
 "Close": [
  null,
  "Stäng"
 ],
 "Confirm": [
  null,
  "Bekräfta"
 ],
 "Confirm New Password": [
  null,
  "Bekräfta nytt lösenord"
 ],
 "Create": [
  null,
  "Skapa"
 ],
 "Create New Account": [
  null,
  "Skapa ett nytt konto"
 ],
 "Delete": [
  null,
  "Ta bort"
 ],
 "Delete Files": [
  null,
  "Ta bort filer"
 ],
 "Failed to load authorized keys.": [
  null,
  "Misslyckades att läsa in auktoriserade nycklar."
 ],
 "Force Change": [
  null,
  "Framtvinga ändring"
 ],
 "Force password change": [
  null,
  "Framtvinga lösenordsändring"
 ],
 "Full Name": [
  null,
  "Fullständigt namn"
 ],
 "Invalid key": [
  null,
  "Felaktig nyckel"
 ],
 "Last Login": [
  null,
  "Senaste inloggning"
 ],
 "Local Accounts": [
  null,
  "Lokala konton"
 ],
 "Lock Account": [
  null,
  "Lås kontot"
 ],
 "Never expire password": [
  null,
  "Låt aldrig lösenord gå ut"
 ],
 "Never lock account": [
  null,
  "Lås aldrig konton"
 ],
 "New Password": [
  null,
  "Nytt lösenord"
 ],
 "Off": [
  null,
  "Av"
 ],
 "Old Password": [
  null,
  "Gammalt lösenord"
 ],
 "On": [
  null,
  "På"
 ],
 "Password": [
  null,
  "Lösenord"
 ],
 "Password Expiration": [
  null,
  "Utgång av lösenord"
 ],
 "Paste the contents of your public SSH key file here": [
  null,
  "Klistra in innehållet i din publika SSH-nyckelfil här"
 ],
 "Reset": [
  null,
  "Återställ"
 ],
 "Roles": [
  null,
  "Roller"
 ],
 "Set": [
  null,
  "Sätt"
 ],
 "Set Password": [
  null,
  "Sätt lösenord"
 ],
 "Terminate Session": [
  null,
  "Avsluta sessionen"
 ],
 "There are no authorized public keys for this account.": [
  null,
  "Det finns inga auktoriserade publika nycklar för detta konto."
 ],
 "Unnamed": [
  null,
  ""
 ],
 "User Name": [
  null,
  ""
 ],
 "You do not have permission to view the authorized public keys for this account.": [
  null,
  "Du har inte rättigheter att se de auktoriserade publika nycklarna för detta konto."
 ],
 "translatable": [
  null,
  ""
 ]
}));
