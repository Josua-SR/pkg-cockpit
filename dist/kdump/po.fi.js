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
  "language": "fi",
  "x-generator": "Zanata 4.6.2"
 },
 "Apply": [
  null,
  "Toteuta"
 ],
 "Cancel": [
  null,
  "Peru"
 ],
 "Compress crash dumps to save space": [
  null,
  "Tiivistä crash dump säästääksesi tilaa"
 ],
 "Compression": [
  null,
  "Pakkaus"
 ],
 "Crash dump location": [
  null,
  "Crash dumpin sijainti"
 ],
 "Crash system": [
  null,
  ""
 ],
 "Directory": [
  null,
  "Hakemisto"
 ],
 "Directory $0 isn't writable or doesn't exist.": [
  null,
  "Hakemistolle $0 ei voi kirjoittaa tai se ei ole olemassa."
 ],
 "Kdump service not installed. Please ensure package kexec-tools is installed.": [
  null,
  "Kdump-palvelua ei ole asennettu. Varmista, että paketti kexec-tools on asennettu."
 ],
 "Kernel Dump": [
  null,
  ""
 ],
 "Loading...": [
  null,
  "Ladataan..."
 ],
 "Local Filesystem": [
  null,
  "Paikallinen tiedostojärjestelmä"
 ],
 "Location": [
  null,
  "Sijainti"
 ],
 "More details": [
  null,
  "Lisätietoja"
 ],
 "Mount": [
  null,
  ""
 ],
 "No configuration found": [
  null,
  ""
 ],
 "No memory reserved. Append a crashkernel option to the kernel command line (e.g. in /etc/default/grub) to reserve memory at boot time. Example: crashkernel=512M": [
  null,
  ""
 ],
 "None": [
  null,
  ""
 ],
 "Off": [
  null,
  "Pois"
 ],
 "Ok": [
  null,
  "OK"
 ],
 "On": [
  null,
  "Päällä"
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
  "Luetaan..."
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
  "Varattu muisti"
 ],
 "Server": [
  null,
  "Palvelin"
 ],
 "Service has an error": [
  null,
  "Palvelussa on virhe"
 ],
 "Service is running": [
  null,
  "Palvelu on käynnissä"
 ],
 "Service is starting": [
  null,
  "Palvelu käynnistyy"
 ],
 "Service is stopped": [
  null,
  "Palvelu on pysäytetty"
 ],
 "Service is stopping": [
  null,
  "Palvelu pysähtyy"
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
  "Testaa kdump-asetukset"
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
  "Asetusten asettaminen epäonnistui: $0"
 ],
 "invalid: multiple targets defined": [
  null,
  "virheellinen: useita kohteita määritelty"
 ],
 "kdump status": [
  null,
  "kdump-tila"
 ],
 "locally in $0": [
  null,
  ""
 ],
 "nfs dump target isn't formated as server:path": [
  null,
  ""
 ],
 "ssh key": [
  null,
  "ssh-avain"
 ],
 "ssh key isn't a path": [
  null,
  ""
 ],
 "ssh server is empty": [
  null,
  ""
 ],
 "undefined": [
  null,
  "määrittämätön"
 ]
}));
