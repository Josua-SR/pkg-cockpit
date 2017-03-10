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
nplurals=2; plural=(n > 1);
return plural;
},
  "language": "fr",
  "x-generator": "Zanata 3.9.6"
 },
 "$0 key ID": [
  null,
  ""
 ],
 "$0 package": [
  null,
  ""
 ],
 "$0 packages": [
  null,
  ""
 ],
 "- Add New Repository": [
  null,
  "Dépôt"
 ],
 "Add": [
  null,
  "Ajouter"
 ],
 "Add Another Key": [
  null,
  ""
 ],
 "Additions": [
  null,
  ""
 ],
 "Apply": [
  null,
  "Appliquer"
 ],
 "Available": [
  null,
  ""
 ],
 "Begins with '-----BEGIN PGP PUBLIC KEY BLOCK-----'": [
  null,
  ""
 ],
 "Cancel": [
  null,
  "Annuler"
 ],
 "Change Repository": [
  null,
  "Dépôt"
 ],
 "Check for Updates": [
  null,
  ""
 ],
 "Checking for updates": [
  null,
  ""
 ],
 "Connecting to OSTree": [
  null,
  ""
 ],
 "Couldn't load settings for '$0': $1": [
  null,
  "Impossible de charger les données utilisateur"
 ],
 "Currently using:": [
  null,
  ""
 ],
 "Default": [
  null,
  "Par défaut"
 ],
 "Delete": [
  null,
  "Supprimer"
 ],
 "Downgrades": [
  null,
  ""
 ],
 "Error loading remotes: $0": [
  null,
  "Erreur pendant l'enregistrement du fichier authorized_keys :"
 ],
 "Expired Signature": [
  null,
  ""
 ],
 "Failed": [
  null,
  "Échec"
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
  "Nom"
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
  "Configuration inconnue"
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
  "Merci d'indiquer un espace de nommage valide."
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
  "Reconnecter"
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
  "En fonctionnement"
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
  "État"
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
  ""
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
  ""
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
  "Version"
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
