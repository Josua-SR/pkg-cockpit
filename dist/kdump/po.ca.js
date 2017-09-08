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
 "Apply": [
  null,
  "Aplica"
 ],
 "Cancel": [
  null,
  "Cancel·la"
 ],
 "Compress crash dumps to save space": [
  null,
  ""
 ],
 "Compression": [
  null,
  "Compressió"
 ],
 "Crash dump location": [
  null,
  ""
 ],
 "Crash system": [
  null,
  ""
 ],
 "Directory": [
  null,
  "Directori"
 ],
 "Directory $0 isn't writable or doesn't exist.": [
  null,
  ""
 ],
 "Kdump service not installed. Please ensure package kexec-tools is installed.": [
  null,
  ""
 ],
 "Kernel Dump": [
  null,
  "Bolcat del Kernel"
 ],
 "Loading...": [
  null,
  "S'està carregant..."
 ],
 "Local Filesystem": [
  null,
  "Sistema de fitxers local"
 ],
 "Location": [
  null,
  "Ubicació"
 ],
 "More details": [
  null,
  "Més detalls"
 ],
 "Mount": [
  null,
  "Munta"
 ],
 "No configuration found": [
  null,
  "No s'ha trobat cap configuració"
 ],
 "No memory reserved. Append a crashkernel option to the kernel command line (e.g. in /etc/default/grub) to reserve memory at boot time. Example: crashkernel=512M": [
  null,
  ""
 ],
 "None": [
  null,
  "Cap"
 ],
 "Off": [
  null,
  "Off"
 ],
 "Ok": [
  null,
  ""
 ],
 "On": [
  null,
  "On"
 ],
 "On a mounted device": [
  null,
  ""
 ],
 "Raw to a device": [
  null,
  ""
 ],
 "Reading...": [
  null,
  "S'està llegint..."
 ],
 "Remote over NFS": [
  null,
  "Remot sobre NFS"
 ],
 "Remote over SSH": [
  null,
  "Remot sobre SSH"
 ],
 "Reserved memory": [
  null,
  "Memòria reservada"
 ],
 "Server": [
  null,
  "Servidor"
 ],
 "Service has an error": [
  null,
  "El servei té un error"
 ],
 "Service is running": [
  null,
  "Tuned no s'està executant"
 ],
 "Service is starting": [
  null,
  "La màquina s'està reiniciant"
 ],
 "Service is stopped": [
  null,
  "Serveis"
 ],
 "Service is stopping": [
  null,
  "Registres del servei"
 ],
 "Test Configuration": [
  null,
  "Configuració"
 ],
 "Test is only available while the kdump service is running.": [
  null,
  ""
 ],
 "Test kdump settings": [
  null,
  ""
 ],
 "This will test kdump settings by crashing the kernel and thereby the system. Depending on the settings, the system may not automatically reboot and the process may take a while.": [
  null,
  ""
 ],
 "This will test the kdump configuration by crashing the kernel.": [
  null,
  ""
 ],
 "Unable to apply settings: $0": [
  null,
  "No es poden aplicar els ajusts: $0"
 ],
 "Use the setting in /etc/kdump.conf": [
  null,
  ""
 ],
 "invalid: multiple targets defined": [
  null,
  ""
 ],
 "kdump status": [
  null,
  ""
 ],
 "locally in $0": [
  null,
  ""
 ],
 "ssh key": [
  null,
  "clau ssh"
 ],
 "undefined": [
  null,
  ""
 ]
}));
