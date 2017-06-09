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
  "language": "de",
  "x-generator": "Zanata 3.9.6"
 },
 "Apply": [
  null,
  "Anwenden"
 ],
 "Cancel": [
  null,
  "Abbrechen"
 ],
 "Compress crash dumps to save space": [
  null,
  "Absturzberichte komprimieren um Speicherplatz zu sparen"
 ],
 "Compression": [
  null,
  "Komprimierung"
 ],
 "Crash dump location": [
  null,
  "Ort für Absturzberichte"
 ],
 "Crash system": [
  null,
  ""
 ],
 "Directory": [
  null,
  ""
 ],
 "Directory $0 isn't writable or doesn't exist.": [
  null,
  ""
 ],
 "Kdump service not installed. Please ensure package kexec-tools is installed.": [
  null,
  ""
 ],
 "Kernel dump configuration": [
  null,
  "Unbekannte Konfiguration"
 ],
 "Loading...": [
  null,
  "Lade..."
 ],
 "Local Filesystem": [
  null,
  "Kein Dateisystem"
 ],
 "Location": [
  null,
  ""
 ],
 "More details": [
  null,
  ""
 ],
 "Mount": [
  null,
  "Einhängen"
 ],
 "No configuration found": [
  null,
  "Unbekannte Konfiguration"
 ],
 "No memory reserved. Append a crashkernel option to the kernel command line (e.g. in /etc/default/grub) to reserve memory at boot time. Example: crashkernel=512M": [
  null,
  ""
 ],
 "None": [
  null,
  "Kein"
 ],
 "Off": [
  null,
  "Aus"
 ],
 "Ok": [
  null,
  ""
 ],
 "On": [
  null,
  "Ein"
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
  "Lade..."
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
  "Server"
 ],
 "Service has an error": [
  null,
  "Dienst hat einen Fehler"
 ],
 "Service is running": [
  null,
  "Dienst läuft nicht"
 ],
 "Service is starting": [
  null,
  "Dienst startet"
 ],
 "Service is stopped": [
  null,
  "Dienst ist beendet"
 ],
 "Service is stopping": [
  null,
  "Dienst wird beendet"
 ],
 "Test Configuration": [
  null,
  "Konfiguration prüfen"
 ],
 "Test is only available while the kdump service is running.": [
  null,
  "Der Test ist nur verfügbar, wenn der Dienst kdump läuft."
 ],
 "Test kdump settings": [
  null,
  "kdump-Einstellungen prüfen"
 ],
 "This will test kdump settings by crashing the kernel and thereby the system. Depending on the settings, the system may not automatically reboot and the process may take a while.": [
  null,
  ""
 ],
 "This will test the kdump configuration by crashing the kernel.": [
  null,
  "Dies wird die kdump-Konfiguration durch einen Kernel-Absturz testen."
 ],
 "Unable to apply settings: $0": [
  null,
  "Kann Einstellungen nicht anwenden: $0"
 ],
 "Use the setting in /etc/kdump.conf": [
  null,
  "Benutze die Einstellungen in /etc/kdump.conf"
 ],
 "invalid: multiple targets defined": [
  null,
  ""
 ],
 "kdump status": [
  null,
  "kdump Status"
 ],
 "locally in $0": [
  null,
  "lokal in $0"
 ],
 "ssh key": [
  null,
  "SSH-Schlüssel"
 ],
 "undefined": [
  null,
  "nicht definiert"
 ]
}));
