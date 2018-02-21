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
  "$0 jest dostępne dla większości systemów operacyjnych. Aby zainstalować, należy wyszukać w Menedżerze oprogramowania GNOME lub wykonać polecenie:"
 ],
 "Additional": [
  null,
  "Dodatkowe"
 ],
 "Address": [
  null,
  "Adres"
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
 "CHANGE NETWORK STATE action failed": [
  null,
  "Działanie CHANGE NETWORK STATE się nie powiodło"
 ],
 "CPU Type:": [
  null,
  "Typ procesora:"
 ],
 "Cancel": [
  null,
  "Anuluj"
 ],
 "Capacity": [
  null,
  "Pojemność"
 ],
 "Clicking \"Launch Remote Viewer\" will download a .vv file and launch $0.": [
  null,
  "Kliknięcie „Uruchom zdalną przeglądarkę” pobierze plik .vv i uruchomi $0."
 ],
 "Confirm deletion of $0": [
  null,
  "Proszę potwierdzić usunięcie $0"
 ],
 "Connect with any $0 viewer application.": [
  null,
  "Połącz z dowolną przeglądarką $0."
 ],
 "Connect with any SPICE or VNC viewer application.": [
  null,
  "Połącz z dowolną przeglądarką SPICE lub VNC."
 ],
 "Connection": [
  null,
  "Połączenie"
 ],
 "Console Type": [
  null,
  "Typ konsoli"
 ],
 "Consoles": [
  null,
  "Konsole"
 ],
 "Count:": [
  null,
  "Liczba:"
 ],
 "Create": [
  null,
  "Utwórz"
 ],
 "Create New VM": [
  null,
  "Utwórz nową maszynę wirtualną"
 ],
 "Create New Virtual Machine": [
  null,
  "Utwórz nową maszynę wirtualną"
 ],
 "Delete": [
  null,
  "Usuń"
 ],
 "Delete associated storage files:": [
  null,
  "Usunięcie powiązanych plików urządzeń do przechowywania danych:"
 ],
 "Device": [
  null,
  "Urządzenie"
 ],
 "Disconnect": [
  null,
  "Rozłącz"
 ],
 "Disconnected from serial console. Click the Reconnect button.": [
  null,
  "Rozłączono z konsoli szeregowej. Proszę kliknąć przycisk „Połącz ponownie”."
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
 "Filesystem": [
  null,
  "System plików"
 ],
 "Force Restart": [
  null,
  "Wymuś ponowne uruchomienie"
 ],
 "Force Shut Down": [
  null,
  "Wymuś wyłączenie"
 ],
 "GiB": [
  null,
  "GiB"
 ],
 "Graphics Console (VNC)": [
  null,
  "Konsola graficzna (VNC)"
 ],
 "Graphics Console in Desktop Viewer": [
  null,
  "Konsola graficzna w przeglądarce pulpitu"
 ],
 "Host": [
  null,
  "Gospodarz"
 ],
 "INSTALL VM action failed": [
  null,
  "Działanie INSTALL VM się nie powiodło"
 ],
 "Immediately Start VM": [
  null,
  "Od razu uruchom maszynę wirtualną"
 ],
 "Install": [
  null,
  "Zainstaluj"
 ],
 "Installation Source": [
  null,
  "Źródło instalacji"
 ],
 "Installation Source Type": [
  null,
  "Typ źródła instalacji"
 ],
 "Installation Source should not be empty": [
  null,
  "Źródło instalacji nie może być puste"
 ],
 "Invalid filename": [
  null,
  "Nieprawidłowa nazwa pliku"
 ],
 "Launch Remote Viewer": [
  null,
  "Uruchom zdalną przeglądarkę"
 ],
 "Loading ...": [
  null,
  "Wczytywanie…"
 ],
 "MAC Address": [
  null,
  "Adres MAC"
 ],
 "MTU": [
  null,
  "MTU"
 ],
 "Managed": [
  null,
  "Zarządzane"
 ],
 "Manual Connection": [
  null,
  "Ręczne połączenie"
 ],
 "Memory": [
  null,
  "Pamięć"
 ],
 "Memory should be positive number": [
  null,
  "Pamięć musi być liczbą dodatnią"
 ],
 "Memory:": [
  null,
  "Pamięć:"
 ],
 "MiB": [
  null,
  "MiB"
 ],
 "Model type": [
  null,
  "Typ modelu"
 ],
 "More Information": [
  null,
  "Więcej informacji"
 ],
 "Name": [
  null,
  "Nazwa"
 ],
 "Name should not be empty": [
  null,
  "Nazwa nie może być pusta"
 ],
 "Name should not consist of empty characters only": [
  null,
  "Nazwa nie może składać się tylko z pustych znaków"
 ],
 "Networks": [
  null,
  "Sieci"
 ],
 "No VM is running or defined on this host": [
  null,
  "Brak uruchomionych lub określonych maszyn wirtualnych na tym gospodarzu"
 ],
 "No boot device found": [
  null,
  "Nie odnaleziono żadnego urządzenia startowego"
 ],
 "No console defined for this virtual machine.": [
  null,
  "Dla tej maszyny wirtualnej nie określono żadnej konsoli."
 ],
 "No disks defined for this VM": [
  null,
  "Nie określono dysków dla tej maszyny wirtualnej"
 ],
 "No matching files found": [
  null,
  "Nie odnaleziono pasujących plików"
 ],
 "No network interfaces defined for this VM": [
  null,
  "Nie określono interfejsów sieciowych dla tej maszyny wirtualnej"
 ],
 "OS Vendor": [
  null,
  "Producent systemu operacyjnego"
 ],
 "Ok": [
  null,
  "OK"
 ],
 "Operating System": [
  null,
  "System operacyjny"
 ],
 "Overview": [
  null,
  "Przegląd"
 ],
 "Path to ISO file on host's file system": [
  null,
  "Ścieżka do pliku ISO w systemie plików gospodarza"
 ],
 "Path to file": [
  null,
  "Ścieżka do pliku"
 ],
 "Please start the virtual machine to access its console.": [
  null,
  "Proszę uruchomić maszynę wirtualną, aby uzyskać dostęp do jej konsoli."
 ],
 "Plug": [
  null,
  "Podłącz"
 ],
 "Pool": [
  null,
  "Pula"
 ],
 "Port": [
  null,
  "Port"
 ],
 "Portgroup": [
  null,
  "Grupa portów"
 ],
 "Protocol": [
  null,
  "Protokół"
 ],
 "Readonly": [
  null,
  "Tylko do odczytu"
 ],
 "Reconnect": [
  null,
  "Połącz ponownie"
 ],
 "Remote URL": [
  null,
  "Zdalny adres URL"
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
  "SPICE"
 ],
 "SPICE Address:": [
  null,
  "Adres SPICE:"
 ],
 "SPICE Port:": [
  null,
  "Port SPICE:"
 ],
 "SPICE TLS Port:": [
  null,
  "Port TLS SPICE:"
 ],
 "Send Non-Maskable Interrupt": [
  null,
  "Wyślij niemaskowalne przerwanie"
 ],
 "Send shortcut": [
  null,
  "Wyślij skrót"
 ],
 "Serial Console": [
  null,
  "Konsola szeregowa"
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
 "Source should start with http, ftp or nfs protocol": [
  null,
  "Źródło musi zaczynać się od protokołu http, ftp lub nfs"
 ],
 "Start the VM to see disk statistics.": [
  null,
  "Należy uruchomić maszynę wirtualną, aby wyświetlić statystyki dysku."
 ],
 "State": [
  null,
  "Stan"
 ],
 "Storage Size": [
  null,
  "Rozmiar urządzenia do przechowywania danych"
 ],
 "Storage Size should not be negative number": [
  null,
  "Rozmiar urządzenia do przechowywania danych nie może być liczbą ujemną"
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
 "The VM is running and will be forced off before deletion.": [
  null,
  "Maszyna wirtualna jest uruchomiona i przed jej usunięciem zostanie wymuszone jej wyłączenie."
 ],
 "The VM is running.": [
  null,
  "Maszyna wirtualna jest uruchomiona."
 ],
 "The VM is suspended by guest power management.": [
  null,
  "Maszyna wirtualna jest uśpiona przez zarządzanie zasilaniem."
 ],
 "Too many files found": [
  null,
  "Odnaleziono za dużo plików"
 ],
 "Type": [
  null,
  "Typ"
 ],
 "URL": [
  null,
  "Adres URL"
 ],
 "Unplug": [
  null,
  "Odłącz"
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
 "VM SEND Non-Maskable Interrrupt action failed": [
  null,
  "Działanie VM SEND niemaskowalnego przerwania się nie powiodło"
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
 "Virtualport": [
  null,
  "Port wirtualny"
 ],
 "Volume": [
  null,
  "Wolumin"
 ],
 "Your browser does not support iframes.": [
  null,
  "Przeglądarka nie obsługuje „iframe”."
 ],
 "bridge": [
  null,
  "mostek"
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
 "direct": [
  null,
  "bezpośrednie"
 ],
 "disabled": [
  null,
  "wyłączone"
 ],
 "disk": [
  null,
  "dysk"
 ],
 "down": [
  null,
  "w dół"
 ],
 "dying": [
  null,
  "w trakcie umierania"
 ],
 "enabled": [
  null,
  "włączone"
 ],
 "ethernet": [
  null,
  "Ethernet"
 ],
 "host": [
  null,
  "gospodarz"
 ],
 "hostdev": [
  null,
  "urządzenie gospodarza"
 ],
 "idle": [
  null,
  "bezczynne"
 ],
 "mcast": [
  null,
  "multicast"
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
 "server": [
  null,
  "serwer"
 ],
 "show less": [
  null,
  "wyświetl mniej"
 ],
 "show more": [
  null,
  "wyświetl więcej"
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
 "udp": [
  null,
  "UDP"
 ],
 "undefined": [
  null,
  "nieokreślone"
 ],
 "up": [
  null,
  "w górę"
 ],
 "user": [
  null,
  "użytkownik"
 ],
 "vCPUs:": [
  null,
  "Wirtualne procesory:"
 ],
 "vhostuser": [
  null,
  "użytkownik gospodarza wirtualizacji"
 ],
 "yes": [
  null,
  "tak"
 ]
}));
