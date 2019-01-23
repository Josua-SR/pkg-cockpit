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
  "$0 ist für die meisten Betriebssysteme verfügbar. Um es zu installieren, suchen Sie es in der GNOME-Software oder führen Sie Folgendes aus:"
 ],
 "Add": [
  null,
  "Hinzufügen"
 ],
 "Add Disk": [
  null,
  "Datenträger hinzufügen"
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
  "Immer"
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
  "Auto-Start"
 ],
 "Available": [
  null,
  "Verfügbar"
 ],
 "Boot Order": [
  null,
  "Startreihenfolge"
 ],
 "Bus": [
  null,
  "Bus"
 ],
 "CHANGE NETWORK STATE action failed": [
  null,
  "Die Aktion \"NETZWERKZUSTAND ÄNDERN\" ist fehlgeschlagen"
 ],
 "CPU Type": [
  null,
  "CPU-Typ"
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
 "Creation of vm $0 failed": [
  null,
  "Schaffung von vm $0 gescheitert"
 ],
 "Ctrl+Alt+Del": [
  null,
  "Strg + Alt + Entf"
 ],
 "Delete": [
  null,
  "Löschen"
 ],
 "Delete associated storage files:": [
  null,
  "Verknüpfte Speicherdateien löschen:"
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
  "Emulierte Maschine"
 ],
 "Fewer than the maximum number of virtual CPUs should be enabled.": [
  null,
  "Es sollte weniger als die maximale Anzahl virtueller CPUs aktiviert sein."
 ],
 "File": [
  null,
  "Datei"
 ],
 "Filesystem": [
  null,
  "Dateisystem"
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
 "GET HYPERVISOR MAX VCPU action failed": [
  null,
  "Die Aktion GET HYPERVISOR MAX VCPU ist fehlgeschlagen"
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
 "Host": [
  null,
  "Host"
 ],
 "Host Name": [
  null,
  "Rechnername"
 ],
 "Host should not be empty": [
  null,
  "Host sollte nicht leer sein"
 ],
 "INSTALL VM action failed": [
  null,
  "Die Aktion zum Installieren der VM ist fehlgeschlagen"
 ],
 "Immediately Start VM": [
  null,
  "Sofort starten Sie die VM"
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
 "Invalid filename": [
  null,
  "Ungültiger Dateiname"
 ],
 "Launch Remote Viewer": [
  null,
  "Starten Sie den Remote Viewer"
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
  "MAC-Adresse"
 ],
 "Manual Connection": [
  null,
  "Manuelle Verbindung"
 ],
 "Maximum number of virtual CPUs allocated for the guest OS, which must be between 1 and $0": [
  null,
  "Maximale Anzahl der für das Gastbetriebssystem zugewiesenen virtuellen CPUs, die zwischen 1 und 1 liegen muss $0"
 ],
 "Memory": [
  null,
  "Speicher"
 ],
 "Memory should be positive number": [
  null,
  "Der Speicher sollte eine positive Zahl sein"
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
 "Name": [
  null,
  "Name"
 ],
 "Name should not be empty": [
  null,
  "Name sollte nicht leer sein"
 ],
 "Name should not consist of empty characters only": [
  null,
  "Der Name darf nicht nur aus leeren Zeichen bestehen"
 ],
 "Network File System": [
  null,
  "Netzwerk-Dateisystem"
 ],
 "Network Type": [
  null,
  "Netzwerkart"
 ],
 "Network settings could not be saved": [
  null,
  "Netzwerkeinstellungen konnten nicht gespeichert werden"
 ],
 "Networks": [
  null,
  "Netzwerke"
 ],
 "New Volume Name": [
  null,
  "Neuer Volume-Name"
 ],
 "No Storage Volumes defined for this Storage Pool": [
  null,
  "Für dieses Speicherpool sind keine Speichervolumes definiert"
 ],
 "No VM is running or defined on this host": [
  null,
  "Auf diesem Host ist keine VM ausgeführt oder definiert"
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
 "No storage pool is defined on this host": [
  null,
  "Auf diesem Host ist kein Speicherpool definiert"
 ],
 "No virtual networks": [
  null,
  "Keine virtuellen Netzwerke"
 ],
 "OS Vendor": [
  null,
  "Betriebssystemanbieter"
 ],
 "Operating System": [
  null,
  "Betriebssystem"
 ],
 "Overview": [
  null,
  "Überblick"
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
 "Persistence": [
  null,
  "Persistent Volumes"
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
 "Run": [
  null,
  "Ausführen"
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
 "Source Path": [
  null,
  "Quellpfad"
 ],
 "Source path should not be empty": [
  null,
  "Quellpfad sollte nicht leer sein"
 ],
 "Source should start with https, ftp or nfs protocol": [
  null,
  "Die Quelle sollte mit dem Protokoll http, ftp oder nfs beginnen"
 ],
 "Start libvirt": [
  null,
  "Starten Sie libvirt"
 ],
 "Start pool when host boots": [
  null,
  "Starten Sie den Pool, wenn der Host bootet"
 ],
 "Start the VM to see disk statistics.": [
  null,
  "Starten Sie die VM, um Festplattenstatistiken anzuzeigen."
 ],
 "Startup": [
  null,
  "Anlaufen"
 ],
 "State": [
  null,
  "Status"
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
 "Storage Size": [
  null,
  "Speichergröße"
 ],
 "Storage Size should not be negative number": [
  null,
  "Die Speichergröße sollte nicht negativ sein"
 ],
 "Storage Volumes": [
  null,
  "Speichervolumen"
 ],
 "System": [
  null,
  "System"
 ],
 "Target Path": [
  null,
  "Zielpfad"
 ],
 "Target path should not be empty": [
  null,
  "Zielpfad sollte nicht leer sein"
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
 "The pool is empty": [
  null,
  "Der Pool ist leer"
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
 "URL": [
  null,
  "URL"
 ],
 "Unique name": [
  null,
  "Einzigartiger Name"
 ],
 "Unplug": [
  null,
  "Ziehen Sie den Stecker heraus"
 ],
 "Upgrade to a more recent version of libvirt to view disk statistics": [
  null,
  "Aktualisieren Sie auf eine neuere Version von libvirt, um Festplattenstatistiken anzuzeigen"
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
 "VCPU settings could not be saved": [
  null,
  "VCPU-Einstellungen konnten nicht gespeichert werden"
 ],
 "VM CHANGE_NETWORK_STATE action failed": [
  null,
  "Die VM CHANGE_NETWORK_STATE-Aktion ist fehlgeschlagen"
 ],
 "VM DELETE (DESTROY) action failed": [
  null,
  "Die Aktion VM DELETE (DESTROY) ist fehlgeschlagen"
 ],
 "VM DELETE (UNDEFINE) action failed": [
  null,
  "Die Aktion VM DELETE (UNDEFINE) ist fehlgeschlagen"
 ],
 "VM DELETE action failed": [
  null,
  "VM DELETE-Aktion ist fehlgeschlagen"
 ],
 "VM DETACH_DISK action failed": [
  null,
  "VM DETACH_DISK-Aktion ist fehlgeschlagen"
 ],
 "VM FORCE OFF action failed": [
  null,
  "Die Aktion VM FORCE OFF ist fehlgeschlagen"
 ],
 "VM FORCE REBOOT action failed": [
  null,
  "Die VM FORCE REBOOT-Aktion ist fehlgeschlagen"
 ],
 "VM REBOOT action failed": [
  null,
  "VM REBOOT-Aktion ist fehlgeschlagen"
 ],
 "VM SEND Non-Maskable Interrrupt action failed": [
  null,
  "Nicht maskierbare Interrupt-Aktion von VM SEND fehlgeschlagen"
 ],
 "VM SENDNMI action failed": [
  null,
  "VM SENDNMI-Aktion ist fehlgeschlagen"
 ],
 "VM SHUT DOWN action failed": [
  null,
  "VM SHUT DOWN-Aktion ist fehlgeschlagen"
 ],
 "VM START action failed": [
  null,
  "VM START-Aktion ist fehlgeschlagen"
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
 "Virtual Machines": [
  null,
  "Virtuelle Maschinen"
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
 "hostdev": [
  null,
  "hostdev"
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
  "qcow2"
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
 "yes": [
  null,
  "Ja"
 ]
}));
