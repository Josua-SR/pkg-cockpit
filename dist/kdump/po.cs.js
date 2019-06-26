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
nplurals=3; plural=(n==1) ? 0 : (n>=2 && n<=4) ? 1 : 2;
return plural;
},
  "language": "cs",
  "x-generator": "Zanata 4.6.2"
 },
 "Apply": [
  null,
  "Použít"
 ],
 "Cancel": [
  null,
  "Storno"
 ],
 "Compress crash dumps to save space": [
  null,
  "Komprimovat výpisy paměti z havárií pro úsporu místa"
 ],
 "Compression": [
  null,
  "Komprese"
 ],
 "Crash dump location": [
  null,
  "Umístění výpisu paměti pádu"
 ],
 "Crash system": [
  null,
  "Zhavarovat systém"
 ],
 "Directory": [
  null,
  "Složka"
 ],
 "Directory $0 isn't writable or doesn't exist.": [
  null,
  "Složka $0 není zapisovatelná nebo neexistuje."
 ],
 "Kdump service not installed. Please ensure package kexec-tools is installed.": [
  null,
  "Služba kdump není nainstalovaná. Zajistěte, aby byl nainstalován balíček kexec-tools."
 ],
 "Kernel Dump": [
  null,
  "Výpis paměti jádra"
 ],
 "Loading...": [
  null,
  "Načítání…"
 ],
 "Local Filesystem": [
  null,
  "Místní souborový systém"
 ],
 "Location": [
  null,
  "Umístění"
 ],
 "More details": [
  null,
  "Další podrobnosti"
 ],
 "Mount": [
  null,
  "Připojit (mount)"
 ],
 "No configuration found": [
  null,
  "Nenalezeno žádné nastavení"
 ],
 "No memory reserved. Append a crashkernel option to the kernel command line (e.g. in /etc/default/grub) to reserve memory at boot time. Example: crashkernel=512M": [
  null,
  "Není vyhrazena žádná paměť. K příkazovému řádku jádra připojte volbu crashkernel (např. v /etc/default/grub) pro vyhrazení paměti při startu. Příklad: crashkernel=512M"
 ],
 "None": [
  null,
  "Žádný"
 ],
 "Ok": [
  null,
  "Ok"
 ],
 "On a mounted device": [
  null,
  "Na připojeném zařízení"
 ],
 "Raw to a device": [
  null,
  "Neupravované na zařízení"
 ],
 "Reading...": [
  null,
  "Načítání…"
 ],
 "Remote over NFS": [
  null,
  "Vzdálené přes NFS"
 ],
 "Remote over SSH": [
  null,
  "Vzdálené přes SSH"
 ],
 "Reserved memory": [
  null,
  "Vyhrazená paměť"
 ],
 "Server": [
  null,
  "Server"
 ],
 "Service has an error": [
  null,
  "Služba má chybu"
 ],
 "Service is running": [
  null,
  "Služba je spuštěná"
 ],
 "Service is starting": [
  null,
  "Služba se spouští"
 ],
 "Service is stopped": [
  null,
  "Služba je zastavená"
 ],
 "Service is stopping": [
  null,
  "Služba se zastavuje"
 ],
 "Test Configuration": [
  null,
  "Vyzkoušet nastavení"
 ],
 "Test is only available while the kdump service is running.": [
  null,
  "Test je k dispozici pouze pokud je spuštěná služba kdump."
 ],
 "Test kdump settings": [
  null,
  "Vyzkoušet nastavení kdump"
 ],
 "This will test kdump settings by crashing the kernel and thereby the system. Depending on the settings, the system may not automatically reboot and the process may take a while.": [
  null,
  "Toto vyzkouší nastavení kdump vyvoláním havárie jádra a tím i systému. V závislosti na nastavení se systém nemusí automaticky zrestartovat a proces může chvíli trvat."
 ],
 "This will test the kdump configuration by crashing the kernel.": [
  null,
  "Toto vyzkouší nastavení kdump vyvoláním havárie jádra."
 ],
 "Unable to apply settings: $0": [
  null,
  "Nastavení se nedaří uplatnit: $0"
 ],
 "invalid: multiple targets defined": [
  null,
  "neplatné: definováno vícero cílů"
 ],
 "kdump status": [
  null,
  "stav kdump"
 ],
 "locally in $0": [
  null,
  "místně v $0"
 ],
 "nfs dump target isn't formated as server:path": [
  null,
  "cíl výpisu nfs nemá podobu server:umisteni"
 ],
 "ssh key": [
  null,
  "ssh klíč"
 ],
 "ssh key isn't a path": [
  null,
  "v kolonce ssh klíč není vyplněné jeho umístění"
 ],
 "ssh server is empty": [
  null,
  "není vyplněná kolonka ssh server"
 ],
 "undefined": [
  null,
  "nedefinované"
 ]
}));
