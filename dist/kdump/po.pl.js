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
nplurals=3; plural=n==1 ? 0 : n%10>=2 && n%10<=4 && (n%100<10 || n%100>=20) ? 1 : 2;
return plural;
},
  "language": "pl",
  "x-generator": "Zanata 3.9.6"
 },
 "Apply": [
  null,
  "Zastosuj"
 ],
 "Cancel": [
  null,
  "Anuluj"
 ],
 "Compress crash dumps to save space": [
  null,
  ""
 ],
 "Compression": [
  null,
  ""
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
  "Katalog"
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
  "Uszkodzona konfiguracja"
 ],
 "Loading...": [
  null,
  "Wczytywanie…"
 ],
 "Local Filesystem": [
  null,
  "Brak systemu plików"
 ],
 "Location": [
  null,
  "Położenie punktu montowania"
 ],
 "More details": [
  null,
  "informacje o rozwiązaniu"
 ],
 "Mount": [
  null,
  "Zamontuj"
 ],
 "No configuration found": [
  null,
  "Uszkodzona konfiguracja"
 ],
 "No memory reserved. Append a crashkernel option to the kernel command line (e.g. in /etc/default/grub) to reserve memory at boot time. Example: crashkernel=512M": [
  null,
  ""
 ],
 "None": [
  null,
  "Brak"
 ],
 "Off": [
  null,
  "Wyłączone"
 ],
 "Ok": [
  null,
  "OK"
 ],
 "On": [
  null,
  "Włączone"
 ],
 "On a mounted device": [
  null,
  ""
 ],
 "Raw to a device": [
  null,
  "Urządzenie blokowe Rados"
 ],
 "Reading...": [
  null,
  "Odczytywanie"
 ],
 "Remote over NFS": [
  null,
  "Usuń rolę"
 ],
 "Remote over SSH": [
  null,
  "Usuń rolę"
 ],
 "Reserved memory": [
  null,
  ""
 ],
 "Server": [
  null,
  "Serwer"
 ],
 "Service has an error": [
  null,
  "Nazwa usługi"
 ],
 "Service is running": [
  null,
  "Maszyna wirtualna jest uruchomiona."
 ],
 "Service is starting": [
  null,
  "Komputer jest ponownie uruchamiany"
 ],
 "Service is stopped": [
  null,
  "Usługi"
 ],
 "Service is stopping": [
  null,
  "Dzienniki serwera"
 ],
 "Test Configuration": [
  null,
  "Konfiguracja"
 ],
 "Test is only available while the kdump service is running.": [
  null,
  ""
 ],
 "Test kdump settings": [
  null,
  "Ustawienia zespołu"
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
  "Nie można pobrać alarmu: $0"
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
  "nieokreślone"
 ]
}));
