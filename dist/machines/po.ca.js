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
 "Address:": [
  null,
  "Adreça:"
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
 "Connect with Remote Viewer": [
  null,
  "Connecta amb el visualitzador remot"
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
 "Console": [
  null,
  "Consola"
 ],
 "Count:": [
  null,
  "Nombre:"
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
 "GB": [
  null,
  "GB"
 ],
 "Host": [
  null,
  "Amfitrió"
 ],
 "Launch Remote Viewer": [
  null,
  "Llança el visualitzador remot"
 ],
 "Manual Connection": [
  null,
  "Connexió manual"
 ],
 "Memory:": [
  null,
  "Memòria:"
 ],
 "More Information": [
  null,
  "Més informació"
 ],
 "Name": [
  null,
  "Nom"
 ],
 "No VM is running or defined on this host": [
  null,
  "No hi ha cap MV en execució o definida en aquest amfitrió"
 ],
 "No boot device found": [
  null,
  "No s'ha trobat cap dispositiu d'arrencada"
 ],
 "No disks defined for this VM": [
  null,
  "No hi ha definit cap disc per a aquesta MV"
 ],
 "No graphics console is defined for this virtual machine.": [
  null,
  ""
 ],
 "Ok": [
  null,
  "D'acord"
 ],
 "Overview": [
  null,
  "Visió de conjunt"
 ],
 "Please start the virtual machine to access its graphics console.": [
  null,
  "Si us plau, inicieu la màquina virtual per accedir a la consola gràfica."
 ],
 "Pool": [
  null,
  "Agrupació"
 ],
 "Port": [
  null,
  "Port"
 ],
 "Protocol": [
  null,
  "Protocol"
 ],
 "Readonly": [
  null,
  "NomésLectura"
 ],
 "Restart": [
  null,
  "Reinicia"
 ],
 "Run": [
  null,
  "Executa"
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
 "State": [
  null,
  "Estat"
 ],
 "Switch to Desktop Viewer": [
  null,
  "Commuta al visualitzador d'escriptoris"
 ],
 "Switch to In-Browser Viewer": [
  null,
  "Commuta al visualitzador integrat del navegador"
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
  ""
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
 "Volume": [
  null,
  "Volum"
 ],
 "Your browser does not support iframes.": [
  null,
  "El vostre navegador no admet iframes."
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
 "disabled": [
  null,
  "inhabilitat"
 ],
 "disk": [
  null,
  "disc"
 ],
 "dying": [
  null,
  "morint"
 ],
 "enabled": [
  null,
  "habilitat"
 ],
 "host": [
  null,
  "amfitrió"
 ],
 "idle": [
  null,
  "ociós"
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
  ""
 ],
 "running": [
  null,
  "en execució"
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
 "vCPUs:": [
  null,
  "vCPUs:"
 ],
 "yes": [
  null,
  "sí"
 ]
}));
