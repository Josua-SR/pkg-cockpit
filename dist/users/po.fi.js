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
  "x-generator": "Zanata 3.9.6"
 },
 "Access": [
  null,
  "Pääsy"
 ],
 "Account not available or cannot be edited.": [
  null,
  "Tili ei ole käytettävissä tai sitä ei voi muokata"
 ],
 "Accounts": [
  null,
  "Käyttäjätilit"
 ],
 "Add key": [
  null,
  "Lisää avain"
 ],
 "Add public key": [
  null,
  "Lisää julkinen avain"
 ],
 "Adding key": [
  null,
  "Avainta lisätään"
 ],
 "Authorized Public SSH Keys": [
  null,
  "Valtuutetut Julkiset SSH-Avaimet"
 ],
 "Back to Accounts": [
  null,
  "Takaisin Käyttäjätileihin"
 ],
 "Cancel": [
  null,
  "Peru"
 ],
 "Close": [
  null,
  "Sulje"
 ],
 "Confirm": [
  null,
  "Vahvista"
 ],
 "Confirm New Password": [
  null,
  "Vahvista uusi salasana"
 ],
 "Container Administrator": [
  null,
  "Kontti-Admin"
 ],
 "Create": [
  null,
  "Luo"
 ],
 "Create New Account": [
  null,
  "Luo Uusi Tili"
 ],
 "Delete": [
  null,
  "Poista"
 ],
 "Delete $0": [
  null,
  "Poista $0"
 ],
 "Delete Files": [
  null,
  "Poista Tiedostot"
 ],
 "Error": [
  null,
  "Virhe"
 ],
 "Error saving authorized keys: ": [
  null,
  "Virhe tallentaessa valtuutettuja avaimia:"
 ],
 "Excellent password": [
  null,
  "Erinomainen salasana"
 ],
 "Failed to change password": [
  null,
  "Ei voitu vaihtaa salasanaa"
 ],
 "Failed to load authorized keys.": [
  null,
  "Ei voitu ladata valtuutettuja avaimia."
 ],
 "Full Name": [
  null,
  "Koko nimi"
 ],
 "Invalid key": [
  null,
  "Virheellinen avain"
 ],
 "Last Login": [
  null,
  "Edellinen Kirjautuminen"
 ],
 "Local Accounts": [
  null,
  ""
 ],
 "Lock Account": [
  null,
  ""
 ],
 "Logged In": [
  null,
  ""
 ],
 "Never": [
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
  ""
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
 "Paste the contents of your public SSH key file here": [
  null,
  ""
 ],
 "Prompting via passwd timed out": [
  null,
  ""
 ],
 "Roles": [
  null,
  ""
 ],
 "Server Administrator": [
  null,
  ""
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
  ""
 ],
 "Unable to delete root account": [
  null,
  "Root-käyttäjätilin poistaminen epäonnistui"
 ],
 "Unable to rename root account": [
  null,
  "Root-käyttäjätilin uudelleennimeäminen epäonnistui"
 ],
 "Unexpected error": [
  null,
  "Odottamaton virhe"
 ],
 "Unnamed": [
  null,
  "Nimeämätön"
 ],
 "User Name": [
  null,
  "Käyttäjätunnus"
 ],
 "Validating key": [
  null,
  ""
 ],
 "You do not have permission to view the authorized public keys for this account.": [
  null,
  "Sinulla ei ole oikeutta tarkastella tämän käyttäjätilin julkisia avaimia."
 ],
 "page-title\u0004Accounts": [
  null,
  "Käyttäjätilit"
 ]
}));
