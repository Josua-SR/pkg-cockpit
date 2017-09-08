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
  ""
 ],
 "Address:": [
  null,
  "Adreça:"
 ],
 "Autostart:": [
  null,
  ""
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
  ""
 ],
 "Connect with any SPICE or VNC viewer application.": [
  null,
  ""
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
  ""
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
  ""
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
  ""
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
  "Versió"
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
  ""
 ],
 "Switch to In-Browser Viewer": [
  null,
  ""
 ],
 "System": [
  null,
  "Sistema"
 ],
 "Target": [
  null,
  ""
 ],
 "The VM crashed.": [
  null,
  ""
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
  ""
 ],
 "Usage": [
  null,
  ""
 ],
 "Used": [
  null,
  "Utilitzat"
 ],
 "VM FORCE OFF action failed": [
  null,
  ""
 ],
 "VM FORCE REBOOT action failed": [
  null,
  ""
 ],
 "VM REBOOT action failed": [
  null,
  ""
 ],
 "VM SEND Non-Maskable Interrrupt action failed": [
  null,
  ""
 ],
 "VM SHUT DOWN action failed": [
  null,
  ""
 ],
 "VM START action failed": [
  null,
  ""
 ],
 "VNC": [
  null,
  ""
 ],
 "VNC Address:": [
  null,
  ""
 ],
 "VNC Port:": [
  null,
  ""
 ],
 "VNC TLS Port:": [
  null,
  ""
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
  ""
 ],
 "cdrom": [
  null,
  ""
 ],
 "crashed": [
  null,
  ""
 ],
 "custom": [
  null,
  ""
 ],
 "disabled": [
  null,
  "inhabilitat"
 ],
 "disk": [
  null,
  ""
 ],
 "dying": [
  null,
  ""
 ],
 "enabled": [
  null,
  "habilitat"
 ],
 "host": [
  null,
  ""
 ],
 "idle": [
  null,
  ""
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
  ""
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
  ""
 ],
 "shutdown": [
  null,
  ""
 ],
 "suspended (PM)": [
  null,
  ""
 ],
 "vCPUs:": [
  null,
  ""
 ],
 "yes": [
  null,
  "sí"
 ]
}));
