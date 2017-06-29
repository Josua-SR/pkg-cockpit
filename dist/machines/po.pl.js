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
 "$0 is available for most operating systems. To install it, search for it in GNOME Software or run the following:": [
  null,
  "$0 jest dostępne dla większości systemów operacyjnych. Aby zainstalować, wyszukaj w Menedżerze oprogramowania GNOME lub wykonaj polecenie:"
 ],
 "Address:": [
  null,
  "Adres:"
 ],
 "Autostart:": [
  null,
  "Automatyczne uruchamianie:"
 ],
 "Available": [
  null,
  "Dostępne"
 ],
 "Boot Order:": [
  null,
  "Kolejność uruchamiania:"
 ],
 "Bus": [
  null,
  "Magistrala"
 ],
 "CPU Type:": [
  null,
  "Typ procesora:"
 ],
 "Capacity": [
  null,
  "Pojemność"
 ],
 "Clicking \"Launch Remote Viewer\" will download a .vv file and launch $0.": [
  null,
  "Kliknięcie „Uruchom zdalną przeglądarkę” pobierze plik .vv i uruchomi $0."
 ],
 "Connect with Remote Viewer": [
  null,
  "Połącz ze zdalną przeglądarką"
 ],
 "Connect with any $0 viewer application.": [
  null,
  "Połącz z dowolną przeglądarką $0."
 ],
 "Connect with any SPICE or VNC viewer application.": [
  null,
  "Połącz z dowolną przeglądarką Spice lub VNC."
 ],
 "Connection": [
  null,
  "Połączenie"
 ],
 "Console": [
  null,
  "Konsola"
 ],
 "Count:": [
  null,
  "Liczba:"
 ],
 "Device": [
  null,
  "Urządzenie"
 ],
 "Disks": [
  null,
  "Dyski"
 ],
 "Download the MSI from $0": [
  null,
  "Pobierz plik MSI z $0"
 ],
 "Emulated Machine:": [
  null,
  "Emulowany komputer:"
 ],
 "File": [
  null,
  "Plik"
 ],
 "Force Restart": [
  null,
  "Wymuś ponowne uruchomienie"
 ],
 "Force Shut Down": [
  null,
  "Wymuś wyłączenie"
 ],
 "GB": [
  null,
  "GB"
 ],
 "Host": [
  null,
  "Gospodarz"
 ],
 "Launch Remote Viewer": [
  null,
  "Uruchom zdalną przeglądarkę"
 ],
 "Manual Connection": [
  null,
  "Ręczne połączenie"
 ],
 "Memory:": [
  null,
  "Pamięć:"
 ],
 "More Information": [
  null,
  "Więcej informacji"
 ],
 "Name": [
  null,
  "Nazwa"
 ],
 "No VM is running or defined on this host": [
  null,
  "Brak uruchomionych lub określonych maszyn wirtualnych na tym gospodarzu"
 ],
 "No boot device found": [
  null,
  "Nie odnaleziono żadnego urządzenia startowego"
 ],
 "No disks defined for this VM": [
  null,
  "Nie określono dysków dla tej maszyny wirtualnej"
 ],
 "No graphics console is defined for this virtual machine.": [
  null,
  "Dla tej maszyny wirtualnej nie określono żadnej konsoli graficznej."
 ],
 "Overview": [
  null,
  "Przegląd"
 ],
 "Please start the virtual machine to access its graphics console.": [
  null,
  "Proszę uruchomić maszynę wirtualną, aby uzyskać dostęp do jej konsoli graficznej."
 ],
 "Pool": [
  null,
  "Pula"
 ],
 "Port": [
  null,
  "Port"
 ],
 "Protocol": [
  null,
  "Protokół"
 ],
 "Readonly": [
  null,
  "Tylko do odczytu"
 ],
 "Restart": [
  null,
  "Uruchom ponownie"
 ],
 "Run": [
  null,
  "Uruchom"
 ],
 "SPICE": [
  null,
  "Spice"
 ],
 "SPICE Address:": [
  null,
  "Adres Spice:"
 ],
 "SPICE Port:": [
  null,
  "Port Spice:"
 ],
 "SPICE TLS Port:": [
  null,
  "Port TLS Spice:"
 ],
 "Session": [
  null,
  "Sesja"
 ],
 "Shut Down": [
  null,
  "Wyłącz"
 ],
 "Source": [
  null,
  "Źródło"
 ],
 "State": [
  null,
  "Stan"
 ],
 "Switch to Desktop Viewer": [
  null,
  "Przełącz na przeglądarkę pulpitu"
 ],
 "Switch to In-Browser Viewer": [
  null,
  "Przełącz na przeglądarkę w przeglądarce internetowej"
 ],
 "System": [
  null,
  "System"
 ],
 "Target": [
  null,
  "Cel"
 ],
 "The VM crashed.": [
  null,
  "Maszyna wirtualna uległa awarii."
 ],
 "The VM is down.": [
  null,
  "Maszyna wirtualna jest wyłączona."
 ],
 "The VM is going down.": [
  null,
  "Maszyna wirtualna jest wyłączana."
 ],
 "The VM is idle.": [
  null,
  "Maszyna wirtualna jest bezczynna."
 ],
 "The VM is in process of dying (shut down or crash is not completed).": [
  null,
  "Maszyna wirtualna jest w trakcie umierania (wyłączanie lub nie ukończono awarii)."
 ],
 "The VM is paused.": [
  null,
  "Maszyna wirtualna jest wstrzymana."
 ],
 "The VM is running.": [
  null,
  "Maszyna wirtualna jest uruchomiona."
 ],
 "The VM is suspended by guest power management.": [
  null,
  "Maszyna wirtualna jest uśpiona przez zarządzanie zasilaniem."
 ],
 "Upgrade to a more recent version of libvirt to view disk statistics": [
  null,
  "Należy zaktualizować do nowszej wersji biblioteki libvirt, aby przeglądać statystyki dysku"
 ],
 "Usage": [
  null,
  "Użycie"
 ],
 "Used": [
  null,
  "Używane"
 ],
 "VM FORCE OFF action failed": [
  null,
  "Działanie VM FORCE OFF się nie powiodło"
 ],
 "VM FORCE REBOOT action failed": [
  null,
  "Działanie VM FORCE REBOOT się nie powiodło"
 ],
 "VM REBOOT action failed": [
  null,
  "Działanie VM REBOOT się nie powiodło"
 ],
 "VM SHUT DOWN action failed": [
  null,
  "Działanie VM SHUT DOWN się nie powiodło"
 ],
 "VM START action failed": [
  null,
  "Działanie VM START się nie powiodło"
 ],
 "VNC": [
  null,
  "VNC"
 ],
 "VNC Address:": [
  null,
  "Adres VNC:"
 ],
 "VNC Port:": [
  null,
  "Port VNC:"
 ],
 "VNC TLS Port:": [
  null,
  "Port TLS VNC:"
 ],
 "Virtual Machines": [
  null,
  "Maszyny wirtualne"
 ],
 "Volume": [
  null,
  "Wolumin"
 ],
 "Your browser does not support iframes.": [
  null,
  "Przeglądarka nie obsługuje „iframe”."
 ],
 "cdrom": [
  null,
  "CD-ROM"
 ],
 "crashed": [
  null,
  "uległo awarii"
 ],
 "custom": [
  null,
  "niestandardowe"
 ],
 "disabled": [
  null,
  "wyłączone"
 ],
 "disk": [
  null,
  "dysk"
 ],
 "dying": [
  null,
  "w trakcie umierania"
 ],
 "enabled": [
  null,
  "włączone"
 ],
 "host": [
  null,
  "gospodarz"
 ],
 "idle": [
  null,
  "bezczynne"
 ],
 "network": [
  null,
  "sieć"
 ],
 "no": [
  null,
  "nie"
 ],
 "other": [
  null,
  "inne"
 ],
 "paused": [
  null,
  "wstrzymane"
 ],
 "running": [
  null,
  "działanie"
 ],
 "shut off": [
  null,
  "wyłącz"
 ],
 "shutdown": [
  null,
  "wyłączenie"
 ],
 "suspended (PM)": [
  null,
  "uśpione (PM)"
 ],
 "vCPUs:": [
  null,
  "Wirtualne procesory:"
 ],
 "yes": [
  null,
  "tak"
 ]
}));
