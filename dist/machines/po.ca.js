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
  "language": "ca",
  "x-generator": "Zanata 4.6.2"
 },
 "$0 Network": [
  null,
  ""
 ],
 "$0 is available for most operating systems. To install it, search for it in GNOME Software or run the following:": [
  null,
  "$0 està disponible per a la majoria de sistemes operatius. Per instal·lar-ho, cerqueu-ho a GNOME Software o executeu el següent:"
 ],
 "Activate": [
  null,
  "Activa"
 ],
 "Add": [
  null,
  "Afegeix"
 ],
 "Add Disk": [
  null,
  ""
 ],
 "Additional": [
  null,
  "Addicional"
 ],
 "Address": [
  null,
  "Adreça"
 ],
 "Address:": [
  null,
  "Adreça:"
 ],
 "Always attach": [
  null,
  ""
 ],
 "Apply": [
  null,
  "Aplica"
 ],
 "Automatically start libvirt on boot": [
  null,
  "Inicia automàticament libvirt amb l'arrencada"
 ],
 "Autostart": [
  null,
  ""
 ],
 "Available": [
  null,
  "Disponible"
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
  "Bus"
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
  "Cancel·la"
 ],
 "Capacity": [
  null,
  "Capacitat"
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
  "Connecta amb qualsevol aplicació de visualització $0."
 ],
 "Connect with any SPICE or VNC viewer application.": [
  null,
  "Connecta amb qualsevol aplicació de visualització SPICE o VNC."
 ],
 "Connecting": [
  null,
  "S'està connectant"
 ],
 "Connecting to Virtualization Service": [
  null,
  "Connexió al servei de virtualització"
 ],
 "Connection": [
  null,
  "Connexió"
 ],
 "Console Type": [
  null,
  "Tipus de consola"
 ],
 "Consoles": [
  null,
  "Consoles"
 ],
 "Cores per socket": [
  null,
  ""
 ],
 "Create": [
  null,
  "Crea"
 ],
 "Create New": [
  null,
  ""
 ],
 "Create Storage Pool": [
  null,
  ""
 ],
 "Create VM": [
  null,
  "Crea la MV"
 ],
 "Creation of VM $0 failed": [
  null,
  ""
 ],
 "Ctrl+Alt+Del": [
  null,
  ""
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
  "Desactiva"
 ],
 "Delete": [
  null,
  "Suprimeix"
 ],
 "Delete Content": [
  null,
  ""
 ],
 "Delete Storage Pool $0": [
  null,
  ""
 ],
 "Delete associated storage files:": [
  null,
  "Suprimeix els fitxers d'emmagatzematge associats:"
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
  "Dispositiu"
 ],
 "Disconnect": [
  null,
  "Desconnecta"
 ],
 "Disconnected": [
  null,
  "Desconnectat"
 ],
 "Disconnected from serial console. Click the Reconnect button.": [
  null,
  ""
 ],
 "Disk $0 fail to get detached from VM $1": [
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
  "Discs"
 ],
 "Disks cannot be removed from $0 VMs": [
  null,
  ""
 ],
 "Download the MSI from $0": [
  null,
  "Baixa el MSI de $0"
 ],
 "Edit": [
  null,
  "Edita"
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
 "Fewer than the maximum number of virtual CPUs should be enabled.": [
  null,
  ""
 ],
 "File": [
  null,
  "Fitxer"
 ],
 "Filesystem Directory": [
  null,
  ""
 ],
 "Force Restart": [
  null,
  "Força el reinici"
 ],
 "Force Shut Down": [
  null,
  "Força l'apagada"
 ],
 "Format": [
  null,
  "Formata"
 ],
 "Forwarding mode": [
  null,
  ""
 ],
 "General": [
  null,
  "General"
 ],
 "GiB": [
  null,
  "GiB"
 ],
 "Graphics Console (VNC)": [
  null,
  "Consola gràfica (VNC)"
 ],
 "Graphics Console in Desktop Viewer": [
  null,
  "Consola gràfica al visualitzador d'escriptoris"
 ],
 "Hide Performance Options": [
  null,
  ""
 ],
 "Host": [
  null,
  "Amfitrió"
 ],
 "Host Device": [
  null,
  ""
 ],
 "Host Name": [
  null,
  "Nom d'amfitrió"
 ],
 "Host should not be empty": [
  null,
  ""
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
  "Inicia automàticament la MV"
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
  "Instal·la"
 ],
 "Installation Source": [
  null,
  "Origen d'instal·lació"
 ],
 "Installation Source Type": [
  null,
  "Tipus d'origen d'instal·lació"
 ],
 "Installation Source should not be empty": [
  null,
  "L'origen d'instal·lació no pot estar en blanc"
 ],
 "Interface Type": [
  null,
  ""
 ],
 "Invalid filename": [
  null,
  "nom de fitxer no vàlid"
 ],
 "Isolated Network": [
  null,
  ""
 ],
 "Launch Remote Viewer": [
  null,
  "Llança el visualitzador remot"
 ],
 "Loading ...": [
  null,
  "S'està carregant..."
 ],
 "Local Install Media": [
  null,
  ""
 ],
 "MAC Address": [
  null,
  "Adreça MAC"
 ],
 "Mac": [
  null,
  ""
 ],
 "Mac Address": [
  null,
  ""
 ],
 "Manual Connection": [
  null,
  "Connexió manual"
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
  ""
 ],
 "Memory": [
  null,
  "Memòria"
 ],
 "Memory could not be saved": [
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
  "Model"
 ],
 "Model type": [
  null,
  "Tipus de model"
 ],
 "More Information": [
  null,
  "Més informació"
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
  "Nom"
 ],
 "Name should not be empty": [
  null,
  "El nom no pot estar en blanc"
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
  ""
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
  "Xarxes"
 ],
 "New Volume Name": [
  null,
  ""
 ],
 "No Storage Pools available": [
  null,
  ""
 ],
 "No Storage Volumes defined for this Storage Pool": [
  null,
  ""
 ],
 "No VM is running or defined on this host": [
  null,
  "No hi ha cap MV en execució o definida en aquest amfitrió"
 ],
 "No Virtual Networks": [
  null,
  ""
 ],
 "No boot device found": [
  null,
  "No s'ha trobat cap dispositiu d'arrencada"
 ],
 "No console defined for this virtual machine.": [
  null,
  ""
 ],
 "No disks defined for this VM": [
  null,
  "No hi ha definit cap disc per a aquesta MV"
 ],
 "No matching files found": [
  null,
  "No s'ha trobat cap fitxer que coincideixi"
 ],
 "No network interfaces defined for this VM": [
  null,
  "No s'ha definit cap interfície de xarxa per aquesta MV"
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
  ""
 ],
 "None (Isolated Network)": [
  null,
  ""
 ],
 "OS Vendor": [
  null,
  ""
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
  "Sistema operatiu"
 ],
 "Overview": [
  null,
  "Visió de conjunt"
 ],
 "Path": [
  null,
  "Camí"
 ],
 "Path on host's filesystem": [
  null,
  ""
 ],
 "Path to ISO file on host's file system": [
  null,
  "Camí al fitxer ISO al sistema de fitxers de l'amfitrió"
 ],
 "Path to file": [
  null,
  "Camí al fitxer"
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
  "Agrupació"
 ],
 "Port": [
  null,
  "Port"
 ],
 "Preferred number of sockets to expose to the guest.": [
  null,
  ""
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
  "Protocol"
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
  "NomésLectura"
 ],
 "Reconnect": [
  null,
  "Torna a connectar"
 ],
 "Remote URL": [
  null,
  "URL remot"
 ],
 "Restart": [
  null,
  "Reinicia"
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
  "Executa"
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
  "Adreça SPICE:"
 ],
 "SPICE Port:": [
  null,
  "Port SPICE:"
 ],
 "SPICE TLS Port:": [
  null,
  "Port TLS SPICE:"
 ],
 "Save": [
  null,
  "Desa"
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
  "Consola sèrie"
 ],
 "Session": [
  null,
  "Sessió"
 ],
 "Show Performance Options": [
  null,
  ""
 ],
 "Shut Down": [
  null,
  "Apaga"
 ],
 "Size": [
  null,
  "Mida"
 ],
 "Sockets": [
  null,
  "Sockets"
 ],
 "Source": [
  null,
  "Origen"
 ],
 "Source Format": [
  null,
  ""
 ],
 "Source Path": [
  null,
  ""
 ],
 "Source path should not be empty": [
  null,
  ""
 ],
 "Source should start with http, ftp or nfs protocol": [
  null,
  ""
 ],
 "Start libvirt": [
  null,
  "Inicia libvirt"
 ],
 "Start pool when host boots": [
  null,
  ""
 ],
 "Startup": [
  null,
  ""
 ],
 "State": [
  null,
  "Estat"
 ],
 "Storage": [
  null,
  "Emmagatzematge"
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
  ""
 ],
 "Storage Pool failed to be created": [
  null,
  ""
 ],
 "Storage Pools": [
  null,
  ""
 ],
 "Storage Volumes": [
  null,
  ""
 ],
 "Storage Volumes could not be deleted": [
  null,
  ""
 ],
 "System": [
  null,
  "Sistema"
 ],
 "Target": [
  null,
  "Objectiu"
 ],
 "Target Path": [
  null,
  ""
 ],
 "Target path should not be empty": [
  null,
  ""
 ],
 "The Storage Pool could not be deleted": [
  null,
  ""
 ],
 "The VM crashed.": [
  null,
  "La MV s'ha estavellat."
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
  "La MV està en pausa."
 ],
 "The VM is running and will be forced off before deletion.": [
  null,
  ""
 ],
 "The VM is running.": [
  null,
  "La MV està en execució."
 ],
 "The VM is suspended by guest power management.": [
  null,
  "La MV està en suspensió per la gestió d'energia del convidat."
 ],
 "The directory on the server being exported": [
  null,
  ""
 ],
 "The pool is empty": [
  null,
  ""
 ],
 "This volume is already used by another VM.": [
  null,
  ""
 ],
 "Threads per core": [
  null,
  ""
 ],
 "Too many files found": [
  null,
  "S'han trobat massa fitxers"
 ],
 "Troubleshoot": [
  null,
  "Soluciona el problema"
 ],
 "Type": [
  null,
  "Tipus"
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
  ""
 ],
 "Unit": [
  null,
  ""
 ],
 "Unplug": [
  null,
  ""
 ],
 "Up to $0 $1 available on the host": [
  null,
  ""
 ],
 "Usage": [
  null,
  "Ús"
 ],
 "Use Existing": [
  null,
  ""
 ],
 "Used": [
  null,
  "Utilitzat"
 ],
 "Used by": [
  null,
  ""
 ],
 "VCPU settings could not be saved": [
  null,
  ""
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
  "Adreça VNC:"
 ],
 "VNC Port:": [
  null,
  "Port VNC:"
 ],
 "VNC TLS Port:": [
  null,
  "Port TLS VNC:"
 ],
 "Vendor": [
  null,
  "Fabricant"
 ],
 "Virtual Machines": [
  null,
  "Màquines virtuals"
 ],
 "Virtual Network": [
  null,
  ""
 ],
 "Virtualization Service (libvirt) is Not Active": [
  null,
  "El servei de virtualització  (libvirt) no està actiu"
 ],
 "Virtualization Service is Available": [
  null,
  "El servei de virtualització està disponible"
 ],
 "Volume": [
  null,
  "Volum"
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
  "actiu"
 ],
 "bridge": [
  null,
  "pont"
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
  "estavellat"
 ],
 "custom": [
  null,
  "personalitzat"
 ],
 "direct": [
  null,
  "directe"
 ],
 "disabled": [
  null,
  "inhabilitat"
 ],
 "disk": [
  null,
  "disc"
 ],
 "down": [
  null,
  ""
 ],
 "dying": [
  null,
  "morint"
 ],
 "enabled": [
  null,
  "habilitat"
 ],
 "ethernet": [
  null,
  "ethernet"
 ],
 "host": [
  null,
  "amfitrió"
 ],
 "host device": [
  null,
  ""
 ],
 "hostdev": [
  null,
  ""
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
  "ociós"
 ],
 "inactive": [
  null,
  "inactiu"
 ],
 "mcast": [
  null,
  "mcast"
 ],
 "network": [
  null,
  "xarxa"
 ],
 "no": [
  null,
  "no"
 ],
 "paused": [
  null,
  "pausa"
 ],
 "qcow2": [
  null,
  ""
 ],
 "raw": [
  null,
  ""
 ],
 "redirected device": [
  null,
  ""
 ],
 "running": [
  null,
  "en execució"
 ],
 "server": [
  null,
  "servidor"
 ],
 "show less": [
  null,
  "mostra menys"
 ],
 "show more": [
  null,
  "mostra més"
 ],
 "shut off": [
  null,
  "apagat"
 ],
 "shutdown": [
  null,
  "apaga"
 ],
 "suspended (PM)": [
  null,
  "suspès (PM)"
 ],
 "udp": [
  null,
  "udp"
 ],
 "undefined": [
  null,
  "indefinit"
 ],
 "up": [
  null,
  ""
 ],
 "user": [
  null,
  "usuari"
 ],
 "vCPU Count": [
  null,
  ""
 ],
 "vCPU Maximum": [
  null,
  ""
 ],
 "vCPUs": [
  null,
  "vCPU"
 ],
 "vhostuser": [
  null,
  ""
 ],
 "yes": [
  null,
  "sí"
 ]
}));
