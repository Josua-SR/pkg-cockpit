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
 "$0 vCPU Details": [
  null,
  "$0 vCPU-Details"
 ],
 "Action": [
  null,
  "Aktion"
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
 "All running virtual machines will be turned off.": [
  null,
  "Alle laufenden virtuellen Maschinen werden deaktiviert."
 ],
 "Always attach": [
  null,
  ""
 ],
 "Apply": [
  null,
  "Anwenden"
 ],
 "Automatically selected host": [
  null,
  "Automatisch ausgewählter Host"
 ],
 "Autostart": [
  null,
  ""
 ],
 "Available": [
  null,
  "Verfügbar"
 ],
 "Base Template": [
  null,
  "Basisvorlage"
 ],
 "Base template": [
  null,
  "Basisvorlage"
 ],
 "Base template:": [
  null,
  "Basisvorlage:"
 ],
 "Boot Order": [
  null,
  ""
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
  ""
 ],
 "CREATE VM action failed": [
  null,
  "Die CREATE VM-Aktion ist fehlgeschlagen"
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
 "Cluster": [
  null,
  "Cluster"
 ],
 "Cluster Templates": [
  null,
  "Cluster-Vorlagen"
 ],
 "Cluster Virtual Machines": [
  null,
  "Virtuelle Maschinen im Cluster"
 ],
 "Confirm migration": [
  null,
  "Bestätigen Sie die Migration"
 ],
 "Confirm reload:": [
  null,
  "Nachladen bestätigen:"
 ],
 "Confirm save:": [
  null,
  "Speichern bestätigen:"
 ],
 "Connect to oVirt Engine": [
  null,
  "Verbinden zu oVirt Engine"
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
 "Create New VM": [
  null,
  "Neue VM erstellen"
 ],
 "Create VM": [
  null,
  "VM erstellen"
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
 "Description": [
  null,
  "Beschreibung"
 ],
 "Description:": [
  null,
  "Beschreibung:"
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
 "Edit the vdsm.conf": [
  null,
  "Bearbeiten Sie die vdsm.conf"
 ],
 "Emulated Machine": [
  null,
  ""
 ],
 "Enter New VM name": [
  null,
  "Geben Sie den neuen VM-Namen ein"
 ],
 "FQDN": [
  null,
  "FQDN"
 ],
 "Fewer than the maximum number of virtual CPUs should be enabled.": [
  null,
  "Es sollte weniger als die maximale Anzahl virtueller CPUs aktiviert sein."
 ],
 "File": [
  null,
  "Datei"
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
  "Host"
 ],
 "Host to Maintenance": [
  null,
  "Host für die Wartung"
 ],
 "INSTALL VM action failed": [
  null,
  "Die Aktion zum Installieren der VM ist fehlgeschlagen"
 ],
 "Install": [
  null,
  "Installation"
 ],
 "Interface Type": [
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
 "Loading data ...": [
  null,
  "Lade Daten ..."
 ],
 "MAC Address": [
  null,
  "MAC-Adresse"
 ],
 "MIGRATE action failed": [
  null,
  "MIGRATE-Aktion ist fehlgeschlagen"
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
 "MiB": [
  null,
  "MiB"
 ],
 "Migrate To:": [
  null,
  "Migrieren nach:"
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
 "Network Interfaces": [
  null,
  ""
 ],
 "Network interface settings could not be saved": [
  null,
  ""
 ],
 "New Volume Name": [
  null,
  "Neuer Volume-Name"
 ],
 "No VM found in oVirt.": [
  null,
  "Keine VM in oVirt gefunden."
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
 "No network interfaces defined for this VM": [
  null,
  "Keine Netzwerkschnittstellen für diese VM definiert"
 ],
 "No oVirt connection": [
  null,
  "Keine OVirt-Verbindung"
 ],
 "No virtual networks": [
  null,
  "Keine virtuellen Netzwerke"
 ],
 "None (Isolated Network)": [
  null,
  ""
 ],
 "Number of virtual CPUs that gonna be used.": [
  null,
  "Anzahl der virtuellen CPUs, die verwendet werden."
 ],
 "OK": [
  null,
  "OK"
 ],
 "OS": [
  null,
  "Betriebssystem"
 ],
 "OS Type:": [
  null,
  "OS-Typ:"
 ],
 "Ok": [
  null,
  "OK"
 ],
 "Open": [
  null,
  ""
 ],
 "Optimized for:": [
  null,
  "Optimiert für:"
 ],
 "Overview": [
  null,
  "Überblick"
 ],
 "Persistence": [
  null,
  ""
 ],
 "Please confirm, the host shall be switched to maintenance mode.": [
  null,
  "Bitte bestätigen Sie, dass der Host in den Wartungsmodus versetzt werden soll."
 ],
 "Please enter new volume name": [
  null,
  "Bitte geben Sie den neuen Datenträgernamen ein"
 ],
 "Please enter new volume size": [
  null,
  "Bitte geben Sie die neue Volumengröße ein"
 ],
 "Please provide fully qualified domain name and port of the oVirt engine.": [
  null,
  "Bitte geben Sie einen vollständig qualifizierten Domänennamen und Port der oVirt Engine an."
 ],
 "Please provide valid oVirt engine fully qualified domain name (FQDN) and port (443 by default)": [
  null,
  "Bitte geben Sie einen gültigen vollqualifizierten OVirt Engine-Domänennamen (FQDN) und Port an (standardmäßig 443)."
 ],
 "Please refer to oVirt's $0 for more information about Remote Viewer setup.": [
  null,
  "Bitte beziehen Sie sich auf oVirt's $0 Weitere Informationen zum Remote Viewer-Setup."
 ],
 "Please start the virtual machine to access its console.": [
  null,
  "Starten Sie die virtuelle Maschine, um auf die Konsole zuzugreifen."
 ],
 "Please wait till VMs list is loaded from the server.": [
  null,
  "Bitte warten Sie, bis die VMs-Liste vom Server geladen wird."
 ],
 "Please wait till list of templates is loaded from the server.": [
  null,
  "Bitte warten Sie, bis die Liste der Vorlagen vom Server geladen wird."
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
 "Preparing for Maintenance": [
  null,
  "Wartung vorbereiten"
 ],
 "Private": [
  null,
  ""
 ],
 "Protocol": [
  null,
  "Protokoll"
 ],
 "REBOOT action failed": [
  null,
  "Die REBOOT-Aktion ist fehlgeschlagen"
 ],
 "Readonly": [
  null,
  "Schreibgeschützt"
 ],
 "Reconnect": [
  null,
  "Erneut verbinden"
 ],
 "Register oVirt": [
  null,
  "Registrieren Sie sich"
 ],
 "Registering oVirt to Cockpit": [
  null,
  "OVirt im Cockpit registrieren"
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
  "Ausführen"
 ],
 "Run Here": [
  null,
  "Hier laufen"
 ],
 "Run when host boots": [
  null,
  ""
 ],
 "Running Since:": [
  null,
  "Laufen seit:"
 ],
 "SET VCPU SETTINGS action failed": [
  null,
  "Die Aktion SET VCPU SETTINGS ist fehlgeschlagen"
 ],
 "SHUTDOWN action failed": [
  null,
  "SHUTDOWN-Aktion ist fehlgeschlagen"
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
 "START action failed": [
  null,
  "Die START-Aktion ist fehlgeschlagen"
 ],
 "SUSPEND action failed": [
  null,
  "SUSPEND-Aktion ist fehlgeschlagen"
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
 "State": [
  null,
  "Status"
 ],
 "Stateless": [
  null,
  "Stateless"
 ],
 "Stateless:": [
  null,
  "Staatenlos:"
 ],
 "Suspend": [
  null,
  "Bereitschaft"
 ],
 "Switch Host to Maintenance": [
  null,
  "Host auf Wartung umstellen"
 ],
 "Switching host to maintenance mode failed. Received error: ": [
  null,
  "Das Umschalten des Hosts in den Wartungsmodus ist fehlgeschlagen. Fehler empfangen: "
 ],
 "Switching host to maintenance mode in progress ...": [
  null,
  "Host wird in den Wartungsmodus versetzt ..."
 ],
 "System": [
  null,
  "System"
 ],
 "Template": [
  null,
  "Vorlage"
 ],
 "Templates": [
  null,
  "Vorlagen"
 ],
 "Templates of $0 cluster": [
  null,
  "Vorlagen von $0 Cluster"
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
 "The pool is empty": [
  null,
  "Der Pool ist leer"
 ],
 "This host is managed by a virtualization manager, so creation of new VMs from the host is not possible.": [
  null,
  "Dieser Host wird von einem Virtualisierungsmanager verwaltet, sodass die Erstellung neuer VMs vom Host aus nicht möglich ist."
 ],
 "This virtual machine is not managed by oVirt": [
  null,
  "Diese virtuelle Maschine wird nicht von oVirt verwaltet"
 ],
 "Threads per core": [
  null,
  "Fäden pro Kern"
 ],
 "Type": [
  null,
  "Typ"
 ],
 "Unplug": [
  null,
  "Ziehen Sie den Stecker heraus"
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
 "VDSM": [
  null,
  "VDSM"
 ],
 "VDSM Service Management": [
  null,
  "VDSM Service Management"
 ],
 "VM DELETE (DESTROY) action failed": [
  null,
  "Die Aktion VM DELETE (DESTROY) ist fehlgeschlagen"
 ],
 "VM DELETE (UNDEFINE) action failed": [
  null,
  "Die Aktion VM DELETE (UNDEFINE) ist fehlgeschlagen"
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
 "VM SHUT DOWN action failed": [
  null,
  "VM SHUT DOWN-Aktion ist fehlgeschlagen"
 ],
 "VM START action failed": [
  null,
  "VM START-Aktion ist fehlgeschlagen"
 ],
 "VM icon": [
  null,
  "VM-Symbol"
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
 "Version": [
  null,
  "Version"
 ],
 "Version num": [
  null,
  "Versionsnummer"
 ],
 "Virtual Machines": [
  null,
  "Virtuelle Maschinen"
 ],
 "Virtual Machines of $0 cluster": [
  null,
  "Virtuelle Maschinen von $0 Cluster"
 ],
 "Volume": [
  null,
  "Lautstärke"
 ],
 "bridge": [
  null,
  "Brücke"
 ],
 "cdrom": [
  null,
  "CD-ROM"
 ],
 "connecting": [
  null,
  "wird verbunden"
 ],
 "cores": [
  null,
  "Kerne"
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
 "error": [
  null,
  "Fehler"
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
 "initializing": [
  null,
  "Initialisierung"
 ],
 "installation failed": [
  null,
  "Installation fehlgeschlagen"
 ],
 "installing OS": [
  null,
  "Betriebssystem installieren"
 ],
 "kdumping": [
  null,
  "kdumping"
 ],
 "maintenance": [
  null,
  "Instandhaltung"
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
 "non operational": [
  null,
  "nicht betriebsbereit"
 ],
 "non responsive": [
  null,
  "nicht reagierend"
 ],
 "oVirt": [
  null,
  "oVirt"
 ],
 "oVirt Host State:": [
  null,
  "oVirt Host State:"
 ],
 "oVirt Provider installation script failed due to missing arguments.": [
  null,
  "Das Installationsskript von oVirt Provider ist aufgrund fehlender Argumente fehlgeschlagen."
 ],
 "oVirt Provider installation script failed: Can't write to /etc/cockpit/machines-ovirt.config, try as root.": [
  null,
  "oVirt Provider-Installationsskript fehlgeschlagen: Kann nicht in die Datei /etc/cockpit/machines-ovirt.config schreiben. Versuchen Sie es als root."
 ],
 "oVirt installation script failed with following output: ": [
  null,
  "Das oVirt-Installationsskript ist mit der folgenden Ausgabe fehlgeschlagen: "
 ],
 "oVirt login in progress": [
  null,
  "oVirt Login läuft"
 ],
 "other": [
  null,
  "other"
 ],
 "paused": [
  null,
  "pausiert"
 ],
 "pending approval": [
  null,
  "ausstehende Genehmigung"
 ],
 "qcow2": [
  null,
  "qcow2"
 ],
 "raw": [
  null,
  "raw"
 ],
 "reboot": [
  null,
  "neustarten"
 ],
 "running": [
  null,
  "Läuft"
 ],
 "server": [
  null,
  "server"
 ],
 "shut off": [
  null,
  "abschalten"
 ],
 "shutdown": [
  null,
  "Herunterfahren"
 ],
 "sockets": [
  null,
  "Steckdosen"
 ],
 "suspended (PM)": [
  null,
  "Angehalten (PM)"
 ],
 "threads": [
  null,
  "threads"
 ],
 "udp": [
  null,
  "udp"
 ],
 "unassigned": [
  null,
  "nicht zugewiesen"
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
