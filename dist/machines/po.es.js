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
  "language": "es",
  "x-generator": "Zanata 3.9.6"
 },
 "Autostart:": [
  null,
  "Auto inicio:"
 ],
 "Available": [
  null,
  "Disponible"
 ],
 "Boot Order:": [
  null,
  ""
 ],
 "Bus": [
  null,
  ""
 ],
 "CPU Type:": [
  null,
  ""
 ],
 "Capacity": [
  null,
  "Capacidad"
 ],
 "Connection": [
  null,
  "Conexión"
 ],
 "Count:": [
  null,
  ""
 ],
 "Device": [
  null,
  ""
 ],
 "Disks": [
  null,
  "Discos"
 ],
 "Emulated Machine:": [
  null,
  ""
 ],
 "File": [
  null,
  ""
 ],
 "Force Restart": [
  null,
  "Forzar Reinicio"
 ],
 "Force Shut Down": [
  null,
  "Forzar Apagado"
 ],
 "GB": [
  null,
  ""
 ],
 "Host": [
  null,
  "Anfitrión"
 ],
 "Memory:": [
  null,
  "Memoria:"
 ],
 "Name": [
  null,
  "Nombre"
 ],
 "No VM is running or defined on this host": [
  null,
  "No hay ninguna MV en ejecución o definida en este anfitrión"
 ],
 "No boot device found": [
  null,
  ""
 ],
 "No disks defined for this VM": [
  null,
  ""
 ],
 "Overview": [
  null,
  "Visión conjunta"
 ],
 "Pool": [
  null,
  "Grupo"
 ],
 "Port": [
  null,
  "Puerto"
 ],
 "Protocol": [
  null,
  ""
 ],
 "Readonly": [
  null,
  ""
 ],
 "Restart": [
  null,
  "Reiniciar"
 ],
 "Run": [
  null,
  "Ejecutar"
 ],
 "Session": [
  null,
  "Sesión"
 ],
 "Shut Down": [
  null,
  ""
 ],
 "Source": [
  null,
  ""
 ],
 "State": [
  null,
  "Estado"
 ],
 "System": [
  null,
  ""
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
 "The VM is running.": [
  null,
  ""
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
  "Usado"
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
 "VM SHUT DOWN action failed": [
  null,
  ""
 ],
 "VM START action failed": [
  null,
  ""
 ],
 "Virtual Machines": [
  null,
  ""
 ],
 "Volume": [
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
  "desactivado"
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
  "activado"
 ],
 "host": [
  null,
  ""
 ],
 "idle": [
  null,
  "inactivo"
 ],
 "network": [
  null,
  ""
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
  "en pausa"
 ],
 "running": [
  null,
  "en ejecución"
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
