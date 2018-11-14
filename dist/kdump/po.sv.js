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
  "language": "sv",
  "x-generator": "Zanata 4.6.2"
 },
 "Apply": [
  null,
  "Lägg på"
 ],
 "Cancel": [
  null,
  "Avbryt"
 ],
 "Compress crash dumps to save space": [
  null,
  "Komprimera kraschdumpar för att spara utrymme"
 ],
 "Compression": [
  null,
  "Komprimering"
 ],
 "Crash dump location": [
  null,
  "Kraschdumpplats"
 ],
 "Crash system": [
  null,
  "Krashsystem"
 ],
 "Directory": [
  null,
  "Katalog"
 ],
 "Directory $0 isn't writable or doesn't exist.": [
  null,
  "Katalogen $0 är inte skrivbar eller finns inte."
 ],
 "Kdump service not installed. Please ensure package kexec-tools is installed.": [
  null,
  "Tjänsten kdump är inte installerad.  Se till att paketet kexec-tools är installerat."
 ],
 "Kernel Dump": [
  null,
  "Kärndump"
 ],
 "Loading...": [
  null,
  "Läser in …"
 ],
 "Local Filesystem": [
  null,
  "Lokala filsystem"
 ],
 "Location": [
  null,
  "Plats"
 ],
 "More details": [
  null,
  "Fler detaljer"
 ],
 "Mount": [
  null,
  "Montering"
 ],
 "No configuration found": [
  null,
  "Ingen konfiguration hittad"
 ],
 "No memory reserved. Append a crashkernel option to the kernel command line (e.g. in /etc/default/grub) to reserve memory at boot time. Example: crashkernel=512M": [
  null,
  "Inget minne är reserverat.  Lägg till ett crashkernel-argument till kärnans kommandorad (t.ex. i /etc/default/grub) för att reservera minne vid uppstartstillfället.  Exempel: crashkernel=512M"
 ],
 "None": [
  null,
  "Inga"
 ],
 "Off": [
  null,
  "Av"
 ],
 "Ok": [
  null,
  "Ok"
 ],
 "On": [
  null,
  "På"
 ],
 "On a mounted device": [
  null,
  "På en monterad enhet"
 ],
 "Raw to a device": [
  null,
  ""
 ],
 "Reading...": [
  null,
  ""
 ],
 "Remote over NFS": [
  null,
  ""
 ],
 "Remote over SSH": [
  null,
  ""
 ],
 "Reserved memory": [
  null,
  ""
 ],
 "Server": [
  null,
  ""
 ],
 "Service has an error": [
  null,
  ""
 ],
 "Service is running": [
  null,
  ""
 ],
 "Service is starting": [
  null,
  ""
 ],
 "Service is stopped": [
  null,
  ""
 ],
 "Service is stopping": [
  null,
  ""
 ],
 "Test Configuration": [
  null,
  ""
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
  ""
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
  ""
 ],
 "undefined": [
  null,
  ""
 ]
}));
