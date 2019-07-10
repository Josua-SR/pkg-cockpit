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
  "x-generator": "Zanata 4.6.2"
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
  "Crash-System"
 ],
 "Directory": [
  null,
  "Ordner"
 ],
 "Directory $0 isn't writable or doesn't exist.": [
  null,
  "Verzeichnis $0 ist nicht beschreibbar oder existiert nicht."
 ],
 "Kdump service not installed. Please ensure package kexec-tools is installed.": [
  null,
  "Kdump-Dienst nicht installiert. Bitte stellen Sie sicher, dass das Paket kexec-tools installiert ist."
 ],
 "Kernel Dump": [
  null,
  "Kernel Dump"
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
  "Ort"
 ],
 "More details": [
  null,
  "Weitere Details"
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
  "Kein Speicher reserviert Hängen Sie an die Kernel-Befehlszeile eine Option crashkernel an (z. B. in / etc / default / grub), um Speicherplatz beim Booten zu reservieren. Beispiel: crashkernel = 512M"
 ],
 "None": [
  null,
  "Kein"
 ],
 "Ok": [
  null,
  "OK"
 ],
 "On a mounted device": [
  null,
  "Auf einem montierten Gerät"
 ],
 "Raw to a device": [
  null,
  "Raw zu einem Gerät"
 ],
 "Reading...": [
  null,
  "Lade..."
 ],
 "Remote over NFS": [
  null,
  "Remote über NFS"
 ],
 "Remote over SSH": [
  null,
  "Remote über SSH"
 ],
 "Reserved memory": [
  null,
  "Reservierter Speicher"
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
  "Dadurch werden die kdump-Einstellungen getestet, indem der Kernel und damit das System zum Absturz gebracht werden. Abhängig von den Einstellungen wird das System möglicherweise nicht automatisch neu gestartet, und der Vorgang kann eine Weile dauern."
 ],
 "This will test the kdump configuration by crashing the kernel.": [
  null,
  "Dies wird die kdump-Konfiguration durch einen Kernel-Absturz testen."
 ],
 "Unable to apply settings: $0": [
  null,
  "Kann Einstellungen nicht anwenden: $0"
 ],
 "invalid: multiple targets defined": [
  null,
  "ungültig: Mehrere Ziele definiert"
 ],
 "kdump status": [
  null,
  "kdump Status"
 ],
 "locally in $0": [
  null,
  "lokal in $0"
 ],
 "nfs dump target isn't formated as server:path": [
  null,
  "Das NFS-Speicherauszugsziel ist nicht als Serverpfad formatiert"
 ],
 "ssh key": [
  null,
  "SSH-Schlüssel"
 ],
 "ssh key isn't a path": [
  null,
  "Der SSH-Schlüssel ist kein Pfad"
 ],
 "ssh server is empty": [
  null,
  "SSH-Server ist leer"
 ],
 "undefined": [
  null,
  "nicht definiert"
 ]
}));
