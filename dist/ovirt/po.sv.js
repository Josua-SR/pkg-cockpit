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
 "Action": [
  null,
  "Åtgärd"
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
 "All running virtual machines will be turned off.": [
  null,
  "Alla körande virtuella maskiner kommer stängas av."
 ],
 "Always attach": [
  null,
  "Anslut alltid"
 ],
 "Apply": [
  null,
  "Lägg på"
 ],
 "Automatically selected host": [
  null,
  "Automatiskt vald värd"
 ],
 "Autostart": [
  null,
  ""
 ],
 "Available": [
  null,
  "Tillgängliga"
 ],
 "Base Template": [
  null,
  "Basmall"
 ],
 "Base template": [
  null,
  "Basmall"
 ],
 "Base template:": [
  null,
  "Basmall:"
 ],
 "Boot Order": [
  null,
  ""
 ],
 "Bus": [
  null,
  "Buss"
 ],
 "CHANGE NETWORK STATE action failed": [
  null,
  "Åtgärden ÄNDRA NÄTVERKSTILLSTÅND misslyckades"
 ],
 "CPU Type": [
  null,
  ""
 ],
 "CREATE VM action failed": [
  null,
  "Åtgärden SKAPA VM misslyckades"
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
 "Cluster": [
  null,
  "Kluster"
 ],
 "Cluster Templates": [
  null,
  "Klustermallar"
 ],
 "Cluster Virtual Machines": [
  null,
  "Klustrets virtuella maskiner"
 ],
 "Confirm migration": [
  null,
  "Bekräfta migrering"
 ],
 "Confirm reload:": [
  null,
  "Bekräfta omladdning:"
 ],
 "Confirm save:": [
  null,
  "Bekräfta sparandet:"
 ],
 "Connect to oVirt Engine": [
  null,
  "Anslut till oVirt Engine"
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
 "Create VM": [
  null,
  "Skapa en VM"
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
 "Description": [
  null,
  "Beskrivning"
 ],
 "Description:": [
  null,
  "Beskrivning:"
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
 "Edit the vdsm.conf": [
  null,
  "Redigera vdsm.conf"
 ],
 "Emulated Machine": [
  null,
  ""
 ],
 "Enter New VM name": [
  null,
  "Ange nytt VM-namn"
 ],
 "FQDN": [
  null,
  "FQDN"
 ],
 "Fewer than the maximum number of virtual CPUs should be enabled.": [
  null,
  "Färre än det maximala antalet virtuella CPU:er skall vara aktiverade."
 ],
 "File": [
  null,
  "Arkiv"
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
 "HA": [
  null,
  "HA"
 ],
 "HA:": [
  null,
  "HA:"
 ],
 "Host": [
  null,
  "Värd"
 ],
 "Host to Maintenance": [
  null,
  "Värd till underhåll"
 ],
 "INSTALL VM action failed": [
  null,
  "Åtgärden INSTALL VM misslyckades"
 ],
 "Install": [
  null,
  "Installera"
 ],
 "Launch Remote Viewer": [
  null,
  "Starta fjärrvisare"
 ],
 "Loading ...": [
  null,
  "Läser in …"
 ],
 "Loading data ...": [
  null,
  "Läser in data …"
 ],
 "MAC Address": [
  null,
  "MAC-adress"
 ],
 "MIGRATE action failed": [
  null,
  "Åtgärden MIGRATE misslyckades"
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
 "MiB": [
  null,
  "MiB"
 ],
 "Migrate To:": [
  null,
  "Migrera till:"
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
 "No VM found in oVirt.": [
  null,
  "Ingen VM hittad i oVirt."
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
 "No network interfaces defined for this VM": [
  null,
  "Inga nätverksgränssnitt är definierade för denna VM"
 ],
 "No oVirt connection": [
  null,
  "Ingen oVirt-förbindelse"
 ],
 "No virtual networks": [
  null,
  "Inga virtuella nätverk"
 ],
 "Number of virtual CPUs that gonna be used.": [
  null,
  "Antal virtuella CPU:er som kommer användas."
 ],
 "OK": [
  null,
  "OK"
 ],
 "OS": [
  null,
  "OS"
 ],
 "OS Type:": [
  null,
  "OS-typ:"
 ],
 "Ok": [
  null,
  "Ok"
 ],
 "Optimized for:": [
  null,
  "Optimerad för:"
 ],
 "Overview": [
  null,
  "Översikt"
 ],
 "Persistence": [
  null,
  "Varaktighet"
 ],
 "Please confirm, the host shall be switched to maintenance mode.": [
  null,
  "Bekräfta att värden skall slås om till underhållsläge."
 ],
 "Please enter new volume name": [
  null,
  "Ange ett nytt volymnamn"
 ],
 "Please enter new volume size": [
  null,
  "Ange en ny volymstorlek"
 ],
 "Please provide fully qualified domain name and port of the oVirt engine.": [
  null,
  "Ange ett full kvalificerat domännamn och en port till oVirt-motorn."
 ],
 "Please provide valid oVirt engine fully qualified domain name (FQDN) and port (443 by default)": [
  null,
  "Ange ett giltigt fullständigt kvalificerat domännamn (FQDN) och en port (443 som standard) till oVirt-motorn"
 ],
 "Please refer to oVirt's $0 for more information about Remote Viewer setup.": [
  null,
  "Referera oVirts $0 för mer information om uppsättning av fjärrvisare."
 ],
 "Please start the virtual machine to access its console.": [
  null,
  "Starta den virtuella maskinen för att komma åt dess konsol."
 ],
 "Please wait till VMs list is loaded from the server.": [
  null,
  "Vänta tills VM-listan är inläst från servern."
 ],
 "Please wait till list of templates is loaded from the server.": [
  null,
  "Vänta till listan av mallar är inläst från servern."
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
 "Preparing for Maintenance": [
  null,
  "Förbereder för underhåll"
 ],
 "Protocol": [
  null,
  "Protokoll"
 ],
 "REBOOT action failed": [
  null,
  "Åtgärden REBOOT misslyckades"
 ],
 "Readonly": [
  null,
  "Skrivskyddat"
 ],
 "Reconnect": [
  null,
  "Återanslut"
 ],
 "Register oVirt": [
  null,
  "Registrera oVirt"
 ],
 "Registering oVirt to Cockpit": [
  null,
  "Registrera oVirt i Cockpit"
 ],
 "Reload": [
  null,
  "Läs om"
 ],
 "Restart": [
  null,
  "Starta om"
 ],
 "Run": [
  null,
  "Kör"
 ],
 "Run Here": [
  null,
  "Kör här"
 ],
 "Running Since:": [
  null,
  "Kör sedan:"
 ],
 "SET VCPU SETTINGS action failed": [
  null,
  "Åtgärden SET VCPU SETTINGS misslyckades"
 ],
 "SHUTDOWN action failed": [
  null,
  "Åtgärden SHUTDOWN misslyckades"
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
 "START action failed": [
  null,
  "Åtgärden START misslyckades"
 ],
 "SUSPEND action failed": [
  null,
  "Åtgärden SUSPEND misslyckades"
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
 "State": [
  null,
  "Tillstånd"
 ],
 "Stateless": [
  null,
  "Tillståndslös"
 ],
 "Stateless:": [
  null,
  "Tillståndslös:"
 ],
 "Suspend": [
  null,
  "Vila"
 ],
 "Switch Host to Maintenance": [
  null,
  "Slå om värden till underhåll"
 ],
 "Switching host to maintenance mode failed. Received error: ": [
  null,
  "Att slå om värden till underhållsläge misslyckades.  Mottog felet: "
 ],
 "Switching host to maintenance mode in progress ...": [
  null,
  "Att slå om värden till underhållsläge pågår …"
 ],
 "System": [
  null,
  "System"
 ],
 "Template": [
  null,
  "Mall"
 ],
 "Templates": [
  null,
  "Mallar"
 ],
 "Templates of $0 cluster": [
  null,
  "Mallar över $0 kluster"
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
 "The pool is empty": [
  null,
  "Poolen är tom"
 ],
 "This host is managed by a virtualization manager, so creation of new VMs from the host is not possible.": [
  null,
  "Denna värd hanteras av en virtualiseringshanterare, så att skapa nya VM:er av värden är inte möjligt."
 ],
 "This virtual machine is not managed by oVirt": [
  null,
  "Denna virtuella maskin hanteras inte av oVirt"
 ],
 "Threads per core": [
  null,
  "Trådar per kärna"
 ],
 "Type": [
  null,
  "Typ"
 ],
 "Unplug": [
  null,
  "Koppla ur"
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
 "VDSM": [
  null,
  "VDSM"
 ],
 "VDSM Service Management": [
  null,
  "VDSM tjänstehantering"
 ],
 "VM DELETE (DESTROY) action failed": [
  null,
  "Åtgärden VM DELETE (DESTROY) misslyckades"
 ],
 "VM DELETE (UNDEFINE) action failed": [
  null,
  "Åtgärden VM DELETE (UNDEFINE) misslyckades"
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
 "VM SHUT DOWN action failed": [
  null,
  "Åtgärden VM SHUT DOWN misslyckades"
 ],
 "VM START action failed": [
  null,
  "Åtgärden VM START misslyckades"
 ],
 "VM icon": [
  null,
  "VM-ikon"
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
 "Version": [
  null,
  "Version"
 ],
 "Version num": [
  null,
  "Version nummer"
 ],
 "Virtual Machines": [
  null,
  "Virtuella maskiner"
 ],
 "Virtual Machines of $0 cluster": [
  null,
  "Virtuella maskiner i klustret $0"
 ],
 "Volume": [
  null,
  "Volym"
 ],
 "bridge": [
  null,
  "brygga"
 ],
 "cdrom": [
  null,
  "cdrom"
 ],
 "connecting": [
  null,
  "ansluter"
 ],
 "cores": [
  null,
  "kärnor"
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
 "error": [
  null,
  "fel"
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
 "initializing": [
  null,
  "initierar"
 ],
 "installation failed": [
  null,
  "installationen misslyckades"
 ],
 "installing OS": [
  null,
  "installerar OS"
 ],
 "kdumping": [
  null,
  "kdumpar"
 ],
 "maintenance": [
  null,
  "underhåll"
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
 "non operational": [
  null,
  "inte i drift"
 ],
 "non responsive": [
  null,
  "svarar inte"
 ],
 "oVirt": [
  null,
  "oVirt"
 ],
 "oVirt Host State:": [
  null,
  "oVirt-värdtillstånd:"
 ],
 "oVirt Provider installation script failed due to missing arguments.": [
  null,
  "oVirt-leverantörsinstallationsskript misslyckades på grund av saknade argument."
 ],
 "oVirt Provider installation script failed: Can't write to /etc/cockpit/machines-ovirt.config, try as root.": [
  null,
  "oVirt-leverantörsinstallationsskript misslyckades: kan inte skriva till /etc/cockpit/machines-ovirt.config, försök som root."
 ],
 "oVirt installation script failed with following output: ": [
  null,
  "oVirt-installationsskript misslyckades med följande utdata: "
 ],
 "oVirt login in progress": [
  null,
  "oVirt-inloggning pågår"
 ],
 "other": [
  null,
  "annan"
 ],
 "paused": [
  null,
  "stannad"
 ],
 "pending approval": [
  null,
  "väntande godkännande"
 ],
 "qcow2": [
  null,
  "qcow2"
 ],
 "raw": [
  null,
  "rå"
 ],
 "reboot": [
  null,
  "starta om"
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
 "sockets": [
  null,
  "uttag"
 ],
 "suspended (PM)": [
  null,
  "vilande (SH)"
 ],
 "threads": [
  null,
  "trådar"
 ],
 "udp": [
  null,
  "udp"
 ],
 "unassigned": [
  null,
  "ej tilldelad"
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
 "vCPUs": [
  null,
  "vCPU:er"
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
