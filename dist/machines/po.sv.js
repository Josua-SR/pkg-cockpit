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
  "language": "sv",
  "x-generator": "Zanata 4.6.2"
 },
 "$0 is available for most operating systems. To install it, search for it in GNOME Software or run the following:": [
  null,
  "$0 är tillgängligt till de flesta operativsystem.  Sök efter det i GNOME-programvara för att installera det eller kör följande:"
 ],
 "$0 vCPU Details": [
  null,
  "$0 vCPU-detaljer"
 ],
 "Add": [
  null,
  "Lägg till"
 ],
 "Add Disk": [
  null,
  "Lägg till disk"
 ],
 "Address": [
  null,
  "Adress"
 ],
 "Address:": [
  null,
  "Adress:"
 ],
 "All changes will take effect only after stopping and starting the VM.": [
  null,
  "Alla ändringar kommer att få effekt först efter att ha stoppat och startat VM:en."
 ],
 "Apply": [
  null,
  "Lägg på"
 ],
 "Attach permanently": [
  null,
  "Koppla in permanent"
 ],
 "Automatically start libvirt on boot": [
  null,
  "Starta automatiskt libvirt vid uppstart"
 ],
 "Autostart:": [
  null,
  "Starta automatiskt:"
 ],
 "Available": [
  null,
  "Tillgängliga"
 ],
 "Boot Order:": [
  null,
  "Startordning:"
 ],
 "Bus": [
  null,
  "Buss"
 ],
 "CHANGE NETWORK STATE action failed": [
  null,
  "Åtgärden ÄNDRA NÄTVERKSTILLSTÅND misslyckades"
 ],
 "CPU Type:": [
  null,
  "CPU-typ:"
 ],
 "Cancel": [
  null,
  "Avbryt"
 ],
 "Capacity": [
  null,
  "Kapacitet"
 ],
 "Changes will apply on VM shutdown": [
  null,
  "Ändringar kommer gälla när VM:en stängs av"
 ],
 "Clicking \"Launch Remote Viewer\" will download a .vv file and launch $0.": [
  null,
  "Att klicka ”Starta fjärrvisare” kommer hämta en .vv-fil och starta $0"
 ],
 "Confirm deletion of $0": [
  null,
  "Bekräfta radering av $0"
 ],
 "Connect with any $0 viewer application.": [
  null,
  "Anslut med godtycklig $0-visarprogram."
 ],
 "Connect with any SPICE or VNC viewer application.": [
  null,
  "Anslut med godtycklig SPICE- eller VNC-visarprogram."
 ],
 "Connecting": [
  null,
  "Ansluter"
 ],
 "Connecting to Virtualization Service": [
  null,
  "Ansluter till virtualiseringstjänsten"
 ],
 "Connection": [
  null,
  "Anslutning"
 ],
 "Console Type": [
  null,
  "Konsoltyp"
 ],
 "Consoles": [
  null,
  "Konsoler"
 ],
 "Cores per socket": [
  null,
  "Kärnor per sockel"
 ],
 "Create": [
  null,
  "Skapa"
 ],
 "Create New": [
  null,
  "Skapa ny"
 ],
 "Create New VM": [
  null,
  "Skapa en ny VM"
 ],
 "Create New Virtual Machine": [
  null,
  "Skapa en ny virtuell maskin"
 ],
 "Creation of vm $0 failed": [
  null,
  "Att skapa en vm $0 misslyckades"
 ],
 "Ctrl+Alt+Del": [
  null,
  "Ctrl+Alt+Del"
 ],
 "Delete": [
  null,
  "Ta bort"
 ],
 "Delete associated storage files:": [
  null,
  "Ta bort assoicierade lagringsfiler:"
 ],
 "Device": [
  null,
  "Enhet"
 ],
 "Disconnect": [
  null,
  "Koppla ifrån"
 ],
 "Disconnected": [
  null,
  "Frånkopplad"
 ],
 "Disconnected from serial console. Click the Reconnect button.": [
  null,
  "Frånkopplad från seriekonsolen.  Klicka på återanslutknappen."
 ],
 "Disk failed to be attached with following error: ": [
  null,
  "Disken kunde inte anslutas utan fick följande fel: "
 ],
 "Disk failed to be created with following error: ": [
  null,
  "Disken kunde inte skapas utan fick följande fel: "
 ],
 "Disks": [
  null,
  "Diskar"
 ],
 "Download the MSI from $0": [
  null,
  "Hämta MSI:n från $0"
 ],
 "Edit": [
  null,
  "Redigera"
 ],
 "Emulated Machine:": [
  null,
  "Emulerad maskin:"
 ],
 "Fewer than the maximum number of virtual CPUs should be enabled.": [
  null,
  "Färre än det maximala antalet virtuella CPU:er skall vara aktiverade."
 ],
 "File": [
  null,
  "Arkiv"
 ],
 "Filesystem": [
  null,
  "Filsystem"
 ],
 "Force Restart": [
  null,
  "Framtvinga omstart"
 ],
 "Force Shut Down": [
  null,
  "Framtvinga avstängning"
 ],
 "Format": [
  null,
  "Formater"
 ],
 "GET HYPERVISOR MAX VCPU action failed": [
  null,
  "Åtgärden GET HYPERVISOR MAX VCPU misslyckades"
 ],
 "GiB": [
  null,
  "GiB"
 ],
 "Graphics Console (VNC)": [
  null,
  "Grafisk konsol (VNC)"
 ],
 "Graphics Console in Desktop Viewer": [
  null,
  "Grafisk konsol i skrivbordsvisare"
 ],
 "Host": [
  null,
  "Värd"
 ],
 "INSTALL VM action failed": [
  null,
  "Åtgärden INSTALL VM misslyckades"
 ],
 "Immediately Start VM": [
  null,
  "Starta VM:en omedelbart"
 ],
 "Install": [
  null,
  "Installera"
 ],
 "Installation Source": [
  null,
  "Installationskälla"
 ],
 "Installation Source Type": [
  null,
  "Installatinskälltyp"
 ],
 "Installation Source should not be empty": [
  null,
  "Installationskällan skall inte vara tom"
 ],
 "Invalid filename": [
  null,
  "Felaktigt filnamn"
 ],
 "Launch Remote Viewer": [
  null,
  "Starta fjärrvisare"
 ],
 "Loading ...": [
  null,
  "Läser in …"
 ],
 "MAC Address": [
  null,
  "MAC-adress"
 ],
 "Mac Address": [
  null,
  "Mac-adress"
 ],
 "Manual Connection": [
  null,
  "Manuell anslutning"
 ],
 "Maximum number of virtual CPUs allocated for the guest OS, which must be between 1 and $0": [
  null,
  ""
 ],
 "Memory": [
  null,
  ""
 ],
 "Memory should be positive number": [
  null,
  ""
 ],
 "Memory:": [
  null,
  ""
 ],
 "MiB": [
  null,
  ""
 ],
 "Model": [
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
  ""
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
 "Network settings failed to change with following error: ": [
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
 "No virtual networks": [
  null,
  ""
 ],
 "OS Vendor": [
  null,
  ""
 ],
 "Ok": [
  null,
  ""
 ],
 "Operating System": [
  null,
  ""
 ],
 "Overview": [
  null,
  ""
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
  ""
 ],
 "Preferred number of sockets to expose to the guest.": [
  null,
  ""
 ],
 "Protocol": [
  null,
  "Protokoll"
 ],
 "Readonly": [
  null,
  ""
 ],
 "Reconnect": [
  null,
  "Återanslut"
 ],
 "Remote URL": [
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
 "SET VCPU SETTINGS action failed": [
  null,
  ""
 ],
 "SET_VCPU_SETTINGS action failed": [
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
 "Save": [
  null,
  ""
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
  ""
 ],
 "Shut Down": [
  null,
  ""
 ],
 "Size": [
  null,
  ""
 ],
 "Sockets": [
  null,
  ""
 ],
 "Source": [
  null,
  ""
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
  "Poolen är tom"
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
  ""
 ],
 "Type": [
  null,
  ""
 ],
 "URL": [
  null,
  ""
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
  ""
 ],
 "Use Existing": [
  null,
  ""
 ],
 "Used": [
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
 "Volume": [
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
 "crashed": [
  null,
  ""
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
  ""
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
  ""
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
  ""
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
 "udp": [
  null,
  ""
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
  ""
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
  ""
 ]
}));
