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
 "$0 key ID": [
  null,
  "$0 avain ID"
 ],
 "$0 package": [
  null,
  "$0 paketti"
 ],
 "$0 packages": [
  null,
  "$0 paketit"
 ],
 "- Add New Repository": [
  null,
  "- Lisää uusi asennuslähde"
 ],
 "Add": [
  null,
  "Lisää"
 ],
 "Add Another Key": [
  null,
  "Lisää Uusi Avain"
 ],
 "Additions": [
  null,
  "Lisäykset"
 ],
 "Apply": [
  null,
  "Toteuta"
 ],
 "Available": [
  null,
  "Saatavilla"
 ],
 "Begins with '-----BEGIN PGP PUBLIC KEY BLOCK-----'": [
  null,
  "Alkaa '-----BEGIN PGP PUBLIC KEY BLOCK-----'"
 ],
 "Cancel": [
  null,
  "Peru"
 ],
 "Change Repository": [
  null,
  "Vaihda Asennuslähde"
 ],
 "Check for Updates": [
  null,
  "Etsi Päivityksiä"
 ],
 "Checking for updates": [
  null,
  "Etsitään päivityksiä"
 ],
 "Connecting to OSTree": [
  null,
  "Yhdistetään OSTree:n"
 ],
 "Couldn't load settings for '$0': $1": [
  null,
  "Ei voitu ladata asetuksia kohteelle '$0': $1"
 ],
 "Currently using:": [
  null,
  "Tällä hetkellä käytössä:"
 ],
 "Default": [
  null,
  "Oletus"
 ],
 "Delete": [
  null,
  "Poista"
 ],
 "Downgrades": [
  null,
  ""
 ],
 "Error loading remotes: $0": [
  null,
  "Virhe ladattaessa ohjaimia: $0"
 ],
 "Expired Signature": [
  null,
  "Vanhentunut Allekirjoitus"
 ],
 "Failed": [
  null,
  "Epäonnistui"
 ],
 "Good Signature": [
  null,
  "Hyvä Allekirjoitus"
 ],
 "Invalid Signature": [
  null,
  "Virheellinen Allekirjoitus"
 ],
 "Name": [
  null,
  ""
 ],
 "No Deployments": [
  null,
  ""
 ],
 "No OSTree deployments found": [
  null,
  ""
 ],
 "No configuration data found": [
  null,
  ""
 ],
 "No signature avaliable": [
  null,
  ""
 ],
 "Not authorized to update software on this system": [
  null,
  ""
 ],
 "OS $0 not found": [
  null,
  ""
 ],
 "OSTree is not available on this system": [
  null,
  ""
 ],
 "Operating System": [
  null,
  ""
 ],
 "Operating System Updates": [
  null,
  ""
 ],
 "Origin": [
  null,
  ""
 ],
 "Packages": [
  null,
  ""
 ],
 "Please provide a valid URL": [
  null,
  ""
 ],
 "Please provide a valid name": [
  null,
  ""
 ],
 "Rebase and Reboot": [
  null,
  ""
 ],
 "Receiving delta parts": [
  null,
  ""
 ],
 "Receiving metadata objects": [
  null,
  ""
 ],
 "Receiving objects: $0%": [
  null,
  ""
 ],
 "Reconnect": [
  null,
  ""
 ],
 "Released": [
  null,
  ""
 ],
 "Removals": [
  null,
  ""
 ],
 "Roll Back and Reboot": [
  null,
  ""
 ],
 "Running": [
  null,
  ""
 ],
 "Scanning metadata": [
  null,
  ""
 ],
 "Signature": [
  null,
  ""
 ],
 "Signed by": [
  null,
  ""
 ],
 "Software Updates": [
  null,
  ""
 ],
 "Status": [
  null,
  ""
 ],
 "This deployment contains the same packages as your currently booted system": [
  null,
  ""
 ],
 "Tree": [
  null,
  "Puu"
 ],
 "URL": [
  null,
  "URL"
 ],
 "Unable to communicate with OSTree": [
  null,
  "Kommunikaatio OSTree:n kanssa epäonnistui"
 ],
 "Update and Reboot": [
  null,
  "Päivitä ja Käynnistä uudelleen"
 ],
 "Updates": [
  null,
  "Päivitykset"
 ],
 "Updating": [
  null,
  "Päivitetään"
 ],
 "Use trusted GPG key": [
  null,
  "Käytä luotettua GPG-avainta"
 ],
 "Version": [
  null,
  "Versio"
 ],
 "When": [
  null,
  "Kun"
 ],
 "Writing objects": [
  null,
  ""
 ],
 "at": [
  null,
  ""
 ]
}));
