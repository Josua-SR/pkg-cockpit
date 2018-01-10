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
 "Action": [
  null,
  ""
 ],
 "Additional": [
  null,
  ""
 ],
 "Address": [
  null,
  "Adresse"
 ],
 "Address:": [
  null,
  ""
 ],
 "All running virtual machines will be turned off.": [
  null,
  ""
 ],
 "Automatically selected host": [
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
 "Base Template": [
  null,
  ""
 ],
 "Base template": [
  null,
  ""
 ],
 "Base template:": [
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
 "CHANGE NETWORK STATE action failed": [
  null,
  ""
 ],
 "CPU Type:": [
  null,
  ""
 ],
 "CREATE VM action failed": [
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
 "Cluster": [
  null,
  ""
 ],
 "Cluster Templates": [
  null,
  ""
 ],
 "Cluster Virtual Machines": [
  null,
  ""
 ],
 "Confirm deletion of $0": [
  null,
  ""
 ],
 "Confirm migration": [
  null,
  ""
 ],
 "Confirm reload:": [
  null,
  ""
 ],
 "Confirm save:": [
  null,
  ""
 ],
 "Connect to oVirt Engine": [
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
 "Console Type": [
  null,
  ""
 ],
 "Consoles": [
  null,
  ""
 ],
 "Count:": [
  null,
  ""
 ],
 "Create": [
  null,
  "Erstellen"
 ],
 "Create VM": [
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
 "Description": [
  null,
  ""
 ],
 "Description:": [
  null,
  ""
 ],
 "Device": [
  null,
  ""
 ],
 "Disconnect": [
  null,
  ""
 ],
 "Disconnected from serial console. Click the Reconnect button.": [
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
 "Edit the vdsm.conf": [
  null,
  ""
 ],
 "Emulated Machine:": [
  null,
  ""
 ],
 "Enter New VM name": [
  null,
  ""
 ],
 "FQDN": [
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
 "Graphics Console (VNC)": [
  null,
  ""
 ],
 "Graphics Console in Desktop Viewer": [
  null,
  ""
 ],
 "HA": [
  null,
  ""
 ],
 "HA:": [
  null,
  ""
 ],
 "Host": [
  null,
  "Host"
 ],
 "Host to Maintenance": [
  null,
  ""
 ],
 "Launch Remote Viewer": [
  null,
  ""
 ],
 "Loading ...": [
  null,
  ""
 ],
 "Loading data ...": [
  null,
  ""
 ],
 "MAC Address": [
  null,
  ""
 ],
 "MIGRATE action failed": [
  null,
  ""
 ],
 "MTU": [
  null,
  ""
 ],
 "Managed": [
  null,
  ""
 ],
 "Manual Connection": [
  null,
  ""
 ],
 "Memory": [
  null,
  "Speicher"
 ],
 "Memory:": [
  null,
  ""
 ],
 "Migrate To:": [
  null,
  ""
 ],
 "Model type": [
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
 "Networks": [
  null,
  ""
 ],
 "No VM found in oVirt.": [
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
 "No console defined for this virtual machine.": [
  null,
  ""
 ],
 "No disks defined for this VM": [
  null,
  ""
 ],
 "No network interfaces defined for this VM": [
  null,
  ""
 ],
 "OK": [
  null,
  ""
 ],
 "OS": [
  null,
  ""
 ],
 "OS Type:": [
  null,
  ""
 ],
 "Ok": [
  null,
  ""
 ],
 "Optimized for:": [
  null,
  ""
 ],
 "Overview": [
  null,
  ""
 ],
 "Please confirm, the host shall be switched to maintenance mode.": [
  null,
  ""
 ],
 "Please provide fully qualified domain name and port of the oVirt engine.": [
  null,
  ""
 ],
 "Please provide valid oVirt engine fully qualified domain name (FQDN) and port (443 by default)": [
  null,
  ""
 ],
 "Please refer to oVirt's $0 for more information about Remote Viewer setup.": [
  null,
  ""
 ],
 "Please start the virtual machine to access its console.": [
  null,
  ""
 ],
 "Please wait till VMs list is loaded from the server.": [
  null,
  ""
 ],
 "Please wait till list of templates is loaded from the server.": [
  null,
  ""
 ],
 "Plug": [
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
 "Portgroup": [
  null,
  ""
 ],
 "Preparing for Maintenance": [
  null,
  ""
 ],
 "Protocol": [
  null,
  ""
 ],
 "REBOOT action failed": [
  null,
  ""
 ],
 "Readonly": [
  null,
  ""
 ],
 "Reconnect": [
  null,
  "Erneut verbinden"
 ],
 "Register oVirt": [
  null,
  ""
 ],
 "Registering oVirt to Cockpit": [
  null,
  ""
 ],
 "Reload": [
  null,
  "Neu Laden"
 ],
 "Restart": [
  null,
  "Neustarten"
 ],
 "Run": [
  null,
  "Läuft"
 ],
 "Run Here": [
  null,
  ""
 ],
 "Running Since:": [
  null,
  ""
 ],
 "SHUTDOWN action failed": [
  null,
  ""
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
 "START action failed": [
  null,
  ""
 ],
 "SUSPEND action failed": [
  null,
  ""
 ],
 "Save": [
  null,
  "Speichern"
 ],
 "Send Non-Maskable Interrupt": [
  null,
  ""
 ],
 "Send shortcut": [
  null,
  ""
 ],
 "Serial Console": [
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
 "Stateless": [
  null,
  ""
 ],
 "Stateless:": [
  null,
  ""
 ],
 "Suspend": [
  null,
  ""
 ],
 "Switch Host to Maintenance": [
  null,
  ""
 ],
 "Switching host to maintenance mode failed. Received error: ": [
  null,
  ""
 ],
 "Switching host to maintenance mode in progress ...": [
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
 "Template": [
  null,
  "Vorlage"
 ],
 "Templates": [
  null,
  ""
 ],
 "Templates of $0 cluster": [
  null,
  ""
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
 "This virtual machine is not managed by oVirt": [
  null,
  ""
 ],
 "Type": [
  null,
  "Typ"
 ],
 "Unplug": [
  null,
  ""
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
 "VDSM": [
  null,
  ""
 ],
 "VDSM Service Management": [
  null,
  ""
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
 "VM icon": [
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
 "Version": [
  null,
  "Version"
 ],
 "Version num": [
  null,
  ""
 ],
 "Virtual Machines": [
  null,
  "Virtuelle Maschinen"
 ],
 "Virtual Machines of $0 cluster": [
  null,
  ""
 ],
 "Virtualport": [
  null,
  ""
 ],
 "Volume": [
  null,
  ""
 ],
 "Your browser does not support iframes.": [
  null,
  ""
 ],
 "bridge": [
  null,
  ""
 ],
 "cdrom": [
  null,
  ""
 ],
 "connecting": [
  null,
  ""
 ],
 "cores": [
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
 "direct": [
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
 "down": [
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
 "error": [
  null,
  "Fehler"
 ],
 "ethernet": [
  null,
  ""
 ],
 "host": [
  null,
  ""
 ],
 "hostdev": [
  null,
  ""
 ],
 "idle": [
  null,
  ""
 ],
 "initializing": [
  null,
  ""
 ],
 "installation failed": [
  null,
  ""
 ],
 "installing OS": [
  null,
  ""
 ],
 "kdumping": [
  null,
  ""
 ],
 "maintenance": [
  null,
  ""
 ],
 "mcast": [
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
 "non operational": [
  null,
  ""
 ],
 "non responsive": [
  null,
  ""
 ],
 "oVirt": [
  null,
  ""
 ],
 "oVirt Host State:": [
  null,
  ""
 ],
 "oVirt Provider installation script failed due to missing arguments.": [
  null,
  ""
 ],
 "oVirt Provider installation script failed: Can't write to /etc/cockpit/machines-ovirt.config, try as root.": [
  null,
  ""
 ],
 "oVirt installation script failed with following output: ": [
  null,
  ""
 ],
 "oVirt login in progress": [
  null,
  ""
 ],
 "other": [
  null,
  ""
 ],
 "paused": [
  null,
  "pausiert"
 ],
 "pending approval": [
  null,
  ""
 ],
 "reboot": [
  null,
  ""
 ],
 "running": [
  null,
  "Läuft"
 ],
 "server": [
  null,
  ""
 ],
 "shut off": [
  null,
  ""
 ],
 "shutdown": [
  null,
  "Herunterfahren"
 ],
 "sockets": [
  null,
  ""
 ],
 "suspended (PM)": [
  null,
  "Angehalten (PM)"
 ],
 "threads": [
  null,
  ""
 ],
 "udp": [
  null,
  ""
 ],
 "unassigned": [
  null,
  ""
 ],
 "undefined": [
  null,
  "nicht definiert"
 ],
 "up": [
  null,
  ""
 ],
 "user": [
  null,
  ""
 ],
 "vCPUs": [
  null,
  ""
 ],
 "vCPUs:": [
  null,
  "vCPUs:"
 ],
 "vhostuser": [
  null,
  ""
 ],
 "yes": [
  null,
  "Ja"
 ]
}));
