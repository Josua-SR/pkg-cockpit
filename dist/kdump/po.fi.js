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
  "language": "fi",
  "x-generator": "Zanata 4.5.0"
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
 "Use the setting in /etc/kdump.conf": [
  null,
  "Käytä asetusta sijainnissa /etc/kdump.conf"
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
 "ssh key": [
  null,
  "ssh-avain"
 ],
 "undefined": [
  null,
  "määrittämätön"
 ]
}));
