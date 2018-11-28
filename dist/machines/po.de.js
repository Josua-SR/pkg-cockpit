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
  "x-generator": "Zanata 4.6.2"
 },
 "$0 is available for most operating systems. To install it, search for it in GNOME Software or run the following:": [
  null,
  ""
 ],
 "Add": [
  null,
  "Hinzufügen"
 ],
 "Add Disk": [
  null,
  ""
 ],
 "Address": [
  null,
  "Adresse"
 ],
 "Address:": [
  null,
  "Adresse:"
 ],
 "Apply": [
  null,
  "Anwenden"
 ],
 "Attach permanently": [
  null,
  ""
 ],
 "Automatically start libvirt on boot": [
  null,
  ""
 ],
 "Autostart:": [
  null,
  ""
 ],
 "Available": [
  null,
  "Verfügbar"
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
 "Cancel": [
  null,
  "Abbrechen"
 ],
 "Capacity": [
  null,
  "Kapazität"
 ],
 "Changes will take effect after shutting down the VM": [
  null,
  ""
 ],
 "Clicking \"Launch Remote Viewer\" will download a .vv file and launch $0.": [
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
 "Connecting": [
  null,
  ""
 ],
 "Connecting to Virtualization Service": [
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
  "Konsolen"
 ],
 "Cores per socket": [
  null,
  "Kerne pro Socket"
 ],
 "Create": [
  null,
  "Erstellen"
 ],
 "Create New": [
  null,
  "Neu erstellen"
 ],
 "Create VM": [
  null,
  ""
 ],
 "Creation of vm $0 failed": [
  null,
  ""
 ],
 "Ctrl+Alt+Del": [
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
  "Gerät"
 ],
 "Disconnect": [
  null,
  "Verbindung trennen"
 ],
 "Disconnected": [
  null,
  "Getrennt"
 ],
 "Disconnected from serial console. Click the Reconnect button.": [
  null,
  ""
 ],
 "Disk failed to be attached": [
  null,
  ""
 ],
 "Disk failed to be created": [
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
 "Edit": [
  null,
  "Bearbeiten"
 ],
 "Emulated Machine:": [
  null,
  ""
 ],
 "Fewer than the maximum number of virtual CPUs should be enabled.": [
  null,
  ""
 ],
 "File": [
  null,
  "Datei"
 ],
 "Filesystem": [
  null,
  "Dateisystem"
 ],
 "Force Restart": [
  null,
  ""
 ],
 "Force Shut Down": [
  null,
  ""
 ],
 "Format": [
  null,
  "Formatieren"
 ],
 "GET HYPERVISOR MAX VCPU action failed": [
  null,
  ""
 ],
 "GiB": [
  null,
  "GiB"
 ],
 "Graphics Console (VNC)": [
  null,
  ""
 ],
 "Graphics Console in Desktop Viewer": [
  null,
  ""
 ],
 "Host": [
  null,
  "Host"
 ],
 "INSTALL VM action failed": [
  null,
  ""
 ],
 "Immediately Start VM": [
  null,
  ""
 ],
 "Install": [
  null,
  "Installation"
 ],
 "Installation Source": [
  null,
  ""
 ],
 "Installation Source Type": [
  null,
  ""
 ],
 "Installation Source should not be empty": [
  null,
  ""
 ],
 "Invalid filename": [
  null,
  ""
 ],
 "Launch Remote Viewer": [
  null,
  ""
 ],
 "Loading ...": [
  null,
  "Ladevorgang ..."
 ],
 "MAC Address": [
  null,
  "MAC-Adresse"
 ],
 "Mac Address": [
  null,
  ""
 ],
 "Manual Connection": [
  null,
  ""
 ],
 "Maximum number of virtual CPUs allocated for the guest OS, which must be between 1 and $0": [
  null,
  ""
 ],
 "Memory": [
  null,
  "Speicher"
 ],
 "Memory should be positive number": [
  null,
  ""
 ],
 "Memory:": [
  null,
  "Speicher:"
 ],
 "MiB": [
  null,
  "MiB"
 ],
 "Model": [
  null,
  "Modell"
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
 "Name should not be empty": [
  null,
  ""
 ],
 "Name should not consist of empty characters only": [
  null,
  ""
 ],
 "Network Type": [
  null,
  ""
 ],
 "Network settings could not be saved": [
  null,
  ""
 ],
 "Networks": [
  null,
  "Netzwerke"
 ],
 "New Volume Name": [
  null,
  ""
 ],
 "No Storage Volumes defined for this Storage Pool": [
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
 "No matching files found": [
  null,
  ""
 ],
 "No network interfaces defined for this VM": [
  null,
  ""
 ],
 "No storage pool is defined on this host": [
  null,
  ""
 ],
 "No virtual networks": [
  null,
  ""
 ],
 "OS Vendor": [
  null,
  ""
 ],
 "Operating System": [
  null,
  "Betriebssystem"
 ],
 "Overview": [
  null,
  "Überblick"
 ],
 "Path to ISO file on host's file system": [
  null,
  ""
 ],
 "Path to file": [
  null,
  ""
 ],
 "Please enter new volume name": [
  null,
  ""
 ],
 "Please enter new volume size": [
  null,
  ""
 ],
 "Please start the virtual machine to access its console.": [
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
  "Port"
 ],
 "Preferred number of sockets to expose to the guest.": [
  null,
  ""
 ],
 "Protocol": [
  null,
  "Protokoll"
 ],
 "QEMU/KVM System connection": [
  null,
  ""
 ],
 "QEMU/KVM User connection": [
  null,
  ""
 ],
 "Readonly": [
  null,
  "Schreibgeschützt"
 ],
 "Reconnect": [
  null,
  "Erneut verbinden"
 ],
 "Remote URL": [
  null,
  ""
 ],
 "Restart": [
  null,
  "Neustarten"
 ],
 "Run": [
  null,
  "Ausführen"
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
 "Save": [
  null,
  "Speichern"
 ],
 "Send Non-Maskable Interrupt": [
  null,
  ""
 ],
 "Send key": [
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
 "Size": [
  null,
  "Größe"
 ],
 "Sockets": [
  null,
  "Sockets"
 ],
 "Source": [
  null,
  "Quelle"
 ],
 "Source should start with http, ftp or nfs protocol": [
  null,
  ""
 ],
 "Start libvirt": [
  null,
  ""
 ],
 "Start the VM to see disk statistics.": [
  null,
  ""
 ],
 "State": [
  null,
  "Status"
 ],
 "Storage Pools": [
  null,
  ""
 ],
 "Storage Size": [
  null,
  ""
 ],
 "Storage Size should not be negative number": [
  null,
  ""
 ],
 "Storage Volumes": [
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
 "The pool is empty": [
  null,
  ""
 ],
 "Threads per core": [
  null,
  ""
 ],
 "Too many files found": [
  null,
  ""
 ],
 "Troubleshoot": [
  null,
  "Fehlersuche"
 ],
 "Type": [
  null,
  "Typ"
 ],
 "URL": [
  null,
  "URL"
 ],
 "Unique name": [
  null,
  ""
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
  "Verbrauch"
 ],
 "Use Existing": [
  null,
  ""
 ],
 "Used": [
  null,
  "Benutzt"
 ],
 "VCPU settings could not be saved": [
  null,
  ""
 ],
 "VM CHANGE_NETWORK_STATE action failed": [
  null,
  ""
 ],
 "VM DELETE (DESTROY) action failed": [
  null,
  ""
 ],
 "VM DELETE (UNDEFINE) action failed": [
  null,
  ""
 ],
 "VM DELETE action failed": [
  null,
  ""
 ],
 "VM DETACH_DISK action failed": [
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
 "VM SENDNMI action failed": [
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
  "VNC"
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
 "Virtualization Service (libvirt) is Not Active": [
  null,
  ""
 ],
 "Virtualization Service is Available": [
  null,
  ""
 ],
 "Volume": [
  null,
  "Lautstärke"
 ],
 "active": [
  null,
  "Aktiv"
 ],
 "bridge": [
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
  "Datenträger"
 ],
 "down": [
  null,
  "runter"
 ],
 "dying": [
  null,
  ""
 ],
 "enabled": [
  null,
  "An"
 ],
 "ethernet": [
  null,
  ""
 ],
 "host": [
  null,
  "host"
 ],
 "hostdev": [
  null,
  ""
 ],
 "idle": [
  null,
  ""
 ],
 "inactive": [
  null,
  "Inaktiv"
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
 "other": [
  null,
  "other"
 ],
 "paused": [
  null,
  "pausiert"
 ],
 "qcow2": [
  null,
  ""
 ],
 "raw": [
  null,
  "raw"
 ],
 "running": [
  null,
  "Läuft"
 ],
 "server": [
  null,
  "server"
 ],
 "show less": [
  null,
  ""
 ],
 "show more": [
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
 "suspended (PM)": [
  null,
  "Angehalten (PM)"
 ],
 "udp": [
  null,
  "udp"
 ],
 "undefined": [
  null,
  "nicht definiert"
 ],
 "up": [
  null,
  "hoch"
 ],
 "user": [
  null,
  "Benutzer"
 ],
 "vCPU Count": [
  null,
  ""
 ],
 "vCPU Maximum": [
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
