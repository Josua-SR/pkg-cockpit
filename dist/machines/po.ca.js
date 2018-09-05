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
  "x-generator": "Zanata 4.6.0"
 },
 "$0 is available for most operating systems. To install it, search for it in GNOME Software or run the following:": [
  null,
  "$0 està disponible per a la majoria de sistemes operatius. Per instal·lar-ho, cerqueu-ho a GNOME Software o executeu el següent:"
 ],
 "$0 vCPU Details": [
  null,
  ""
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
 "All changes will take effect only after stopping and starting the VM.": [
  null,
  ""
 ],
 "Apply": [
  null,
  "Aplica"
 ],
 "Attach permanently": [
  null,
  ""
 ],
 "Automatically start libvirt on boot": [
  null,
  "Inicia automàticament libvirt amb l'arrencada"
 ],
 "Autostart:": [
  null,
  "Inici automàtic:"
 ],
 "Available": [
  null,
  "Disponible"
 ],
 "Boot Order:": [
  null,
  "Ordre d'arrencada:"
 ],
 "Bus": [
  null,
  "Bus"
 ],
 "CHANGE NETWORK STATE action failed": [
  null,
  "Ha fallat l'acció CHANGE NETWORK STATE"
 ],
 "CPU Type:": [
  null,
  "Tipus de CPU:"
 ],
 "Cancel": [
  null,
  "Cancel·la"
 ],
 "Capacity": [
  null,
  "Capacitat"
 ],
 "Clicking \"Launch Remote Viewer\" will download a .vv file and launch $0.": [
  null,
  ""
 ],
 "Confirm deletion of $0": [
  null,
  "Confirma la supressió de $0"
 ],
 "Connect with any $0 viewer application.": [
  null,
  "Connecta amb qualsevol aplicació de visualització $0."
 ],
 "Connect with any SPICE or VNC viewer application.": [
  null,
  "Connecta amb qualsevol aplicació de visualització SPICE o VNC."
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
 "Create New VM": [
  null,
  "Crea una MV nova"
 ],
 "Create New Virtual Machine": [
  null,
  "Crea una màquina virtual nova"
 ],
 "Creation of vm $0 failed": [
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
 "Device": [
  null,
  "Dispositiu"
 ],
 "Disconnect": [
  null,
  "Desconnecta"
 ],
 "Disconnected from serial console. Click the Reconnect button.": [
  null,
  ""
 ],
 "Disk failed to be attached with following error: ": [
  null,
  ""
 ],
 "Disk failed to be created with following error: ": [
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
 "Emulated Machine:": [
  null,
  "Màquina emulada:"
 ],
 "Fewer than the maximum number of virtual CPUs should be enabled.": [
  null,
  ""
 ],
 "File": [
  null,
  "Fitxer"
 ],
 "Filesystem": [
  null,
  "Sistema de fitxers"
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
 "GET HYPERVISOR MAX VCPU action failed": [
  null,
  ""
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
 "INSTALL VM action failed": [
  null,
  "Ha fallat l'acció INSTALL VM"
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
 "MAC Address": [
  null,
  "Adreça MAC"
 ],
 "MTU": [
  null,
  "MTU"
 ],
 "Managed": [
  null,
  "Gestionat"
 ],
 "Manual Connection": [
  null,
  "Connexió manual"
 ],
 "Maximum number of virtual CPUs allocated for the guest OS, which must be between 1 and $0": [
  null,
  ""
 ],
 "Memory": [
  null,
  "Memòria"
 ],
 "Memory should be positive number": [
  null,
  ""
 ],
 "Memory:": [
  null,
  "Memòria:"
 ],
 "MiB": [
  null,
  "MiB"
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
 "Name should not consist of empty characters only": [
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
 "OS Vendor": [
  null,
  ""
 ],
 "Ok": [
  null,
  "D'acord"
 ],
 "Operating System": [
  null,
  "Sistema operatiu"
 ],
 "Overview": [
  null,
  "Visió de conjunt"
 ],
 "Path to ISO file on host's file system": [
  null,
  "Camí al fitxer ISO al sistema de fitxers de l'amfitrió"
 ],
 "Path to file": [
  null,
  "Camí al fitxer"
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
 "Portgroup": [
  null,
  ""
 ],
 "Preferred number of sockets to expose to the guest.": [
  null,
  ""
 ],
 "Protocol": [
  null,
  "Protocol"
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
 "SET VCPU SETTINGS action failed": [
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
 "Send Non-Maskable Interrupt": [
  null,
  ""
 ],
 "Send shortcut": [
  null,
  "Envia la drecera"
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
 "Source should start with http, ftp or nfs protocol": [
  null,
  ""
 ],
 "Start libvirt": [
  null,
  "Inicia libvirt"
 ],
 "Start the VM to see disk statistics.": [
  null,
  "Inicieu la MV per veure les estadístiques del disc."
 ],
 "State": [
  null,
  "Estat"
 ],
 "Storage Size": [
  null,
  "Mida de l'emmagatzematge"
 ],
 "Storage Size should not be negative number": [
  null,
  "La mida de l'emmagatzematge no pot ser un número negatiu"
 ],
 "System": [
  null,
  "Sistema"
 ],
 "Target": [
  null,
  "Objectiu"
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
 "Threads per cores": [
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
 "Unplug": [
  null,
  ""
 ],
 "Upgrade to a more recent version of libvirt to view disk statistics": [
  null,
  "Actualitzeu a una versió més recent de libvirt per visualitzar les estadístiques dels discs"
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
 "Virtualport": [
  null,
  ""
 ],
 "Volume": [
  null,
  "Volum"
 ],
 "Your browser does not support iframes.": [
  null,
  "El vostre navegador no admet iframes."
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
 "vCPUs:": [
  null,
  "vCPUs:"
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
