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
  "language": "es",
  "x-generator": "Zanata 3.9.6"
 },
 "$0 update": [
  "$0 updates",
  "",
  ""
 ],
 ", including $1 security fix": [
  ", including $1 security fixes",
  "",
  ""
 ],
 "Applying updates": [
  null,
  ""
 ],
 "Applying updates failed": [
  null,
  ""
 ],
 "Available Updates": [
  null,
  ""
 ],
 "Bugs": [
  null,
  ""
 ],
 "Cancel": [
  null,
  "Cancelar"
 ],
 "Check for updates": [
  null,
  "Buscar actualizaciones"
 ],
 "Cockpit itself will be updated.": [
  null,
  ""
 ],
 "Details": [
  null,
  "Detalles"
 ],
 "Downloading": [
  null,
  ""
 ],
 "Initializing...": [
  null,
  ""
 ],
 "Install all updates": [
  null,
  ""
 ],
 "Install security updates": [
  null,
  ""
 ],
 "Installing": [
  null,
  ""
 ],
 "Last checked: $0 ago": [
  null,
  ""
 ],
 "Loading available updates failed": [
  null,
  ""
 ],
 "Loading available updates, please wait...": [
  null,
  ""
 ],
 "Name": [
  null,
  "Nombre"
 ],
 "No updates pending": [
  null,
  ""
 ],
 "PackageKit crashed": [
  null,
  ""
 ],
 "PackageKit is not installed": [
  null,
  ""
 ],
 "PackageKit reported error code $0": [
  null,
  ""
 ],
 "Refreshing package information": [
  null,
  ""
 ],
 "Security Update": [
  null,
  ""
 ],
 "Setting up": [
  null,
  ""
 ],
 "Software Updates": [
  null,
  "Actualizaciones de Software"
 ],
 "Some other program is currently using the package manager, please wait...": [
  null,
  ""
 ],
 "System is up to date": [
  null,
  ""
 ],
 "Updating": [
  null,
  "Actualizando"
 ],
 "Verifying": [
  null,
  ""
 ],
 "Version": [
  null,
  "Versión"
 ],
 "When you get disconnected, the updates will continue in the background. You can reconnect and resume watching the update progress.": [
  null,
  ""
 ]
}));