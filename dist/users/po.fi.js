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
  "x-generator": "Zanata 4.6.2"
 },
 "Access": [
  null,
  "Pääsy"
 ],
 "Account Expiration": [
  null,
  "Tilin vanheneminen"
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
 "Authorized Public SSH Keys": [
  null,
  "Valtuutetut julkiset SSH-avaimet"
 ],
 "Back to Accounts": [
  null,
  "Takaisin käyttäjätileihin"
 ],
 "Cancel": [
  null,
  "Peru"
 ],
 "Change": [
  null,
  "Vaihda"
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
 "Create": [
  null,
  "Luo"
 ],
 "Create New Account": [
  null,
  "Luo uusi tili"
 ],
 "Delete": [
  null,
  "Poista"
 ],
 "Delete Files": [
  null,
  "Poista tiedostot"
 ],
 "Failed to load authorized keys.": [
  null,
  "Ei voitu ladata valtuutettuja avaimia."
 ],
 "Force Change": [
  null,
  "Pakota muutos"
 ],
 "Force password change": [
  null,
  "Pakota salasanan vaihdos"
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
  "Edellinen kirjautuminen"
 ],
 "Local Accounts": [
  null,
  "Paikalliset tilit"
 ],
 "Lock Account": [
  null,
  "Lukitse tili"
 ],
 "Never expire password": [
  null,
  "Älä koskaan vanhenna salasanaa"
 ],
 "Never lock account": [
  null,
  "Älä koskaan lukitse tiliä"
 ],
 "New Password": [
  null,
  "Uusi salasana"
 ],
 "Off": [
  null,
  "Pois"
 ],
 "Old Password": [
  null,
  "Vanha salasana"
 ],
 "On": [
  null,
  "Päällä"
 ],
 "Password": [
  null,
  "Salasana"
 ],
 "Password Expiration": [
  null,
  "Salasanan vanheneminen"
 ],
 "Paste the contents of your public SSH key file here": [
  null,
  "Liitä julkisen SSH-avaintiedostosi sisältö tähän"
 ],
 "Reset": [
  null,
  ""
 ],
 "Roles": [
  null,
  "Roolit"
 ],
 "Set": [
  null,
  ""
 ],
 "Set Password": [
  null,
  "Aseta salasana"
 ],
 "Terminate Session": [
  null,
  ""
 ],
 "There are no authorized public keys for this account.": [
  null,
  "Tällä tilillä ei ole valtuutettuja julkisia avaimia."
 ],
 "Unnamed": [
  null,
  "Nimeämätön"
 ],
 "User Name": [
  null,
  "Käyttäjätunnus"
 ],
 "You do not have permission to view the authorized public keys for this account.": [
  null,
  "Sinulla ei ole oikeutta tarkastella tämän käyttäjätilin julkisia avaimia."
 ],
 "translatable": [
  null,
  ""
 ]
}));
