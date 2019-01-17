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
 "Always attach": [
  null,
  "Anslut alltid"
 ],
 "Apply": [
  null,
  "Lägg på"
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
 "Changes will take effect after shutting down the VM": [
  null,
  "Ändringar kommer verkställas efter att VM:en stängs av"
 ],
 "Clicking \"Launch Remote Viewer\" will download a .vv file and launch $0.": [
  null,
  "Att klicka ”Starta fjärrvisare” kommer hämta en .vv-fil och starta $0"
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
 "Create Storage Pool": [
  null,
  "Skapa en lagringspool"
 ],
 "Create VM": [
  null,
  "Skapa en VM"
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
 "Disk failed to be attached": [
  null,
  "Disken kunde inte anslutas"
 ],
 "Disk failed to be created": [
  null,
  "Disken kunde inte skapas"
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
 "Filesystem Directory": [
  null,
  "Filsystemskatalog"
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
 "Host Name": [
  null,
  "Värdnamn"
 ],
 "Host should not be empty": [
  null,
  "Värden får inte vara tom"
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
  "Maximalt antal virtuella CPU:er allokerade till gäst-OS:et, vilket måste vara mellan 1 och $0"
 ],
 "Memory": [
  null,
  "Minne"
 ],
 "Memory should be positive number": [
  null,
  "Minnet skall vara ett positivt tal"
 ],
 "Memory:": [
  null,
  "Minne:"
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
  "Modelltyp"
 ],
 "More Information": [
  null,
  "Mer information"
 ],
 "Name": [
  null,
  "Namn"
 ],
 "Name should not be empty": [
  null,
  "Namnet får inte vara tomt"
 ],
 "Name should not consist of empty characters only": [
  null,
  "Namnet får inte inte bestå av endast tomma tecken"
 ],
 "Network File System": [
  null,
  "Nätverksfilsystem"
 ],
 "Network Type": [
  null,
  "Nätverkstyp"
 ],
 "Network settings could not be saved": [
  null,
  "Nätverksinställningarna kunde inte sparas"
 ],
 "Networks": [
  null,
  "Nätverk"
 ],
 "New Volume Name": [
  null,
  "Nytt volymnamn"
 ],
 "No Storage Volumes defined for this Storage Pool": [
  null,
  "Inga lagringsvolymer är definierade för denna lagringspool"
 ],
 "No VM is running or defined on this host": [
  null,
  "Ingen VM kör eller är definierad på denna värd."
 ],
 "No boot device found": [
  null,
  "Ingen startenhet hittades"
 ],
 "No console defined for this virtual machine.": [
  null,
  "Ingen konsol definierad för denna virtuella maskin."
 ],
 "No disks defined for this VM": [
  null,
  "Inga diskar är definerade för denna VM"
 ],
 "No matching files found": [
  null,
  "Inga matchande filer hittade"
 ],
 "No network interfaces defined for this VM": [
  null,
  "Inga nätverksgränssnitt är definierade för denna VM"
 ],
 "No storage pool is defined on this host": [
  null,
  "Ingen lagringspool är definierad på denna värd"
 ],
 "No virtual networks": [
  null,
  "Inga virtuella nätverk"
 ],
 "OS Vendor": [
  null,
  "OS-leverantör"
 ],
 "Operating System": [
  null,
  "Operativsystem"
 ],
 "Overview": [
  null,
  "Översikt"
 ],
 "Path on host's filesystem": [
  null,
  "Sökväg på värdens filsystem"
 ],
 "Path to ISO file on host's file system": [
  null,
  "Sökväg till ISO-fil på värdens filsystem"
 ],
 "Path to file": [
  null,
  "Sökväg till filen"
 ],
 "Persistence": [
  null,
  "Varaktighet"
 ],
 "Please enter new volume name": [
  null,
  "Ange ett nytt volymnamn"
 ],
 "Please enter new volume size": [
  null,
  "Ange en ny volymstorlek"
 ],
 "Please start the virtual machine to access its console.": [
  null,
  "Starta den virtuella maskinen för att komma åt dess konsol."
 ],
 "Plug": [
  null,
  "Plugg"
 ],
 "Pool": [
  null,
  "Pool"
 ],
 "Port": [
  null,
  "Port"
 ],
 "Preferred number of sockets to expose to the guest.": [
  null,
  "Föredraget antal uttag att exponera för gästen."
 ],
 "Protocol": [
  null,
  "Protokoll"
 ],
 "QEMU/KVM System connection": [
  null,
  "QEMU/KVM-systemanslutning"
 ],
 "QEMU/KVM User connection": [
  null,
  "QEMU/KVM-användaranslutning"
 ],
 "Readonly": [
  null,
  "Skrivskyddat"
 ],
 "Reconnect": [
  null,
  "Återanslut"
 ],
 "Remote URL": [
  null,
  "Fjärr-URL"
 ],
 "Restart": [
  null,
  "Starta om"
 ],
 "Run": [
  null,
  "Kör"
 ],
 "SPICE": [
  null,
  "SPICE"
 ],
 "SPICE Address:": [
  null,
  "SPICE-adress:"
 ],
 "SPICE Port:": [
  null,
  "SPICE-port:"
 ],
 "SPICE TLS Port:": [
  null,
  "SPICE TLS-port:"
 ],
 "Save": [
  null,
  "Spara"
 ],
 "Send Non-Maskable Interrupt": [
  null,
  "Skicka ej maskerbart avbrott"
 ],
 "Send key": [
  null,
  "Skicka tangenttryck"
 ],
 "Serial Console": [
  null,
  "Seriekonsol"
 ],
 "Session": [
  null,
  "Session"
 ],
 "Shut Down": [
  null,
  "Stäng av"
 ],
 "Size": [
  null,
  "Storlek"
 ],
 "Sockets": [
  null,
  "Uttag"
 ],
 "Source": [
  null,
  "Källa"
 ],
 "Source Path": [
  null,
  "Källsökväg"
 ],
 "Source path should not be empty": [
  null,
  "Källsökvägen får inte vara tom"
 ],
 "Source should start with https, ftp or nfs protocol": [
  null,
  "Källan skall börja med ett av protokollen https, ftp eller nfs"
 ],
 "Start libvirt": [
  null,
  "Starta libvirt"
 ],
 "Start pool when host boots": [
  null,
  "Starta poolen när värden startar upp"
 ],
 "Start the VM to see disk statistics.": [
  null,
  "Starta VM:en för att se diskvärden"
 ],
 "Startup": [
  null,
  "Uppstart"
 ],
 "State": [
  null,
  "Tillstånd"
 ],
 "Storage Pool Name": [
  null,
  "Lagringspoolsnamn"
 ],
 "Storage Pool failed to be created": [
  null,
  "Lagringspoolen kunde inte skapas"
 ],
 "Storage Pools": [
  null,
  "Lagringspooler"
 ],
 "Storage Size": [
  null,
  "Lagringsstorlek"
 ],
 "Storage Size should not be negative number": [
  null,
  "Lagringsstorleken skall inte vara ett negativt tal"
 ],
 "Storage Volumes": [
  null,
  " Lagringsvolymer"
 ],
 "System": [
  null,
  "System"
 ],
 "Target": [
  null,
  "Mål"
 ],
 "Target Path": [
  null,
  "Målsökväg"
 ],
 "Target path should not be empty": [
  null,
  "Målsökvägen får inte vara tom"
 ],
 "The VM crashed.": [
  null,
  "VM:en kraschade."
 ],
 "The VM is down.": [
  null,
  "VM:en är nere."
 ],
 "The VM is going down.": [
  null,
  "VM:en går ner."
 ],
 "The VM is idle.": [
  null,
  "VM:en är inaktiv."
 ],
 "The VM is in process of dying (shut down or crash is not completed).": [
  null,
  "VM:en är på gång att dö (en avstängning eller krasch är inte fullbordad)."
 ],
 "The VM is paused.": [
  null,
  "VM:en är pausad."
 ],
 "The VM is running and will be forced off before deletion.": [
  null,
  "VM:en kör och kommer tvingande stängas av före den tas bort."
 ],
 "The VM is running.": [
  null,
  "VM:en kör."
 ],
 "The VM is suspended by guest power management.": [
  null,
  "VM:en är i vila av gästens strömhantering."
 ],
 "The directory on the server being exported": [
  null,
  "Katalogen på servern exporteras"
 ],
 "The pool is empty": [
  null,
  "Poolen är tom"
 ],
 "Threads per core": [
  null,
  "Trådar per kärna"
 ],
 "Too many files found": [
  null,
  "För många filer hittade"
 ],
 "Troubleshoot": [
  null,
  "Felsök"
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
  "Unikt namn"
 ],
 "Unplug": [
  null,
  "Koppla ur"
 ],
 "Upgrade to a more recent version of libvirt to view disk statistics": [
  null,
  "Uppgradera till en senare version av libvirt för att se diskstatistik"
 ],
 "Usage": [
  null,
  "Användning"
 ],
 "Use Existing": [
  null,
  "Använd befintlig"
 ],
 "Used": [
  null,
  "Använt"
 ],
 "VCPU settings could not be saved": [
  null,
  "VCPU-inställningarna kunde inte sparas"
 ],
 "VM CHANGE_NETWORK_STATE action failed": [
  null,
  "Åtgärden VM CHANGE_NETWORK_STATE misslyckades"
 ],
 "VM DELETE (DESTROY) action failed": [
  null,
  "Åtgärden VM DELETE (DESTROY) misslyckades"
 ],
 "VM DELETE (UNDEFINE) action failed": [
  null,
  "Åtgärden VM DELETE (UNDEFINE) misslyckades"
 ],
 "VM DELETE action failed": [
  null,
  "Åtgärden VM DELETE misslyckades"
 ],
 "VM DETACH_DISK action failed": [
  null,
  "Åtgärden VM DETACH_DISK misslyckades"
 ],
 "VM FORCE OFF action failed": [
  null,
  "Åtgärden VM FORCE OFF misslyckades"
 ],
 "VM FORCE REBOOT action failed": [
  null,
  "Åtgärden VM FORCE REBOOT misslyckades"
 ],
 "VM REBOOT action failed": [
  null,
  "Åtgärden VM REBOOT misslyckades"
 ],
 "VM SEND Non-Maskable Interrrupt action failed": [
  null,
  "Åtgärden VM SEND Non-Maskable Interrrupt misslyckades"
 ],
 "VM SENDNMI action failed": [
  null,
  "Åtgärden VM SENDNMI misslyckades"
 ],
 "VM SHUT DOWN action failed": [
  null,
  "Åtgärden VM SHUT DOWN misslyckades"
 ],
 "VM START action failed": [
  null,
  "Åtgärden VM START misslyckades"
 ],
 "VNC": [
  null,
  "VNC"
 ],
 "VNC Address:": [
  null,
  "VNC-adress:"
 ],
 "VNC Port:": [
  null,
  "VNC-port:"
 ],
 "VNC TLS Port:": [
  null,
  "VNC TLS-port:"
 ],
 "Virtual Machines": [
  null,
  "Virtuella maskiner"
 ],
 "Virtualization Service (libvirt) is Not Active": [
  null,
  "Virtualiseringstjänsten (libvirt) är inte aktiv"
 ],
 "Virtualization Service is Available": [
  null,
  "Virtualiseringstjänsten är tillgänglig"
 ],
 "Volume": [
  null,
  "Volym"
 ],
 "active": [
  null,
  "aktiv"
 ],
 "bridge": [
  null,
  "brygga"
 ],
 "cdrom": [
  null,
  "cdrom"
 ],
 "crashed": [
  null,
  "kraschad"
 ],
 "custom": [
  null,
  "anpassad"
 ],
 "direct": [
  null,
  "direkt"
 ],
 "disabled": [
  null,
  "avaktiverat"
 ],
 "disk": [
  null,
  "disk"
 ],
 "down": [
  null,
  "nere"
 ],
 "dying": [
  null,
  "döende"
 ],
 "enabled": [
  null,
  "aktiverat"
 ],
 "ethernet": [
  null,
  "ethernet"
 ],
 "host": [
  null,
  "värd"
 ],
 "hostdev": [
  null,
  "värdenhet"
 ],
 "idle": [
  null,
  "overksam"
 ],
 "inactive": [
  null,
  "inaktiv"
 ],
 "mcast": [
  null,
  "mcast"
 ],
 "network": [
  null,
  "nätverk"
 ],
 "no": [
  null,
  "nej"
 ],
 "other": [
  null,
  "annan"
 ],
 "paused": [
  null,
  "stannad"
 ],
 "qcow2": [
  null,
  "qcow2"
 ],
 "raw": [
  null,
  "rå"
 ],
 "running": [
  null,
  "kör"
 ],
 "server": [
  null,
  "server"
 ],
 "show less": [
  null,
  "visa mindre"
 ],
 "show more": [
  null,
  "visa mer"
 ],
 "shut off": [
  null,
  "stäng av"
 ],
 "shutdown": [
  null,
  "avstängning"
 ],
 "suspended (PM)": [
  null,
  "vilande (SH)"
 ],
 "udp": [
  null,
  "udp"
 ],
 "undefined": [
  null,
  "odefinierad"
 ],
 "up": [
  null,
  "uppe"
 ],
 "user": [
  null,
  "användare"
 ],
 "vCPU Count": [
  null,
  "vCPU-antal"
 ],
 "vCPU Maximum": [
  null,
  "vCPU-maximum"
 ],
 "vCPUs:": [
  null,
  "vCPU:er:"
 ],
 "vhostuser": [
  null,
  "vhost-användare"
 ],
 "yes": [
  null,
  "ja"
 ]
}));
