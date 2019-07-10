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
 "$0 Network": [
  null,
  ""
 ],
 "$0 is available for most operating systems. To install it, search for it in GNOME Software or run the following:": [
  null,
  "$0 är tillgängligt till de flesta operativsystem.  Sök efter det i GNOME-programvara för att installera det eller kör följande:"
 ],
 "Activate": [
  null,
  "Aktivera"
 ],
 "Add": [
  null,
  "Lägg till"
 ],
 "Add Disk": [
  null,
  "Lägg till disk"
 ],
 "Additional": [
  null,
  "Ytterligare"
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
 "Autostart": [
  null,
  ""
 ],
 "Available": [
  null,
  "Tillgängliga"
 ],
 "Boot Order": [
  null,
  ""
 ],
 "Boot order settings could not be saved": [
  null,
  ""
 ],
 "Bus": [
  null,
  "Buss"
 ],
 "CPU Type": [
  null,
  ""
 ],
 "Cache": [
  null,
  ""
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
 "Confirm deletion of the Virtual Network": [
  null,
  ""
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
 "Creation of VM $0 failed": [
  null,
  ""
 ],
 "Ctrl+Alt+Del": [
  null,
  "Ctrl+Alt+Del"
 ],
 "Current Allocation": [
  null,
  ""
 ],
 "DHCP Range": [
  null,
  ""
 ],
 "Deactivate": [
  null,
  "Avaktivera"
 ],
 "Delete": [
  null,
  "Ta bort"
 ],
 "Delete Content": [
  null,
  ""
 ],
 "Delete Network $0": [
  null,
  "Ta bort $0"
 ],
 "Delete Storage Pool $0": [
  null,
  ""
 ],
 "Delete associated storage files:": [
  null,
  "Ta bort assoicierade lagringsfiler:"
 ],
 "Delete the Volumes inside this Pool": [
  null,
  ""
 ],
 "Deleting an inactive Storage Pool will only undefine the Pool. Its content will not be deleted.": [
  null,
  ""
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
 "Disk $0 fail to get detached from VM $1": [
  null,
  ""
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
 "Disks cannot be removed from $0 VMs": [
  null,
  ""
 ],
 "Download the MSI from $0": [
  null,
  "Hämta MSI:n från $0"
 ],
 "Edit": [
  null,
  "Redigera"
 ],
 "Emulated Machine": [
  null,
  ""
 ],
 "Existing Disk Image": [
  null,
  ""
 ],
 "Existing disk image on host's file system": [
  null,
  ""
 ],
 "Failed to fetch the IP addresses of the interfaces present in $0": [
  null,
  ""
 ],
 "Fewer than the maximum number of virtual CPUs should be enabled.": [
  null,
  "Färre än det maximala antalet virtuella CPU:er skall vara aktiverade."
 ],
 "File": [
  null,
  "Arkiv"
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
 "Forwarding mode": [
  null,
  ""
 ],
 "General": [
  null,
  "Allmänt"
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
 "Hide Performance Options": [
  null,
  ""
 ],
 "Host": [
  null,
  "Värd"
 ],
 "Host Device": [
  null,
  ""
 ],
 "Host Name": [
  null,
  "Värdnamn"
 ],
 "Host should not be empty": [
  null,
  "Värden får inte vara tom"
 ],
 "IP Address": [
  null,
  "IP-adress"
 ],
 "IPv4 Address": [
  null,
  ""
 ],
 "IPv6 Address": [
  null,
  ""
 ],
 "Immediately Start VM": [
  null,
  "Starta VM:en omedelbart"
 ],
 "In most configurations, macvtap does not work for host to guest network communication.": [
  null,
  ""
 ],
 "Initiator": [
  null,
  ""
 ],
 "Initiator IQN should not be empty": [
  null,
  ""
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
 "Interface Type": [
  null,
  ""
 ],
 "Invalid filename": [
  null,
  "Felaktigt filnamn"
 ],
 "Isolated Network": [
  null,
  ""
 ],
 "Launch Remote Viewer": [
  null,
  "Starta fjärrvisare"
 ],
 "Loading ...": [
  null,
  "Läser in …"
 ],
 "Local Install Media": [
  null,
  ""
 ],
 "MAC Address": [
  null,
  "MAC-adress"
 ],
 "Mac": [
  null,
  ""
 ],
 "Mac Address": [
  null,
  "Mac-adress"
 ],
 "Manual Connection": [
  null,
  "Manuell anslutning"
 ],
 "Maximum Allocation": [
  null,
  ""
 ],
 "Maximum Transmission Unit": [
  null,
  ""
 ],
 "Maximum memory could not be saved": [
  null,
  ""
 ],
 "Maximum number of virtual CPUs allocated for the guest OS, which must be between 1 and $0": [
  null,
  "Maximalt antal virtuella CPU:er allokerade till gäst-OS:et, vilket måste vara mellan 1 och $0"
 ],
 "Memory": [
  null,
  "Minne"
 ],
 "Memory could not be saved": [
  null,
  ""
 ],
 "Memory must not be 0": [
  null,
  "Minnesanvändning:"
 ],
 "Memory size between 128 MiB and the maximum allocation": [
  null,
  ""
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
 "NAT to $0": [
  null,
  ""
 ],
 "NIC $0 of VM $1 failed to change state": [
  null,
  ""
 ],
 "Name": [
  null,
  "Namn"
 ],
 "Name should not be empty": [
  null,
  "Namnet får inte vara tomt"
 ],
 "Name: ": [
  null,
  ""
 ],
 "Netmask": [
  null,
  ""
 ],
 "Network $0 failed to get activated": [
  null,
  ""
 ],
 "Network $0 failed to get deactivated": [
  null,
  ""
 ],
 "Network Boot (PXE)": [
  null,
  ""
 ],
 "Network File System": [
  null,
  "Nätverksfilsystem"
 ],
 "Network Interfaces": [
  null,
  ""
 ],
 "Network Selection does not support PXE.": [
  null,
  ""
 ],
 "Network interface settings could not be saved": [
  null,
  ""
 ],
 "Networks": [
  null,
  "Nätverk"
 ],
 "New Volume Name": [
  null,
  "Nytt volymnamn"
 ],
 "No Storage Pools available": [
  null,
  ""
 ],
 "No Storage Volumes defined for this Storage Pool": [
  null,
  "Inga lagringsvolymer är definierade för denna lagringspool"
 ],
 "No VM is running or defined on this host": [
  null,
  "Ingen VM kör eller är definierad på denna värd."
 ],
 "No Virtual Networks": [
  null,
  ""
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
 "No network is defined on this host": [
  null,
  ""
 ],
 "No networks available": [
  null,
  ""
 ],
 "No storage pool is defined on this host": [
  null,
  "Ingen lagringspool är definierad på denna värd"
 ],
 "None (Isolated Network)": [
  null,
  ""
 ],
 "OS Vendor": [
  null,
  "OS-leverantör"
 ],
 "One or more selected volumes are used by domains. Detach the disks first to allow volume deletion.": [
  null,
  ""
 ],
 "Only editable when the guest is shut off": [
  null,
  ""
 ],
 "Open": [
  null,
  ""
 ],
 "Operating System": [
  null,
  "Operativsystem"
 ],
 "Operation is in progress": [
  null,
  "oVirt-inloggning pågår"
 ],
 "Overview": [
  null,
  "Översikt"
 ],
 "Path": [
  null,
  "Sökväg"
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
 "Pause": [
  null,
  ""
 ],
 "Persistence": [
  null,
  "Varaktighet"
 ],
 "Persistent": [
  null,
  ""
 ],
 "Physical Disk Device": [
  null,
  ""
 ],
 "Physical disk device on host": [
  null,
  ""
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
 "Prefix": [
  null,
  ""
 ],
 "Private": [
  null,
  ""
 ],
 "Product": [
  null,
  ""
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
 "Resume": [
  null,
  ""
 ],
 "Route to $0": [
  null,
  ""
 ],
 "Routed Network": [
  null,
  ""
 ],
 "Run": [
  null,
  "Kör"
 ],
 "Run when host boots": [
  null,
  ""
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
 "Show Performance Options": [
  null,
  ""
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
 "Source Format": [
  null,
  ""
 ],
 "Source Path": [
  null,
  "Källsökväg"
 ],
 "Source path should not be empty": [
  null,
  "Källsökvägen får inte vara tom"
 ],
 "Source should start with http, ftp or nfs protocol": [
  null,
  "Källan skall börja med ett av protokollen http, ftp eller nfs"
 ],
 "Start libvirt": [
  null,
  "Starta libvirt"
 ],
 "Start pool when host boots": [
  null,
  "Starta poolen när värden startar upp"
 ],
 "Startup": [
  null,
  "Uppstart"
 ],
 "State": [
  null,
  "Tillstånd"
 ],
 "Storage": [
  null,
  "Lagring"
 ],
 "Storage Pool $0 failed to get activated": [
  null,
  ""
 ],
 "Storage Pool $0 failed to get deactivated": [
  null,
  ""
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
 "Storage Volumes": [
  null,
  " Lagringsvolymer"
 ],
 "Storage Volumes could not be deleted": [
  null,
  ""
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
 "The Storage Pool could not be deleted": [
  null,
  ""
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
 "The network could not be deleted": [
  null,
  "Målsökvägen får inte vara tom"
 ],
 "The pool is empty": [
  null,
  "Poolen är tom"
 ],
 "This volume is already used by another VM.": [
  null,
  ""
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
 "Type ID": [
  null,
  ""
 ],
 "URL": [
  null,
  "URL"
 ],
 "Unique name": [
  null,
  "Unikt namn"
 ],
 "Unit": [
  null,
  "Enhet"
 ],
 "Unknown": [
  null,
  "Okänd"
 ],
 "Unplug": [
  null,
  "Koppla ur"
 ],
 "Up to $0 $1 available in the default location": [
  null,
  ""
 ],
 "Up to $0 $1 available on the host": [
  null,
  ""
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
 "Used by": [
  null,
  ""
 ],
 "VCPU settings could not be saved": [
  null,
  "VCPU-inställningarna kunde inte sparas"
 ],
 "VM $0 failed to Reboot": [
  null,
  ""
 ],
 "VM $0 failed to force Reboot": [
  null,
  ""
 ],
 "VM $0 failed to force shutdown": [
  null,
  ""
 ],
 "VM $0 failed to get deleted": [
  null,
  ""
 ],
 "VM $0 failed to get installed": [
  null,
  ""
 ],
 "VM $0 failed to pause": [
  null,
  ""
 ],
 "VM $0 failed to resume": [
  null,
  ""
 ],
 "VM $0 failed to send NMI": [
  null,
  ""
 ],
 "VM $0 failed to shutdown": [
  null,
  ""
 ],
 "VM $0 failed to start": [
  null,
  ""
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
 "Vendor": [
  null,
  "Leverantör"
 ],
 "Virtual Machines": [
  null,
  "Virtuella maskiner"
 ],
 "Virtual Network": [
  null,
  ""
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
 "WWPN": [
  null,
  ""
 ],
 "You need to select the most closely matching OS vendor and Operating System": [
  null,
  ""
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
 "control-label $0": [
  null,
  ""
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
 "host device": [
  null,
  ""
 ],
 "hostdev": [
  null,
  "värdenhet"
 ],
 "iSCSI Initiator IQN": [
  null,
  ""
 ],
 "iSCSI Target": [
  null,
  ""
 ],
 "iSCSI direct Target": [
  null,
  ""
 ],
 "iSCSI target IQN": [
  null,
  ""
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
 "redirected device": [
  null,
  ""
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
 "vCPUs": [
  null,
  "vCPU:er"
 ],
 "vhostuser": [
  null,
  "vhost-användare"
 ],
 "virt-install package needs to be installed on the system in order to create new VMs": [
  null,
  ""
 ],
 "yes": [
  null,
  "ja"
 ]
}));
