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
  "language": "de",
  "x-generator": "Zanata 4.6.2"
 },
 "$0 Network": [
  null,
  ""
 ],
 "$0 is available for most operating systems. To install it, search for it in GNOME Software or run the following:": [
  null,
  "$0 ist für die meisten Betriebssysteme verfügbar. Um es zu installieren, suchen Sie es in der GNOME-Software oder führen Sie Folgendes aus:"
 ],
 "Activate": [
  null,
  "Aktivieren"
 ],
 "Add": [
  null,
  "Hinzufügen"
 ],
 "Add Disk": [
  null,
  "Datenträger hinzufügen"
 ],
 "Additional": [
  null,
  "Mehr"
 ],
 "Address": [
  null,
  "Adresse"
 ],
 "Address:": [
  null,
  "Adresse:"
 ],
 "Always attach": [
  null,
  "Immer anhängen"
 ],
 "Apply": [
  null,
  "Anwenden"
 ],
 "Automatically start libvirt on boot": [
  null,
  "Starten Sie libvirt automatisch beim Booten"
 ],
 "Autostart": [
  null,
  "Autostart"
 ],
 "Available": [
  null,
  "Verfügbar"
 ],
 "Boot Order": [
  null,
  "Boot Reihenfolge"
 ],
 "Boot order settings could not be saved": [
  null,
  "Boot-Reihenfolge konnte nicht gespeichert werden"
 ],
 "Bus": [
  null,
  "Bus"
 ],
 "CPU Type": [
  null,
  "Prozessor-Typ"
 ],
 "Cache": [
  null,
  "Cache"
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
  "Änderungen werden nach dem Herunterfahren der VM wirksam"
 ],
 "Clicking \"Launch Remote Viewer\" will download a .vv file and launch $0.": [
  null,
  "Klicken Sie auf \"Remote Viewer starten\", um eine .vv-Datei herunterzuladen und zu starten $0."
 ],
 "Confirm deletion of the Virtual Network": [
  null,
  "Löschung des virtuellen Netzwerks bestätigen"
 ],
 "Connect with any $0 viewer application.": [
  null,
  "Verbinden Sie sich mit einem beliebigen $0 Viewer-Anwendung."
 ],
 "Connect with any SPICE or VNC viewer application.": [
  null,
  "Verbinden Sie sich mit einer beliebigen SPICE- oder VNC-Viewer-Anwendung."
 ],
 "Connecting": [
  null,
  "Verbindungsaufbau"
 ],
 "Connecting to Virtualization Service": [
  null,
  "Verbindung zum Virtualisierungsdienst herstellen"
 ],
 "Connection": [
  null,
  "Verbindung"
 ],
 "Console Type": [
  null,
  "Konsolentyp"
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
 "Create Storage Pool": [
  null,
  "Erstellen Sie einen Speicherpool"
 ],
 "Create VM": [
  null,
  "VM erstellen"
 ],
 "Creation of VM $0 failed": [
  null,
  "Das Erstellen von VM $0 ist fehlgeschlagen"
 ],
 "Ctrl+Alt+Del": [
  null,
  "Strg + Alt + Entf"
 ],
 "Current Allocation": [
  null,
  "aktuelle Zuweisung"
 ],
 "DHCP Range": [
  null,
  "DHCP Bereich"
 ],
 "Deactivate": [
  null,
  "Deaktivieren"
 ],
 "Delete": [
  null,
  "Löschen"
 ],
 "Delete Content": [
  null,
  "Inhalt löschen"
 ],
 "Delete Network $0": [
  null,
  "Lösche Netzwerk $0"
 ],
 "Delete Storage Pool $0": [
  null,
  "Lösche Speicher-Pool $0"
 ],
 "Delete associated storage files:": [
  null,
  "Verknüpfte Speicherdateien löschen:"
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
  "Verbindung zur seriellen Konsole getrennt Klicken Sie auf die Schaltfläche Neu verbinden."
 ],
 "Disk $0 fail to get detached from VM $1": [
  null,
  ""
 ],
 "Disk failed to be attached": [
  null,
  "Festplatte konnte nicht angeschlossen werden"
 ],
 "Disk failed to be created": [
  null,
  "Datenträger konnte nicht erstellt werden"
 ],
 "Disks": [
  null,
  "Datenträger"
 ],
 "Disks cannot be removed from $0 VMs": [
  null,
  ""
 ],
 "Download the MSI from $0": [
  null,
  "Laden Sie das MSI von herunter $0"
 ],
 "Edit": [
  null,
  "Bearbeiten"
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
  "Es sollte weniger als die maximale Anzahl virtueller CPUs aktiviert sein."
 ],
 "File": [
  null,
  "Datei"
 ],
 "Filesystem Directory": [
  null,
  "Dateisystemverzeichnis"
 ],
 "Force Restart": [
  null,
  "Neustart erzwingen"
 ],
 "Force Shut Down": [
  null,
  "Kraft herunterfahren"
 ],
 "Format": [
  null,
  "Formatieren"
 ],
 "Forwarding mode": [
  null,
  ""
 ],
 "General": [
  null,
  "Allgemein"
 ],
 "GiB": [
  null,
  "GiB"
 ],
 "Graphics Console (VNC)": [
  null,
  "Grafikkonsole (VNC)"
 ],
 "Graphics Console in Desktop Viewer": [
  null,
  "Grafikkonsole im Desktop Viewer"
 ],
 "Hide Performance Options": [
  null,
  ""
 ],
 "Host": [
  null,
  "Host"
 ],
 "Host Device": [
  null,
  ""
 ],
 "Host Name": [
  null,
  "Rechnername"
 ],
 "Host should not be empty": [
  null,
  "Host sollte nicht leer sein"
 ],
 "IP Address": [
  null,
  "IP-Adresse"
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
  "Sofort starten Sie die VM"
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
  "Installation"
 ],
 "Installation Source": [
  null,
  "Installationsquelle"
 ],
 "Installation Source Type": [
  null,
  "Installationsquellentyp"
 ],
 "Installation Source should not be empty": [
  null,
  "Installationsquelle sollte nicht leer sein"
 ],
 "Interface Type": [
  null,
  ""
 ],
 "Invalid filename": [
  null,
  "Ungültiger Dateiname"
 ],
 "Isolated Network": [
  null,
  ""
 ],
 "Launch Remote Viewer": [
  null,
  "Starten Sie den Remote Viewer"
 ],
 "Loading ...": [
  null,
  "Ladevorgang ..."
 ],
 "Local Install Media": [
  null,
  ""
 ],
 "MAC Address": [
  null,
  "MAC-Adresse"
 ],
 "Mac": [
  null,
  ""
 ],
 "Mac Address": [
  null,
  "MAC-Adresse"
 ],
 "Manual Connection": [
  null,
  "Manuelle Verbindung"
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
  "Maximale Anzahl der für das Gastbetriebssystem zugewiesenen virtuellen CPUs, die zwischen 1 und 1 liegen muss $0"
 ],
 "Memory": [
  null,
  "Speicher"
 ],
 "Memory could not be saved": [
  null,
  ""
 ],
 "Memory must not be 0": [
  null,
  ""
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
  "Mehr Informationen"
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
  "Name"
 ],
 "Name should not be empty": [
  null,
  "Name sollte nicht leer sein"
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
  "Netzwerk-Dateisystem"
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
  "Netzwerke"
 ],
 "New Volume Name": [
  null,
  "Neuer Volume-Name"
 ],
 "No Storage Pools available": [
  null,
  ""
 ],
 "No Storage Volumes defined for this Storage Pool": [
  null,
  "Für dieses Speicherpool sind keine Speichervolumes definiert"
 ],
 "No VM is running or defined on this host": [
  null,
  "Auf diesem Host ist keine VM ausgeführt oder definiert"
 ],
 "No Virtual Networks": [
  null,
  ""
 ],
 "No boot device found": [
  null,
  "Kein Startgerät gefunden"
 ],
 "No console defined for this virtual machine.": [
  null,
  "Keine Konsole für diese virtuelle Maschine definiert."
 ],
 "No disks defined for this VM": [
  null,
  "Keine Festplatten für diese VM definiert"
 ],
 "No matching files found": [
  null,
  "Keine passenden Dateien gefunden"
 ],
 "No network interfaces defined for this VM": [
  null,
  "Keine Netzwerkschnittstellen für diese VM definiert"
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
  "Auf diesem Host ist kein Speicherpool definiert"
 ],
 "None (Isolated Network)": [
  null,
  ""
 ],
 "OS Vendor": [
  null,
  "Betriebssystemanbieter"
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
  "Betriebssystem"
 ],
 "Operation is in progress": [
  null,
  ""
 ],
 "Overview": [
  null,
  "Überblick"
 ],
 "Path": [
  null,
  "Pfad"
 ],
 "Path on host's filesystem": [
  null,
  "Pfad zum Dateisystem des Hosts"
 ],
 "Path to ISO file on host's file system": [
  null,
  "Pfad zur ISO-Datei im Dateisystem des Hosts"
 ],
 "Path to file": [
  null,
  "Pfad zur Datei"
 ],
 "Pause": [
  null,
  ""
 ],
 "Persistence": [
  null,
  ""
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
  "Bitte geben Sie den neuen Datenträgernamen ein"
 ],
 "Please enter new volume size": [
  null,
  "Bitte geben Sie die neue Volumengröße ein"
 ],
 "Please start the virtual machine to access its console.": [
  null,
  "Starten Sie die virtuelle Maschine, um auf die Konsole zuzugreifen."
 ],
 "Plug": [
  null,
  "Plug"
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
  "Bevorzugte Anzahl von Steckdosen, die dem Gast zugänglich gemacht werden sollen."
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
  "QEMU / KVM-Systemverbindung"
 ],
 "QEMU/KVM User connection": [
  null,
  "QEMU / KVM-Benutzerverbindung"
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
  "Remote-URL"
 ],
 "Restart": [
  null,
  "Neustarten"
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
  "Ausführen"
 ],
 "Run when host boots": [
  null,
  ""
 ],
 "SPICE": [
  null,
  "WÜRZEN"
 ],
 "SPICE Address:": [
  null,
  "SPICE-Adresse:"
 ],
 "SPICE Port:": [
  null,
  "SPICE Port:"
 ],
 "SPICE TLS Port:": [
  null,
  "SPICE TLS-Port:"
 ],
 "Save": [
  null,
  "Speichern"
 ],
 "Send Non-Maskable Interrupt": [
  null,
  "Nicht maskierbare Unterbrechung senden"
 ],
 "Send key": [
  null,
  "Schlüssel senden"
 ],
 "Serial Console": [
  null,
  "Serielle Konsole"
 ],
 "Session": [
  null,
  "Sitzung"
 ],
 "Show Performance Options": [
  null,
  ""
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
 "Source Format": [
  null,
  ""
 ],
 "Source Path": [
  null,
  "Quellpfad"
 ],
 "Source path should not be empty": [
  null,
  "Quellpfad sollte nicht leer sein"
 ],
 "Source should start with http, ftp or nfs protocol": [
  null,
  ""
 ],
 "Start libvirt": [
  null,
  "Starten Sie libvirt"
 ],
 "Start pool when host boots": [
  null,
  "Starten Sie den Pool, wenn der Host bootet"
 ],
 "Startup": [
  null,
  "Anlaufen"
 ],
 "State": [
  null,
  "Status"
 ],
 "Storage": [
  null,
  "Speicher"
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
  "Speicherpoolname"
 ],
 "Storage Pool failed to be created": [
  null,
  "Speicherpool konnte nicht erstellt werden"
 ],
 "Storage Pools": [
  null,
  "Speicherpools"
 ],
 "Storage Volumes": [
  null,
  "Speichervolumen"
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
  "Ziel"
 ],
 "Target Path": [
  null,
  "Zielpfad"
 ],
 "Target path should not be empty": [
  null,
  "Zielpfad sollte nicht leer sein"
 ],
 "The Storage Pool could not be deleted": [
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
  "Die VM befindet sich gerade im Sterben (Herunterfahren oder Absturz ist nicht abgeschlossen)."
 ],
 "The VM is paused.": [
  null,
  "Die VM ist pausiert."
 ],
 "The VM is running and will be forced off before deletion.": [
  null,
  "Die VM ist in Betrieb und wird vor dem Löschen abgebrochen."
 ],
 "The VM is running.": [
  null,
  "Die VM läuft."
 ],
 "The VM is suspended by guest power management.": [
  null,
  "Die VM ist vom Gast Power Management suspendiert."
 ],
 "The directory on the server being exported": [
  null,
  "Das Verzeichnis auf dem Server, der exportiert wird"
 ],
 "The network could not be deleted": [
  null,
  ""
 ],
 "The pool is empty": [
  null,
  "Der Pool ist leer"
 ],
 "This volume is already used by another VM.": [
  null,
  ""
 ],
 "Threads per core": [
  null,
  "Fäden pro Kern"
 ],
 "Too many files found": [
  null,
  "Es wurden zu viele Dateien gefunden"
 ],
 "Troubleshoot": [
  null,
  "Fehlersuche"
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
  "Einzigartiger Name"
 ],
 "Unit": [
  null,
  "Einheit"
 ],
 "Unknown": [
  null,
  "Unbekannt"
 ],
 "Unplug": [
  null,
  "Ziehen Sie den Stecker heraus"
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
  "Verbrauch"
 ],
 "Use Existing": [
  null,
  "Benutze existierendes"
 ],
 "Used": [
  null,
  "Benutzt"
 ],
 "Used by": [
  null,
  ""
 ],
 "VCPU settings could not be saved": [
  null,
  "VCPU-Einstellungen konnten nicht gespeichert werden"
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
  "VNC-Adresse:"
 ],
 "VNC Port:": [
  null,
  "VNC-Port:"
 ],
 "VNC TLS Port:": [
  null,
  "VNC-TLS-Port:"
 ],
 "Vendor": [
  null,
  "Anbieter"
 ],
 "Virtual Machines": [
  null,
  "Virtuelle Maschinen"
 ],
 "Virtual Network": [
  null,
  ""
 ],
 "Virtualization Service (libvirt) is Not Active": [
  null,
  "Der Virtualisierungsdienst (libvirt) ist nicht aktiv"
 ],
 "Virtualization Service is Available": [
  null,
  "Der Virtualisierungsdienst ist verfügbar"
 ],
 "Volume": [
  null,
  "Lautstärke"
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
  "Aktiv"
 ],
 "bridge": [
  null,
  "Brücke"
 ],
 "cdrom": [
  null,
  "CD-ROM"
 ],
 "control-label $0": [
  null,
  ""
 ],
 "crashed": [
  null,
  "abgestürzt"
 ],
 "custom": [
  null,
  "Brauch"
 ],
 "direct": [
  null,
  "Direkte"
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
  "im Sterben"
 ],
 "enabled": [
  null,
  "An"
 ],
 "ethernet": [
  null,
  "Ethernet"
 ],
 "host": [
  null,
  "host"
 ],
 "host device": [
  null,
  ""
 ],
 "hostdev": [
  null,
  "hostdev"
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
  "im Leerlauf"
 ],
 "inactive": [
  null,
  "Inaktiv"
 ],
 "mcast": [
  null,
  "mcast"
 ],
 "network": [
  null,
  "Netzwerk"
 ],
 "no": [
  null,
  "Nein"
 ],
 "paused": [
  null,
  "pausiert"
 ],
 "qcow2": [
  null,
  "qcow2"
 ],
 "raw": [
  null,
  "raw"
 ],
 "redirected device": [
  null,
  ""
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
  "zeige weniger"
 ],
 "show more": [
  null,
  "Zeig mehr"
 ],
 "shut off": [
  null,
  "abschalten"
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
  "vCPU Count"
 ],
 "vCPU Maximum": [
  null,
  "vCPU Maximum"
 ],
 "vCPUs": [
  null,
  "vCPUs"
 ],
 "vhostuser": [
  null,
  "vhostuser"
 ],
 "virt-install package needs to be installed on the system in order to create new VMs": [
  null,
  ""
 ],
 "yes": [
  null,
  "Ja"
 ]
}));
