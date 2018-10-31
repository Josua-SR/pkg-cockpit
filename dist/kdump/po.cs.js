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
 "Off": [
  null,
  "Vypnuto"
 ],
 "Ok": [
  null,
  "Ok"
 ],
 "On": [
  null,
  "Zapnuto"
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
 "Use the setting in /etc/kdump.conf": [
  null,
  "Použít nastavení v /etc/kdump.conf"
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
 "ssh key": [
  null,
  "ssh klíč"
 ],
 "undefined": [
  null,
  "nedefinované"
 ]
}));
