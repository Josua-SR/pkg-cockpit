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
  "x-generator": "Zanata 4.6.2"
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
  "Kompresowanie zrzutów awarii, aby oszczędzać miejsce"
 ],
 "Compression": [
  null,
  "Kompresja"
 ],
 "Crash dump location": [
  null,
  "Położenie zrzutu awarii"
 ],
 "Crash system": [
  null,
  "System awarii"
 ],
 "Directory": [
  null,
  "Katalog"
 ],
 "Directory $0 isn't writable or doesn't exist.": [
  null,
  "Katalog $0 nie jest zapisywalny lub nie istnieje."
 ],
 "Kdump service not installed. Please ensure package kexec-tools is installed.": [
  null,
  "Usługa Kdump nie jest zainstalowana. Proszę się upewnić, że pakiet kexec-tools jest zainstalowany."
 ],
 "Kernel Dump": [
  null,
  "Zrzut jądra"
 ],
 "Loading...": [
  null,
  "Wczytywanie…"
 ],
 "Local Filesystem": [
  null,
  "Lokalny system plików"
 ],
 "Location": [
  null,
  "Położenie"
 ],
 "More details": [
  null,
  "Więcej informacji"
 ],
 "Mount": [
  null,
  "Zamontuj"
 ],
 "No configuration found": [
  null,
  "Nie odnaleziono konfiguracji"
 ],
 "No memory reserved. Append a crashkernel option to the kernel command line (e.g. in /etc/default/grub) to reserve memory at boot time. Example: crashkernel=512M": [
  null,
  "Brak zastrzeżonej pamięci. Proszę dodać opcję crashkernel do wiersza poleceń jądra (tzn. w /etc/default/grub), aby zastrzec pamięć w czasie uruchamiania. Przykład: crashkernel=512M"
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
  "Na zamontowanym urządzeniu"
 ],
 "Raw to a device": [
  null,
  "Surowe do urządzenia"
 ],
 "Reading...": [
  null,
  "Odczytywanie…"
 ],
 "Remote over NFS": [
  null,
  "Zdalnie przez NFS"
 ],
 "Remote over SSH": [
  null,
  "Zdalnie przez SSH"
 ],
 "Reserved memory": [
  null,
  "Zastrzeżona pamięć"
 ],
 "Server": [
  null,
  "Serwer"
 ],
 "Service has an error": [
  null,
  "Usługa ma błąd"
 ],
 "Service is running": [
  null,
  "Usługa jest uruchomiona"
 ],
 "Service is starting": [
  null,
  "Usługa jest uruchamiana"
 ],
 "Service is stopped": [
  null,
  "Usługa jest zatrzymana"
 ],
 "Service is stopping": [
  null,
  "Usługa jest zatrzymywana"
 ],
 "Test Configuration": [
  null,
  "Przetestuj konfigurację"
 ],
 "Test is only available while the kdump service is running.": [
  null,
  "Test jest dostępny tylko, jeśli usługa kdump jest uruchomiona."
 ],
 "Test kdump settings": [
  null,
  "Przetestuj ustawienia kdump"
 ],
 "This will test kdump settings by crashing the kernel and thereby the system. Depending on the settings, the system may not automatically reboot and the process may take a while.": [
  null,
  "Przetestuje to ustawienia kdump przez zawieszenie jądra, a razem z tym komputera. W zależności od ustawień, komputer może nie zostać automatycznie włączony ponownie, a cały proces może chwilę zająć."
 ],
 "This will test the kdump configuration by crashing the kernel.": [
  null,
  "Przetestuje to konfigurację kdump przez zawieszenie jądra."
 ],
 "Unable to apply settings: $0": [
  null,
  "Nie można zastosować ustawień: $0"
 ],
 "invalid: multiple targets defined": [
  null,
  "nieprawidłowe: podano wiele celów"
 ],
 "kdump status": [
  null,
  "stan kdump"
 ],
 "locally in $0": [
  null,
  "lokalnie w $0"
 ],
 "nfs dump target isn't formated as server:path": [
  null,
  "cel zrzutu NFS nie jest sformatowany jako serwer:ścieżka"
 ],
 "ssh key": [
  null,
  "klucz SSH"
 ],
 "ssh key isn't a path": [
  null,
  "klucz SSH nie jest ścieżką"
 ],
 "ssh server is empty": [
  null,
  "serwer SSH jest pusty"
 ],
 "undefined": [
  null,
  "nieokreślone"
 ]
}));
