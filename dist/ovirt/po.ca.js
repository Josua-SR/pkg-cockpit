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
 "$0 vCPU Details": [
  null,
  ""
 ],
 "Action": [
  null,
  "Acció"
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
 "All running virtual machines will be turned off.": [
  null,
  "S'apagaran totes les màquines virtuals."
 ],
 "Always attach": [
  null,
  ""
 ],
 "Apply": [
  null,
  "Aplica"
 ],
 "Automatically selected host": [
  null,
  "Amfitrió seleccionat automàticament"
 ],
 "Autostart": [
  null,
  ""
 ],
 "Available": [
  null,
  "Disponible"
 ],
 "Base Template": [
  null,
  "Plantilla base"
 ],
 "Base template": [
  null,
  "Plantilla base"
 ],
 "Base template:": [
  null,
  "Plantilla base:"
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
 "CREATE VM action failed": [
  null,
  "Ha fallat l'acció CREATE VM"
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
 "Cluster": [
  null,
  "Clúster"
 ],
 "Cluster Templates": [
  null,
  "Plantilles de clúster"
 ],
 "Cluster Virtual Machines": [
  null,
  "Màquines virtuals del clúster"
 ],
 "Confirm migration": [
  null,
  "Confirmació de la migració"
 ],
 "Confirm reload:": [
  null,
  "Confirmació de la recàrrega:"
 ],
 "Confirm save:": [
  null,
  "Confirmació del desament:"
 ],
 "Connect to oVirt Engine": [
  null,
  "Connecta't al motor d'oVirt"
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
 "Create New VM": [
  null,
  "Crea una MV nova"
 ],
 "Create VM": [
  null,
  "Crea la MV"
 ],
 "Ctrl+Alt+Del": [
  null,
  ""
 ],
 "Current Allocation": [
  null,
  ""
 ],
 "Delete": [
  null,
  "Suprimeix"
 ],
 "Delete associated storage files:": [
  null,
  "Suprimeix els fitxers d'emmagatzematge associats:"
 ],
 "Description": [
  null,
  "Descripció"
 ],
 "Description:": [
  null,
  "Descripció:"
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
 "Edit the vdsm.conf": [
  null,
  "Edita el fitxer vdsm.conf"
 ],
 "Emulated Machine": [
  null,
  ""
 ],
 "Enter New VM name": [
  null,
  "Introduïu el nom de la nova MV"
 ],
 "FORCEOFF action failed: $0": [
  null,
  ""
 ],
 "FQDN": [
  null,
  "FQDN"
 ],
 "Fewer than the maximum number of virtual CPUs should be enabled.": [
  null,
  ""
 ],
 "File": [
  null,
  "Fitxer"
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
 "HA": [
  null,
  "HA"
 ],
 "HA:": [
  null,
  "HA:"
 ],
 "Hide Performance Options": [
  null,
  ""
 ],
 "Host": [
  null,
  "Amfitrió"
 ],
 "Host to Maintenance": [
  null,
  "Amfitrió a manteniment"
 ],
 "Install": [
  null,
  "Instal·la"
 ],
 "Interface Type": [
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
 "Loading data ...": [
  null,
  "S'estan carregant les dades..."
 ],
 "MAC Address": [
  null,
  "Adreça MAC"
 ],
 "MIGRATE action failed": [
  null,
  "Ha fallat l'acció MIGRATE"
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
 "Migrate To:": [
  null,
  "Migra a:"
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
 "NIC $0 of VM $1 failed to change state": [
  null,
  ""
 ],
 "Name": [
  null,
  "Nom"
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
  ""
 ],
 "No Storage Pools available": [
  null,
  ""
 ],
 "No VM found in oVirt.": [
  null,
  "No s'ha trobat cap MV a oVirt."
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
 "No network interfaces defined for this VM": [
  null,
  "No s'ha definit cap interfície de xarxa per aquesta MV"
 ],
 "No oVirt connection": [
  null,
  ""
 ],
 "None (Isolated Network)": [
  null,
  ""
 ],
 "Number of virtual CPUs that gonna be used.": [
  null,
  ""
 ],
 "OK": [
  null,
  ""
 ],
 "OS": [
  null,
  "SO"
 ],
 "OS Type:": [
  null,
  "Tipus de SO:"
 ],
 "Ok": [
  null,
  "D'acord"
 ],
 "Only editable when the guest is shut off": [
  null,
  ""
 ],
 "Open": [
  null,
  ""
 ],
 "Optimized for:": [
  null,
  "Optimitzat per:"
 ],
 "Overview": [
  null,
  "Visió de conjunt"
 ],
 "Path": [
  null,
  "Camí"
 ],
 "Pause": [
  null,
  ""
 ],
 "Persistence": [
  null,
  ""
 ],
 "Please confirm, the host shall be switched to maintenance mode.": [
  null,
  "Confirmeu que l'amfitrió s'ha de canviar al mode de manteniment."
 ],
 "Please enter new volume name": [
  null,
  ""
 ],
 "Please enter new volume size": [
  null,
  ""
 ],
 "Please provide fully qualified domain name and port of the oVirt engine.": [
  null,
  "Proporcioneu el nom de domini plenament qualificat i el port del motor oVirt."
 ],
 "Please provide valid oVirt engine fully qualified domain name (FQDN) and port (443 by default)": [
  null,
  "Proporcioneu el nom de domini plenament qualificat d'un motor oVirt vàlid i el port (443 per defecte)."
 ],
 "Please refer to oVirt's $0 for more information about Remote Viewer setup.": [
  null,
  ""
 ],
 "Please start the virtual machine to access its console.": [
  null,
  ""
 ],
 "Please wait till VMs list is loaded from the server.": [
  null,
  "Espereu fins que la llista de MV es carregui del servidor."
 ],
 "Please wait till list of templates is loaded from the server.": [
  null,
  "Espereu fins que la llista de plantilles es carregui del servidor."
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
 "Preparing for Maintenance": [
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
 "REBOOT action failed": [
  null,
  "Ha fallat l'acció REBOOT"
 ],
 "REBOOT_VM action failed: %s0": [
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
 "Register oVirt": [
  null,
  "Registra l'oVirt"
 ],
 "Registering oVirt to Cockpit": [
  null,
  "Registrament d'oVirt a Cockpit"
 ],
 "Reload": [
  null,
  "Recarrega"
 ],
 "Restart": [
  null,
  "Reinicia"
 ],
 "Resume": [
  null,
  ""
 ],
 "Run": [
  null,
  "Executa"
 ],
 "Run Here": [
  null,
  "Executa-ho aquí"
 ],
 "Run when host boots": [
  null,
  ""
 ],
 "Running Since:": [
  null,
  "En execució des de:"
 ],
 "SET VCPU SETTINGS action failed": [
  null,
  ""
 ],
 "SHUTDOWN action failed": [
  null,
  "Ha fallat l'acció SHUTDOWN"
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
 "START action failed": [
  null,
  "Ha fallat l'acció START"
 ],
 "START_VM action failed: %s0": [
  null,
  ""
 ],
 "SUSPEND action failed": [
  null,
  "Ha fallat l'acció SUSPEND"
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
 "State": [
  null,
  "Estat"
 ],
 "Stateless": [
  null,
  ""
 ],
 "Stateless:": [
  null,
  ""
 ],
 "Suspend": [
  null,
  "Suspèn"
 ],
 "Switch Host to Maintenance": [
  null,
  "Canvia l'amfitrió a manteniment"
 ],
 "Switching host to maintenance mode failed. Received error: ": [
  null,
  "Ha fallat el canvi de l'amfitrió a manteniment. Error rebut: "
 ],
 "Switching host to maintenance mode in progress ...": [
  null,
  "Canvi de l'amfitrió a manteniment en progrés..."
 ],
 "System": [
  null,
  "Sistema"
 ],
 "Target": [
  null,
  "Objectiu"
 ],
 "Template": [
  null,
  "Plantilla"
 ],
 "Templates": [
  null,
  "Plantilles"
 ],
 "Templates of $0 cluster": [
  null,
  "Plantilles de clúster $0"
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
 "The pool is empty": [
  null,
  ""
 ],
 "This host is managed by a virtualization manager, so creation of new VMs from the host is not possible.": [
  null,
  ""
 ],
 "This virtual machine is not managed by oVirt": [
  null,
  "Aquesta màquina virtual no està gestionada per oVirt"
 ],
 "Threads per core": [
  null,
  ""
 ],
 "Type": [
  null,
  "Tipus"
 ],
 "Type ID": [
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
 "VCPU settings could not be saved": [
  null,
  ""
 ],
 "VDSM": [
  null,
  "VDSM"
 ],
 "VDSM Service Management": [
  null,
  "Gestió del servei VDSM"
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
 "VM icon": [
  null,
  "Icona de la MV"
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
 "Version": [
  null,
  "Versió"
 ],
 "Version num": [
  null,
  "Núm. versió"
 ],
 "Virtual Machines": [
  null,
  "Màquines virtuals"
 ],
 "Virtual Machines of $0 cluster": [
  null,
  "Màquines virtuals del clúster $0"
 ],
 "Volume": [
  null,
  "Volum"
 ],
 "WWPN": [
  null,
  ""
 ],
 "bridge": [
  null,
  "pont"
 ],
 "cdrom": [
  null,
  "cdrom"
 ],
 "connecting": [
  null,
  "connectant"
 ],
 "control-label $0": [
  null,
  ""
 ],
 "cores": [
  null,
  "nuclis"
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
 "error": [
  null,
  "error"
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
 "idle": [
  null,
  "ociós"
 ],
 "initializing": [
  null,
  "inicialitzant"
 ],
 "installation failed": [
  null,
  "ha fallat la instal·lació"
 ],
 "installing OS": [
  null,
  "instal·lant el SO"
 ],
 "kdumping": [
  null,
  ""
 ],
 "maintenance": [
  null,
  "manteniment"
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
 "non operational": [
  null,
  ""
 ],
 "non responsive": [
  null,
  ""
 ],
 "oVirt": [
  null,
  "oVirt"
 ],
 "oVirt Host State:": [
  null,
  "Estat de l'amfitrió oVirt:"
 ],
 "oVirt Provider installation script failed due to missing arguments.": [
  null,
  ""
 ],
 "oVirt Provider installation script failed: Can't write to /etc/cockpit/machines-ovirt.config, try as root.": [
  null,
  ""
 ],
 "oVirt installation script failed with following output: ": [
  null,
  ""
 ],
 "oVirt login in progress": [
  null,
  "Inici de sessió d'oVirt en progrés"
 ],
 "paused": [
  null,
  "pausa"
 ],
 "pending approval": [
  null,
  "pendent d'aprovació"
 ],
 "qcow2": [
  null,
  ""
 ],
 "raw": [
  null,
  ""
 ],
 "reboot": [
  null,
  "reinicia"
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
 "sockets": [
  null,
  ""
 ],
 "suspended (PM)": [
  null,
  "suspès (PM)"
 ],
 "threads": [
  null,
  "fils"
 ],
 "udp": [
  null,
  "udp"
 ],
 "unassigned": [
  null,
  "sense assignar"
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
