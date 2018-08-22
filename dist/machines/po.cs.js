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
  "x-generator": "Zanata 4.5.0"
 },
 "$0 is available for most operating systems. To install it, search for it in GNOME Software or run the following:": [
  null,
  "$0 je k dispozici pro většinu operačních systémů. K instalaci je třeba hledat v GNOME Software nebo spustit:"
 ],
 "$0 vCPU Details": [
  null,
  ""
 ],
 "Add": [
  null,
  "Přidat"
 ],
 "Add Disk": [
  null,
  ""
 ],
 "Additional": [
  null,
  "Další"
 ],
 "Address": [
  null,
  "Adresa"
 ],
 "Address:": [
  null,
  "Adresa:"
 ],
 "All changes will take effect only after stopping and starting the VM.": [
  null,
  ""
 ],
 "Apply": [
  null,
  "Použít"
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
  "Automatické spuštění"
 ],
 "Available": [
  null,
  "Dostupný"
 ],
 "Boot Order:": [
  null,
  "Boot příkaz:"
 ],
 "Bus": [
  null,
  "Bus"
 ],
 "CHANGE NETWORK STATE action failed": [
  null,
  "CHANGE NETWORK STATE akce selhala"
 ],
 "CPU Type:": [
  null,
  "Typ CPU:"
 ],
 "Cancel": [
  null,
  "Zrušit"
 ],
 "Capacity": [
  null,
  "Kapacita"
 ],
 "Clicking \"Launch Remote Viewer\" will download a .vv file and launch $0.": [
  null,
  "Kliknutím na tlačítko \"Spustit vzdálený prohlížeč\" se stáhne soubor ve formátu .vv a spustí se $0."
 ],
 "Confirm deletion of $0": [
  null,
  "Potvrdit smazání $0"
 ],
 "Connect with any $0 viewer application.": [
  null,
  ""
 ],
 "Connect with any SPICE or VNC viewer application.": [
  null,
  ""
 ],
 "Connecting to Virtualization Service": [
  null,
  ""
 ],
 "Connection": [
  null,
  "Spojení"
 ],
 "Console Type": [
  null,
  ""
 ],
 "Consoles": [
  null,
  ""
 ],
 "Cores per socket": [
  null,
  ""
 ],
 "Create": [
  null,
  ""
 ],
 "Create New": [
  null,
  ""
 ],
 "Create New VM": [
  null,
  ""
 ],
 "Create New Virtual Machine": [
  null,
  ""
 ],
 "Creation of vm $0 failed": [
  null,
  ""
 ],
 "Delete": [
  null,
  "Smazat"
 ],
 "Delete associated storage files:": [
  null,
  ""
 ],
 "Device": [
  null,
  "Zařízení"
 ],
 "Disconnect": [
  null,
  ""
 ],
 "Disconnected from serial console. Click the Reconnect button.": [
  null,
  ""
 ],
 "Disk failed to be attached with following error: ": [
  null,
  ""
 ],
 "Disk failed to be created with following error: ": [
  null,
  ""
 ],
 "Disks": [
  null,
  "Disky"
 ],
 "Download the MSI from $0": [
  null,
  ""
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
  "Soubor"
 ],
 "Filesystem": [
  null,
  "Systém souborů"
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
  "Formát"
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
  "Počítač"
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
  "Instalovat"
 ],
 "Installation Source": [
  null,
  "Zdroj instalace"
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
  "Spustit vzdálený prohlížeč"
 ],
 "Loading ...": [
  null,
  ""
 ],
 "MAC Address": [
  null,
  "MAC Adresa"
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
 "Maximum number of virtual CPUs allocated for the guest OS, which must be between 1 and $0": [
  null,
  ""
 ],
 "Memory": [
  null,
  "Paměť"
 ],
 "Memory should be positive number": [
  null,
  ""
 ],
 "Memory:": [
  null,
  "Paměť:"
 ],
 "MiB": [
  null,
  "MiB"
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
  "Název"
 ],
 "Name should not be empty": [
  null,
  ""
 ],
 "Name should not consist of empty characters only": [
  null,
  ""
 ],
 "Networks": [
  null,
  ""
 ],
 "New Volume Name": [
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
 "OS Vendor": [
  null,
  ""
 ],
 "Ok": [
  null,
  "Ok"
 ],
 "Operating System": [
  null,
  ""
 ],
 "Overview": [
  null,
  "Přehled"
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
  "Úložiště"
 ],
 "Port": [
  null,
  "Port"
 ],
 "Portgroup": [
  null,
  ""
 ],
 "Preferred number of sockets to expose to the guest.": [
  null,
  ""
 ],
 "Protocol": [
  null,
  "Protokol"
 ],
 "Readonly": [
  null,
  ""
 ],
 "Reconnect": [
  null,
  ""
 ],
 "Remote URL": [
  null,
  ""
 ],
 "Restart": [
  null,
  "Restartovat"
 ],
 "Run": [
  null,
  "Spustit"
 ],
 "SET VCPU SETTINGS action failed": [
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
  ""
 ],
 "Shut Down": [
  null,
  "Ukončit"
 ],
 "Size": [
  null,
  "Velikost"
 ],
 "Sockets": [
  null,
  ""
 ],
 "Source": [
  null,
  "Zdroj"
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
  "Stav"
 ],
 "Storage Size": [
  null,
  ""
 ],
 "Storage Size should not be negative number": [
  null,
  ""
 ],
 "System": [
  null,
  "Systém"
 ],
 "Target": [
  null,
  "Cíl"
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
 "The VM is running and will be forced off before deletion.": [
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
 "The pool is empty": [
  null,
  ""
 ],
 "Threads per cores": [
  null,
  ""
 ],
 "Too many files found": [
  null,
  ""
 ],
 "Troubleshoot": [
  null,
  "Řešit potíže"
 ],
 "Type": [
  null,
  "Typ"
 ],
 "URL": [
  null,
  "URL"
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
  "Použití"
 ],
 "Use Existing": [
  null,
  ""
 ],
 "Used": [
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
  ""
 ],
 "Virtualization Service (libvirt) is Not Active": [
  null,
  ""
 ],
 "Virtualization Service is Available": [
  null,
  ""
 ],
 "Virtualport": [
  null,
  ""
 ],
 "Volume": [
  null,
  "Svazek"
 ],
 "Your browser does not support iframes.": [
  null,
  ""
 ],
 "bridge": [
  null,
  "most"
 ],
 "cdrom": [
  null,
  ""
 ],
 "crashed": [
  null,
  "pád"
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
  "zakázáno"
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
  "povoleno"
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
  "nečinný"
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
  ""
 ],
 "other": [
  null,
  ""
 ],
 "paused": [
  null,
  ""
 ],
 "qcow2": [
  null,
  ""
 ],
 "raw": [
  null,
  ""
 ],
 "running": [
  null,
  "běžící"
 ],
 "server": [
  null,
  ""
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
  "vypnuto"
 ],
 "shutdown": [
  null,
  ""
 ],
 "suspended (PM)": [
  null,
  ""
 ],
 "udp": [
  null,
  "udp"
 ],
 "undefined": [
  null,
  ""
 ],
 "up": [
  null,
  ""
 ],
 "user": [
  null,
  "uživatel"
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
  ""
 ],
 "vhostuser": [
  null,
  ""
 ],
 "yes": [
  null,
  "ano"
 ]
}));
