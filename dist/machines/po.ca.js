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
 "Autostart:": [
  null,
  ""
 ],
 "Available": [
  null,
  "Disponible"
 ],
 "Connection": [
  null,
  "Connecta"
 ],
 "FORCEOFF_VM action failed": [
  null,
  ""
 ],
 "FORCEREBOOT_VM action failed": [
  null,
  ""
 ],
 "Force Restart": [
  null,
  ""
 ],
 "Force Shut Down": [
  null,
  ""
 ],
 "ID:": [
  null,
  ""
 ],
 "Memory:": [
  null,
  ""
 ],
 "Name": [
  null,
  "Nom"
 ],
 "No VM is running or defined on this host": [
  null,
  ""
 ],
 "OS Type:": [
  null,
  ""
 ],
 "Overview": [
  null,
  ""
 ],
 "REBOOT_VM action failed": [
  null,
  ""
 ],
 "Restart": [
  null,
  "Reinicia"
 ],
 "Run": [
  null,
  ""
 ],
 "SHUTDOWN_VM action failed": [
  null,
  ""
 ],
 "START_VM action failed": [
  null,
  ""
 ],
 "Session": [
  null,
  "Versió"
 ],
 "Shut Down": [
  null,
  ""
 ],
 "State": [
  null,
  "Estat"
 ],
 "State:": [
  null,
  ""
 ],
 "System": [
  null,
  ""
 ],
 "The VM crashed.": [
  null,
  ""
 ],
 "The VM is down.": [
  null,
  ""
 ],
 "The VM is going down.": [
  null,
  ""
 ],
 "The VM is idle.": [
  null,
  ""
 ],
 "The VM is in process of dying (shut down or crash is not completed).": [
  null,
  ""
 ],
 "The VM is paused.": [
  null,
  ""
 ],
 "The VM is running.": [
  null,
  ""
 ],
 "The VM is suspended by guest power management.": [
  null,
  ""
 ],
 "Usage": [
  null,
  ""
 ],
 "Used": [
  null,
  "Utilitzat"
 ],
 "Virtual Machines": [
  null,
  ""
 ],
 "crashed": [
  null,
  ""
 ],
 "disabled": [
  null,
  "Inhabilitat"
 ],
 "dying": [
  null,
  ""
 ],
 "enabled": [
  null,
  "Habilitat"
 ],
 "idle": [
  null,
  ""
 ],
 "paused": [
  null,
  ""
 ],
 "running": [
  null,
  "En execució"
 ],
 "shut off": [
  null,
  ""
 ],
 "shutdown": [
  null,
  ""
 ],
 "suspended (PM)": [
  null,
  ""
 ],
 "vCPUs:": [
  null,
  ""
 ]
}));
