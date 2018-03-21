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
  "x-generator": "Zanata 3.9.6"
 },
 "$0 is available for most operating systems. To install it, search for it in GNOME Software or run the following:": [
  null,
  "$0 està disponible per a la majoria de sistemes operatius. Per instal·lar-ho, cerqueu-ho a GNOME Software o executeu el següent:"
 ],
 "Action": [
  null,
  "Acció"
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
 "Automatically selected host": [
  null,
  "Amfitrió seleccionat automàticament"
 ],
 "Autostart:": [
  null,
  "Inici automàtic:"
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
 "CREATE VM action failed": [
  null,
  "Ha fallat l'acció CREATE VM"
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
 "Confirm deletion of $0": [
  null,
  "Confirma la supressió de $0"
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
 "Count:": [
  null,
  "Nombre:"
 ],
 "Create": [
  null,
  "Crea"
 ],
 "Create New VM": [
  null,
  "Crea una MV nova"
 ],
 "Create New Virtual Machine": [
  null,
  "Crea una màquina virtual nova"
 ],
 "Create VM": [
  null,
  "Crea la MV"
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
 "Disconnected from serial console. Click the Reconnect button.": [
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
 "Edit the vdsm.conf": [
  null,
  "Edita el fitxer vdsm.conf"
 ],
 "Emulated Machine:": [
  null,
  "Màquina emulada:"
 ],
 "Enter New VM name": [
  null,
  "Introduïu el nom de la nova MV"
 ],
 "FQDN": [
  null,
  "FQDN"
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
 "Host": [
  null,
  "Amfitrió"
 ],
 "Host to Maintenance": [
  null,
  "Amfitrió a manteniment"
 ],
 "INSTALL VM action failed": [
  null,
  "Ha fallat l'acció INSTALL VM"
 ],
 "Immediately Start VM": [
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
 "Invalid filename": [
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
 "Migrate To:": [
  null,
  "Migra a:"
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
 "No VM found in oVirt.": [
  null,
  "No s'ha trobat cap MV a oVirt."
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
 "Optimized for:": [
  null,
  "Optimitzat per:"
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
 "Please confirm, the host shall be switched to maintenance mode.": [
  null,
  "Confirmeu que l'amfitrió s'ha de canviar al mode de manteniment."
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
 "Portgroup": [
  null,
  ""
 ],
 "Preparing for Maintenance": [
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
 "Run Here": [
  null,
  "Executa-ho aquí"
 ],
 "Running Since:": [
  null,
  "En execució des de:"
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
 "Source": [
  null,
  "Origen"
 ],
 "Source should start with http, ftp or nfs protocol": [
  null,
  ""
 ],
 "Start the VM to see disk statistics.": [
  null,
  ""
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
 "Storage Size": [
  null,
  "Mida de l'emmagatzematge"
 ],
 "Storage Size should not be negative number": [
  null,
  "La mida de l'emmagatzematge no pot ser un número negatiu"
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
 "This virtual machine is not managed by oVirt": [
  null,
  "Aquesta màquina virtual no està gestionada per oVirt"
 ],
 "Too many files found": [
  null,
  "S'han trobat massa fitxers"
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
 "Used": [
  null,
  "Utilitzat"
 ],
 "VDSM": [
  null,
  "VDSM"
 ],
 "VDSM Service Management": [
  null,
  "Gestió del servei VDSM"
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
 "connecting": [
  null,
  "connectant"
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
 "other": [
  null,
  "altres"
 ],
 "paused": [
  null,
  "pausa"
 ],
 "pending approval": [
  null,
  "pendent d'aprovació"
 ],
 "reboot": [
  null,
  "reinicia"
 ],
 "running": [
  null,
  "en execució"
 ],
 "server": [
  null,
  "servidor"
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
 "vCPUs": [
  null,
  "vCPU"
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
