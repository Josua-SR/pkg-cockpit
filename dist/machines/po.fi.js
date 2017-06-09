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
 "Autostart:": [
  null,
  "Autostart:"
 ],
 "Available": [
  null,
  "Saatavilla"
 ],
 "Boot Order:": [
  null,
  ""
 ],
 "Bus": [
  null,
  ""
 ],
 "CPU Type:": [
  null,
  ""
 ],
 "Capacity": [
  null,
  "Koko"
 ],
 "Connection": [
  null,
  "Yhteys"
 ],
 "Count:": [
  null,
  ""
 ],
 "Device": [
  null,
  ""
 ],
 "Disks": [
  null,
  "Levyt"
 ],
 "Emulated Machine:": [
  null,
  ""
 ],
 "File": [
  null,
  ""
 ],
 "Force Restart": [
  null,
  "Pakota Uudelleenkäynnistys"
 ],
 "Force Shut Down": [
  null,
  "Pakota Sammutus"
 ],
 "GB": [
  null,
  ""
 ],
 "Host": [
  null,
  "Kone"
 ],
 "Memory:": [
  null,
  ""
 ],
 "Name": [
  null,
  ""
 ],
 "No VM is running or defined on this host": [
  null,
  ""
 ],
 "No boot device found": [
  null,
  ""
 ],
 "No disks defined for this VM": [
  null,
  ""
 ],
 "Overview": [
  null,
  ""
 ],
 "Pool": [
  null,
  ""
 ],
 "Port": [
  null,
  ""
 ],
 "Protocol": [
  null,
  ""
 ],
 "Readonly": [
  null,
  ""
 ],
 "Restart": [
  null,
  ""
 ],
 "Run": [
  null,
  ""
 ],
 "Session": [
  null,
  ""
 ],
 "Shut Down": [
  null,
  ""
 ],
 "Source": [
  null,
  ""
 ],
 "State": [
  null,
  ""
 ],
 "System": [
  null,
  ""
 ],
 "Target": [
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
 "Upgrade to a more recent version of libvirt to view disk statistics": [
  null,
  ""
 ],
 "Usage": [
  null,
  "Käyttö"
 ],
 "Used": [
  null,
  "Käytetty"
 ],
 "VM FORCE OFF action failed": [
  null,
  ""
 ],
 "VM FORCE REBOOT action failed": [
  null,
  ""
 ],
 "VM REBOOT action failed": [
  null,
  ""
 ],
 "VM SHUT DOWN action failed": [
  null,
  ""
 ],
 "VM START action failed": [
  null,
  ""
 ],
 "Virtual Machines": [
  null,
  "Virtuaalikoneet"
 ],
 "Volume": [
  null,
  "Taltio"
 ],
 "cdrom": [
  null,
  ""
 ],
 "crashed": [
  null,
  "kaatui"
 ],
 "custom": [
  null,
  ""
 ],
 "disabled": [
  null,
  "pois käytöstä"
 ],
 "disk": [
  null,
  ""
 ],
 "dying": [
  null,
  "kuolemassa"
 ],
 "enabled": [
  null,
  "käytössä"
 ],
 "host": [
  null,
  ""
 ],
 "idle": [
  null,
  "jouten"
 ],
 "network": [
  null,
  ""
 ],
 "no": [
  null,
  "ei"
 ],
 "other": [
  null,
  ""
 ],
 "paused": [
  null,
  "pysäytetty"
 ],
 "running": [
  null,
  "suoritetaan"
 ],
 "shut off": [
  null,
  "sammutettu"
 ],
 "shutdown": [
  null,
  "sammuta"
 ],
 "suspended (PM)": [
  null,
  "pysäytetty (PM)"
 ],
 "vCPUs:": [
  null,
  "vCPUt:"
 ],
 "yes": [
  null,
  "kyllä"
 ]
}));
