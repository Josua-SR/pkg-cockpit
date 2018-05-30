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
  "x-generator": "Zanata 4.4.5"
 },
 "$0 update": [
  "$0 updates",
  "$0 actualització",
  "$0 actualitzacions"
 ],
 "$1 security fix": [
  "$1 security fixes",
  "$1 correcció de seguretat",
  "$1 correccions de seguretat"
 ],
 ", including $1 security fix": [
  ", including $1 security fixes",
  ", incloent-hi $1 correcció de seguretat",
  ", incloent-hi $1 correccions de seguretat"
 ],
 "Apply all updates": [
  null,
  "Aplica totes les actualitzacions"
 ],
 "Apply security updates": [
  null,
  "Aplica les actualitzacions de seguretat"
 ],
 "Applying updates": [
  null,
  "Aplicació de les actualitzacions"
 ],
 "Applying updates failed": [
  null,
  "Ha fallat l'aplicació de les actualitzacions"
 ],
 "Automatic Updates": [
  null,
  "Actualitzacions automàtiques"
 ],
 "Available Updates": [
  null,
  "Actualitzacions disponibles"
 ],
 "Bugs:": [
  null,
  "Errors de programari:"
 ],
 "Cancel": [
  null,
  "Cancel·la"
 ],
 "Check for Updates": [
  null,
  "Comprova si hi ha actualitzacions"
 ],
 "Details": [
  null,
  "Detalls"
 ],
 "Downloaded": [
  null,
  "Baixat"
 ],
 "Downloading": [
  null,
  "S'està baixant"
 ],
 "Errata:": [
  null,
  "Fe d'errates:"
 ],
 "Ignore": [
  null,
  "Ignora"
 ],
 "Initializing...": [
  null,
  "S'està inicialitzant..."
 ],
 "Install All Updates": [
  null,
  "Instal·la totes les actualitzacions"
 ],
 "Install Security Updates": [
  null,
  "Instal·la les actualitzacions de seguretat"
 ],
 "Installed": [
  null,
  "Instal·lat"
 ],
 "Installing": [
  null,
  "S'està instal·lant"
 ],
 "Last checked: $0 ago": [
  null,
  "Última comprovació: fa $0"
 ],
 "Loading available updates failed": [
  null,
  "Ha fallat la càrrega de les actualitzacions disponibles"
 ],
 "Loading available updates, please wait...": [
  null,
  "S'estan carregant les actualitzacions disponibles, espereu..."
 ],
 "Name": [
  null,
  "Nom"
 ],
 "No updates pending": [
  null,
  "No hi ha actualitzacions pendents"
 ],
 "Off": [
  null,
  "Off"
 ],
 "On": [
  null,
  "On"
 ],
 "Package information": [
  null,
  "Informació dels paquets"
 ],
 "PackageKit crashed": [
  null,
  "PackageKit s'ha estavellat."
 ],
 "PackageKit is not installed": [
  null,
  "PackageKit no està instal·lat"
 ],
 "PackageKit reported error code $0": [
  null,
  "PackageKit ha informat un codi d'error $0"
 ],
 "Refreshing package information": [
  null,
  "Refrescament de la informació dels paquets"
 ],
 "Register…": [
  null,
  "Registra..."
 ],
 "Restart Now": [
  null,
  "Reinicia ara"
 ],
 "Restart Recommended": [
  null,
  "Reinici recomanat"
 ],
 "Restarting": [
  null,
  "S'està reiniciant"
 ],
 "Set up": [
  null,
  "Configurat"
 ],
 "Setting up": [
  null,
  "S'està configurant"
 ],
 "Severity": [
  null,
  "Gravetat"
 ],
 "Severity:": [
  null,
  "Gravetat:"
 ],
 "Software Updates": [
  null,
  "Actualitzacions"
 ],
 "Some other program is currently using the package manager, please wait...": [
  null,
  ""
 ],
 "System is up to date": [
  null,
  "El sistema està al dia"
 ],
 "The following packages were recently updated:": [
  null,
  "Els paquets següents s'han actualitzat recentment:"
 ],
 "The following packages were updated $0:": [
  null,
  "Els paquets següents s'han actualitzat $0:"
 ],
 "This system is not registered": [
  null,
  "Aquest sistema no està registrat"
 ],
 "This web console will be updated.": [
  null,
  ""
 ],
 "To get software updates, this system needs to be registered with Red Hat, either using the Red Hat Customer Portal or a local subscription server.": [
  null,
  "Per obtenir actualitzacions de programari, aquest sistema ha d'estar registrat a Red Hat, ja sigui utilitzant Red Hat Customer Portal o un servidor de subscripció local."
 ],
 "Unregistered System": [
  null,
  "Sistema sense registrar"
 ],
 "Update History": [
  null,
  "Historial d'actualitzacions"
 ],
 "Update Log": [
  null,
  "Registre d'actualitzacions"
 ],
 "Updated": [
  null,
  "Actualitzat"
 ],
 "Updated packages may require a restart to take effect.": [
  null,
  "Els paquets actualitzats poden requerir un reinici perquè tinguin efecte."
 ],
 "Updates are disabled.": [
  null,
  "Les actualitzacions estan inhabilitades."
 ],
 "Updating": [
  null,
  "S'està actualitzant"
 ],
 "Verified": [
  null,
  "Verificat"
 ],
 "Verifying": [
  null,
  "S'està verificant"
 ],
 "Version": [
  null,
  "Versió"
 ],
 "View Registration Details": [
  null,
  "Mostra els detalls del registrament"
 ],
 "You need to re-subscribe this system.": [
  null,
  "Heu de tornar a subscriure aquest sistema."
 ],
 "Your browser will disconnect, but this does not affect the update process. You can reconnect in a few moments to continue watching the progress.": [
  null,
  ""
 ],
 "Your server will close the connection soon. You can reconnect after it has restarted.": [
  null,
  "El vostre servidor tancarà la connexió aviat. Podeu tornar a connectar un cop s'hagi reiniciat."
 ],
 "and restart the machine automatically.": [
  null,
  "i reinicia automàticament la màquina."
 ],
 "at": [
  null,
  "Camí"
 ],
 "every day": [
  null,
  "cada dia"
 ],
 "on Fridays": [
  null,
  "els divendres"
 ],
 "on Mondays": [
  null,
  "els dilluns"
 ],
 "on Saturdays": [
  null,
  "els dissabtes"
 ],
 "on Sundays": [
  null,
  "els diumenges"
 ],
 "on Thursdays": [
  null,
  "els dijous"
 ],
 "on Tuesdays": [
  null,
  "els dimarts"
 ],
 "on Wednesdays": [
  null,
  "els dimecres"
 ],
 "undefined": [
  null,
  "indefinit"
 ]
}));
