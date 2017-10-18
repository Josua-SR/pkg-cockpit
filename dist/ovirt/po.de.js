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
  "language": "de",
  "x-generator": "Zanata 3.9.6"
 },
 "$0 is available for most operating systems. To install it, search for it in GNOME Software or run the following:": [
  null,
  ""
 ],
 "Address:": [
  null,
  ""
 ],
 "Autostart:": [
  null,
  ""
 ],
 "Available": [
  null,
  ""
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
 "Cancel": [
  null,
  "Abbrechen"
 ],
 "Capacity": [
  null,
  "Kapazität"
 ],
 "Clicking \"Launch Remote Viewer\" will download a .vv file and launch $0.": [
  null,
  ""
 ],
 "Confirm deletion of $0": [
  null,
  ""
 ],
 "Connect with Remote Viewer": [
  null,
  ""
 ],
 "Connect with any $0 viewer application.": [
  null,
  ""
 ],
 "Connect with any SPICE or VNC viewer application.": [
  null,
  ""
 ],
 "Connection": [
  null,
  "Verbindung"
 ],
 "Console": [
  null,
  ""
 ],
 "Count:": [
  null,
  ""
 ],
 "Delete": [
  null,
  "Löschen"
 ],
 "Delete associated storage files:": [
  null,
  ""
 ],
 "Device": [
  null,
  ""
 ],
 "Disks": [
  null,
  "Datenträger"
 ],
 "Download the MSI from $0": [
  null,
  ""
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
  ""
 ],
 "Force Shut Down": [
  null,
  ""
 ],
 "GB": [
  null,
  ""
 ],
 "Host": [
  null,
  "Host"
 ],
 "Launch Remote Viewer": [
  null,
  ""
 ],
 "Manual Connection": [
  null,
  ""
 ],
 "Memory:": [
  null,
  ""
 ],
 "More Information": [
  null,
  ""
 ],
 "Name": [
  null,
  "Name"
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
 "No graphics console is defined for this virtual machine.": [
  null,
  ""
 ],
 "Ok": [
  null,
  ""
 ],
 "Overview": [
  null,
  ""
 ],
 "Please start the virtual machine to access its graphics console.": [
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
  "Neustarten"
 ],
 "Run": [
  null,
  "Läuft"
 ],
 "SPICE": [
  null,
  ""
 ],
 "SPICE Address:": [
  null,
  ""
 ],
 "SPICE Port:": [
  null,
  ""
 ],
 "SPICE TLS Port:": [
  null,
  ""
 ],
 "Send Non-Maskable Interrupt": [
  null,
  ""
 ],
 "Session": [
  null,
  "Sitzung"
 ],
 "Shut Down": [
  null,
  "Herunterfahren"
 ],
 "Source": [
  null,
  ""
 ],
 "State": [
  null,
  "Status"
 ],
 "Switch to Desktop Viewer": [
  null,
  ""
 ],
 "Switch to In-Browser Viewer": [
  null,
  ""
 ],
 "System": [
  null,
  "System"
 ],
 "Target": [
  null,
  "Ziel"
 ],
 "The VM crashed.": [
  null,
  "Die VM ist abgestürzt."
 ],
 "The VM is down.": [
  null,
  "Die VM ist ausgeschaltet."
 ],
 "The VM is going down.": [
  null,
  "Die VM wird ausgeschaltet."
 ],
 "The VM is idle.": [
  null,
  "Die VM ist untätig."
 ],
 "The VM is in process of dying (shut down or crash is not completed).": [
  null,
  ""
 ],
 "The VM is paused.": [
  null,
  "Die VM ist pausiert."
 ],
 "The VM is running and will be forced off before deletion.": [
  null,
  ""
 ],
 "The VM is running.": [
  null,
  "Die VM läuft."
 ],
 "The VM is suspended by guest power management.": [
  null,
  "Die VM ist vom Gast Power Management suspendiert."
 ],
 "Upgrade to a more recent version of libvirt to view disk statistics": [
  null,
  ""
 ],
 "Usage": [
  null,
  ""
 ],
 "Used": [
  null,
  "Benutzt"
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
 "VM SEND Non-Maskable Interrrupt action failed": [
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
 "VNC": [
  null,
  ""
 ],
 "VNC Address:": [
  null,
  ""
 ],
 "VNC Port:": [
  null,
  ""
 ],
 "VNC TLS Port:": [
  null,
  ""
 ],
 "Virtual Machines": [
  null,
  "Virtuelle Maschinen"
 ],
 "Volume": [
  null,
  ""
 ],
 "Your browser does not support iframes.": [
  null,
  ""
 ],
 "cdrom": [
  null,
  ""
 ],
 "crashed": [
  null,
  "abgestürzt"
 ],
 "custom": [
  null,
  ""
 ],
 "disabled": [
  null,
  "Aus"
 ],
 "disk": [
  null,
  ""
 ],
 "dying": [
  null,
  ""
 ],
 "enabled": [
  null,
  "An"
 ],
 "host": [
  null,
  ""
 ],
 "idle": [
  null,
  ""
 ],
 "network": [
  null,
  ""
 ],
 "no": [
  null,
  "Nein"
 ],
 "other": [
  null,
  ""
 ],
 "paused": [
  null,
  "pausiert"
 ],
 "running": [
  null,
  "Läuft"
 ],
 "shut off": [
  null,
  ""
 ],
 "shutdown": [
  null,
  "Herunterfahren"
 ],
 "suspended (PM)": [
  null,
  "Angehalten (PM)"
 ],
 "vCPUs:": [
  null,
  "vCPUs:"
 ],
 "yes": [
  null,
  "Ja"
 ]
}));