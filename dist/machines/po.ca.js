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
 "Bus": [
  null,
  "Bus"
 ],
 "CHANGE NETWORK STATE action failed": [
  null,
  "Ha fallat l'acció CHANGE NETWORK STATE"
 ],
 "CPU Type": [
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
 "Creation of vm $0 failed": [
  null,
  ""
 ],
 "Ctrl+Alt+Del": [
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
 "GET HYPERVISOR MAX VCPU action failed": [
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
 "Host": [
  null,
  "Amfitrió"
 ],
 "Host Name": [
  null,
  "Nom d'amfitrió"
 ],
 "Host should not be empty": [
  null,
  ""
 ],
 "INSTALL VM action failed": [
  null,
  "Ha fallat l'acció INSTALL VM"
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
 "Mac Address": [
  null,
  ""
 ],
 "Manual Connection": [
  null,
  "Connexió manual"
 ],
 "Maximum Transmission Unit": [
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
 "Network File System": [
  null,
  ""
 ],
 "Network Interfaces": [
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
 "No Storage Volumes defined for this Storage Pool": [
  null,
  ""
 ],
 "No VM is running or defined on this host": [
  null,
  "No hi ha cap MV en execució o definida en aquest amfitrió"
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
 "No storage pool is defined on this host": [
  null,
  ""
 ],
 "No virtual networks": [
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
 "Persistence": [
  null,
  ""
 ],
 "Persistent": [
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
 "Storage Pool Name": [
  null,
  ""
 ],
 "Storage Pool failed to be created": [
  null,
  ""
 ],
 "Storage Pool failed to get activated": [
  null,
  ""
 ],
 "Storage Pool failed to get deactivated": [
  null,
  ""
 ],
 "Storage Pools": [
  null,
  ""
 ],
 "Storage Size": [
  null,
  "Mida de l'emmagatzematge"
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
  "Ha fallat l'acció VM FORCE OFF"
 ],
 "VM FORCE REBOOT action failed": [
  null,
  "Ha fallat l'acció VM FORCE REBOOT"
 ],
 "VM REBOOT action failed": [
  null,
  "Ha fallat l'acció VM REBOOT"
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
  "Ha fallat l'acció VM SHUT DOWN"
 ],
 "VM START action failed": [
  null,
  "Ha fallat l'acció VM START"
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
 "Virtual Machines": [
  null,
  "Màquines virtuals"
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
 "hostdev": [
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
 "other": [
  null,
  "altres"
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
