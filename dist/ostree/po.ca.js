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
  "language": "ca",
  "x-generator": "Zanata 3.9.6"
 },
 "$0 key ID": [
  null,
  ""
 ],
 "$0 package": [
  null,
  "$0 paquet"
 ],
 "$0 packages": [
  null,
  "$0 paquets"
 ],
 "- Add New Repository": [
  null,
  "Dipòsit"
 ],
 "Add": [
  null,
  "Afegeix"
 ],
 "Add Another Key": [
  null,
  "Afegeix una altra clau"
 ],
 "Additions": [
  null,
  "Addicions"
 ],
 "Apply": [
  null,
  "Aplica"
 ],
 "Available": [
  null,
  "Disponible"
 ],
 "Begins with '-----BEGIN PGP PUBLIC KEY BLOCK-----'": [
  null,
  "Comença amb '-----BEGIN PGP PUBLIC KEY BLOCK-----'"
 ],
 "Cancel": [
  null,
  "Cancel·la"
 ],
 "Change Repository": [
  null,
  "Dipòsit"
 ],
 "Check for Updates": [
  null,
  "Comprova si hi ha actualitzacions"
 ],
 "Checking for updates": [
  null,
  "S'està comprovant si hi ha actualitzacions"
 ],
 "Connecting to OSTree": [
  null,
  ""
 ],
 "Couldn't load settings for '$0': $1": [
  null,
  "No s'ha pogut carregar els ajusts per a '$0': $1"
 ],
 "Currently using:": [
  null,
  ""
 ],
 "Default": [
  null,
  "Predeterminat"
 ],
 "Delete": [
  null,
  "Suprimeix"
 ],
 "Downgrades": [
  null,
  "Reversions"
 ],
 "Error loading remotes: $0": [
  null,
  "S'ha produït un error en desar les claus autoritzades:"
 ],
 "Expired Signature": [
  null,
  ""
 ],
 "Failed": [
  null,
  "Ha fallat"
 ],
 "Good Signature": [
  null,
  ""
 ],
 "Invalid Signature": [
  null,
  "Signatura no vàlida"
 ],
 "Name": [
  null,
  "Nom"
 ],
 "No Deployments": [
  null,
  "Sense desplegaments"
 ],
 "No OSTree deployments found": [
  null,
  "No s'ha trobat desplegaments OSTree"
 ],
 "No configuration data found": [
  null,
  "No s'ha trobat cap dada de configuració"
 ],
 "No signature avaliable": [
  null,
  ""
 ],
 "Not authorized to update software on this system": [
  null,
  "No autoritzat per actualitzar el programari en aquest sistema"
 ],
 "OS $0 not found": [
  null,
  "SO $0 no trobat"
 ],
 "OSTree is not available on this system": [
  null,
  "OSTree no està disponible en aquest sistema"
 ],
 "Operating System": [
  null,
  "Sistema operatiu"
 ],
 "Operating System Updates": [
  null,
  "Actualitzacions del sistema operatiu"
 ],
 "Origin": [
  null,
  "Origen"
 ],
 "Packages": [
  null,
  "Paquets"
 ],
 "Please provide a valid URL": [
  null,
  "Si us plau, proporcioneu un URL vàlid"
 ],
 "Please provide a valid name": [
  null,
  "Si us plau, proporcioneu un nom vàlid"
 ],
 "Rebase and Reboot": [
  null,
  ""
 ],
 "Receiving delta parts": [
  null,
  "S'estan rebent les parts de deltes"
 ],
 "Receiving metadata objects": [
  null,
  "S'estan rebent els objectes de metadades"
 ],
 "Receiving objects: $0%": [
  null,
  "S'estan rebent objectes: $0%"
 ],
 "Reconnect": [
  null,
  "Torna a connectar"
 ],
 "Released": [
  null,
  "Llançat"
 ],
 "Removals": [
  null,
  "Supressions"
 ],
 "Roll Back and Reboot": [
  null,
  ""
 ],
 "Running": [
  null,
  "En execució"
 ],
 "Scanning metadata": [
  null,
  "S'estan escanejant les metadades"
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
  "Actualitzacions de programari"
 ],
 "Status": [
  null,
  "Estat"
 ],
 "This deployment contains the same packages as your currently booted system": [
  null,
  ""
 ],
 "Tree": [
  null,
  "Arbre"
 ],
 "URL": [
  null,
  ""
 ],
 "Unable to communicate with OSTree": [
  null,
  "No es pot comunicar amb OSTree"
 ],
 "Update and Reboot": [
  null,
  "Actualitza i reinicia"
 ],
 "Updates": [
  null,
  "Actualitzacions"
 ],
 "Updating": [
  null,
  "S'està actualitzant"
 ],
 "Use trusted GPG key": [
  null,
  "Utilitza una clau GPG de confiança"
 ],
 "Version": [
  null,
  "Versió"
 ],
 "When": [
  null,
  ""
 ],
 "Writing objects": [
  null,
  "S'estan escrivint els objectes"
 ],
 "at": [
  null,
  "Camí"
 ]
}));
