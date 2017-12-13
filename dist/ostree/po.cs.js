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
 "$0 key ID": [
  null,
  "ID klíče $0"
 ],
 "$0 package": [
  null,
  "$0 balíček"
 ],
 "$0 packages": [
  null,
  "$0 balíčky"
 ],
 "- Add New Repository": [
  null,
  "- Přidat nový repozitář"
 ],
 "Add": [
  null,
  "Přidat"
 ],
 "Add Another Key": [
  null,
  "Přidat další klíč"
 ],
 "Additions": [
  null,
  ""
 ],
 "Apply": [
  null,
  "Použít"
 ],
 "Available": [
  null,
  "Dostupný"
 ],
 "Begins with '-----BEGIN PGP PUBLIC KEY BLOCK-----'": [
  null,
  "Začíná textem '-----BEGIN PGP PUBLIC KEY BLOCK-----'"
 ],
 "Cancel": [
  null,
  "Zrušit"
 ],
 "Change Repository": [
  null,
  "Změnit repozitář"
 ],
 "Check for Updates": [
  null,
  "Zkontrolovat aktualizace"
 ],
 "Checking for updates": [
  null,
  "Hledám aktualizace"
 ],
 "Connecting to OSTree": [
  null,
  ""
 ],
 "Couldn't load settings for '$0': $1": [
  null,
  ""
 ],
 "Currently using:": [
  null,
  ""
 ],
 "Default": [
  null,
  "Výchozí"
 ],
 "Delete": [
  null,
  "Smazat"
 ],
 "Downgrades": [
  null,
  ""
 ],
 "Error loading remotes: $0": [
  null,
  ""
 ],
 "Expired Signature": [
  null,
  ""
 ],
 "Failed": [
  null,
  "Neúspěšný"
 ],
 "Good Signature": [
  null,
  ""
 ],
 "Invalid Signature": [
  null,
  ""
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
  "Původ"
 ],
 "Packages": [
  null,
  "Balíčky"
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
  "Běží"
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
  "Stav"
 ],
 "This deployment contains the same packages as your currently booted system": [
  null,
  ""
 ],
 "Tree": [
  null,
  ""
 ],
 "URL": [
  null,
  "URL"
 ],
 "Unable to communicate with OSTree": [
  null,
  ""
 ],
 "Update and Reboot": [
  null,
  ""
 ],
 "Updates": [
  null,
  "Aktualizace"
 ],
 "Updating": [
  null,
  ""
 ],
 "Use trusted GPG key": [
  null,
  ""
 ],
 "Version": [
  null,
  "Verze"
 ],
 "When": [
  null,
  ""
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
